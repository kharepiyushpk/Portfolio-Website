import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Lock } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { StatusBadge } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: `${p.title} — ${p.tagline}`, description: p.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const isPrivate = !p.links.github;

  return (
    <article className="pb-24 pt-28 sm:pt-36" style={{ ["--accent" as string]: p.accent }}>
      <div className="container-x">
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-fg">
          <ArrowLeft className="size-4" /> All projects
        </Link>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={p.status} />
            {p.categories.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{p.title}</h1>
          <p className="mt-4 max-w-3xl text-pretty text-xl text-muted sm:text-2xl">{p.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.links.live && (
              <a href={p.links.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                Visit live site <ArrowUpRight className="size-4" />
              </a>
            )}
            {p.links.github && (
              <a href={p.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <GithubIcon /> Source code
              </a>
            )}
            {isPrivate && (
              <span className="btn btn-ghost pointer-events-none text-muted">
                <Lock className="size-4" /> Private codebase
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ProjectCover kind={p.cover} accent={p.accent} className="card h-72 sm:h-[26rem]" />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-14">
            <Reveal as="section">
              <h2 className="eyebrow">Overview</h2>
              <div className="mt-4 space-y-4 text-pretty text-lg leading-relaxed text-fg/85">
                <p className="text-xl text-fg">{p.summary}</p>
                {p.description.map((d, i) => (
                  <p key={i} className="text-muted">
                    {d}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal as="section">
              <h2 className="eyebrow">Key features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="card flex gap-3 p-4 text-[15px] leading-relaxed">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0" style={{ color: p.accent }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {p.challenges && (
              <Reveal as="section">
                <h2 className="eyebrow">Challenges &amp; solutions</h2>
                <div className="mt-5 space-y-4">
                  {p.challenges.map((c, i) => (
                    <div key={c.title} className="card p-6">
                      <p className="font-mono text-xs" style={{ color: p.accent }}>
                        Challenge 0{i + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                      <p className="mt-2 text-pretty leading-relaxed text-muted">{c.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="card divide-y divide-border">
              {[
                ["Role", p.role],
                ["Context", p.context],
                ["Year", p.year],
                ["Status", p.status],
              ].map(([k, v]) => (
                <div key={k} className="px-5 py-4">
                  <p className="text-xs text-subtle">{k}</p>
                  <p className="mt-1 text-sm">{v}</p>
                </div>
              ))}
            </div>

            {p.metrics && (
              <div className="grid grid-cols-2 gap-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="card p-4">
                    <p className="text-xl font-semibold tracking-tight" style={{ color: p.accent }}>
                      {m.value}
                    </p>
                    <p className="text-xs text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="card p-5">
              <p className="text-sm font-semibold">Tech stack</p>
              <div className="mt-4 space-y-4">
                {p.stack.map((g) => (
                  <div key={g.group}>
                    <p className="text-xs text-subtle">{g.group}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {g.items.map((t) => (
                        <span key={t} className="chip !text-fg/85">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <nav className="mt-24 grid gap-4 border-t border-border pt-10 sm:grid-cols-2" aria-label="More projects">
          <Link href={`/projects/${prev.slug}`} className="card group p-6 transition hover:border-border-strong">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" /> Previous
            </span>
            <p className="mt-2 font-semibold">{prev.title}</p>
            <p className="mt-1 line-clamp-1 text-sm text-muted">{prev.tagline}</p>
          </Link>
          <Link href={`/projects/${next.slug}`} className="card group p-6 text-right transition hover:border-border-strong">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              Next <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
            </span>
            <p className="mt-2 font-semibold">{next.title}</p>
            <p className="mt-1 line-clamp-1 text-sm text-muted">{next.tagline}</p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
