import { useMemo, useState, type ReactNode } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import {
  ArrowLeft,
  Bot,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Phone,
  Plus,
  Share2,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Separator } from "@workspace/ui/components/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"
import {
  getMunicipality,
  getPerson,
  getProject,
  people,
  permits,
  projectStatusLabel,
} from "@/lib/mock-data"
import type { Permit, PermitStatus, Person, Project } from "@/lib/mock-data"
import { ProjectStatusBadge } from "@/components/projects/status-badge"
import { ProjectTypeBadge } from "@/components/projects/type-badge"
import { PermitStatusPill } from "@/components/permits/permit-status-pill"
import { PermitDetailPanel } from "@/components/permits/permit-detail-panel"

const TODAY = new Date("2026-05-26T12:00:00Z")

function daysSince(iso: string): number {
  const ms = TODAY.getTime() - new Date(iso + "T12:00:00Z").getTime()
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)))
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

function formatLong(iso?: string, fallback = "—"): string {
  if (!iso) return fallback
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const PIPELINE_STAGES: { id: string; label: string; statuses: PermitStatus[] }[] = [
  { id: "prep", label: "Preparing", statuses: ["preparing"] },
  { id: "submitted", label: "Submitted", statuses: ["submitted"] },
  { id: "review", label: "In Review", statuses: ["in_review"] },
  { id: "comments", label: "Comments", statuses: ["comments"] },
  { id: "issued", label: "Issued", statuses: ["approved", "issued"] },
  { id: "closed", label: "Closed", statuses: ["closed", "expired"] },
]

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProject(id) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const projectPermits = permits.filter((p) => p.projectId === project.id)

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 pb-12">
      <DetailHeader project={project} permitCount={projectPermits.length} />

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview" className="gap-2">
            <Briefcase className="size-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="permits" className="gap-2">
            <FileText className="size-4" /> Permits
            <span className="ml-1 rounded-full bg-muted px-1.5 text-xs tabular-nums text-muted-foreground">
              {projectPermits.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="requirements" className="gap-2">
            <ClipboardList className="size-4" /> Requirements
          </TabsTrigger>
          <TabsTrigger value="team" className="gap-2">
            <Users className="size-4" /> Team
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <OverviewTab project={project} projectPermits={projectPermits} />
        </TabsContent>
        <TabsContent value="permits" className="mt-4">
          <PermitsTab projectPermits={projectPermits} />
        </TabsContent>
        <TabsContent value="requirements" className="mt-4">
          <RequirementsTab project={project} projectPermits={projectPermits} />
        </TabsContent>
        <TabsContent value="team" className="mt-4">
          <TeamTab project={project} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Header
   ──────────────────────────────────────────────────────────────────────── */

function DetailHeader({ project, permitCount }: { project: Project; permitCount: number }) {
  return (
    <header className="space-y-5">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> All projects
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.name}
            </h1>
            <Badge
              variant="outline"
              className="gap-1 font-mono text-xs text-muted-foreground"
            >
              {project.code}
              <ExternalLink className="size-3 opacity-70" />
            </Badge>
            <ProjectStatusBadge status={project.status} />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {project.address}, {project.city}, {project.state} {project.zip}
            </span>
            {project.customer ? (
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="size-3.5" />
                {project.customer}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" />
              Updated {formatRelative(project.updatedAt)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 />
            Share status link
          </Button>
          <Button size="sm">
            <Plus />
            New Permit
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon-sm" aria-label="More actions">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{project.code}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit project details</DropdownMenuItem>
              <DropdownMenuItem>Duplicate project</DropdownMenuItem>
              <DropdownMenuItem>Export to PDF</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Archive project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Meta strip: types + permit count badge */}
      <div className="flex flex-wrap items-center gap-2 border-t pt-4">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Project types
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.types.map((t) => (
            <ProjectTypeBadge key={t} type={t} />
          ))}
        </div>
        <Separator orientation="vertical" className="mx-2 h-5" />
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Permits
        </span>
        <Badge variant="secondary" className="font-medium">
          {permitCount} on this project
        </Badge>
      </div>
    </header>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Overview tab
   ──────────────────────────────────────────────────────────────────────── */

function OverviewTab({
  project,
  projectPermits,
}: {
  project: Project
  projectPermits: Permit[]
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Left column (spans 2) */}
      <div className="space-y-4 lg:col-span-2">
        <PermitPipelineCard permits={projectPermits} project={project} />
        <RecentActivityCard project={project} permits={projectPermits} />
      </div>

      {/* Right column */}
      <div className="space-y-4">
        <AtAGlanceCard project={project} />
        <TeamCard project={project} />
        <MunicipalitiesCard project={project} />
        <AgentActivityCard />
      </div>
    </div>
  )
}

function PermitPipelineCard({
  permits: list,
  project,
}: {
  permits: Permit[]
  project: Project
}) {
  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const stage of PIPELINE_STAGES) {
      map[stage.id] = list.filter((p) => stage.statuses.includes(p.status)).length
    }
    return map
  }, [list])

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-base font-semibold text-foreground">
            Permit pipeline
          </h2>
          <p className="text-xs text-muted-foreground">
            Where every permit on this project sits today
          </p>
        </div>
        <Badge variant="outline" className="font-medium">
          {list.length} total
        </Badge>
      </div>

      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {PIPELINE_STAGES.map((stage, i) => {
          const count = counts[stage.id] ?? 0
          const isFinal = i === PIPELINE_STAGES.length - 1
          return (
            <li
              key={stage.id}
              className={cn(
                "relative rounded-lg border bg-background p-3",
                count > 0 && "border-primary/30 bg-primary/[0.04]",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  {stage.label}
                </span>
                {!isFinal ? (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-1.5 hidden size-2.5 -translate-y-1/2 rotate-45 border-t border-r border-border bg-background sm:block"
                  />
                ) : null}
              </div>
              <div className="mt-1 font-heading text-2xl font-semibold tabular-nums text-foreground">
                {count}
              </div>
            </li>
          )
        })}
      </ol>

      {list.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          No permits filed yet on {project.name}.
        </p>
      ) : null}
    </Card>
  )
}

