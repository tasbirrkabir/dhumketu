/**
 * Milestone timeline — source: https://dhumketux.com/history/ §9 Timeline of Milestones.
 * Years/events only from that source. Bangla used sparingly for cultural moments
 * per CONTENT-MAP.md §5.
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
    year: "Before 2018",
    title: "Foundations",
    body: "Student-led projects, small labs, DIY rockets and RC platforms laid the cultural foundation — hands-on, curious, documentation-focused. The core culture was born here: build → test → document → improve.",
    tag: "foundation",
    source: "https://dhumketux.com/history/",
  },
  {
    id: "m-1",
    year: "2018",
    title: "DhumketuX is founded",
    body: "Dhumketu Exploration Technologies Ltd. is founded as Bangladesh's first private aerospace company, unifying rocketry, UAV and satellite-related work under one platform.",
    tag: "first",
    source: "https://dhumketux.com/history/",
  },
  {
    id: "m-2",
    year: "2021–2022",
    title: "First engine test in Bangladesh",
    body: "The Red Chili 01 solid rocket motor becomes the first documented rocket engine to be developed and statically tested in Bangladesh, with multiple firings validating local propulsion capability.",
    tag: "first",
    source: "https://dhumketux.com/history/",
  },
  {
    id: "m-3",
    year: "2022",
    title: "National rocketry challenge winner",
    body: "DhumketuX wins Bangladesh's 1st Rocketry Challenge under the A2i Innovation 2022 competition — a historic national recognition for the team.",
    tag: "award",
    source: "https://dhumketux.com/history/",
  },
  {
    id: "m-4",
    year: "7 Feb 2023",
    title: "Putimach 01 — first rocket launch in Bangladesh history",
    body: "The DhumketuX Junior Team launches Putimach 01 (পুটিমাছ ০১) from the Brahmaputra char, Mymensingh — reaching roughly 1 km altitude at a 75° launch angle. Widely remembered as the first recorded rocket launch in Bangladesh.",
    tag: "flight",
    source: "https://dhumketux.com/history/",
  },
  {
    id: "m-5",
    year: "2023–2024",
    title: "Ecosystem building & Bidrohi",
    body: "Expansion of labs, test infrastructure, internships and experience-certification systems. The Bidrohi sub-orbital rocket concept is unveiled as Bangladesh's first commercial sub-orbital rocket initiative.",
    tag: "expansion",
    source: "https://dhumketux.com/history/",
  },
  {
    id: "m-6",
    year: "2025 & beyond",
    title: "On the global stage",
    body: "DhumketuX represents Bangladesh at IISS Singapore 2025 — a key milestone in international visibility — while developing new sounding rockets, advanced UAVs and satellite-related ground/data systems.",
    tag: "global",
    source: "https://dhumketux.com/history/",
  },
] as const;
