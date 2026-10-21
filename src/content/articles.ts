/**
 * Media & articles: Demo press releases & announcements.
 */

export interface DxArticle {
  id: string;
  date: string;
  category: "Milestone" | "Media" | "Recognition" | "Global";
  title: string;
  summary: string;
  source: string;
  accent?: boolean;
}

export const articles: DxArticle[] = [
  {
    id: "a-1",
    date: "7 Feb 2024",
    category: "Milestone",
    title: "Demo Sounding Rocket 01 completes successful maiden suborbital test flight",
    summary:
      "Demo Sounding Rocket 01 lifts off from the coastal test facility, reaching an apogee of 1 km at a 75° launch angle, validating airframe stability and avionics recovery.",
    source: "DemoSpace Flight Operations",
    accent: true,
  },
  {
    id: "a-2",
    date: "2024",
    category: "Recognition",
    title: "DemoSpace awarded 1st Place in National Aerospace Innovation Challenge",
    summary:
      "The engineering division was awarded top honors in the Rocketry and Invention categories for low-cost propellant grain casting and telemetry architecture.",
    source: "Aerospace Innovation Awards",
  },
  {
    id: "a-3",
    date: "2025",
    category: "Global",
    title: "DemoSpace represents emerging commercial space at the Global Aerospace Summit",
    summary:
      "A key milestone in international visibility: DemoSpace engineers showcase low-cost suborbital launch architecture and distributed CubeSat deployment solutions.",
    source: "Global Aerospace Summit",
    accent: true,
  },
  {
    id: "a-4",
    date: "2024",
    category: "Media",
    title: "The suborbital test vehicle “Demo-Mark I” completes flight readiness review",
    summary:
      "National technology broadcast feature on the vehicle readiness, pad launch rails, and automated abort protocols ahead of flight trials.",
    source: "Aerospace Tech Review",
  },
  {
    id: "a-5",
    date: "2024",
    category: "Media",
    title: "Next-generation propulsion: inside the civilian sounding rocket test program",
    summary:
      "Documentary feature highlighting young aerospace engineers designing, testing, and flying high-thrust solid motors and autonomous sensor bays.",
    source: "National Tech Broadcast",
  },
  {
    id: "a-6",
    date: "2023-25",
    category: "Milestone",
    title: "Demo-Propulsion series validates modular solid rocket motors with 35+ static tests",
    summary:
      "Thrust bench test series proves repeatable chamber pressure, erosion-resistant convergent-divergent nozzles, and reliable electric ignition sequencing.",
    source: "DemoSpace Propulsion Bulletin",
  },
];
