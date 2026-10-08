# REDESIGN — "Quiet Aerospace" (the new design authority)

> This document supersedes DESIGN-SYSTEM.md §2 as the visual direction for the rebuild.
> The previous implementation ("Mission Control meets Editorial Aerospace", dark-first,
> yellow `#e9ff4f` accent, HUD labels, engineering grids, bordered cards) was reviewed
> and judged **too decorative**. It is not a reference. This rebuild starts from zero.

## 1. Direction

**Apple-style minimalism applied to aerospace — quiet, premium, intelligent, precise,
editorial, cinematic.**

- The interface recedes; the content and the hardware are the design.
- Typography, photography and whitespace carry the hierarchy. No boxes, no chips,
  no grids, no badges, no glow.
- Restraint reads as confidence. If a visual element does not communicate anything,
  it is removed.

Explicitly banned (again): cyberpunk, neon, glow, HUD overlays, fake telemetry,
"AI startup" gradients, sci-fi dashboards, game UI, heavy glassmorphism, particles,
decorative engineering grids, mono-everywhere micro-labels, yellow accents.

## 2. Color

Light-first paper system with cinematic black movements. One signal color.

| Token | Value | Use |
|---|---|---|
| `paper` | `#fafaf9` | Default background (warm white) |
| `paper-2` | `#f2f2ee` | Secondary light surface (programs band) |
| `ink` | `#141412` | Primary text on paper |
| `ink-2` | `#6f6f68` | Secondary text on paper |
| `ink-3` | `#9a9a92` | Tertiary/caption text on paper |
| `line` | `rgba(20,20,18,0.14)` | Hairline rules on paper |
| `night` | `#0a0a09` | Cinematic dark sections (hero, features, vision, CTA) |
| `night-2` | `#141412` | Elevated dark surface |
| `chalk` | `#f5f5f1` | Text on night |
| `chalk-2` | `#a3a39b` | Secondary text on night |
| `night-line` | `rgba(245,245,241,0.16)` | Hairlines on night |
| `signal` | `#d0342c` | THE single accent (DhumketuX/flag red). Status dots, tiny markers only. |
| `go` | `#0e7a4f` | "Tested/verified" status green. Micro-use only. |

Accent budget: **< 1% of any viewport.** If the accent were removed entirely the
identity must survive through typography and photography alone.

## 3. Typography

- Display + body: **Inter** (Apple-adjacent neutral grotesk). Display weight 600,
  tracking `-0.035em`…`-0.045em`, line-height `0.98–1.05`. Body 400, `1.6` line-height.
- **IBM Plex Mono is reserved for real technical data only** (spec values, figure
  numerals). Never for eyebrows, labels or decoration.
- Eyebrows: Inter 13px, `+0.08em` uppercase, `ink-3` — the only "label" device, used
  sparingly (one per section).
- Scale:
  - Display XL `clamp(2.75rem, 7.5vw, 7rem)` (hero)
  - Display L `clamp(2.25rem, 5vw, 4.5rem)` (section statements)
  - H3 `clamp(1.5rem, 3vw, 2.5rem)` (project titles)
  - Body L `1.125–1.375rem` (intro paragraphs, Apple-style)
  - Body `1rem`, Meta `0.8125rem`

## 4. Layout

- Content column `max-w-[1180px]`, side padding `px-5 / sm:px-8 / lg:px-12`.
- Editorial measure for long text: `max-w-[640px]`–`720px`.
- Section rhythm: `py-24 sm:py-32 lg:py-40`. White↔black sections alternate to create
  cinematic movements. Hairline `1px` rules — no boxes.
- No card borders. No rounded boxes with strokes. Images sit in whitespace or full-bleed.

## 5. Homepage — the film

1. **HERO** (night) — wordmark nav, display statement "Building aerospace from
   Bangladesh.", quiet sub-line, two text links, then a full-bleed *real* engine
   static-fire photograph with an honest caption.
2. **INTRODUCTION** (paper) — editorial company statement (source-controlled),
   inline stat row (founded / team / tests / publications) as text, not cards.
3. **FLAGSHIP WORK** (paper header, then one feature at a time):
   01 Bidrohi SR (night + real team/rail photo) → 02 Agni Bina (paper, giant
   "120+ kN" typographic figure) → 03 Boson (night, liquid propulsion facts) →
   04 Nazrul 01 SSLV (paper + official render in a night media panel).
   Each: index, name, category line, one-liner, 3–4 sourced facts. No grids of cards.
4. **TECHNOLOGY** (paper) — 8-capability engineering stack as hairline list rows.
5. **MILESTONES** (paper) — editorial year/event rows, one documentary award photo.
6. **VISION** (night) — huge statement, three future pillars, Bangla line,
   official fairing render labeled as render. Explicit "future vision" marking.
7. **PEOPLE** (paper) — founder portrait, team facts, team photograph, advisors as text.
8. **PROGRAMS** (paper-2) — DBF tracks + journey + student programs as text columns.
9. **MEDIA** (paper) — four documented stories as text rows.
10. **FINAL CTA + FOOTER** (night) — closing statement, mailto routes, minimal footer
    with concept-disclaimer and source note.

## 6. Navigation

Fixed header. Over the hero: transparent, chalk text. After scroll: `paper/85`
blur, ink text, hairline. Links: Work · Technology · Vision · People · Programs ·
Collaborate (mailto). Mobile: full-screen night overlay menu, large type.
No mega-menus, no dropdowns, no HUD.

## 7. Motion (Apple-style restraint)

- Entrance: opacity 0→1 + 12–20px rise, 600–800ms, ease `[0.16,1,0.3,1]`, once.
- Images: slow scale 1.05→1 on reveal (cinematic settle), or 1.08→1 on hero load.
- Hover: underline/arrow shifts, image scale ≤1.03. No floating, no glow, no parallax
  storms.
- `prefers-reduced-motion`: all transforms disabled, content fully visible.

## 8. Factual governance (unchanged from AGENTS.md)

- Every figure comes from `src/content/*` with a `source` field pointing at
  dhumketux.com. No invented stats, partners, dates or claims.
- Status labels: Current / In development / Concept / Future vision — always visible
  for future-facing content.
- Renders and concept imagery are always captioned as renders.
- Spam/injected content from the live site is excluded by construction.

## 9. Asset allocation (provenance in `public/media/manifest.json`)

| Asset | Used in |
|---|---|
| `engine-static-fire-test.jpg` | Hero (real test photograph) |
| `team-launch-rail.jpg` | Bidrohi SR feature (real photo) |
| `nazrul-sslv-render.png` | Nazrul 01 feature (official render) |
| `fairing-deployment-render.png` | Vision (official render) |
| `founder-nahiyan-al-rahman.jpg` | People |
| `team-rocket-library.jpg` | People |
| `a2i-award-2022.jpg` | Milestones |

## 10. Difference from the previous build (acceptance)

The result must differ in: color system (light-first, no yellow), navigation
(translucent adaptive bar vs. bordered dark bar), typography (Inter editorial vs.
Space Grotesk + mono labels), homepage composition (film with one project at a time
vs. HUD section stack), project presentation (editorial features vs. card grid +
dialog), spacing (whitespace-dense vs. boxed), and motion (single settle reveals vs.
multi-element animation). If screenshots look similar to the old build, the redesign
has failed.
