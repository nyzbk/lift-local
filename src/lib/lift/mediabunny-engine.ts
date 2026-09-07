import {
  ALL_FORMATS,
  BlobSource,
  BufferTarget,
  Conversion,
  Input,
  Mp3OutputFormat,
  Mp4OutputFormat,
  Output,
  Quality,
  WavOutputFormat,
  canEncodeAudio,
} from "mediabunny";
import { registerMp3Encoder } from "@mediabunny/mp3-encoder";
import { MIME } from "./presets";
import type { ExtractRequest, LiftFormat } from "./types";
import { LiftError } from "./types";

async function ensureMp3Encoder() {
  if (!(await canEncodeAudio("mp3"))) {
    registerMp3Encoder();
  }
}

function outputFor(format: LiftFormat) {
  if (format === "mp3") {
    return new Output({
      format: new Mp3OutputFormat({ xingHeader: true }),
      target: new BufferTarget(),
    });
  }
  if (format === "m4a") {
    return new Output({
      format: new Mp4OutputFormat({ fastStart: "in-memory" }),
      target: new BufferTarget(),
    });
  }
  return new Output({ format: new WavOutputFormat(), target: new BufferTarget() });
}

export async function extractWithMediabunny(req: ExtractRequest): Promise<Blob> {
  if (req.preset.format === "mp3") await ensureMp3Encoder();
  const input = new Input({ source: new BlobSource(req.file), formats: ALL_FORMATS });
  const audioTrack = await input.getPrimaryAudioTrack();
  if (!audioTrack) {
    throw new LiftError("audio-missing", "No audio track in this file. Lift needs a soundtrack to lift.");
  }
  const output = outputFor(req.preset.format);
  const trim =
    req.trim &&
    typeof req.trim.start === "number" &&
    typeof req.trim.end === "number" &&
    req.trim.end > req.trim.start
      ? { start: req.trim.start, end: req.trim.end }
      : undefined;

  const conversion = await Conversion.init({
    input,
    output,
    tracks: "primary",
    tags: {},
    video: { discard: true },
    audio: {
      codec: req.preset.format === "mp3" ? "mp3" : req.preset.format === "m4a" ? "aac" : undefined,
      quality: new Quality(req.preset.q),
      bitrate: req.preset.kbps ? req.preset.kbps * 1000 : undefined,
    },
    trim,
    showWarnings: false,
  });

  if (!conversion.isValid) {
    throw new LiftError("invalid-conversion", "Couldn’t decode this file. Export MP4 from the camera or recorder app.");
  }

  conversion.onProgress = (p: number) => req.onProgress(Math.max(0, Math.min(0.99, p)));
  const onAbort = () => { void conversion.cancel(); };
  req.signal.addEventListener("abort", onAbort, { once: true });
  try {
    await conversion.execute();
  } catch (err) {
    if (req.signal.aborted) throw new LiftError("cancelled", "Extract cancelled.");
    throw err;
  } finally {
    req.signal.removeEventListener("abort", onAbort);
  }
  const buffer = (output.target as BufferTarget).buffer;
  if (!buffer || buffer.byteLength === 0) {
    throw new LiftError("empty-output", "Nothing was written. Try M4A or a shorter file.");
  }
  req.onProgress(1);
  return new Blob([buffer], { type: MIME[req.preset.format] });
}
