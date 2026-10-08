import { org } from "@/content/org";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/**
 * INTRODUCTION — one statement, one quiet line, four numbers.
 * Minimalism rule: nothing else competes with the type.
 */
export function Intro() {
  return (
    <section aria-label="About DhumketuX" className="bg-paper py-28 sm:py-40 lg:py-48">
      <Container>
        <Reveal>
          <p className="max-w-4xl text-[clamp(1.5rem,3vw,2.375rem)] leading-[1.35] tracking-[-0.015em] text-ink">
            DhumketuX is a commercial civilian space company from Bangladesh —
            <span className="text-ink-2">
              {" "}
              rockets, propulsion, UAVs and satellite systems, built for affordable and
              responsible access to space.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-base text-ink-2">
            {org.meaning} The name carries the ambition: something built here, seen
            everywhere.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-10 sm:grid-cols-4 sm:gap-x-6">
            {org.stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 text-sm text-ink-2">{s.label}</dt>
                <dd className="qa-data order-1 text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
