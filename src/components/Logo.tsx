import { useId } from "react";

/** "PK" monogram — wahi design jo favicon (src/app/icon.svg) me hai */
export function Logo({ className = "size-8" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c6cff" />
          <stop offset="1" stopColor="#22b8f0" />
        </linearGradient>
        <linearGradient id={`gl${id}`} x1="32" y1="0" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity=".3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#bg${id})`} />
      <rect x="1" y="1" width="62" height="62" rx="15" fill={`url(#gl${id})`} />
      <g stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 47V16h8a8 8 0 0 1 0 16h-8" />
        <path d="M38 16v31M50 16 38.5 31.5 50 47" />
      </g>
    </svg>
  );
}
