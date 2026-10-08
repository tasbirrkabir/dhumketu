/**
 * Team — source: https://dhumketux.com/our-team/
 * Only published roles/bios are used. Claims preserved as published.
 */

export interface DxPerson {
  name: string;
  role: string;
  bio: string;
  category: "leadership" | "advisor";
}

export const leadership: DxPerson[] = [
  {
    name: "Nahiyan Al Rahman",
    role: "Founder & CEO · Propulsion & System Architect",
    bio: "A pioneering figure in indigenous aerospace technology, with degrees in electrical & electronics engineering and space systems engineering from Aviation and Aerospace University, Bangladesh (AAUB). Has advanced rocket technology and uncrewed systems through his lab, Alpha Science Lab. His resilience and vision — praised by Homer Hickam — have earned international recognition and notable awards.",
    category: "leadership",
  },
] as const;

export const advisors: DxPerson[] = [
  {
    name: "Prof. Saidur Rahman",
    role: "Academic Advisor",
    bio: "A world top-1% scientist — Distinguished Research Professor and Head of RCNMET at Sunway University. 500+ publications, 70,000 citations, h-index 134, and a Highly Cited Researcher (2014–2021). Formerly at KFUPM and University of Malaya; leads breakthroughs in nanomaterials, energy technology and solar-thermal innovation.",
    category: "advisor",
  },
  {
    name: "Asad Kagozi",
    role: "Business Advisor",
    bio: "Strategic innovation leader with 20+ years in R&D, automotive and aerospace. Head of Costing Data & Tools at Airbus and Lecturer at Hamburg University of Technology; has led global teams and major transformations. Degrees in aerospace, production engineering and business.",
    category: "advisor",
  },
  {
    name: "Dr. Saiaf Bin Rayhan",
    role: "Structural System Advisor",
    bio: "Aerospace engineer with over 11 years of experience and a Ph.D. in Aerospace Engineering. Assistant Professor at Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University, specializing in impact dynamics, composite structures, and fluid-structure interaction. A global scholar with degrees from Russia and China, and an ANSYS expert.",
    category: "advisor",
  },
] as const;

/** Team composition — source: https://dhumketux.com/our-team/ */
export const teamFacts = {
  size: "50+",
  universities: "20+ top universities in Bangladesh — including BUET, KUET, RUET, CUET",
  international:
    "30% of members are graduates and researchers from internationally renowned universities across the USA, Europe, Russia, China and Japan — united by their Bangladeshi roots",
  movement: "One Sky, One Dream — a national space movement",
} as const;

/** Programs & community platforms — source: https://dhumketux.com/ homepage + /design-build-fly-program/ */
export const programs = {
  dbf: {
    name: "“Design, Build, Fly”",
    partners: ["DhumketuX", "BAXRC", "Rocketry Bangladesh"],
    tracks: [
      {
        id: "rocket",
        title: "Rocket Track",
        body: "Design experimental rocket structures and payload bays. Build flight-worthy hardware. Fly on DhumketuX-provided launch vehicles under professional range safety. DhumketuX handles propellants & launch.",
      },
      {
        id: "uav",
        title: "UAV Track",
        body: "Design, build and fly electric fixed-wing or VTOL drones within mission constraints for payload, speed, endurance and landing accuracy. Mission profiles are announced yearly.",
      },
      {
        id: "cansat",
        title: "CanSat & Mini-Satellite Track",
        body: "Build CanSat or mini-satellite payloads for rocket, drone or balloon deployment. Learn mission design, sensing, telemetry and data analysis — the ideal entry point to the Student Satellite Program.",
      },
    ],
    journey: [
      { step: "01", title: "Call for Proposals", body: "Universities form cross-disciplinary teams, choose a track and submit a concept note with a faculty advisor." },
      { step: "02", title: "Preliminary Design Review", body: "Teams submit a design report covering mission requirements, sizing, simulations and safety strategy." },
      { step: "03", title: "Build & Ground Tests", body: "Teams fabricate hardware, complete static, taxi or drop tests and clear safety checklists before flight." },
      { step: "04", title: "National Fly-Off", body: "Teams execute mission flights under official timing and scoring, supervised by DhumketuX range officers." },
      { step: "05", title: "Reporting & Awards", body: "Teams submit final reports and data. Awards recognize design excellence, innovation, safety and teamwork." },
    ],
    safety: [
      "Education-only, non-weaponized — all flights are for learning and research under strict safety and ethics policies.",
      "No aerospace chemicals or propellants are handed over — all energetic operations are managed directly by DhumketuX.",
      "Teams sign NDAs; core system IP remains with Dhumketu Exploration Technologies Ltd.",
    ],
  },
  communityPlatforms: [
    "DhumketuX Community",
    "Rocketry Community Bangladesh",
    "Campus TechTalks",
    "FPGA & VLSI Community Bangladesh",
    "Advance Robotics “ROS & ROS2” Community Bangladesh",
    "VTOL Drone Community Bangladesh",
    "Bangladesh Aerospace & Aviation Association (BAAA)",
    "Bangladesh Aerospace Exploration & Research Center (BAXRC)",
  ],
  studentPrograms: [
    { title: "Student Virtual Lab", note: "Open lab access for student experiments" },
    { title: "DhumketuX Internship Program", note: "Project-based internships & trainee engineer tracks" },
    { title: "Campus–Industry Collaboration", note: "Co-created labs and innovation cells with universities" },
    { title: "Student Rocket Program", note: "Hands-on rocketry for student teams" },
    { title: "Student Satellite Program", note: "CANSAT-to-CubeSat pathway" },
    { title: "Student Startup Business", note: "Supporting student-led ventures" },
  ],
} as const;
