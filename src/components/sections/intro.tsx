import { org } from "@/content/org";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { Counter } from "@/components/primitives/ui-bits";

/**
 * INTRODUCTION: one statement, one quiet line, then the numbers as a
 * single mission-console panel — four cells divided by hairlines, each
 * with a ghost index. Reads like a telemetry readout, not a card grid.
 */
export function Intro() {
  return (
    <section aria-label="About DhumketuX" className="relative overflow-hidden bg-void py-28 sm:py-36 lg:py-44">
      <div aria-hidden="true" className="spot" />
      <div className="glow-ember right-[-14%] top-[0%] h-[380px] w-[560px] opacity-70" aria-hidden="true" />
      <div className="glow-brand left-[-16%] bottom-[6%] h-[420px] w-[600px] opacity-60" aria-hidden="true" />
      <Container>
        <Reveal>
          <p className="eyebrow">The company</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-7 max-w-4xl text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.32] tracking-[-0.015em] text-chalk">
            DhumketuX is a commercial civilian space company from Bangladesh:
            <span className="text-chalk-2">
              {" "}
              rockets, propulsion, UAVs and satellite systems, built for affordable and
              responsible access to space.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-9 text-base text-chalk-2">
            <span className="qa-serif">{org.meaning}</span> The name carries
            the ambition: something built here, seen everywhere.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <dl className="panel mt-16 grid grid-cols-2 overflow-hidden rounded-[1.75rem] lg:mt-20 lg:grid-cols-4">
            {org.stats.map((s, i) => (
              <div
                key={s.label}
                className={`group relative px-6 py-8 sm:px-8 sm:py-10 ${
                  [
                    "",
                    "border-l border-edge",
                    "border-t border-edge lg:border-l lg:border-t-0",
                    "border-l border-t border-edge lg:border-t-0",
                  ][i]
                }`}
              >
                <span
                  className="qa-ghost-num absolute right-5 top-4 text-[2.75rem] sm:text-[3.25rem]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dd className="qa-stat relative text-[clamp(2.25rem,3.4vw,3rem)]">
                  <Counter value={s.value} className="qa-stat" />
                </dd>
                <span
                  aria-hidden="true"
                  className="mt-5 block h-px w-9 bg-gradient-to-r from-ember/60 via-amber/30 to-transparent"
                />
                <dt className="relative mt-4 text-sm leading-snug text-chalk-2">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
