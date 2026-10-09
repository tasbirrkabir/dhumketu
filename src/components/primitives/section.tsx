"use client";

import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Editorial section opener: one large statement.
 */
export function SectionIntro({
  statement,
  night = true,
  className = "",
}: {
  statement: string;
  /** Retained for call-site compatibility; all surfaces are dark now. */
  night?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal delay={0.06}>
        <h2 className="qa-statement max-w-5xl text-[clamp(2.25rem,5.2vw,4.25rem)] text-chalk">
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
