/**
 * Milestone timeline: Demo aerospace historical progression.
 */

export interface Milestone {
  id: string;
  year: string;
  title: string;
  body: string;
  tag: "foundation" | "first" | "award" | "flight" | "global" | "expansion";
  source: string;
}

export const milestones: Milestone[] = [
  {
    id: "m-0",
    year: "Before 2020",
    title: "Foundations & Experimental R&D",
    body: "Student-led prototypes, research benches, DIY rocket airframes and RC telemetry rigs laid the core engineering discipline: design → test → document → iterate.",
    tag: "foundation",
    source: "DemoSpace Archives",
  },
  {
    id: "m-1",
    year: "2020",
    title: "DemoSpace is founded",
    body: "DemoSpace Aerospace Technologies Ltd. is founded as a civilian commercial aerospace enterprise, unifying rocketry, UAV systems and orbital payload research under one platform.",
    tag: "first",
    source: "DemoSpace Archives",
  },
  {
    id: "m-2",
    year: "2021-2022",
    title: "First Static Motor Test Series",
    body: "The Demo-Solid 01 rocket motor becomes the first documented motor developed and statically fired on the company test stand, recording full pressure and thrust curves.",
    tag: "first",
    source: "DemoSpace Archives",
  },
  {
    id: "m-3",
    year: "2022",
    title: "National Aerospace Innovation Winner",
    body: "DemoSpace wins 1st Prize in the National Aerospace Innovation Challenge for novel motor casting techniques and launch rail stability mechanisms.",
    tag: "award",
    source: "DemoSpace Archives",
  },
  {
    id: "m-4",
    year: "2023",
    title: "Demo Sounding Rocket 01: First High-Altitude Flight",
    body: "The flight engineering team successfully launches Demo-01 sounding rocket to an apogee of 1 km at a 75° launch angle, validating parachute recovery and avionics logging.",
    tag: "flight",
    source: "DemoSpace Archives",
  },
  {
    id: "m-5",
    year: "2024",
    title: "Suborbital Staging Architecture & Lab Expansion",
    body: "Expansion of static test cells, wind-tunnel simulations, student internship programs, and unveiling of the modular suborbital rocket vehicle design.",
    tag: "expansion",
    source: "DemoSpace Archives",
  },
  {
    id: "m-6",
    year: "2025 & beyond",
    title: "Orbital Horizons & Global Partnerships",
    body: "DemoSpace showcases micro-satellite launch vehicle (SSLV) concepts and high-endurance autonomous UAV platforms at international aerospace congresses.",
    tag: "global",
    source: "DemoSpace Archives",
  },
] as const;
