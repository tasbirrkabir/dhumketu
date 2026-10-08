import type { Metadata } from "next";
import { programs } from "@/content/team";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { CtaBand } from "@/components/primitives/ui-bits";

export const metadata: Metadata = {
  title: "Programs · DhumketuX",
  description:
    "Design, Build, Fly: the national pipeline. DBF tracks, the program journey, student programs and community platforms, with BAXRC and Rocketry Bangladesh.",
};

export default function ProgramsPage() {
  return (
    <Shell>
      <CinematicHero
        image="/media/concept-students-workshop.jpg"
        alt=""
        title="Design, build, fly."
        accent="The national pipeline."
        lede={`Together with ${programs.dbf.partners.slice(1).join(" and ")}, the "Design, Build, Fly" program gives university teams a real aerospace pipeline from proposal to national fly-off.`}
        caption="Concept art, illustrative of student engineering work."
      />

      {/* DBF tracks */}
      <section id="dbf" aria-label="DBF tracks" className="scroll-mt-16 bg-void py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Three tracks. Real missions.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-3">
            {programs.dbf.tracks.map((t, i) => (
              <Reveal key={t.id} delay={0.08 + i * 0.06} className="h-full">
                <div className="card-lift h-full rounded-3xl border border-edge bg-night-2 p-6 sm:p-7">
                  <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-2">
                    0{i + 1}
                  </p>
                  <h3 className="qa-display mt-4 text-xl text-chalk sm:text-[1.35rem]">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-chalk-2">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Journey */}
          <Reveal delay={0.1}>
            <div className="mt-24 sm:mt-28">
              <h3 className="qa-data text-xs font-medium uppercase tracking-[0.18em] text-chalk-3">
                The journey
              </h3>
              <ol className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {programs.dbf.journey.map((j) => (
                  <li
                    key={j.step}
                    className="card-lift rounded-2xl border border-edge bg-night-2 p-5"
                  >
                    <p className="qa-data text-xs text-chalk-2">{j.step}</p>
                    <p className="mt-3 text-[0.9375rem] font-medium text-chalk">{j.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-chalk-2">{j.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Safety */}
          <Reveal delay={0.12}>
            <div className="mt-20">
              <h3 className="qa-data text-xs font-medium uppercase tracking-[0.18em] text-chalk-3">
                Safety &amp; integrity
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {programs.dbf.safety.map((s) => (
                  <li
                    key={s}
                    className="glass rounded-2xl p-5 text-[0.9375rem] leading-relaxed text-chalk-2"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Student programs */}
      <section
        id="student"
        aria-label="Student programs"
        className="scroll-mt-16 border-t border-edge bg-night py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Student programs.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.studentPrograms.map((p, i) => (
              <Reveal as="li" key={p.title} delay={Math.min(i * 0.04, 0.16)} className="h-full">
                <div className="card-lift h-full rounded-2xl border border-edge bg-night-2 p-5 sm:p-6">
                  <span className="text-[0.9375rem] font-medium text-chalk">{p.title}</span>
                  <span className="mt-1.5 block text-sm text-chalk-2">{p.note}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Community platforms */}
      <section
        id="community"
        aria-label="Community platforms"
        className="scroll-mt-16 border-t border-edge bg-void py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              A movement, not just a company.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {programs.communityPlatforms.map((name, i) => (
              <Reveal as="li" key={name} delay={Math.min(i * 0.03, 0.14)} className="h-full">
                <div className="flex h-full items-center gap-5 rounded-2xl border border-edge bg-night-2 p-5">
                  <span className="qa-data text-sm text-chalk-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] font-medium text-chalk sm:text-base">{name}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Join the national"
        accent="pipeline."
        copy="Universities, student teams and community platforms: bring your team into Design, Build, Fly or partner on the programs around it."
        primary={{ href: "/contact#form", label: "Start a conversation" }}
      />
    </Shell>
  );
}
