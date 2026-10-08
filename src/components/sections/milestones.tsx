"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { milestones } from "@/content/milestones";

/**
 * SEC.05 — MILESTONES
 * Vertical mission timeline from the live history page. Desktop uses a
 * scroll-linked trajectory line (directional continuity), mobile a static rail.
 */
export function MilestonesSection() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="milestones"
      aria-label="Milestone timeline"
      className="border-t border-line bg-bg-0"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="06"
          eyebrow="Milestones"
          title={
            <>
              A short history with
              <br />
              long firsts.
            </>
          }
          description="From student labs to Bangladesh's first private aerospace company — every entry below is documented on dhumketux.com/history."
        />

        <ol ref={timelineRef} className="relative mt-14 space-y-0 md:mt-20">
          {/* trajectory rail */}
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[89px]"
            aria-hidden="true"
          >
            {!reduce && (
              <motion.div
                className="h-full w-px origin-top bg-signal"
                style={{ scaleY: lineScale }}
              />
            )}
          </div>

          {milestones.map((m, i) => (
            <li
              key={m.id}
              className="relative grid grid-cols-[2rem_1fr] gap-4 pb-12 pl-0 last:pb-0 md:grid-cols-[5rem_10rem_1fr] md:gap-8"
            >
              {/* node */}
              <div className="relative z-10 mt-1.5 flex md:mt-2" aria-hidden="true">
                <span
                  className={
                    "inline-flex h-[15px] w-[15px] items-center justify-center border " +
                    (m.tag === "first" || m.tag === "flight"
                      ? "border-signal bg-bg-0"
                      : "border-line-strong bg-bg-0")
                  }
                >
                  <span
                    className={
                      "h-[5px] w-[5px] " +
                      (m.tag === "first" || m.tag === "flight"
                        ? "bg-signal"
                        : "bg-ink-2")
                    }
                  />
                </span>
              </div>

              {/* year */}
              <div className="hidden md:block">
                <p className="dx-num pt-0.5 text-sm text-ink-1">{m.year}</p>
              </div>
              <div className="md:hidden">
                <p className="dx-num pt-0.5 text-xs text-ink-1">{m.year}</p>
              </div>

              {/* body */}
              <div className="col-span-2 md:col-span-1">
                <Reveal delay={Math.min(i * 0.05, 0.25)}>
                  <span
                    className={
                      "dx-label " +
                      (m.tag === "first" || m.tag === "flight"
                        ? "text-signal"
                        : m.tag === "global"
                          ? "text-ember"
                          : "text-ink-2")
                    }
                  >
                    {m.tag === "first"
                      ? "National First"
                      : m.tag === "flight"
                        ? "First Flight"
                        : m.tag === "award"
                          ? "Recognition"
                          : m.tag === "global"
                            ? "Global Stage"
                            : m.tag === "foundation"
                              ? "Foundations"
                              : "Expansion"}
                  </span>
                  <h3 className="dx-display mt-2 text-2xl font-semibold text-ink md:text-3xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-1 md:text-base">
                    {m.body}
                  </p>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
