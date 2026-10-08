/**
 * Capability system: source: https://dhumketux.com/technological-capabilities/
 * Presented as the engineering stack per PRD §6 Section 04.
 */

export interface Capability {
  id: string;
  index: string;
  title: string;
  summary: string;
  points: string[];
}

export const capabilityStack: Capability[] = [
  {
    id: "flight-systems",
    index: "01",
    title: "Rocket Systems & Testbeds",
    summary:
      "Concept-to-test development of small and medium rocket systems, with ground propulsion test infrastructure and flight-readiness workflows.",
    points: [
      "Structural layout, mass budgeting, fin & stability optimization",
      "Ground test stands with integrated load cells for thrust measurement",
      "Pre-flight checklists, flight data logging, post-flight analysis",
    ],
  },
  {
    id: "propulsion",
    index: "02",
    title: "Propulsion & Test Infrastructure",
    summary:
      "Solid and liquid propulsion development supported by dedicated static-test infrastructure, the foundation proven by the Red Chili series.",
    points: [
      "Pressure and temperature data acquisition for performance analysis",
      "Real-time test visualization and structured test campaigns",
      "All activities under strict safety, regulatory and internal frameworks",
    ],
  },
  {
    id: "uav",
    index: "03",
    title: "UAV Platforms & Autonomy",
    summary:
      "Fixed-wing and multirotor UAV systems integrating propulsion, power, autonomy and mission-focused payloads.",
    points: [
      "Autopilot integration, waypoint missions, return-to-home & failsafes",
      "EO/IR cameras, mapping payloads and experimental sensors",
      "Motor, ESC and power-distribution design with safety margins",
    ],
  },
  {
    id: "avionics",
    index: "04",
    title: "Avionics, Guidance & Embedded Systems",
    summary:
      "Flight computers, embedded firmware and sensor stacks, the nervous system of DhumketuX rockets and UAVs.",
    points: [
      "IMU, GNSS, barometer and magnetometer integration",
      "Sensor fusion, actuator control, health & fault-detection logic",
      "Hardware-in-the-loop tests and bench simulations",
    ],
  },
  {
    id: "telemetry",
    index: "05",
    title: "Telemetry & Ground Control",
    summary:
      "End-to-end RF links, ground stations and data tooling for full-stack mission awareness.",
    points: [
      "Live position, speed, altitude and health data over RF links",
      "Custom dashboards with real-time monitoring and map views",
      "Structured logging for replay, diagnostics and design iteration",
    ],
  },
  {
    id: "simulation",
    index: "06",
    title: "Simulation, Modelling & Software",
    summary:
      "Before hardware flies, simulation reduces risk and concentrates testing where it matters most.",
    points: [
      "Flight & trajectory simulation across mass, drag, thrust and control",
      "Orbit and coverage simulation for future satellite concepts",
      "Internal web tools for test visualization and configuration management",
    ],
  },
  {
    id: "materials",
    index: "07",
    title: "Materials, Structures & Manufacturing",
    summary:
      "Structures designed for performance, safety, and the realities of Bangladesh's manufacturing ecosystem.",
    points: [
      "Metals, composites and hybrid structures; load-path analysis",
      "Design-for-manufacture with local workshops and tooling",
      "High-temperature materials, ablative linings and composites",
    ],
  },
  {
    id: "testing",
    index: "08",
    title: "Test, Validation & Quality",
    summary:
      "Testing is central to the engineering culture: every test is a structured learning opportunity.",
    points: [
      "Static thrust runs, structural fit checks, sensor calibration",
      "Incremental flight-test levels with go/no-go criteria",
      "Test reports, configuration tracking and traceability",
    ],
  },
] as const;

/** Full-stack framing line used in the section intro (PRD §6 Section 04) */
export const stackChain = [
  "Flight Systems",
  "Propulsion",
  "Avionics",
  "Telemetry",
  "Autonomy",
  "Ground Systems",
  "Testing",
] as const;
