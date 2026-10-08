import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Editorial section opener: one large statement, nothing else.
 * Minimalism rule — the heading IS the section marker; no eyebrow labels.
 */
export function SectionIntro({
  statement,
  night = false,
  className = "",
}: {
  statement: string;
  night?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <h2
          className={`qa-statement max-w-3xl text-[clamp(1.9rem,4.5vw,3.5rem)] ${
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
