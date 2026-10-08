import { Shell } from "@/components/layout/shell";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Flagship } from "@/components/sections/flagship";
import { Technology } from "@/components/sections/technology";
import { Vision } from "@/components/sections/vision";
import { People } from "@/components/sections/people";
import { FinalCta } from "@/components/sections/final-cta";

/**
 * DhumketuX — homepage. A curated film: night hero → paper introduction →
 * flagship features (one project at a time) → technology preview →
 * night vision → people → closing CTA. The full depth lives on
 * /work, /technology, /programs, /vision, /company, /media, /contact.
 */
export default function Home() {
  return (
    <Shell>
      <Hero />
      <Intro />
      <Flagship />
      <Technology />
      <Vision />
      <People />
      <FinalCta />
    </Shell>
  );
}
