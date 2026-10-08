/**
 * Policy & core values + social responsibilities — source:
 *   https://dhumketux.com/our-policy/
 *   https://dhumketux.com/social-responsibilities/
 * Claims preserved as published; emoji decorations stripped.
 */

export interface CoreValue {
  id: string;
  title: string;
  body: string;
}

export const policyIntro =
  "Engineering with integrity, safety and responsibility. DhumketuX is building long-term capability in rocketry, UAVs, satellite-related systems, avionics and mission software from Bangladesh — guided by policies that prioritize safety, ethics, responsible technology use and national capacity building.";

export const coreValues: CoreValue[] = [
  {
    id: "integrity",
    title: "Integrity & Transparency",
    body: "Honest communication, realistic claims and traceable decisions. We avoid exaggeration and let data, documentation and results speak for themselves.",
  },
  {
    id: "safety",
    title: "Safety First",
    body: "No test, schedule or publicity is more important than safety. Every team member has the right to stop a test if something looks or feels unsafe.",
  },
  {
    id: "excellence",
    title: "Engineering Excellence & Discipline",
    body: "Systems that work reliably in the real world: strong fundamentals, iterative improvement and a documentation-first mindset.",
  },
  {
    id: "learning",
    title: "Learning, Curiosity & Humility",
    body: "We learn from experiments, tests and mistakes. Questions are welcome, feedback is valued and better ideas can come from anyone on the team.",
  },
  {
    id: "national",
    title: "National Capacity Building",
    body: "DhumketuX is part of a wider ecosystem: building skills, tools and know-how inside Bangladesh through projects, labs and structured programs.",
  },
  {
    id: "respect",
    title: "Respect & Collaboration",
    body: "We work in multidisciplinary teams and treat each other with respect — no ego, no discrimination, just shared focus on building high-quality systems.",
  },
  {
    id: "sustainability",
    title: "Responsibility & Sustainability",
    body: "We think long-term about the impact of our technologies, minimizing unnecessary risk and waste while designing systems that can be maintained and upgraded.",
  },
] as const;

export const ethicsCompliance = [
  {
    title: "Legal & Regulatory Compliance",
    body: "Respect for all applicable laws and regulations of Bangladesh — working with relevant authorities and institutions where needed.",
  },
  {
    title: "NDA, Confidentiality & IP",
    body: "Many projects require signed NDAs. Internal designs, test data, code and documents are not shared externally without written approval; IP ownership is defined clearly in contracts and MoUs.",
  },
  {
    title: "Anti-Corruption & Fair Practice",
    body: "Zero tolerance for unethical shortcuts or hidden deals. Structured processes for collaborations and procurement — selection based on merit, work ethic and fit.",
  },
] as const;

export const safetyPolicy = [
  {
    title: "Safety principles",
    body: "No experiment is worth risking life or long-term health. Any team member can call a stop; safety is prioritized over timelines or publicity.",
  },
  {
    title: "Labs, workshops & test sites",
    body: "Written procedures and checklists for critical operations, mandatory PPE, and controlled access to high-risk areas during sensitive tests.",
  },
  {
    title: "Documentation & incident learning",
    body: "Logging of tests, anomalies, near-misses and incidents — root cause analysis and corrective measures, with procedures updated from lessons learned.",
  },
] as const;

export const socialResponsibility = [
  {
    title: "STEM & Aerospace Education",
    body: "Talks and campus seminars on rocketry, UAVs, satellite systems and mission control; workshops and demonstrations that turn theory into hands-on experience; learning roadmaps for independent study.",
  },
  {
    title: "Youth Development & Skill-Building",
    body: "Structured industrial training, internships and trainee engineer tracks — with real responsibilities on meaningful modules and mentorship from experienced engineers.",
  },
  {
    title: "Ethical & Responsible Innovation",
    body: "Safety, law, NDA and ethical use of technology ahead of shortcuts. DhumketuX does not sell or supply aerospace chemicals to third parties — such work is performed only under DhumketuX lead, infrastructure and conditions.",
  },
  {
    title: "Community Engagement & Inclusion",
    body: "Engaging schools, campuses and communities across Bangladesh — not only a few major institutions — to help build a culture around technology, not just a company.",
  },
] as const;
