import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "./icons";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "All projects" },
];

export function Footer() {
  const contact = [
    { href: whatsappHref, label: "WhatsApp", Icon: WhatsappIcon, ext: true },
    { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail },
    { href: `tel:+${profile.whatsapp}`, label: profile.phone, Icon: Phone },
  ];
  const socials = [
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-soft">
      <div className="container-x grid gap-10 pb-12 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
            <Image src="/portfolio-logo.svg" alt="" width={32} height={32} className="size-8" />
            {profile.name}
          </Link>
          <p className="mt-4 max-w-xs text-pretty text-sm text-muted">{profile.headline}</p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted transition hover:border-border-strong hover:text-fg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:contents">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-subtle">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-muted transition hover:text-fg">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-widest text-subtle">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {contact.map(({ href, label, Icon, ext }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={ext ? "_blank" : undefined}
                    rel={ext ? "noreferrer" : undefined}
                    className="inline-flex max-w-full items-center gap-2 text-muted transition hover:text-fg"
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 pb-24 text-xs text-subtle sm:flex-row sm:pr-60 sm:pb-6">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed & built with Next.js and Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
}
