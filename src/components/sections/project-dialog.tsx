"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { diagramMap } from "@/components/graphics/diagrams";
import { StatusChip } from "@/components/primitives/eyebrow";
import { statusMeta, type DxProject, projects } from "@/content/projects";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

interface ProjectDialogProps {
  project: DxProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProject: (slug: string) => void;
}

/**
 * Project detail overlay — follows the ROUTES.md project-detail template:
 * Hero → Snapshot metrics → Why it exists → Status → Related → CTA.
 * Implemented as an accessible dialog so the single-route concept keeps
 * one canonical URL while preserving detail depth.
 */
export function ProjectDialog({
  project,
  open,
  onOpenChange,
  onSelectProject,
}: ProjectDialogProps) {
  const router = useRouter();

  if (!project) return null;

  const Diagram = diagramMap[project.diagram];
  const status = statusMeta[project.status];
  const related = project.related
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is DxProject => Boolean(p));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[92dvh] max-w-4xl gap-0 overflow-y-auto border-line bg-bg-1 p-0 sm:max-w-4xl sm:rounded-none"
        aria-describedby={undefined}
      >
        <DialogHeader className="space-y-0 border-b border-line px-6 pb-6 pt-8 text-left md:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="dx-label text-ink-2">{project.category}</p>
            <StatusChip label={status.label} tone={status.tone} />
          </div>
          <DialogTitle className="dx-display pt-3 text-4xl font-semibold text-ink md:text-5xl">
            {project.name}
            {project.nameBn ? (
              <span className="ml-3 align-middle text-xl font-normal text-ink-1">
                {project.nameBn}
              </span>
            ) : null}
          </DialogTitle>
          <DialogDescription className="max-w-2xl pt-3 text-sm leading-relaxed text-ink-1 md:text-base">
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-0 md:grid-cols-5">
          {/* Schematic panel */}
          <div className="relative flex items-center justify-center border-b border-line bg-bg-0 dx-grid-bg p-8 md:col-span-2 md:border-b-0 md:border-r">
            <div className="pointer-events-none absolute left-4 top-4 dx-label text-ink-2">
              SCHEMATIC
            </div>
            <div className="pointer-events-none absolute right-4 top-4 dx-label text-ink-2" aria-hidden="true">
              FIG.{project.slug.slice(0, 2).toUpperCase()}
            </div>
            <Diagram className="h-56 w-auto text-ink-1 md:h-72" />
            <div className="pointer-events-none absolute bottom-4 left-4 dx-label text-ink-2">
              Concept line art — not a rendering of actual hardware
            </div>
          </div>

          {/* Data panel */}
          <div className="px-6 py-8 md:col-span-3 md:px-10">
            <p className="dx-label text-ink-2">Snapshot</p>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="dx-label shrink-0 text-ink-2">{m.label}</dt>
                  <dd className="dx-num text-right text-sm text-ink md:text-base">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="dx-label text-ink-2">Why it exists</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-1 md:text-base">
                {project.detail}
              </p>
              {project.originNote ? (
                <p className="mt-4 border-l-2 border-signal pl-4 text-sm italic text-ink-1">
                  {project.originNote}
                </p>
              ) : null}
            </div>

            <div className="mt-8">
              <p className="dx-label text-ink-2">Development status</p>
              <p className="mt-3 text-sm text-ink-1">
                {project.statusLabel}. Status as reported on{" "}
                <a
                  href={project.metrics[0]?.source ?? "https://dhumketux.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line-strong underline-offset-2 transition-colors hover:text-signal"
                >
                  dhumketux.com
                </a>
                .
              </p>
            </div>

            {related.length > 0 ? (
              <div className="mt-8">
                <p className="dx-label text-ink-2">Related work</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <button
                        type="button"
                        onClick={() => onSelectProject(r.slug)}
                        className="inline-flex items-center gap-1.5 border border-line-strong px-3 py-2 dx-label text-ink-1 transition-colors hover:border-signal hover:text-signal"
                      >
                        {r.name}
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
              <a
                href="#engage"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-2 bg-signal px-5 py-3 dx-label font-medium text-bg-0 transition-opacity hover:opacity-90"
              >
                Collaborate on this program
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 dx-label text-ink transition-colors hover:border-ink-1"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Back to catalog
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
