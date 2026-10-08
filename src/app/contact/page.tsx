import type { Metadata } from "next";
import { org } from "@/content/org";
import { engageRoutes } from "@/content/vision";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — DhumketuX",
  description:
    "Book a launch, propose a collaboration, start a university program, join as a student or explore careers — contact Dhumketu Exploration Technologies Limited.",
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        index="01"
        title="Start the conversation."
        accent="Partners, universities, students, talent."
        lede="One team, one inbox — reach DhumketuX directly for launches, collaborations, programs and careers."
      />

      {/* Direct contact + book a launch */}
      <section id="book" aria-label="Contact and bookings" className="scroll-mt-16 bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
                Direct contact.
              </h2>
              <div className="mt-9">
                <p className="text-sm text-ink-2">Email</p>
                <a
                  href={`mailto:${org.contact.email}`}
                  className="qa-link mt-1 inline-block text-xl font-semibold tracking-[-0.02em] text-ink"
                >
                  {org.contact.email}
                </a>
              </div>
              <div className="mt-7">
                <p className="text-sm text-ink-2">Certification</p>
                <a
                  href={`mailto:${org.contact.emailCertification}`}
                  className="qa-link mt-1 inline-block text-lg font-medium text-ink"
                >
                  {org.contact.emailCertification}
                </a>
              </div>
              <div className="mt-7">
                <p className="text-sm text-ink-2">Phone</p>
                <p className="qa-data mt-1 text-lg font-medium text-ink">{org.contact.phone}</p>
              </div>
              <div className="mt-7">
                <p className="text-sm text-ink-2">Website</p>
                <a
                  href={org.contact.website}
                  target="_blank"
                  rel="noreferrer"
                  className="qa-link mt-1 inline-block text-lg font-medium text-ink"
                >
                  dhumketux.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="night relative overflow-hidden bg-night p-10 text-chalk sm:p-12">
                <div className="glow-ember right-[-15%] top-[-20%] h-[320px] w-[420px]" aria-hidden="true" />
                <h2 className="qa-statement relative max-w-md text-[clamp(1.6rem,3.2vw,2.4rem)] text-chalk">
                  Book a launch.
                </h2>
                <p className="relative mt-5 max-w-md text-base leading-relaxed text-chalk-2">
                  Sounding rocket campaigns, payload launches and test services —
                  propose a mission and the team will respond with feasibility and
                  range requirements.
                </p>
                <a
                  href="mailto:xdhumketu@gmail.com?subject=Book%20a%20Launch"
                  className="group relative mt-9 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
                >
                  xdhumketu@gmail.com
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <p className="qa-data relative mt-2 text-sm text-chalk-2">{org.contact.phone}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Engagement routes */}
      <section id="careers" aria-label="Ways to engage" className="scroll-mt-16 border-t border-line bg-paper-2 py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-ink">
              Ways to engage.
            </h2>
          </Reveal>

          <ul className="mt-14">
            {engageRoutes.map((r, i) => (
              <Reveal as="li" key={r.id} delay={Math.min(i * 0.04, 0.16)}>
                <a
                  href={r.href}
                  className="group grid grid-cols-1 gap-y-2 border-t border-line py-8 sm:grid-cols-[8rem_1fr_auto] sm:gap-x-10 sm:py-9"
                >
                  <span className="qa-data pt-1 text-sm text-ink-3">{r.index}</span>
                  <span>
                    <span className="block text-xl font-semibold tracking-[-0.015em] text-ink transition-colors group-hover:text-ink-2 sm:text-2xl">
                      {r.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2">
                      {r.body}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-ink sm:justify-self-end">
                    {r.cta}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ul>
        </Container>
      </section>
    </Shell>
  );
}
