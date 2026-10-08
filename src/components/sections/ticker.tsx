import { milestones } from "@/content/milestones";
import { Marquee } from "@/components/primitives/ui-bits";

/**
 * TICKER: sourced milestones from dhumketux.com/history running as a
 * quiet infinite band. Proof of momentum, at a glance.
 */
export function Ticker() {
  const items = milestones.map((m) => ({ year: m.year, title: m.title }));
  return (
    <section aria-label="Milestones on record" className="bg-void">
      <Marquee items={items} />
    </section>
  );
}
