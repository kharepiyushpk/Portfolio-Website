import Link from "next/link";
import { profile } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/projects" className="hover:text-fg">
            Projects
          </Link>
          <a href={`mailto:${profile.email}`} className="hover:text-fg">
            Email
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg">
            <GithubIcon />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg">
            <LinkedinIcon />
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-fg">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
