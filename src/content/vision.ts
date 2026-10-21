/**
 * Vision: Demo Universe Strategic Pillars & Roadmap.
 */

export interface VisionPillar {
  id: string;
  index: string;
  title: string;
  body: string;
  points: string[];
}

export const visionIntro =
  "Our long-term vision is clear: build responsive orbital infrastructure, Earth observation constellations and space-based data networks that connect communities, scientists and global enterprises through responsible, sustainable space technology.";

export const visionPillars: VisionPillar[] = [
  {
    id: "orbital-media",
    index: "P-01",
    title: "Orbital Formation & Research Beacons",
    body: "Coordinated formations of micro-satellites acting as synchronised nodes in low Earth orbit, demonstrating high-precision optical tracking, relative positioning, and safe orbital slot coordination.",
    points: [
      "High-precision formation flying",
      "Scheduled visibility & telemetry windows",
      "Compliance with international space guidelines",
    ],
  },
  {
    id: "earth-observation",
    index: "P-02",
    title: "Earth Observation Constellations",
    body: "Small satellite constellations providing frequent revisits across coastal corridors, agricultural zones, and critical infrastructure, delivering multispectral imaging and real-time analytics-as-a-service.",
    points: [
      "Crop & food-system monitoring",
      "Coastal & hydrological change detection",
      "Smart infrastructure & environmental metrics",
    ],
  },
  {
    id: "space-internet",
    index: "P-03",
    title: "Space-Based Data Relays",
    body: "Regional LEO data relay nodes extending low-latency telemetry and backup communications to remote research stations, maritime vessels, and disaster-relief operations.",
    points: [
      "Backup connectivity during outages",
      "Telemetry links for field sensor networks",
      "Hybrid routing with terrestrial and mesh networks",
    ],
  },
] as const;

export const visionBangladesh = {
  title: "Commercial Space Engineering Roots",
  body: "While the mission scope is global, the core propulsion development and vehicle integration are driven by our dedicated aerospace engineering division, creating high-skilled technical opportunities in propulsion physics, avionics firmware, composites, and simulation modeling.",
  points: [
    "High-cadence environmental and meteorological monitoring via EO payloads",
    "Resilient satellite telemetry links for remote and coastal communities",
    "Open educational pipelines in aerodynamics, propulsion and spacecraft design",
  ],
  bn: "ভবিষ্যত মহাকাশ প্রযুক্তির জন্য আমাদের রূপকল্প: সাশ্রয়ী সাব-অরবিটাল ও অরবিটাল সিস্টেমের মাধ্যমে আধুনিক ডেটা নেটওয়ার্ক ও বিজ্ঞানভিত্তিক গবেষণার সম্প্রসারণ।",
} as const;

export const responsibleSpace = {
  title: "Responsible Space Stewardship",
  points: [
    {
      title: "Preserving Astronomical Observations",
      body: "Orbital payloads designed with low-albedo coatings, controlled optical reflection, and predictable orbital windows.",
    },
    {
      title: "Debris Mitigation Standards",
      body: "Full adherence to orbital debris reduction guidelines with verified passivated depletion and de-orbit hardware.",
    },
    {
      title: "Open Scientific Collaboration",
      body: "Democratizing telemetry access for university research departments and public educational institutions.",
    },
  ],
} as const;

export const spaceCenter = {
  title: "Commercial Aerospace Innovation Center",
  body: "Spearheaded by DemoSpace leadership, the Aerospace Innovation Center is envisioned as a regional hub for civilian aerospace research, education and propulsion testing, uniting academic institutions and engineers to advance low-cost orbital access.",
  sectors: [
    "Student & General Sector: inspiring future scientists with hands-on rocketry, avionics and telemetry labs",
    "Academic & Research Sector: bringing together universities and aerospace engineers to advance propulsion and airframe materials",
  ],
} as const;

export const roadmapGoals = {
  suborbital: "Suborbital · within 2030",
  human: "Commercial orbital payload delivery · within 2035",
  source: "DemoSpace Technical Roadmap",
} as const;

/** Collaboration routes */
export const engageRoutes = [
  {
    id: "partner",
    index: "E-01",
    title: "Partner",
    body: "Universities, industry, and international research organizations: joint R&D, labs, static test stands and mission telemetry software.",
    cta: "Propose a collaboration",
    href: "mailto:demo@demospace.example.com?subject=Collaboration%20Proposal",
  },
  {
    id: "sponsor",
    index: "E-02",
    title: "Sponsor / Invest",
    body: "Support suborbital sounding rocket campaigns or atmospheric research payloads with prominent mission branding and research recognition.",
    cta: "Become a sponsor",
    href: "mailto:demo@demospace.example.com?subject=Sponsorship",
  },
  {
    id: "university",
    index: "E-03",
    title: "University",
    body: "Institutional MoUs, Design-Build-Fly competitions, student virtual labs and faculty joint research for departments expanding aerospace curriculums.",
    cta: "Start a program",
    href: "mailto:demo@demospace.example.com?subject=University%20Program",
  },
  {
    id: "student",
    index: "E-04",
    title: "Student",
    body: "Engineering internships, hardware trainee tracks, and hands-on contributions across propulsion, structures, avionics, and telemetry.",
    cta: "Join a program",
    href: "mailto:demo@demospace.example.com?subject=Student%20Program",
  },
  {
    id: "talent",
    index: "E-05",
    title: "Talent",
    body: "Aerospace engineers, firmware developers, structures specialists and systems architects passionate about next-generation flight.",
    cta: "Explore careers",
    href: "mailto:demo@demospace.example.com?subject=Careers",
  },
] as const;

export const collaborationPrinciples = [
  {
    title: "Real hardware, real labs",
    body: "Rocketry test stands, UAV airframes, satellite telemetry boards and flight simulation tools designed and tested iteratively.",
  },
  {
    title: "Rigorous engineering mindset",
    body: "Built to stringent aerospace standards with verifiable engineering documentation and flight-readiness reviews.",
  },
  {
    title: "NDA & professionalism",
    body: "Complete intellectual property safeguarding, ethical testing protocols, and trusted institutional agreements.",
  },
  {
    title: "Long-term ecosystem vision",
    body: "Dedicated to creating durable, sustainable aerospace infrastructure rather than transient demonstrations.",
  },
] as const;
