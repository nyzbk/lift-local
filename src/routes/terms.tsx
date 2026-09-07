import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...pageHead("/terms"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "Terms", path: "/terms" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="Terms" h1="Lift extracts audio from a video you already have.">

      <p>Not a YouTube downloader, not a streaming grabber, not a watermark remover, not a studio, not legal advice, not a license to copy other people’s work. You are responsible for rights in the file. Publisher Policies forbid unauthorized filesharing as ad inventory. This site refuses URL fetch so it is not that inventory.</p>
      <p>No warranty. DRM, exotic containers, old browsers, memory limits can fail. Caps are RAM, not a paid tier. Do not rely on Lift for evidence preservation. Do not click ads to “support” us. Soft CTA is not an ad. MIT app code; Mediabunny remains MPL-2.0. Mailbox ultaultimatum@gmail.com.</p>

    </ArticleLayout>
  );
}
