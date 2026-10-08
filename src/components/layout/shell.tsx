import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Shared page shell: fixed header, flexible main, footer that
 * sticks to the viewport bottom and is pushed down on overflow.
 */
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-paper text-ink">
      <a href="#main" className="qa-skip-link bg-night px-4 py-2 text-sm text-chalk">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <div className="night mt-auto bg-night">
        <SiteFooter />
      </div>
    </div>
  );
}
