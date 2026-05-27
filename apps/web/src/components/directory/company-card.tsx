import { Users } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import { companyTypeStyle, getAccent } from "./data"
import type { DirectoryCompany } from "./data"

type CompanyCardProps = {
  company: DirectoryCompany
}

export function CompanyCard({ company }: CompanyCardProps) {
  const accent = getAccent(company.id)
  const isWorkspace = company.type === "Workspace"

  return (
    <Card
      size="sm"
      className={cn(
        "gap-3 transition-shadow hover:ring-foreground/20",
        accent.ring,
        isWorkspace && "ring-2 ring-primary/30"
      )}
    >
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-lg text-sm font-semibold tracking-tight",
              accent.bg,
              accent.text
            )}
            aria-hidden
          >
            {company.initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="font-heading text-base leading-tight font-semibold text-foreground">
                {company.name}
              </h3>
              {isWorkspace && (
                <Badge variant="default" className="font-medium">
                  Your firm
                </Badge>
              )}
            </div>
            <Badge
              variant="secondary"
              className={cn("mt-1.5 border-0 font-medium", companyTypeStyle[company.type])}
            >
              {company.type === "Workspace" ? "Workspace owner" : company.type}
            </Badge>
            <p className="mt-2 text-sm text-foreground/80">{company.industry}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t pt-3 text-xs">
          <Badge variant="secondary" className="font-medium">
            {company.activeProjects} active {company.activeProjects === 1 ? "project" : "projects"}
          </Badge>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Users className="size-3" aria-hidden />
            {company.peopleInWorkspace} {company.peopleInWorkspace === 1 ? "person" : "people"} in workspace
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
