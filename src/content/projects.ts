/**
 * Source-controlled project catalog. Figures are taken from the live site:
 *  - https://dhumketux.com/ (homepage R&D grid, launch vehicle blurbs)
 *  - https://dhumketux.com/solid-propulsion/
 *  - https://dhumketux.com/liquid-propulsion/
 *  - https://dhumketux.com/history/
 * Status labels follow CONTENT-MAP.md: concept | development | tested | operational | future-vision
 */

export type DxStatus =
  | "concept"
  | "development"
  | "tested"
  | "operational"
  | "future-vision";

export interface DxMetric {
  label: string;
  value: string;
  source: string;
}

export interface DxProject {
  slug: string;
  name: string;
  nameBn?: string;
  category: "Launch Vehicle" | "Solid Propulsion" | "Liquid Propulsion" | "Reusable Systems" | "Satellites & Space Systems" | "UAV & Aviation";
  status: DxStatus;
  statusLabel: string;
  summary: string;
  detail: string;
  metrics: DxMetric[];
  diagram: "launch-vehicle" | "engine" | "engine-cluster" | "vtvl" | "uav" | "orbit" | "capsule";
  originNote?: string;
  related: string[];
}

export const statusMeta: Record<DxStatus, { label: string; tone: "live" | "active" | "planned" }> = {
  tested: { label: "Tested", tone: "live" },
  development: { label: "In Development", tone: "active" },
  concept: { label: "Concept", tone: "planned" },
  operational: { label: "Operational", tone: "live" },
  "future-vision": { label: "Future Vision", tone: "planned" },
};

