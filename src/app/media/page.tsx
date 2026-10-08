import type { Metadata } from "next";
import { articles, mediaNote } from "@/content/articles";
import { org } from "@/content/org";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Media — DhumketuX",
  description:
    "Space articles, media news and social media — Bangladesh's first private aerospace organization documented across national media.",
};

export default function MediaPage() {
  const news = articles.filter((a) => a.category === "Media");
  const milestonesAndRest = articles.filter((a) => a.category !== "Media");

  return (
    <Shell>
      <PageHero
        index="6"
        title="Documented in public."
        accent="National media & the archive."
        lede={mediaNote}
      />

      {/* Media news */}
      <section id="news" aria-label="Media news" className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Media news.
            </h2>
          </Reveal>

          <ul className="mt-14">
            {news.map((a, i) => (
              <Reveal as="li" key={a.id} delay={Math.min(i * 0.05, 0.15)}>
                <a
                  href={a.source}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-1 gap-y-2 border-t border-line py-8 sm:grid-cols-[8rem_1fr_auto] sm:gap-x-10 sm:py-9"
                >
                  <span className="qa-data pt-1 text-sm text-ink-3">{a.date}</span>
                  <span>
                    <span className="block max-w-2xl text-xl font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors group-hover:text-ink-2 sm:text-2xl">
                      {a.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2">
                      {a.summary}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 self-start text-sm text-ink-2 sm:justify-self-end">
                    {a.category}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ul>
        </Container>
      </section>

      {/* Space articles & milestones */}
      <section id="articles" aria-label="Space articles and milestones" className="scroll-mt-16 border-t border-line bg-paper-2 py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Space articles &amp; milestones.
            </h2>
          </Reveal>

          <ul className="mt-14">
            {milestonesAndRest.map((a, i) => (
              <Reveal as="li" key={a.id} delay={Math.min(i * 0.05, 0.15)}>
                <a
                  href={a.source}
                  target="_blank"
                  rel="noreferrer"
                  className={`group grid grid-cols-1 gap-y-2 border-t border-line py-8 sm:grid-cols-[8rem_1fr_auto] sm:gap-x-10 sm:py-9 ${
                    i === milestonesAndRest.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="qa-data pt-1 text-sm text-ink-3">{a.date}</span>
                  <span>
                    <span className="block max-w-2xl text-xl font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors group-hover:text-ink-2 sm:text-2xl">
                      {a.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2">
                      {a.summary}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 self-start text-sm text-ink-2 sm:justify-self-end">
                    {a.category}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Social media */}
      <section id="social" aria-label="Our social media" className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Our social media.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-12 sm:grid-cols-3">
            {org.social.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 0.06}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-t border-line py-7"
                >
                  <span className="text-xl font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-ink-2 sm:text-2xl">
                    {s.label}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 self-center text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
            <li aria-hidden="true" className="hidden border-t border-line sm:block" />
            <li aria-hidden="true" className="hidden border-t border-line sm:block" />
          </ul>
        </Container>
      </section>
    </Shell>
  );
}
