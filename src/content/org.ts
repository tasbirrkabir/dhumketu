/**
 * Organization-level facts. Every datum is sourced from the live DhumketuX
 * website (dhumketux.com). Do not add figures without a source reference.
 * Source: https://dhumketux.com/ (homepage, stats block, FAQ, footer)
 */

export const org = {
  legalName: "Dhumketu Exploration Technologies Limited",
  shortName: "DhumketuX",
  tagline: "Creativity Starts From Belief",
  motto: "Don't limit your challenges, challenge your limit.",
  positioning: "An Aerospace Research & Development Company of South Asia",
  founded: 2018,
  founder: "Nahiyan Al Rahman (Oli)",
  description:
    "Dhumketu Exploration Technologies Limited (DhumketuX) is a commercial civilian space company. The company focuses on small satellite launch vehicles (SSLVs), space-based innovation, and sustainable aerospace technologies — working to make access to space more affordable, environmentally responsible, and globally competitive.",
  flagshipInitiative: "Space Billboard Project",
  email: "xdhumketu@gmail.com",
  phone: "+880 1861-640549",
  website: "https://dhumketux.com",
  // Launch site of Putimach 01, 7 Feb 2023 (source: /history/)
  launchSite: {
    name: "Brahmaputra char, Mymensingh",
    coords: "24.7471° N, 90.4023° E",
  },
} as const;

/** Stats block — source: https://dhumketux.com/ homepage STATS section */
export const proofStats = [
  { label: "Founded In", value: "2018", source: "https://dhumketux.com/#stats" },
  { label: "Team Size", value: "50+", source: "https://dhumketux.com/#stats" },
  { label: "Successful Tests", value: "3", source: "https://dhumketux.com/#stats" },
  {
    label: "Team Journal Publications",
    value: "250+",
    source: "https://dhumketux.com/#stats",
  },
  {
    label: "Cumulative Rocket-Industry Experience",
    value: "125+ yrs",
    source: "https://dhumketux.com/#stats",
  },
  { label: "Funding", value: "Private", source: "https://dhumketux.com/#stats" },
] as const;

/** National "firsts" — source: https://dhumketux.com/history/ §8 Key Achievements */
export const firsts = [
  {
    title: "First private aerospace company in Bangladesh",
    note: "Recognized as the country's first private company dedicated to rocketry, UAVs and satellite-related systems.",
    source: "https://dhumketux.com/history/",
  },
  {
    title: "First rocket engine developed & statically tested in Bangladesh",
    note: "Red Chili 01 solid rocket motor, with multiple documented firings validating local propulsion capability.",
    source: "https://dhumketux.com/history/",
  },
  {
    title: "First rocket launch in Bangladesh history",
    note: "7 February 2023 — Putimach 01 (পুটিমাছ ০১) launched by the DhumketuX Junior Team from the Brahmaputra char, Mymensingh, reaching roughly 1 km altitude at a 75° launch angle.",
    source: "https://dhumketux.com/history/",
  },
  {
    title: "Winner — Bangladesh's 1st rocketry challenge",
    note: "A2i Innovation Competition 2022, Rocketry & Invention categories.",
    source: "https://dhumketux.com/history/",
  },
] as const;
