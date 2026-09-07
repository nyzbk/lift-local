import fileSaver from "file-saver";
import type { LiftFormat } from "./types";
import { EXT } from "./presets";

const saveAs =
  typeof fileSaver === "function"
    ? fileSaver
    : (fileSaver as { saveAs: typeof fileSaver }).saveAs;

export function sanitizeStem(name: string) {
  const base = name.replace(/\.[^.]+$/, "");
  return base.replace(/[^\w.-]+/g, "-").replace(/-+/g, "-").slice(0, 80) || "audio";
}

export function downloadAudio(blob: Blob, originalName: string, format: LiftFormat) {
  const filename = `lift-${sanitizeStem(originalName)}.${EXT[format]}`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  try { saveAs(blob, filename); } catch { /* iOS */ }
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  return filename;
}
