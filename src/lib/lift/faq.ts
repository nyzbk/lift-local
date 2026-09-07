export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  { q: "Do you upload my video?", a: "No. Extraction runs in this tab. Lift does not POST the File, ArrayBuffer, dataURL or FormData of your recording. Engine JavaScript and, only on fallback, a wasm core may load from this origin. That is not your meeting leaving. Closing the tab drops the bytes. There is no retrieve-my-file later." },
  { q: "Is this a YouTube to MP3 site?", a: "No. There is no URL field on purpose. Lift will not fetch youtube.com, youtu.be, TikTok, Instagram, Vimeo, or a Zoom share link. Publisher Policies treat unauthorized filesharing as disallowed inventory. If you searched youtube mp3, obtain the file by a means you already have a right to, then drop the file. Pasting a link here will never be a feature." },
  { q: "Is there a watermark or a daily cap?", a: "No. Caps are 150 MB desktop / 60 MB phone because of RAM. They are not a store. There is no logo burned into the MP3." },
  { q: "Which format should I pick?", a: "MP3 192 is the default. 128 is for chat. 320 is for an archive that must stay MP3. M4A when the next hop is iPhone or WhatsApp. WAV when a DAW must have PCM. Lift will not invent stems or karaoke." },
  { q: "Where does the file go on iPhone?", a: "Save to Files. Photos may recode. Safari has no Chrome download list. If the in-tab player made sound, the file exists." },
  { q: "Will WhatsApp keep my MP3?", a: "Video-send recodes. Document-send can carry Lift’s M4A or MP3. Lift cannot disable their compress." },
  { q: "What if there is no audio track?", a: "Lift stops. A silent screen recording has nothing to extract. That is a sentence, not a fake MP3." },
  { q: "Why is the first run slow?", a: "Engine code loads from this origin. Mediabunny is small. FFmpeg is tens of MB only on fallback, from /ffmpeg/, not a CDN. Cache keeps it." },
  { q: "Who runs this?", a: "Ultimatum. ultaultimatum@gmail.com. Do not email videos. About has the operator paragraph. A mailbox is visible on purpose." },
  { q: "When do ads show?", a: "Placeholders until Site Ready and three slot IDs. Never next to Drop, Extract, or Download. Auto ads stay off. Do not click ads as a favour — that is invalid traffic." },
  { q: "Why a Vercel domain?", a: "HTTPS host. Source is nyzbk/lift-local. Host is not why sibling tools were not Ready; thin pages and Search Console were. This site ships the content layer in the same build." },
  { q: "Can I paste a Zoom link?", a: "No. Download the recording in Zoom, then drop the local file." },
  { q: "Which browsers work?", a: "Chrome and Edge on a computer are the hardest-tested. Safari handles short clips. Unsupported browsers get a sentence, not a hang." },
  { q: "Is this Clip?", a: "No. Clip writes a smaller MP4. Lift writes audio. Same engine family, different job, different domain, different sentences." },
];

export const homeFaq = FAQ_ITEMS.slice(0, 6);
