import Image from "next/image";
import {
  visionPillars,
  visionBangladesh,
} from "@/content/vision";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * VISION — night movement. Huge statement, three future pillars,
 * a Bangla line, and the official fairing render as quiet atmosphere.
 * All future-facing content is explicitly marked (DECISIONS.md D-003).
 */
export function Vision() {
  return (
    <section
      id="vision"
      aria-label="Vision"
      className="night scroll-mt-16 bg-night py-24 text-chalk sm:py-32 lg:py-40"
    >
      <Container>
        <Reveal>
          <p className="qa-eyebrow">Future vision</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="qa-display mt-6 max-w-4xl text-[clamp(2.4rem,6.4vw,5.25rem)] text-chalk">
            The next chapter: constellations, connectivity and responsible orbital
            media — from Bangladesh.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-chalk-2">
            These are long-term ambitions in development — not current capabilities.
            Each pillar is designed for responsible, sustainable use of space.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-night-line pt-12 sm:mt-20 sm:grid-cols-3 sm:gap-8 sm:pt-14">
          {visionPillars.map((p, i) => (
            <Reveal key={p.id} delay={0.1 + i * 0.07}>
              <p className="qa-data text-sm text-chalk-2">{p.index}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-chalk">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-chalk-2">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <figure className="mt-16 border-l-2 border-night-line pl-6 sm:mt-24 sm:pl-8">
            <blockquote className="max-w-3xl text-lg leading-relaxed text-chalk-2 sm:text-xl">
              {visionBangladesh.bn}
            </blockquote>
            <figcaption className="mt-4 text-sm text-chalk-2/80">
              Our dream for Bangladesh — data for floods, cyclones, agriculture and
              cities; internet for remote areas; a global branding platform — all
              operated from Bangladesh.
            </figcaption>
          </figure>
        </Reveal>

        <ImageReveal className="mt-16 sm:mt-24">
          <figure>
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
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
  );
}
