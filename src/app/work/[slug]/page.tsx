import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject, statusMeta, type DxProject } from "@/content/projects";
import { Shell } from "@/components/layout/shell";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";
import { StatusDot } from "@/components/primitives/ui-bits";

/** Real photography / official renders available per project. */
const MEDIA: Record<string, { src: string; alt: string; caption: string; contain?: boolean }> = {
  "bidrohi-sr": {
    src: "/media/team-launch-rail.jpg",
    alt: "DhumketuX team members standing with the Bidrohi rocket mounted on its launch rail in Mymensingh",
    caption: "The team with the Bidrohi rocket on its launch rail, Mymensingh",
  },
  "agni-bina": {
    src: "/media/engine-static-fire-test.jpg",
    alt: "Static fire test of a DhumketuX liquid rocket engine at night, flame extending across the test stand",
    caption: "DhumketuX propulsion test campaign, static fire at the test stand",
  },
  "nazrul-01": {
    src: "/media/nazrul-sslv-render.png",
    alt: "Official render of the DhumketuX Nazrul-01 small satellite launch vehicle, white two-stage rocket with Bangladeshi flag markings",
    caption: "Official vehicle render · DhumketuX",
    contain: true,
  },
  "space-billboard": {
    src: "/media/fairing-deployment-render.png",
    alt: "Official render of a DhumketuX payload fairing separating in flight, exposing a small satellite above Earth",
    caption: "Payload fairing deployment · official render, DhumketuX",
  },
};

/**
 * Schematic: abstract line-art glyph for projects without real media.
 * Deliberately simplified geometry (clearly illustrative, never presented
 * as hardware documentation or photography).
 */
