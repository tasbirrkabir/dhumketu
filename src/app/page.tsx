import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { MissionSection } from "@/components/sections/mission";
import { ProofStrip } from "@/components/sections/proof-strip";
import { WorkSection } from "@/components/sections/flagship-work";
import { PropulsionSection } from "@/components/sections/propulsion";
import { CapabilitySection } from "@/components/sections/capability-section";
import { MilestonesSection } from "@/components/sections/milestones";
import { VisionSection } from "@/components/sections/vision";
import { TeamSection } from "@/components/sections/team";
import { ProgramsSection } from "@/components/sections/programs";
import { MediaSection } from "@/components/sections/media";
import { EngageSection } from "@/components/sections/engage";
import { FinalCta } from "@/components/sections/final-cta";

/**
 * DhumketuX — redesign concept homepage.
 * Narrative order per PRD §6 / IA.md §3:
 * Hero → Mission → Proof → Work → Capabilities → Milestones → Vision
 * → People → Programs → Media → Engage → CTA
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-0 text-ink">
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <MissionSection />
        <ProofStrip />
        <WorkSection />
        <PropulsionSection />
        <CapabilitySection />
        <MilestonesSection />
        <VisionSection />
        <TeamSection />
        <ProgramsSection />
        <MediaSection />
        <EngageSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
