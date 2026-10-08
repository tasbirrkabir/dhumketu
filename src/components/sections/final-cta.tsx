import { Reveal } from "@/components/primitives/reveal";
import { Container } from "@/components/primitives/section";
import { org } from "@/content/org";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/**
 * FINAL CTA — the closing night movement.
 * One statement, three quiet routes, direct email. The footer continues
 * in the same night block (see SiteFooter).
 */
export function FinalCta() {
  return (
    <section aria-label="Collaborate" className="night bg-night pt-28 text-chalk sm:pt-36 lg:pt-44">
      <Container>
        <Reveal>
          <h2 className="qa-display max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-chalk">
            The next chapter starts here.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-chalk-2">
            Partners, universities, students and talent — build with us from
            Bangladesh.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
            >
              Propose a collaboration
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk-2 transition-colors hover:text-chalk"
            >
              Book a launch
            </Link>
            <Link
              href="/contact#careers"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk-2 transition-colors hover:text-chalk"
            >
              Explore careers
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 border-t border-night-line pt-8 pb-14">
            <p className="text-sm text-chalk-2">
              <a
                href={`mailto:${org.contact.email}`}
                className="qa-link font-medium text-chalk"
              >
                {org.contact.email}
              </a>
              <span className="mx-3 text-chalk-2/60" aria-hidden="true">
                ·
              </span>
              <span className="qa-data">{org.contact.phone}</span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
