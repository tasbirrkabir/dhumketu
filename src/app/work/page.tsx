import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, statusMeta, type DxProject } from "@/content/projects";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

export const metadata: Metadata = {
  title: "Projects — DhumketuX",
  description:
    "The full DhumketuX catalog: launch vehicles, solid and liquid propulsion, reusable systems, satellites and aviation — every figure sourced from dhumketux.com.",
};

const GROUPS: { title: string; categories: DxProject["category"][] }[] = [
  { title: "Launch Vehicles", categories: ["Launch Vehicle"] },
  { title: "Propulsion", categories: ["Solid Propulsion", "Liquid Propulsion", "Reusable Systems"] },
  { title: "Satellites & Space Systems", categories: ["Satellites & Space Systems"] },
  { title: "UAV & Aviation", categories: ["UAV & Aviation"] },
];

const STATUS_DOT: Record<DxProject["status"], string> = {
  tested: "bg-go",
  development: "bg-signal",
  concept: "bg-ink-3",
  operational: "bg-go",
  "future-vision": "bg-ink-3",
};

export default function WorkPage() {
  return (
    <Shell>
      <PageHero
        index={String(projects.length).padStart(2, "0")}
        title="The full catalog."
        accent={`${projects.length} systems, one engineering culture.`}
        lede="Launch vehicles, propulsion, reusable systems, satellites and aviation — developed in Bangladesh, documented on the public record."
      />

      {GROUPS.map((group) => {
        const items = projects.filter((p) => group.categories.includes(p.category));
        if (!items.length) return null;
        return (
          <section
            key={group.title}
            aria-label={group.title}
            className="border-t border-line bg-paper py-20 sm:py-28"
          >
            <Container>
              <Reveal>
                <h2 className="text-sm font-medium uppercase tracking-[0.08em] text-ink-3">
                  {group.title}
                </h2>
              </Reveal>
              <ul className="mt-10">
                {items.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={Math.min(i * 0.04, 0.16)}>
                    <Link
                      href={`/work/${p.slug}`}
                      className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-t border-line py-7 sm:grid-cols-[4rem_1fr_10rem_auto] sm:gap-x-8 sm:py-9"
                    >
                      <span className="qa-data pt-1 text-sm text-ink-3">
                        {String(projects.indexOf(p) + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-ink-2 sm:text-3xl">
                        {p.name}
                      </h3>
                      <span className="hidden items-center gap-2 text-sm text-ink-2 sm:flex">
                        <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[p.status]}`} aria-hidden="true" />
                        {p.statusLabel}
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 self-center text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                ))}
                <li aria-hidden="true" className="border-t border-line" />
              </ul>
            </Container>
          </section>
        );
      })}

      <section aria-label="Status legend" className="border-t border-line bg-paper-2 py-12">
        <Container>
          <Reveal>
            <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-ink-2">
              {Object.entries(statusMeta).map(([key, meta]) => (
                <li key={key} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[key as DxProject["status"]]}`} aria-hidden="true" />
                  {meta.label}
                </li>
              ))}
              <li className="text-ink-3">All figures sourced from dhumketux.com</li>
            </ul>
          </Reveal>
        </Container>
      </section>
    </Shell>
  );
}
