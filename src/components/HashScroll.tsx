"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const KEY = "scroll-to-section";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  // mobile menu ka scroll-lock pehle hatao
  document.body.style.overflow = "";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  requestAnimationFrame(() => el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }));
  if (id === "main") el.focus?.({ preventScroll: true });
  return true;
}

/**
 * "/#work" jaise links URL me "#" nahi chhodte:
 * - same page pe: seedha smooth scroll, URL wahi rehta hai
 * - doosre page se: home pe jaao (URL "/"), wahan pahunch ke scroll
 * - koi purana "/#work" link khole: scroll karke URL se "#work" hata do
 */
export function HashScroll() {
  const router = useRouter();
  const pathname = usePathname();

  // Link clicks pakdo (capture phase — Next ke Link se pehle)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href") ?? "";
      const m = href.match(/^(\/[^#]*)?#([\w-]+)$/);
      if (!m) return;
      const targetPath = m[1] || window.location.pathname;
      const id = m[2];
      e.preventDefault();
      if (targetPath === window.location.pathname) {
        scrollToId(id);
      } else {
        try {
          sessionStorage.setItem(KEY, id);
        } catch {}
        router.push(targetPath, { scroll: true });
      }
    }
    // Usi page pe sirf "#..." badla (address bar me likha / purana link): scroll + URL saaf
    function onHashChange() {
      const id = window.location.hash.slice(1);
      if (!id) return;
      scrollToId(id);
      setTimeout(() => router.replace(window.location.pathname + window.location.search, { scroll: false }), 500);
    }
    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [router]);

  // Page badalne ke baad (ya pehli baar khulne pe) pending section tak scroll
  useEffect(() => {
    let id: string | null = null;
    try {
      id = sessionStorage.getItem(KEY);
      sessionStorage.removeItem(KEY);
    } catch {}
    const hash = window.location.hash.slice(1);
    if (!id && hash) id = hash;
    // URL se "#..." hatao. Next.js apne router me URL yaad rakhta hai, isliye
    // seedha history badalne ki jagah router se hi replace karo (scroll nahi chhedna)
    const clean = () => {
      if (window.location.hash) router.replace(window.location.pathname + window.location.search, { scroll: false });
    };
    const cleaners = hash ? [700].map((ms) => setTimeout(clean, ms)) : [];
    if (!id) return () => cleaners.forEach(clearTimeout);
    // page transition + content render hone do
    let tries = 0;
    const t = setInterval(() => {
      if (scrollToId(id!) || ++tries > 20) clearInterval(t);
    }, 60);
    return () => {
      clearInterval(t);
      cleaners.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
