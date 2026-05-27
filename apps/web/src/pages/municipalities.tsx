import { useMemo, useState } from "react"
import { Building2, Search } from "lucide-react"
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
import { cn } from "@workspace/ui/lib/utils"
import { FilterChip } from "@/components/projects/filter-chip"
import { MunicipalityStatStrip } from "@/components/municipalities/stat-strip"
import { JurisdictionBadge } from "@/components/municipalities/jurisdiction-badge"
import { SubmissionMethodBadge } from "@/components/municipalities/submission-badge"
import { AhjDetailPanel } from "@/components/municipalities/ahj-detail-panel"
import { buildMunicipalityRows } from "@/components/municipalities/ahj-metadata"
import type { MunicipalityRow } from "@/components/municipalities/ahj-metadata"

const DAY_MS = 1000 * 60 * 60 * 24
const TODAY = new Date("2026-05-26T12:00:00Z")

function formatLastFiled(iso: string): string {
  const date = new Date(iso + "T12:00:00Z")
  if (Number.isNaN(date.getTime())) return iso
  const days = Math.max(
    0,
    Math.floor((TODAY.getTime() - date.getTime()) / DAY_MS)
  )
  if (days === 0) return "today"
  if (days === 1) return "1 day ago"
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months === 1) return "1 month ago"
  return `${months} months ago`
}

function reviewToneClass(days: number): string {
  if (days <= 10) return "text-emerald-700 dark:text-emerald-300"
  if (days <= 16) return "text-foreground"
  return "text-amber-700 dark:text-amber-300"
}

export function MunicipalitiesPage() {
  const rows = useMemo<MunicipalityRow[]>(() => buildMunicipalityRows(), [])

  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<MunicipalityRow | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const filtered = useMemo<MunicipalityRow[]>(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return rows
    return rows.filter((row) => {
      const haystack = [row.name, row.state, row.jurisdictionType].join(" ").toLowerCase()
      return haystack.includes(needle)
    })
  }, [rows, query])

  const stateOptions = useMemo(
    () => Array.from(new Set(rows.map((r) => r.state))).sort(),
    [rows]
  )

  function handleSelect(row: MunicipalityRow) {
    setSelected(row)
    setSheetOpen(true)
  }

  function handleSheetOpenChange(next: boolean) {
    setSheetOpen(next)
    if (!next) {
      setTimeout(() => setSelected(null), 200)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Municipalities
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Every Authority Having Jurisdiction you file in — requirements,
          submission paths, and current activity.
        </p>
      </div>

      {/* Stat strip */}
      <MunicipalityStatStrip rows={rows} />

      {/* Filter / meta row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AHJs by name or state…"
            className="h-9 pl-9"
          />
        </div>
        <div className="flex items-center gap-1.5">
          <FilterChip label="State" options={stateOptions} />
          <FilterChip
            label="Jurisdiction Type"
            options={["City", "County", "City-County", "State"]}
          />
        </div>
      </div>

      {/* Table */}
      <Card size="sm" className="gap-0 py-0">
        <div className="flex items-center justify-between gap-3 px-3 py-2.5">
          <p className="text-xs text-muted-foreground">
            Displaying{" "}
            <span className="font-medium text-foreground">
              {filtered.length}
            </span>{" "}
            of <span className="font-medium text-foreground">{rows.length}</span>{" "}
            AHJs
          </p>
        </div>

        <Separator />

        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-3 text-xs font-medium text-muted-foreground">
                AHJ Name
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Jurisdiction Type
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                State
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground tabular-nums">
                Permits Filed
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Submission Method
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground tabular-nums">
                Avg Review
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Last Filed
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-32 text-center text-sm text-muted-foreground"
                >
                  No AHJs match{" "}
                  <span className="font-medium text-foreground">
                    "{query}"
                  </span>
                  . Try a different search.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((row) => (
                <TableRow
                  key={row.id}
                  className={cn(
                    "group cursor-pointer",
                    selected?.id === row.id && "bg-muted/60"
                  )}
                  onClick={() => handleSelect(row)}
                >
                  <TableCell className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                        <Building2 className="size-3.5" />
                      </span>
                      <span className="font-medium text-foreground">
                        {row.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <JurisdictionBadge type={row.jurisdictionType} />
                  </TableCell>
                  <TableCell className="py-2.5 text-sm text-foreground">
                    {row.state}
                  </TableCell>
                  <TableCell className="py-2.5 text-sm font-medium text-foreground tabular-nums">
                    {row.permitsFiled}
                  </TableCell>
                  <TableCell className="py-2.5">
                    <SubmissionMethodBadge method={row.meta.submissionMethod} />
                  </TableCell>
                  <TableCell
                    className={cn(
                      "py-2.5 text-sm font-medium tabular-nums",
                      reviewToneClass(row.meta.averageReviewDays)
                    )}
                  >
                    {row.meta.averageReviewDays} d
                  </TableCell>
                  <TableCell className="py-2.5 text-xs text-muted-foreground">
                    {formatLastFiled(row.meta.lastFiled)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>

      <AhjDetailPanel
        row={selected}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </div>
  )
}
