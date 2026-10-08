import { org } from "@/content/org";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { Counter } from "@/components/primitives/ui-bits";

/**
 * INTRODUCTION: one statement, one quiet line, four live counters
 * on glass cards. The numbers carry the section.
 */
export function Intro() {
  return (
    <section aria-label="About DhumketuX" className="relative overflow-hidden bg-void py-24 sm:py-32 lg:py-40">
      <div className="glow-ember right-[-14%] top-[0%] h-[380px] w-[560px] opacity-70" aria-hidden="true" />
      <Container>
        <Reveal>
          <p className="max-w-4xl text-[clamp(1.5rem,3vw,2.375rem)] leading-[1.35] tracking-[-0.015em] text-chalk">
            DhumketuX is a commercial civilian space company from Bangladesh:
            <span className="text-chalk-2">
              {" "}
              rockets, propulsion, UAVs and satellite systems, built for affordable and
              responsible access to space.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-base text-chalk-2">
            <span className="qa-serif">{org.meaning}</span> The name carries
            the ambition: something built here, seen everywhere.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <dl className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {org.stats.map((s) => (
              <div
                key={s.label}
                className="glass card-lift rounded-2xl p-5 sm:p-6"
              >
                <dd className="order-1 text-3xl font-semibold tracking-[-0.02em] text-chalk sm:text-4xl">
                  <Counter value={s.value} className="text-chalk" />
                </dd>
                <dt className="order-2 mt-2 text-sm leading-snug text-chalk-2">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
