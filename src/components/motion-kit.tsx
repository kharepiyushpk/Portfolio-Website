"use client";

// Reusable animation pieces. Sab "prefers-reduced-motion" ka dhyan rakhte hain,
// aur mouse-based effects (tilt, magnetic, glow) sirf mouse wale devices pe chalte hain.

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** true sirf tab jab device pe mouse/trackpad hai (touch phones pe false) */
export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(mq.matches);
    const on = () => setFine(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return fine;
}

/* ------------------------------------------------------------------ */
/* CountUp — "21", "46+", "~60" jaise numbers 0 se gin ke aate hain     */
/* ------------------------------------------------------------------ */
export function CountUp({ value, duration = 1.6, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const m = value.match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    if (!m || !inView || !ref.current) return;
    const [, pre, num, post] = m;
    const el = ref.current;
    const controls = animate(0, Number(num), {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = `${pre}${Math.round(v)}${post}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // Server pe asli value render hoti hai (SEO + JS na ho tab bhi sahi)
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SplitWords — har word neeche se mask ke andar se ubharta hai          */
/* ------------------------------------------------------------------ */
export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  inView = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** false = page load pe hi chalo (hero ke liye) */
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-60px" } }
    : { animate: "show" };

  return (
    <motion.span className={className} initial="hidden" {...trigger} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: "105%", rotate: 4, opacity: 0 },
              show: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 0.75, ease, delay: delay + i * stagger } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — button cursor ki taraf thoda khinchta hai                 */
/* ------------------------------------------------------------------ */
export function Magnetic({ children, strength = 0.35, className }: { children: React.ReactNode; strength?: number; className?: string }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 15, mass: 0.4 });
  const active = fine && !reduce;

  return (
    <motion.span
      ref={ref}
      style={active ? { x, y } : undefined}
      className={`inline-block ${className ?? ""}`}
      whileTap={{ scale: 0.94 }}
      onPointerMove={(e) => {
        if (!active || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Tilt — card mouse ke saath 3D me jhukta hai + halki chamak            */
/* ------------------------------------------------------------------ */
export function Tilt({
  children,
  className,
  max = 6,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 18, mass: 0.5 };
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(500px circle at ${gx} ${gy}, rgba(255,255,255,0.09), transparent 45%)`;

  // Phone/touch: mouse nahi hai, to card scroll pe 3D me "khada" hota hai aur dabane pe press hota hai
  if (!active)
    return (
      <div className={`[perspective:900px] ${className ?? ""}`}>
        <motion.div
          className="relative h-full"
          initial={reduce ? false : { rotateX: 14, y: 28, scale: 0.96 }}
          whileInView={{ rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 110, damping: 18, mass: 0.8 }}
          whileTap={{ scale: 0.985 }}
          style={{ transformOrigin: "50% 100%" }}
        >
          {children}
        </motion.div>
      </div>
    );

  return (
    <div className={`[perspective:1100px] ${className ?? ""}`}>
      <motion.div
        ref={ref}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group/tilt relative h-full will-change-transform"
        onPointerMove={(e) => {
          if (!ref.current) return;
          const r = ref.current.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width);
          py.set((e.clientY - r.top) / r.height);
        }}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger — bachche ek-ek karke aate hain                              */
/* ------------------------------------------------------------------ */
export function Stagger({
  children,
  className,
  gap = 0.07,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Comp>
  );
}

export const itemVariants = {
  rise: {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.85, y: 6 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 320, damping: 22 } },
  },
  slide: {
    hidden: { opacity: 0, x: -14 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
  },
};

export function StaggerItem({
  children,
  className,
  variant = "rise",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof itemVariants;
  as?: "div" | "li" | "span" | "dt" | "dd";
}) {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={itemVariants[variant]}>
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollLine — timeline ki line scroll ke saath bharti hai              */
/* ------------------------------------------------------------------ */
export function ScrollLine({ targetRef, className }: { targetRef: React.RefObject<HTMLElement | null>; className?: string }) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <div aria-hidden className={`pointer-events-none absolute w-px bg-border-strong ${className ?? ""}`}>
      <motion.div style={{ scaleY }} className="absolute inset-0 origin-top bg-[linear-gradient(to_bottom,var(--brand),var(--brand-2))]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax — scroll pe element thoda dheere/tez chalta hai             */
/* ------------------------------------------------------------------ */
export function Parallax({ children, offset = 40, className }: { children: React.ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* CursorGlow — section ke background me cursor ke peeche roshni         */
/* ------------------------------------------------------------------ */
export function CursorGlow({ size = 520 }: { size?: number }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useSpring(-1000, { stiffness: 90, damping: 20 });
  const y = useSpring(-1000, { stiffness: 90, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fine || reduce) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      x.set(e.clientX - r.left - size / 2);
      y.set(e.clientY - r.top - size / 2);
    };
    parent.addEventListener("pointermove", move);
    return () => parent.removeEventListener("pointermove", move);
  }, [fine, reduce, size, x, y]);

  if (!fine || reduce) return <div ref={ref} hidden />;
  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ x, y, width: size, height: size }}
      className="pointer-events-none absolute left-0 top-0 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
    />
  );
}

export type { MotionValue };
