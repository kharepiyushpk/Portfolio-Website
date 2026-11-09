import Image from "next/image";
import { Lock } from "lucide-react";
import { hostOf, type Project, type ProjectImage } from "@/data/projects";

/** Browser window jaisa frame, address bar me site ka URL */
export function BrowserFrame({
  image,
  url,
  sizes = "(max-width: 768px) 100vw, 720px",
  priority,
  className = "",
}: {
  image: ProjectImage;
  url?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border-strong bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        {url && (
          <span className="mx-auto flex min-w-0 max-w-[70%] items-center gap-1.5 rounded-md bg-bg-soft px-3 py-1 font-mono text-[10px] text-muted sm:text-[11px]">
            <Lock className="size-3 shrink-0 text-green-500" />
            <span className="truncate">{hostOf(url)}</span>
          </span>
        )}
        <span className="w-[46px]" />
      </div>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} priority={priority} className="block h-auto w-full" />
    </div>
  );
}

/** Phone jaisa frame */
export function PhoneFrame({ image, className = "", sizes = "220px" }: { image: ProjectImage; className?: string; sizes?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-[#1c1c22] bg-[#1c1c22] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.6)] ring-1 ring-border-strong ${className}`}>
      <div className="relative overflow-hidden rounded-[1.25rem]">
        <span className="absolute left-1/2 top-1.5 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-[#1c1c22]" />
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} className="block h-auto w-full" />
      </div>
    </div>
  );
}

/** Card cover: desktop screenshot browser frame me + phone frame upar chadha hua */
export function ProjectShot({ project, className = "", priority }: { project: Project; className?: string; priority?: boolean }) {
  const desktop = project.images?.find((i) => i.device === "desktop");
  const mobile = project.images?.find((i) => i.device === "mobile");
  if (!desktop) return null;
  return (
    <div
      style={{ ["--accent" as string]: project.accent }}
      className={`relative overflow-hidden bg-[radial-gradient(120%_90%_at_100%_0%,color-mix(in_srgb,var(--accent)_30%,transparent),transparent_60%),radial-gradient(90%_80%_at_0%_100%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_60%)] ${className}`}
    >
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-x-4 top-5 transition-transform duration-500 [mask-image:linear-gradient(to_bottom,black_75%,transparent)] group-hover:-translate-y-1.5 sm:inset-x-8 sm:top-8">
        <BrowserFrame image={desktop} url={project.links.live} sizes="(max-width: 768px) 92vw, 560px" priority={priority} />
      </div>
      {mobile && (
        <div className="absolute bottom-[-30%] right-3 w-[22%] min-w-[64px] max-w-[140px] transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-[-2deg] sm:right-6">
          <PhoneFrame image={mobile} sizes="150px" />
        </div>
      )}
    </div>
  );
}