function Schematic({ variant }: { variant: DxProject["diagram"] }) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-auto w-full max-w-md text-chalk-3"
      aria-hidden="true"
    >
      {/* faint datum grid */}
      <g strokeDasharray="2 6" opacity={0.35}>
        <path d="M40 16v168M160 16v168M280 16v168" />
        <path d="M24 40h272M24 100h272M24 160h272" />
      </g>

      {variant === "launch-vehicle" && (
        <g>
          <path d="M160 26l12 34h-24l12-34Z" />
          <path d="M148 60v80M172 60v80" />
          <path d="M148 118l-14 32h14M172 118l14 32h-14" />
          <path d="M148 140l-5 14M172 140l5 14" />
          <path d="M160 158v22" stroke="#e52027" strokeDasharray="3 5" />
          <path d="M160 18v8" strokeDasharray="2 4" />
        </g>
      )}

      {variant === "engine" && (
        <g>
          <path d="M140 38h40" />
          <path d="M148 38c0 20-20 48-32 82M172 38c0 20 20 48 32 82" />
          <path d="M116 120h88" />
          <path d="M118 22l26 14M202 22l-26 14" strokeDasharray="3 5" />
          <path d="M134 132h52M142 144h36" stroke="#e52027" strokeDasharray="3 5" />
        </g>
      )}

      {variant === "engine-cluster" && (
        <g>
          <path d="M160 24v36" strokeDasharray="3 5" />
          <path d="M100 60h120" />
          <path d="M112 60c0 14-12 32-18 54M128 60c0 14 12 32 18 54M94 114h52" />
          <path d="M152 60c0 14-12 32-18 54M168 60c0 14 12 32 18 54M134 114h52" />
          <path d="M192 60c0 14-12 32-18 54M208 60c0 14 12 32 18 54M174 114h52" />
          <path d="M110 128h20M150 128h20M190 128h20" stroke="#e52027" strokeDasharray="3 5" />
        </g>
      )}

      {variant === "vtvl" && (
        <g>
          <path d="M160 74l-62 28M160 74l62 28M160 126l-62-28M160 126l62-28" />
          <rect x="146" y="86" width="28" height="28" rx="7" />
          <circle cx="98" cy="60" r="21" strokeDasharray="3 5" />
          <circle cx="222" cy="60" r="21" strokeDasharray="3 5" />
          <circle cx="98" cy="140" r="21" strokeDasharray="3 5" />
          <circle cx="222" cy="140" r="21" strokeDasharray="3 5" />
          <circle cx="160" cy="100" r="2.5" fill="#e52027" stroke="none" />
          <path d="M152 114l-6 18M168 114l6 18" />
        </g>
      )}

      {variant === "uav" && (
        <g>
          <path d="M160 36v128" />
          <path d="M160 84L88 112v12l72-20 72 20v-12l-72-28Z" />
          <path d="M160 150l-32 18v6l32-12 32 12v-6l-32-18Z" />
          <circle cx="160" cy="30" r="15" stroke="#e52027" strokeDasharray="3 5" />
          <circle cx="160" cy="36" r="2.5" fill="#e52027" stroke="none" />
        </g>
      )}

      {variant === "orbit" && (
        <g>
          <circle cx="160" cy="100" r="30" />
          <circle cx="160" cy="100" r="38" strokeDasharray="2 5" opacity={0.7} />
          <ellipse cx="160" cy="100" rx="118" ry="46" transform="rotate(-18 160 100)" />
          <ellipse cx="160" cy="100" rx="118" ry="46" transform="rotate(26 160 100)" strokeDasharray="4 6" />
          <rect x="242" y="52" width="12" height="8" transform="rotate(-18 248 56)" />
          <path d="M242 56l-6-6M256 56l6-6" />
          <circle cx="52" cy="140" r="3" fill="#e52027" stroke="none" />
        </g>
      )}

      {variant === "capsule" && (
        <g>
          <path d="M160 56l20 62h-40l20-62Z" />
          <path d="M136 118q24 14 48 0" />
          <path d="M160 56l-34-22M160 56l34-22" />
          <path d="M112 34q48-30 96 0" strokeDasharray="3 5" />
          <path d="M148 140q12 16 24 0" stroke="#e52027" strokeDasharray="3 5" />
        </g>
      )}
    </svg>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project · DhumketuX" };
  return {
    title: `${project.name} · DhumketuX`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const catalogIndex = projects.findIndex((p) => p.slug === project.slug) + 1;
  const media = MEDIA[project.slug];
  const related = project.related
    .map((s) => getProject(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const meta = statusMeta[project.status];

  return (
    <Shell>
      {/* Hero: night */}
      <section
        aria-label={project.name}
        className="relative overflow-hidden bg-night pb-24 pt-36 text-chalk sm:pb-32 sm:pt-44"
      >
        <span
          aria-hidden="true"
          className="qa-ghost right-[-2rem] top-14 text-[clamp(10rem,26vw,22rem)] sm:right-4"
        >
          {String(catalogIndex).padStart(2, "0")}
        </span>
        <div className="glow-ember left-[-10%] top-[-10%] h-[420px] w-[560px]" aria-hidden="true" />
        <div className="starfield absolute inset-0 opacity-50" aria-hidden="true" />

        <Container className="relative z-10">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-chalk-2 transition-colors hover:text-chalk"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
              All projects
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="qa-data mt-12 flex items-center gap-2.5 text-sm text-chalk-2">
              <StatusDot tone={meta.tone} />
              {project.category} · {project.statusLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="qa-display mt-4 max-w-[14ch] text-[clamp(2.9rem,7vw,6.25rem)] text-chalk">
              {project.name}
            </h1>
          </Reveal>
          {project.nameBn && (
            <Reveal delay={0.14}>
              <p className="qa-serif mt-3 text-[clamp(1.4rem,3vw,2.25rem)] text-chalk-2">
                {project.nameBn}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-2">{project.summary}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {project.metrics.slice(0, 3).map((m) => (
                <li key={m.label} className="glass rounded-full px-4 py-2 text-xs text-chalk-2">
                  <span className="qa-data text-chalk">{m.value}</span>
                  <span className="mx-2 text-chalk-3" aria-hidden="true">·</span>
                  {m.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Body: void */}
      <section aria-label="About the project" className="bg-void py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="max-w-2xl text-[clamp(1.15rem,1.9vw,1.375rem)] leading-[1.6] tracking-[-0.01em] text-chalk">
                {project.detail}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <dl className="glass rounded-3xl p-6 sm:p-7">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline justify-between gap-6 border-b border-edge py-4 first:pt-0 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-chalk-2">{m.label}</dt>
                    <dd className="qa-data text-[0.9375rem] font-medium text-chalk">{m.value}</dd>
                  </div>
                ))}
              </dl>
              {project.originNote && (
                <p className="mt-6 text-sm leading-relaxed text-chalk-3">{project.originNote}</p>
              )}
            </Reveal>
          </div>

          {media ? (
            <ImageReveal className="mt-20 sm:mt-28">
              <figure>
                <div
                  className={`img-quiet relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-edge sm:aspect-[21/10] ${
                    media.contain ? "night-voice bg-night" : ""
                  }`}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1180px"
                    className={media.contain ? "object-contain" : "object-cover"}
                  />
                  {!media.contain && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent"
                    />
                  )}
                </div>
                <figcaption className="mt-3 text-xs text-chalk-3">{media.caption}</figcaption>
              </figure>
            </ImageReveal>
          ) : (
            <ImageReveal className="mt-20 sm:mt-28">
              <figure>
                <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-3xl border border-edge bg-night px-6 py-10 sm:py-14">
                  <div className="starfield absolute inset-0 opacity-60" aria-hidden="true" />
                  <div className="glow-chalk left-1/2 top-[-20%] h-[280px] w-[460px] -translate-x-1/2" aria-hidden="true" />
                  <p className="qa-data absolute left-6 top-5 z-10 text-[11px] uppercase tracking-[0.16em] text-chalk-3">
                    DX · {String(catalogIndex).padStart(2, "0")}
                  </p>
                  <div className="relative z-10 w-full max-w-md">
                    <Schematic variant={project.diagram} />
                  </div>
                  <figcaption className="absolute bottom-4 right-6 z-10 text-[11px] text-chalk-3">
                    Schematic illustration, simplified geometry, not an engineering drawing
                  </figcaption>
                </div>
              </figure>
            </ImageReveal>
          )}
        </Container>
      </section>

      {/* Related + CTA: night */}
      <section aria-label="Related projects" className="border-t border-edge bg-night py-24 text-chalk sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Continue through the catalog.
            </h2>
          </Reveal>

          {related.length > 0 && (
            <ul className="mt-14 grid gap-4 sm:grid-cols-2">
              {related.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={Math.min(i * 0.05, 0.15)} className="h-full">
                  <Link
                    href={`/work/${r.slug}`}
                    className="group card-lift flex h-full flex-col justify-between gap-4 rounded-2xl border border-edge bg-night-2 p-6"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="text-xl font-semibold tracking-[-0.02em] text-chalk sm:text-2xl">
                        {r.name}
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-amber transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="qa-data text-[11px] uppercase tracking-[0.14em] text-chalk-3">
                      {r.category}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-wrap items-center gap-x-9 gap-y-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-7 py-3 text-[0.9375rem] font-medium text-chalk transition-colors hover:border-chalk-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
                All {projects.length} projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e52027] via-[#ff6a3d] to-[#ffb25b] px-7 py-3 text-[0.9375rem] font-semibold text-[#1a0c05] shadow-[0_0_32px_rgba(230,58,36,0.4)] transition-[box-shadow,filter] duration-300 hover:shadow-[0_0_44px_rgba(230,58,36,0.6)] hover:brightness-110"
              >
                Work with us
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-16 border-t border-edge pt-6 text-xs text-chalk-3">
              Status: {statusMeta[project.status].label}. Figures sourced from dhumketux.com.
            </p>
          </Reveal>
        </Container>
      </section>
    </Shell>
  );
}
