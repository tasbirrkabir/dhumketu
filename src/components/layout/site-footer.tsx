import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { DhumketuMark } from "@/components/graphics/dhumketu-mark";
import { org } from "@/content/org";

const footerNav = [
  {
    title: "Work",
    links: [
      { label: "Flagship Projects", href: "#work" },
      { label: "Propulsion", href: "#propulsion" },
      { label: "Milestones", href: "#milestones" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Vision", href: "#vision" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Media", href: "#media" },
      { label: "Collaborate", href: "#engage" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-bg-1" aria-label="Site footer">
      {/* CTA band */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">
          <div>
            <p className="dx-label text-ink-2">Next Chapter</p>
            <p className="dx-display mt-3 text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
              Don&apos;t limit your challenges,
              <br className="hidden sm:block" />{" "}
              <span className="text-signal">challenge your limit.</span>
            </p>
          </div>
          <a
            href="#engage"
            className="group inline-flex w-fit items-center gap-2 bg-signal px-7 py-4 dx-label font-medium text-bg-0 transition-opacity hover:opacity-90"
          >
            Build with DhumketuX
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DhumketuMark className="text-ink" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-1">
              {org.legalName} ({org.shortName}) — Bangladesh&apos;s first private
              aerospace company. Rockets, propulsion, UAVs, satellite-related
              systems and mission technologies, built from Bangladesh.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${org.email}`}
                className="group flex w-fit items-center gap-3 text-sm text-ink-1 transition-colors hover:text-signal"
              >
                <Mail className="h-4 w-4 text-ink-2 group-hover:text-signal" aria-hidden="true" />
                {org.email}
              </a>
              <a
                href={`tel:${org.phone.replace(/[^+\d]/g, "")}`}
                className="group flex w-fit items-center gap-3 text-sm text-ink-1 transition-colors hover:text-signal"
              >
                <Phone className="h-4 w-4 text-ink-2 group-hover:text-signal" aria-hidden="true" />
                {org.phone}
              </a>
            </div>
            <p className="dx-label mt-8 text-ink-2">
              {org.launchSite.coords} — Brahmaputra char, Mymensingh
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
          >
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="dx-label text-ink-2">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-1 transition-colors hover:text-signal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="dx-label text-ink-2">
                © {new Date().getFullYear()} {org.legalName} ({org.shortName})
              </p>
              <p className="max-w-2xl text-xs leading-relaxed text-ink-2">
                Independent redesign concept prepared for presentation to
                DhumketuX. Not the official company website. All facts,
                figures and claims referenced from{" "}
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-1 underline decoration-line-strong underline-offset-2 hover:text-signal"
                >
                  dhumketux.com
                </a>
                . Imagery shown is decorative concept art, not actual DhumketuX
                hardware.
              </p>
            </div>
            <p className="dx-label shrink-0 text-ink-2" aria-hidden="true">
              DX·CONCEPT·01
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
