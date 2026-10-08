import Link from "next/link";
import { org } from "@/content/org";
import { projects } from "@/content/projects";

/**
 * Night footer: ember gradient seam, ghost wordmark, full sitemap,
 * and the honesty line (concept redesign + provenance).
 */
export function SiteFooter() {
  const featured = ["bidrohi-sr", "agni-bina", "boson", "nazrul-01"]
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <footer className="relative overflow-hidden">
      {/* Ember seam */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#ff5a2c]/60 to-transparent"
      />
      <div className="glow-ember bottom-[-40%] left-1/2 h-[420px] w-[820px] -translate-x-1/2" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        {/* Top row: identity + CTA */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em] text-chalk">
              Dhumketu<span className="text-ember-gradient">X</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-chalk-2">
              {org.legalName}. {org.tagline}.
            </p>
            <p className="mt-6 text-sm text-chalk-2">
              <a href={`mailto:${org.contact.email}`} className="qa-link font-medium text-chalk">
                {org.contact.email}
              </a>
              <span className="mx-3 text-chalk-3" aria-hidden="true">·</span>
              <span className="qa-data">{org.contact.phone}</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5a2c] to-[#ffb25b] px-5 py-2.5 text-sm font-semibold text-[#1a0c05] shadow-[0_0_28px_rgba(255,90,44,0.35)] transition-[box-shadow,filter] duration-300 hover:shadow-[0_0_40px_rgba(255,90,44,0.55)] hover:brightness-110"
            >
              Book a Launch
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-5 py-2.5 text-sm font-medium text-chalk transition-colors hover:border-chalk-2 hover:text-chalk"
            >
              Explore the catalog
            </Link>
          </div>
        </div>

        {/* Sitemap */}
        <nav aria-label="Footer" className="mt-14 grid grid-cols-2 gap-10 border-t border-edge pt-12 sm:grid-cols-4">
          <div>
            <p className="qa-data text-xs uppercase tracking-[0.14em] text-chalk-3">Aerospace</p>
            <ul className="mt-4 space-y-2.5">
              {featured.map(
                (p) =>
                  p && (
                    <li key={p.slug}>
                      <Link href={`/work/${p.slug}`} className="text-sm text-chalk-2 transition-colors hover:text-amber">
                        {p.name}
                      </Link>
                    </li>
                  ),
              )}
              <li>
                <Link href="/work" className="text-sm font-medium text-chalk transition-colors hover:text-amber">
                  All projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="qa-data text-xs uppercase tracking-[0.14em] text-chalk-3">Programs</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/programs#dbf" className="text-sm text-chalk-2 transition-colors hover:text-amber">Design, Build, Fly</Link></li>
              <li><Link href="/programs#student" className="text-sm text-chalk-2 transition-colors hover:text-amber">Student programs</Link></li>
              <li><Link href="/programs#community" className="text-sm text-chalk-2 transition-colors hover:text-amber">Community platforms</Link></li>
              <li><Link href="/technology" className="text-sm text-chalk-2 transition-colors hover:text-amber">Technology</Link></li>
            </ul>
          </div>

          <div>
            <p className="qa-data text-xs uppercase tracking-[0.14em] text-chalk-3">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/company#team" className="text-sm text-chalk-2 transition-colors hover:text-amber">Team &amp; leadership</Link></li>
              <li><Link href="/company#history" className="text-sm text-chalk-2 transition-colors hover:text-amber">History</Link></li>
              <li><Link href="/vision" className="text-sm text-chalk-2 transition-colors hover:text-amber">Vision</Link></li>
              <li><Link href="/company#values" className="text-sm text-chalk-2 transition-colors hover:text-amber">Policy &amp; values</Link></li>
              <li><Link href="/media" className="text-sm text-chalk-2 transition-colors hover:text-amber">Media</Link></li>
            </ul>
          </div>

          <div>
            <p className="qa-data text-xs uppercase tracking-[0.14em] text-chalk-3">Connect</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/contact" className="text-sm font-medium text-chalk transition-colors hover:text-amber">Contact</Link></li>
              {org.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-chalk-2 transition-colors hover:text-amber"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Ghost wordmark */}
        <p
          aria-hidden="true"
          className="qa-ghost static mt-16 select-none whitespace-nowrap text-[clamp(3.4rem,12.5vw,11rem)] leading-none"
          style={{ position: "static", WebkitTextStroke: "1.5px rgba(244,242,237,0.08)", color: "transparent" }}
        >
          DHUMKETUX
        </p>

        <div className="flex flex-col gap-2 border-t border-edge py-6 text-xs leading-relaxed text-chalk-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Concept redesign prepared for DhumketuX, not the official DhumketuX website.</p>
          <p>Figures sourced from dhumketux.com.</p>
        </div>
      </div>
    </footer>
  );
}
