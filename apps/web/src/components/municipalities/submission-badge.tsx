import { Globe, Mail, MapPin } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import type { SubmissionMethod } from "./ahj-metadata"

const styles: Record<SubmissionMethod, string> = {
  "Online portal":
    "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  "Counter / Drop-off":
    "bg-stone-200 text-stone-800 dark:bg-stone-500/20 dark:text-stone-300",
  Email: "bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300",
}

const icons: Record<SubmissionMethod, React.ComponentType<{ className?: string }>> = {
  "Online portal": Globe,
  "Counter / Drop-off": MapPin,
  Email: Mail,
}

export function SubmissionMethodBadge({ method }: { method: SubmissionMethod }) {
  const Icon = icons[method]
  return (
    <Badge
      variant="secondary"
      className={cn("gap-1 border-0 font-medium", styles[method])}
    >
      <Icon className="size-3" />
      {method}
    </Badge>
  )
}
