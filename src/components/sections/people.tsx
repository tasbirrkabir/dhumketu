import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { advisors, teamFacts } from "@/content/team";
import { Container, SectionIntro } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

/**
 * PEOPLE: founder portrait + the national-movement statement + advisors
 * as one-line entries + wide team photograph. Depth lives on /company.
 */
export function People() {
  return (
    <section aria-label="People" className="relative overflow-hidden bg-void py-24 sm:py-32 lg:py-40">
      <div className="glow-amber left-[-10%] bottom-[4%] h-[380px] w-[520px] opacity-70" aria-hidden="true" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          {/* Portrait */}
          <ImageReveal>
            <figure>
              <div className="img-quiet relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-edge">
                <Image
                  src="/media/founder-Alex Morgan-al-rahman.jpg"
                  alt="Portrait of Alex Morgan, founder of DEMOSPACE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-3 text-[11px] text-chalk-3">
                Alex Morgan · Founder, DEMOSPACE
              </figcaption>
            </figure>
          </ImageReveal>

          {/* Statement + advisors */}
          <div>
            <SectionIntro
              statement={`${teamFacts.size} engineers and researchers: a national space movement built by students.`}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-2">
                {teamFacts.universities}. {teamFacts.movement}.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="qa-data mt-12 text-xs uppercase tracking-[0.16em] text-chalk-3">
                Advisors
              </p>
              <ul className="mt-4 divide-y divide-edge border-t border-edge">
                {advisors.map((a) => (
                  <li key={a.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                    <span className="font-medium text-chalk">{a.name}</span>
                    <span className="text-sm text-chalk-2">{a.role}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/company#team"
                className="group btn-ghost mt-10 px-6 py-3 text-[0.9375rem] font-medium"
              >
                Meet the team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Wide team photograph */}
        <ImageReveal className="mt-16 lg:mt-20">
          <figure>
            <div className="img-quiet relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-edge sm:aspect-[21/9]">
              <Image
                src="/media/team-rocket-library.jpg"
                alt="DEMOSPACE team in branded hoodies around a DEMOSPACE rocket on a launch rail in front of the Flight Test Range library building"
                fill
                sizes="(max-width: 1180px) 100vw, 1180px"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-void/45 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-3 text-[11px] text-chalk-3">
              The team with a DEMOSPACE rocket, Flight Test Range
            </figcaption>
          </figure>
        </ImageReveal>
      </Container>
    </section>
  );
}
