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

      <p>Lift holds the input blob, decoded audio, and output in the tab. Mediabunny’s BufferTarget is RAM. FFmpeg MEMFS is RAM. The caps exist so the tab lives. They are not “free tier 3 files a day.” Raising them “just this once” is how iOS kills the page.</p>
      <p>What to do instead of fighting the cap: export a shorter cut; record 720p if you knew you would extract; use Zoom’s own audio export for a three-hour call; use a computer for 80–150 MB files. What not to do: upload the rest to a farm and call it Lift. Timeout 180s is the other guard. DRM and HLS live are refusals, not caps.</p>
      <p>Phones get 60 MB because Safari will discard a tab that tries to decode a 4K meeting. Desktops get 150 MB. Neither number is a store. Neither number is a reason to paste a URL. See <Link to="/how-to">how to</Link> and <Link to="/iphone">iPhone</Link>.</p>

    </ArticleLayout>
  );
}
