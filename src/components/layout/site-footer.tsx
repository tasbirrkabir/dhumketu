import { org } from "@/content/org";

/**
 * Minimal night footer — identity, routes, contact, provenance notes.
 * Sits at the end of the night CTA movement (same background, one continuous block).
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-night-line">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-[-0.02em] text-chalk">DhumketuX</p>
            <p className="mt-2 text-sm leading-relaxed text-chalk-2">
              {org.legalName}. {org.tagline}.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-chalk">Work</p>
              <a href="#work" className="text-sm text-chalk-2 transition-colors hover:text-chalk">
                Flagship projects
              </a>
              <a
                href="#technology"
                className="text-sm text-chalk-2 transition-colors hover:text-chalk"
              >
                Technology
              </a>
              <a
                href="#milestones"
                className="text-sm text-chalk-2 transition-colors hover:text-chalk"
              >
                Milestones
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-chalk">Company</p>
              <a href="#people" className="text-sm text-chalk-2 transition-colors hover:text-chalk">
                People
              </a>
              <a
                href="#programs"
                className="text-sm text-chalk-2 transition-colors hover:text-chalk"
              >
                Programs
              </a>
              <a href="#vision" className="text-sm text-chalk-2 transition-colors hover:text-chalk">
                Vision
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-chalk">Connect</p>
              <a
                href="mailto:xdhumketu@gmail.com"
                className="text-sm text-chalk-2 transition-colors hover:text-chalk"
              >
                Email
              </a>
              {org.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-chalk-2 transition-colors hover:text-chalk"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-night-line pt-6 text-xs leading-relaxed text-chalk-2/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Concept redesign prepared for DhumketuX — not the official DhumketuX website.
          </p>
          <p>Figures sourced from dhumketux.com.</p>
        </div>
      </div>
    </footer>
  );
}
