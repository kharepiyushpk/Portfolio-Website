import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { About, Experience, Skills, TechMarquee } from "@/components/Sections";
import { Contact } from "@/components/Contact";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/profile";

const marquee = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS", "Java", "Spring Boot",
  "MongoDB", "Supabase", "Google Sheets API", "Selenium", "Docker", "Vercel", "Cloudflare", "Razorpay", "Three.js", "Vitest",
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const [lead, ...restFeatured] = featured;
  const more = projects.filter((p) => !p.featured && p.slug !== "portfolio").slice(0, 6);

  const stats = [
    { value: `${projects.length}`, label: "Projects built" },
    { value: `${projects.filter((p) => p.status === "Live" || p.status === "In production").length}`, label: "Live in production" },
    { value: `${skillGroups.reduce((n, g) => n + g.items.length, 0)}+`, label: "Technologies" },
    { value: "3", label: "Teams & products" },
  ];

  return (
    <>
      <Hero stats={stats} />
      <TechMarquee items={marquee} />

      <section id="work" className="py-20 sm:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Products I've designed and built"
              description="Real software used by real people — marketplaces, operations dashboards, learning apps and test automation."
            />
            <Reveal>
              <Link href="/projects" className="btn btn-ghost">
                All {projects.length} projects <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
            <Reveal>
              <ProjectCard project={lead} size="lg" />
            </Reveal>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {restFeatured.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <Skills />

      <section className="border-t border-border bg-bg-soft py-20 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="More projects" title="Client work, Java builds and experiments" />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <ProjectCard project={p} size="sm" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/projects" className="btn btn-primary">
              Explore all projects <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  );
}
