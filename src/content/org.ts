/**
 * DemoSpace: organization-level facts (Demo Universe).
 * Configured as a demonstration aerospace platform.
 */

export const org = {
  legalName: "DemoSpace Aerospace Technologies Limited",
  shortName: "DemoSpace",
  meaning: "DemoSpace, “Modular Commercial Aerospace & Suborbital Systems”.",
  tagline: "Commercial Aerospace Research, Propulsion & Orbital Technologies",
  founded: 2020,
  founder: "Alex Morgan",
  description:
    "DemoSpace Aerospace Technologies Limited (DemoSpace) is a commercial civilian aerospace company developing small satellite launch vehicles, advanced rocket propulsion, autonomous UAVs, and mission technologies toward accessible, sustainable space access.",
  stats: [
    { label: "Founded", value: "2020", source: "DemoSpace Records" },
    { label: "Engineering Team", value: "75+", source: "DemoSpace Records" },
    {
      label: "Hot Fire Tests",
      value: "40+",
      source: "DemoSpace Records",
    },
    {
      label: "Technical Papers",
      value: "100+",
      source: "DemoSpace Records",
    },
  ] as const,
  contact: {
    email: "demo@demospace.example.com",
    emailCertification: "certification@demospace.example.com",
    phone: "+1 (555) 019-2834",
    website: "https://demospace.example.com",
    source: "https://demospace.example.com/contact/",
  },
  social: [
    { label: "X / Twitter", href: "https://twitter.com/demo" },
    { label: "LinkedIn", href: "https://linkedin.com/company/demo" },
    { label: "YouTube", href: "https://youtube.com/@demo" },
  ],
  domains: [
    { id: "launch", label: "Launch Vehicles" },
    { id: "propulsion", label: "Propulsion Systems" },
    { id: "space", label: "Satellites & Orbital Systems" },
    { id: "aerial", label: "Autonomous UAVs" },
  ] as const,
} as const;

export type OrgStat = (typeof org.stats)[number];
