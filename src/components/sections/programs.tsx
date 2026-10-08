import { programs } from "@/content/team";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/**
 * PROGRAMS — paper-2 band. One statement, three track names,
 * student programs as one-liners. Minimalism rule: no journey list,
 * no body paragraphs — the program names carry it.
 */
export function Programs() {
  return (
    <section
      id="programs"
      aria-label="Programs"
      className="scroll-mt-16 border-t border-line bg-paper-2 py-28 sm:py-40 lg:py-48"
    >
      <Container>
        <SectionIntro statement="Design, build, fly — the national pipeline." />

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-2">
            With BAXRC and Rocketry Bangladesh, university teams fly real aerospace
            missions — from proposal to national fly-off.
          </p>
        </Reveal>

        {/* Track names only */}
        <Reveal delay={0.14}>
          <ul className="mt-20 grid gap-8 border-t border-ink/20 pt-10 sm:grid-cols-3">
            {programs.dbf.tracks.map((t) => (
              <li
                key={t.id}
                className="text-xl font-semibold tracking-[-0.015em] text-ink sm:text-2xl"
              >
                {t.title}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Student programs — one-liners */}
        <Reveal delay={0.16}>
          <ul className="mt-16 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {programs.studentPrograms.map((p) => (
              <li key={p.title} className="border-t border-line py-4">
                <span className="text-[0.9375rem] font-medium text-ink">{p.title}</span>
                <span className="block text-sm text-ink-2">{p.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
