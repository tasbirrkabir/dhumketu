/**
 * Media & articles — source: https://dhumketux.com/ homepage "Articles & News"
 * and /history/. External titles preserved, not rewritten (CONTENT-MAP.md §6).
 * The team capsule & human-spaceflight items are roadmap goals from the live FAQ.
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
    date: "7 Feb 2023",
    category: "Milestone",
    title: "Bangladesh's first successful sounding rocket launch by the DhumketuX Junior Team",
    summary:
      "Putimach 01 (পুটিমাছ ০১) lifts off from the Brahmaputra char, Mymensingh — roughly 1 km altitude at a 75° launch angle, remembered as the first rocket launch in Bangladesh history.",
    source: "https://dhumketux.com/history/",
    accent: true,
  },
  {
    id: "a-2",
    date: "2022",
    category: "Recognition",
    title: "DhumketuX wins Bangladesh's first rocketry challenge — A2i Innovation Competition 2022",
    summary:
      "The team took victory in the Rocketry and Invention categories of Bangladesh's first-ever A2i Innovation Competition — a landmark for the nation's space technology landscape.",
    source: "https://dhumketux.com/",
  },
  {
    id: "a-3",
    date: "2025",
    category: "Global",
    title: "DhumketuX represents Bangladesh at the global space stage — IISS Singapore 2025",
    summary:
      "A key milestone in international visibility: DhumketuX brings Bangladesh's aerospace ambitions to the International Space & Science Summit in Singapore.",
    source: "https://dhumketux.com/history/",
    accent: true,
  },
  {
    id: "a-4",
    date: "2023",
    category: "Media",
    title: "The rocket “Dhumketu X 21” is ready for launch — Somoy TV, Mymensingh",
    summary:
      "National television coverage of the Ekushey-21 rocket ahead of launch — documenting the vehicle's readiness at the Mymensingh site.",
    source: "https://dhumketux.com/",
  },
  {
    id: "a-5",
    date: "2023",
    category: "Media",
    title: "বাংলাদেশে প্রথমবারের মত তৈরি হলো রকেট — Ekhon TV",
    summary:
      "Bangla-language national coverage: “For the first time in Bangladesh, a rocket has been built” — the Bidrohi space rocket story from Mymensingh.",
    source: "https://dhumketux.com/",
  },
  {
    id: "a-6",
    date: "2021–23",
    category: "Milestone",
    title: "Red Chili series proves indigenous propulsion with 35+ static tests",
    summary:
      "From the 1.5 kN Red Chili 01 — Bangladesh's first rocket engine — to the 5 kN Red Chili 02, the solid-propulsion program logged 35+ firings across 2021–2023.",
    source: "https://dhumketux.com/solid-propulsion/",
  },
] as const;

/** Editorial note surfaced with the media rail */
export const mediaNote = "100+ news stories documented across national media and the DhumketuX archive." as const;
