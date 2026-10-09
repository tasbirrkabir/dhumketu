"use client";

import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Editorial section opener: mission-control eyebrow + one large statement.
 */
export function SectionIntro({
  statement,
  eyebrow,
  night = true,
  className = "",
}: {
  statement: string;
  /** Mono caps identity line, e.g. "Flagship programs" */
  eyebrow?: string;
  /** Retained for call-site compatibility; all surfaces are dark now. */
  night?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={`qa-statement max-w-4xl text-[clamp(2rem,4.8vw,3.75rem)] text-chalk ${
            eyebrow ? "mt-6" : ""
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
