import { cn } from "@workspace/ui/lib/utils"

type TechComfortProps = {
  /** Filled dots, 1-5. */
  value: 1 | 2 | 3 | 4 | 5
  /** Tailwind class for the filled dot color. */
  filledClassName: string
}

const LEVELS = [1, 2, 3, 4, 5] as const

const valueLabels: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "Avoids software",
  2: "Reluctant",
  3: "Comfortable",
  4: "Fluent",
  5: "Power user",
}

export function TechComfortMeter({ value, filledClassName }: TechComfortProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Tech comfort
      </span>
      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`Tech comfort: ${value} out of 5 — ${valueLabels[value]}`}
      >
        {LEVELS.map((level) => (
          <span
            key={level}
            className={cn(
              "size-2 rounded-full transition-colors",
              level <= value ? filledClassName : "bg-muted-foreground/20"
            )}
            aria-hidden
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">{valueLabels[value]}</span>
    </div>
  )
}
