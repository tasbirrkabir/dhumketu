import { cn } from "@/lib/utils";

/**
 * DhumketuX mark — an abstract comet: geometric head with trajectory tail.
 * "Dhumketu" (ধূমকেতু) means comet in Bengali. Decorative geometry only.
 */
export function DhumketuMark({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
        fill="none"
      >
        {/* trajectory tail */}
        <path
          d="M4 28 L18 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.55"
        />
        <path
          d="M8 29 L20 17"
          stroke="var(--dx-accent)"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        {/* comet head */}
        <circle
          cx="22"
          cy="10"
          r="6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="10" r="1.75" fill="var(--dx-accent)" />
        {/* reference ticks */}
        <path
          d="M28 4 L30 2 M4 4 L6 6"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
      {withWordmark ? (
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          Dhumketu<span className="text-signal">X</span>
        </span>
      ) : null}
    </span>
  );
}
