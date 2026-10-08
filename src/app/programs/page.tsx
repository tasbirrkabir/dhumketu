import type { Metadata } from "next";
import { programs } from "@/content/team";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

export const metadata: Metadata = {
  title: "Programs — DhumketuX",
  description:
    "Design, Build, Fly — the national pipeline. DBF tracks, the program journey, student programs and community platforms, with BAXRC and Rocketry Bangladesh.",
};

export default function ProgramsPage() {
  return (
    <Shell>
      <PageHero
        index="DBF"
        title="Design, build, fly."
        accent="The national pipeline."
        lede={`Together with ${programs.dbf.partners.slice(1).join(" and ")}, the "Design, Build, Fly" program gives university teams a real aerospace pipeline — from proposal to national fly-off.`}
      />

      {/* DBF tracks */}
      <section id="dbf" aria-label="DBF tracks" className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Three tracks. Real missions.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 sm:mt-20 sm:grid-cols-3 sm:gap-8">
            {programs.dbf.tracks.map((t, i) => (
              <Reveal key={t.id} delay={0.08 + i * 0.06}>
                <div className="border-t border-ink/25 pt-6">
                  <p className="qa-data text-sm text-ink-3">0{i + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.015em] text-ink">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Journey */}
          <Reveal delay={0.1}>
            <div className="mt-24 border-t border-ink/25 pt-10 sm:mt-28">
              <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-ink-3">
                The journey
              </h3>
              <ol className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-5">
                {programs.dbf.journey.map((j) => (
                  <li key={j.step}>
                    <p className="qa-data text-sm text-ink-3">{j.step}</p>
                    <p className="mt-2 text-[0.9375rem] font-medium text-ink">{j.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{j.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Safety */}
          <Reveal delay={0.12}>
            <div className="mt-20 border-t border-ink/25 pt-10">
              <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-ink-3">
                Safety &amp; integrity
              </h3>
              <ul className="mt-8 grid gap-8 sm:grid-cols-3">
                {programs.dbf.safety.map((s) => (
                  <li key={s} className="border-t border-line pt-4 text-[0.9375rem] leading-relaxed text-ink-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Student programs */}
      <section id="student" aria-label="Student programs" className="scroll-mt-16 border-t border-line bg-paper-2 py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Student programs.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {programs.studentPrograms.map((p, i) => (
              <Reveal as="li" key={p.title} delay={Math.min(i * 0.04, 0.16)}>
                <div className="border-t border-line py-5">
                  <span className="text-[0.9375rem] font-medium text-ink">{p.title}</span>
                  <span className="mt-1 block text-sm text-ink-2">{p.note}</span>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="hidden border-t border-line sm:block" />
            <li aria-hidden="true" className="hidden border-t border-line lg:block" />
          </ul>
        </Container>
      </section>

      {/* Community platforms */}
      <section id="community" aria-label="Community platforms" className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              A movement, not just a company.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {programs.communityPlatforms.map((name, i) => (
              <Reveal as="li" key={name} delay={Math.min(i * 0.03, 0.14)}>
                <div className="flex items-baseline gap-5 border-t border-line py-4">
                  <span className="qa-data text-sm text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] font-medium text-ink sm:text-base">{name}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </Shell>
  );
}
