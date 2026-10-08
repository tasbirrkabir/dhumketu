# AGENTS.md — DhumketuX Website Upgrade

## Role

You are the senior frontend/product engineer responsible for turning this brief into a high-end aerospace website concept.

The goal is **not** to reproduce the current website page-for-page. The goal is to create a materially better information architecture, visual hierarchy and interactive experience while preserving factual integrity.

## Non-Negotiable Rules

### 1. Never invent aerospace facts
Do not fabricate:

- launch dates
- mission outcomes
- thrust figures
- altitudes
- payload capacities
- certifications
- partnerships
- funding
- customers
- investors
- government endorsements
- regulatory approvals
- flight success claims
- team credentials

When a datum is not explicitly available in approved content, use neutral UI such as `Details coming soon`, `Project status`, or omit the field.

### 2. Treat technical claims as source-controlled content
Any number or technical specification must have a source in the content/data layer. Avoid scattering hard-coded aerospace figures through JSX/TSX.

Preferred shape:

```ts
{
  label: "Thrust",
  value: "120+ kN",
  source: "dhumketux.com/solid-propulsion"
}
```

### 3. Do not copy the current information overload
The current site has a very deep, repetitive navigation tree. Consolidate it into a smaller number of meaningful journeys.

### 4. Preserve brand identity, not old UI
Use DhumketuX as the brand and retain recognisable terminology such as project names, but rebuild the visual system from first principles.

### 5. Aerospace > generic tech
Do not make the site look like a generic SaaS landing page. The design should feel like an aerospace research organization: precise, technical, restrained, cinematic and mission-driven.

### 6. No fake UI telemetry
Do not show fake live launch telemetry, fake countdowns, fake orbital positions or fake mission status unless clearly labelled as a visual simulation/demo.

### 7. Respect image provenance
Prefer approved DhumketuX-owned assets. Do not hotlink random press images in production. External images may be used in this concept only where licensing/permission is clear.

### 8. Remove unrelated injected content
The current homepage appears to contain unrelated gambling/SEO spam links near the FAQ/footer. Never reproduce them. The build must include an explicit content sanitization pass.

### 9. Accessibility is a requirement
Target WCAG 2.2 AA practices for:

- keyboard navigation
- focus states
- semantic headings
- reduced motion
- contrast
- alt text
- form labels
- touch targets

### 10. Performance is part of the design
Large cinematic assets must not destroy LCP/INP/CLS. Use responsive images, modern formats, lazy loading below the fold, poster frames for video and motion that degrades gracefully.

## Preferred Stack

Unless the coding environment already dictates another stack:

- Next.js App Router
- TypeScript
- Tailwind CSS or a clean tokenized CSS system
- Server Components by default
- Framer Motion or Motion for React only where it adds meaning
- Local/static content objects for the demo
- Vercel-compatible deployment

Do not add a dependency for a problem that CSS or the platform can solve cleanly.

## Component Principles

Build reusable primitives first:

- `Container`
- `SectionHeader`
- `Eyebrow`
- `Button`
- `MagneticButton` (optional, desktop enhancement)
- `ProjectCard`
- `ProjectMetric`
- `StatStrip`
- `Timeline`
- `MediaCard`
- `ArticleCard`
- `LogoWall`
- `SpecsTable`
- `Accordion`
- `Footer`

Feature pages should compose these components instead of creating isolated one-off markup.

## Motion Rules

Motion should communicate:

- scale
- depth
- sequencing
- navigation
- engineering detail

Avoid:

- constant parallax
- excessive particle fields
- infinite spinning rockets
- attention-grabbing autoplay effects
- motion that competes with the primary CTA

Provide reduced-motion behavior.

## Content Rules

Copy should be:

- concise
- technically credible
- confident without hype
- grammatically clean
- easy to scan

Preserve official names exactly once approved. Fix obvious UI/content typos during the concept build, but do not silently alter technical meaning.

## Security / Hygiene

Before delivery:

- audit all external links
- remove unexpected injected HTML
- sanitize rich text if any CMS content is consumed
- ensure no secrets are committed
- ensure forms have abuse protection
- validate image domains
- prevent arbitrary HTML injection through content objects

## Definition of Done

A page is done only when it:

1. Matches the design system.
2. Works at mobile, tablet and desktop widths.
3. Has keyboard/focus states.
4. Has meaningful metadata and social preview basics.
5. Has optimized images.
6. Has no console errors.
7. Contains no fabricated claims.
8. Passes the relevant items in `docs/QA.md`.
