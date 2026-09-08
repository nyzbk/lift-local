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

      <p>
        Classroom capture is a large MOV. Loom is a talking-head MP4. A phone interview is 4K with
        a tiny voice. The job is the same: discard the picture, keep the voice. Lift is not a
        denoiser. HVAC stays HVAC. It is not a transcription service. It will not write a script
        from the MP3. You take the audio file to a tool you already trust, or you listen on a
        commute player.
      </p>
      <h2>Rights first</h2>
      <p>
        If you teach the course, MP3 192 is enough for students who asked for audio and you had
        the right to share it. If you will cut an interview, WAV avoids another lossy hop. If you
        will listen on an iPhone, M4A behaves. None of those choices upload the lecture. All of
        them require that you had the right to extract. A school platform that already offers MP3
        is the better path. A platform that forbids download is not a reason to paste a URL into
        a converter. This site will not help you circumvent that, and the terms say so so a
        reviewer does not have to infer it.
      </p>
      <h2>File that is already on disk</h2>
      <p>
        Export from Loom, from the classroom recorder, from the camera roll, then drop the local
        file. A two-hour 4K capture will hit the memory cap. Cut a chapter. Use a computer for
        anything near 150 MB. Start on the <Link to="/">home extractor</Link>. Steps:{" "}
        <Link to="/how-to">how to</Link>. Phone save: <Link to="/iphone">iPhone</Link>.
      </p>


      <h2>Loom, camera roll, classroom recorder</h2>
      <p>
        Loom’s MP4 is a talking head plus AAC. Camera roll HEVC plus AAC may demux on a computer
        and fail on old Safari. Classroom recorders often dump MOV. Drop one file. If the picture
        is dead weight, that is expected. If the voice is unusable, Lift will not repair it. Buy
        a better mic next time. This is extraction, not production.
      </p>
      <h2>Students and permissions</h2>
      <p>
        If you are a student, the course platform’s own audio download is the legal path when it
        exists. If download is forbidden, do not paste a lecture URL into a YouTube-class tool.
        Lift will not fetch it. If you recorded your own notes on your own device with permission,
        drop that file. Format: <Link to="/mp3">MP3</Link>. Caps: <Link to="/limits">limits</Link>.
      </p>


      <p>
        Interviews recorded on a phone in 4K waste RAM on pixels you will throw away. If you knew
        you would extract, record 720p or use a voice memo app instead. Lift exists for the file
        you already have, not as a reason to shoot 4K. After Extract, listen once in the tab
        before you save. If the voice is buried, the MP3 will not magically raise it.
      </p>

    </ArticleLayout>
  );
}
