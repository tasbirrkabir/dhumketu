import type { Metadata } from "next";
import { capabilityStack } from "@/content/capabilities";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

export const metadata: Metadata = {
  title: "Technological Capabilities — DhumketuX",
  description:
    "One engineering stack — rocket systems, propulsion, UAV autonomy, avionics, telemetry, simulation, materials and test — developed in-house and tested in Bangladesh.",
};

export default function TechnologyPage() {
  return (
    <Shell>
      <PageHero
        index="08"
        title="Technological capabilities."
        accent="From raw propellant to mission data."
        lede="Every system is developed in-house and tested in Bangladesh — rockets, propulsion, avionics, autonomy and the ground segment that ties them together."
      />

      <section aria-label="Capability stack" className="bg-paper py-24 sm:py-32">
        <Container>
          <ol>
            {capabilityStack.map((c, i) => (
              <Reveal as="li" key={c.id} delay={Math.min(i * 0.03, 0.15)}>
                <div className="grid gap-y-5 border-t border-line py-12 sm:grid-cols-[4rem_1fr] sm:gap-x-10 sm:py-14">
                  <span className="qa-data pt-2 text-sm text-ink-3">{c.index}</span>
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                        {c.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
                        {c.summary}
                      </p>
                    </div>
                    <ul className="space-y-3 self-center">
                      {c.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 border-t border-line pt-3 text-[0.9375rem] text-ink-2 first:border-0 first:pt-0"
                        >
                          <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ink-3" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ol>
        </Container>
      </section>
    </Shell>
  );
}
