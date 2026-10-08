import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { capabilityStack } from "@/content/capabilities";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/**
 * TECHNOLOGY (home preview) — the stack as quiet editorial rows,
 * first six capabilities, then a route into the full page.
 */
export function Technology() {
  const preview = capabilityStack.slice(0, 6);

  return (
    <section
      id="technology"
      aria-label="Technology"
      className="scroll-mt-16 border-t border-line bg-paper py-28 sm:py-40 lg:py-48"
    >
      <Container>
        <SectionIntro statement="One engineering stack — from raw propellant to mission data." />

        <div className="mt-20 sm:mt-28">
          <ul>
            {preview.map((c, i) => (
              <Reveal as="li" key={c.id} delay={Math.min(i * 0.03, 0.18)}>
                <div
                  className={`grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-t border-line py-7 sm:grid-cols-[4rem_1fr] sm:gap-x-8 sm:py-9 ${
                    i === preview.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="qa-data text-sm text-ink-3">{c.index}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                    {c.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <Link
            href="/technology"
            className="group mt-10 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink"
          >
            All {capabilityStack.length} capabilities
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
