"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { StatusChip } from "@/components/primitives/eyebrow";
import { diagramMap } from "@/components/graphics/diagrams";
import { ProjectDialog } from "./project-dialog";
import {
  projects,
  featuredSlugs,
  statusMeta,
  type DxProject,
} from "@/content/projects";

const filters = [
  "All",
  "Launch Vehicle",
  "Solid Propulsion",
  "Liquid Propulsion",
  "Reusable Systems",
  "Satellites & Space Systems",
  "UAV & Aviation",
] as const;

export function WorkSection() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const featured = useMemo(
    () =>
      featuredSlugs
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is DxProject => Boolean(p)),
    []
  );

  const catalog = useMemo(
    () =>
      filter === "All"
        ? projects.filter((p) => !featuredSlugs.includes(p.slug as (typeof featuredSlugs)[number]))
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  const selected = selectedSlug
    ? projects.find((p) => p.slug === selectedSlug) ?? null
    : null;

  return (
    <section id="work" aria-label="Flagship work" className="border-t border-line bg-bg-1">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="03"
          eyebrow="Flagship Work"
          title={
            <>
              The machines,
              <br />
              in plain view.
            </>
          }
          description="Four programs define the current engineering frontier — from solid boosters to liquid engines and a sub-orbital vehicle. Open any program for specs, status and context."
          aside={
            <p className="dx-label hidden max-w-[220px] text-right leading-relaxed text-ink-2 lg:block">
              Data source: dhumketux.com — all metrics carry provenance
            </p>
          }
        />

        {/* Featured flagship grid */}
        <div className="mt-12 grid gap-px border border-line bg-line md:mt-16 lg:grid-cols-2">
          {featured.map((project, i) => {
            const Diagram = diagramMap[project.diagram];
            const status = statusMeta[project.status];
            return (
              <Reveal key={project.slug} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setSelectedSlug(project.slug)}
                  className="group relative flex h-full w-full flex-col bg-bg-1 text-left transition-colors hover:bg-bg-2"
                  aria-haspopup="dialog"
                >
                  {/* Schematic panel */}
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-bg-0 dx-grid-bg p-6 md:h-64">
                    <div className="absolute left-5 top-4 dx-label text-ink-2">
                      {project.category}
                    </div>
                    <div className="absolute right-5 top-4 dx-label text-ink-2" aria-hidden="true">
                      SEC.02 · {String(i + 1).padStart(2, "0")}
                    </div>
                    <Diagram className="h-40 w-auto text-ink-1 transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03] md:h-44" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <StatusChip label={status.label} tone={status.tone} />
                      <span className="dx-label flex items-center gap-1 text-ink-2 transition-colors group-hover:text-signal">
                        View project
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="dx-display mt-4 text-3xl font-semibold text-ink md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-1 md:text-base">
                      {project.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
                      {project.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <p className="dx-num text-base text-ink md:text-lg">
                            {m.value}
                          </p>
                          <p className="dx-label mt-1 text-ink-2">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Full catalog with filters */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="dx-label text-ink-2">Full Catalog</p>
              <h3 className="dx-display mt-3 text-2xl font-semibold text-ink md:text-3xl">
                Every program, one index.
              </h3>
            </div>
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-2"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={
                    "border px-3.5 py-2 dx-label transition-colors " +
                    (filter === f
                      ? "border-signal bg-signal/10 text-signal"
                      : "border-line text-ink-2 hover:border-line-strong hover:text-ink")
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {catalog.length === 0 ? (
            <p className="mt-10 border border-line px-6 py-10 text-center dx-label text-ink-2">
              No programs in this category — try another filter.
            </p>
          ) : (
            <ul className="mt-8 border-t border-line">
              {catalog.map((project, i) => {
                const status = statusMeta[project.status];
                return (
                  <Reveal as="li" key={project.slug} delay={Math.min(i * 0.04, 0.2)}>
                    <button
                      type="button"
                      onClick={() => setSelectedSlug(project.slug)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-5 text-left transition-colors md:grid-cols-[3rem_1fr_auto_auto] md:gap-8"
                      aria-haspopup="dialog"
                    >
                      <span className="dx-num text-xs text-ink-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-display text-lg font-medium text-ink transition-colors group-hover:text-signal md:text-xl">
                          {project.name}
                          {project.nameBn ? (
                            <span className="ml-2 text-sm font-normal text-ink-2">
                              {project.nameBn}
                            </span>
                          ) : null}
                        </span>
                        <span className="dx-label mt-1 block text-ink-2">
                          {project.category}
                        </span>
                      </span>
                      <span className="hidden md:block">
                        <StatusChip label={status.label} tone={status.tone} />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-ink-2 transition-all group-hover:translate-x-0.5 group-hover:text-signal"
                        aria-hidden="true"
                      />
                    </button>
                  </Reveal>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <ProjectDialog
        project={selected}
        open={Boolean(selected)}
        onOpenChange={(o) => !o && setSelectedSlug(null)}
        onSelectProject={(slug) => setSelectedSlug(slug)}
      />
    </section>
  );
}
