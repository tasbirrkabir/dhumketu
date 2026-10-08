import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Editorial section opener: eyebrow + large statement, whitespace-dense.
 * `night` flips the voice for dark movements.
 */
export function SectionIntro({
  eyebrow,
  statement,
  night = false,
  className = "",
}: {
  eyebrow: string;
  statement: string;
  night?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <p className="qa-eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`qa-statement mt-5 max-w-3xl text-[clamp(1.9rem,4.5vw,3.5rem)] ${
            night ? "text-chalk" : "text-ink"
          }`}
        >
          {statement}
        </h2>
      </Reveal>
    </div>
  );
}

/** Consistent content column. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
