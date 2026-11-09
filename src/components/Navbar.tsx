"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "All projects" },
];

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-9 place-items-center rounded-full border border-border text-muted transition hover:border-border-strong hover:text-fg"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled || open
            ? "border-border bg-[color-mix(in_srgb,var(--bg)_75%,transparent)] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-transparent"
        }`}
        aria-label="Main"
      >
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image src="/portfolio-logo.svg" alt="" width={28} height={28} className="size-7" priority />
          <span>{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.href === "/projects" ? pathname.startsWith("/projects") : false;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition hover:bg-bg-soft hover:text-fg ${active ? "bg-bg-soft text-fg" : "text-muted"}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" className="btn btn-primary hidden !py-2 !text-sm sm:inline-flex">
            Let&apos;s talk
          </Link>
          <button
            className="grid size-9 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] p-2 backdrop-blur-xl md:hidden"
          >
            {[...links, { href: "/#contact", label: "Contact" }].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base hover:bg-bg-soft">
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
