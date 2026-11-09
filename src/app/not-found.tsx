import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80dvh] place-items-center px-4 pt-24 text-center">
      <div>
        <p className="font-mono text-sm text-brand">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">This page doesn&apos;t exist</h1>
        <p className="mt-4 text-muted">The link may be old, or the project was renamed.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            See projects
          </Link>
        </div>
      </div>
    </section>
  );
}
