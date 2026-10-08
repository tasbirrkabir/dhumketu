import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "start" | "between";
  aside?: React.ReactNode;
}

/**
 * Numbered section header — "SEC. 02 / FLAGSHIP WORK" style technical labels
 * with an editorial headline. Purely structural; carries no telemetry.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className,
  aside,
}: SectionHeaderProps) {
  return (
    <div className={cn("border-t border-line", className)}>
      <div className="flex items-center justify-between gap-4 pt-4">
        <p className="dx-label text-ink-2">
          <span className="text-signal">SEC.</span> {index}{" "}
          <span className="text-ink-2" aria-hidden="true">
            /
          </span>{" "}
          <span className="text-ink-1">{eyebrow}</span>
        </p>
        <p className="dx-label text-ink-2" aria-hidden="true">
          DX·2026
        </p>
      </div>
      <Reveal className="mt-8 md:mt-12" direction="up" distance={20}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="dx-display max-w-3xl text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {aside}
        </div>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-1 md:text-lg">
            {description}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}
