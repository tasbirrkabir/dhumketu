"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, StatusChip } from "@/components/primitives/eyebrow";

/**
 * SEC.03 — PROPULSION
 * Thrust ladder rendered from source data (solid + liquid propulsion pages).
 * Bar length ∝ √thrust so 1.5 kN and 120 kN can share one honest scale;
 * the scaling rule is printed on the chart (data-inspired, not decorative).
 */

interface Engine {
  name: string;
  thrustK: number; // kN
  label: string;
  year: string;
  fuel: string;
  mission: string;
  status: "Tested" | "In Development" | "Concept";
  tone: "live" | "active" | "planned";
}

const solidEngines: Engine[] = [
  { name: "Red Chili 01", thrustK: 1.5, label: "1.5 kN", year: "2021", fuel: "KNSB/APCP", mission: "Low atmosphere", status: "Tested", tone: "live" },
  { name: "Red Chili 02", thrustK: 5, label: "5 kN", year: "2022", fuel: "APCP", mission: "Stratosphere", status: "Tested", tone: "live" },
  { name: "Proloy", thrustK: 15, label: "15+ kN", year: "2023", fuel: "Advanced solid", mission: "Mesosphere · 25–50 km", status: "Tested", tone: "live" },
  { name: "Agni Bina", thrustK: 120, label: "120+ kN", year: "2025", fuel: "Advanced solid", mission: "Suborbital · Bidrohi", status: "In Development", tone: "active" },
];

const liquidEngines: Engine[] = [
  { name: "Boson", thrustK: 1.5, label: "1.5+ kN", year: "—", fuel: "LOX + Kerosene", mission: "Autonomous VTVL landing · Revolation V1", status: "In Development", tone: "active" },
  { name: "Ibn Khaldun", thrustK: 35, label: "35 kN", year: "—", fuel: "LOX + Kerosene", mission: "SSLV / cluster · Nazrul 01/02", status: "Concept", tone: "planned" },
];

function ThrustBar({ engine, max }: { engine: Engine; max: number }) {
  const frac = Math.sqrt(engine.thrustK / max); // √ scale, printed on chart
  return (
    <div className="group grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[9rem_1fr] md:gap-5">
      <div>
        <p className="font-display text-sm font-medium text-ink md:text-base">
          {engine.name}
        </p>
        <p className="dx-label mt-0.5 text-ink-2">{engine.year}</p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <div className="relative h-9 min-w-0 flex-1 border border-line bg-bg-2/40">
            <div
              className="absolute inset-y-0 left-0 bg-signal/85 transition-all duration-700 ease-out motion-reduce:transition-none"
              style={{ width: `${Math.max(frac * 100, 2.5)}%` }}
              role="img"
              aria-label={`${engine.name}: ${engine.label} thrust`}
            />
          </div>
          <span className="dx-num w-20 shrink-0 text-right text-xs text-ink">
            {engine.label}
          </span>
        </div>
        <p className="dx-label mt-1.5 text-ink-2">
          {engine.mission} · {engine.fuel}
        </p>
      </div>
    </div>
  );
}

export function PropulsionSection() {
  const max = 120;
  return (
    <section
      id="propulsion"
      aria-label="Propulsion programs"
      className="border-t border-line bg-bg-0"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="04"
          eyebrow="Propulsion"
          title={
            <>
              Propulsion, proven
              <br />
              step by step.
            </>
          }
          description="From Bangladesh's first rocket engine to a 120+ kN booster — every step on the thrust ladder is documented by static test or published program status."
        />

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
          {/* Thrust ladder */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-line">
                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <p className="dx-label text-ink-1">Solid Propulsion · Thrust Ladder</p>
                  <p className="dx-label text-ink-2">bar ∝ √thrust</p>
                </div>
                <div className="space-y-5 px-5 py-6">
                  {solidEngines.map((e) => (
                    <ThrustBar key={e.name} engine={e} max={max} />
                  ))}
                </div>
                <div className="border-t border-line px-5 py-4">
                  <p className="dx-label text-ink-2">
                    Liquid propulsion shares the same ladder
                  </p>
                  <div className="mt-4 space-y-5">
                    {liquidEngines.map((e) => (
                      <ThrustBar key={e.name} engine={e} max={max} />
                    ))}
                  </div>
                </div>
                <div className="border-t border-line px-5 py-4">
                  <p className="text-xs leading-relaxed text-ink-2">
                    Sources: dhumketux.com/solid-propulsion ·
                    /liquid-propulsion. Agni Bina static-fire listed as
                    upcoming; Ibn Khaldun at ~15% work done.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Atmospheric band + spec summary */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <figure className="relative overflow-hidden border border-line">
                <Image
                  src="/media/propulsion-test.png"
                  alt="Decorative concept art: a rocket engine nozzle glowing on a dark test stand."
                  width={1344}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-56 w-full object-cover opacity-90 md:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-0/85 to-transparent" />
                <figcaption className="dx-label absolute bottom-3 left-4 text-ink-1">
                  Concept atmosphere — not actual hardware
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4">
                <Eyebrow marker={false}>Liquid engine comparison</Eyebrow>
                <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                  {liquidEngines.map((e) => (
                    <div key={e.name} className="bg-bg-0 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-display text-lg font-semibold text-ink">
                          {e.name}
                        </p>
                        <StatusChip label={e.status} tone={e.tone} />
                      </div>
                      <p className="dx-num mt-3 text-2xl text-signal">{e.label}</p>
                      <p className="dx-label mt-1 text-ink-2">{e.fuel}</p>
                      <p className="mt-3 text-xs leading-relaxed text-ink-1">
                        {e.mission}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-ink-2">
                  Both engines target reusability: Boson for autonomous landing
                  systems, Ibn Khaldun for cluster-scaled SSLV deployment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
