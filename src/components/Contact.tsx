"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  const actions = [
    {
      href: whatsappHref,
      external: true,
      label: "WhatsApp",
      value: profile.phone,
      note: "Fastest way to reach me",
      Icon: WhatsappIcon,
      color: "#25d366",
    },
    {
      href: `mailto:${profile.email}`,
      external: false,
      label: "Email",
      value: profile.email,
      note: "For detailed project briefs",
      Icon: Mail,
      color: "var(--brand)",
      copy: true,
    },
    {
      href: `tel:+${profile.whatsapp}`,
      external: false,
      label: "Call",
      value: profile.phone,
      note: "Mon – Sat, 10 am – 8 pm IST",
      Icon: Phone,
      color: "var(--brand-2)",
    },
  ];

  const socials = [
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-20 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[480px] bg-[radial-gradient(60%_100%_at_50%_100%,var(--glow),transparent)]" />
      </div>

      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-balance sm:text-6xl">
            Have a project or a role in mind? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted sm:text-lg">
            Tell me what you&apos;re building — a product, an internal tool, or a process that needs automating. I usually reply within a day.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="pulse-dot size-2 rounded-full bg-green-500" />
            Available for full-time roles & freelance work
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3">
          {actions.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <div
                style={{ ["--c" as string]: a.color }}
                className="card group relative flex h-full items-center gap-4 overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--c)_55%,transparent)] hover:shadow-[0_20px_50px_-24px_var(--c)] md:flex-col md:items-start md:p-6 md:min-h-[220px]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--c)_22%,transparent),transparent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--c)_14%,transparent)] text-[var(--c)] ring-1 ring-[color-mix(in_srgb,var(--c)_30%,transparent)] md:size-14">
                  <a.Icon className="size-6" />
                </span>
                <span className="min-w-0 flex-1 md:mt-auto">
                  <a
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noreferrer" : undefined}
                    className="flex items-center gap-1.5 text-lg font-semibold tracking-tight outline-none after:absolute after:inset-0 after:rounded-[inherit] focus-visible:after:ring-2 focus-visible:after:ring-[var(--c)]"
                  >
                    {a.label}
                    <ArrowUpRight className="size-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  </a>
                  <span className="mt-0.5 block truncate text-sm text-fg/85">{a.value}</span>
                  <span className="mt-1 block text-xs text-muted">{a.note}</span>
                </span>
                {a.copy && (
                  <button
                    onClick={copy}
                    aria-label="Copy email address"
                    className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-bg text-muted transition hover:border-border-strong hover:text-fg md:absolute md:right-4 md:top-4 md:size-9"
                  >
                    {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10">
          <span className="mr-1 w-full text-center text-xs text-subtle sm:w-auto">Also on</span>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted transition hover:border-border-strong hover:text-fg"
            >
              <Icon /> {label}
            </a>
          ))}
        </Reveal>
        {copied && (
          <p role="status" className="sr-only">
            Email copied
          </p>
        )}
      </div>
    </section>
  );
}
