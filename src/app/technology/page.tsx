import type { Metadata } from "next";
import { Rocket, Flame, Plane, Cpu, RadioTower, Orbit, Layers, Gauge, type LucideIcon } from "lucide-react";
import { capabilityStack } from "@/content/capabilities";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

const CAPABILITY_ICONS: LucideIcon[] = [Rocket, Flame, Plane, Cpu, RadioTower, Orbit, Layers, Gauge];

export const metadata: Metadata = {
  title: "Technological Capabilities · DhumketuX",
  description:
    "One engineering stack: rocket systems, propulsion, UAV autonomy, avionics, telemetry, simulation, materials and test, developed in-house and tested in Bangladesh.",
};

export default function TechnologyPage() {
  return (
    <Shell>
      <CinematicHero
        image="/media/concept-engine-fire.jpg"
        alt=""
        title="Technological capabilities."
        accent="From raw propellant to mission data."
        lede="Every system is developed in-house and tested in Bangladesh: rockets, propulsion, avionics, autonomy and the ground segment that ties them together."
        caption="Concept art, illustrative of a static-fire plume, not a documented test photograph."
      />

      <section aria-label="Capability stack" className="bg-void py-24 sm:py-32">
        <Container>
          <ol className="grid gap-5 lg:grid-cols-2">
            {capabilityStack.map((c, i) => {
              const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
              return (
                <li key={c.id} id={c.id} className="h-full scroll-mt-16">
                  <Reveal delay={Math.min(i * 0.03, 0.15)} className="h-full">
                    <div className="card-lift flex h-full flex-col rounded-3xl border border-edge bg-night-2 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="icon-tile" aria-hidden="true">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <p className="qa-data pt-1 text-xs uppercase tracking-[0.16em] text-chalk-3">
                        {c.index}
                      </p>
                    </div>
                    <h2 className="qa-display mt-5 text-2xl text-chalk sm:text-[1.75rem]">
                      {c.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-chalk-2 sm:text-base">
                      {c.summary}
                    </p>
                    <ul className="mt-7 space-y-3 border-t border-edge pt-6">
                      {c.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-chalk-2">
                          <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-chalk-3/70" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>
    </Shell>
  );
}
