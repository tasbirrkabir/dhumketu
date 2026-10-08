"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { leadership, advisors, teamFacts } from "@/content/team";

/**
 * SEC.08 — HUMAN LAYER
 * Real leadership & advisors from dhumketux.com/our-team, plus team
 * composition facts. No invented credentials.
 */
export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="Team and leadership"
      className="border-t border-line bg-bg-1"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="08"
          eyebrow="People"
          title={
            <>
              The humans behind
              <br />
              the hardware.
            </>
          }
          description={`${teamFacts.size} members from ${teamFacts.universities} — and ${teamFacts.international}.`}
        />

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
          {/* Founder feature */}
          <div className="lg:col-span-5">
            <Reveal>
              <article className="h-full border border-line bg-bg-0">
                <div className="relative overflow-hidden border-b border-line">
                  <Image
                    src="/media/team-workshop.png"
                    alt="Decorative concept art: engineers collaborating around hardware in a dim workshop."
                    width={1344}
                    height={768}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="h-52 w-full object-cover opacity-90 md:h-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-0/80 to-transparent" />
                  <p className="dx-label absolute bottom-3 left-4 text-ink-1">
                    Concept atmosphere — not an actual team photo
                  </p>
                </div>
                {leadership.map((person) => (
                  <div key={person.name} className="p-6 md:p-8">
                    <p className="dx-label text-signal">Founder & CEO</p>
                    <h3 className="dx-display mt-3 text-3xl font-semibold text-ink">
                      {person.name}
                    </h3>
                    <p className="dx-label mt-2 text-ink-2">{person.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-1">
                      {person.bio}
                    </p>
                  </div>
                ))}
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 border border-signal/30 bg-bg-0 p-6">
                <p className="dx-label text-signal">{teamFacts.movement}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-1">
                  “At Dhumketu Exploration Technologies Limited, we believe that
                  building Bangladesh&apos;s future in space is not just a
                  company goal — it&apos;s a national mission.”
                </p>
                <p className="dx-label mt-4 text-ink-2">
                  Source: dhumketux.com/our-team
                </p>
              </div>
            </Reveal>
          </div>

          {/* Advisors */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dx-label text-ink-2">Advisory Board</p>
            </Reveal>
            <ul className="mt-5 border-t border-line">
              {advisors.map((person, i) => (
                <Reveal as="li" key={person.name} delay={i * 0.06}>
                  <article className="group grid gap-3 border-b border-line py-6 md:grid-cols-[14rem_1fr] md:gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-signal">
                        {person.name}
                      </h3>
                      <p className="dx-label mt-1.5 text-ember">{person.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-1">
                      {person.bio}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
                <div className="bg-bg-1 p-5">
                  <p className="dx-num text-2xl text-ink md:text-3xl">50+</p>
                  <p className="dx-label mt-2 text-ink-2">Team members</p>
                </div>
                <div className="bg-bg-1 p-5">
                  <p className="dx-num text-2xl text-ink md:text-3xl">20+</p>
                  <p className="dx-label mt-2 text-ink-2">Universities</p>
                </div>
                <div className="col-span-2 bg-bg-1 p-5 sm:col-span-1">
                  <p className="dx-num text-2xl text-ink md:text-3xl">30%</p>
                  <p className="dx-label mt-2 text-ink-2">
                    Intl. graduates & researchers
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
