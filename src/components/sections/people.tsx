import Image from "next/image";
import { leadership, advisors, teamFacts } from "@/content/team";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * PEOPLE — paper movement. Founder portrait + editorial facts,
 * documentary team photograph, leadership & advisors as a text list.
 */
export function People() {
  const founder = leadership[0];

  return (
    <section
      id="people"
      aria-label="People"
      className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32 lg:py-40"
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
              <p className="qa-eyebrow">People</p>
              <h2 className="qa-statement mt-5 text-[clamp(1.9rem,4.5vw,3.25rem)] text-ink">
                {teamFacts.size} engineers and researchers, across{" "}
                {"20+"} universities.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-2">
                {teamFacts.international}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2">
                The movement behind it:{" "}
                <span className="font-medium text-ink">{teamFacts.movement}</span>.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 border-t border-line pt-8">
                <p className="text-sm font-medium text-ink">{founder.name}</p>
                <p className="mt-0.5 text-sm text-ink-2">{founder.role}</p>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-2">
                  {founder.bio}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 border-t border-line pt-8">
                <p className="text-sm font-medium text-ink">Advisors</p>
                <ul className="mt-4 space-y-5">
                  {advisors.map((a) => (
                    <li key={a.name}>
                      <p className="text-[0.9375rem] font-medium text-ink">
                        {a.name}
                        <span className="font-normal text-ink-2"> — {a.role}</span>
                      </p>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-2">
                        {a.bio}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <ImageReveal className="mt-20 sm:mt-28">
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
