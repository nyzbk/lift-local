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

      <p>
        This page is the long version of the extractor. The dropzone on the home page is the tool.
        Google’s content rules want complete sentences around a tool, not a blank shell. These
        paragraphs are that text. They stay in the first HTML. There is no spinner that hides them.
      </p>
      <p>
        Before you drop anything, confirm two things. First: you have a right to extract this file.
        A Zoom MP4 of a meeting you hosted is a normal case. A lecture you recorded with permission
        is a normal case. A film rip, a stream grab, or someone else’s podcast dump is not, and the
        terms say so in plain language. Second: the file is already on this device. Lift never
        fetches a URL. If the only copy still lives in Zoom’s cloud, in Drive, or on a streaming
        page, download it through that product first. Pasting a link here is not a feature and will
        not become one.
      </p>
      <h2>Size before you start</h2>
      <p>
        Confirm size: under 150 MB on a desktop browser, under 60 MB on a phone. Those numbers are
        RAM, not a store. The tab has to hold the video blob, decoded PCM, and the output MP3 or
        M4A or WAV at the same time. A two-hour 4K dump can kill Safari even if you only wanted
        the voice. Export a shorter cut from the camera or meeting app first. Confirm you can save
        to disk. On iPhone that means the Files app. Safari does not have Chrome’s download shelf.
        Use Chrome or Edge on a computer when the file is long. Safari on iOS can extract short
        clips. It will not transcode a two-hour 4K file in the foreground.
      </p>
      <h2>Step 1 — open the real site</h2>
      <p>
        Open https://lift-local-pi.vercel.app on HTTPS. A preview host with a hash is not the site.
        The name lift-local.vercel.app is a different product on the public Vercel namespace. Do
        not log into that dashboard. Do not add it to AdSense. The first load of this origin may
        fetch engine JavaScript from this origin. Do that on Wi-Fi on a phone. Engine assets are
        not pulled from unpkg or jsDelivr.
      </p>
      <h2>Step 2 — drop one video</h2>
      <p>
        Drop one video: MP4, MOV, WebM, MKV, M4V. One file in focus. After the drop, wait for the
        card: name, bytes, duration, audio track yes or no. A silent screen recording has nothing
        to extract. Lift stops with a sentence. It does not invent a silent MP3 so you can pretend
        the job worked. Audio-only files (a WAV you already have) are not the job. This site
        extracts from video.
      </p>
      <h2>Step 3 — read the card</h2>
      <p>
        Read the card before Extract. Duration missing is not always a dead file; probe can fall
        back to a media element when Mediabunny cannot parse the container. Two hours on a phone:
        do not press Extract. Cut first. If the card says audio no, stop. If the card says audio
        checking, wait a few seconds. Then extract or remove.
      </p>
      <h2>Step 4 — pick a format</h2>
      <p>
        MP3 192 is the default because every cheap player eats it. MP3 128 is for chat. MP3 320 is
        for an archive that must stay MP3. M4A when the next hop is iPhone or a messenger that
        prefers AAC. WAV when a DAW must have PCM and you can accept a large file. Optional start
        and end times are two numbers in seconds behind a disclosure, not a timeline editor. If
        start is greater than or equal to end, trim is ignored, not guessed.
      </p>
      <h2>Step 5 — extract</h2>
      <p>
        The Extract button has no ad next to it. Placement rules keep Drop, Extract, and Download
        as the holy zone. Progress should move. Eight seconds with no progress: the UI says still
        working. One hundred and eighty seconds: timeout, try a shorter cut or M4A. Cancel is real.
        After success the in-tab player must make sound. Zero bytes is a fail, not a download.
        Do not click ads as a favour if they ever appear — that is invalid traffic.
      </p>
      <h2>Step 6 — save</h2>
      <p>
        Download uses an anchor plus FileSaver. On iPhone, Save to Files. Recents in Photos is not
        a download list. Photos may recode for iCloud. Optimise iPhone Storage can replace a roll
        item with a derivative. Keep the MP3 or M4A in Files. The filename is lift-stem.mp3 or
        .m4a or .wav. On a computer, the browser’s download shelf is enough.
      </p>
      <h2>Step 7 — close the tab</h2>
      <p>
        RAM held the input, the decode, and the output. Closing the tab is the delete. There is no
        retrieve-my-file later because there was never a server copy. That is the product.
      </p>
      <h2>The two engines, without poetry</h2>
      <p>
        Primary: Mediabunny Conversion, video discarded, MP3 or WAV or M4A. Before MP3, the tab
        checks whether this browser can encode MP3. If not, it registers the official Mediabunny
        MP3 encoder (bundled LAME WASM, no CDN). Tags stay empty. Tracks stay primary. Each
        attempt recreates the input. Fallback: a single-thread FFmpeg core copied into /ffmpeg/
        on this origin. Not unpkg. Not jsDelivr. Not multi-thread. Not Cross-Origin-Embedder-Policy.
        You do not need those names to press Extract. They are here so a person — and a reviewer —
        can see a real local tool plus sentences, not a dropzone on a blank shell.
      </p>
      <h2>When it does not work</h2>
      <p>
        DRM or HLS live: refuse. Old Safari: prefer a computer. No audio track: a sentence. iPhone
        Photos recode is not Lift’s bug; use Files. Meeting files belong on <Link to="/zoom">Zoom</Link>.
        Classroom files belong on <Link to="/lecture">lecture</Link>. Caps live on{" "}
        <Link to="/limits">limits</Link>. Format choices live on <Link to="/mp3">MP3</Link>. Saving
        on a phone lives on <Link to="/iphone">iPhone</Link>. Start the job on the{" "}
        <Link to="/">home extractor</Link> when the file is already on disk.
      </p>

    </ArticleLayout>
  );
}
