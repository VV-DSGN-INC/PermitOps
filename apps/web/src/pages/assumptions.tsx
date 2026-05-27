import { useMemo } from "react"
import { TrendingUp, Users, Wrench, Palette, type LucideIcon } from "lucide-react"
import { Card } from "@workspace/ui/components/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"
import { assumptions } from "@/lib/mock-data"
import type { Assumption } from "@/lib/mock-data"
import { AssumptionCard } from "@/components/assumptions/assumption-card"
import {
  categoryDotStyles,
  categoryTint,
  type Category,
} from "@/components/assumptions/category-badge"
import {
  confidenceDotStyles,
  type Confidence,
} from "@/components/assumptions/confidence-badge"

const CATEGORY_ORDER: Category[] = ["Market", "User", "Technical", "Design"]
const CONFIDENCE_ORDER: Confidence[] = ["High", "Medium", "Low"]

const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  Market: TrendingUp,
  User: Users,
  Technical: Wrench,
  Design: Palette,
}

const CATEGORY_BLURB: Record<Category, string> = {
  Market: "Who is this for and what wedge do we own?",
  User: "Who shows up daily, and what do they actually need?",
  Technical: "What is the system shaped by, beneath the UI?",
  Design: "What does the surface area need to feel like?",
}

function countBy<T extends string>(
  items: Assumption[],
  pick: (a: Assumption) => T,
): Record<T, number> {
  return items.reduce(
    (acc, a) => {
      const key = pick(a)
      acc[key] = (acc[key] ?? 0) + 1
      return acc
    },
    {} as Record<T, number>,
  )
}

function CategoryStat({
  category,
  count,
}: {
  category: Category
  count: number
}) {
  const Icon = CATEGORY_ICONS[category]
  return (
    <Card size="sm" className="gap-0">
      <div className="flex items-center justify-between px-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {category}
        </span>
        <span
          className={cn(
            "flex size-7 items-center justify-center rounded-md bg-muted/60",
            categoryTint[category],
          )}
          aria-hidden
        >
          <Icon className="size-3.5" />
        </span>
      </div>
      <div className="flex items-baseline gap-2 px-3 pt-1">
        <span className="font-heading text-3xl font-semibold leading-none tabular-nums tracking-tight">
          {count}
        </span>
        <span className="text-xs text-muted-foreground">
          {count === 1 ? "assumption" : "assumptions"}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-border/60 px-3 pt-2.5">
        <span
          className={cn("size-1.5 rounded-full", categoryDotStyles[category])}
          aria-hidden
        />
        <span className="text-xs text-muted-foreground">
          {CATEGORY_BLURB[category]}
        </span>
      </div>
    </Card>
  )
}

function ConfidenceStat({
  confidence,
  count,
  total,
}: {
  confidence: Confidence
  count: number
  total: number
}) {
  const pct = total === 0 ? 0 : Math.round((count / total) * 100)
  const blurb: Record<Confidence, string> = {
    High: "Backed by strong signal",
    Medium: "Validate in next round",
    Low: "Validate first — risky",
  }
  return (
    <Card size="sm" className="gap-0">
      <div className="flex items-center justify-between px-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {confidence} confidence
        </span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {pct}%
        </span>
      </div>
      <div className="flex items-baseline gap-2 px-3 pt-1">
        <span className="font-heading text-3xl font-semibold leading-none tabular-nums tracking-tight">
          {count}
        </span>
        <span className="text-xs text-muted-foreground">
          of {total}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-border/60 px-3 pt-2.5">
        <span
          className={cn(
            "size-1.5 rounded-full",
            confidenceDotStyles[confidence],
          )}
          aria-hidden
        />
        <span className="text-xs text-muted-foreground">
          {blurb[confidence]}
        </span>
      </div>
    </Card>
  )
}

function CategorySectionHeader({
  category,
  count,
}: {
  category: Category
  count: number
}) {
  const Icon = CATEGORY_ICONS[category]
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-8 items-center justify-center rounded-md bg-muted/60",
          categoryTint[category],
        )}
        aria-hidden
      >
        <Icon className="size-4" />
      </span>
      <div className="flex flex-col">
        <h2 className="font-heading text-base font-semibold leading-tight">
          {category}{" "}
          <span className="text-muted-foreground font-normal">· {count}</span>
        </h2>
        <p className="text-xs text-muted-foreground">
          {CATEGORY_BLURB[category]}
        </p>
      </div>
    </div>
  )
}

function AssumptionGrid({ items }: { items: Assumption[] }) {
  if (items.length === 0) {
    return (
      <Card size="sm" className="items-center justify-center py-10 text-sm text-muted-foreground">
        No assumptions in this category yet.
      </Card>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {items.map((a) => (
        <AssumptionCard key={a.id} assumption={a} />
      ))}
    </div>
  )
}

export function AssumptionsPage() {
  const total = assumptions.length

  const byCategory = useMemo(
    () => countBy<Category>(assumptions, (a) => a.category),
    [],
  )
  const byConfidence = useMemo(
    () => countBy<Confidence>(assumptions, (a) => a.confidence),
    [],
  )

  const grouped = useMemo(() => {
    const out: Record<Category, Assumption[]> = {
      Market: [],
      User: [],
      Technical: [],
      Design: [],
    }
    for (const a of assumptions) out[a.category].push(a)
    return out
  }, [])

  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Assumptions
        </h1>
        <p className="text-sm text-muted-foreground">
          What we&rsquo;re betting on, and how confident we are.
        </p>
      </div>

      {/* Intro */}
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Each assumption is categorized&nbsp;
        <span className="text-foreground">(Market, User, Technical, Design)</span>{" "}
        with a confidence level&nbsp;
        <span className="text-foreground">(Low, Medium, High)</span>. The medium
        and low ones are where the risk lives &mdash; validate those first
        before pouring more pixels into anything they touch.
      </p>

      {/* Summary stat strip */}
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            By category
          </div>
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CATEGORY_ORDER.map((c) => (
              <CategoryStat
                key={c}
                category={c}
                count={byCategory[c] ?? 0}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            By confidence
          </div>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {CONFIDENCE_ORDER.map((c) => (
              <ConfidenceStat
                key={c}
                confidence={c}
                count={byConfidence[c] ?? 0}
                total={total}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="gap-5">
        <TabsList variant="line" className="self-start">
          <TabsTrigger value="all">
            All
            <span className="ml-1.5 text-xs text-muted-foreground tabular-nums">
              {total}
            </span>
          </TabsTrigger>
          {CATEGORY_ORDER.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
              <span className="ml-1.5 text-xs text-muted-foreground tabular-nums">
                {byCategory[c] ?? 0}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="flex flex-col gap-8">
          {CATEGORY_ORDER.map((c) => {
            const items = grouped[c]
            if (items.length === 0) return null
            return (
              <section key={c} className="flex flex-col gap-3">
                <CategorySectionHeader category={c} count={items.length} />
                <AssumptionGrid items={items} />
              </section>
            )
          })}
        </TabsContent>

        {CATEGORY_ORDER.map((c) => (
          <TabsContent key={c} value={c} className="flex flex-col gap-3">
            <CategorySectionHeader category={c} count={grouped[c].length} />
            <AssumptionGrid items={grouped[c]} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
