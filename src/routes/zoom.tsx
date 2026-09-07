import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/zoom")({
  head: () => ({
    ...pageHead("/zoom"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "Zoom", path: "/zoom" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="Zoom" h1="Extract audio from a Zoom or Meet recording without uploading it.">

      <p>A meeting file contains other people’s faces and voices. The usual free converter asks you to upload it. Lift asks you to drop the file that is already on the laptop that joined the call. There is no zoom.us paste field. If the recording lives only in Zoom’s cloud, download it through Zoom, then drop the local MP4 or M4A.</p>
      <p>Zoom can often export audio itself. People still land here because the default recording was video, a colleague sent an MP4, or Meet dumped a player file. After Extract you have a voice file for notes, a transcript tool you already trust, or a commute player. You do not have a second copy on a converter CDN.</p>
      <p>If everyone was muted, Lift says no audio track. If there is a primary track plus an interpreter, v1 takes primary, not a mixer. You may still be bound by the meeting’s recording notice. Lift does not read that notice. The privacy win is versus the farm, not versus your employer. Size caps still apply: a three-hour all-hands at 1080p can exceed 150 MB. Split in the meeting app. Then open the <Link to="/">tool</Link>.</p>

    </ArticleLayout>
  );
}
