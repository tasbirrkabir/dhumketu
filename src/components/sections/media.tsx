"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { articles, mediaNote } from "@/content/articles";

/**
 * SEC.09 — MEDIA
 * Editorial rail of real stories from the live site. External titles
 * preserved verbatim per CONTENT-MAP.md §6.
 */
export function MediaSection() {
  const [lead, ...rest] = articles;
  return (
    <section
      id="media"
      aria-label="Media and news"
      className="border-t border-line bg-bg-0"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="10"
          eyebrow="Media"
          title={
            <>
              Documented as it
              <br />
              happened.
            </>
          }
          description={mediaNote}
          aside={
            <a
              href="https://dhumketux.com/media-news/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 border border-line-strong px-5 py-3 dx-label text-ink transition-colors hover:border-signal hover:text-signal"
            >
              All news on dhumketux.com
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          }
        />

        {/* Lead story */}
        <Reveal className="mt-12 md:mt-16">
          <a
            href={lead.source}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-6 border border-line bg-bg-1 p-6 transition-colors hover:border-signal/50 md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-10"
          >
            <div className="md:w-40">
              <p className="dx-label text-signal">{lead.category}</p>
              <p className="dx-num mt-2 text-sm text-ink-1">{lead.date}</p>
            </div>
            <div>
              <h3 className="dx-display max-w-3xl text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-signal md:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-1 md:text-base">
                {lead.summary}
              </p>
            </div>
            <div className="flex items-start">
              <ArrowUpRight
                className="h-6 w-6 text-ink-2 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal"
                aria-hidden="true"
              />
            </div>
          </a>
        </Reveal>

        {/* Rail */}
        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <Reveal key={article.id} delay={Math.min(i * 0.05, 0.2)} className="bg-bg-0">
              <a
                href={article.source}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col p-6 transition-colors hover:bg-bg-2"
              >
                <div className="flex items-center justify-between">
                  <p
                    className={
                      "dx-label " +
                      (article.accent ? "text-signal" : "text-ink-2")
                    }
                  >
                    {article.category}
                  </p>
                  <p className="dx-num text-xs text-ink-2">{article.date}</p>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-signal">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-1">
                  {article.summary}
                </p>
                <p className="dx-label mt-5 flex items-center gap-1.5 text-ink-2 transition-colors group-hover:text-signal">
                  View source
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
