import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: `All ${projects.length} projects by Piyush Khare — full stack products, internal tools, client sites, Java apps and experiments, with tech stacks and details.`,
};

export default function ProjectsPage() {
  return (
    <section className="relative pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="container-x">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Everything I&apos;ve <span className="text-gradient">built</span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-muted">
          {projects.length} projects — from production marketplaces and operations dashboards to client websites, Java apps and the small builds where I
          learned the basics. Open any card for the full story and tech stack.
        </p>
        <div className="mt-12">
          <ProjectExplorer />
        </div>
      </div>
    </section>
  );
}
