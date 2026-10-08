import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProject, projects, statusMeta, type DxStatus } from "@/content/projects";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { StatusDot } from "@/components/primitives/ui-bits";

/**
 * FLAGSHIP WORK: image-led feature cards.
 * Large cinematic card (Bidrohi) → duo (Agni Bina typographic + Boson real
 * engine fire) → wide render panel (Nazrul 01). Every card links into its
 * /work detail page. Facts are source-controlled from src/content/projects.ts.
 */

function firstFacts(project: ReturnType<typeof getProject>) {
  return (project?.metrics ?? []).slice(0, 3).map(({ label, value }) => ({ label, value }));
}

function FactLine({ items }: { items: { label: string; value: string }[] }) {
  if (!items.length) return null;
  return (
    <p className="text-sm text-chalk-2">
      {items.map((m, i) => (
        <span key={m.label}>
          {i > 0 && <span className="mx-2.5 opacity-40" aria-hidden="true">·</span>}
          <span className="opacity-70">{m.label}</span>{" "}
          <span className="qa-data font-medium text-chalk">{m.value}</span>
        </span>
      ))}
    </p>
  );
}

export function StatusChip({ status }: { status: DxStatus }) {
  const meta = statusMeta[status];
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-chalk-2">
      <StatusDot tone={meta.tone} />
      {meta.label}
    </span>
  );
}

