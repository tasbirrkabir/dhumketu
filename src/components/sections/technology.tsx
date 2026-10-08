import { capabilityStack } from "@/content/capabilities";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/**
 * TECHNOLOGY — the engineering stack as quiet editorial rows.
 * Eight capabilities, hairline separated, no cards.
 */
export function Technology() {
  return (
    <section
      id="technology"
      aria-label="Technology"
      className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <SectionIntro
          eyebrow="Technology"
          statement="One engineering stack — from raw propellant to mission data."
        />

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2">
            Every system is developed in-house and tested in Bangladesh — rockets,
            propulsion, avionics, autonomy and the ground segment that ties them
            together.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          <ul>
            {capabilityStack.map((c, i) => (
              <Reveal as="li" key={c.id} delay={Math.min(i * 0.03, 0.18)}>
                <div
                  className={`group grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-7 transition-colors duration-300 sm:grid-cols-[4rem_1fr_1.35fr] sm:gap-x-8 sm:py-8 ${
                    i === capabilityStack.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="qa-data pt-1 text-sm text-ink-3">{c.index}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="col-start-2 mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-2 sm:col-start-3 sm:mt-0 sm:pt-1">
                    {c.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
