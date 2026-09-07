import type { ExtractResult } from "@/lib/lift/types";
import { formatBytes } from "@/lib/lift/probe";
export function ResultCard({ result, previewUrl, onDownload, onReset }: {
  result: ExtractResult; previewUrl: string; onDownload: () => void; onReset: () => void;
}) {
  return (
    <div className="border-line bg-surface space-y-4 rounded-lg border p-4">
      <p className="font-mono text-ok text-sm tabular-nums">
        {formatBytes(result.inputBytes)} video → {formatBytes(result.outputBytes)} {result.format.toUpperCase()}
        {result.engine === "ffmpeg" ? " · FFmpeg on this origin" : " · Mediabunny"}
      </p>
      <audio className="w-full" src={previewUrl} controls preload="metadata" />
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onDownload} className="bg-accent text-bg min-h-11 rounded-md px-5 py-2.5 font-medium">
          Download {result.format.toUpperCase()}
        </button>
        <button type="button" onClick={onReset} className="border-line text-ink min-h-11 rounded-md border px-5 py-2.5">
          Extract another
        </button>
      </div>
    </div>
  );
}
