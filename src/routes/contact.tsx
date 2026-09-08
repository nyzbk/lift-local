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

      <p>
        Email: <a href="mailto:ultaultimatum@gmail.com">ultaultimatum@gmail.com</a>
      </p>
      <p>
        This mailbox is for a fail sentence, not for a file. Do not attach the video. Do not
        attach the MP3. A mailbox is not a transcode API. Lift never had a server copy of your
        recording, so we cannot “look it up.”
      </p>
      <p>
        Include: the page URL (should be on lift-local-pi.vercel.app), browser, OS, container
        (MP4 / MOV / WebM), size in megabytes, whether the card showed an audio track, and the
        exact fail sentence. Optional: whether you used MP3, M4A, or WAV. That is enough to tell
        a decode fail from a memory fail.
      </p>
      <p>
        Feature requests that are YouTube URLs, Zoom share links, batch-of-fifty, karaoke, stems,
        or watermark removal will not be built here. Those jobs are other products or they are
        jobs we refuse. The extractor is on the <Link to="/">home page</Link>. How it works:{" "}
        <Link to="/how-to">how to</Link>. Operator paragraph: <Link to="/about">About</Link>.
      </p>


      <p>
        If the site is down, say so. If a preview URL with a hash extracted and the production
        origin did not, say both URLs. Production is https://lift-local-pi.vercel.app. Do not
        write about lift-local.vercel.app — that login screen is a different product (Elivate)
        and we do not operate it.
      </p>
      <p>
        We read English. We do not run a phone line. We do not take same-day feature work. If
        Extract worked, you do not need to write. Close the tab. That is the delete.
      </p>


      <p>
        If you found this site from a sibling tool, still write about Lift, not about that tool.
        One job per mailbox thread. Ultimatum is the operator. The address is the same across
        the line so a person can see who runs it. That is the opposite of a hidden network.
      </p>

    </ArticleLayout>
  );
}
