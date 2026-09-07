import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead("/about"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "About", path: "/about" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="About" h1="Lift is a local-first audio extractor.">

      <p>Lift exists because the default free MP4-to-MP3 path is an upload, and the other default is a YouTube downloader. Neither is a product this operator will put AdSense next to. The operator builds small browser tools that keep bytes in the tab. Lift is the audio hole in that line. One job per site. This site’s job is soundtrack out.</p>
      <p>Local-first means no account, no server transcode, no “we keep your file 24 hours.” Stack: Mediabunny MPL-2.0 as an npm dependency without patched sources in src/, official mp3-encoder extension, self-hosted FFmpeg ST fallback. Sample file is ours, under 400 KB, not a song we do not own.</p>
      <p>What we do not do: paste-a-URL, YouTube/TikTok/Instagram download, watermark removal, torrent, cloud transcription, selling files, claiming to be Google. Soft agency mention in the footer is not an ad. Ads after Ready are labeled units in three slots.</p>
      <p>Why a separate domain from Clip: one app, one repo, one workspace, one future AdSense site entry. Clip’s pages explain H.264 and WhatsApp video-send. Lift’s pages explain audio tracks, Zoom, ID3, MP3 versus M4A. Search-replace would be duplicate content. This About is written for soundtrack-out.</p>
      <p>Operator mailbox: ultaultimatum@gmail.com. Not a royal we without a mailbox. Do not email the video. One mention of sibling tools is enough; this page is not a doorway network.</p>

    </ArticleLayout>
  );
}
