import { Reveal } from "./Reveal";
import { SplitWords } from "./motion-kit";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal y={10}>
        <p className="eyebrow inline-flex items-center gap-2">
          <span className="h-px w-6 bg-brand" />
          {eyebrow}
        </p>
      </Reveal>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {typeof title === "string" ? <SplitWords text={title} /> : <Reveal>{title}</Reveal>}
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-pretty text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
