# Content Map & Content Governance

## 1. Content Principles

### Lead with meaning
Every section should answer a user question.

### Show proof
Prefer real images, technical data, milestones and project documentation.

### Separate present from future
Use explicit labels such as:

- Current
- In Development
- Concept
- Future Vision
- Proposed

Do not let vision language read like completed capability.

## 2. Homepage Content Model

### Hero
- eyebrow
- display headline
- one-sentence positioning statement
- primary CTA
- secondary CTA
- hero media

### Proof
- 3–5 approved metrics
- optional certification/award logos only when approved

### Project
Each featured project object should include:

```ts
{
  slug: string,
  name: string,
  category: string,
  status: "concept" | "development" | "tested" | "operational" | "unknown",
  summary: string,
  metrics: Array<{label: string; value: string; source: string}>,
  image: string,
  href: string
}
```

## 3. Current-Site Facts to Revalidate

The current pages publish numerous figures and milestone claims, including examples such as:

- founded in 2018
- 50+ team members
- 3 successful tests on the homepage stats block
- 250+ team journal publications
- propulsion figures for Red Chili, Proloy, Agni Bina, Boson and Ibn Khaldun

These should be treated as **source data requiring approval**, not permanent truths copied directly into the new UI.

## 4. Editorial Voice

### Tone

Confident, technical, aspirational, human.

### Good

> Building aerospace systems from Bangladesh.

> From propulsion tests to integrated flight systems.

> Engineering for the next chapter of South Asian aerospace.

### Avoid

> We are revolutionizing everything.

> The most advanced aerospace company in the world.

> Guaranteed first / best / biggest claims without a source.

## 5. Bangla Usage

English should remain the primary technical language for the concept.

Bangla can be used strategically for:

- cultural project naming
- milestone storytelling
- national identity moments
- selected editorial moments

Do not duplicate every sentence in two languages unless the final information architecture requires bilingual parity.

## 6. Media Content

Every article card should support:

- date
- category
- headline
- short summary
- cover image
- source URL

External article titles should not be manually rewritten into sensational claims.

## 7. Content Sanitization

The live homepage currently contains unrelated injected/SEO spam links near the lower FAQ area. Treat this as contaminated content. Do not ingest arbitrary HTML from the current site.

Any migration/import process must:

1. whitelist approved content fields
2. strip unexpected links/scripts/markup
3. review all external domains
4. manually approve final copy
