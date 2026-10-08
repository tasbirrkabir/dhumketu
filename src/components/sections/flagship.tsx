import Image from "next/image";
import { getProject } from "@/content/projects";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * FLAGSHIP WORK — one project at a time, presented editorially.
 * Four movements: Bidrohi SR (night) → Agni Bina (paper) → Boson (night)
 * → Nazrul 01 (paper). Facts are source-controlled from src/content/projects.ts.
 */

function Facts({
  items,
  night = false,
}: {
  items: { label: string; value: string }[];
  night?: boolean;
}) {
  return (
    <dl
      className={`mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 sm:grid-cols-4 ${
        night ? "border-night-line" : "border-line"
      }`}
    >
      {items.map((m) => (
        <div key={m.label}>
          <dt className={`order-2 mt-1 text-sm ${night ? "text-chalk-2" : "text-ink-2"}`}>
            {m.label}
          </dt>
          <dd
            className={`qa-data order-1 text-lg font-medium ${
              night ? "text-chalk" : "text-ink"
            }`}
          >
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CategoryLine({ children, night }: { children: string; night: boolean }) {
  return (
    <p className={`text-sm font-medium ${night ? "text-chalk-2" : "text-ink-2"}`}>
      {children}
    </p>
  );
}

export function Flagship() {
  const bidrohi = getProject("bidrohi-sr");
  const agni = getProject("agni-bina");
  const boson = getProject("boson");
  const nazrul = getProject("nazrul-01");

  return (
    <section id="work" aria-label="Flagship work" className="scroll-mt-16">
      {/* Section opener on paper */}
      <div className="bg-paper pb-20 pt-8 sm:pb-28 lg:pb-36">
        <Container>
          <SectionIntro
            eyebrow="Flagship work"
            statement="The path to orbit runs through engines, vehicles and proof."
          />
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2">
              Four programs carry the mission — from the first solid boosters to a small
              satellite launch vehicle. Presented the way engineering actually happens:
              one system at a time.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 01 — Bidrohi SR · night */}
      <article aria-label="Bidrohi SR" className="night bg-night py-24 text-chalk sm:py-32 lg:py-36">
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between gap-6">
              <span className="qa-data text-sm text-chalk-2">01</span>
              <CategoryLine night>Launch vehicle · Sub-orbital · In development</CategoryLine>
            </div>
            <h3 className="qa-display mt-8 text-[clamp(2.5rem,6vw,5rem)]">Bidrohi SR</h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chalk-2">
              Bangladesh&rsquo;s first commercial sub-orbital space rocket — named after
              Kazi Nazrul Islam&rsquo;s poem &ldquo;Bidrohi&rdquo;, the rebel. The vehicle
              is being developed around the Agni Bina solid booster.
            </p>
            <Facts night items={bidrohi?.metrics ?? []} />
          </Reveal>

          <ImageReveal className="mt-16 sm:mt-20">
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

      {/* 02 — Agni Bina · paper, typographic moment */}
      <article aria-label="Agni Bina" className="bg-paper py-24 sm:py-32 lg:py-36">
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between gap-6">
              <span className="qa-data text-sm text-ink-3">02</span>
              <CategoryLine night={false}>Solid propulsion · In development</CategoryLine>
            </div>
            <h3 className="qa-display mt-8 text-[clamp(2.5rem,6vw,5rem)] text-ink">
              Agni Bina
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
              The 120+ kN solid rocket booster built for Bidrohi — a tribute to
              Bangladesh&rsquo;s national poet and a symbol of self-reliant aerospace
              power. Progress is reported at approximately 90% complete, with static
              fire upcoming.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="qa-display mt-14 text-[clamp(3.5rem,11vw,9rem)] text-ink sm:mt-16"
              aria-label="120 plus kilonewtons of thrust"
            >
              120+&thinsp;<span className="text-ink-3">kN</span>
            </p>
            <p className="mt-3 text-sm text-ink-2">
              Target thrust of the Agni Bina booster
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <Facts items={agni?.metrics.filter((m) => m.label !== "Thrust") ?? []} />
          </Reveal>
        </Container>
      </article>

      {/* 03 — Boson · night */}
      <article aria-label="Boson" className="night bg-night py-24 text-chalk sm:py-32 lg:py-36">
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between gap-6">
              <span className="qa-data text-sm text-chalk-2">03</span>
              <CategoryLine night>Liquid propulsion · In development</CategoryLine>
            </div>
            <h3 className="qa-display mt-8 text-[clamp(2.5rem,6vw,5rem)]">Boson</h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chalk-2">
              A next-generation liquid rocket engine for autonomous rocket landing —
              LOX + kerosene, named after the physicist Satyendra Nath Bose. Purpose-built
              for the reusable Revolation V1 platform.
            </p>
            <Facts night items={boson?.metrics ?? []} />
          </Reveal>
        </Container>
      </article>

      {/* 04 — Nazrul 01 · paper + official render in night panel */}
      <article aria-label="Nazrul 01" className="bg-paper py-24 sm:py-32 lg:py-36">
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between gap-6">
              <span className="qa-data text-sm text-ink-3">04</span>
              <CategoryLine night={false}>Small satellite launch vehicle · Concept</CategoryLine>
            </div>
            <h3 className="qa-display mt-8 text-[clamp(2.5rem,6vw,5rem)] text-ink">
              Nazrul 01
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
              A Small Satellite Launch Vehicle concept, planned around the Ibn Khaldun
              liquid engine — dedicated launch capability for microsats and CubeSats,
              extending toward cluster-engine configurations.
            </p>
          </Reveal>

          <ImageReveal className="mt-16 sm:mt-20">
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

          <Reveal delay={0.1}>
            <Facts items={nazrul?.metrics ?? []} />
          </Reveal>
        </Container>
      </article>
    </section>
  );
}
