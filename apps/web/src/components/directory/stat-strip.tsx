import type { LucideIcon } from "lucide-react"
import { Building2, GavelIcon, UserCog, Users } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

type Stat = {
  key: string
  label: string
  value: number
  helper: string
  icon: LucideIcon
  tone: { text: string; border: string; bg: string }
}

type StatStripProps = {
  teammates: number
  customers: number
  reviewers: number
  companies: number
}

export function StatStrip({ teammates, customers, reviewers, companies }: StatStripProps) {
  const stats: Stat[] = [
    {
      key: "teammates",
      label: "Teammates",
      value: teammates,
      helper: "Members of your workspace",
      icon: Users,
      tone: {
        text: "text-indigo-700 dark:text-indigo-300",
        border: "before:bg-indigo-500",
        bg: "bg-indigo-100 dark:bg-indigo-500/20",
      },
    },
    {
      key: "customers",
      label: "Customers",
      value: customers,
      helper: "Clients with active projects",
      icon: UserCog,
      tone: {
        text: "text-emerald-700 dark:text-emerald-300",
        border: "before:bg-emerald-500",
        bg: "bg-emerald-100 dark:bg-emerald-500/20",
      },
    },
    {
      key: "reviewers",
      label: "Reviewers",
      value: reviewers,
      helper: "Municipal plan reviewers",
      icon: GavelIcon,
      tone: {
        text: "text-amber-700 dark:text-amber-300",
        border: "before:bg-amber-500",
        bg: "bg-amber-100 dark:bg-amber-500/20",
      },
    },
    {
      key: "companies",
      label: "Companies",
      value: companies,
      helper: "Firms in your directory",
      icon: Building2,
      tone: {
        text: "text-violet-700 dark:text-violet-300",
        border: "before:bg-violet-500",
        bg: "bg-violet-100 dark:bg-violet-500/20",
      },
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.key}
            className={cn(
              "relative overflow-hidden rounded-xl bg-card px-4 py-3.5 ring-1 ring-foreground/10 transition-colors hover:ring-foreground/20",
              "before:absolute before:inset-y-0 before:left-0 before:w-0.5",
              stat.tone.border
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className={cn("text-xs font-semibold tracking-wide uppercase", stat.tone.text)}>
                {stat.label}
              </h3>
              <div
                className={cn(
                  "flex size-7 items-center justify-center rounded-md",
                  stat.tone.bg
                )}
              >
                <Icon className={cn("size-3.5", stat.tone.text)} aria-hidden />
              </div>
            </div>
            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{stat.helper}</p>
            <div className="mt-3 font-heading text-3xl font-semibold tabular-nums text-foreground">
              {stat.value}
            </div>
          </div>
        )
      })}
    </div>
  )
}
