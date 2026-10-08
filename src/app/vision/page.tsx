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
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

export const metadata: Metadata = {
  title: "Vision — DhumketuX",
  description:
    "The next chapter: space billboard and orbital media, Earth observation constellations and space-based internet — long-term ambitions from Bangladesh, marked as future vision.",
};

export default function VisionPage() {
  return (
    <Shell>
      <PageHero
        index="03"
        title="The next chapter."
        accent="Constellations, connectivity, orbital media."
        lede="Our long-term vision: build space billboard, Earth observation and space-based internet constellations from Bangladesh and Asia that serve global customers — responsibly and sustainably."
      />

      {/* Future pillars */}
      <section aria-label="Future pillars" className="night border-b border-night-line bg-night py-24 text-chalk sm:py-32">
        <Container>
          <Reveal>
            <p className="text-sm font-medium text-chalk-2">
              Future vision — not current capabilities.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-14 sm:mt-20 lg:grid-cols-3 lg:gap-10">
            {visionPillars.map((p, i) => (
              <Reveal key={p.id} delay={0.08 + i * 0.06}>
                <div className="border-t border-night-line pt-7">
                  <p className="qa-data text-sm text-chalk-2">{p.index}</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.015em] text-chalk sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-chalk-2">{p.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-chalk-2">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-chalk-2/60" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <figure className="mt-24 border-l-2 border-night-line pl-6 sm:pl-8">
              <blockquote className="max-w-3xl text-lg leading-relaxed text-chalk-2 sm:text-xl">
                {visionBangladesh.bn}
              </blockquote>
              <figcaption className="mt-4 text-sm text-chalk-2/80">
                Our dream for Bangladesh — space data, internet and branding, operated
                from Bangladesh.
              </figcaption>
            </figure>
          </Reveal>

          <ImageReveal className="mt-20 sm:mt-28">
            <figure>
              <div className="img-quiet relative aspect-[16/9] w-full sm:aspect-[21/9]">
                <Image
                  src="/media/fairing-deployment-render.png"
                  alt="Official render of a DhumketuX payload fairing separating in flight, exposing a small satellite above Earth"
                  fill
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-chalk-2/80">
                Payload fairing deployment — official render, DhumketuX
              </figcaption>
            </figure>
          </ImageReveal>
        </Container>
      </section>

      {/* Bangladesh vision + responsible space */}
      <section aria-label="Space vision originating from Bangladesh" className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
                Space vision originating from Bangladesh.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-2">
                {visionBangladesh.body}
              </p>
              <ul className="mt-8 space-y-3">
                {visionBangladesh.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.9375rem] text-ink-2">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ink-3" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
                {responsibleSpace.title}.
              </h2>
              <ul className="mt-7">
                {responsibleSpace.points.map((item) => (
                  <li key={item.title} className="border-t border-line py-5 last:border-b">
                    <p className="text-[0.9375rem] font-medium text-ink">{item.title}</p>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-2">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Space center + roadmap */}
      <section aria-label="Bangladesh Space Center and roadmap" className="border-t border-line bg-paper-2 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
                {spaceCenter.title}.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-2">
                {spaceCenter.body}
              </p>
              <ul className="mt-8 space-y-3">
                {spaceCenter.sectors.map((sector) => (
                  <li key={sector} className="flex gap-3 text-[0.9375rem] text-ink-2">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ink-3" aria-hidden="true" />
                    {sector}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
                The roadmap.
              </h2>
              <dl className="mt-7">
                <div className="border-t border-line py-6">
                  <dt className="text-sm text-ink-2">Suborbital flight</dt>
                  <dd className="qa-display mt-2 text-[clamp(1.9rem,4vw,3rem)] text-ink">
                    Within <span className="qa-serif font-normal text-ink-2">2035</span>
                  </dd>
                </div>
                <div className="border-b border-line py-6">
                  <dt className="text-sm text-ink-2">Human spaceflight</dt>
                  <dd className="qa-display mt-2 text-[clamp(1.9rem,4vw,3rem)] text-ink">
                    Within <span className="qa-serif font-normal text-ink-2">2040</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-xs text-ink-3">
                Future-vision goals as published in the DhumketuX FAQ ({roadmapGoals.source.replace("https://", "").replace(" (FAQ: future vision)", "")}).
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
