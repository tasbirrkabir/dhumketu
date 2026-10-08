# QA Checklist

## 1. Visual

- [ ] No accidental horizontal scrolling
- [ ] Hero text remains readable over media
- [ ] Project images crop correctly
- [ ] Typography scale feels intentional at all breakpoints
- [ ] Buttons have consistent sizing
- [ ] Section rhythm is consistent
- [ ] No random card-radius inconsistency

## 2. Responsive

Test at minimum:

- 360px
- 390px
- 768px
- 1024px
- 1280px
- 1440px+

Check navigation, hero, project grids, tables/spec blocks, timeline and footer.

## 3. Accessibility

- [ ] semantic HTML
- [ ] one clear H1 per page
- [ ] heading hierarchy is logical
- [ ] all actionable elements keyboard reachable
- [ ] visible focus state
- [ ] sufficient text contrast
- [ ] form labels present
- [ ] images have meaningful alt text or are explicitly decorative
- [ ] reduced-motion mode works

## 4. Functional

- [ ] mobile menu opens/closes
- [ ] all internal links resolve
- [ ] project detail routes resolve
- [ ] filters do not produce dead states
- [ ] forms validate
- [ ] error states are usable
- [ ] external links open as intended

## 5. Content Integrity

- [ ] no invented technical metrics
- [ ] no unsupported superlatives
- [ ] all project names reviewed
- [ ] all years reviewed
- [ ] all thrust/altitude/payload figures reviewed
- [ ] status labels match approved source
- [ ] future vision is clearly marked as future
- [ ] team claims are approved

## 6. Security / Hygiene

- [ ] no suspicious external domains
- [ ] no gambling/SEO spam content
- [ ] no arbitrary HTML injection
- [ ] no leaked secrets
- [ ] third-party scripts reviewed
- [ ] forms rate-limited / protected

The live site currently exposes unrelated injected-looking gambling/SEO links near the FAQ. This must be treated as a defect and excluded from the new experience.

## 7. Performance

- [ ] hero image/video optimized
- [ ] below-fold images lazy loaded
- [ ] fonts optimized
- [ ] no oversized JS bundle from decorative animation
- [ ] layout dimensions reserved to prevent CLS
- [ ] Lighthouse/Core Web Vitals reviewed

## 8. SEO

- [ ] title
- [ ] description
- [ ] canonical
- [ ] OG image
- [ ] sitemap
- [ ] robots
- [ ] schema where applicable
- [ ] 404 page

## Final Acceptance

A non-technical visitor should understand the organization, major work, proof, vision and engagement path without reading every page.
