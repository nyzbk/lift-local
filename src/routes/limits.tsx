import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/limits")({
  head: () => ({
    ...pageHead("/limits"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "Limits", path: "/limits" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="Limits" h1="150 MB desktop, 60 MB phone — memory, not a paywall.">

      <p>
        Lift holds the input blob, decoded audio, and output in the tab. Mediabunny’s BufferTarget
        is RAM. FFmpeg MEMFS is RAM. The caps exist so the tab lives. They are not “free tier three
        files a day.” Raising them “just this once” is how iOS kills the page. There is no paid
        unlock. There is no account that lifts the number.
      </p>
      <h2>What to do instead of fighting the cap</h2>
      <p>
        Export a shorter cut. Record 720p if you knew you would extract. Use Zoom’s own audio
        export for a three-hour call. Use a computer for 80–150 MB files. What not to do: upload
        the rest to a farm and call it Lift. Timeout 180 seconds is the other guard. DRM and HLS
        live are refusals, not caps. A silent file is a refusal, not a cap.
      </p>
      <h2>Why phones get 60 MB</h2>
      <p>
        Safari will discard a tab that tries to decode a 4K meeting. Desktops get 150 MB. Neither
        number is a store. Neither number is a reason to paste a URL. See{" "}
        <Link to="/how-to">how to</Link> and <Link to="/iphone">iPhone</Link>. The extractor is on
        the <Link to="/">home page</Link>.
      </p>


      <h2>What the numbers mean in practice</h2>
      <p>
        A five-minute phone clip is fine on Safari. A forty-minute Zoom at 720p is often fine on
        a laptop and too large on a phone. A three-hour all-hands at 1080p is too large on both
        until you split. The card shows bytes before Extract. Read it. If you are over the cap,
        the fail sentence is the one about memory, not a paywall.
      </p>
      <h2>Timeouts and DRM</h2>
      <p>
        180 seconds is the other guard so a hung decode does not sit forever. DRM-protected files
        and HLS live streams are refusals. They are not “try again with 320 kbps.” There is no
        URL field that would make those work. See <Link to="/how-to">how to</Link> and{" "}
        <Link to="/zoom">Zoom</Link>.
      </p>


      <p>
        These caps are written in the fail copy on purpose so a reviewer does not have to guess
        that a “limit” is a store. It is not. The same numbers sit in the source as
        DESKTOP_LIMIT_BYTES and MOBILE_LIMIT_BYTES. Changing them without testing iOS is how
        the page dies. We will not raise them in a sales email.
      </p>


      <p>
        If you routinely hit the cap, the meeting app’s own audio export is the right tool for
        that three-hour file. Lift is the private path for a file that already sits here and
        fits in RAM. It is not a replacement for Zoom’s audio download of an all-hands.
      </p>

    </ArticleLayout>
  );
}
