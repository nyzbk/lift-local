export type QualityLevel = "low" | "medium" | "high";
export type LiftFormat = "mp3" | "m4a" | "wav";
export type LiftPresetId = "mp3-128" | "mp3-192" | "mp3-320" | "m4a" | "wav";
export type EngineKind = "mediabunny" | "ffmpeg";

export type ProbeInfo = {
  name: string;
  sizeBytes: number;
  duration: number;
  width: number;
  height: number;
  hasVideo: boolean;
  hasAudio: boolean | null;
};

export type LiftPreset = {
  id: LiftPresetId;
  label: string;
  format: LiftFormat;
  kbps?: number;
  q: QualityLevel;
};

export type ExtractRequest = {
  file: File;
  preset: LiftPreset;
  trim?: { start?: number; end?: number };
  jobId: number;
  onProgress: (p: number) => void;
  signal: AbortSignal;
};

export type ExtractResult = {
  blob: Blob;
  engine: EngineKind;
  inputBytes: number;
  outputBytes: number;
  format: LiftFormat;
  filename: string;
};

export type FailCode =
  | "unsupported-browser"
  | "invalid-conversion"
  | "drm"
  | "audio-missing"
  | "audio-only"
  | "empty-output"
  | "timeout"
  | "oom"
  | "assets-missing"
  | "too-large"
  | "cancelled"
  | "url-rejected";

export class LiftError extends Error {
  code: FailCode;
  constructor(code: FailCode, message: string) {
    super(message);
    this.name = "LiftError";
    this.code = code;
  }
}
