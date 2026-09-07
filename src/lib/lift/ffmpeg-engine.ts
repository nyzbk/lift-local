import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { MIME } from "./presets";
import type { LiftFormat } from "./types";
import { LiftError } from "./types";

let singleton: FFmpeg | null = null;
let loading: Promise<FFmpeg> | null = null;

async function headOk(url: string) {
  const r = await fetch(url, { method: "HEAD" });
  return r.ok;
}

export async function loadFfmpegSt(): Promise<FFmpeg> {
  if (singleton?.loaded) return singleton;
  if (loading) return loading;
  loading = (async () => {
    const jsOk = await headOk("/ffmpeg/ffmpeg-core.js");
    const wasmOk = await headOk("/ffmpeg/ffmpeg-core.wasm");
    if (!jsOk || !wasmOk) {
      throw new LiftError("assets-missing", "Engine assets missing (dev: postinstall).");
    }
    const ffmpeg = new FFmpeg();
    try {
      await ffmpeg.load({
        coreURL: await toBlobURL("/ffmpeg/ffmpeg-core.js", "text/javascript"),
        wasmURL: await toBlobURL("/ffmpeg/ffmpeg-core.wasm", "application/wasm"),
      });
    } catch {
      throw new LiftError(
        "unsupported-browser",
        "This browser can’t extract audio on-device. Try Chrome or Edge on a computer.",
      );
    }
    singleton = ffmpeg;
    return ffmpeg;
  })();
  return loading;
}

export async function extractWithFfmpeg(opts: {
  file: File;
  format: LiftFormat;
  kbps: number;
  onProgress: (n: number) => void;
  signal?: AbortSignal;
}): Promise<Blob> {
  const ffmpeg = await loadFfmpegSt();
  const inName = "in" + (opts.file.name.match(/\.[a-z0-9]+$/i)?.[0] || ".mp4");
  const outName = opts.format === "mp3" ? "out.mp3" : opts.format === "m4a" ? "out.m4a" : "out.wav";
  await ffmpeg.writeFile(inName, await fetchFile(opts.file));
  ffmpeg.on("progress", ({ progress }) => opts.onProgress(Math.max(0, Math.min(1, progress))));
  const args =
    opts.format === "wav"
      ? ["-i", inName, "-vn", "-c:a", "pcm_s16le", "-ar", "44100", outName]
      : opts.format === "m4a"
        ? ["-i", inName, "-vn", "-c:a", "aac", "-b:a", `${opts.kbps}k`, "-movflags", "+faststart", outName]
        : ["-i", inName, "-vn", "-c:a", "libmp3lame", "-b:a", `${opts.kbps}k`, outName];
  const t = setTimeout(() => { void ffmpeg.terminate(); }, 180_000);
  const onAbort = () => { void ffmpeg.terminate(); };
  opts.signal?.addEventListener("abort", onAbort, { once: true });
  try {
    await ffmpeg.exec(args);
  } catch (err) {
    if (opts.signal?.aborted) throw new LiftError("cancelled", "Extract cancelled.");
    throw err;
  } finally {
    clearTimeout(t);
    opts.signal?.removeEventListener("abort", onAbort);
  }
  const data = await ffmpeg.readFile(outName);
  await ffmpeg.deleteFile(inName).catch(() => {});
  await ffmpeg.deleteFile(outName).catch(() => {});
  const u8 = data instanceof Uint8Array ? new Uint8Array(data) : new Uint8Array(0);
  if (u8.byteLength === 0) {
    throw new LiftError("empty-output", "Nothing was written. Try M4A or a shorter file.");
  }
  return new Blob([u8], { type: MIME[opts.format] });
}
