# Design & Engineering Decisions

## D-001 — Rebuild the information hierarchy, not just the visuals

**Decision:** Use Work / Capabilities / Mission / Programs / Media / Engage as the primary mental model.

**Reason:** The live site has a very large and deeply nested navigation structure. A concept site needs a stronger editorial hierarchy.

## D-002 — Evidence-led storytelling

**Decision:** Flagship projects and milestones should appear before broad promotional copy.

**Reason:** Aerospace credibility is stronger when the interface demonstrates actual work.

## D-003 — Separate present capability from future vision

**Decision:** Use explicit status labels.

**Reason:** The current site includes ambitious long-term concepts. Visitors should be able to distinguish deployed/tested work from proposed future infrastructure.

## D-004 — Cinematic, but restrained

**Decision:** Use photography, renders and motion as atmosphere rather than decoration for its own sake.

**Reason:** Overly futuristic visuals can make a real aerospace organization feel less credible.

## D-005 — Data lives in content objects

**Decision:** Technical metrics belong in structured data with source references.

**Reason:** Reduces accidental fabrication and makes future CMS migration easier.

## D-006 — No raw HTML migration

**Decision:** Never scrape/import the current homepage markup directly into the new frontend.

**Reason:** The live page appears to contain unrelated injected spam links; raw migration would risk carrying contamination into the new build.

## D-007 — Concept/demo disclaimer

**Decision:** The implementation is presented as a design concept unless DhumketuX authorizes production use.

**Reason:** Prevents a portfolio/demo project from being mistaken for an official company website.
