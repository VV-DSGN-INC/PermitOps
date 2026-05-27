import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { getMunicipality, getProject } from "@/lib/mock-data"
import type { Permit } from "@/lib/mock-data"
import { PermitStatusPill } from "./permit-status-pill"

type Props = {
  permits: Permit[]
  selectedId?: string
  onSelect: (permit: Permit) => void
  emptyMessage?: string
}

export function PermitsTable({ permits, selectedId, onSelect, emptyMessage }: Props) {
  if (permits.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
        {emptyMessage ?? "No permits to show."}
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <Table>
        <TableHeader className="bg-muted/40">
          <TableRow>
            <TableHead className="pl-4">Permit Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Permit ID</TableHead>
            <TableHead>Project ID</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Project Address</TableHead>
            <TableHead>Municipality</TableHead>
            <TableHead className="pr-4">Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {permits.map((permit) => {
            const project = getProject(permit.projectId)
            const muni = getMunicipality(permit.issuingMunicipalityId)
            const isSelected = selectedId === permit.id
            return (
              <TableRow
                key={permit.id}
                aria-selected={isSelected}
                data-state={isSelected ? "selected" : undefined}
                onClick={() => onSelect(permit)}
                className={cn(
                  "cursor-pointer",
                  isSelected && "bg-muted/60"
                )}
              >
                <TableCell className="pl-4 font-medium text-foreground">
                  {permit.name}
                </TableCell>
                <TableCell>
                  <PermitStatusPill status={permit.status} />
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {permit.permitNumber}
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {project?.code ?? "—"}
                </TableCell>
                <TableCell className="max-w-[220px] truncate text-foreground">
                  {project?.name ?? "—"}
                </TableCell>
                <TableCell className="max-w-[220px] truncate text-muted-foreground">
                  {project ? `${project.address}, ${project.city}` : "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {muni?.name ?? "—"}
                </TableCell>
                <TableCell className="pr-4">
                  <div className="flex flex-wrap gap-1">
                    {permit.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-muted/40 text-foreground/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
