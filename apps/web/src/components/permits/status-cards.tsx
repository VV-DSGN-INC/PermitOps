import { cn } from "@workspace/ui/lib/utils"
import type { Permit } from "@/lib/mock-data"

type CardSpec = {
  key: string
  title: string
  subtitle: string
  count: number
  accent: {
    text: string
    dot: string
    border: string
  }
}

function countByStatuses(permits: Permit[], statuses: Permit["status"][]): number {
  return permits.filter((p) => statuses.includes(p.status)).length
}

export function StatusCards({ permits }: { permits: Permit[] }) {
  const cards: CardSpec[] = [
    {
      key: "in-progress",
      title: "In Progress",
      subtitle: "Preparing or submitted to municipality",
      count: countByStatuses(permits, ["preparing", "submitted", "in_review"]),
      accent: {
        text: "text-indigo-700 dark:text-indigo-300",
        dot: "bg-indigo-500",
        border: "before:bg-indigo-500",
      },
    },
    {
      key: "pending-approval",
      title: "Pending Approval",
      subtitle: "Awaiting reviewer comments",
      count: countByStatuses(permits, ["comments"]),
      accent: {
        text: "text-amber-700 dark:text-amber-300",
        dot: "bg-amber-500",
        border: "before:bg-amber-500",
      },
    },
    {
      key: "active",
      title: "Active",
      subtitle: "Approved and issued permits",
      count: countByStatuses(permits, ["approved", "issued"]),
      accent: {
        text: "text-green-700 dark:text-green-300",
        dot: "bg-green-500",
        border: "before:bg-green-500",
      },
    },
    {
      key: "expiring",
      title: "Expiring Soon",
      subtitle: "Expires in under 30 days",
      count: 0,
      accent: {
        text: "text-orange-700 dark:text-orange-300",
        dot: "bg-orange-500",
        border: "before:bg-orange-500",
      },
    },
    {
      key: "expired",
      title: "Expired",
      subtitle: "Permits past expiration date",
      count: countByStatuses(permits, ["expired"]),
      accent: {
        text: "text-red-700 dark:text-red-300",
        dot: "bg-red-500",
        border: "before:bg-red-500",
      },
    },
    {
      key: "total",
      title: "Total Permits",
      subtitle: "Across all projects and stages",
      count: permits.length,
      accent: {
        text: "text-foreground",
        dot: "bg-muted-foreground",
        border: "before:bg-border",
      },
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.key}
          className={cn(
            "relative overflow-hidden rounded-xl bg-card px-4 py-3.5 ring-1 ring-foreground/10 transition-colors hover:ring-foreground/20",
            "before:absolute before:inset-y-0 before:left-0 before:w-0.5",
            card.accent.border
          )}
        >
          <div className="flex items-center gap-1.5">
            <span
              className={cn("size-1.5 rounded-full", card.accent.dot)}
              aria-hidden
            />
            <h3 className={cn("text-xs font-semibold tracking-wide uppercase", card.accent.text)}>
              {card.title}
            </h3>
          </div>
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{card.subtitle}</p>
          <div className="mt-3 font-heading text-3xl font-semibold text-foreground tabular-nums">
            {card.count}
          </div>
        </div>
      ))}
    </div>
  )
}
