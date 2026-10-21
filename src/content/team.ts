/**
 * Team & Programs: Demo aerospace roster & student initiatives.
 */

export interface DxPerson {
  name: string;
  role: string;
  bio: string;
  category: "leadership" | "advisor";
}

export const leadership: DxPerson[] = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO · Lead Propulsion & Systems Architect",
    bio: "Pioneering aerospace engineer with a background in advanced aerospace propulsion and autonomous flight architectures. Over a decade of experience designing sounding rockets, hybrid testbeds, and flight telemetry for suborbital and orbital research missions.",
    category: "leadership",
  },
] as const;

export const advisors: DxPerson[] = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Academic & Energetics Advisor",
    bio: "Distinguished research professor with 200+ publications in advanced energetic materials, solid propulsion dynamics, and thermal protection systems. Former research fellow at leading international aerospace laboratories.",
    category: "advisor",
  },
  {
    name: "Marcus Vance",
    role: "Commercial & Business Advisor",
    bio: "Senior aerospace executive and commercialization strategist with 20+ years steering international orbital launch programs, supply chain engineering, and deep-tech venture scaling.",
    category: "advisor",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Aerospace Structures Advisor",
    bio: "Specialist in lightweight composite aerostructures, dynamic stress simulation, and high-temperature thermal barriers with leading global aerospace contractors.",
    category: "advisor",
  },
] as const;

/** Team composition */
export const teamFacts = {
  size: "75+",
  universities: "Collaborating with 25+ top technical universities and engineering institutes",
  international:
    "Multidisciplinary engineers and researchers across North America, Europe, and Asia united by the mission to deliver sustainable, modular access to space",
  movement: "Next-Gen Commercial Aerospace Initiative",
} as const;

/** Programs & community platforms */
export const programs = {
  dbf: {
    name: "“Design, Build, Fly”",
    partners: ["DemoSpace Academy", "Aerospace Innovation Lab", "Student Rocketeers Guild"],
    tracks: [
      {
        id: "rocket",
        title: "Rocket Track",
        body: "Design experimental rocket structures and payload bays. Build flight-worthy hardware. Fly on DemoSpace-provided launch vehicles under professional range safety protocols. DemoSpace handles propellants & launch operations.",
      },
      {
        id: "uav",
        title: "UAV Track",
        body: "Design, build and fly electric fixed-wing or VTOL drones within mission constraints for payload capacity, cruise speed, endurance and waypoint landing accuracy.",
      },
      {
        id: "cansat",
        title: "CanSat & Mini-Satellite Track",
        body: "Build CanSat or mini-satellite payloads for rocket, drone or balloon deployment. Learn mission design, sensor telemetry and atmospheric data analysis.",
      },
    ],
    journey: [
      { step: "01", title: "Call for Proposals", body: "Universities form cross-disciplinary teams, choose a mission track and submit a concept note with a faculty mentor." },
      { step: "02", title: "Preliminary Design Review", body: "Teams submit an engineering report covering mission requirements, sizing, aerodynamic simulations and safety strategy." },
      { step: "03", title: "Build & Ground Tests", body: "Teams fabricate hardware, complete static, structural or drop tests and clear safety checklists before flight." },
      { step: "04", title: "Flight Demonstrations", body: "Teams execute mission flights under official timing, telemetry tracking, and scoring supervised by DemoSpace range safety officers." },
      { step: "05", title: "Reporting & Awards", body: "Teams submit final flight data and analysis reports. Awards recognize design excellence, innovation, safety and teamwork." },
    ],
    safety: [
      "Education-only, non-weaponized: all flights are conducted for learning and civilian scientific research under strict safety and ethics policies.",
      "Controlled energetic materials: all energetic, pyrotechnic and propellant operations are managed directly by certified DemoSpace safety personnel.",
      "Comprehensive IP protection: participating student teams retain academic publication rights while core system IP remains protected.",
    ],
  },
  communityPlatforms: [
    "DemoSpace Community Forum",
    "Open Rocketry Guild",
    "Campus TechTalks Series",
    "Avionics & Embedded Systems Group",
    "Advanced Robotics & ROS Working Group",
    "Autonomous UAV Consortium",
    "Civilian Aerospace Association",
    "Orbital Space Research Initiative",
  ],
  studentPrograms: [
    { title: "Student Virtual Lab", note: "Simulated aerospace modeling & mission workbench" },
    { title: "DemoSpace Trainee Program", note: "Hands-on engineering internships & trainee engineer tracks" },
    { title: "Campus Innovation Labs", note: "Co-created university testing cells and rocketry teams" },
    { title: "Sounding Rocket Initiative", note: "Hands-on suborbital vehicle design for student teams" },
    { title: "Student Satellite Project", note: "CanSat-to-CubeSat pathway for atmospheric sensing" },
    { title: "New Venture Incubator", note: "Mentorship and resources for student-led aerospace ventures" },
  ],
} as const;
