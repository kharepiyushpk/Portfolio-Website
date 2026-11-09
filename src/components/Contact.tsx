"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  // Backend nahi hai — form user ka mail app khol deta hai, sab bhara hua
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = form.subject || `Hello from ${form.name || "your portfolio"}`;
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const socials = [
    { href: profile.socials.github, label: "GitHub", sub: "@kharepiyushpk", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", sub: "Piyush Khare", Icon: LinkedinIcon },
    { href: profile.socials.instagram, label: "Instagram", sub: "@piyush_khare_23", Icon: InstagramIcon },
  ];

  const input =
    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition placeholder:text-subtle focus:border-brand focus:ring-4 focus:ring-[var(--ring)]";

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-[radial-gradient(60%_100%_at_50%_100%,var(--glow),transparent)]" />
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Have a project or a role in mind? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 max-w-md text-pretty text-lg text-muted">
            I reply within a day. Tell me what you&apos;re building — a product, an internal tool, or something that needs automating.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail className="size-4" /> {profile.email}
            </a>
            <button onClick={copy} className="btn btn-ghost" aria-label="Copy email address">
              {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <Phone className="size-4" /> {profile.phone}
          </a>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {socials.map(({ href, label, sub, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="card group flex items-center gap-3 p-4 transition hover:border-border-strong">
                <Icon className="size-5" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate text-xs text-muted">{sub}</span>
                </span>
                <ArrowUpRight className="ml-auto size-4 text-muted transition group-hover:text-fg" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-muted">Your name</span>
                <input required className={input} placeholder="Jane Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-muted">Subject</span>
                <input className={input} placeholder="Project enquiry" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              </label>
            </div>
            <label className="block space-y-2 text-sm">
              <span className="text-muted">Message</span>
              <textarea
                required
                rows={6}
                className={`${input} resize-none`}
                placeholder="Tell me a bit about what you need…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn btn-primary w-full">
              <Send className="size-4" /> Send message
            </button>
            <p className="text-center text-xs text-subtle">Opens your email app with the message filled in.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
