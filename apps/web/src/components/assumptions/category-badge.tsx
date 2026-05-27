import { TrendingUp, Users, Wrench, Palette, type LucideIcon } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import type { Assumption } from "@/lib/mock-data"

export type Category = Assumption["category"]

export const categoryIcon: Record<Category, LucideIcon> = {
  Market: TrendingUp,
  User: Users,
  Technical: Wrench,
  Design: Palette,
}

export const categoryStyles: Record<Category, string> = {
  Market:
    "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300",
  User:
    "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-300",
  Technical:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  Design:
    "bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:text-amber-300",
}

export const categoryDotStyles: Record<Category, string> = {
  Market: "bg-blue-500",
  User: "bg-violet-500",
  Technical: "bg-emerald-500",
  Design: "bg-amber-500",
}

export const categoryTint: Record<Category, string> = {
  Market: "text-blue-600 dark:text-blue-300",
  User: "text-violet-600 dark:text-violet-300",
  Technical: "text-emerald-600 dark:text-emerald-300",
  Design: "text-amber-600 dark:text-amber-300",
}

export function CategoryBadge({ category }: { category: Category }) {
  const Icon = categoryIcon[category]
  return (
    <Badge
      variant="secondary"
      className={cn("gap-1 border-0 font-medium", categoryStyles[category])}
    >
      <Icon data-icon="inline-start" />
      {category}
    </Badge>
  )
}
