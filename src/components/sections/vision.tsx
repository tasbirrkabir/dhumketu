import Image from "next/image";
import {
  visionPillars,
  visionBangladesh,
} from "@/content/vision";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * VISION — night movement. One giant statement, three future pillar NAMES,
 * a Bangla line, and the official fairing render as quiet atmosphere.
 * Minimalism rule: pillars are titles only — the statement carries the story.
 * All future-facing content is explicitly marked (DECISIONS.md D-003).
 */
export function Vision() {
  return (
    <section
      id="vision"
      aria-label="Vision"
      className="night scroll-mt-16 bg-night py-28 text-chalk sm:py-40 lg:py-48"
    >
      <Container>
        <Reveal>
          <h2 className="qa-display max-w-4xl text-[clamp(2.4rem,6.4vw,5.25rem)] text-chalk">
            The next chapter: constellations, connectivity and responsible orbital
            media — from Bangladesh.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 text-base text-chalk-2">
            Long-term ambitions in development — not current capabilities.
          </p>
        </Reveal>

        {/* Pillar names only — one quiet row */}
        <Reveal delay={0.16}>
          <ul className="mt-20 grid gap-8 border-t border-night-line pt-10 sm:grid-cols-3">
            {visionPillars.map((p) => (
              <li key={p.id} className="text-xl font-semibold tracking-[-0.015em] sm:text-2xl">
                {p.title}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-20 border-l-2 border-night-line pl-6 sm:pl-8">
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
