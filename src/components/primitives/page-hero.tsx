import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Shared interior-page hero: night movement, ghost numeral,
 * oversized display title with optional serif-accent line, lede.
 * Every page opens on night so the fixed header reads consistently.
 */
export function PageHero({
  index,
  title,
  accent,
  lede,
  children,
}: {
  index: string;
  title: string;
  /** Optional italic serif line shown under the title */
  accent?: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section
      aria-label={typeof title === "string" ? title : "Page"}
      className="night relative overflow-hidden bg-night pb-20 pt-40 text-chalk sm:pb-24 sm:pt-48"
    >
      <span
        aria-hidden="true"
        className="qa-ghost right-[-2rem] top-16 text-[clamp(10rem,26vw,22rem)] sm:right-4"
      >
        {index}
      </span>
      <div className="glow-ember left-[-10%] top-[-20%] h-[420px] w-[560px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="qa-display max-w-[16ch] text-[clamp(2.6rem,6.5vw,5.5rem)] text-chalk">
            {title}
          </p>
        </Reveal>
        {accent && (
          <Reveal delay={0.08}>
            <p className="qa-serif mt-3 text-[clamp(1.5rem,3.2vw,2.5rem)] text-chalk-2">
              {accent}
            </p>
          </Reveal>
        )}
        {lede && (
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-2">{lede}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
