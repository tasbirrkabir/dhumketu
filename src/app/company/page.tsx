import type { Metadata } from "next";
import Image from "next/image";
import { leadership, advisors, teamFacts } from "@/content/team";
import { milestones } from "@/content/milestones";
import { collaborationPrinciples } from "@/content/vision";
import {
  policyIntro,
  coreValues,
  ethicsCompliance,
  safetyPolicy,
  socialResponsibility,
} from "@/content/policy";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal, ImageReveal } from "@/components/primitives/reveal";

export const metadata: Metadata = {
  title: "Company — DhumketuX",
  description:
    "Team & leadership, history, collaborations, policy and core values, and social responsibilities of Dhumketu Exploration Technologies Limited.",
};

export default function CompanyPage() {
  const founder = leadership[0];

  return (
    <Shell>
      <PageHero
        index="50+"
        title="The company."
        accent="One Sky, One Dream."
        lede={`${teamFacts.size} engineers and researchers across 20+ universities in Bangladesh — including BUET, KUET, RUET and CUET — with graduates and researchers from the USA, Europe, Russia, China and Japan.`}
      />

      {/* ——— Team & leadership ——— */}
      <section id="team" aria-label="Team and leadership" className="scroll-mt-16 bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Team &amp; leadership.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-5 lg:col-span-4">
              <figure>
                <div className="img-quiet relative aspect-[4/5] w-full">
                  <Image
                    src="/media/founder-nahiyan-al-rahman.jpg"
                    alt="Portrait of Nahiyan Al Rahman, founder of DhumketuX"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-ink-3">
                  {founder.name} — {founder.role}
                </figcaption>
              </figure>
            </Reveal>

            <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="max-w-xl text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.6] text-ink">
                  {founder.bio}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-14 border-t border-line">
                  {advisors.map((a) => (
                    <li key={a.name} className="border-b border-line py-6">
                      <p className="text-[0.9375rem] font-medium text-ink">
                        {a.name}
                        <span className="font-normal text-ink-2"> — {a.role}</span>
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2">{a.bio}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <ImageReveal className="mt-24 sm:mt-32">
            <figure>
              <div className="img-quiet relative aspect-[16/9] w-full sm:aspect-[21/9]">
                <Image
                  src="/media/team-rocket-library.jpg"
                  alt="DhumketuX team in branded hoodies around a DhumketuX rocket on a launch rail in front of the Mymensingh library building"
                  fill
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-ink-3">
                The DhumketuX team — Mymensingh, Bangladesh
              </figcaption>
            </figure>
          </ImageReveal>
        </Container>
      </section>

      {/* ——— History ——— */}
      <section id="history" aria-label="History" className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              A short history of firsts.
            </h2>
          </Reveal>

          <ol className="mt-16 sm:mt-20">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.id} delay={Math.min(i * 0.03, 0.15)}>
                <div
                  className={`grid grid-cols-1 gap-y-2 border-t border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-x-10 sm:py-9 ${
                    i === milestones.length - 1 ? "border-b" : ""
                  }`}
                >
                  <p className="qa-data text-[0.9375rem] text-ink-3">{m.year}</p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink sm:text-[1.375rem]">
                      {m.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2">
                      {m.body}
                    </p>

                    {m.id === "m-3" && (
                      <ImageReveal className="mt-8">
                        <figure className="max-w-xl">
                          <div className="img-quiet relative aspect-[16/9] w-full">
                            <Image
                              src="/media/a2i-award-2022.jpg"
                              alt="Nahiyan Al Rahman Oli receiving the winner award at Bangladesh's a2i Rocketry Innovation Challenge 2022"
                              fill
                              sizes="(max-width: 768px) 100vw, 576px"
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="mt-3 text-xs text-ink-3">
                            a2i Rocketry Innovation Challenge 2022 — winner
                          </figcaption>
                        </figure>
                      </ImageReveal>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ——— Collaborations ——— */}
      <section id="collaborations" aria-label="Collaborations" className="scroll-mt-16 border-t border-line bg-paper-2 py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              How we collaborate.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-12 sm:grid-cols-2">
            {collaborationPrinciples.map((c, i) => (
              <Reveal as="li" key={c.title} delay={Math.min(i * 0.05, 0.15)}>
                <div className="border-t border-line py-6">
                  <p className="text-[0.9375rem] font-medium text-ink">{c.title}</p>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-2">{c.body}</p>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="hidden border-t border-line sm:block" />
          </ul>
        </Container>
      </section>

      {/* ——— Policy & core values ——— */}
      <section id="values" aria-label="Policy and core values" className="scroll-mt-16 border-t border-line bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
                Policy &amp; core values.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-2">{policyIntro}</p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <ul>
                {coreValues.map((v) => (
                  <li key={v.id} className="border-t border-line py-5 last:border-b">
                    <p className="text-[0.9375rem] font-medium text-ink">{v.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{v.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-ink-3">
                Ethics, compliance &amp; governance
              </h3>
              <ul className="mt-6">
                {ethicsCompliance.map((e) => (
                  <li key={e.title} className="border-t border-line py-5 last:border-b">
                    <p className="text-[0.9375rem] font-medium text-ink">{e.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{e.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-ink-3">
                Safety &amp; risk management
              </h3>
              <ul className="mt-6">
                {safetyPolicy.map((s) => (
                  <li key={s.title} className="border-t border-line py-5 last:border-b">
                    <p className="text-[0.9375rem] font-medium text-ink">{s.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{s.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— Social responsibilities ——— */}
      <section id="responsibility" aria-label="Social responsibilities" className="scroll-mt-16 border-t border-line bg-paper-2 py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Social responsibilities.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-12 sm:grid-cols-2">
            {socialResponsibility.map((r, i) => (
              <Reveal as="li" key={r.title} delay={Math.min(i * 0.05, 0.15)}>
                <div className="border-t border-line py-6">
                  <p className="text-[0.9375rem] font-medium text-ink">{r.title}</p>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-2">{r.body}</p>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="hidden border-t border-line sm:block" />
          </ul>
        </Container>
      </section>
    </Shell>
  );
}
