import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead("/contact"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "Contact", path: "/contact" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="Contact" h1="Write if the extractor failed. Do not send the video.">

      <p>Email: <a href="mailto:ultaultimatum@gmail.com">ultaultimatum@gmail.com</a></p>
      <p>Include: page URL, browser, OS, container, size, whether the card showed an audio track, the fail sentence. Do not email the video. A mailbox is not a transcode API. Feature requests that are YouTube URLs, batch-of-fifty, or watermark removal will not be built here.</p>

    </ArticleLayout>
  );
}
