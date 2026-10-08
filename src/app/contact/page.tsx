import type { Metadata } from "next";
import { org } from "@/content/org";
import { engageRoutes } from "@/content/vision";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
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
      <CinematicHero
        image="/media/concept-mission-control.jpg"
        alt=""
        kicker="Contact · 01"
        title="Start the conversation."
        accent="Partners, universities, students, talent."
        lede="One team, one inbox — reach DhumketuX directly for launches, collaborations, programs and careers."
        caption="Concept art — illustrative mission control environment."
      />

      {/* Direct contact + book a launch */}
      <section id="book" aria-label="Contact and bookings" className="scroll-mt-16 bg-void py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
                Direct contact.
              </h2>
              <ul className="mt-9 grid gap-4">
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-3">Email</p>
                  <a
                    href={`mailto:${org.contact.email}`}
                    className="qa-link mt-2 inline-block text-xl font-semibold tracking-[-0.02em] text-chalk"
                  >
                    {org.contact.email}
                  </a>
                </li>
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-3">Certification</p>
                  <a
                    href={`mailto:${org.contact.emailCertification}`}
                    className="qa-link mt-2 inline-block text-lg font-medium text-chalk"
                  >
                    {org.contact.emailCertification}
                  </a>
                </li>
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-3">Phone</p>
                  <p className="qa-data mt-2 text-lg font-medium text-chalk">{org.contact.phone}</p>
                </li>
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data text-xs uppercase tracking-[0.16em] text-chalk-3">Website</p>
                  <a
                    href={org.contact.website}
                    target="_blank"
                    rel="noreferrer"
                    className="qa-link mt-2 inline-block text-lg font-medium text-chalk"
                  >
                    dhumketux.com
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-chalk sm:p-12">
                <div className="glow-ember right-[-15%] top-[-20%] h-[320px] w-[420px]" aria-hidden="true" />
                <div className="starfield absolute inset-0 opacity-50" aria-hidden="true" />
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
                  className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5a2c] to-[#ffb25b] px-7 py-3 text-[0.9375rem] font-semibold text-[#1a0c05] shadow-[0_0_32px_rgba(255,90,44,0.4)] transition-[box-shadow,filter] duration-300 hover:shadow-[0_0_44px_rgba(255,90,44,0.6)] hover:brightness-110"
                >
                  xdhumketu@gmail.com
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <p className="qa-data relative mt-4 text-sm text-chalk-2">{org.contact.phone}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Engagement routes */}
      <section
        id="careers"
        aria-label="Ways to engage"
        className="scroll-mt-16 border-t border-edge bg-night py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <h2 className="qa-statement max-w-3xl text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
              Ways to engage.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4">
            {engageRoutes.map((r, i) => (
              <Reveal as="li" key={r.id} delay={Math.min(i * 0.04, 0.16)}>
                <a
                  href={r.href}
                  className="card-lift group grid grid-cols-1 gap-y-3 rounded-2xl border border-edge bg-night-2 p-6 sm:grid-cols-[6rem_1fr_auto] sm:gap-x-8"
                >
                  <span className="qa-data text-sm text-chalk-3">{r.index}</span>
                  <span>
                    <span className="block text-xl font-semibold tracking-[-0.015em] text-chalk transition-colors group-hover:text-amber sm:text-2xl">
                      {r.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-chalk-2">
                      {r.body}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-amber sm:justify-self-end">
                    {r.cta}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </Shell>
  );
}
