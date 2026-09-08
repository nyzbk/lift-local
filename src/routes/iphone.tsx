import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/iphone")({
  head: () => ({
    ...pageHead("/iphone"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "iPhone", path: "/iphone" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="iPhone" h1="Save extracted audio on iPhone — Files, not Photos.">

      <p>
        Safari will run Lift on a short clip. The 60 MB cap exists because a tab that decodes 4K
        will be discarded by iOS. After Extract, the in-tab player is the proof the file exists.
        Then save to Files. Recents in Photos is not Downloads. Photos may recode for iCloud.
        Optimise iPhone Storage can replace a roll item with a derivative. Keep the MP3 or M4A in
        Files so the next hop is the file you actually extracted.
      </p>
      <h2>Messengers and mail</h2>
      <p>
        WhatsApp video-send is their encoder. Document-send can carry Lift’s M4A or MP3. Status
        is ninety seconds and is not an archive. Mail: attach the Files object. Gmail’s 25 MB is
        the letter, including MIME. A sixty-minute WAV will not fit. Use MP3 192 or M4A for mail.
      </p>
      <h2>There is no Lift iOS app</h2>
      <p>
        This page in Safari is the product. Add to Home Screen if you want an icon. That does not
        change where the file is stored. HEVC plus AAC from Camera may demux; if Safari cannot,
        the fail is honest — use a computer. Chrome on iOS is still WebKit. The 60 MB cap still
        applies. Start on the <Link to="/">home page</Link>. Caps: <Link to="/limits">limits</Link>.
        Format: <Link to="/mp3">MP3</Link>.
      </p>


      <h2>Files vs Photos, again</h2>
      <p>
        Photos is a library with iCloud rules. Files is a folder. Lift’s output is a file. Save
        to Files → On My iPhone or iCloud Drive as you prefer. If you AirDrop to a Mac, send the
        Files object, not a Photos recode. If WhatsApp asks to record a new video, you picked
        video-send. Pick document-send for the MP3 or M4A.
      </p>
      <h2>When Safari should not be the machine</h2>
      <p>
        Long interviews, 4K camera files, anything near 60 MB: use a computer. Chrome on iPhone
        is still WebKit. Adding to Home Screen does not add RAM. The fail sentence is better than
        a frozen tab. How to: <Link to="/how-to">how to</Link>. Meetings:{" "}
        <Link to="/zoom">Zoom</Link>.
      </p>


      <p>
        Low Power Mode can freeze a tab mid-extract. Charge the phone. Do not switch apps while
        the bar is moving. If iOS reloads Safari, start again with a shorter cut. The input was
        only in RAM. There is nothing to resume on a server because there is no server copy.
      </p>


      <p>
        If Files asks where to save, pick On My iPhone when you want the file without iCloud
        recode, or iCloud Drive when you will open it on a Mac next. Either way, do not pick
        Photos. A Live Photo is not an input Lift expects. A screen recording with no mic is
        a silent file and will fail with the no-audio sentence.
      </p>

    </ArticleLayout>
  );
}
