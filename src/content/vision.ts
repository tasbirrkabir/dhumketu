/**
 * Vision: source: https://dhumketux.com/vision/
 * All pillars are clearly future-facing per DECISIONS.md D-003.
 */

export interface VisionPillar {
  id: string;
  index: string;
  title: string;
  body: string;
  points: string[];
}

export const visionIntro =
  "Our long-term vision is clear: build space billboard, Earth observation and space-based internet constellations from Bangladesh and Asia that serve global customers, connecting people, data and brands through responsible, sustainable space infrastructure.";

export const visionPillars: VisionPillar[] = [
  {
    id: "orbital-media",
    index: "P-01",
    title: "Space Billboard & Orbital Media",
    body: "A formation of small satellites acting as “pixels” in orbit, creating temporary patterns and messages in the sky. A responsible orbital-media platform for global and Asian brands, with strict control over visibility, brightness and orbital safety.",
    points: [
      "High-precision formation flying",
      "Scheduled visibility windows",
      "Compliance with international space guidelines",
    ],
  },
  {
    id: "earth-observation",
    index: "P-02",
    title: "Earth Observation Constellations",
    body: "Small satellite constellations providing frequent coverage over key Asian geographies, coastal regions and global economic corridors, delivering not just pictures, but analytics and insights-as-a-service.",
    points: [
      "Crop & food-system monitoring",
      "Coastal & river change detection",
      "Smart-city & infrastructure analytics",
    ],
  },
  {
    id: "space-internet",
    index: "P-03",
    title: "Space-Based Internet Service",
    body: "Regional LEO connectivity constellations extending high-speed internet to remote, coastal and disaster-prone areas, especially across Asia, while supporting maritime and aviation connectivity.",
    points: [
      "Backup connectivity during outages",
      "Links for remote schools & clinics",
      "Hybrid with fiber, 5G & community Wi-Fi",
    ],
  },
] as const;

export const visionBangladesh = {
  title: "Space vision originating from Bangladesh",
  body: "While the markets are global and Asian, the engineering and mission-design roots are firmly in Bangladesh, building real satellite hardware, software and operations from here, and creating high-skilled jobs in aerospace, electronics, software, AI and data science.",
  points: [
    "Better flood, river and cyclone monitoring via EO constellations",
    "Space-based internet as backup for char areas, coastal zones and remote communities",
    "New economic opportunities through orbital media, data services and local partnerships",
  ],
  bn: "বাংলাদেশের জন্য আমাদের স্বপ্ন: নিজের স্যাটেলাইট কনস্টেলেশন দিয়ে বন্যা-ঘূর্ণিঝড়-কৃষি-নগর পরিকল্পনার ডাটা, দূরবর্তী অঞ্চলে ইন্টারনেট আর বিশ্বব্যাপী ব্র্যান্ডিং প্ল্যাটফর্ম, সবকিছুই যেন বাংলাদেশ থেকে পরিচালিত হয়।",
} as const;

export const responsibleSpace = {
  title: "Doing space the right way",
  points: [
    {
      title: "Protecting the night sky",
      body: "Orbital media designed with controlled brightness and limited visibility windows.",
    },
    {
      title: "Minimizing orbital debris",
      body: "Following debris-mitigation standards with clear end-of-life and de-orbit strategies.",
    },
    {
      title: "Ethical data & connectivity",
      body: "Respecting privacy and regulations, supporting fair access for education and public-good projects.",
    },
  ],
} as const;

export const spaceCenter = {
  title: "Bangladesh Space Center (BSC)",
  body: "Proposed by Nahiyan Al Rahman, Founder & CEO of DhumketuX, the Bangladesh Space Center is envisioned as a national hub for aerospace research, education and innovation, with a student & general sector and an academic & research sector, positioning Bangladesh as a rising space power.",
  sectors: [
    "Student & General Sector: inspiring young minds, building a skilled generation ready for space and science",
    "Academic & Research Sector: bringing together universities, scientists and engineers to push the boundaries of aerospace technology",
  ],
} as const;

export const roadmapGoals = {
  suborbital: "Suborbital · within 2035",
  human: "Human spaceflight · within 2040",
  source: "https://dhumketux.com/ (FAQ: future vision)",
} as const;

/** Collaboration routes: source: https://dhumketux.com/collaborations/ + homepage */
export const engageRoutes = [
  {
    id: "partner",
    index: "E-01",
    title: "Partner",
    body: "Universities, industry, agencies and international partners: joint R&D, labs, test infrastructure and mission software built together.",
    cta: "Propose a collaboration",
    href: "mailto:xdhumketu@gmail.com?subject=Collaboration%20Proposal",
  },
  {
    id: "sponsor",
    index: "E-02",
    title: "Sponsor / Invest",
    body: "Sponsor the rocket mission or the Solar Sail Billboard Project, with global visibility, media coverage and recognition as a leader in space innovation.",
    cta: "Become a sponsor",
    href: "mailto:xdhumketu@gmail.com?subject=Sponsorship",
  },
  {
    id: "university",
    index: "E-03",
    title: "University",
    body: "MoUs, Design-Build-Fly teams, student virtual labs and campus-industry collaboration for departments building serious aerospace tracks.",
    cta: "Start a program",
    href: "mailto:xdhumketu@gmail.com?subject=University%20Program",
  },
  {
    id: "student",
    index: "E-04",
    title: "Student",
    body: "Internships, industrial training and trainee engineer tracks, project-based contributions with real hardware, labs and mentorship.",
    cta: "Join a program",
    href: "mailto:xdhumketu@gmail.com?subject=Student%20Program",
  },
  {
    id: "talent",
    index: "E-05",
    title: "Talent",
    body: "Engineers, scientists, designers and entrepreneurs: work on real aerospace systems from inside Bangladesh.",
    cta: "Explore careers",
    href: "mailto:xdhumketu@gmail.com?subject=Careers",
  },
] as const;

export const collaborationPrinciples = [
  {
    title: "Real hardware, real labs",
    body: "Rockets, UAVs, satellite tools, test systems and mission software developed in the same ecosystem, not slideware.",
  },
  {
    title: "Local roots, global mindset",
    body: "Focused on Bangladesh, built to global expectations, meaningful impact in South Asia with a technology-first approach.",
  },
  {
    title: "NDA & professionalism",
    body: "Confidentiality, IP boundaries and institutional reputation respected; sensitive activities stay under strict internal controls.",
  },
  {
    title: "Long-term ecosystem view",
    body: "A sustainable aerospace and space-tech ecosystem, not one-off publicity projects.",
  },
] as const;
