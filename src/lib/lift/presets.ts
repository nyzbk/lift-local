import type { LiftFormat, LiftPreset, LiftPresetId } from "./types";

export const PRESETS: Record<LiftPresetId, LiftPreset> = {
  "mp3-128": { id: "mp3-128", label: "Chat / 128 kbps", format: "mp3", kbps: 128, q: "low" },
  "mp3-192": { id: "mp3-192", label: "MP3 192 kbps", format: "mp3", kbps: 192, q: "medium" },
  "mp3-320": { id: "mp3-320", label: "Archive 320 kbps", format: "mp3", kbps: 320, q: "high" },
  m4a: { id: "m4a", label: "AAC / iPhone M4A", format: "m4a", kbps: 192, q: "high" },
  wav: { id: "wav", label: "WAV PCM", format: "wav", q: "high" },
};

export const DEFAULT_PRESET = PRESETS["mp3-192"];
export const ACCEPT = "video/mp4,video/quicktime,video/webm,video/x-matroska,.mp4,.mov,.webm,.mkv,.m4v";
export const DESKTOP_LIMIT_BYTES = 150 * 1024 * 1024;
export const MOBILE_LIMIT_BYTES = 60 * 1024 * 1024;
export const MIME: Record<LiftFormat, string> = {
  mp3: "audio/mpeg",
  m4a: "audio/mp4",
  wav: "audio/wav",
};
export const EXT: Record<LiftFormat, string> = { mp3: "mp3", m4a: "m4a", wav: "wav" };

export function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}
export function sizeLimitBytes() {
  return isMobileDevice() ? MOBILE_LIMIT_BYTES : DESKTOP_LIMIT_BYTES;
}
