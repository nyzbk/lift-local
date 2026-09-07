import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...pageHead("/privacy"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "Privacy", path: "/privacy" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="Privacy" h1="Video stays in this tab.">

      <p>Lift processes a video you choose in this browser tab to emit audio. Media is not uploaded. No POST of File / ArrayBuffer / dataURL / FormData for extraction. Engine assets load from this origin. Probe may read name, size, duration, presence of an audio track, still in the tab.</p>
      <p>Until Site Ready, live ad script does not run after mount. When live, AdSense may set cookies and collect standard ad-request data on pages that show units. Ad requests do not include your video bytes or PCM. Auto ads off. No analytics beyond host and ads. We cannot sell recordings we never received. Output tags are not a full metadata dump.</p>
      <p>Contact ultaultimatum@gmail.com — do not attach the video. Processing is on your device at your request. Vercel hosts the static app. GitHub hosts source. Google may host ad scripts after Ready. Mediabunny remains MPL-2.0; Lift application code is MIT.</p>

    </ArticleLayout>
  );
}
