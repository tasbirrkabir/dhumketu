import { org } from "@/content/org";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/**
 * INTRODUCTION — paper movement. Editorial statement + quiet stat row.
 * Facts come from src/content/org.ts (sourced from dhumketux.com).
 */
export function Intro() {
  return (
    <section aria-label="About DhumketuX" className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <p className="qa-eyebrow">The company</p>
          </Reveal>

          <div className="md:col-span-9 lg:col-span-8 lg:col-start-4">
            <Reveal delay={0.06}>
              <p className="text-[clamp(1.35rem,2.6vw,1.875rem)] leading-[1.45] tracking-[-0.012em] text-ink">
                Dhumketu Exploration Technologies Limited —{" "}
                <span className="text-ink-2">DhumketuX</span> — is a commercial civilian
                space company from Bangladesh. We develop small satellite launch
                vehicles, rocket propulsion, UAVs, satellite-related systems and mission
                technologies — working toward space access that is affordable,
                environmentally responsible and globally competitive.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2">
                {org.meaning} The name carries the ambition: something built here,
                seen everywhere.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-line pt-10 sm:grid-cols-4 sm:gap-x-6">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
