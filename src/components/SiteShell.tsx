import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { LiftMark } from "./LiftMark";
import { SoftAgencyCta } from "./SoftAgencyCta";
import { CONTACT_EMAIL } from "@/lib/seo";

const NAV = [
  { to: "/how-to", label: "How to" },
  { to: "/mp3", label: "MP3" },
  { to: "/zoom", label: "Zoom" },
  { to: "/lecture", label: "Lecture" },
  { to: "/iphone", label: "iPhone" },
  { to: "/faq", label: "FAQ" },
] as const;

const FOOT = [
  { to: "/", label: "Tool" },
  { to: "/how-to", label: "How to" },
  { to: "/mp3", label: "MP3" },
  { to: "/zoom", label: "Zoom" },
  { to: "/lecture", label: "Lecture" },
  { to: "/iphone", label: "iPhone" },
  { to: "/limits", label: "Limits" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <header className="border-line bg-bg/90 sticky top-0 z-20 border-b backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <LiftMark />
            <span className="font-display text-lg tracking-tight">Lift</span>
          </Link>
          <nav className="text-muted flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-ink underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      <footer className="border-line mt-8 border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-8">
          <nav className="text-muted flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {FOOT.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-ink underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
          <SoftAgencyCta />
          <p className="text-muted font-mono text-xs">
            Extract audio in this tab. Never uploaded. Not a YouTube downloader.{" "}
            <a className="text-accent" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
