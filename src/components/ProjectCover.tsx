import type { CoverKind } from "@/data/projects";

// Har project ke liye ek chhota "mock UI" illustration — screenshots ki jagah.
// Sab kuch CSS se, accent colour project se aata hai.

const bar = "rounded-full bg-[color-mix(in_srgb,var(--fg)_14%,transparent)]";
const block = "rounded-md bg-[color-mix(in_srgb,var(--fg)_7%,transparent)]";
const acc = "bg-[var(--accent)]";
const accSoft = "bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]";

function Window({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="flex w-full max-w-[540px] flex-col overflow-hidden rounded-xl border border-border-strong bg-card shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
        {title && <span className="ml-2 truncate font-mono text-[10px] text-subtle">{title}</span>}
      </div>
      <div className="relative flex-1 p-3">{children}</div>
    </div>
  );
}

function Marketplace() {
  return (
    <Window title="kaasthify.in">
      <div className={`mb-2 h-10 rounded-lg ${accSoft} flex items-center px-3`}>
        <div className={`h-2 w-20 ${bar}`} />
        <div className={`ml-auto h-4 w-12 rounded-full ${acc}`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-1">
            <div className={`aspect-square ${block} relative overflow-hidden`}>
              <div className={`absolute bottom-2 left-1/2 h-1/3 w-2/3 -translate-x-1/2 rounded-sm ${i % 2 ? accSoft : acc} opacity-80`} />
              <div className="absolute bottom-[calc(33%+8px)] left-1/2 h-1/5 w-1/2 -translate-x-1/2 rounded-t-md bg-[color-mix(in_srgb,var(--accent)_45%,transparent)]" />
            </div>
            <div className={`h-1.5 w-3/4 ${bar}`} />
          </div>
        ))}
      </div>
    </Window>
  );
}

