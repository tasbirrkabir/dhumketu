import { Shell } from "@/components/layout/shell";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { Intro } from "@/components/sections/intro";
import { Flagship } from "@/components/sections/flagship";
import { Technology } from "@/components/sections/technology";
import { Vision } from "@/components/sections/vision";
import { People } from "@/components/sections/people";
import { FinalCta } from "@/components/sections/final-cta";

/**
 * DhumketuX — homepage. A cinematic film: full-viewport night-launch hero →
 * milestone ticker → counters → flagship image cards → technology split →
 * orbital vision band → people → conversion panel. Full depth lives on
 * /work, /technology, /programs, /vision, /company, /media, /contact.
 */
export default function Home() {
  return (
    <Shell>
      <Hero />
      <Ticker />
      <Intro />
      <Flagship />
      <Technology />
      <Vision />
      <People />
      <FinalCta />
    </Shell>
  );
}
