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

      <p>
        A meeting file contains other people’s faces and voices. The usual free converter asks you
        to upload it to a farm. Lift asks you to drop the file that is already on the laptop that
        joined the call. There is no zoom.us paste field. There is no Meet share-link field. If
        the recording lives only in Zoom’s cloud, download it through Zoom, then drop the local
        MP4 or M4A. Pasting a join URL will never extract audio.
      </p>
      <h2>Why people still land here</h2>
      <p>
        Zoom can often export audio itself. People still land here because the default recording
        was video, a colleague sent an MP4, or Meet dumped a player file. After Extract you have
        a voice file for notes, a transcript tool you already trust, or a commute player. You do
        not have a second copy on a converter CDN. That is the privacy win versus the farm. It is
        not a win versus your employer. You may still be bound by the meeting’s recording notice.
        Lift does not read that notice.
      </p>
      <h2>What v1 will and will not mix</h2>
      <p>
        If everyone was muted, Lift says no audio track. If there is a primary track plus an
        interpreter, v1 takes primary, not a mixer. It will not separate speakers. It will not
        remove HVAC. Size caps still apply: a three-hour all-hands at 1080p can exceed 150 MB.
        Split in the meeting app. Then open the <Link to="/">tool</Link>. Format help:{" "}
        <Link to="/mp3">MP3</Link>. Caps: <Link to="/limits">limits</Link>.
      </p>
      <p>
        Do not email us the recording. A mailbox is not a transcode API. If Extract failed, the
        <Link to="/contact">contact</Link> page lists what to write: browser, size, whether the
        card showed an audio track, the fail sentence.
      </p>


      <h2>How to get a local file out of Zoom</h2>
      <p>
        In Zoom, open Recordings, download the MP4 to this laptop, then drop that file here.
        Cloud recording that still sits on zoom.us is not a Lift input. A share link is not a
        Lift input. Google Meet: download the file from Drive if your org stored it there, then
        drop the local copy. Teams: same idea — local file, then drop. Lift does not log into
        those products.
      </p>
      <h2>After the MP3 exists</h2>
      <p>
        Use it for notes, for a commute, for a transcript tool you already pay for. Do not upload
        the meeting to a random converter “just this once.” That was the hole this page exists
        to close. If the file is huge, split in Zoom first. Caps: <Link to="/limits">limits</Link>.
        Steps: <Link to="/how-to">how to</Link>.
      </p>

    </ArticleLayout>
  );
}
