import Link from "next/link";
import { ArrowUpRight, Boxes, Code2, Database, FlaskConical, Plug, Server } from "lucide-react";
import { experience, profile, skillGroups } from "@/data/profile";
import { getProject } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function TechMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden border-y border-border py-5" aria-label="Technologies I use">
      <div className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= items.length} className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 font-mono text-sm text-muted">
            {t}
          </span>
        ))}
      </div>
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
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="About" title={<>Turning manual work into <span className="text-gradient">software people trust</span></>} />
        <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="container-x mt-14 grid gap-4 sm:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="card p-6">
            <p className="font-mono text-xs text-brand">0{i + 1}</p>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-bg-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I've been building" description="Teams and products I've worked on, and what I shipped there." />
        <ol className="relative mt-14 space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-border-strong sm:space-y-8">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.company} delay={i * 0.06} className="relative pl-8 sm:pl-10">
              <span className="absolute left-0 top-7 size-[15px] rounded-full border-4 border-bg-soft bg-brand shadow-[0_0_0_4px_var(--glow)]" />
              <div className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {e.company}
                    <span className="font-normal text-muted"> — {e.role}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">{e.period}</span>
                </div>
                <p className="mt-3 text-pretty text-muted">{e.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed sm:text-[15px]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-fg/85">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-1.5">
                  {e.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                {e.projects && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
                    {e.projects.map((slug) => {
                      const p = getProject(slug);
                      return p ? (
                        <Link key={slug} href={`/projects/${slug}`} className="group inline-flex items-center gap-1 text-muted hover:text-fg">
                          {p.title}
                          <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="My toolbox" description="Technologies I've used in real, shipped projects — not just tutorials." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <Reveal key={g.title} delay={(i % 3) * 0.06} className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl border border-border bg-bg-soft text-brand">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="chip !text-[13px] !text-fg/80">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
