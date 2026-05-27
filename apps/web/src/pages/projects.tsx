import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Columns3,
  ExternalLink,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Separator } from "@workspace/ui/components/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"
import {
  getMunicipality,
  projects as allProjects,
} from "@/lib/mock-data"
import type { Project } from "@/lib/mock-data"
import { ProjectStatusBadge } from "@/components/projects/status-badge"
import { ProjectTypeBadge } from "@/components/projects/type-badge"
import { TeamStack } from "@/components/projects/team-stack"
import { FilterChip } from "@/components/projects/filter-chip"

const DAY_MS = 1000 * 60 * 60 * 24
const TODAY = new Date("2026-05-26T12:00:00Z")

function daysSince(iso: string): number {
  const date = new Date(iso + "T12:00:00Z")
  return Math.max(0, Math.floor((TODAY.getTime() - date.getTime()) / DAY_MS))
}

function formatRelative(iso: string): string {
  const days = daysSince(iso)
  if (days === 0) return "today"
  if (days === 1) return "1 day ago"
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months === 1) return "1 month ago"
  return `${months} months ago`
}

function formatDueDate(iso?: string): { label: string; overdue: boolean } {
  if (!iso) return { label: "—", overdue: false }
  const date = new Date(iso + "T12:00:00Z")
  const overdue = date.getTime() < TODAY.getTime()
  const label = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
  return { label, overdue }
}

function municipalityLabels(ids: string[]): string {
  if (ids.length === 0) return "—"
  const names = ids
    .map((id) => getMunicipality(id)?.name)
    .filter((n): n is string => Boolean(n))
  if (names.length === 0) return "—"
  if (names.length === 1) return names[0]!
  return `${names[0]} +${names.length - 1}`
}

const ROWS_PER_PAGE = 10

