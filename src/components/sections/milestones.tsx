import Image from "next/image";
import { milestones } from "@/content/milestones";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * MILESTONES — editorial year/event rows on paper.
 * One documentary photograph (a2i award) anchors the middle of the timeline.
 */
export function Milestones() {
  return (
    <section
      id="milestones"
      aria-label="Milestones"
      className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <SectionIntro statement="A short history of firsts." />

        <ol className="mt-20 sm:mt-28">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.id} delay={Math.min(i * 0.03, 0.15)}>
              <div
                className={`grid grid-cols-1 gap-y-2 border-t border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-x-10 sm:py-9 ${
                  i === milestones.length - 1 ? "border-b" : ""
                }`}
              >
                <p className="qa-data text-[0.9375rem] text-ink-3">{m.year}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink sm:text-[1.375rem]">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2">
                    {m.body}
                  </p>

                  {m.id === "m-3" && (
                    <ImageReveal className="mt-8">
                      <figure className="max-w-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <Image
                            src="/media/a2i-award-2022.jpg"
                            alt="Nahiyan Al Rahman Oli receiving the winner award at Bangladesh's a2i Rocketry Innovation Challenge 2022"
                            fill
                            sizes="(max-width: 768px) 100vw, 576px"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="mt-3 text-xs text-ink-3">
                          a2i Rocketry Innovation Challenge 2022 — winner
                        </figcaption>
                      </figure>
                    </ImageReveal>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
