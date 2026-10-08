"use client";

import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { org } from "@/content/org";

/**
 * SEC.01 — MISSION / INTRODUCTION
 * Answers "What is DhumketuX and why does it exist" within the first
 * screenful after the hero (PRD §6 Section 02, success criteria §8).
 */
export function MissionSection() {
  return (
    <section
      id="mission"
      aria-label="About DhumketuX"
      className="border-t border-line bg-bg-0 dx-grid-bg-fine"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>SEC. 01 / Mission — What & Why</Eyebrow>
            <Reveal>
              <h2 className="dx-display mt-6 text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl md:text-6xl">
                A commercial civilian space company —{" "}
                <span className="text-ink-2">
                  building what has never been built here before.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-1 md:text-lg">
                <p>
                  {org.description}
                </p>
                <p>
                  Founded in {org.founded} by {org.founder}, DhumketuX is
                  widely recognized as Bangladesh&apos;s first private
                  aerospace company — a platform where rocketry, UAVs,
                  satellite-related systems, avionics and mission software are
                  designed, built and tested as one integrated engineering
                  culture.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
                <div className="bg-bg-0 p-5">
                  <p className="dx-label text-ink-2">Origin</p>
                  <p className="mt-2 font-display text-base font-medium text-ink">
                    Student labs & DIY rockets
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-2">
                    The build → test → document → improve culture
                  </p>
                </div>
                <div className="bg-bg-0 p-5">
                  <p className="dx-label text-ink-2">Flagship initiative</p>
                  <p className="mt-2 font-display text-base font-medium text-ink">
                    {org.flagshipInitiative}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-2">
                    Advanced technology meets sustainability
                  </p>
                </div>
                <div className="bg-bg-0 p-5">
                  <p className="dx-label text-ink-2">Mission intent</p>
                  <p className="mt-2 font-display text-base font-medium text-ink">
                    Affordable, responsible access
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-2">
                    Globally competitive — from the region
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Editorial side column */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <figure className="border border-line bg-bg-1 p-6 md:p-8">
                <blockquote className="relative">
                  <span
                    className="dx-display absolute -left-1 -top-6 select-none text-7xl text-signal/30"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p className="relative text-lg leading-relaxed text-ink md:text-xl">
                    Creativity starts from belief.
                  </p>
                  <footer className="mt-5">
                    <p className="dx-label text-ink-1">{org.founder}</p>
                    <p className="dx-label mt-1 text-ink-2">
                      Founder — {org.legalName}
                    </p>
                  </footer>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-ink-2">
                  Team credo published on dhumketux.com. The FAQ frames the
                  goal plainly: launch a rocket fully designed and made by the
                  team&apos;s own technology — the first in Bangladesh&apos;s
                  history.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-6 space-y-0 border-t border-line">
                {[
                  ["Founded", `${org.founded}`],
                  ["First engine test", "2021 — Red Chili 01"],
                  ["First launch", "7 Feb 2023 — Putimach 01"],
                  ["Launch site", org.launchSite.name],
                  ["Recognition", "A2i Innovation 2022 · IISS Singapore 2025"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                  >
                    <dt className="dx-label shrink-0 text-ink-2">{k}</dt>
                    <dd className="dx-num text-right text-sm text-ink-1">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
