# Design System — DhumketuX

## 1. Creative Concept

### “Mission Control meets Editorial Aerospace”

Blend the authority of aerospace documentation with the emotional impact of cinematic launch photography.

The interface should feel like a **research organization with a point of view**, not an entertainment site.

## 2. Color System

Use a near-black base with warm white text and restrained high-energy accents.

Suggested tokens:

```css
--bg-0: #070707;
--bg-1: #0e0e0f;
--bg-2: #151515;
--text-0: #f5f5f2;
--text-1: #b8b8b2;
--text-2: #777772;
--line: rgba(255,255,255,.12);
--accent: #e9ff4f;
--accent-2: #ff5b35;
```

These are **starting tokens**, not a final brand-color approval. Derive the final palette from approved DhumketuX brand assets.

## 3. Typography

Desired hierarchy:

- Display: condensed/industrial sans, very large, strong tracking
- Headings: modern grotesk
- Body: highly readable neutral sans
- Technical labels: monospace or technical grotesk

Suggested pairings to test:

- `Space Grotesk` + `IBM Plex Mono`
- `Inter Tight` + `IBM Plex Mono`
- an approved DhumketuX brand font, if provided

Do not use novelty sci-fi fonts for paragraphs.

## 4. Type Scale

```text
Display XL     clamp(3.75rem, 10vw, 9rem)
Display L      clamp(3rem, 7vw, 6.5rem)
H1             clamp(2.75rem, 5vw, 5rem)
H2             clamp(2.25rem, 4vw, 4rem)
H3             clamp(1.5rem, 2.5vw, 2.25rem)
Body L         1.125rem–1.25rem
Body           1rem
Meta           .75rem–.875rem
```

## 5. Grid

Desktop:

- max content width: ~1400–1600px
- 12-column grid
- generous outer margins
- 24–32px gutters

Mobile:

- 4-column conceptual grid
- 16–20px page padding

## 6. Spacing

Base spacing scale:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`

Use large vertical rhythm for major sections.

## 7. Surfaces

Prefer:

- flat dark backgrounds
- subtle 1px borders
- photographic surfaces
- occasional translucent panels

Avoid turning every section into a rounded card.

## 8. Buttons

### Primary
High contrast, compact, slightly technical.

### Secondary
Bordered/ghost.

### Link CTA
Arrow or directional glyph with animated underline.

Buttons should not look like SaaS dashboard controls.

## 9. Project Cards

A project card should answer:

- What is it?
- What category is it?
- What makes it significant?
- What action can I take?

Recommended layout:

`Image / Render → eyebrow → title → one-line description → 2–4 metrics → View Project`

## 10. Technical Data

Use monospaced numerals and strong alignment.

Example:

```text
THRUST          120+ kN
PROPULSION      SOLID
MISSION         SUBORBITAL
VEHICLE         BIDROHI
STATUS          DEVELOPMENT
```

## 11. Imagery

Image treatment should prioritize:

- real hardware
- testing
- people
- launch environments
- clean product renders
- close technical details

Use wide compositions with negative space for headline placement.

## 12. Motion

Motion language:

- short entrance reveals
- depth-based image movement
- line drawing / path animation
- subtle number count-up when values are factual
- page transitions with directional continuity

Suggested timings:

`150–250ms` micro interaction

`400–700ms` section reveal

`800–1400ms` cinematic sequence

Respect `prefers-reduced-motion`.

## 13. Iconography

Use one icon family. Prefer simple line icons. For aerospace categories, custom pictograms may be used sparingly.

## 14. Visual Signature

Recurring visual motifs can include:

- trajectory arcs
- engineering grid lines
- mission numbers
- coordinate-like labels
- launch countdown typography used as pure editorial decoration
- vertical measurement marks

These are motifs, not fake telemetry.
