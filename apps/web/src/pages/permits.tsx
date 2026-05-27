import { useMemo, useState } from "react"
import { Bell, Plus, Search } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { permits as allPermits } from "@/lib/mock-data"
import type { Permit, PermitStatus } from "@/lib/mock-data"
import { StatusCards } from "@/components/permits/status-cards"
import { PermitsTable } from "@/components/permits/permits-table"
import { PermitDetailPanel } from "@/components/permits/permit-detail-panel"

const COMPLETED_STATUSES: PermitStatus[] = ["closed", "expired"]

export function PermitsPage() {
  const [selectedPermit, setSelectedPermit] = useState<Permit | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [tab, setTab] = useState<"open" | "completed">("open")

  const filteredBySearch = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allPermits
    return allPermits.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.permitNumber.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }, [query])

  const openPermits = useMemo(
    () => filteredBySearch.filter((p) => !COMPLETED_STATUSES.includes(p.status)),
    [filteredBySearch]
  )
  const completedPermits = useMemo(
    () => filteredBySearch.filter((p) => COMPLETED_STATUSES.includes(p.status)),
    [filteredBySearch]
  )

  function handleSelect(permit: Permit) {
    setSelectedPermit(permit)
    setSheetOpen(true)
  }

  function handleSheetOpenChange(next: boolean) {
    setSheetOpen(next)
    if (!next) {
      // keep selected for closing animation; clear shortly after
      setTimeout(() => setSelectedPermit(null), 200)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            Permits
          </h1>
          <p className="text-sm text-muted-foreground">
            Track every permit across every jurisdiction. Sorted by what needs your attention.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell />
            <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white ring-2 ring-background">
              6
            </span>
          </Button>
          <Button>
            <Plus />
            Add Permit
          </Button>
        </div>
      </div>

      {/* Status cards */}
      <StatusCards permits={allPermits} />

      {/* Tabs + search + table */}
      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as "open" | "completed")}
        className="gap-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <TabsList>
            <TabsTrigger value="open">
              Open
              <span className="ml-1.5 rounded-full bg-muted px-1.5 text-xs text-muted-foreground tabular-nums">
                {openPermits.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed
              <span className="ml-1.5 rounded-full bg-muted px-1.5 text-xs text-muted-foreground tabular-nums">
                {completedPermits.length}
              </span>
            </TabsTrigger>
          </TabsList>
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search permits, numbers, tags…"
              className="h-8 pl-8"
            />
          </div>
        </div>

        <TabsContent value="open" className="mt-1">
          <PermitsTable
            permits={openPermits}
            selectedId={selectedPermit?.id}
            onSelect={handleSelect}
            emptyMessage="No open permits match your search."
          />
        </TabsContent>
        <TabsContent value="completed" className="mt-1">
          <PermitsTable
            permits={completedPermits}
            selectedId={selectedPermit?.id}
            onSelect={handleSelect}
            emptyMessage="No completed permits match your search."
          />
        </TabsContent>
      </Tabs>

      <PermitDetailPanel
        permit={selectedPermit}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </div>
  )
}
