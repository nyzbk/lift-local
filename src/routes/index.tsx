import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { LiftApp } from "@/components/LiftApp";
import { HomeCopy } from "@/components/HomeCopy";
import { Faq } from "@/components/Faq";
import { AdUnit } from "@/components/AdUnit";
import { homeFaq } from "@/lib/lift/faq";
import { faqJsonLd, pageHead, websiteJsonLd } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead("/"),
    scripts: [jsonLdScript(websiteJsonLd()), jsonLdScript(faqJsonLd(homeFaq))],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase">Lift</p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Extract audio from a video in your browser.
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-lg">
        The file never leaves this device. No upload. No account. No watermark. Not a YouTube downloader.
      </p>
      <ul className="text-muted mt-4 flex flex-wrap gap-2 text-sm">
        {["No upload", "No account", "Not a YouTube downloader", "Stays on this device"].map((chip) => (
          <li key={chip} className="border-line bg-surface rounded-full border px-3 py-1">{chip}</li>
        ))}
      </ul>
      <div className="mt-10"><LiftApp /></div>
      <AdUnit slot="mid" />
      <HomeCopy />
      <Faq items={homeFaq} title="Quick answers" />
      <AdUnit slot="footer" />
    </SiteShell>
  );
}
