import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/JsonLd";

export const Route = createFileRoute("/lecture")({
  head: () => ({
    ...pageHead("/lecture"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Lift", path: "/" }, { name: "Lecture", path: "/lecture" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticleLayout kicker="Lecture" h1="Pull a lecture, Loom, or interview into an audio file.">

      <p>Classroom capture is a large MOV. Loom is a talking-head MP4. A phone interview is 4K with a tiny voice. The job is the same: discard the picture, keep the voice. Lift is not a denoiser. HVAC stays HVAC.</p>
      <p>If you teach the course, MP3 192 is enough for students who asked for audio. If you will cut an interview, WAV avoids another lossy hop. If you will listen on an iPhone, M4A behaves. None of those choices upload the lecture. All of them require that you had the right to extract.</p>
      <p>If the school’s platform already offers MP3, use that. If the platform forbids download, do not try a URL tool. This site will not help you circumvent that, and the terms say so so a reviewer does not have to infer it. Start on the <Link to="/">home extractor</Link> when the file is already on disk.</p>

    </ArticleLayout>
  );
}
