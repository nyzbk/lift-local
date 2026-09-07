export async function loadSampleClip(): Promise<File> {
  const res = await fetch("/sample/lift-sample.mp4");
  if (!res.ok) throw new Error("Sample clip missing.");
  const blob = await res.blob();
  return new File([blob], "lift-sample.mp4", { type: "video/mp4" });
}
