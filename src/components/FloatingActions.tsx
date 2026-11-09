"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import { whatsappHref } from "@/data/profile";
import { WhatsappIcon } from "./icons";

// Upar patli progress bar — page kitna scroll hua
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[linear-gradient(90deg,var(--brand),var(--brand-2))]"
    />
  );
}

// Neeche-right: WhatsApp button hamesha, "upar jao" thoda scroll ke baad
export function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="top"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-border-strong bg-[color-mix(in_srgb,var(--card)_85%,transparent)] text-muted shadow-lg backdrop-blur-xl transition hover:text-fg"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", bounce: 0.4 }}
        className="group relative flex h-14 items-center gap-2 rounded-full bg-[#25d366] pl-4 pr-4 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.65)] transition hover:bg-[#1fbe5b] sm:pr-5"
      >
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-20 [animation-duration:2.6s]" />
        <WhatsappIcon className="relative size-6" />
        <span className="relative hidden text-sm font-medium sm:inline">Chat on WhatsApp</span>
      </motion.a>
    </div>
  );
}
