import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  marker?: boolean;
}

/** Small monospaced technical label with an optional square marker. */
export function Eyebrow({ children, className, marker = true }: EyebrowProps) {
  return (
    <p className={cn("dx-label flex items-center gap-2 text-ink-2", className)}>
      {marker ? (
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 bg-signal"
        />
      ) : null}
      <span>{children}</span>
    </p>
  );
}

interface StatusChipProps {
  label: string;
  tone?: "live" | "active" | "planned";
  className?: string;
}

/** Status chip used on project cards + spec blocks. */
export function StatusChip({ label, tone = "active", className }: StatusChipProps) {
  return (
    <span
      className={cn(
        "dx-label inline-flex items-center gap-1.5 border px-2 py-1",
        tone === "live" && "border-signal/40 text-signal",
        tone === "active" && "border-ember/50 text-ember",
        tone === "planned" && "border-line-strong text-ink-1",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-1 w-1 rounded-full",
          tone === "live" && "bg-signal",
          tone === "active" && "bg-ember",
          tone === "planned" && "bg-ink-2"
        )}
      />
      {label}
    </span>
  );
}
