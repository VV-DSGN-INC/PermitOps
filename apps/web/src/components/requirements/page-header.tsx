import { Building2 } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"

export function RequirementsPageHeader() {
  return (
    <header className="flex flex-col gap-3">
      <h1 className="font-heading text-2xl font-semibold tracking-tight">
        Project Requirements
      </h1>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted-foreground">
        <Badge
          variant="secondary"
          className="border-0 bg-primary/10 font-medium text-primary"
        >
          Project: Lonsdale Commercial Tenant Improvement &middot; 25F31
        </Badge>
        <span aria-hidden className="text-muted-foreground/60">
          /
        </span>
        <span className="font-medium text-foreground">Sign Permit</span>
        <span aria-hidden className="text-muted-foreground/60">
          /
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Building2 className="size-3.5" />
          North Vancouver, BC &middot; City
        </span>
      </div>
    </header>
  )
}
