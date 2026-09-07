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

      <p>Safari will run Lift on a short clip. The 60 MB cap exists because a tab that decodes 4K will be discarded. After Extract, the in-tab player is the proof. Save to Files. Recents in Photos is not Downloads. Photos may recode for iCloud. Optimise iPhone Storage can replace a roll item with a derivative. Keep the MP3 or M4A in Files.</p>
      <p>WhatsApp: video-send is their encoder. Document-send can carry Lift’s M4A or MP3. Status is 90 seconds and is not an archive. Mail: attach the Files object. Gmail’s 25 MB is the letter, including MIME.</p>
      <p>There is no Lift iOS app. This page in Safari is the product. Add to Home Screen if you want an icon. That does not change where the file is stored. HEVC plus AAC from Camera may demux; if Safari cannot, the fail is honest — use a computer. Start on the <Link to="/">home page</Link>.</p>

    </ArticleLayout>
  );
}
