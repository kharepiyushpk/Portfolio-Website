"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X } from "lucide-react";
import { categories, projects, type Category } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectExplorer() {
  const [cat, setCat] = useState<Category | "All">("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter((p) => {
      if (cat !== "All" && !p.categories.includes(cat)) return false;
      if (!term) return true;
      const hay = [p.title, p.tagline, p.summary, p.context, ...p.stack.flatMap((g) => g.items)].join(" ").toLowerCase();
      return hay.includes(term);
    });
  }, [cat, q]);

  const count = (c: Category | "All") => (c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter by category">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`relative shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                cat === c ? "border-fg text-bg" : "border-border text-muted hover:border-border-strong hover:text-fg"
              }`}
            >
              {cat === c && <motion.span layoutId="cat-pill" className="absolute inset-0 -z-0 rounded-full bg-fg" transition={{ type: "spring", bounce: 0.2, duration: 0.45 }} />}
              <span className="relative">
                {c} <span className="opacity-60">{count(c)}</span>
              </span>
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search projects</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-subtle" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or tech…"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-10 text-sm outline-none transition placeholder:text-subtle focus:border-brand focus:ring-4 focus:ring-[var(--ring)]"
          />
          {q && (
            <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-fg">
              <X className="size-4" />
            </button>
          )}
        </label>
      </div>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} size="sm" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && (
        <p className="mt-16 text-center text-muted">
          No projects match “{q}”. Try another technology, like <button className="underline" onClick={() => setQ("Next.js")}>Next.js</button>.
        </p>
      )}
    </div>
  );
}
