import { extractWithMediabunny } from "./mediabunny-engine";
import { extractWithFfmpeg } from "./ffmpeg-engine";
import { EXT, sizeLimitBytes } from "./presets";
import { sanitizeStem } from "./download";
import type { ExtractRequest, ExtractResult } from "./types";
import { LiftError } from "./types";

export async function extractAudio(req: ExtractRequest): Promise<ExtractResult> {
  if (req.file.size > sizeLimitBytes()) {
    throw new LiftError(
      "too-large",
      "This file is too large for this device. Try a shorter clip (under 150 MB on a computer, 60 MB on a phone). Lift never uploads — the limit is your browser’s memory.",
    );
  }
  const filename = `lift-${sanitizeStem(req.file.name)}.${EXT[req.preset.format]}`;
  try {
    const blob = await extractWithMediabunny(req);
    return { blob, engine: "mediabunny", inputBytes: req.file.size, outputBytes: blob.size, format: req.preset.format, filename };
  } catch (err) {
    if (err instanceof LiftError) {
      if (err.code === "audio-missing" || err.code === "cancelled" || err.code === "too-large" || err.code === "audio-only") {
        throw err;
      }
    }
    if (req.signal.aborted) throw new LiftError("cancelled", "Extract cancelled.");
    const blob = await extractWithFfmpeg({
      file: req.file,
      format: req.preset.format,
      kbps: req.preset.kbps ?? 192,
      onProgress: req.onProgress,
      signal: req.signal,
    });
    return { blob, engine: "ffmpeg", inputBytes: req.file.size, outputBytes: blob.size, format: req.preset.format, filename };
  }
}
