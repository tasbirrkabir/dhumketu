import { CtaBand } from "@/components/primitives/ui-bits";

/**
 * FINAL CTA: mission-control concept backdrop, gradient conversion panel.
 */
export function FinalCta() {
  return (
    <CtaBand
      image="/media/concept-mission-control.jpg"
      imageAlt="Concept art of a dark mission control room with amber telemetry screens"
      title="Build the sky with"
      accent="us."
      copy="Partners, universities, students and talent: build with us from Bangladesh."
      primary={{ href: "/contact#form", label: "Start a conversation" }}
      secondary={{ href: "/work", label: "Explore our work" }}
      caption="Backdrop: concept art, illustrative of a mission control environment."
    />
  );
}
