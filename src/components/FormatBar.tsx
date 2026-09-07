import { PRESETS } from "@/lib/lift/presets";
import type { LiftPreset, LiftPresetId } from "@/lib/lift/types";
const ORDER: LiftPresetId[] = ["mp3-128", "mp3-192", "mp3-320", "m4a", "wav"];
export function FormatBar({ value, onChange }: { value: LiftPreset; onChange: (preset: LiftPreset) => void }) {
  return (
    <fieldset>
      <legend className="text-muted mb-2 text-sm">Format</legend>
      <div className="flex flex-wrap gap-2">
        {ORDER.map((id) => {
          const preset = PRESETS[id];
          const active = value.id === id;
          return (
            <button key={id} type="button" onClick={() => onChange(preset)}
              className={`min-h-11 rounded-md border px-4 py-2 text-sm ${active ? "border-accent bg-accent text-bg" : "border-line bg-surface text-ink"}`}>
              {preset.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
