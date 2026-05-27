import { Quote } from "lucide-react"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import type { Assumption } from "@/lib/mock-data"
import { CategoryBadge, categoryIcon, categoryTint } from "./category-badge"
import { ConfidenceBadge } from "./confidence-badge"

export function AssumptionCard({ assumption }: { assumption: Assumption }) {
  const Icon = categoryIcon[assumption.category]

  return (
    <Card size="sm" className="gap-3">
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex size-7 items-center justify-center rounded-md bg-muted/60",
              categoryTint[assumption.category],
            )}
            aria-hidden
          >
            <Icon className="size-3.5" />
          </span>
          <CategoryBadge category={assumption.category} />
        </div>
        <ConfidenceBadge confidence={assumption.confidence} />
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <h3 className="font-heading text-sm font-semibold leading-snug text-foreground">
          {assumption.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {assumption.body}
        </p>
        <div className="mt-1 flex flex-col gap-1.5 border-t border-border/60 pt-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Evidence
          </span>
          <div className="flex items-start gap-2 text-xs italic text-foreground/80">
            <Quote
              className="mt-0.5 size-3 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <span>{assumption.evidence}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
