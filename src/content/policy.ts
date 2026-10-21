/**
 * Policy & core values + social responsibilities (Demo Universe).
 */

export interface CoreValue {
  id: string;
  title: string;
  body: string;
}

export const policyIntro =
  "Engineering with integrity, safety and responsibility. DemoSpace is building long-term capability in suborbital rocketry, autonomous UAVs, satellite systems, avionics and mission software, guided by policies prioritizing rigorous safety, open documentation, and ethical innovation.";

export const coreValues: CoreValue[] = [
  {
    id: "integrity",
    title: "Integrity & Transparency",
    body: "Honest communication, verified claims and traceable engineering decisions. We avoid exaggeration and let verified telemetry, documentation and test results speak for themselves.",
  },
  {
    id: "safety",
    title: "Safety First",
    body: "No test, schedule or milestone is more important than personnel safety. Every team member has the absolute authority to halt a test if an unsafe condition appears.",
  },
  {
    id: "excellence",
    title: "Engineering Excellence & Discipline",
    body: "Systems designed to function reliably in physical environments: robust mathematical fundamentals, iterative testing, and a documentation-first culture.",
  },
  {
    id: "learning",
    title: "Curiosity & Scientific Humility",
    body: "We learn continuously from bench tests, anomalies, and successful missions. Open technical inquiry is welcomed and constructive critique is embraced across all disciplines.",
  },
  {
    id: "national",
    title: "Capacity Building & Ecosystem Support",
    body: "DemoSpace is dedicated to growing technical talent: cultivating aerospace skills, modern tooling, and practical know-how through open labs and structured programs.",
  },
  {
    id: "respect",
    title: "Collaboration & Open Culture",
    body: "Multidisciplinary collaboration across propulsion, structures, avionics, and software with mutual respect and a shared drive to build world-class aerospace systems.",
  },
  {
    id: "sustainability",
    title: "Environmental Responsibility",
    body: "Long-term design considerations to minimize unnecessary waste, employ cleaner propellant chemistries, and engineer modular systems that can be safely recovered and reused.",
  },
] as const;

export const ethicsCompliance = [
  {
    title: "Legal & Regulatory Compliance",
    body: "Adherence to all national civil aviation, spectrum licensing, and range safety regulations, coordinating transparently with oversight bodies.",
  },
  {
    title: "Confidentiality & Intellectual Property",
    body: "Strict data confidentiality and IP safeguards on proprietary propulsion and telemetry designs, with clear commercial and academic collaboration agreements.",
  },
  {
    title: "Fair Practice & Merit-Based Operations",
    body: "Zero tolerance for unethical practices or shortcuts. Transparent evaluations, merit-based talent recruitment, and equitable vendor partnerships.",
  },
] as const;

export const safetyPolicy = [
  {
    title: "Fundamental Safety Principle",
    body: "No experiment justifies taking unnecessary physical risks. Any team member can call an immediate range hold, and safety always overrides project timelines.",
  },
  {
    title: "Laboratories & Test Ranges",
    body: "Standardized operating procedures (SOPs) and pre-fire checklists for all energetic tasks, required PPE, and automated remote ignition perimeters.",
  },
  {
    title: "Incident Logging & Continuous Learning",
    body: "Rigorous root-cause anomaly investigations, telemetry reviews, and checklist revisions following every test campaign to eliminate latent failure modes.",
  },
] as const;

export const socialResponsibility = [
  {
    title: "STEM & Aerospace Education",
    body: "Free campus lectures and hands-on workshops exploring rocketry fundamentals, satellite telemetry, and autonomous drone design to inspire future aerospace leaders.",
  },
  {
    title: "Trainee Engineering & Mentorship",
    body: "Structured undergraduate trainee tracks providing hands-on experience on real aerospace modules under the direct mentorship of senior engineers.",
  },
  {
    title: "Responsible Technology Stewardship",
    body: "Strict civilian-only technology focus. Energetic chemistry and propulsion manufacturing take place exclusively in controlled, certified testing facilities.",
  },
  {
    title: "Community & Academic Outreach",
    body: "Supporting university clubs, high school science competitions, and open-source aerospace software initiatives.",
  },
] as const;