type ActivityEvent = {
  kind: "permit" | "comment" | "agent" | "milestone"
  title: string
  body: string
  actor?: string
  daysAgo: number
}

function RecentActivityCard({
  project,
  permits: list,
}: {
  project: Project
  permits: Permit[]
}) {
  const events = useMemo<ActivityEvent[]>(() => {
    // Deterministic synthetic activity per project — varied across runs but consistent for a given project
    const seed = project.code.length
    const samples: ActivityEvent[] = [
      {
        kind: "agent",
        title: "Research agent surfaced requirements",
        body: `Pulled forms, fees, and review timelines for ${project.municipalities.length} AHJ${project.municipalities.length === 1 ? "" : "s"}.`,
        actor: "Research agent",
        daysAgo: 12 + seed,
      },
      {
        kind: "permit",
        title: list[0] ? `Submitted ${list[0].name} (${list[0].permitNumber})` : "Project created from contract PDF",
        body: list[0]
          ? "Coordinator clicked Submit; AHJ filing succeeded on first attempt."
          : "Intake agent extracted address, customer, and scope from the contract.",
        actor: "Priya Shah",
        daysAgo: 9 + (seed % 5),
      },
      {
        kind: "comment",
        title: "Reviewer comment received",
        body: list[0]
          ? `Reviewer requested clarification on the ${list[0].tags[0] ?? "scope"} sheet. Auto-assigned to original submitter.`
          : "First reviewer touchpoint for this project.",
        actor: "City reviewer",
        daysAgo: 5 + (seed % 3),
      },
      {
        kind: "milestone",
        title: "Project moved to Permit Pending",
        body: `${list.length} permit${list.length === 1 ? "" : "s"} are now active on this engagement.`,
        actor: "System",
        daysAgo: 3,
      },
      {
        kind: "agent",
        title: "Coordination agent flagged expiration risk",
        body: "One issued permit is within 60 days of expiration. Renewal staged for review.",
        actor: "Coordination agent",
        daysAgo: 1,
      },
    ]
    return samples
  }, [project, list])

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-base font-semibold text-foreground">
            Recent activity
          </h2>
          <p className="text-xs text-muted-foreground">
            Latest changes across permits, agents, and reviewers
          </p>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          View all
        </Button>
      </div>

      <ul className="space-y-4">
        {events.map((event, i) => (
          <li key={i} className="flex items-start gap-3">
            <ActivityKindIcon kind={event.kind} />
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-sm font-medium text-foreground">
                  {event.title}
                </span>
                {event.actor ? (
                  <span className="text-xs text-muted-foreground">
                    · {event.actor}
                  </span>
                ) : null}
                <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                  {event.daysAgo === 0
                    ? "today"
                    : event.daysAgo === 1
                      ? "1 day ago"
                      : `${event.daysAgo} days ago`}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">
                {event.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function ActivityKindIcon({ kind }: { kind: ActivityEvent["kind"] }) {
  const map: Record<
    ActivityEvent["kind"],
    { icon: typeof Briefcase; bg: string; fg: string }
  > = {
    permit: { icon: FileText, bg: "bg-blue-50 dark:bg-blue-500/15", fg: "text-blue-600 dark:text-blue-300" },
    comment: {
      icon: MessageSquare,
      bg: "bg-amber-50 dark:bg-amber-500/15",
      fg: "text-amber-700 dark:text-amber-300",
    },
    agent: {
      icon: Sparkles,
      bg: "bg-violet-50 dark:bg-violet-500/15",
      fg: "text-violet-600 dark:text-violet-300",
    },
    milestone: {
      icon: CheckCircle2,
      bg: "bg-emerald-50 dark:bg-emerald-500/15",
      fg: "text-emerald-600 dark:text-emerald-300",
    },
  }
  const { icon: Icon, bg, fg } = map[kind]
  return (
    <div
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-md",
        bg,
      )}
    >
      <Icon className={cn("size-4", fg)} aria-hidden />
    </div>
  )
}

function AtAGlanceCard({ project }: { project: Project }) {
  const rows: { label: string; value: ReactNode }[] = [
    { label: "Status", value: <ProjectStatusBadge status={project.status} /> },
    { label: "Project ID", value: <span className="font-mono text-xs">{project.code}</span> },
    {
      label: "Status label",
      value: (
        <span className="text-foreground">{projectStatusLabel[project.status]}</span>
      ),
    },
    { label: "Created", value: formatLong(project.createdAt) },
    { label: "Updated", value: formatLong(project.updatedAt) },
    { label: "Due", value: formatLong(project.dueAt) },
    { label: "Expires", value: formatLong(project.expiresAt) },
  ]
  return (
    <Card className="p-5">
      <h2 className="mb-3 font-heading text-base font-semibold text-foreground">
        At a glance
      </h2>
      <dl className="divide-y text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-3 py-2.5">
            <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {r.label}
            </dt>
            <dd className="text-right text-sm text-foreground">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  )
}

function TeamCard({ project }: { project: Project }) {
  const team = project.team
    .map((id) => getPerson(id))
    .filter((p): p is Person => Boolean(p))
  return (
    <Card className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-foreground">Team</h2>
        <Button variant="ghost" size="icon-sm" aria-label="Add teammate">
          <UserPlus />
        </Button>
      </div>
      {team.length === 0 ? (
        <p className="text-sm text-muted-foreground">No teammates assigned yet.</p>
      ) : (
        <ul className="space-y-2.5">
          {team.map((p) => (
            <li key={p.id} className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                  {p.initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.role}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {project.customer ? (
        <div className="mt-4 border-t pt-3">
          <p className="mb-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Customer
          </p>
          <p className="text-sm text-foreground">{project.customer}</p>
        </div>
      ) : null}
    </Card>
  )
}

function MunicipalitiesCard({ project }: { project: Project }) {
  const munis = project.municipalities
    .map((id) => getMunicipality(id))
    .filter((m): m is NonNullable<ReturnType<typeof getMunicipality>> => Boolean(m))
  return (
    <Card className="p-5">
      <h2 className="mb-3 font-heading text-base font-semibold text-foreground">
        Municipalities
      </h2>
      <ul className="space-y-2.5">
        {munis.map((m) => (
          <li key={m.id} className="flex items-start gap-2.5">
            <Building2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.jurisdictionType}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function AgentActivityCard() {
  const agents = [
    { name: "Intake", count: 1, color: "text-blue-600 dark:text-blue-300" },
    { name: "Research", count: 3, color: "text-violet-600 dark:text-violet-300" },
    { name: "Submission", count: 4, color: "text-emerald-600 dark:text-emerald-300" },
    { name: "Coordination", count: 6, color: "text-amber-600 dark:text-amber-300" },
  ]
  return (
    <Card className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-foreground">
          AI agent activity
        </h2>
        <Bot className="size-4 text-muted-foreground" />
      </div>
      <p className="mb-3 text-xs text-muted-foreground">
        Actions taken by agents on behalf of this project over the last 30 days
      </p>
      <ul className="space-y-2.5">
        {agents.map((a) => (
          <li
            key={a.name}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className="flex items-center gap-2">
              <CircleDot className={cn("size-3.5", a.color)} />
              <span className="text-foreground">{a.name}</span>
            </span>
            <span className="font-mono text-sm tabular-nums text-foreground">
              {a.count}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Permits tab — filtered list with side-panel
   ──────────────────────────────────────────────────────────────────────── */

function PermitsTab({ projectPermits }: { projectPermits: Permit[] }) {
  const [selected, setSelected] = useState<Permit | null>(null)
  const [open, setOpen] = useState(false)

  function handleSelect(permit: Permit) {
    setSelected(permit)
    setOpen(true)
  }

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      setTimeout(() => setSelected(null), 200)
    }
  }

  if (projectPermits.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center gap-3 p-12 text-center">
        <FileText className="size-8 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-foreground">No permits yet</p>
          <p className="text-xs text-muted-foreground">
            File the first permit for this project to get started.
          </p>
        </div>
        <Button size="sm" className="mt-1">
          <Plus />
          New Permit
        </Button>
      </Card>
    )
  }

  return (
    <>
      <Card className="overflow-hidden p-0">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Permits on this project
            </h2>
            <p className="text-xs text-muted-foreground">
              {projectPermits.length} permit{projectPermits.length === 1 ? "" : "s"}
              {" · click a row for full detail"}
            </p>
          </div>
          <Button size="sm" variant="outline">
            <Plus />
            Add permit
          </Button>
        </div>
        <Separator />
        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs font-medium text-muted-foreground">
                Permit Name
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Permit #
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Municipality
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Tags
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectPermits.map((p) => {
              const muni = getMunicipality(p.issuingMunicipalityId)
              const isSelected = selected?.id === p.id
              return (
                <TableRow
                  key={p.id}
                  className={cn("cursor-pointer", isSelected && "bg-muted/40")}
                  onClick={() => handleSelect(p)}
                >
                  <TableCell className="py-2.5 font-medium text-foreground">
                    {p.name}
                  </TableCell>
                  <TableCell className="py-2.5">
                    <PermitStatusPill status={p.status} />
                  </TableCell>
                  <TableCell className="py-2.5 font-mono text-xs text-muted-foreground">
                    {p.permitNumber}
                  </TableCell>
                  <TableCell className="py-2.5 text-sm text-foreground">
                    {muni?.name ?? "—"}
                  </TableCell>
                  <TableCell className="py-2.5">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-[11px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>
      <PermitDetailPanel
        permit={selected}
        open={open}
        onOpenChange={handleOpenChange}
      />
    </>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Requirements tab — per-AHJ summary
   ──────────────────────────────────────────────────────────────────────── */

function RequirementsTab({
  project,
  projectPermits,
}: {
  project: Project
  projectPermits: Permit[]
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-base font-semibold text-foreground">
            Requirements by jurisdiction
          </h2>
          <p className="text-xs text-muted-foreground">
            Surfaced by the Research agent for every AHJ this project files in
          </p>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link to="/requirements">
            Full requirements page
            <ExternalLink data-icon="inline-end" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {project.municipalities.map((muniId) => {
          const muni = getMunicipality(muniId)
          if (!muni) return null
          const munisPermits = projectPermits.filter(
            (p) => p.issuingMunicipalityId === muniId,
          )
          // Synthetic per-AHJ requirement summary
          const formCount = 4 + (muniId.length % 4)
          const planCount = 3 + (muniId.length % 3)
          const reviewDays = 8 + (muniId.length % 14)
          return (
            <Card key={muniId} className="p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <Building2 className="size-4 text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {muni.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {muni.jurisdictionType} · {munisPermits.length} permit
                    {munisPermits.length === 1 ? "" : "s"} filed here
                  </p>
                </div>
              </div>
              <Separator className="mb-3" />
              <ul className="grid grid-cols-3 gap-3 text-center">
                <li>
                  <div className="font-heading text-xl font-semibold tabular-nums text-foreground">
                    {formCount}
                  </div>
                  <div className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    Required forms
                  </div>
                </li>
                <li>
                  <div className="font-heading text-xl font-semibold tabular-nums text-foreground">
                    {planCount}
                  </div>
                  <div className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    Plan sheets
                  </div>
                </li>
                <li>
                  <div className="font-heading text-xl font-semibold tabular-nums text-foreground">
                    {reviewDays}d
                  </div>
                  <div className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    Avg review
                  </div>
                </li>
              </ul>
              <Separator className="my-3" />
              <ul className="space-y-1.5 text-xs text-foreground/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Online portal submission
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Plan set on 11×17 minimum
                </li>
                <li className="flex items-center gap-2">
                  <CalendarClock className="size-3.5 text-amber-600" />
                  Comments-due window: 14 days
                </li>
              </ul>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Team tab — internal team, customer, reviewers
   ──────────────────────────────────────────────────────────────────────── */

function TeamTab({ project }: { project: Project }) {
  const team = project.team
    .map((id) => getPerson(id))
    .filter((p): p is Person => Boolean(p))
  const reviewer = people.find((p) => p.role.includes("Reviewer"))

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="p-5 lg:col-span-2">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-base font-semibold text-foreground">
              Internal team
            </h2>
            <p className="text-xs text-muted-foreground">
              People at your firm assigned to this project
            </p>
          </div>
          <Button size="sm" variant="outline">
            <UserPlus />
            Add teammate
          </Button>
        </div>
        {team.length === 0 ? (
          <p className="text-sm text-muted-foreground">No teammates yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {team.map((p) => (
              <TeamPersonCard key={p.id} person={p} />
            ))}
          </div>
        )}
      </Card>

      <Card className="p-5">
        <h2 className="mb-3 font-heading text-base font-semibold text-foreground">
          Customer
        </h2>
        {project.customer ? (
          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <Avatar className="size-10">
                <AvatarFallback className="bg-amber-100 text-sm font-semibold text-amber-900 dark:bg-amber-500/15 dark:text-amber-300">
                  {project.customer
                    .split(/\s+/)
                    .map((w) => w[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">
                  {project.customer}
                </p>
                <p className="text-xs text-muted-foreground">Customer</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No customer attached to this project.
          </p>
        )}

        <Separator className="my-4" />

        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Municipal reviewers
        </h3>
        {reviewer ? (
          <div className="space-y-2.5">
            {project.municipalities.map((muniId) => {
              const muni = getMunicipality(muniId)
              if (!muni) return null
              return (
                <div key={muniId} className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-slate-100 text-xs font-semibold text-slate-700 dark:bg-slate-500/20 dark:text-slate-200">
                      {muni.name
                        .split(/[\s,]+/)
                        .map((w) => w[0])
                        .filter(Boolean)
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-foreground">
                      Reviewer · {muni.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Avg response: 3 days
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : null}
      </Card>
    </div>
  )
}

function TeamPersonCard({ person }: { person: Person }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <div className="flex items-start gap-3">
        <Avatar className="size-10">
          <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
            {person.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-2">
          <div>
            <p className="text-sm font-semibold text-foreground">{person.name}</p>
            <p className="text-xs text-muted-foreground">{person.role}</p>
          </div>
          <div className="space-y-1">
            <a
              href={`mailto:${person.email}`}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <Mail className="size-3" /> {person.email}
            </a>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Phone className="size-3" /> +1 (555) 010-{Math.abs(hashInt(person.id)).toString().slice(-4)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function hashInt(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h | 0
}

