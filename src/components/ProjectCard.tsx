"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { hostOf, type Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";
import { ProjectShot } from "./ProjectShot";
import { GithubIcon } from "./icons";
import { Tilt } from "./motion-kit";

export function StatusBadge({ status }: { status: Project["status"] }) {
  const live = status === "Live" || status === "In production";
  return (
    <span className="chip !bg-card/80 backdrop-blur">
      <span className={`size-1.5 rounded-full ${live ? "bg-green-500" : status === "Internal" ? "bg-amber-500" : "bg-subtle"}`} />
      {status}
    </span>
  );
}

function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return { ref, onMouseMove: onMove };
}

/** Live site + GitHub ke chhote buttons. "relative z-10" taaki card ke poore link ke upar clickable rahein */
export function ProjectLinks({ project, compact }: { project: Project; compact?: boolean }) {
  const { live, github } = project.links;
  if (!live && !github) return null;
  const pill =
    "relative z-10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={`${pill} border-green-500/30 bg-green-500/10 text-green-600 hover:border-green-500/60 dark:text-green-400`}
        >
          <Globe className="size-3.5" />
          {compact ? "Live site" : hostOf(live)}
          <ArrowUpRight className="size-3" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className={`${pill} border-border bg-card text-muted hover:border-border-strong hover:text-fg`}>
          <GithubIcon className="size-3.5" />
          Code
        </a>
      )}
    </div>
  );
}

function Visual({ project, className, priority }: { project: Project; className: string; priority?: boolean }) {
  return project.images?.length ? (
    <ProjectShot project={project} className={`pointer-events-none ${className}`} priority={priority} />
  ) : (
    <ProjectCover kind={project.cover} accent={project.accent} className={`pointer-events-none ${className}`} />
  );
}

export function ProjectCard({ project, size = "md", priority }: { project: Project; size?: "lg" | "md" | "sm"; priority?: boolean }) {
  const spot = useSpotlight();
  const flat = project.stack.flatMap((g) => g.items);
  const shown = flat.slice(0, size === "sm" ? 4 : 6);
  const rest = flat.length - shown.length;
  const href = `/projects/${project.slug}`;
  // Title ka link poore card pe phail jaata hai (after:inset-0), baaki links z-10 se upar rehte hain
  const stretched = "outline-none after:absolute after:inset-0 after:z-0 after:rounded-[inherit] focus-visible:after:ring-2 focus-visible:after:ring-brand";

  if (size === "lg") {
    return (
      <Tilt max={3}>
        <div {...spot} className="spotlight card group relative grid overflow-hidden transition hover:border-border-strong lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col p-5 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="chip">{project.context}</span>
              <span className="chip">{project.year}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
              <Link href={href} className={stretched}>
                {project.title}
              </Link>
            </h3>
            <p className="mt-2 text-lg text-fg/80">{project.tagline}</p>
            <p className="mt-4 text-pretty text-muted">{project.summary}</p>
            {project.metrics && (
              <dl className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-border bg-bg-soft px-2.5 py-2.5 sm:px-3 sm:py-3">
                    <dd className="text-lg font-semibold tracking-tight sm:text-xl" style={{ color: project.accent }}>
                      {m.value}
                    </dd>
                    <dt className="text-[11px] leading-tight text-muted sm:text-xs">{m.label}</dt>
                  </div>
                ))}
              </dl>
            )}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {shown.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
              {rest > 0 && <span className="chip">+{rest}</span>}
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                Read case study
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <ProjectLinks project={project} />
            </div>
          </div>
          <Visual project={project} priority={priority} className="order-first h-60 border-b border-border min-[400px]:h-72 sm:h-96 lg:order-none lg:h-auto lg:min-h-[340px] lg:border-b-0 lg:border-l" />
        </div>
      </Tilt>
    );
  }

  return (
    <Tilt className="h-full" max={5}>
      <div
        {...spot}
        className="spotlight card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_var(--glow)]"
      >
        <Visual project={project} className={size === "sm" ? "h-48" : "h-60"} />
        <div className="flex flex-1 flex-col border-t border-border p-4 min-[400px]:p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium text-fg/80">
              <span className={`size-1.5 rounded-full ${project.status === "Live" || project.status === "In production" ? "bg-green-500" : "bg-subtle"}`} />
              {project.status}
            </span>
            <span className="text-subtle">•</span>
            <span>{project.context}</span>
            <span className="text-subtle">•</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-semibold tracking-tight">
            <Link href={href} className={stretched}>
              {project.title}
            </Link>
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
          </h3>
          <p className="mt-1.5 text-pretty text-sm text-muted">{size === "sm" ? project.tagline : project.summary}</p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {shown.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {rest > 0 && <span className="chip">+{rest}</span>}
          </div>
          {(project.links.live || project.links.github) && (
            <div className="mt-4 border-t border-border pt-4">
              <ProjectLinks project={project} compact={size === "sm"} />
            </div>
          )}
        </div>
      </div>
    </Tilt>
  );
}
