import { Building2, Layers, Map, Timer } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import type { MunicipalityRow } from "./ahj-metadata"

type StatSpec = {
  key: string
  label: string
  value: string
  hint: string
  Icon: React.ComponentType<{ className?: string }>
  accent: string
}

export function MunicipalityStatStrip({ rows }: { rows: MunicipalityRow[] }) {
  const totalAhjs = rows.length
  const statesCovered = new Set(rows.map((r) => r.state)).size
  const totalPermitsFiled = rows.reduce((sum, r) => sum + r.permitsFiled, 0)
  const avgReviewDays = rows.length
    ? Math.round(
        rows.reduce((sum, r) => sum + r.meta.averageReviewDays, 0) / rows.length
      )
    : 0

  const stats: StatSpec[] = [
    {
      key: "ahjs",
      label: "Total AHJs",
      value: String(totalAhjs),
      hint: "Authorities you file in",
      Icon: Building2,
      accent: "text-indigo-700 dark:text-indigo-300",
    },
    {
      key: "states",
      label: "States covered",
      value: String(statesCovered),
      hint: "Distinct US states",
      Icon: Map,
      accent: "text-emerald-700 dark:text-emerald-300",
    },
    {
      key: "filed",
      label: "Permits filed",
      value: String(totalPermitsFiled),
      hint: "Across all jurisdictions",
      Icon: Layers,
      accent: "text-violet-700 dark:text-violet-300",
    },
    {
      key: "avg-days",
      label: "Avg review",
      value: `${avgReviewDays} days`,
      hint: "Median across AHJs",
      Icon: Timer,
      accent: "text-amber-700 dark:text-amber-300",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.key}
          className="rounded-xl bg-card px-4 py-3.5 ring-1 ring-foreground/10 transition-colors hover:ring-foreground/20"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {s.label}
            </h3>
            <s.Icon className={cn("size-4", s.accent)} />
          </div>
          <div className="mt-2 font-heading text-3xl font-semibold text-foreground tabular-nums">
            {s.value}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{s.hint}</p>
        </div>
      ))}
    </div>
  )
}
