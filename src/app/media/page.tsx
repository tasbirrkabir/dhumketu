import type { Metadata } from "next";
import { articles, mediaNote } from "@/content/articles";
import { org } from "@/content/org";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Media · DhumketuX",
  description:
    "Space articles, media news and social media: Bangladesh's first private aerospace organization documented across national media.",
};

export default function MediaPage() {
  const news = articles.filter((a) => a.category === "Media");
  const milestonesAndRest = articles.filter((a) => a.category !== "Media");

  return (
    <Shell>
      <CinematicHero
        image="/media/team-launch-rail.jpg"
        alt=""
        eyebrow="Media"
        title="Documented in public."
        accent="National media & the archive."
        lede={mediaNote}
        caption="DhumketuX team with the Bidrohi rocket on its launch rail, Mymensingh"
      />

      {/* Media news */}
      <section id="news" aria-label="Media news" className="scroll-mt-16 bg-void py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Media news.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4">
            {news.map((a, i) => (
              <Reveal as="li" key={a.id} delay={Math.min(i * 0.05, 0.15)}>
                <a
                  href={a.source}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift group grid grid-cols-1 gap-y-3 rounded-2xl border border-edge bg-night-2 p-6 sm:grid-cols-[7rem_1fr_auto] sm:gap-x-8"
                >
                  <span className="qa-data text-sm text-chalk-3">{a.date}</span>
                  <span>
                    <span className="block max-w-2xl text-xl font-semibold leading-snug tracking-[-0.015em] text-chalk transition-colors group-hover:text-chalk sm:text-2xl">
                      {a.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-chalk-2">
                      {a.summary}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 self-start text-sm text-chalk-2 sm:justify-self-end">
                    {a.category}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-chalk transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Space articles & milestones */}
      <section
        id="articles"
        aria-label="Space articles and milestones"
        className="scroll-mt-16 border-t border-edge bg-night py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Space articles &amp; milestones.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4">
            {milestonesAndRest.map((a, i) => (
              <Reveal as="li" key={a.id} delay={Math.min(i * 0.05, 0.15)}>
                <a
                  href={a.source}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift group grid grid-cols-1 gap-y-3 rounded-2xl border border-edge bg-night-2 p-6 sm:grid-cols-[7rem_1fr_auto] sm:gap-x-8"
                >
                  <span className="qa-data text-sm text-chalk-3">{a.date}</span>
                  <span>
                    <span className="block max-w-2xl text-xl font-semibold leading-snug tracking-[-0.015em] text-chalk transition-colors group-hover:text-chalk sm:text-2xl">
                      {a.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-chalk-2">
                      {a.summary}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 self-start text-sm text-chalk-2 sm:justify-self-end">
                    {a.category}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-chalk transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
      <section
        id="social"
        aria-label="Our social media"
        className="scroll-mt-16 bg-void py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Our social media.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-3">
            {org.social.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 0.06} className="h-full">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift group flex h-full items-center justify-between gap-6 rounded-3xl border border-edge bg-night-2 p-6"
                >
                  <span className="text-xl font-semibold tracking-[-0.02em] text-chalk sm:text-2xl">
                    {s.label}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-chalk transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </Shell>
  );
}
