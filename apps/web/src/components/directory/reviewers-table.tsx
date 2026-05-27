import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Card } from "@workspace/ui/components/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"
import { getMunicipality } from "@/lib/mock-data"
import { getAccent } from "./data"

export type ReviewerRow = {
  id: string
  name: string
  initials: string
  municipalityId: string
  turnaroundDays: number
  permitsReviewed: number
}

type ReviewersTableProps = {
  rows: ReviewerRow[]
}

function turnaroundTone(days: number): string {
  if (days <= 9) return "text-green-700 dark:text-green-400"
  if (days <= 14) return "text-amber-700 dark:text-amber-400"
  return "text-red-700 dark:text-red-400"
}

export function ReviewersTable({ rows }: ReviewersTableProps) {
  return (
    <Card size="sm" className="gap-0 py-0">
      <Table>
        <TableHeader className="bg-muted/40">
          <TableRow className="hover:bg-transparent">
            <TableHead className="px-3 text-xs font-medium text-muted-foreground">
              Reviewer
            </TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">AHJ</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">State</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">
              Avg. turnaround
            </TableHead>
            <TableHead className="text-right text-xs font-medium text-muted-foreground">
              Permits reviewed for you
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-24 text-center text-sm text-muted-foreground"
              >
                No reviewers in your network yet.
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => {
              const accent = getAccent(row.id)
              const muni = getMunicipality(row.municipalityId)
              return (
                <TableRow key={row.id} className="group">
                  <TableCell className="px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar className="size-8 shrink-0">
                        <AvatarFallback
                          className={cn("text-xs font-semibold", accent.bg, accent.text)}
                        >
                          {row.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground">{row.name}</div>
                        <div className="text-xs text-muted-foreground">Municipal Reviewer</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5 text-sm text-foreground">
                    {muni?.name ?? "—"}
                  </TableCell>
                  <TableCell className="py-2.5">
                    <Badge variant="outline" className="font-mono text-[0.7rem] font-medium">
                      {muni?.state ?? "—"}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <span
                      className={cn(
                        "text-sm font-medium tabular-nums",
                        turnaroundTone(row.turnaroundDays)
                      )}
                    >
                      {row.turnaroundDays} days
                    </span>
                  </TableCell>
                  <TableCell className="py-2.5 pr-3 text-right text-sm font-medium tabular-nums text-foreground">
                    {row.permitsReviewed}
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </Card>
  )
}
