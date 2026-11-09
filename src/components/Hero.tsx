"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const floating = [
  { label: "Next.js", cls: "-left-6 top-10 sm:-left-10" },
  { label: "TypeScript", cls: "-right-4 top-24 sm:-right-8" },
  { label: "PostgreSQL", cls: "-left-4 bottom-24 sm:-left-12" },
  { label: "Java · Spring", cls: "-right-6 bottom-10 sm:-right-10" },
];

export function Hero({ stats }: { stats: { value: string; label: string }[] }) {
  const reduce = useReducedMotion();
  const fade = (d: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-40 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--brand-2)_22%,transparent),transparent)] blur-2xl" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="pulse-dot size-2 rounded-full bg-green-500" />
            {profile.available ? "Open to full-time roles & freelance projects" : "Currently busy"}
          </motion.div>

          <motion.h1 {...fade(0.08)} className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Hi, I&apos;m {profile.shortName}.
            <br />
            <RoleRotator />
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-pretty text-lg text-muted sm:text-xl">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#work" className="btn btn-primary">
              See my work <ArrowDownRight className="size-4" />
            </Link>
            <Link href="#contact" className="btn btn-ghost">
              <Mail className="size-4" /> Get in touch
            </Link>
          </motion.div>

          <motion.div {...fade(0.32)} className="mt-8 flex items-center gap-4 text-muted">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-fg">
              <GithubIcon className="size-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-fg">
              <LinkedinIcon className="size-5" />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-fg">
              <InstagramIcon className="size-5" />
            </a>
            <span className="h-4 w-px bg-border-strong" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[conic-gradient(from_140deg,var(--brand),var(--brand-2),transparent_55%,var(--brand))] opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-card p-2 shadow-2xl">
            <div className="relative aspect-[801/868] overflow-hidden rounded-[1.6rem]">
              <Image src={profile.avatar} alt={profile.name} fill priority sizes="(max-width: 640px) 340px, 380px" className="object-cover" />
            </div>
            <div className="flex items-center justify-between gap-3 px-3 py-3">
              <div>
                <p className="text-sm font-medium">{profile.name}</p>
                <p className="text-xs text-muted">{profile.role}</p>
              </div>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:text-fg"
              >
                @kharepiyushpk <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
          {floating.map((f, idx) => (
            <div
              key={f.label}
              className={`animate-float absolute hidden rounded-full border border-border-strong bg-card/90 px-3 py-1.5 font-mono text-xs shadow-lg backdrop-blur sm:block ${f.cls}`}
              style={{ animationDelay: `${idx * 0.8}s` }}
            >
              {f.label}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-x mt-16 sm:mt-20">
        <motion.dl {...fade(0.4)} className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4 [&>div]:bg-bg" style={{ gap: 1 }}>
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-6 sm:px-6">
              <dt className="text-xs text-muted sm:text-sm">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
