import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Shared page shell: fixed glass header, flexible main, footer that
 * sticks to the viewport bottom and is pushed down on overflow.
 */
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-void text-chalk">
      <a href="#main" className="qa-skip-link bg-chalk px-4 py-2 text-sm font-medium text-[#0b0b0d]">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <div className="mt-auto">
        <SiteFooter />
      </div>
    </div>
  );
}