export const projects: DxProject[] = [
  {
    slug: "bidrohi-sr",
    name: "Bidrohi SR",
    category: "Launch Vehicle",
    status: "development",
    statusLabel: "In development",
    summary:
      "Bangladesh's first commercial sub-orbital space rocket, a sub-orbital vehicle concept named after Kazi Nazrul Islam's poem “Bidrohi”.",
    detail:
      "Bidrohi is developed by DhumketuX as Bangladesh's first commercial sub-orbital space rocket, designed to reach sub-orbital space and propel the nation into the global aerospace industry. Named after the iconic poem “Bidrohi” by Kazi Nazrul Islam, the rocket symbolizes the rebellious spirit, resilience, and rising ambition of Bangladesh. The vehicle is being developed around the Agni Bina solid booster.",
    metrics: [
      { label: "Class", value: "Sub-orbital", source: "https://dhumketux.com/history/" },
      { label: "Booster", value: "Agni Bina", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Booster thrust", value: "120+ kN", source: "https://dhumketux.com/solid-propulsion/" },
    ],
    diagram: "launch-vehicle",
    originNote: "Named after “Bidrohi” by Kazi Nazrul Islam",
    related: ["agni-bina", "boson", "putimach-01"],
  },
  {
    slug: "agni-bina",
    name: "Agni Bina",
    category: "Solid Propulsion",
    status: "development",
    statusLabel: "In development · ~90% work done",
    summary:
      "120+ kN solid rocket booster built for the Bidrohi rocket, a tribute to Kazi Nazrul Islam and a symbol of self-reliant aerospace power.",
    detail:
      "With a stated 120+ kN of thrust, Agni Bina is the high-power solid booster being developed for the Bidrohi rocket, intended to carry the country's first suborbital payloads to space. It is a tribute to Bangladesh's national poet Kazi Nazrul Islam. Progress on the engine is reported as approximately 90% work done; static-fire status is listed as upcoming.",
    metrics: [
      { label: "Thrust", value: "120+ kN", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Propellant", value: "Solid", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Mission", value: "Space · suborbital", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Vehicle", value: "Bidrohi", source: "https://dhumketux.com/solid-propulsion/" },
    ],
    diagram: "engine",
    related: ["bidrohi-sr", "proloy", "red-chili"],
  },
  {
    slug: "boson",
    name: "Boson",
    category: "Liquid Propulsion",
    status: "development",
    statusLabel: "In development · work reported 100%",
    summary:
      "Next-generation liquid rocket engine for autonomous rocket landing systems, LOX + Kerosene, built for the reusable Revolation V1 vehicle.",
    detail:
      "The Boson Engine is DhumketuX's next-generation liquid rocket engine, purpose-built for autonomous rocket landing systems and manned spaceflight missions. Drawing inspiration from physicist Satyendra Nath Bose, the high-efficiency engine is being designed around reusability, control, and sustainability, with a stated 1.5+ kN thrust class, LOX + Kerosene propellants, and bipropellant/tripropellant configuration. Target integration platform: the Revolation V1 reusable rocket.",
    metrics: [
      { label: "Thrust", value: "1.5+ kN", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Propellant", value: "LOX + Kerosene", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "System", value: "Bipropellant / Tripropellant", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Role", value: "Autonomous VTVL landing", source: "https://dhumketux.com/liquid-propulsion/" },
    ],
    diagram: "vtvl",
    originNote: "Named after Satyendra Nath Bose",
    related: ["revolation-v1", "ibn-khaldun"],
  },
  {
    slug: "ibn-khaldun",
    name: "Ibn Khaldun",
    category: "Liquid Propulsion",
    status: "concept",
    statusLabel: "Early concept · ~15% work done",
    summary:
      "35 kN-class liquid engine designed to power Small Satellite Launch Vehicles and scale to cluster configurations, the core engine for the Nazrul series.",
    detail:
      "Named after the great scholar Ibn Khaldun, this 35 kN class engine is designed to power Small Satellite Launch Vehicles (SSLVs) and scale up to cluster engine configurations. With high-thrust performance and reliability targets, it supports both commercial and scientific space missions, from microsat and CubeSat deployment to future high-capacity launch systems. Early-stage project with approximately 15% of work done.",
    metrics: [
      { label: "Thrust", value: "35 kN", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Propellant", value: "LOX + Kerosene", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Role", value: "SSLV / cluster engine", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Vehicle", value: "Nazrul 01/02", source: "https://dhumketux.com/liquid-propulsion/" },
    ],
    diagram: "engine-cluster",
    originNote: "Named after the scholar Ibn Khaldun",
    related: ["nazrul-01", "boson"],
  },
  {
    slug: "ekushey-21",
    name: "Ekushey 21",
    category: "Launch Vehicle",
    status: "development",
    statusLabel: "In development",
    summary:
      "Rocket designed to gather critical atmospheric data, a tribute to the Bangla Language Movement of 1952.",
    detail:
      "The Ekushey rocket is a project by DhumketuX blending technological innovation with cultural significance. Designed to gather critical atmospheric data, the vehicle stands as a tribute to the Bangla Language Movement of 1952. It is being developed around the Proloy solid booster.",
    metrics: [
      { label: "Mission", value: "Atmospheric data", source: "https://dhumketux.com/" },
      { label: "Booster", value: "Proloy", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Booster thrust", value: "15+ kN", source: "https://dhumketux.com/solid-propulsion/" },
    ],
    diagram: "launch-vehicle",
    originNote: "Tribute to the Bangla Language Movement, 1952",
    related: ["proloy", "putimach-01"],
  },
  {
    slug: "proloy",
    name: "Proloy",
    category: "Solid Propulsion",
    status: "tested",
    statusLabel: "Static-tested · 2023",
    summary:
      "High-performance solid rocket booster engineered for Mesosphere missions, 15+ kN of thrust for the Ekushey rocket.",
    detail:
      "Developed in 2023, Proloy 01 is a high-performance solid rocket booster engineered for Mesosphere missions. With over 15+ kN of thrust, it is capable of reaching the Mesosphere (25-50 km altitude), collecting vital atmospheric data for weather forecasting, ionospheric studies, and plasma science research.",
    metrics: [
      { label: "Thrust", value: "15+ kN", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Propellant", value: "Solid", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Mission", value: "Mesosphere · 25-50 km", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Vehicle", value: "Ekushey", source: "https://dhumketux.com/solid-propulsion/" },
    ],
    diagram: "engine",
    originNote: "“Proloy”, Bengali for thunderbolt",
    related: ["ekushey-21", "agni-bina", "red-chili"],
  },
  {
    slug: "red-chili",
    name: "Red Chili Series",
    category: "Solid Propulsion",
    status: "tested",
    statusLabel: "Tested 2021-23 · 35+ firings",
    summary:
      "Bangladesh's first rocket engines, the Red Chili series proved indigenous solid propulsion with 35+ static tests.",
    detail:
      "Red Chili 01, tested in 2021, became Bangladesh's first-ever rocket engine, an innovative solid-propellant motor designed for low-altitude science missions. Following its success, Red Chili 02 was developed with increased 5 kN thrust for stratospheric and educational payload launches. The series is documented as the first rocket engine developed and statically tested in Bangladesh.",
    metrics: [
      { label: "Thrust", value: "1.5 → 5 kN", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Static tests", value: "35+ times", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Mission", value: "Atmospheric research", source: "https://dhumketux.com/solid-propulsion/" },
      { label: "Vehicles", value: "DX 01-04 · Bayanno", source: "https://dhumketux.com/solid-propulsion/" },
    ],
    diagram: "engine",
    related: ["proloy", "putimach-01"],
  },
  {
    slug: "putimach-01",
    name: "Putimach 01",
    nameBn: "পুটিমাছ ০১",
    category: "Launch Vehicle",
    status: "tested",
    statusLabel: "Flown · 7 Feb 2023",
    summary:
      "The first rocket launch in Bangladesh history, flown by the DhumketuX Junior Team from the Brahmaputra char, Mymensingh.",
    detail:
      "On 7 February 2023, the DhumketuX Junior Team launched Putimach 01 (পুটিমাছ ০১) from the Brahmaputra char in Mymensingh, reaching roughly 1 km altitude at a 75° launch angle, widely remembered as the first recorded rocket launch in Bangladesh.",
    metrics: [
      { label: "Apogee", value: "~1 km", source: "https://dhumketux.com/history/" },
      { label: "Launch angle", value: "75°", source: "https://dhumketux.com/history/" },
      { label: "Date", value: "7 Feb 2023", source: "https://dhumketux.com/history/" },
      { label: "Site", value: "Brahmaputra char, Mymensingh", source: "https://dhumketux.com/history/" },
    ],
    diagram: "launch-vehicle",
    originNote: "Flown by the DhumketuX Junior Team",
    related: ["red-chili", "ekushey-21"],
  },
  {
    slug: "revolation-v1",
    name: "Revolation V1",
    category: "Reusable Systems",
    status: "concept",
    statusLabel: "Concept · reusable platform",
    summary:
      "Reusable rocket platform for vertical takeoff and vertical landing (VTVL), powered by the Boson liquid engine.",
    detail:
      "Revolation V1 is DhumketuX's reusable rocket platform, designed around vertical takeoff and vertical landing with the Boson liquid engine, supporting autonomous landing systems, suborbital demonstrators and reentry-capable payload missions.",
    metrics: [
      { label: "Engine", value: "Boson", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Mode", value: "VTVL · reusable", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Target missions", value: "Suborbital · reentry demos", source: "https://dhumketux.com/liquid-propulsion/" },
    ],
    diagram: "vtvl",
    related: ["boson", "space-billboard"],
  },
  {
    slug: "nazrul-01",
    name: "Nazrul 01",
    category: "Launch Vehicle",
    status: "concept",
    statusLabel: "Concept · SSLV",
    summary:
      "Small Satellite Launch Vehicle, pioneering Bangladesh's space future with innovative small-satellite launch technology.",
    detail:
      "Nazrul 01 is DhumketuX's Small Satellite Launch Vehicle (SSLV) concept, planned around the Ibn Khaldun liquid engine to provide dedicated launch capability for microsats and CubeSats, extending toward cluster-engine configurations for larger missions.",
    metrics: [
      { label: "Class", value: "SSLV", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Core engine", value: "Ibn Khaldun", source: "https://dhumketux.com/liquid-propulsion/" },
      { label: "Payload target", value: "Microsats · CubeSats", source: "https://dhumketux.com/liquid-propulsion/" },
    ],
    diagram: "launch-vehicle",
    originNote: "Named after Kazi Nazrul Islam",
    related: ["ibn-khaldun", "bidrohi-sr"],
  },
  {
    slug: "space-billboard",
    name: "Space Billboard",
    category: "Satellites & Space Systems",
    status: "future-vision",
    statusLabel: "Future vision",
    summary:
      "A formation of small satellites acting as “pixels” in orbit, creating temporary, responsibly-managed patterns and messages in the sky.",
    detail:
      "The Space Billboard Project is DhumketuX's flagship long-term initiative: a formation of small satellites acting as “pixels” in orbit, creating temporary patterns and messages in the sky. The goal is a responsible space-billboard platform for global and Asian brands, with strict control over visibility, brightness and orbital safety, including high-precision formation flying, scheduled visibility windows, and compliance with international space guidelines.",
    metrics: [
      { label: "Approach", value: "Formation flying", source: "https://dhumketux.com/vision/" },
      { label: "Visibility", value: "Scheduled windows", source: "https://dhumketux.com/vision/" },
      { label: "Commitment", value: "Controlled brightness", source: "https://dhumketux.com/vision/" },
    ],
    diagram: "orbit",
    related: ["revolation-v1"],
  },
  {
    slug: "uav-fleet",
    name: "UAV Fleet",
    category: "UAV & Aviation",
    status: "development",
    statusLabel: "In development · multi-platform",
    summary:
      "Fixed-wing and multirotor platforms for real missions, Choroi DX (delivery), Bee 0.1 (swarm), Krishian TX (agriculture) and FireFly TX (firefighting).",
    detail:
      "DhumketuX designs and integrates fixed-wing and multirotor UAV platforms for real-world missions: Choroi DX for delivery, Bee 0.1 for swarm operations, Krishian TX for agriculture, and FireFly TX for firefighting. Platforms integrate propulsion, avionics and mission-specific payloads with autopilot, waypoint navigation and telemetry.",
    metrics: [
      { label: "Choroi DX", value: "Delivery", source: "https://dhumketux.com/" },
      { label: "Bee 0.1", value: "Swarm", source: "https://dhumketux.com/" },
      { label: "Krishian TX", value: "Agriculture", source: "https://dhumketux.com/" },
      { label: "FireFly TX", value: "Firefighting", source: "https://dhumketux.com/" },
    ],
    diagram: "uav",
    related: ["bluebird-skyblade"],
  },
  {
    slug: "bluebird-skyblade",
    name: "Bluebird & SkyBlade",
    category: "UAV & Aviation",
    status: "concept",
    statusLabel: "Aircraft & VTOL program",
    summary:
      "Aircraft and VTOL development, Bluebird Ultralight, SkyBlade X1 and SkyBlade Xero prototype.",
    detail:
      "DhumketuX's aviation program spans the Bluebird Ultralight aircraft, the SkyBlade X1 VTOL drone and the SkyBlade Xero prototype, exploring electric fixed-wing and VTOL configurations for regional mobility and mission applications.",
    metrics: [
      { label: "Bluebird", value: "Ultralight aircraft", source: "https://dhumketux.com/" },
      { label: "SkyBlade X1", value: "VTOL drone", source: "https://dhumketux.com/" },
      { label: "SkyBlade Xero", value: "Prototype", source: "https://dhumketux.com/" },
    ],
    diagram: "uav",
    related: ["uav-fleet"],
  },
  {
    slug: "satellite-systems",
    name: "Satellite Systems",
    category: "Satellites & Space Systems",
    status: "development",
    statusLabel: "Development · ground-up",
    summary:
      "From CANSAT to CubeSat and MicroSat, foundational satellite capabilities built through student missions and ground-segment work.",
    detail:
      "DhumketuX is building foundational capabilities for future satellite programs: CANSAT and CubeSat-class education missions, MicroSat concepts, weather balloon flights, ground-segment architectures, mission modelling and data systems. Weather-balloon missions already support high-altitude atmospheric work.",
    metrics: [
      { label: "Education", value: "CANSAT", source: "https://dhumketux.com/" },
      { label: "Small sats", value: "CubeSat · MicroSat", source: "https://dhumketux.com/" },
      { label: "High-altitude", value: "Weather balloon", source: "https://dhumketux.com/" },
    ],
    diagram: "orbit",
    related: ["space-billboard"],
  },
  {
    slug: "human-spaceflight",
    name: "Human Spaceflight",
    category: "Launch Vehicle",
    status: "future-vision",
    statusLabel: "Future vision",
    summary:
      "Human capsule and space tourism concept: the team's stated long-term goal is human spaceflight within 2040.",
    detail:
      "DhumketuX's stated long-term roadmap targets suborbital flight within 2035 and sending humans to space within 2040. The human capsule concept represents the first stage of this ambition, a crewed spacecraft study within the organization's future systems portfolio. These are goals, not current capabilities.",
    metrics: [
      { label: "Roadmap", value: "Suborbital by 2035", source: "https://dhumketux.com/" },
      { label: "Roadmap", value: "Human spaceflight by 2040", source: "https://dhumketux.com/" },
      { label: "Study", value: "Human capsule", source: "https://dhumketux.com/" },
    ],
    diagram: "capsule",
    related: ["bidrohi-sr", "revolation-v1"],
  },
];

export function getProject(slug: string): DxProject | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Featured flagship set for the homepage (PRD §6 Section 03) */
export const featuredSlugs = ["bidrohi-sr", "agni-bina", "boson", "ibn-khaldun"] as const;
