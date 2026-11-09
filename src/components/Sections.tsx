"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Boxes, Code2, Database, FlaskConical, Plug, Server } from "lucide-react";
import { experience, profile, skillGroups } from "@/data/profile";
import { getProject } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ScrollLine, Stagger, StaggerItem, Tilt } from "./motion-kit";

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className={`${reverse ? "animate-marquee-reverse" : "animate-marquee"} flex w-max gap-3 group-hover:[animation-play-state:paused]`}>
      {row.map((t, i) => (
        <span
          key={i}
          aria-hidden={i >= items.length}
          className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 font-mono text-sm text-muted transition-colors hover:border-brand hover:text-fg"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function TechMarquee({ items }: { items: string[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <div className="group marquee-mask space-y-3 overflow-hidden border-y border-border py-5" aria-label="Technologies I use">
      <MarqueeRow items={items.slice(0, half)} />
      <MarqueeRow items={items.slice(half)} reverse />
    </div>
  );
}

const principles = [
  { title: "Preview before write", body: "Anything that touches real data shows a diff first and keeps a backup after." },
  { title: "Fast on real data", body: "I measure with production-sized data, then cache, batch and parallelise." },
  { title: "Own it end to end", body: "Schema, API, UI, deploy, tests and the support after launch." },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="About" title={<>Turning manual work into <span className="text-gradient">software people trust</span></>} />
        <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <Stagger className="container-x mt-14 grid gap-4 sm:grid-cols-3" gap={0.1}>
        {principles.map((p, i) => (
          <StaggerItem key={p.title}>
            <Tilt className="h-full">
              <div className="card group h-full p-5 transition-colors hover:border-border-strong sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-brand">0{i + 1}</p>
                  <span className="h-px w-8 origin-right bg-brand transition-all duration-500 group-hover:w-14" />
                </div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </div>
            </Tilt>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="border-t border-border bg-bg-soft py-20 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I've been building" description="Teams and products I've worked on, and what I shipped there." />
        <ol ref={listRef} className="relative mt-14 space-y-6 sm:space-y-8">
          <ScrollLine targetRef={listRef} className="bottom-2 left-[5px] top-2 sm:left-[7px]" />
          {experience.map((e, i) => (
            <Reveal as="li" key={e.company} delay={i * 0.05} className="relative pl-6 sm:pl-10">
              <motion.span
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.15 }}
                className="absolute left-0 top-7 size-[11px] rounded-full border-[3px] border-bg-soft bg-brand shadow-[0_0_0_4px_var(--glow)] sm:size-[15px] sm:border-4"
              />
              <div className="card group p-4 transition-colors hover:border-border-strong min-[400px]:p-5 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {e.company}
                    <span className="font-normal text-muted"> — {e.role}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">{e.period}</span>
                </div>
                <p className="mt-3 text-pretty text-muted">{e.summary}</p>
                <Stagger as="ul" className="mt-5 space-y-2.5" gap={0.06} delay={0.1}>
                  {e.points.map((pt) => (
                    <StaggerItem as="li" variant="slide" key={pt} className="flex gap-3 text-sm leading-relaxed sm:text-[15px]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-fg/85">{pt}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
                <Stagger className="mt-6 flex flex-wrap items-center gap-1.5" gap={0.03} delay={0.2}>
                  {e.stack.map((s) => (
                    <StaggerItem as="span" variant="pop" key={s} className="chip">
                      {s}
                    </StaggerItem>
                  ))}
                </Stagger>
                {e.projects && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
                    {e.projects.map((slug) => {
                      const p = getProject(slug);
                      return p ? (
                        <Link key={slug} href={`/projects/${slug}`} className="group/link inline-flex items-center gap-1 text-muted hover:text-fg">
                          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover/link:bg-[length:100%_1px]">
                            {p.title}
                          </span>
                          <ArrowUpRight className="size-3.5 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const skillIcons = [Code2, Server, Database, Boxes, FlaskConical, Plug];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="My toolbox" description="Technologies I've used in real, shipped projects — not just tutorials." />
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <Reveal key={g.title} delay={(i % 3) * 0.08} className="h-full">
                <Tilt className="h-full" max={5}>
                  <div className="card group h-full p-5 transition-colors hover:border-border-strong sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-xl border border-border bg-bg-soft text-brand transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:border-brand">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="font-semibold">{g.title}</h3>
                      <span className="ml-auto font-mono text-xs text-subtle">{g.items.length}</span>
                    </div>
                    <Stagger className="mt-5 flex flex-wrap gap-1.5" gap={0.035} delay={0.15}>
                      {g.items.map((s) => (
                        <StaggerItem as="span" variant="pop" key={s} className="chip !text-[13px] !text-fg/80 hover:-translate-y-0.5 hover:!border-brand">
                          {s}
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
