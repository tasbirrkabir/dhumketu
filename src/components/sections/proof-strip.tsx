"use client";

import { proofStats, firsts } from "@/content/org";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow } from "@/components/primitives/eyebrow";

/**
 * SEC.01 — PROOF STRIP
 * High-contrast evidence band using only approved stats from the live site.
 */
export function ProofStrip() {
  return (
    <section id="proof" aria-label="Organization evidence" className="border-t border-line bg-bg-0">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Firsts — the credibility ledger */}
          <div className="lg:col-span-5">
            <Eyebrow>SEC. 02 / Proof · National Firsts</Eyebrow>
            <Reveal>
              <h2 className="dx-display mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                First, proven —{" "}
                <span className="text-ink-2">not promised.</span>
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-0 border-t border-line">
              {firsts.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 0.06}>
                  <div className="group flex gap-5 border-b border-line py-6">
                    <span className="dx-num shrink-0 pt-1 text-xs text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-medium leading-snug text-ink transition-colors group-hover:text-signal md:text-lg">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-1">
                        {f.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-7 lg:pl-10">
            <Eyebrow>Organization Index</Eyebrow>
            <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
              {proofStats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 0.05}
                  className="bg-bg-0 p-6 md:p-8"
                >
                  <p className="dx-num text-3xl font-medium text-ink md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="dx-label mt-3 leading-relaxed text-ink-2">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-6 text-xs leading-relaxed text-ink-2">
                Figures as published on dhumketux.com. Values pending
                revalidation and approval before any production release.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
