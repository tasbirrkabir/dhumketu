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
      <div className="glow-brand left-[-16%] bottom-[6%] h-[420px] w-[600px] opacity-60" aria-hidden="true" />
      <Container>
        <Reveal>
          <p className="eyebrow">The company</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-6 max-w-4xl text-[clamp(1.5rem,3vw,2.375rem)] leading-[1.35] tracking-[-0.015em] text-chalk">
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
            {org.stats.map((s, i) => (
              <div
                key={s.label}
                className="panel card-lift group relative overflow-hidden rounded-2xl p-6 sm:p-7"
              >
                <span
                  className="qa-ghost-num absolute right-4 top-3 text-[2.75rem] sm:text-[3.25rem]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dd className="qa-stat relative text-[clamp(2.1rem,3.2vw,2.75rem)] text-chalk">
                  <Counter value={s.value} className="qa-stat" />
                </dd>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-9 bg-gradient-to-r from-ember/60 via-amber/30 to-transparent"
                />
                <dt className="relative mt-3 text-sm leading-snug text-chalk-2">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
