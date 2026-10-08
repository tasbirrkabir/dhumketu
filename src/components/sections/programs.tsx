import { programs } from "@/content/team";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/**
 * PROGRAMS — paper-2 band. DBF tracks, the program journey,
 * and student programs as quiet text columns. No cards.
 */
export function Programs() {
  return (
    <section
      id="programs"
      aria-label="Programs"
      className="scroll-mt-16 border-t border-line bg-paper-2 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <Reveal>
          <p className="qa-eyebrow">Programs</p>
          <h2 className="qa-statement mt-5 max-w-3xl text-[clamp(1.9rem,4.5vw,3.5rem)] text-ink">
            Design, build, fly — the national pipeline.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2">
            Together with BAXRC and Rocketry Bangladesh, the &ldquo;Design, Build,
            Fly&rdquo; program gives university teams a real aerospace pipeline —
            from proposal to national fly-off.
          </p>
        </Reveal>

        {/* Three tracks */}
        <div className="mt-16 grid gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8">
          {programs.dbf.tracks.map((t, i) => (
            <Reveal key={t.id} delay={0.08 + i * 0.06}>
              <div className="border-t border-ink/20 pt-6">
                <p className="qa-data text-sm text-ink-3">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.015em] text-ink">
                  {t.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Journey — one quiet numbered row */}
        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-ink/20 pt-8">
            <p className="text-sm font-medium text-ink">The journey</p>
            <ol className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-5">
              {programs.dbf.journey.map((j) => (
                <li key={j.step}>
                  <p className="qa-data text-sm text-ink-3">{j.step}</p>
                  <p className="mt-1.5 text-[0.9375rem] font-medium text-ink">{j.title}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Student programs — two-column text list */}
        <Reveal delay={0.12}>
          <div className="mt-20 border-t border-ink/20 pt-8">
            <p className="text-sm font-medium text-ink">Student programs</p>
            <ul className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {programs.studentPrograms.map((p) => (
                <li key={p.title} className="flex flex-col border-t border-line pt-4">
                  <span className="text-[0.9375rem] font-medium text-ink">{p.title}</span>
                  <span className="mt-1 text-sm text-ink-2">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
