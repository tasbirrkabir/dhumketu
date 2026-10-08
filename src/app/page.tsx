import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Flagship } from "@/components/sections/flagship";
import { Technology } from "@/components/sections/technology";
import { Milestones } from "@/components/sections/milestones";
import { Vision } from "@/components/sections/vision";
import { People } from "@/components/sections/people";
import { Programs } from "@/components/sections/programs";
import { Media } from "@/components/sections/media";
import { FinalCta } from "@/components/sections/final-cta";

/**
 * DhumketuX — "Quiet Aerospace" homepage (REDESIGN.md §5).
 * The page is a film: night hero → paper introduction → flagship features
 * (one project at a time) → technology → milestones → night vision →
 * people → programs → media → closing CTA + footer.
 */
export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-paper text-ink">
      <a href="#main" className="qa-skip-link bg-night px-4 py-2 text-sm text-chalk">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <Flagship />
        <Technology />
        <Milestones />
        <Vision />
        <People />
        <Programs />
        <Media />
        <FinalCta />
      </main>
      <div className="night bg-night">
        <SiteFooter />
      </div>
    </div>
  );
}
