"use client";

import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Editorial section opener: mono kicker with ember dash + one large statement.
 * The statement is still the heading; the kicker gives rhythm and wayfinding.
 */
export function SectionIntro({
  kicker,
  statement,
  night = true,
  className = "",
}: {
  kicker?: string;
  statement: string;
  /** Retained for call-site compatibility; all surfaces are dark now. */
  night?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker && (
        <Reveal>
          <p className="flex items-center gap-3 text-sm font-medium text-amber">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-[#ff5a2c] to-[#ffb25b]" />
            <span className="qa-data uppercase tracking-[0.18em]">{kicker}</span>
          </p>
        </Reveal>
      )}
      <Reveal delay={kicker ? 0.06 : 0}>
        <h2 className="qa-statement mt-5 max-w-3xl text-[clamp(1.9rem,4.5vw,3.5rem)] text-chalk">
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
