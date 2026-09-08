import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQ_ITEMS } from "@/lib/lift/faq";
import { breadcrumbJsonLd, faqJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageHead("/faq"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "FAQ", path: "/faq" }])),
      jsonLdScript(faqJsonLd(FAQ_ITEMS)),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="FAQ" h1="Lift FAQ" faq={FAQ_ITEMS} faqTitle="Questions">
      <p>These answers match the visible list and the FAQPage JSON-LD. They are written for Lift, not copied from Clip with a search-replace. Fourteen questions: upload, YouTube, caps, format, iPhone, WhatsApp, silent files, first-run, operator, ads, Vercel name, Zoom links, browsers, and Clip.</p>
      <p>If a fail sentence is not in this list, write ultaultimatum@gmail.com with browser, size, and the sentence. Do not attach the video.</p>
    </ArticleLayout>
  );
}