function Dashboard() {
  return (
    <Window title="batch-ops / live-arrange">
      <div className="flex gap-2">
        <div className="hidden w-1/4 space-y-1.5 sm:block">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`h-3 rounded ${i === 1 ? acc : block}`} />
          ))}
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`h-8 flex-1 rounded-md ${i === 0 ? accSoft : block}`} />
            ))}
          </div>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 ${i === 2 ? `${accSoft} ring-1 ring-[var(--accent)]` : block}`}>
              <div className={`size-2 rounded-full ${i === 2 ? acc : "bg-green-500/70"}`} />
              <div className={`h-1.5 w-1/3 ${bar}`} />
              <div className={`ml-auto h-1.5 w-1/5 ${bar}`} />
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function Video() {
  const wave = [3, 6, 9, 4, 2, 1, 1, 7, 10, 6, 3, 1, 1, 1, 5, 8, 9, 4, 2, 1, 6, 9, 5, 3, 1, 1, 4, 7];
  return (
    <Window title="timing-tool.m3u8">
      <div className={`relative mb-2 h-24 rounded-lg ${block} grid place-items-center`}>
        <div className={`grid size-8 place-items-center rounded-full ${acc}`}>
          <div className="ml-0.5 size-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
        </div>
      </div>
      <div className="flex h-10 items-center gap-[2px]">
        {wave.map((h, i) => (
          <div key={i} className={`flex-1 rounded-full ${h <= 1 ? "bg-[color-mix(in_srgb,var(--fg)_12%,transparent)]" : acc}`} style={{ height: `${h * 9 + 8}%`, opacity: h <= 1 ? 1 : 0.85 }} />
        ))}
      </div>
      <div className="mt-2 flex gap-1">
        {["Q", "C", "W", "E", "R"].map((k) => (
          <span key={k} className="grid size-5 place-items-center rounded border border-border-strong font-mono text-[9px] text-muted">
            {k}
          </span>
        ))}
      </div>
    </Window>
  );
}

function Learning() {
  return (
    <div className="mx-auto flex h-full w-[46%] min-w-[130px] flex-col overflow-hidden rounded-[1.4rem] border-4 border-border-strong bg-card p-2.5 shadow-xl">
      <div className={`mb-2 h-2 w-1/2 ${bar}`} />
      <div className={`relative mb-2 flex-1 rounded-xl ${accSoft} overflow-hidden`}>
        <div className={`absolute left-[20%] top-1/2 size-5 -translate-y-1/2 rounded-full ${acc}`} />
        <div className="absolute right-[20%] top-1/2 size-5 -translate-y-1/2 rounded-full bg-sky-500" />
        <div className="absolute left-[30%] right-[30%] top-1/2 h-px border-t border-dashed border-[var(--fg)] opacity-40" />
      </div>
      {[0, 1, 2].map((i) => (
        <div key={i} className={`mb-1 rounded-md px-2 py-1.5 text-[8px] ${i === 1 ? `${acc} text-white` : block}`}>
          <div className={`h-1 w-2/3 rounded-full ${i === 1 ? "bg-white/70" : "bg-[color-mix(in_srgb,var(--fg)_18%,transparent)]"}`} />
        </div>
      ))}
    </div>
  );
}

function Tests() {
  const rows = ["HomePageTest", "CheckoutTest", "VendorOrdersTest", "AdminPayoutsTest", "OrderLifecycleE2E", "MobileLayoutTest"];
  return (
    <Window title="mvn test">
      <div className="space-y-1 font-mono text-[10px]">
        {rows.map((r) => (
          <div key={r} className="flex items-center gap-2">
            <span className="text-[var(--accent)]">✓</span>
            <span className="truncate text-muted">{r}</span>
            <span className={`ml-auto h-1 w-10 rounded-full ${acc} opacity-60`} />
          </div>
        ))}
        <div className="pt-1 text-[var(--accent)]">BUILD SUCCESS</div>
      </div>
    </Window>
  );
}

function Store() {
  return (
    <Window title="store">
      <div className="grid h-36 grid-cols-[1.2fr_1fr] gap-2">
        <div className={`relative rounded-lg ${accSoft} grid place-items-center`}>
          <div className={`size-12 rotate-45 rounded-md border-4 border-[var(--accent)]`} />
        </div>
        <div className="space-y-1.5">
          <div className={`h-2 w-3/4 ${bar}`} />
          <div className={`h-1.5 w-1/2 ${bar}`} />
          <div className={`h-4 w-1/3 rounded ${acc}`} />
          <div className={`h-12 rounded-md ${block}`} />
          <div className={`h-6 rounded-full ${acc}`} />
        </div>
      </div>
    </Window>
  );
}

function Table() {
  return (
    <Window title="attendance.xlsx">
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 36 }).map((_, i) => {
          const header = i < 6;
          const mark = !header && i % 6 !== 0;
          const present = (i * 7) % 5 !== 0;
          return (
            <div
              key={i}
              className={`h-4 rounded-sm ${header ? acc : mark ? (present ? "bg-green-500/30" : "bg-red-500/30") : block}`}
            />
          );
        })}
      </div>
    </Window>
  );
}

function Site() {
  return (
    <Window title="index.html">
      <div className="flex items-center justify-between">
        <div className={`h-2 w-10 ${bar}`} />
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-1.5 w-5 ${bar}`} />
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className={`h-3 w-3/4 rounded-full ${acc}`} />
        <div className={`h-3 w-1/2 rounded-full ${accSoft}`} />
        <div className={`h-1.5 w-2/3 ${bar}`} />
        <div className={`mt-2 h-5 w-16 rounded-full ${acc}`} />
      </div>
      <div className="absolute bottom-3 right-3 size-14 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-60" />
    </Window>
  );
}

function Api() {
  const lines = [
    ["GET", "/companies"],
    ["POST", "/jobs"],
    ["GET", "/jobs/{id}"],
    ["PUT", "/companies/{id}"],
    ["GET", "/reviews"],
  ];
  return (
    <Window title="api">
      <div className="space-y-1.5 font-mono text-[10px]">
        {lines.map(([m, p]) => (
          <div key={p + m} className="flex items-center gap-2">
            <span className={`w-9 rounded px-1 text-center text-[9px] text-white ${m === "GET" ? acc : "bg-sky-600"}`}>{m}</span>
            <span className="truncate text-muted">{p}</span>
            <span className="ml-auto text-green-500">200</span>
          </div>
        ))}
      </div>
    </Window>
  );
}

