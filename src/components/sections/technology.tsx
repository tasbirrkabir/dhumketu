import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { capabilityStack } from "@/content/capabilities";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * TECHNOLOGY: split layout: sticky concept-engine image on the left,
 * capability stack as hover-reactive rows on the right. Rows carry index,
 * title and one-line summary; deep detail lives on /technology.
 */
export function Technology() {
  return (
    <section aria-label="Technology" className="relative overflow-hidden bg-night py-24 text-chalk sm:py-32 lg:py-40">
      <div className="glow-ember left-[-12%] top-[6%] h-[420px] w-[560px]" aria-hidden="true" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Sticky image column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionIntro
              eyebrow="Technology"
              statement="Eight disciplines, one test-driven engineering culture."
            />
            <ImageReveal className="mt-10">
              <figure>
                <div className="img-quiet relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-edge">
                  <Image
                    src="/media/concept-engine-fire.jpg"
                    alt="Concept art of a rocket engine exhaust plume with shock diamonds at night"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
                </div>
                <figcaption className="mt-3 text-[11px] text-chalk-3">
                  Concept art, illustrative of a static-fire plume, not a documented test photograph.
                </figcaption>
              </figure>
            </ImageReveal>
          </div>

          {/* Capability rows */}
          <div>
            <ul className="border-t border-edge">
              {capabilityStack.map((c, i) => (
                <li key={c.id}>
                  <Reveal delay={Math.min(i * 0.04, 0.24)}>
                    <Link
                      href={`/technology#${c.id}`}
                      className="group -mx-4 flex items-baseline gap-5 rounded-xl border-b border-edge px-4 py-5 transition-colors hover:border-edge-strong hover:bg-white/[0.025] sm:items-center sm:gap-7"
                    >
                      <span className="qa-data w-8 shrink-0 text-sm text-chalk-3 transition-colors duration-300 group-hover:text-chalk">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                        <span className="block text-lg font-semibold tracking-[-0.015em] text-chalk transition-colors group-hover:text-chalk sm:text-xl">
                          {c.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-chalk-2">
                          {c.summary}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="ml-auto h-4 w-4 shrink-0 self-center text-chalk-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-chalk group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <Link
                href="/technology"
                className="group btn-ghost mt-8 px-6 py-3 text-[0.9375rem] font-medium"
              >
                All technological capabilities
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
