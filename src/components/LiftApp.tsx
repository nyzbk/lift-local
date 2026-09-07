import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { DropZone } from "./DropZone";
import { FormatBar } from "./FormatBar";
import { ResultCard } from "./ResultCard";
import { AdUnit } from "./AdUnit";
import { extractAudio } from "@/lib/lift/extract";
import { loadSampleClip } from "@/lib/lift/sample-clip";
import { downloadAudio } from "@/lib/lift/download";
import { formatBytes, formatDuration, probeFile } from "@/lib/lift/probe";
import { FAIL_COPY } from "@/lib/lift/errors";
import { DEFAULT_PRESET, isMobileDevice, sizeLimitBytes } from "@/lib/lift/presets";
import { LiftError, type ExtractResult, type LiftPreset, type ProbeInfo } from "@/lib/lift/types";

export function LiftApp() {
  const [file, setFile] = useState<File | null>(null);
  const [probe, setProbe] = useState<ProbeInfo | null>(null);
  const [preset, setPreset] = useState<LiftPreset>(DEFAULT_PRESET);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [engine, setEngine] = useState<"mediabunny" | "ffmpeg" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showTrim, setShowTrim] = useState(false);
  const [trimStart, setTrimStart] = useState("");
  const [trimEnd, setTrimEnd] = useState("");
  const jobRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => { setMobile(isMobileDevice()); }, []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    jobRef.current += 1;
    setFile(null); setProbe(null); setBusy(false); setProgress(0);
    setEngine(null); setError(null); setResult(null);
    setPreviewUrl((url) => { if (url) URL.revokeObjectURL(url); return null; });
  }, []);

  const onFile = useCallback(async (next: File) => {
    reset();
    setFile(next);
    if (next.size > sizeLimitBytes()) setError(FAIL_COPY["too-large"]);
    const info = await probeFile(next);
    setProbe(info);
    if (info.hasAudio === false) setError(FAIL_COPY["audio-missing"]);
    else if (info.hasVideo === false && next.type.startsWith("audio/")) setError(FAIL_COPY["audio-only"]);
  }, [reset]);

  const run = useCallback(async () => {
    if (!file) return;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    const jobId = ++jobRef.current;
    setBusy(true); setError(null); setResult(null); setProgress(0); setEngine("mediabunny");
    const start = Number(trimStart); const end = Number(trimEnd);
    const trim = showTrim && Number.isFinite(start) && Number.isFinite(end) && end > start ? { start, end } : undefined;
    try {
      const out = await extractAudio({
        file, preset, trim, jobId, signal: ac.signal,
        onProgress: (p) => { if (jobRef.current === jobId) setProgress(p); },
      });
      if (jobRef.current !== jobId) return;
      setEngine(out.engine);
      setResult(out);
      setPreviewUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(out.blob); });
    } catch (err) {
      if (jobRef.current !== jobId) return;
      if (err instanceof LiftError) {
        if (err.code !== "cancelled") setError(FAIL_COPY[err.code] ?? err.message);
      } else setError(FAIL_COPY["invalid-conversion"]);
    } finally {
      if (jobRef.current === jobId) setBusy(false);
    }
  }, [file, preset, showTrim, trimStart, trimEnd]);

  return (
    <section className="space-y-6">
      {mobile ? (
        <p className="border-accent/40 bg-surface-2 text-ink rounded-md border px-4 py-3 text-sm">
          Phones struggle with large videos — 60 MB max here. Save the result to Files.
        </p>
      ) : null}
      {!file ? <DropZone disabled={busy} onFile={(f) => void onFile(f)} /> : null}
      {file ? (
        <div className="border-line bg-surface flex flex-wrap items-start justify-between gap-4 rounded-lg border p-4">
          <div>
            <p className="text-ink font-medium">{probe?.name ?? file.name}</p>
            <p className="text-muted font-mono mt-1 text-sm tabular-nums">
              {probe
                ? `${formatBytes(probe.sizeBytes)} · ${formatDuration(probe.duration)} · audio ${probe.hasAudio === null ? "checking…" : probe.hasAudio ? "yes" : "no"}`
                : `${formatBytes(file.size)} · reading…`}
            </p>
          </div>
          <button type="button" className="text-muted hover:text-ink min-h-11 text-sm" onClick={reset}>Remove</button>
        </div>
      ) : null}
      {file ? <FormatBar value={preset} onChange={setPreset} /> : null}
      {file ? (
        <div>
          <button type="button" className="text-muted min-h-11 text-sm underline-offset-4 hover:underline" onClick={() => setShowTrim((v) => !v)}>
            {showTrim ? "Hide optional trim" : "Optional start / end (seconds)"}
          </button>
          {showTrim ? (
            <div className="mt-3 flex flex-wrap gap-3">
              <label className="text-muted text-sm">Start
                <input inputMode="decimal" value={trimStart} onChange={(e) => setTrimStart(e.target.value)} className="border-line bg-surface text-ink ml-2 min-h-11 w-24 rounded-md border px-2" />
              </label>
              <label className="text-muted text-sm">End
                <input inputMode="decimal" value={trimEnd} onChange={(e) => setTrimEnd(e.target.value)} className="border-line bg-surface text-ink ml-2 min-h-11 w-24 rounded-md border px-2" />
              </label>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <button type="button" disabled={!file || busy || error === FAIL_COPY["audio-missing"]} onClick={() => void run()}
          className="bg-accent text-bg min-h-11 rounded-md px-6 py-2.5 font-medium disabled:opacity-40">Extract audio</button>
        {!file ? (
          <button type="button" disabled={busy} onClick={() => void loadSampleClip().then(onFile).catch(() => setError("Sample clip missing."))}
            className="border-line text-ink min-h-11 rounded-md border px-5 py-2.5">Try a sample clip</button>
        ) : null}
        {busy ? <button type="button" onClick={() => abortRef.current?.abort()} className="text-danger min-h-11 px-3">Cancel</button> : null}
      </div>
      {busy ? (
        <div className="space-y-2">
          <div className="bg-line h-1 overflow-hidden rounded-full">
            <div className="bg-accent h-full transition-[width] duration-200" style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
          <p className="text-muted font-mono text-xs">
            {engine === "ffmpeg" ? "Extracting with local FFmpeg (from this site, not a CDN)" : "Extracting with Mediabunny (this device)"}
            {progress > 0 ? ` · ${Math.round(progress * 100)}%` : " · still working"}
          </p>
        </div>
      ) : null}
      {error ? <p className="text-danger text-sm">{error}</p> : null}
      {result && previewUrl ? (
        <>
          <ResultCard result={result} previewUrl={previewUrl}
            onDownload={() => downloadAudio(result.blob, file?.name ?? "audio", result.format)} onReset={reset} />
          <AdUnit slot="after-success" />
        </>
      ) : null}
      <ol className="text-muted mt-4 grid gap-4 text-sm sm:grid-cols-3">
        <li className="bg-surface border-line rounded-md border p-4">
          <span className="text-accent font-mono text-xs">01</span>
          <p className="text-ink mt-2 font-medium">Drop a local video</p>
          <p className="mt-1">No URL field. The bytes stay in this tab.</p>
        </li>
        <li className="bg-surface border-line rounded-md border p-4">
          <span className="text-accent font-mono text-xs">02</span>
          <p className="text-ink mt-2 font-medium">Pick MP3, M4A or WAV</p>
          <p className="mt-1">Default is MP3 192. <Link to="/how-to" className="text-accent">How it works</Link>.</p>
        </li>
        <li className="bg-surface border-line rounded-md border p-4">
          <span className="text-accent font-mono text-xs">03</span>
          <p className="text-ink mt-2 font-medium">Save, then close the tab</p>
          <p className="mt-1">On iPhone use <Link to="/iphone" className="text-accent">Files, not Photos</Link>.</p>
        </li>
      </ol>
    </section>
  );
}
