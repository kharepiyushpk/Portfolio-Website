import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: base, priority: 1 },
    { url: `${base}/projects`, priority: 0.9 },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, priority: p.featured ? 0.8 : 0.5 })),
  ];
}
