import type { FailCode } from "./types";

export const FAIL_COPY: Record<FailCode, string> = {
  "unsupported-browser":
    "This browser can’t extract audio on-device. Try Chrome or Edge on a computer.",
  "invalid-conversion":
    "Couldn’t decode this file. Export MP4 from the camera or recorder app.",
  drm: "This file is protected. Lift only works on regular MP4 / MOV / WebM.",
  "audio-missing":
    "No audio track in this file. Lift needs a soundtrack to lift.",
  "audio-only": "This looks like audio. Lift extracts from video.",
  "empty-output": "Nothing was written. Try M4A or a shorter file.",
  timeout: "This is taking too long. Try a shorter file or M4A.",
  oom: "The browser ran out of memory. Use a smaller file or a computer.",
  "assets-missing": "Engine assets missing (dev: postinstall).",
  "too-large":
    "This file is too large for this device. Try a shorter clip (under 150 MB on a computer, 60 MB on a phone). Lift never uploads — the limit is your browser’s memory.",
  cancelled: "Extract cancelled.",
  "url-rejected":
    "Lift does not fetch URLs. Drop a file from this device. This is not a YouTube converter.",
};