function CardShell({
  href,
  index,
  name,
  status,
  children,
  className = "",
}: {
  href: string;
  index: string;
  name: string;
  status: DxStatus;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group card-lift relative flex flex-col overflow-hidden rounded-3xl border border-edge bg-night-2 ${className}`}
    >
      {/* Title bar: index, name, status */}
      <div className="relative z-20 flex items-start justify-between gap-4 p-6 pb-0 sm:p-8 sm:pb-0">
        <div>
          <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-3">{index}</p>
          <h3 className="qa-display mt-2 flex items-center gap-3 text-[clamp(1.7rem,3.4vw,2.5rem)] text-chalk">
            {name}
            <ArrowUpRight
              className="h-[0.55em] w-[0.55em] shrink-0 text-chalk opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
        </div>
        <StatusChip status={status} />
      </div>
      {children}
    </Link>
  );
}

export function Flagship() {
  const bidrohi = getProject("bidrohi-sr");
  const agni = getProject("agni-bina");
  const boson = getProject("boson");
  const nazrul = getProject("nazrul-01");

  return (
    <section id="work" aria-label="Flagship work" className="scroll-mt-16 bg-void pb-20 pt-8 sm:pb-28">
      <Container>
        <SectionIntro
          statement="The path to orbit runs through engines, vehicles and proof."
        />

        <div className="mt-14 grid gap-5 lg:mt-16">
          {/* 01: Bidrohi SR · full-width cinematic */}
          <Reveal>
            <CardShell
              href="/work/bidrohi-sr"
              index="01"
              name="Bidrohi SR"
              status={bidrohi?.status ?? "development"}
              className="img-quiet"
            >
              <figure className="relative mt-6 aspect-[16/10] w-full sm:aspect-[21/9]">
                <Image
                  src="/media/team-launch-rail.jpg"
                  alt="DhumketuX team members standing with the Bidrohi rocket mounted on its launch rail in Mymensingh"
                  fill
                  sizes="(max-width: 1180px) 100vw, 1180px"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-void/30" />
                <figcaption className="absolute bottom-4 right-5 text-[11px] text-chalk-2/80">
                  The team with the Bidrohi rocket on its launch rail, Mymensingh
                </figcaption>
              </figure>
              <div className="p-6 sm:p-8">
                <p className="max-w-2xl text-lg leading-relaxed text-chalk-2">
                  Bangladesh&rsquo;s first commercial sub-orbital space rocket, named after
                  Kazi Nazrul Islam&rsquo;s poem, &ldquo;the rebel&rdquo;.
                </p>
                <div className="mt-5">
                  <FactLine items={firstFacts(bidrohi)} />
                </div>
              </div>
            </CardShell>
          </Reveal>

          {/* 02 + 03: duo */}
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              {/* Agni Bina: typographic power card */}
              <CardShell
                href="/work/agni-bina"
                index="02"
                name="Agni Bina"
                status={agni?.status ?? "development"}
                className="h-full"
              >
                <div aria-hidden="true" className="starfield absolute inset-0 opacity-60" />
                <div className="glow-ember right-[-20%] top-[16%] h-[300px] w-[380px]" aria-hidden="true" />
                <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-14 sm:px-8">
                  <p className="qa-display text-center text-[clamp(3.2rem,7vw,5.5rem)]" aria-label="120 plus kilonewtons of thrust">
                    <span className="text-chalk">120+</span>
                    <span className="text-chalk-2">&thinsp;kN</span>
                  </p>
                </div>
                <div className="relative z-10 border-t border-edge p-6 sm:p-8">
                  <p className="max-w-xl text-base leading-relaxed text-chalk-2">
                    A 120+ kilonewton solid booster, built in Bangladesh for the Bidrohi
                    vehicle.
                  </p>
                  <div className="mt-4">
                    <FactLine items={firstFacts(agni)} />
                  </div>
                </div>
              </CardShell>
            </Reveal>

            <Reveal delay={0.08}>
              {/* Boson: real engine fire */}
              <CardShell
                href="/work/boson"
                index="03"
                name="Boson"
                status={boson?.status ?? "development"}
                className="img-quiet h-full"
              >
                <figure className="relative mt-6 aspect-[16/10] w-full">
                  <Image
                    src="/media/engine-static-fire-test.jpg"
                    alt="Static fire test of a DhumketuX liquid rocket engine at night"
                    fill
                    sizes="(max-width: 1180px) 100vw, 590px"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-void/20" />
                </figure>
                <div className="p-6 sm:p-8">
                  <p className="max-w-xl text-base leading-relaxed text-chalk-2">
                    A liquid rocket engine for autonomous rocket landing: LOX + kerosene,
                    named after the physicist Satyendra Nath Bose.
                  </p>
                  <div className="mt-4">
                    <FactLine items={firstFacts(boson)} />
                  </div>
                </div>
              </CardShell>
            </Reveal>
          </div>

          {/* 04: Nazrul 01 · official render on deep night */}
          <Reveal>
            <CardShell
              href="/work/nazrul-01"
              index="04"
              name="Nazrul 01"
              status={nazrul?.status ?? "concept"}
              className="bg-night"
            >
              <div className="starfield absolute inset-0 opacity-70" aria-hidden="true" />
              <div className="glow-chalk left-1/2 top-[14%] h-[300px] w-[520px] -translate-x-1/2" aria-hidden="true" />
              <div className="relative z-10 night-voice mx-auto flex aspect-[16/10] w-full max-w-3xl items-center justify-center px-8 pt-8 sm:pt-10">
                <Image
                  src="/media/nazrul-sslv-render.png"
                  alt="Official render of the DhumketuX Nazrul-01 small satellite launch vehicle"
                  width={720}
                  height={900}
                  sizes="(max-width: 1180px) 90vw, 720px"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="relative z-10 flex flex-wrap items-baseline justify-between gap-3 p-6 sm:p-8">
                <p className="max-w-2xl text-lg leading-relaxed text-chalk-2">
                  A small satellite launch vehicle concept: dedicated launch capability
                  for microsats and CubeSats.
                </p>
                <p className="text-[11px] text-chalk-3">Official vehicle render · DhumketuX</p>
              </div>
            </CardShell>
          </Reveal>
        </div>
      </Container>

      {/* Index link: the full catalog lives on /work */}
      <Container>
        <Reveal>
          <Link
            href="/work"
            className="group mt-12 flex items-baseline justify-between gap-6 rounded-2xl border border-edge bg-night-2 px-6 py-6 transition-colors hover:border-edge-strong sm:px-8"
          >
            <span className="text-xl font-semibold tracking-[-0.02em] text-chalk sm:text-2xl">
              {projects.length} systems, one engineering culture
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium text-chalk">
              Explore our work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
