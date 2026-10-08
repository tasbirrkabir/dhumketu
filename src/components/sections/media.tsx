import { articles, mediaNote } from "@/content/articles";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { ArrowUpRight } from "lucide-react";

/**
 * MEDIA — documented stories as editorial text rows.
 * Titles preserved from sources (never rewritten into sensational claims).
 */
export function Media() {
  const featured = articles.slice(0, 4);

  return (
    <section
      id="media"
      aria-label="Media coverage"
      className="border-t border-line bg-paper py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <p className="qa-eyebrow">Media</p>
          <h2 className="qa-statement mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3rem)] text-ink">
            Documented across national media.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2">{mediaNote}</p>
        </Reveal>

        <ul className="mt-14 sm:mt-16">
          {featured.map((a, i) => (
            <Reveal as="li" key={a.id} delay={Math.min(i * 0.04, 0.16)}>
              <a
                href={a.source}
                target="_blank"
                rel="noreferrer"
                className={`group grid grid-cols-1 gap-y-1.5 border-t border-line py-6 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-x-8 sm:py-7 ${
                  i === featured.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="qa-data text-[0.8125rem] text-ink-3">{a.date}</span>
                <span className="max-w-2xl text-[1.0625rem] font-medium leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-ink-2 sm:text-lg">
                  {a.title}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-2 sm:justify-self-end">
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
  );
}
