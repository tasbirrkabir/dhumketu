import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { visionPillars } from "@/content/vision";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * VISION (home preview) — one giant statement, three future pillar names,
 * the official fairing render, then a route into the full vision page.
 */
export function Vision() {
  return (
    <section
      id="vision"
      aria-label="Vision"
      className="night relative scroll-mt-16 overflow-hidden bg-night py-28 text-chalk sm:py-40 lg:py-48"
    >
      <div className="glow-ember right-[-10%] top-[20%] h-[420px] w-[560px]" aria-hidden="true" />

      <Container>
        <Reveal>
          <h2 className="qa-display max-w-4xl text-[clamp(2.4rem,6.4vw,5.25rem)] text-chalk">
            The next chapter: constellations, connectivity and responsible{" "}
            <span className="qa-serif font-normal text-chalk-2">orbital media</span> —
            from Bangladesh.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 text-base text-chalk-2">
            Long-term ambitions in development — not current capabilities.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-20 grid gap-8 border-t border-night-line pt-10 sm:grid-cols-3">
            {visionPillars.map((p) => (
              <li key={p.id} className="text-xl font-semibold tracking-[-0.015em] sm:text-2xl">
                {p.title}
              </li>
            ))}
          </ul>
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

        <Reveal delay={0.1}>
          <Link
            href="/vision"
            className="group mt-14 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
          >
            The full vision
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
