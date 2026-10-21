import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, statusMeta, type DxProject } from "@/content/projects";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { StatusDot, CtaBand } from "@/components/primitives/ui-bits";

export const metadata: Metadata = {
  title: "Projects · DEMOSPACE",
  description:
    "The full DEMOSPACE catalog: launch vehicles, solid and liquid propulsion, reusable systems, satellites and aviation. Every figure sourced from demospace.example.com.",
};

const GROUPS: { title: string; categories: DxProject["category"][] }[] = [
  { title: "Launch Vehicles", categories: ["Launch Vehicle"] },
  { title: "Propulsion", categories: ["Solid Propulsion", "Liquid Propulsion", "Reusable Systems"] },
  { title: "Satellites & Space Systems", categories: ["Satellites & Space Systems"] },
  { title: "UAV & Aviation", categories: ["UAV & Aviation"] },
];

function StatusChip({ status }: { status: DxProject["status"] }) {
  const meta = statusMeta[status];
  return (
    <span className="glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs text-chalk-2">
      <StatusDot tone={meta.tone} />
      {meta.label}
    </span>
  );
}

export default function WorkPage() {
  return (
    <Shell>
      <CinematicHero
        image="/media/concept-rocket-dusk.jpg"
        alt=""
        title="The full catalog."
        accent={`${projects.length} systems, one engineering culture.`}
        lede="Launch vehicles, propulsion, reusable systems, satellites and aviation, developed in Bangladesh and documented on the public record."
        caption="Concept art, illustrative pad scene, not a DEMOSPACE photograph."
      />

      {GROUPS.map((group) => {
        const items = projects.filter((p) => group.categories.includes(p.category));
        if (!items.length) return null;
        return (
          <section
            key={group.title}
            aria-label={group.title}
            className="scroll-mt-16 border-t border-edge py-16 sm:py-20"
          >
            <Container>
              <Reveal>
                <h2 className="qa-display flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(1.55rem,3.2vw,2.4rem)] text-chalk">
                  {group.title}
                  <span className="qa-data text-sm font-normal uppercase tracking-[0.14em] text-chalk-3">
                    {items.length} {items.length === 1 ? "system" : "systems"}
                  </span>
                </h2>
              </Reveal>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={Math.min(i * 0.04, 0.16)} className="h-full">
                    <Link
                      href={`/work/${p.slug}`}
                      className="group card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-edge bg-night-2 p-6 sm:p-7"
                    >
                      <span
                        aria-hidden="true"
                        className="qa-ghost-num absolute -bottom-3 right-4 text-[4.25rem]"
                      >
                        {String(projects.indexOf(p) + 1).padStart(2, "0")}
                      </span>
                      <div className="relative flex items-start justify-between gap-4">
                        <span className="qa-data pt-1 text-xs uppercase tracking-[0.16em] text-chalk-3">
                          {String(projects.indexOf(p) + 1).padStart(2, "0")}
                        </span>
                        <StatusChip status={p.status} />
                      </div>
                      <h3 className="qa-display relative mt-6 flex items-center gap-2 text-2xl text-chalk sm:text-[1.65rem]">
                        {p.name}
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-chalk opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="qa-data relative mt-auto max-w-[70%] pt-6 text-[11px] uppercase tracking-[0.14em] text-chalk-3">
                        {p.category}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <section aria-label="Status legend" className="border-t border-edge py-12">
        <Container>
          <Reveal>
            <ul className="glass flex flex-wrap items-center gap-x-8 gap-y-3 rounded-3xl px-6 py-5 text-sm text-chalk-2 sm:px-8">
              {Object.entries(statusMeta).map(([key, meta]) => (
                <li key={key} className="flex items-center gap-2">
                  <StatusDot tone={meta.tone} />
                  {meta.label}
                </li>
              ))}
              <li className="text-chalk-3">All figures sourced from demospace.example.com</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Have a mission"
        accent="in mind?"
        copy="Sounding rocket campaigns, payload launches and test services: propose a mission and the team will respond with feasibility and range requirements."
        primary={{ href: "/contact#form", label: "Start a conversation" }}
      />
    </Shell>
  );
}
