"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { engageRoutes, collaborationPrinciples } from "@/content/vision";
import { org } from "@/content/org";

/**
 * SEC.10 — ENGAGE
 * Collaboration hub: five explicit routes + working principles + the
 * participatory moments from the live site (Write Your Name Into Space,
 * Donate). Mailto CTAs — no fake forms, no fabricated data collection.
 */
export function EngageSection() {
  return (
    <section
      id="engage"
      aria-label="Engage with DhumketuX"
      className="border-t border-line bg-bg-1 dx-grid-bg"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="11"
          eyebrow="Engage"
          title={
            <>
              Find your place
              <br />
              in the mission.
            </>
          }
          description="Partners, sponsors, universities, students and talent — each route leads to a direct conversation with the team."
        />

        {/* Routes */}
        <div className="mt-12 grid gap-px border border-line bg-line md:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {engageRoutes.map((route, i) => (
            <Reveal key={route.id} delay={i * 0.06} className="group flex bg-bg-1">
              <a
                href={route.href}
                className="flex h-full flex-col p-6 transition-colors hover:bg-bg-2"
              >
                <div className="flex items-center justify-between">
                  <p className="dx-label text-signal">{route.index}</p>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="dx-display mt-8 text-2xl font-semibold text-ink">
                  {route.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-1">
                  {route.body}
                </p>
                <p className="dx-label mt-6 text-ink-2 transition-colors group-hover:text-signal">
                  {route.cta} →
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Principles */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dx-label text-ink-2">Why collaborate with DhumketuX</p>
            </Reveal>
            <ul className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
              {collaborationPrinciples.map((p, i) => (
                <Reveal as="li" key={p.title} delay={Math.min(i * 0.05, 0.2)} className="bg-bg-1 p-6">
                  <p className="font-display text-lg font-medium text-ink">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-1">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <p className="mt-6 text-xs leading-relaxed text-ink-2">
                Note from dhumketux.com/collaborations: DhumketuX does not sell
                or supply aerospace chemicals to any third party. Work touching
                propellants or sensitive materials stays under DhumketuX
                facilities, leadership and protocols.
              </p>
            </Reveal>
          </div>

          {/* Participatory moments */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="border border-signal/30 bg-bg-0 p-6 md:p-8">
                <p className="dx-label text-signal">Write Your Name Into Space</p>
                <p className="dx-display mt-4 text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  200 million names,
                  <br />
                  one rocket.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-1">
                  200 million Bangladeshis&apos; names are printed on the
                  Bidrohi rocket. Submit yours by email and enter the National
                  Space Lottery for a chance to visit the mission control room
                  and witness the launch live.
                </p>
                <a
                  href={`mailto:${org.email}?subject=Find%20My%20Name%20—%20Bidrohi`}
                  className="dx-label mt-6 inline-flex items-center gap-2 border border-signal px-5 py-3 text-signal transition-colors hover:bg-signal hover:text-bg-0"
                >
                  Email to find your name
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="border border-line bg-bg-0 p-6 md:p-8">
                <p className="dx-label text-ink-1">Support the Mission</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-1">
                  Donations support the rocket mission, space education and
                  technologies like the Solar Sail Billboard — inspiring youth
                  and supporting Bangladesh&apos;s space legacy.
                </p>
                <a
                  href={`mailto:${org.email}?subject=Donation`}
                  className="dx-label mt-6 inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
                >
                  Donate — contact the team
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border border-line bg-bg-0 p-6 md:p-8">
                <p className="dx-label text-ink-2">Direct contact</p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`mailto:${org.email}`}
                    className="block font-display text-lg font-medium text-ink transition-colors hover:text-signal"
                  >
                    {org.email}
                  </a>
                  <a
                    href={`tel:${org.phone.replace(/[^+\d]/g, "")}`}
                    className="block dx-num text-sm text-ink-1 transition-colors hover:text-signal"
                  >
                    {org.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
