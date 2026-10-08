import Image from "next/image";
import { getProject } from "@/content/projects";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * FLAGSHIP WORK — one project at a time, presented editorially.
 * Minimalism rule per project: name → ONE sentence → one quiet fact line →
 * (image). No fact grids, no category badges, no storytelling paragraphs.
 * Facts are source-controlled from src/content/projects.ts.
 */

/** One quiet line: "Label value · Label value · Label value" */
function FactLine({ items, night }: { items: { label: string; value: string }[]; night: boolean }) {
  if (!items.length) return null;
  return (
    <p className={`text-sm ${night ? "text-chalk-2" : "text-ink-2"}`}>
      {items.map((m, i) => (
        <span key={m.label}>
          {i > 0 && <span className="mx-2.5 opacity-40" aria-hidden="true">·</span>}
          <span className="opacity-70">{m.label}</span>{" "}
          <span className={`font-medium ${night ? "text-chalk" : "text-ink"}`}>{m.value}</span>
        </span>
      ))}
    </p>
  );
}

/** First three metrics only — a fact line, not a table. */
function firstFacts(project: ReturnType<typeof getProject>) {
  return (project?.metrics ?? []).slice(0, 3).map(({ label, value }) => ({ label, value }));
}

export function Flagship() {
  const bidrohi = getProject("bidrohi-sr");
  const agni = getProject("agni-bina");
  const boson = getProject("boson");
  const nazrul = getProject("nazrul-01");

  return (
    <section id="work" aria-label="Flagship work" className="scroll-mt-16">
      {/* Section opener on paper — statement only */}
      <div className="bg-paper pb-16 pt-10 sm:pb-24 lg:pb-32">
        <Container>
          <SectionIntro statement="The path to orbit runs through engines, vehicles and proof." />
        </Container>
      </div>

      {/* 01 — Bidrohi SR · night */}
      <article aria-label="Bidrohi SR" className="night bg-night py-24 text-chalk sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <p className="qa-data text-sm text-chalk-2">01</p>
            <h3 className="qa-display mt-6 text-[clamp(2.5rem,6vw,5rem)]">Bidrohi SR</h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-2">
              Bangladesh&rsquo;s first commercial sub-orbital space rocket — named after
              Kazi Nazrul Islam&rsquo;s poem, &ldquo;the rebel&rdquo;.
            </p>
            <div className="mt-8">
              <FactLine night items={firstFacts(bidrohi)} />
            </div>
          </Reveal>

          <ImageReveal className="mt-14 sm:mt-16">
            <figure>
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/media/team-launch-rail.jpg"
                  alt="DhumketuX team members standing with the Bidrohi rocket mounted on its launch rail in Mymensingh"
                  fill
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-chalk-2/90">
                The team with the Bidrohi rocket on its launch rail — Mymensingh
              </figcaption>
            </figure>
          </ImageReveal>
        </Container>
      </article>

      {/* 02 — Agni Bina · paper, one typographic moment */}
      <article aria-label="Agni Bina" className="bg-paper py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <p className="qa-data text-sm text-ink-3">02</p>
            <h3 className="qa-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-ink">Agni Bina</h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              A 120+ kilonewton solid booster, built in Bangladesh for the Bidrohi
              vehicle.
            </p>
            <div className="mt-8">
              <FactLine night={false} items={firstFacts(agni)} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="qa-display mt-16 text-[clamp(3.5rem,11vw,9rem)] text-ink sm:mt-20"
              aria-label="120 plus kilonewtons of thrust"
            >
              120+&thinsp;<span className="text-ink-3">kN</span>
            </p>
            <p className="mt-3 text-sm text-ink-2">
              Target thrust of the Agni Bina booster
            </p>
          </Reveal>
        </Container>
      </article>

      {/* 03 — Boson · night */}
      <article aria-label="Boson" className="night bg-night py-24 text-chalk sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <p className="qa-data text-sm text-chalk-2">03</p>
            <h3 className="qa-display mt-6 text-[clamp(2.5rem,6vw,5rem)]">Boson</h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-2">
              A liquid rocket engine for autonomous rocket landing — LOX + kerosene,
              named after the physicist Satyendra Nath Bose.
            </p>
            <div className="mt-8">
              <FactLine night items={firstFacts(boson)} />
            </div>
          </Reveal>
        </Container>
      </article>

      {/* 04 — Nazrul 01 · paper + official render on black */}
      <article aria-label="Nazrul 01" className="bg-paper py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <p className="qa-data text-sm text-ink-3">04</p>
            <h3 className="qa-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-ink">
              Nazrul 01
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              A small satellite launch vehicle concept — dedicated launch capability
              for microsats and CubeSats.
            </p>
            <div className="mt-8">
              <FactLine night={false} items={firstFacts(nazrul)} />
            </div>
          </Reveal>

          <ImageReveal className="mt-14 sm:mt-16">
            <figure>
              <div className="night-voice relative aspect-[4/5] w-full overflow-hidden bg-night sm:aspect-[16/9]">
                <Image
                  src="/media/nazrul-sslv-render.png"
                  alt="Official render of the DhumketuX Nazrul-01 small satellite launch vehicle — white two-stage rocket with Bangladeshi flag markings"
                  fill
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-3 text-xs text-ink-3">
                Official vehicle render — DhumketuX
              </figcaption>
            </figure>
          </ImageReveal>
        </Container>
      </article>
    </section>
  );
}
