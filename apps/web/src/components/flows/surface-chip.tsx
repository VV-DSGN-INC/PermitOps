import { MapPin } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

export function SurfaceChip({
  surface,
  className,
}: {
  surface: string
  className?: string
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto items-start gap-1.5 whitespace-normal text-left font-normal text-muted-foreground",
        className,
      )}
    >
      <MapPin className="mt-0.5 size-3 shrink-0" aria-hidden />
      <span className="leading-snug">{surface}</span>
    </Badge>
  )
}
