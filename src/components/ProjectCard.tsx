"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";
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
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return { ref, onMouseMove: onMove };
}

export function ProjectCard({ project, size = "md" }: { project: Project; size?: "lg" | "md" | "sm" }) {
  const spot = useSpotlight();
  const flat = project.stack.flatMap((g) => g.items);
  const shown = flat.slice(0, size === "sm" ? 4 : 6);
  const rest = flat.length - shown.length;

  if (size === "lg") {
    return (
      <Tilt max={3}>
      <Link
        href={`/projects/${project.slug}`}
        {...spot}
        className="spotlight card group grid overflow-hidden transition hover:border-border-strong md:grid-cols-[1fr_1.1fr]"
      >
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="chip">{project.context}</span>
            <span className="chip">{project.year}</span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-lg text-fg/80">{project.tagline}</p>
          <p className="mt-4 text-pretty text-muted">{project.summary}</p>
          {project.metrics && (
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-bg-soft px-3 py-3">
                  <dd className="text-lg font-semibold tracking-tight sm:text-xl" style={{ color: project.accent }}>
                    {m.value}
                  </dd>
                  <dt className="text-xs text-muted">{m.label}</dt>
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
          <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium">
            Read case study
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
        <ProjectCover kind={project.cover} accent={project.accent} className="h-72 border-t md:h-auto md:min-h-[300px] border-border md:border-l md:border-t-0" />
      </Link>
      </Tilt>
    );
  }

  return (
    <Tilt className="h-full" max={5}>
    <Link
      href={`/projects/${project.slug}`}
      {...spot}
      className="spotlight card group flex h-full flex-col overflow-hidden transition duration-300 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_var(--glow)]"
    >
      <div className="relative">
        <ProjectCover kind={project.cover} accent={project.accent} className={size === "sm" ? "h-44" : "h-56"} />
      </div>
      <div className="flex flex-1 flex-col border-t border-border p-5 sm:p-6">
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
          {project.title}
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
      </div>
    </Link>
    </Tilt>
  );
}
