# Technical Specification — DhumketuX Website Upgrade

## 1. Architecture

Recommended:

```text
Next.js App Router
├── app/
│   ├── page.tsx
│   ├── work/
│   ├── capabilities/
│   ├── mission/
│   ├── programs/
│   ├── media/
│   └── engage/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── project/
│   ├── media/
│   └── sections/
├── content/
│   ├── projects.ts
│   ├── milestones.ts
│   ├── capabilities.ts
│   └── articles.ts
├── public/
│   └── media/
└── lib/
```

## 2. Data-First Content

Keep project data outside UI components.

Example:

```ts
export const projects = [
  {
    slug: "agni-bina",
    name: "Agni Bina",
    category: "Solid Propulsion",
    status: "development",
    summary: "Approved project summary goes here.",
    metrics: [
      {
        label: "Thrust",
        value: "120+ kN",
        source: "https://dhumketux.com/solid-propulsion/"
      }
    ]
  }
] as const;
```

Do not put unverified copy directly in JSX.

## 3. Rendering Strategy

Use Server Components by default.

Client Components only for:

- interactive navigation
- sliders
- accordions
- motion wrappers that genuinely require client state
- filters

## 4. Images

Use Next/Image where appropriate.

Rules:

- supply width/height or a known aspect ratio
- create responsive variants
- use AVIF/WebP where the pipeline supports it
- preload only the true hero asset
- lazy-load below-the-fold media
- never use enormous original JPEGs when a compressed derivative exists

## 5. Video

Prefer a short looping hero video only when the asset exists and the performance budget allows it.

Requirements:

- poster image
- muted
- autoplay only if allowed by browser policy
- `playsInline`
- reduced-motion fallback
- static image fallback

## 6. Performance Budget

Target:

- LCP < 2.5s on a representative mobile connection
- CLS < 0.1
- INP < 200ms

Avoid huge JavaScript bundles for visual effects.

## 7. SEO

Implement:

- page-specific title/description
- canonical URLs
- Open Graph metadata
- Twitter/X cards where useful
- sitemap
- robots.txt
- semantic headings
- descriptive alt text
- Article schema for article pages
- Organization/website schema where appropriate and factually supported

Do not use fake keyword stuffing.

## 8. Security / Current-Site Cleanup

The live homepage appears to have unrelated SEO/gambling links injected below the FAQ. This is a major hygiene signal.

For the concept rebuild:

- do not import raw HTML
- allowlist content sources
- validate outbound URLs
- sanitize rich text
- audit third-party scripts
- avoid unnecessary WordPress-plugin parity in the new frontend

If the existing WordPress install will continue to power content, run a separate security/malware audit before connecting it to the new frontend.

## 9. Forms

Contact/collaboration forms should have:

- server-side validation
- CSRF-safe architecture where applicable
- bot protection/rate limiting
- success and error states
- accessible labels
- spam filtering

Do not collect unnecessary personal information.

## 10. Analytics

Only add analytics after the experience is stable. Track useful events such as:

- project_detail_view
- collaboration_cta_click
- career_cta_click
- program_cta_click
- media_open
- contact_submit

Avoid recording sensitive form fields into analytics.

## 11. Deployment

The project should deploy cleanly to Vercel or another modern Node-compatible host.

Required checks before deploy:

```bash
npm run lint
npm run build
```

Add visual checks for core routes before production.
