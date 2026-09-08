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

      <p>
        People type “mp4 to mp3” because they already have a video file and they want a soundtrack
        they can play without a picture. The honest product is: the MP4 is on this device, you
        want an MP3, you do not want to upload it, and you do not want a YouTube fetch. Lift’s
        default preset is MP3 192 kbps because that is the file a phone, a car, and a cheap MP3
        player will open. 128 and 320 exist. The encoder is LAME via Mediabunny’s official
        extension, in this tab.
      </p>
      <h2>What this page is not</h2>
      <p>
        It is not youtube.com to mp3. It is not a paste field. Publisher Policies disallow ads on
        unauthorized filesharing and on pages that help users download streaming video when the
        provider forbids it. A fetch-a-link UI would put this domain in that basket. The UI will
        not grow a URL box in v1 or v2. If your only copy of the media is a streaming page, Lift
        cannot help you without becoming the thing we refuse to be. Obtain the file by a means
        you already have a right to, then drop it.
      </p>
      <h2>How MP4 becomes MP3 here</h2>
      <p>
        The container is demuxed. The video track is discarded. Audio is decoded and encoded as
        MP3 with a Xing header by default. Tags are not a dump of the camera’s metadata. You get
        a clean MP3. If the source had no audio, you get a sentence. If the source was already AAC
        in M4A, you can skip MP3 and take M4A — but this page exists because people typed MP3.
      </p>
      <h2>Bitrate is not a studio</h2>
      <p>
        128 kbps is small and enough for voice in a chat. 192 is the default. 320 is larger; a
        sixty-minute talk at 320 is still far smaller than the 1080p file it came from, and still
        not a studio master. WAV is the lossless sibling on another preset. A DAW that must have
        PCM should take WAV, then you accept the size. Do not run MP3 320 and call it lossless.
      </p>
      <p>
        Open the <Link to="/">extractor</Link> when you have the file. Read{" "}
        <Link to="/how-to">how to</Link> if the card confuses you. Meeting files:{" "}
        <Link to="/zoom">Zoom</Link>. Phone save: <Link to="/iphone">iPhone</Link>.
      </p>


      <h2>When MP3 is the wrong output</h2>
      <p>
        WhatsApp and iPhone often prefer M4A. A DAW that will cut the talk should take WAV so
        you do not stack two lossy hops. MP3 is the default because people asked for MP3, not
        because it is always the best next hop. If you already have AAC in an M4A, extracting
        to MP3 192 is a choice, not a requirement. The extractor will not upsample a 64 kbps
        voice into a 320 kbps master. Garbage in stays garbage, just without the picture.
      </p>
      <h2>What you should hear after Extract</h2>
      <p>
        The in-tab player must make sound. If it is silent, do not download. Cancel, try M4A, or
        try a shorter cut. A zero-byte file is a fail sentence, not an archive. ID3 tags stay
        empty on purpose so the output is not a dump of camera metadata. You can tag the MP3 in
        a player you already use. Lift will not invent album art.
      </p>

    </ArticleLayout>
  );
}
