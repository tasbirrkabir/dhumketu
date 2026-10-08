import type { Metadata } from "next";
import { org } from "@/content/org";
import { engageRoutes } from "@/content/vision";
import { Shell } from "@/components/layout/shell";
import { CinematicHero } from "@/components/primitives/page-hero";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ArrowUpRight, Clock, Mail, Phone, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact · DhumketuX",
  description:
    "Propose a collaboration, start a university program, join as a student or explore careers. Contact Dhumketu Exploration Technologies Limited.",
};

export default function ContactPage() {
  return (
    <Shell>
      <CinematicHero
        image="/media/concept-mission-control.jpg"
        alt=""
        title="Start the conversation."
        accent="Partners, universities, students, talent."
        lede="One team, one inbox: reach DhumketuX directly for launches, collaborations, programs and careers."
        caption="Concept art, illustrative mission control environment."
      />

      {/* Send a message: direct contact + form */}
      <section id="form" aria-label="Send a message" className="scroll-mt-24 bg-void py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Direct contact details */}
            <Reveal className="lg:col-span-5">
              <h2 className="qa-statement max-w-md text-[clamp(1.7rem,3.6vw,2.75rem)] text-chalk">
                Send a message.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-chalk-2">
                Write to the team directly, or use the form. Every message lands
                in the DhumketuX inbox and gets a human reply.
              </p>

              <ul className="mt-9 grid gap-4">
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-chalk-3">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Email
                  </p>
                  <a
                    href={`mailto:${org.contact.email}`}
                    className="qa-link mt-2 inline-block text-xl font-semibold tracking-[-0.02em] text-chalk"
                  >
                    {org.contact.email}
                  </a>
                </li>
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-chalk-3">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Certification
                  </p>
                  <a
                    href={`mailto:${org.contact.emailCertification}`}
                    className="qa-link mt-2 inline-block text-lg font-medium text-chalk"
                  >
                    {org.contact.emailCertification}
                  </a>
                </li>
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-chalk-3">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Phone
                  </p>
                  <p className="qa-data mt-2 text-lg font-medium text-chalk">{org.contact.phone}</p>
                </li>
                <li className="glass rounded-2xl p-5">
                  <p className="qa-data flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-chalk-3">
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" /> Website
                  </p>
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

              <p className="qa-data mt-8 flex items-center gap-2 text-sm text-chalk-3">
                <Clock className="h-4 w-4 text-amber" aria-hidden="true" />
                Typical response time: a few working days.
              </p>
            </Reveal>

            {/* The form */}
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-6 text-chalk sm:p-10">
                <div className="glow-ember right-[-15%] top-[-20%] h-[320px] w-[420px]" aria-hidden="true" />
                <div className="glow-brand left-[-15%] bottom-[-25%] h-[300px] w-[400px]" aria-hidden="true" />
                <div className="starfield absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h3 className="qa-display text-2xl text-chalk sm:text-[1.75rem]">
                    Book a launch, or just say hello.
                  </h3>
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-chalk-2">
                    Pick a topic, tell the team what you have in mind and they
                    will respond with feasibility, range requirements or the
                    next step.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
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
