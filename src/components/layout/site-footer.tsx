import Link from "next/link";
import { org } from "@/content/org";
import { projects } from "@/content/projects";

/**
 * Night footer with a full sitemap — mirrors the site information
 * architecture (Aerospace / Programs / Company / Connect).
 */
export function SiteFooter() {
  const featured = ["bidrohi-sr", "agni-bina", "boson", "nazrul-01"]
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <footer className="border-t border-night-line">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-lg font-semibold tracking-[-0.02em] text-chalk">DhumketuX</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-chalk-2">
              {org.legalName}. {org.tagline}.
            </p>
            <p className="mt-6 text-sm text-chalk-2">
              <a href={`mailto:${org.contact.email}`} className="qa-link font-medium text-chalk">
                {org.contact.email}
              </a>
              <span className="mx-3 text-chalk-2/50" aria-hidden="true">·</span>
              <span className="qa-data">{org.contact.phone}</span>
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:col-span-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-2/70">Aerospace</p>
              <ul className="mt-4 space-y-2.5">
                {featured.map(
                  (p) =>
                    p && (
                      <li key={p.slug}>
                        <Link href={`/work/${p.slug}`} className="text-sm text-chalk-2 transition-colors hover:text-chalk">
                          {p.name}
                        </Link>
                      </li>
                    ),
                )}
                <li>
                  <Link href="/work" className="text-sm font-medium text-chalk transition-colors hover:text-chalk-2">
                    All projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-2/70">Programs</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/programs#dbf" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Design, Build, Fly</Link></li>
                <li><Link href="/programs#student" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Student programs</Link></li>
                <li><Link href="/programs#community" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Community platforms</Link></li>
                <li><Link href="/technology" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Technology</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-2/70">Company</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/company#team" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Team &amp; leadership</Link></li>
                <li><Link href="/company#history" className="text-sm text-chalk-2 transition-colors hover:text-chalk">History</Link></li>
                <li><Link href="/vision" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Vision</Link></li>
                <li><Link href="/company#values" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Policy &amp; values</Link></li>
                <li><Link href="/media" className="text-sm text-chalk-2 transition-colors hover:text-chalk">Media</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-2/70">Connect</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/contact" className="text-sm font-medium text-chalk transition-colors hover:text-chalk-2">Contact</Link></li>
                {org.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-chalk-2 transition-colors hover:text-chalk"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-night-line pt-6 text-xs leading-relaxed text-chalk-2/80 sm:flex-row sm:items-center sm:justify-between">
          <p>Concept redesign prepared for DhumketuX — not the official DhumketuX website.</p>
          <p>Figures sourced from dhumketux.com.</p>
        </div>
      </div>
    </footer>
  );
}
