import { Link, useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const routeTitles: Record<string, string> = {
  tasks: "My tasks",
  board: "Tasks",
  team: "Team",
  members: "Members",
  notes: "Design Notes",
  problem: "Problem Statement",
  personas: "Personas",
  flows: "Key Flows",
  sitemap: "Sitemap",
  "ai-opportunities": "AI Opportunities",
  "ai-patterns": "AI Patterns",
  timeline: "Timeline",
}

export function Breadcrumbs() {
  const { pathname } = useLocation()
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>TeamHQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">TeamHQ</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1
          const path = "/" + segments.slice(0, i + 1).join("/")
          const label = routeTitles[segment] ?? segment
          return (
            <span key={path} className="flex items-center gap-2">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={path}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
