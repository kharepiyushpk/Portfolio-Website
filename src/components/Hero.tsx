"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { CountUp, CursorGlow, Magnetic, SplitWords, Stagger, StaggerItem, Tilt } from "./motion-kit";

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap text-[0.78em] min-[400px]:text-[0.86em] sm:text-[1em] md:text-[0.72em] lg:text-[0.86em] xl:text-[0.9em]"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const floating = [
  { label: "Next.js", cls: "-left-5 top-8 sm:-left-10 sm:top-10" },
  { label: "TypeScript", cls: "-right-5 top-20 sm:-right-8 sm:top-24 md:-right-3 lg:-right-8" },
  { label: "PostgreSQL", cls: "-left-6 bottom-20 sm:-left-12 sm:bottom-24" },
  { label: "Java · Spring", cls: "-right-6 bottom-28 sm:-right-10 md:-right-3 lg:-right-10" },
];

export function Hero({ stats }: { stats: { value: string; label: string }[] }) {
  const reduce = useReducedMotion();
  const fade = (d: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: d } }
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
        <div className="animate-drift absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
        <div className="animate-drift-2 absolute right-[-10%] top-40 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--brand-2)_22%,transparent),transparent)] blur-2xl" />
        <div className="animate-drift-3 absolute -left-20 top-[55%] h-64 w-64 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--brand)_16%,transparent),transparent)] blur-2xl" />
      </div>
      <CursorGlow />

      <div className="container-x grid items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="pulse-dot size-2 rounded-full bg-green-500" />
            {profile.available ? "Open to full-time roles & freelance projects" : "Currently busy"}
          </motion.div>

          <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-[3.4rem] lg:text-7xl">
            <SplitWords text={`Hi, I’m ${profile.shortName}.`} inView={false} delay={0.1} stagger={0.09} />
            <br />
            <motion.span {...fade(0.4)} className="inline-block">
              <RoleRotator />
            </motion.span>
          </h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-pretty text-base text-muted sm:text-xl md:text-lg lg:text-xl">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="#work" className="btn btn-primary group">
                See my work <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="#contact" className="btn btn-ghost">
                <Mail className="size-4" /> Get in touch
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div {...fade(0.32)} className="mt-8 flex items-center gap-4 text-muted">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:-translate-y-0.5 hover:text-fg">
              <GithubIcon className="size-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:-translate-y-0.5 hover:text-fg">
              <LinkedinIcon className="size-5" />
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:-translate-y-0.5 hover:text-[#25d366]">
              <WhatsappIcon className="size-5" />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:-translate-y-0.5 hover:text-fg">
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
          className="relative mx-auto w-[78%] max-w-[300px] sm:w-full sm:max-w-[340px] md:max-w-[300px] lg:max-w-[380px]"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[conic-gradient(from_140deg,var(--brand),var(--brand-2),transparent_55%,var(--brand))] opacity-40 blur-2xl" />
          <Tilt max={9} glare={false}>
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
                className="hidden items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:text-fg min-[420px]:inline-flex md:hidden lg:inline-flex"
              >
                @kharepiyushpk <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
          </Tilt>
          {floating.map((f, idx) => (
            <div
              key={f.label}
              className={`animate-float pointer-events-none absolute rounded-full border border-border-strong bg-card/90 px-2.5 py-1 font-mono text-[10px] shadow-lg backdrop-blur sm:px-3 sm:py-1.5 sm:text-xs ${f.cls}`}
              style={{ animationDelay: `${idx * 0.8}s` }}
            >
              {f.label}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-x mt-16 sm:mt-20">
        <Stagger as="dl" delay={0.5} gap={0.1} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="group relative bg-bg px-4 py-5 transition-colors hover:bg-bg-soft sm:px-6 sm:py-6">
              <dt className="text-xs text-muted sm:text-sm">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                <CountUp value={s.value} />
              </dd>
              <span aria-hidden className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,var(--brand),var(--brand-2))] transition-transform duration-500 group-hover:scale-x-100" />
            </StaggerItem>
          ))}
        </Stagger>
        <motion.a
          href="#work"
          {...fade(1.1)}
          aria-label="Scroll to work"
          className="mx-auto mt-10 hidden h-10 w-6 justify-center rounded-full border border-border-strong pt-2 sm:flex"
        >
          <span className="animate-scroll-dot block h-2 w-1 rounded-full bg-muted" />
        </motion.a>
      </div>
    </section>
  );
}
