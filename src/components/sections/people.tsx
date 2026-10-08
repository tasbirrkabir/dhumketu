import Image from "next/image";
import { advisors, teamFacts } from "@/content/team";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * PEOPLE — portrait, one statement, names. Nothing else.
 * Minimalism rule: people are presented as people (portrait + photo),
 * advisors as one-line names — no bio paragraphs.
 */
export function People() {
  return (
    <section
      id="people"
      aria-label="People"
      className="scroll-mt-16 border-t border-line bg-paper py-28 sm:py-40 lg:py-48"
    >
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5 lg:col-span-4">
            <figure>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/media/founder-nahiyan-al-rahman.jpg"
                  alt="Portrait of Nahiyan Al Rahman, founder of DhumketuX"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-ink-3">
                Nahiyan Al Rahman — Founder &amp; CEO
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h2 className="qa-statement text-[clamp(1.9rem,4.5vw,3.25rem)] text-ink">
                {teamFacts.size} engineers and researchers, across 20+ universities.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-2">
                The movement behind it:{" "}
                <span className="font-medium text-ink">{teamFacts.movement}</span>.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="mt-14 border-t border-line pt-8">
                {advisors.map((a) => (
                  <li
                    key={a.name}
                    className="border-b border-line py-4 text-[0.9375rem] last:border-0"
                  >
                    <span className="font-medium text-ink">{a.name}</span>
                    <span className="text-ink-2"> — {a.role}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <ImageReveal className="mt-24 sm:mt-32">
          <figure>
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
              <Image
                src="/media/team-rocket-library.jpg"
                alt="DhumketuX team in branded hoodies around a DhumketuX rocket on a launch rail in front of the Mymensingh library building"
                fill
                sizes="(max-width: 768px) 100vw, 1180px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-ink-3">
              The DhumketuX team — Mymensingh, Bangladesh
            </figcaption>
          </figure>
        </ImageReveal>
      </Container>
    </section>
  );
}
