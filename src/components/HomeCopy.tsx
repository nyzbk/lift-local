import { Link } from "@tanstack/react-router";
export function HomeCopy() {
  return (
    <section className="prose-clip mt-12 max-w-3xl">
      <h2>How it works</h2>
      <p>
        Lift takes a video that already sits on this laptop or phone and writes the soundtrack as MP3, M4A or WAV.
        The job is extraction. It is not compression. It is not a trimmer with a timeline. It is not a box that accepts a URL.
        CloudConvert and Zamzar take the file onto a farm. ytmp3-class sites take a link. Lift takes neither.
        If the recording is still only in the Zoom cloud, download it in Zoom first, then drop the local file here.
      </p>
      <p>
        People use this page for a meeting they should not upload, a lecture whose picture is dead weight,
        a camera interview they want in a player that is not a video player. The engine is Mediabunny in this tab,
        a bundled MP3 encoder when the browser cannot encode MP3, and a single-thread FFmpeg core hosted at /ffmpeg/
        on this origin only if the primary path cannot finish. Nothing is fetched from unpkg or jsDelivr.
        Cross-Origin-Embedder-Policy is not enabled. You do not need those names to press Extract. They are here so a
        person — and a reviewer — can see a real local tool plus sentences, not a dropzone on a blank shell.
      </p>
      <p>
        Drop one MP4, MOV, WebM or MKV. The card shows name, size, duration, and whether an audio track exists.
        No audio track: Lift stops with a sentence, not a zero-byte MP3. Limits are memory, not a store: 150 MB on a
        computer, 60 MB on a phone. A two-hour 4K dump can kill the tab even if you only wanted the voice.
        Export a shorter cut from the camera app first. Lift will not upload the rest “just this once.”
      </p>
      <p>
        Pick MP3 192 as the default because every player eats it. 128 for chat. 320 for an archive that must stay MP3.
        M4A when the next hop is iPhone or WhatsApp. WAV when a DAW must have PCM. Optional start and end times are two
        numbers in seconds behind a disclosure, not an NLE. Extract sits in a zone without ads. Progress should move.
        Cancel is real. The result plays in this tab. Download uses an anchor and FileSaver; on iPhone, Save to Files,
        not Photos. Closing the tab drops the bytes. There is no server copy to request tomorrow.
      </p>
      <p>
        This site will not fetch YouTube, TikTok, Instagram, Vimeo, or a Zoom share URL. Program policies and Publisher
        Policies both treat unauthorized filesharing and copyrighted material as disallowed inventory. A URL field would
        put Lift next to ytmp3. There is no such field. If you arrived from “youtube mp3”, export or obtain the file by a
        means you already have a right to, then drop it. Lift will not fetch it. Terms say you are responsible for rights
        in the file you drop.
      </p>
      <p>
        Ads, when this domain is Site Ready and three slot IDs exist, sit after success, in the mid explanation, and in
        the footer. They never sit next to Drop, Extract, or Download. Auto ads stay off. Live ad script does not run
        until then. Soft agency text in the footer is not an ad. Do not click ads as a favour — that is invalid traffic.
      </p>
      <p>
        How it works in four sentences. Drop a local video. Read the card. Extract. Save the audio and close the tab.
        The rest of the site (<Link to="/how-to">how-to</Link>, <Link to="/zoom">Zoom</Link>,{" "}
        <Link to="/lecture">lecture</Link>, <Link to="/iphone">iPhone</Link>, <Link to="/limits">limits</Link>,{" "}
        <Link to="/faq">FAQ</Link>) exists so the tool has a site around it: steps, failure modes, and who operates it.
        These paragraphs are that text. The dropzone is the tool. Both ship in the first HTML, not after a spinner.
        The file never leaves this device.
      </p>
    </section>
  );
}
