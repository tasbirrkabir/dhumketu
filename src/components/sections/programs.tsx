"use client";

import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { programs } from "@/content/team";

/**
 * SEC.07 — PROGRAMS
 * DBF pipeline + student ecosystem + community platforms (live site data).
 */
export function ProgramsSection() {
  return (
    <section
      id="programs"
      aria-label="Programs"
      className="border-t border-line bg-bg-0"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="09"
          eyebrow="Programs"
          title={
            <>
              Building people,
              <br />
              while building rockets.
            </>
          }
          description="A structured pipeline from classroom to flight line: Design-Build-Fly with DhumketuX, BAXRC and Rocketry Bangladesh — plus internships, virtual labs and national community platforms."
        />

        {/* DBF tracks */}
        <div className="mt-12 md:mt-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow marker={false}>“Design, Build, Fly” Program</Eyebrow>
              <span className="dx-label border border-line-strong px-2 py-1 text-ink-2">
                with {programs.dbf.partners.join(" · ")}
              </span>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-px border border-line bg-line lg:grid-cols-3">
            {programs.dbf.tracks.map((track, i) => (
              <Reveal key={track.id} delay={i * 0.08} className="bg-bg-0 p-6 md:p-8">
                <p className="dx-num text-xs text-signal">T-{String(i + 1).padStart(2, "0")}</p>
                <h3 className="dx-display mt-4 text-2xl font-semibold text-ink">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-1">
                  {track.body}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Program journey */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="dx-label text-ink-2">
                  Program journey — from concept to flight
                </p>
              </Reveal>
              <ol className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
                {programs.dbf.journey.map((step, i) => (
                  <Reveal
                    as="li"
                    key={step.step}
                    delay={i * 0.05}
                    className="bg-bg-0 p-5"
                  >
                    <p className="dx-num text-xs text-signal">{step.step}</p>
                    <p className="mt-3 font-display text-sm font-medium leading-snug text-ink">
                      {step.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-ink-2">
                      {step.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="h-full border border-ember/40 bg-bg-1 p-6">
                  <p className="dx-label text-ember">Safety · NDA · IP</p>
                  <ul className="mt-4 space-y-3">
                    {programs.dbf.safety.map((s) => (
                      <li key={s} className="flex gap-3 text-xs leading-relaxed text-ink-1">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-ember" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Student programs + community platforms */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow marker={false}>Student Programs</Eyebrow>
            </Reveal>
            <ul className="mt-5 border-t border-line">
              {programs.studentPrograms.map((p, i) => (
                <Reveal as="li" key={p.title} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                    <p className="font-display text-base font-medium text-ink md:text-lg">
                      {p.title}
                    </p>
                    <p className="dx-label text-right text-ink-2">{p.note}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <Eyebrow marker={false}>Community Platforms</Eyebrow>
            </Reveal>
            <div className="mt-5 flex flex-wrap gap-2">
              {programs.communityPlatforms.map((c, i) => (
                <Reveal key={c} delay={Math.min(i * 0.03, 0.2)} direction="up" distance={8}>
                  <span className="inline-block border border-line px-3.5 py-2 dx-label text-ink-1 transition-colors hover:border-signal hover:text-signal">
                    {c}
                  </span>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.12}>
              <p className="mt-6 text-xs leading-relaxed text-ink-2">
                Note: the DhumketuX Community organization-based program ran
                2022–2024 and has ended; training and certification now operate
                directly under Dhumketu Exploration Technologies Ltd.
                (source: dhumketux.com/history).
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
