import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject, statusMeta } from "@/content/projects";
import { Shell } from "@/components/layout/shell";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/** Real photography / official renders available per project. */
const MEDIA: Record<string, { src: string; alt: string; caption: string; contain?: boolean }> = {
  "bidrohi-sr": {
    src: "/media/team-launch-rail.jpg",
    alt: "DhumketuX team members standing with the Bidrohi rocket mounted on its launch rail in Mymensingh",
    caption: "The team with the Bidrohi rocket on its launch rail — Mymensingh",
  },
  "agni-bina": {
    src: "/media/engine-static-fire-test.jpg",
    alt: "Static fire test of a DhumketuX liquid rocket engine at night, flame extending across the test stand",
    caption: "DhumketuX propulsion test campaign — static fire at the test stand",
  },
  "nazrul-01": {
    src: "/media/nazrul-sslv-render.png",
    alt: "Official render of the DhumketuX Nazrul-01 small satellite launch vehicle — white two-stage rocket with Bangladeshi flag markings",
    caption: "Official vehicle render — DhumketuX",
    contain: true,
  },
  "space-billboard": {
    src: "/media/fairing-deployment-render.png",
    alt: "Official render of a DhumketuX payload fairing separating in flight, exposing a small satellite above Earth",
    caption: "Payload fairing deployment — official render, DhumketuX",
  },
};

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
  if (!project) return { title: "Project — DhumketuX" };
  return {
    title: `${project.name} — DhumketuX`,
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

  return (
    <Shell>
      {/* Hero — night */}
      <section
        aria-label={project.name}
        className="night relative overflow-hidden bg-night pb-24 pt-36 text-chalk sm:pb-32 sm:pt-44"
      >
        <span
          aria-hidden="true"
          className="qa-ghost right-[-2rem] top-14 text-[clamp(10rem,26vw,22rem)] sm:right-4"
        >
          {String(catalogIndex).padStart(2, "0")}
        </span>
        <div className="glow-ember left-[-10%] top-[-10%] h-[420px] w-[560px]" aria-hidden="true" />

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
            <p className="qa-data mt-12 text-sm text-chalk-2">
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
        </Container>
      </section>

      {/* Body — paper */}
      <section aria-label="About the project" className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="max-w-2xl text-[clamp(1.15rem,1.9vw,1.375rem)] leading-[1.6] tracking-[-0.01em] text-ink">
                {project.detail}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <dl className="border-t border-line">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                  >
                    <dt className="text-sm text-ink-2">{m.label}</dt>
                    <dd className="qa-data text-[0.9375rem] font-medium text-ink">{m.value}</dd>
                  </div>
                ))}
              </dl>
              {project.originNote && (
                <p className="mt-6 text-sm leading-relaxed text-ink-3">{project.originNote}</p>
              )}
            </Reveal>
          </div>

          {media && (
            <ImageReveal className="mt-20 sm:mt-28">
              <figure>
                <div
                  className={`img-quiet relative aspect-[16/9] w-full sm:aspect-[21/10] ${
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
                </div>
                <figcaption className="mt-3 text-xs text-ink-3">{media.caption}</figcaption>
              </figure>
            </ImageReveal>
          )}
        </Container>
      </section>

      {/* Related + CTA — night */}
      <section aria-label="Related projects" className="night bg-night py-24 text-chalk sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Continue through the catalog.
            </h2>
          </Reveal>

          {related.length > 0 && (
            <ul className="mt-14">
              {related.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={Math.min(i * 0.05, 0.15)}>
                  <Link
                    href={`/work/${r.slug}`}
                    className="group grid grid-cols-1 items-baseline gap-y-1 border-t border-night-line py-6 sm:grid-cols-[1fr_auto] sm:py-7"
                  >
                    <span className="text-xl font-semibold tracking-[-0.02em] text-chalk transition-colors group-hover:text-chalk-2 sm:text-2xl">
                      {r.name}
                    </span>
                    <span className="inline-flex items-center gap-3 text-sm text-chalk-2">
                      {r.category}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
              <li aria-hidden="true" className="border-t border-night-line" />
            </ul>
          )}

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-wrap items-center gap-x-9 gap-y-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
                All {projects.length} projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk-2 transition-colors hover:text-chalk"
              >
                Work with us
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-16 border-t border-night-line pt-6 text-xs text-chalk-2/70">
              Status: {statusMeta[project.status].label}. Figures sourced from dhumketux.com.
            </p>
          </Reveal>
        </Container>
      </section>
    </Shell>
  );
}
