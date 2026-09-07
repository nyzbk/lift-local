import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/mp3")({
  head: () => ({
    ...pageHead("/mp3"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "MP3", path: "/mp3" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="MP3" h1="MP4 to MP3 in this browser — no upload, no URL.">

      <p>The query is “mp4 to mp3”. The honest product is: you already have an MP4, you want an MP3, you do not want to upload it, and you do not want a YouTube fetch. Lift’s default preset is MP3 192 kbps because that is the file a phone, a car, and a cheap MP3 player will open. 128 and 320 exist. The encoder is LAME via Mediabunny’s official extension, in this tab.</p>
      <h2>What this page is not</h2>
      <p>It is not youtube.com to mp3. It is not a paste field. Publisher Policies disallow ads on unauthorized filesharing and copyrighted material. A fetch-a-link UI would put this domain in that basket. The UI will not grow a URL box in v1 or v2. If your only copy of the media is a streaming page, Lift cannot help you without becoming the thing we refuse to be.</p>
      <h2>How MP4 becomes MP3 here</h2>
      <p>The container is demuxed. The video track is discarded. Audio is decoded and encoded as MP3 with a Xing header by default. Tags are not a dump of the camera’s metadata. You get a clean MP3. If the source had no audio, you get a sentence. If the source was already AAC in M4A, you can skip MP3 and take M4A — but this page exists because people typed MP3.</p>
      <p>Bitrate is not magic. 128 is small and enough for voice. 192 is the default. 320 is larger; a 60-minute talk at 320 is still far smaller than the 1080p file it came from, and still not a studio master. WAV is the lossless sibling on another preset. Open the <Link to="/">extractor</Link> when you have the file. Read <Link to="/how-to">how to</Link> if the card confuses you.</p>

    </ArticleLayout>
  );
}