export function ProjectsPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const filtered = useMemo<Project[]>(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return allProjects
    return allProjects.filter((p) => {
      const haystack = [
        p.name,
        p.code,
        p.address,
        p.city,
        p.state,
        p.zip,
        p.customer ?? "",
        ...p.municipalities.map((m) => getMunicipality(m)?.name ?? ""),
      ]
        .join(" ")
        .toLowerCase()
      return haystack.includes(needle)
    })
  }, [query])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / ROWS_PER_PAGE))
  const safePage = Math.min(page, totalPages)
  const startIdx = total === 0 ? 0 : (safePage - 1) * ROWS_PER_PAGE + 1
  const endIdx = Math.min(safePage * ROWS_PER_PAGE, total)
  const pageRows = filtered.slice(startIdx - 1, endIdx)

  return (
    <div className="flex flex-col gap-5">
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Every active engagement across your workspace. Open a project to
            file or track its permits.
          </p>
        </div>
        <Button>
          <Plus data-icon="inline-start" />
          New Project
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPage(1)
          }}
          placeholder="Search by Project ID, Name, Address, or Municipality"
          className="h-10 pl-9"
        />
      </div>

      {/* Card-wrapped table */}
      <Card size="sm" className="gap-0 py-0">
        {/* Filter / meta row */}
        <div className="flex items-center justify-between gap-4 px-3 py-2.5">
          <p className="text-xs text-muted-foreground">
            Displaying{" "}
            <span className="font-medium text-foreground">
              {startIdx}–{endIdx}
            </span>{" "}
            of <span className="font-medium text-foreground">{total}</span>
          </p>
          <div className="flex items-center gap-1.5">
            <FilterChip
              label="Team"
              options={[
                "Jasmine Diaz",
                "Sam Tran",
                "Marcus Hill",
                "Priya Shah",
                "Leo Park",
              ]}
            />
            <FilterChip
              label="Type"
              options={[
                "Commercial",
                "Residential",
                "Signage",
                "General Improvements",
                "Industrial",
              ]}
            />
            <FilterChip
              label="Status"
              options={[
                "Intake",
                "Permit Pending",
                "Permit Issued",
                "In Construction",
                "Inactive",
              ]}
            />
            <FilterChip
              label="Recently updated"
              options={["Today", "Last 7 days", "Last 30 days", "Last 90 days"]}
            />
            <Separator orientation="vertical" className="mx-1 h-5" />
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle column visibility"
            >
              <Columns3 />
            </Button>
          </div>
        </div>

        <Separator />

        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-3 text-xs font-medium text-muted-foreground">
                Project Name & ID
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Address
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Municipalities
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Types
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Customer
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Team
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Created & Updated
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Due
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Expires
              </TableHead>
              <TableHead className="w-8 text-xs font-medium text-muted-foreground" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={11}
                  className="h-32 text-center text-sm text-muted-foreground"
                >
                  No projects match{" "}
                  <span className="font-medium text-foreground">
                    “{query}”
                  </span>
                  . Try a different search.
                </TableCell>
              </TableRow>
            ) : (
              pageRows.map((p) => {
                const due = formatDueDate(p.dueAt)
                const expires = formatDueDate(p.expiresAt)
                return (
                  <TableRow
                    key={p.id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/projects/${p.id}`)}
                  >
                    <TableCell className="px-3 py-2.5">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {p.name}
                        </span>
                        <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <span>{p.code}</span>
                          <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5">
                      <div className="flex flex-col text-xs leading-tight">
                        <span className="text-foreground">{p.address}</span>
                        <span className="mt-0.5 text-muted-foreground">
                          {p.city}, {p.state} {p.zip}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-foreground">
                      {municipalityLabels(p.municipalities)}
                    </TableCell>
                    <TableCell className="py-2.5">
                      <div className="flex flex-wrap gap-1">
                        {p.types.map((t) => (
                          <ProjectTypeBadge key={t} type={t} />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-foreground">
                      {p.customer ?? (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="py-2.5">
                      <TeamStack team={p.team} />
                    </TableCell>
                    <TableCell className="py-2.5">
                      <ProjectStatusBadge status={p.status} />
                    </TableCell>
                    <TableCell className="py-2.5">
                      <div className="flex flex-col text-xs leading-tight text-muted-foreground">
                        <span>
                          Created{" "}
                          <span className="text-foreground">
                            {formatRelative(p.createdAt)}
                          </span>
                        </span>
                        <span className="mt-0.5">
                          Updated{" "}
                          <span className="text-foreground">
                            {formatRelative(p.updatedAt)}
                          </span>
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5 text-xs">
                      <span
                        className={cn(
                          "text-foreground",
                          due.overdue && p.dueAt && "font-medium text-destructive",
                        )}
                      >
                        {due.label}
                      </span>
                    </TableCell>
                    <TableCell className="py-2.5 text-xs">
                      <span
                        className={cn(
                          "text-foreground",
                          expires.overdue &&
                            p.expiresAt &&
                            "font-medium text-destructive",
                        )}
                      >
                        {expires.label}
                      </span>
                    </TableCell>
                    <TableCell
                      className="py-2.5 pr-3 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label={`Actions for ${p.name}`}
                            className="opacity-0 group-hover:opacity-100 aria-expanded:opacity-100"
                          >
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>{p.code}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => navigate(`/projects/${p.id}`)}
                          >
                            Open project
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            View requirements
                          </DropdownMenuItem>
                          <DropdownMenuItem>Create permit</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Share status link</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>

        <Separator />

        {/* Pagination footer */}
        <div className="flex items-center justify-between gap-4 px-3 py-2.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Rows per page</span>
            <Button variant="outline" size="sm" className="font-normal">
              {ROWS_PER_PAGE}
              <ChevronDown data-icon="inline-end" />
            </Button>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>
              Page{" "}
              <span className="font-medium text-foreground">{safePage}</span> of{" "}
              <span className="font-medium text-foreground">{totalPages}</span>
            </span>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Previous page"
                disabled={safePage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Next page"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