function Desktop() {
  return (
    <Window title="ATM">
      <div className="grid h-28 grid-cols-3 gap-2">
        {["Deposit", "Withdraw", "Fast Cash", "Statement", "Balance", "PIN"].map((t, i) => (
          <div key={t} className={`grid place-items-center rounded-md text-[9px] font-medium ${i === 0 ? `${acc} text-white` : `${block} text-muted`}`}>
            {t}
          </div>
        ))}
      </div>
    </Window>
  );
}

function Chat() {
  return (
    <Window title="chat">
      <div className="flex h-32 flex-col justify-end gap-1.5">
        <div className={`h-5 w-1/2 rounded-xl rounded-bl-sm ${block}`} />
        <div className={`ml-auto h-5 w-2/5 rounded-xl rounded-br-sm ${acc}`} />
        <div className={`h-5 w-3/5 rounded-xl rounded-bl-sm ${block}`} />
        <div className={`ml-auto h-5 w-1/3 rounded-xl rounded-br-sm ${acc}`} />
      </div>
    </Window>
  );
}

function Pipeline() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      {["PR", "Build", "Test", "Deploy"].map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`grid size-12 place-items-center rounded-xl border border-border-strong bg-card font-mono text-[10px] shadow ${i === 3 ? "ring-2 ring-[var(--accent)]" : ""}`}>
            <span className={i < 3 ? "text-green-500" : "text-[var(--accent)]"}>{i < 3 ? "✓" : "▶"}</span>
            <span className="text-muted">{s}</span>
          </div>
          {i < 3 && <div className={`h-0.5 w-3 ${acc}`} />}
        </div>
      ))}
    </div>
  );
}

function Booking() {
  return (
    <Window title="select seats">
      <div className="mx-auto grid w-3/4 grid-cols-5 gap-1.5">
        {Array.from({ length: 25 }).map((_, i) =>
          i % 5 === 2 ? (
            <div key={i} />
          ) : (
            <div key={i} className={`aspect-square rounded-t-md ${[3, 7, 16].includes(i) ? acc : [1, 11, 19, 23].includes(i) ? "bg-[color-mix(in_srgb,var(--fg)_25%,transparent)]" : block}`} />
          ),
        )}
      </div>
    </Window>
  );
}

function Basic() {
  return (
    <Window title="index.html">
      <div className="mx-auto mt-1 w-2/3 space-y-2 rounded-lg border border-border p-3">
        <div className={`mx-auto h-2 w-1/2 ${bar}`} />
        <div className={`h-5 rounded ${block}`} />
        <div className={`h-5 rounded ${block}`} />
        <div className={`h-5 rounded ${acc}`} />
      </div>
    </Window>
  );
}

const map: Record<CoverKind, () => React.ReactElement> = {
  marketplace: Marketplace,
  dashboard: Dashboard,
  video: Video,
  learning: Learning,
  tests: Tests,
  store: Store,
  table: Table,
  site: Site,
  api: Api,
  desktop: Desktop,
  chat: Chat,
  pipeline: Pipeline,
  booking: Booking,
  basic: Basic,
};

export function ProjectCover({ kind, accent, className = "" }: { kind: CoverKind; accent: string; className?: string }) {
  const Comp = map[kind];
  return (
    <div
      aria-hidden
      style={{ ["--accent" as string]: accent }}
      className={`relative overflow-hidden bg-[radial-gradient(120%_90%_at_100%_0%,color-mix(in_srgb,var(--accent)_28%,transparent),transparent_60%),radial-gradient(90%_80%_at_0%_100%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_60%)] ${className}`}
    >
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-0 flex items-start justify-center px-5 pt-6 transition-transform duration-500 [mask-image:linear-gradient(to_bottom,black_72%,transparent)] group-hover:-translate-y-1 sm:px-8 sm:pt-8">
        <Comp />
      </div>
    </div>
  );
}
