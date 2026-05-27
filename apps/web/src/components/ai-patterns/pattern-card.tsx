import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { MapPin } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import {
  accentChip,
  accentIconWrap,
  accentVar,
  type AccentTone,
} from "./pattern-accent"

/**
 * AI pattern card.
 *
 * Layout: big muted number | title + 1-line description (with optional icon).
 * Body: "WHEN" block, mini-example frame, "USED ON" references.
 *
 * Accent stripe uses a gradient stop on the card background instead of a
 * `border-l`, so the colored bar stays geometrically sharp inside the rounded
 * corner. Same trick used on Problem Statement / Personas.
 *   (source: buttonschool.com/blog/awkward-borders)
 */

const STRIPE_W = 4 // px — proportional to rounded-2xl corners

export type Pattern = {
  number: string // "01" .. "10"
  title: string
  description: string
  icon: LucideIcon
  accent: AccentTone
  when: string
  example: ReactNode
  usedOn: string[]
}

export function PatternCard({ pattern }: { pattern: Pattern }) {
  const Icon = pattern.icon
  return (
    <article
      className="relative flex flex-col rounded-2xl shadow-xs ring-1 ring-border/80 transition-shadow hover:shadow-sm"
      style={{
        background: `linear-gradient(to right, ${accentVar[pattern.accent]} ${STRIPE_W}px, var(--card) ${STRIPE_W}px)`,
      }}
    >
      <div
        className="flex flex-col gap-4 p-5"
        style={{ paddingLeft: `calc(1.25rem + ${STRIPE_W}px)` }}
      >
        {/* Header: number, title, description, icon */}
        <div className="flex items-start gap-4">
          <div
            className="font-heading text-3xl font-semibold leading-none tabular-nums text-muted-foreground/50 select-none"
            aria-hidden
          >
            {pattern.number}
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <h3 className="font-heading text-base leading-snug font-semibold text-foreground">
              {pattern.title}
            </h3>
            <p className="text-sm leading-snug text-muted-foreground">
              {pattern.description}
            </p>
          </div>
          <div
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-lg",
              accentIconWrap[pattern.accent],
            )}
            aria-hidden
          >
            <Icon className="size-4.5" />
          </div>
        </div>

        {/* When */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span
              className={cn(
                "inline-block size-1 rounded-full",
                accentChip[pattern.accent],
              )}
              aria-hidden
            />
            When
          </div>
          <p className="text-[13px] leading-relaxed text-foreground/85">
            {pattern.when}
          </p>
        </div>

        {/* Mini example */}
        <div className="rounded-md bg-muted/40 p-3">{pattern.example}</div>

        {/* Used on */}
        <div className="mt-auto space-y-1.5 border-t border-border/60 pt-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <MapPin className="size-3" aria-hidden />
            Used on
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {pattern.usedOn.map((ref) => (
              <li
                key={ref}
                className={cn(
                  "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium",
                  accentChip[pattern.accent],
                )}
              >
                {ref}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
