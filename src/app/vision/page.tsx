import type { Metadata } from "next";
import Image from "next/image";
import {
  visionPillars,
  visionBangladesh,
  responsibleSpace,
  spaceCenter,
  roadmapGoals,
} from "@/content/vision";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";
import { StatusDot, Counter } from "@/components/primitives/ui-bits";

export const metadata: Metadata = {
  title: "Vision — DhumketuX",
  description:
    "The next chapter: space billboard and orbital media, Earth observation constellations and space-based internet — long-term ambitions from Bangladesh, marked as future vision.",
};

export default function VisionPage() {
  return (
    <Shell>
      <CinematicHero
        image="/media/concept-orbit-dawn.jpg"
        alt=""
        kicker="Vision · 03"
        title="The next chapter."
        accent="Constellations, connectivity, orbital media."
        lede="Our long-term vision: build space billboard, Earth observation and space-based internet constellations from Bangladesh and Asia that serve global customers — responsibly and sustainably."
        caption="Concept art — illustrative of an orbital dawn over Bangladesh."
      />

      {/* Future pillars */}
      <section
        aria-label="Future pillars"
        className="border-y border-edge bg-night py-24 text-chalk sm:py-32"
      >
        <Container>
          <Reveal>
            <p className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-amber">
              <StatusDot tone="planned" />
              Future vision — not current capabilities.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:mt-20 lg:grid-cols-3">
            {visionPillars.map((p, i) => (
              <Reveal key={p.id} delay={0.08 + i * 0.06} className="h-full">
                <div className="card-lift h-full rounded-3xl border border-edge bg-night-2 p-6 sm:p-7">
                  <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-3">
                    {p.index}
                  </p>
                  <h2 className="qa-display mt-4 text-xl text-chalk sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-chalk-2">{p.body}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-edge pt-5">
                    {p.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-chalk-2">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ember/70" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <figure className="glass-strong relative mt-20 overflow-hidden rounded-3xl p-8 sm:mt-28 sm:p-10">
              <div className="glow-amber right-[-10%] top-[-40%] h-[280px] w-[420px]" aria-hidden="true" />
              <blockquote className="relative max-w-3xl text-lg leading-relaxed text-chalk sm:text-xl">
                {visionBangladesh.bn}
              </blockquote>
              <figcaption className="relative mt-5 text-sm text-chalk-2/80">
                Our dream for Bangladesh — space data, internet and branding, operated
                from Bangladesh.
              </figcaption>
            </figure>
          </Reveal>

          <ImageReveal className="mt-20 sm:mt-28">
            <figure>
              <div className="img-quiet relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-edge sm:aspect-[21/9]">
                <Image
                  src="/media/fairing-deployment-render.png"
                  alt="Official render of a DhumketuX payload fairing separating in flight, exposing a small satellite above Earth"
                  fill
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent"
                />
              </div>
              <figcaption className="mt-3 text-xs text-chalk-3">
                Payload fairing deployment — official render, DhumketuX
              </figcaption>
            </figure>
          </ImageReveal>
        </Container>
      </section>

      {/* Bangladesh vision + responsible space */}
      <section
        aria-label="Space vision originating from Bangladesh"
        className="bg-void py-24 sm:py-32"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
                Space vision originating from Bangladesh.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-chalk-2">
                {visionBangladesh.body}
              </p>
              <ul className="mt-8 space-y-3">
                {visionBangladesh.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-chalk-2">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ember/70" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
                {responsibleSpace.title}.
              </h2>
              <ul className="mt-7 grid gap-4">
                {responsibleSpace.points.map((item) => (
                  <li
                    key={item.title}
                    className="card-lift rounded-2xl border border-edge bg-night-2 p-5"
                  >
                    <p className="text-[0.9375rem] font-medium text-chalk">{item.title}</p>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-chalk-2">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Space center + roadmap */}
      <section
        aria-label="Bangladesh Space Center and roadmap"
        className="border-t border-edge bg-night py-24 sm:py-32"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
                {spaceCenter.title}.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-chalk-2">
                {spaceCenter.body}
              </p>
              <ul className="mt-8 space-y-3">
                {spaceCenter.sectors.map((sector) => (
                  <li key={sector} className="flex gap-3 text-[0.9375rem] leading-relaxed text-chalk-2">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ember/70" aria-hidden="true" />
                    {sector}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
                The roadmap.
              </h2>
              <dl className="mt-7 grid gap-4">
                <div className="rounded-2xl border border-edge bg-night-2 p-6">
                  <dt className="text-sm text-chalk-2">Suborbital flight</dt>
                  <dd className="qa-display mt-2 text-[clamp(1.9rem,4vw,3rem)] text-chalk">
                    Within{" "}
                    <Counter value="2035" className="text-ember-gradient" />
                  </dd>
                </div>
                <div className="rounded-2xl border border-edge bg-night-2 p-6">
                  <dt className="text-sm text-chalk-2">Human spaceflight</dt>
                  <dd className="qa-display mt-2 text-[clamp(1.9rem,4vw,3rem)] text-chalk">
                    Within{" "}
                    <Counter value="2040" className="text-ember-gradient" />
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-xs text-chalk-3">
                Future-vision goals as published in the DhumketuX FAQ ({roadmapGoals.source.replace("https://", "").replace(" (FAQ: future vision)", "")}).
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
