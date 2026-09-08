export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do you upload my video?",
    a: "No. Extraction runs in this tab. Lift does not POST the File, ArrayBuffer, dataURL or FormData of your recording. Engine JavaScript and, only on fallback, a wasm core may load from this origin. That is not your meeting leaving. Closing the tab drops the bytes. There is no retrieve-my-file later because there was never a server copy. If a converter asked you to wait while it ‘uploaded,’ that was a different product.",
  },
  {
    q: "Is this a YouTube to MP3 site?",
    a: "No. There is no URL field on purpose. Lift will not fetch youtube.com, youtu.be, TikTok, Instagram, Vimeo, or a Zoom share link. Publisher Policies treat unauthorized filesharing and pages that help download streaming video against the provider’s rules as disallowed inventory. If you searched youtube mp3, obtain the file by a means you already have a right to, then drop the file. Pasting a link here will never be a feature.",
  },
  {
    q: "Is there a watermark or a daily cap?",
    a: "No. Caps are 150 MB desktop / 60 MB phone because of RAM. They are not a store and not a free-tier of three files a day. There is no logo burned into the MP3. There is no account that unlocks a bigger number. If the file is too large, cut it in the camera or meeting app first.",
  },
  {
    q: "Which format should I pick?",
    a: "MP3 192 is the default because every cheap player eats it. 128 is for chat. 320 is for an archive that must stay MP3, not because it is lossless. M4A when the next hop is iPhone or WhatsApp document-send. WAV when a DAW must have PCM and you can accept the size. Lift will not invent stems or karaoke. It will not upsample a thin voice into a fake master.",
  },
  {
    q: "Where does the file go on iPhone?",
    a: "Save to Files. Photos may recode for iCloud. Safari has no Chrome download list. If the in-tab player made sound, the file exists. Recents in Photos is not Downloads. Optimise iPhone Storage can replace a roll item with a derivative. Keep the MP3 or M4A in Files so the next hop is the file you actually extracted.",
  },
  {
    q: "Will WhatsApp keep my MP3?",
    a: "Video-send recodes. Document-send can carry Lift’s M4A or MP3. Status is ninety seconds and is not an archive. Lift cannot disable their compress. If WhatsApp asks you to record a new video, you picked the wrong send path. Pick document.",
  },
  {
    q: "What if there is no audio track?",
    a: "Lift stops. A silent screen recording has nothing to extract. That is a sentence, not a fake MP3. Mute-all Zoom files fail the same way. Check the card before Extract. Audio-only files are not the job — this site extracts from video.",
  },
  {
    q: "Why is the first run slow?",
    a: "Engine code loads from this origin. Mediabunny is small. FFmpeg is tens of MB only on fallback, from /ffmpeg/, not a CDN. Cache keeps it. Do the first load on Wi-Fi on a phone. Later runs reuse the cache. Slow is not upload.",
  },
  {
    q: "Who runs this?",
    a: "Ultimatum. ultaultimatum@gmail.com. Do not email videos. About has the operator paragraph. A mailbox is visible on purpose so a reviewer does not have to hunt a hidden who. English UI, as-is. Source is nyzbk/lift-local. Production origin is lift-local-pi.vercel.app.",
  },
  {
    q: "When do ads show?",
    a: "Placeholders until Site Ready and three slot IDs. Never next to Drop, Extract, or Download. Auto ads stay off. Live ad script does not run until then. Do not click ads as a favour — that is invalid traffic. Soft agency text in the footer is not an ad.",
  },
  {
    q: "Why a Vercel domain?",
    a: "HTTPS host. Source is nyzbk/lift-local. Host is not why sibling tools were not Ready; thin pages and Search Console were. This origin ships the content layer in HTML, not after a spinner. lift-local.vercel.app is a different product (Elivate). Do not add that login to AdSense.",
  },
  {
    q: "Can I paste a Zoom link?",
    a: "No. Download the recording in Zoom, then drop the local file. A join URL, a share link, and a cloud recording that still sits on zoom.us are not inputs. Lift does not log into Zoom, Meet, or Teams.",
  },
  {
    q: "Which browsers work?",
    a: "Chrome and Edge on a computer are the hardest-tested. Safari handles short clips. Unsupported browsers get a sentence, not a hang. Chrome on iPhone is still WebKit. Long 4K files belong on a computer, not on a phone tab.",
  },
  {
    q: "Is this Clip?",
    a: "No. Clip writes a smaller MP4. Lift writes audio. Same engine family, different job, different domain, different sentences. Search-replace would be duplicate content. This FAQ is written for soundtrack-out, not for H.264 WhatsApp video-send.",
  },
];

export const homeFaq = FAQ_ITEMS.slice(0, 6);
