/**
 * DhumketuX: organization-level facts.
 * Every value is traceable to a page on https://dhumketux.com (captured 2026-02).
 * Unverifiable items are marked with a neutral fallback in the UI.
 */

export const org = {
  legalName: "Dhumketu Exploration Technologies Limited",
  shortName: "DhumketuX",
  meaning: "Dhumketu, “comet” in Bangla.",
  tagline: "An Aerospace Research & Development Company of South Asia",
  founded: 2018,
  founder: "Nahiyan Al Rahman",
  description:
    "Dhumketu Exploration Technologies Limited (DhumketuX) is a commercial civilian space company from Bangladesh. It develops small satellite launch vehicles, rocket propulsion, UAVs, satellite-related systems and mission technologies, working toward space access that is affordable, environmentally responsible and globally competitive.",
  stats: [
    { label: "Founded", value: "2018", source: "https://dhumketux.com/" },
    { label: "Team", value: "50+", source: "https://dhumketux.com/" },
    {
      label: "Successful tests",
      value: "3",
      source: "https://dhumketux.com/",
    },
    {
      label: "Journal publications",
      value: "250+",
      source: "https://dhumketux.com/",
    },
  ] as const,
  contact: {
    email: "xdhumketu@gmail.com",
    emailCertification: "certification@dhumketux.com",
    phone: "+880 1861-640549",
    website: "https://dhumketux.com",
    source: "https://dhumketux.com/contact/",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/dhumketux" },
    { label: "YouTube", href: "https://www.youtube.com/@dhumketux" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/dhumketux/" },
  ],
  domains: [
    { id: "launch", label: "Launch Vehicles" },
    { id: "propulsion", label: "Propulsion" },
    { id: "space", label: "Satellites & Space Systems" },
    { id: "aerial", label: "UAVs & Aviation" },
  ] as const,
} as const;

export type OrgStat = (typeof org.stats)[number];
