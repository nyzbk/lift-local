import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/how-to")({
  head: () => ({
    ...pageHead("/how-to"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "How to", path: "/how-to" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="How to" h1="How to extract audio from a video without uploading it.">

      <p>Before you drop anything, confirm the file is yours to extract. A Zoom MP4 of a meeting you hosted is a normal case. A film rip is not, and the terms say so. Confirm size: under 150 MB on a desktop browser, under 60 MB on a phone. Confirm you can save to disk. On iPhone that means the Files app. Safari does not have Chrome’s download shelf. Use Chrome or Edge on a computer when the file is long. Safari on iOS can extract short clips. It will not transcode a two-hour 4K file in the foreground. That is RAM, not a free-tier wall.</p>
      <h2>Step 1 — open the real site</h2>
      <p>Open https://lift-local-pi.vercel.app on HTTPS. A preview host with a hash is not the site. The first load may fetch engine code from this origin. Do that on Wi-Fi on a phone.</p>
      <h2>Step 2 — drop one video</h2>
      <p>Drop one video: MP4, MOV, WebM, MKV, M4V. One file in focus. After the drop, wait for the card: name, bytes, duration, audio track yes or no. Silent screen recording: stop.</p>
      <h2>Step 3 — read the card</h2>
      <p>Read the card before Extract. Duration missing is not always a dead file; probe can fall back to a media element. Two hours on a phone: do not press Extract. Cut first.</p>
      <h2>Step 4 — pick a format</h2>
      <p>MP3 192 default. MP3 128 chat. MP3 320 archive. M4A iPhone/WhatsApp. WAV DAW. Trim is optional seconds. If start is greater than or equal to end, trim is ignored, not guessed.</p>
      <h2>Step 5 — extract</h2>
      <p>The button has no ad next to it. Progress should move. Eight seconds with no progress: the UI says still working. 180 seconds: timeout, try a shorter cut or M4A. Cancel is real. After success the in-tab player must make sound. Zero bytes is a fail, not a download.</p>
      <h2>Step 6 — save</h2>
      <p>Anchor plus FileSaver. iPhone: Files. Photos may recode. Name: lift-stem.mp3 or .m4a or .wav.</p>
      <h2>Step 7 — close the tab</h2>
      <p>RAM held the input, the decode, and the output. Closing is the delete.</p>
      <h2>The two engines, without poetry</h2>
      <p>Primary: Mediabunny Conversion, video discarded, MP3 or WAV or M4A. Before MP3, the tab checks whether this browser can encode MP3. If not, it registers the official Mediabunny MP3 encoder (bundled LAME WASM, no CDN). Tags stay empty. Tracks stay primary. Each attempt recreates the input. Fallback: a single-thread FFmpeg core copied into /ffmpeg/ on this origin. Not unpkg. Not jsDelivr. Not multi-thread. Not Cross-Origin-Embedder-Policy.</p>
      <h2>When it does not work</h2>
      <p>DRM or HLS live: refuse. Old Safari: prefer a computer. No audio track: a sentence. iPhone Photos recode is not Lift’s bug; use Files. Meeting files belong on <Link to="/zoom">Zoom</Link>. Classroom files belong on <Link to="/lecture">lecture</Link>. Caps live on <Link to="/limits">limits</Link>.</p>

    </ArticleLayout>
  );
}
