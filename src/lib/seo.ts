export const SITE_ORIGIN = "https://lift-local-pi.vercel.app";
export const SITE_NAME = "Lift";
export const CONTACT_EMAIL = "ultaultimatum@gmail.com";
export const ADSENSE_CLIENT = "ca-pub-7636435144500691";

export const SITEMAP_PATHS = [
  "/",
  "/how-to",
  "/mp3",
  "/zoom",
  "/lecture",
  "/iphone",
  "/limits",
  "/faq",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export const SITEMAP_LASTMOD = "2026-09-08";

export const PAGE_SEO: Record<
  (typeof SITEMAP_PATHS)[number],
  { title: string; description: string }
> = {
  "/": {
    title: "Extract Audio from Video — MP3 in Your Browser, No Upload | Lift",
    description:
      "Drop an MP4 or MOV, download MP3, M4A or WAV. The file never leaves this device. Not a YouTube downloader. No signup, no watermark.",
  },
  "/how-to": {
    title: "How to Extract Audio from a Video Without Uploading It | Lift",
    description:
      "Drop a local MP4 or MOV, pick MP3 / M4A / WAV, save the soundtrack. Lift runs in this tab.",
  },
  "/mp3": {
    title: "MP4 to MP3 in the Browser — No Upload, No URL | Lift",
    description:
      "Convert a video file you already have into MP3 without sending it to a farm. Not a YouTube downloader.",
  },
  "/zoom": {
    title: "Extract Audio from a Zoom or Meet Recording — Private | Lift",
    description:
      "Lift a soundtrack from a local meeting file. The recording stays in this tab.",
  },
  "/lecture": {
    title: "Pull a Lecture, Loom, or Interview into Audio | Lift",
    description:
      "Discard the picture, keep the voice. Local extract for classroom, Loom, and interview files.",
  },
  "/iphone": {
    title: "Save Extracted Audio on iPhone — Files, Not Photos | Lift",
    description:
      "Safari Download is not Chrome’s list. Save the MP3 or M4A to Files.",
  },
  "/limits": {
    title: "File Size Limits — 150 MB / 60 MB Memory Caps | Lift",
    description:
      "Lift never uploads. The cap is your browser’s memory, even though the output is audio.",
  },
  "/faq": {
    title: "Lift FAQ — Upload, YouTube, MP3, iPhone, Zoom",
    description:
      "Answers: no upload, not a YouTube converter, Files vs Photos, 150/60 MB memory.",
  },
  "/about": {
    title: "About Lift — In-Browser Audio Extractor",
    description:
      "Private extractor. Mediabunny + LAME MP3 encoder + self-hosted FFmpeg fallback. Built by Ultimatum.",
  },
  "/contact": {
    title: "Contact Lift",
    description: "ultaultimatum@gmail.com — do not email video files.",
  },
  "/privacy": {
    title: "Privacy — Lift",
    description: "Video stays in this tab. No upload. Ads do not get samples.",
  },
  "/terms": {
    title: "Terms — Lift",
    description: "Not a studio, not a YouTube downloader, not a watermark-remover.",
  },
};

export function canonical(path: string) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_ORIGIN,
        description: PAGE_SEO["/"].description,
      },
      {
        "@type": "WebApplication",
        name: "Lift — Extract Audio in Your Browser",
        url: SITE_ORIGIN,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        featureList: ["Extract audio from video", "MP3", "M4A", "WAV", "No upload"],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        browserRequirements: "Requires HTML5 and a modern browser.",
      },
      {
        "@type": "Organization",
        name: "Ultimatum",
        email: CONTACT_EMAIL,
        url: SITE_ORIGIN,
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function pageHead(
  path: (typeof SITEMAP_PATHS)[number],
  extraScripts: { type: string; children: string }[] = [],
) {
  const seo = PAGE_SEO[path];
  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "google-adsense-account", content: ADSENSE_CLIENT },
      { name: "theme-color", content: "#12100E" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: canonical(path) }],
    scripts: extraScripts,
  };
}
