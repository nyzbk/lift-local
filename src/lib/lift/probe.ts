import { ALL_FORMATS, BlobSource, Input } from "mediabunny";
import type { ProbeInfo } from "./types";

export async function probeFile(file: File): Promise<ProbeInfo> {
  const base: ProbeInfo = {
    name: file.name,
    sizeBytes: file.size,
    duration: 0,
    width: 0,
    height: 0,
    hasVideo: /\.(mp4|mov|webm|mkv|m4v)$/i.test(file.name) || file.type.startsWith("video/"),
    hasAudio: null,
  };
  try {
    const input = new Input({ source: new BlobSource(file), formats: ALL_FORMATS });
    const [audio, video, duration] = await Promise.all([
      input.getPrimaryAudioTrack().catch(() => null),
      input.getPrimaryVideoTrack().catch(() => null),
      input.computeDuration().catch(() => 0),
    ]);
    base.hasAudio = Boolean(audio);
    base.hasVideo = Boolean(video);
    base.duration = Number.isFinite(duration) ? duration : 0;
    return base;
  } catch {
    return probeWithElement(file, base);
  }
}

function probeWithElement(file: File, base: ProbeInfo): Promise<ProbeInfo> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    let settled = false;
    const finish = (info: ProbeInfo) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      URL.revokeObjectURL(url);
      video.removeAttribute("src");
      video.load();
      resolve(info);
    };
    const timer = window.setTimeout(() => finish({ ...base, hasAudio: null }), 8000);
    video.onloadedmetadata = () => {
      finish({
        ...base,
        duration: Number.isFinite(video.duration) ? video.duration : 0,
        width: video.videoWidth || 0,
        height: video.videoHeight || 0,
        hasVideo: (video.videoWidth || 0) > 0,
        hasAudio: null,
      });
    };
    video.onerror = () => finish(base);
    video.src = url;
  });
}

export function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

export function formatDuration(s: number) {
  if (!s || !Number.isFinite(s)) return "—";
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}
