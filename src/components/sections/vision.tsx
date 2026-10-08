"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow } from "@/components/primitives/eyebrow";
import {
  visionIntro,
  visionPillars,
  visionBangladesh,
  responsibleSpace,
  spaceCenter,
  roadmapGoals,
} from "@/content/vision";

/**
 * SEC.06 — VISION
 * Long-term ambition presented as future-facing pillars, clearly labelled
 * per CONTENT-MAP.md ("Future Vision" ≠ current capability).
 */
export function VisionSection() {
  return (
    <section
      id="vision"
      aria-label="Long-term vision"
      className="relative overflow-hidden border-t border-line bg-bg-1"
    >
      {/* Orbit concept backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/media/vision-orbit.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-1 via-bg-1/80 to-bg-1" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="07"
          eyebrow="Vision · Future"
          title={
            <>
              Space infrastructure,
              <br />
              <span className="text-signal">from Bangladesh.</span>
            </>
          }
          description={visionIntro}
          aside={
            <p className="dx-label shrink-0 border border-ember/50 px-3 py-2 text-ember">
              Future vision — not current capability
            </p>
          }
        />

        {/* Three pillars */}
        <div className="mt-12 grid gap-px border border-line bg-line md:mt-16 lg:grid-cols-3">
          {visionPillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 0.08} className="bg-bg-1/95 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="dx-label text-signal">{pillar.index}</p>
                <p className="dx-label text-ink-2">Future Vision</p>
              </div>
              <h3 className="dx-display mt-6 min-h-[2.5em] text-2xl font-semibold text-ink md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-1">
                {pillar.body}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                {pillar.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-ink-1">
                    <span className="h-px w-4 bg-signal" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Flywheel statement */}
        <Reveal className="mt-6">
          <p className="dx-label leading-relaxed text-ink-2">
            Orbital media → attention & revenue → EO data & analytics →
            satellite internet delivery → more users & developers → a stronger
            ecosystem in Bangladesh, Asia and globally.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Bangladesh focus */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-line bg-bg-0/85 p-6 md:p-10">
                <Eyebrow>{visionBangladesh.title}</Eyebrow>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-1 md:text-lg">
                  {visionBangladesh.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {visionBangladesh.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-1 md:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p lang="bn" className="mt-6 border-l-2 border-signal pl-5 text-sm leading-relaxed text-ink-1 md:text-base">
                  {visionBangladesh.bn}
                </p>
              </div>
            </Reveal>

            {/* Roadmap goals from live FAQ */}
            <Reveal delay={0.08}>
              <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
                <div className="bg-bg-0/85 p-6">
                  <p className="dx-label text-ink-2">Roadmap</p>
                  <p className="dx-display mt-3 text-xl font-semibold text-ink md:text-2xl">
                    {roadmapGoals.suborbital}
                  </p>
                </div>
                <div className="bg-bg-0/85 p-6">
                  <p className="dx-label text-ink-2">Roadmap</p>
                  <p className="dx-display mt-3 text-xl font-semibold text-ink md:text-2xl">
                    {roadmapGoals.human}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-ink-2">
                Stated goals from dhumketux.com FAQ — targets, not guarantees.
              </p>
            </Reveal>
          </div>

          {/* Responsible space + Space Center */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-line bg-bg-0/85 p-6 md:p-8">
                <Eyebrow>{responsibleSpace.title}</Eyebrow>
                <ul className="mt-5 space-y-4">
                  {responsibleSpace.points.map((p) => (
                    <li key={p.title} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                      <p className="font-display text-base font-medium text-ink">
                        {p.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-1">
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="border border-signal/30 bg-bg-0/85 p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Eyebrow>{spaceCenter.title}</Eyebrow>
                  <p className="dx-label shrink-0 border border-line-strong px-2 py-1 text-ink-2">
                    Proposed
                  </p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-1">
                  {spaceCenter.body}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                  {spaceCenter.sectors.map((s) => (
                    <li key={s} className="dx-label leading-relaxed text-ink-1">
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="dx-label mt-6 text-ink-2">
                  #OneSkyOneDream #BangladeshInSpace
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
