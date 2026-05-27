import { Layers, Map as MapIcon, Network, Route as RouteIcon } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
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

export function SitemapPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 pb-12">
      {/* Page header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 font-medium text-muted-foreground">
            <MapIcon className="size-3" aria-hidden />
            Design notes
          </Badge>
          <span className="text-xs text-muted-foreground">
            v0.2 · navigation + data model
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight">
            Sitemap
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            How the product is organized — pages, surfaces, and the data underneath.
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
          Two views: the navigation hierarchy (every page a user can reach, plus the
          sub-views, drawers, and side panels nested under each) and the entity model
          (what the database actually tracks). The URL map at the bottom is the canonical
          reference for every route in this prototype.
        </p>
      </header>

      <Separator />

      <Section
        icon={<Layers className="size-4" aria-hidden />}
        eyebrow="Navigation"
        title="Page hierarchy"
        description="Reachable pages inside the product, with sub-views and detail surfaces nested under each. Design Notes (Personas, Flows, Sitemap, Assumptions) are excluded — they're interview-only meta-content, not part of the shipping product."
      >
        <NavigationTree />
      </Section>

      <Section
        icon={<Network className="size-4" aria-hidden />}
        eyebrow="Data"
        title="Entity model"
        description="The objects PermitOps tracks and how they relate. The Project is the spine; permits hang off it; municipalities and people connect on both sides."
      >
        <EntityDiagram />
      </Section>

      <Section
        icon={<RouteIcon className="size-4" aria-hidden />}
        eyebrow="Reference"
        title="URL map"
        description="Every route in the prototype, the surface it owns, and its current implementation state."
      >
        <RoutesTable />
      </Section>
    </div>
  )
}

function Section({
  icon,
  eyebrow,
  title,
  description,
  children,
}: {
  icon: React.ReactNode
  eyebrow: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-5">
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {icon}
          {eyebrow}
        </div>
        <h2 className="font-heading text-xl font-semibold text-foreground">{title}</h2>
        <p className="max-w-3xl text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Navigation hierarchy — indented HTML tree
   ──────────────────────────────────────────────────────────────────────── */

type TreeNodeVariant = "root" | "section" | "page" | "view" | "detail" | "tab"

type TreeNode = {
  label: string
  note?: string
  variant: TreeNodeVariant
  default?: boolean
  children?: TreeNode[]
}

const navTree: TreeNode = {
  label: "PermitOps",
  variant: "root",
  children: [
    {
      label: "Workspace",
      variant: "section",
      children: [
        {
          label: "Projects",
          variant: "page",
          note: "default landing",
          children: [
            { label: "View All", variant: "view", default: true },
            { label: "+ New Project", variant: "view", note: "drawer" },
            {
              label: "Project Detail",
              variant: "detail",
              children: [
                { label: "Overview", variant: "tab", default: true },
                { label: "Permits (filtered to project)", variant: "tab" },
                { label: "Requirements (per AHJ)", variant: "tab" },
                { label: "Team", variant: "tab" },
              ],
            },
          ],
        },
        {
          label: "My Tasks",
          variant: "page",
          children: [
            { label: "All", variant: "tab", default: true },
            { label: "Today", variant: "tab" },
            { label: "Upcoming", variant: "tab" },
            { label: "Completed", variant: "tab" },
          ],
        },
        {
          label: "Permits",
          variant: "page",
          children: [
            { label: "Open", variant: "tab", default: true },
            { label: "Completed", variant: "tab" },
            {
              label: "Permit Detail",
              variant: "detail",
              note: "side panel",
              children: [
                { label: "Status + dates", variant: "tab" },
                { label: "Description (rich-text)", variant: "tab" },
                { label: "Activity & Comments", variant: "tab" },
                { label: "Forms", variant: "tab" },
              ],
            },
          ],
        },
        {
          label: "Requirements",
          variant: "page",
          note: "linked from a project / permit context",
        },
        {
          label: "Municipalities",
          variant: "page",
          children: [
            { label: "List", variant: "view", default: true },
            {
              label: "AHJ Detail",
              variant: "detail",
              note: "side panel",
              children: [
                { label: "Contact", variant: "tab" },
                { label: "Submission methods", variant: "tab" },
                { label: "Recent permits", variant: "tab" },
              ],
            },
          ],
        },
        {
          label: "Directory",
          variant: "page",
          children: [
            { label: "People", variant: "tab", default: true },
            { label: "Companies", variant: "tab" },
            { label: "Reviewers", variant: "tab" },
          ],
        },
      ],
    },
  ],
}

function NavigationTree() {
  return (
    <div className="rounded-2xl border bg-card p-6 sm:p-8">
      <TreeView node={navTree} isRoot />
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 text-xs text-muted-foreground">
        <LegendChip variant="root" label="Root" />
        <LegendChip variant="section" label="Section" />
        <LegendChip variant="page" label="Page (in sidebar)" />
        <LegendChip variant="view" label="View" />
        <LegendChip variant="detail" label="Detail / panel" />
        <LegendChip variant="tab" label="Tab" />
        <span className="italic">notes after a node = surface or context</span>
      </div>
    </div>
  )
}

function TreeView({ node, isRoot = false }: { node: TreeNode; isRoot?: boolean }) {
  return (
    <div>
      <NodePill node={node} isRoot={isRoot} />
      {node.children && node.children.length > 0 ? (
        <div className="mt-2 ml-4 space-y-2 border-l border-dashed border-border pl-5">
          {node.children.map((child, i) => (
            <TreeView key={child.label + i} node={child} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function NodePill({ node, isRoot }: { node: TreeNode; isRoot?: boolean }) {
  const styles = pillStyles(node.variant)
  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center gap-2",
        !isRoot &&
          "before:absolute before:top-1/2 before:-left-5 before:h-px before:w-4 before:-translate-y-1/2 before:bg-border before:content-['']",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border",
          styles.pill,
        )}
      >
        {node.label}
        {node.default ? (
          <span className="rounded-sm bg-foreground/10 px-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
            default
          </span>
        ) : null}
      </span>
      {node.note ? (
        <span className="text-xs text-muted-foreground italic">{node.note}</span>
      ) : null}
    </div>
  )
}

function LegendChip({
  variant,
  label,
}: {
  variant: TreeNodeVariant
  label: string
}) {
  const styles = pillStyles(variant)
  return (
    <span className="inline-flex items-center gap-2">
      <span className={cn("inline-block size-3 rounded-sm border", styles.swatch)} />
      <span>{label}</span>
    </span>
  )
}

function pillStyles(variant: TreeNodeVariant) {
  switch (variant) {
    case "root":
      return {
        pill: "border-primary bg-primary text-primary-foreground px-3 py-1.5 text-sm font-semibold",
        swatch: "border-primary bg-primary",
      }
    case "section":
      return {
        pill: "border-border bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-semibold",
        swatch: "border-border bg-secondary",
      }
    case "page":
      return {
        pill: "border-border bg-card text-foreground px-2.5 py-1 text-sm font-medium shadow-xs",
        swatch: "border-border bg-card",
      }
    case "view":
      return {
        pill: "border-border/70 bg-muted/60 text-foreground px-2 py-0.5 text-xs font-medium",
        swatch: "border-border/70 bg-muted/60",
      }
    case "tab":
      return {
        pill: "border-border/60 bg-background text-muted-foreground px-2 py-0.5 text-xs",
        swatch: "border-border/60 bg-background",
      }
    case "detail":
      return {
        pill: "border-primary/30 bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium",
        swatch: "border-primary/30 bg-primary/10",
      }
  }
}

/* ────────────────────────────────────────────────────────────────────────────
   Entity diagram (SVG) — unchanged
   ──────────────────────────────────────────────────────────────────────── */

const ENT_VIEW_W = 1040
const ENT_VIEW_H = 540

type EntityField = { name: string; type: string }

const projectFields: EntityField[] = [
  { name: "code", type: "string" },
  { name: "name", type: "string" },
  { name: "address", type: "Address" },
  { name: "status", type: "ProjectStatus" },
  { name: "types[]", type: "ProjectType" },
]

const permitFields: EntityField[] = [
  { name: "permitNumber", type: "string" },
  { name: "name", type: "string" },
  { name: "status", type: "PermitStatus" },
  { name: "tags[]", type: "string" },
  { name: "dates", type: "DateSet" },
]

const municipalityFields: EntityField[] = [
  { name: "name", type: "string" },
  { name: "jurisdictionType", type: "enum" },
  { name: "state", type: "string" },
]

const personFields: EntityField[] = [
  { name: "name", type: "string" },
  { name: "role", type: "string" },
  { name: "email", type: "string" },
]

const formFields: EntityField[] = [
  { name: "name", type: "string" },
  { name: "submissionRequired", type: "bool" },
  { name: "externalInputs", type: "bool" },
]

function EntityDiagram() {
  const project = { x: 60, y: 200, w: 220, h: 180 }
  const permit = { x: 380, y: 200, w: 220, h: 180 }
  const municipality = { x: 740, y: 30, w: 240, h: 150 }
  const person = { x: 380, y: 430, w: 220, h: 90 }
  const form = { x: 740, y: 230, w: 240, h: 150 }

  return (
    <div className="rounded-2xl border bg-card p-4 sm:p-6">
      <svg
        viewBox={`0 0 ${ENT_VIEW_W} ${ENT_VIEW_H}`}
        className="h-auto w-full"
        role="img"
        aria-labelledby="entity-diagram-title"
      >
        <title id="entity-diagram-title">PermitOps entity model</title>

        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
            markerUnits="userSpaceOnUse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--muted-foreground)" />
          </marker>
        </defs>

        <g
          fill="none"
          stroke="var(--muted-foreground)"
          strokeWidth={1.25}
          strokeLinecap="round"
        >
          <path
            d={`M ${project.x + project.w} ${project.y + project.h / 2} L ${permit.x} ${permit.y + permit.h / 2}`}
            markerEnd="url(#arrow)"
          />
          <path
            d={`M ${permit.x + permit.w} ${permit.y + permit.h / 2 - 20} L ${form.x} ${form.y + form.h / 2}`}
            markerEnd="url(#arrow)"
          />
          <path
            d={`M ${permit.x + permit.w / 2} ${permit.y} V ${municipality.y + municipality.h + 16} L ${municipality.x + 30} ${municipality.y + municipality.h}`}
            markerEnd="url(#arrow)"
          />
          <path
            d={`M ${project.x + project.w - 30} ${project.y} V ${municipality.y + municipality.h + 40} H ${municipality.x - 10} L ${municipality.x} ${municipality.y + municipality.h}`}
            markerEnd="url(#arrow)"
            strokeDasharray="4 3"
          />
          <path
            d={`M ${project.x + project.w / 2 - 40} ${project.y + project.h} V ${person.y - 14} H ${person.x + 60} L ${person.x + 60} ${person.y}`}
            markerEnd="url(#arrow)"
            strokeDasharray="4 3"
          />
          <path
            d={`M ${permit.x + permit.w / 2 + 40} ${permit.y + permit.h} V ${person.y - 14} H ${person.x + person.w - 60} L ${person.x + person.w - 60} ${person.y}`}
            markerEnd="url(#arrow)"
            strokeDasharray="4 3"
          />
        </g>

        <g fontSize={10.5} fill="var(--muted-foreground)">
          <LabelOnLine
            text="1  ◄ has many ►  N"
            x={(project.x + project.w + permit.x) / 2}
            y={project.y + project.h / 2 - 8}
          />
          <LabelOnLine
            text="1  ◄ has many ►  N"
            x={(permit.x + permit.w + form.x) / 2}
            y={permit.y + permit.h / 2 - 18}
          />
          <LabelOnLine
            text="N · issued by · 1"
            x={permit.x + permit.w / 2 + 8}
            y={(municipality.y + municipality.h + permit.y) / 2 - 6}
            anchor="start"
          />
          <LabelOnLine
            text="M · operating in · N"
            x={project.x + project.w - 30 - 6}
            y={(municipality.y + municipality.h + project.y) / 2 - 6}
            anchor="end"
          />
          <LabelOnLine
            text="M · team · N"
            x={project.x + project.w / 2 - 40 - 6}
            y={(project.y + project.h + person.y) / 2 + 2}
            anchor="end"
          />
          <LabelOnLine
            text="M · submitter / reviewer · N"
            x={permit.x + permit.w / 2 + 40 + 6}
            y={(permit.y + permit.h + person.y) / 2 + 2}
            anchor="start"
          />
        </g>

        <EntityCard {...project} title="Project" fields={projectFields} variant="spine" />
        <EntityCard {...permit} title="Permit" fields={permitFields} variant="spine" />
        <EntityCard {...municipality} title="Municipality (AHJ)" fields={municipalityFields} />
        <EntityCard {...person} title="Person" fields={personFields} compact />
        <EntityCard {...form} title="Required Form" fields={formFields} />
      </svg>
    </div>
  )
}

function LabelOnLine({
  text,
  x,
  y,
  anchor = "middle",
}: {
  text: string
  x: number
  y: number
  anchor?: "start" | "middle" | "end"
}) {
  return (
    <text x={x} y={y} textAnchor={anchor}>
      {text}
    </text>
  )
}

function EntityCard({
  x,
  y,
  w,
  h,
  title,
  fields,
  variant,
  compact,
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  fields: EntityField[]
  variant?: "spine"
  compact?: boolean
}) {
  const headerH = 36
  const accent = variant === "spine" ? "var(--primary)" : "var(--secondary)"
  const headerText = variant === "spine" ? "var(--primary-foreground)" : "var(--secondary-foreground)"
  const rowH = compact ? 16 : 18
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        ry={10}
        fill="var(--card)"
        stroke="var(--border)"
        strokeWidth={1}
      />
      <path
        d={`M ${x} ${y + 10}
            Q ${x} ${y} ${x + 10} ${y}
            H ${x + w - 10}
            Q ${x + w} ${y} ${x + w} ${y + 10}
            V ${y + headerH}
            H ${x}
            Z`}
        fill={accent}
      />
      <text
        x={x + 14}
        y={y + headerH / 2 + 5}
        fontSize={13}
        fontWeight={600}
        fill={headerText}
      >
        {title}
      </text>

      {fields.map((f, i) => {
        const ry = y + headerH + 14 + i * rowH
        return (
          <g key={f.name}>
            <text
              x={x + 14}
              y={ry}
              fontSize={11.5}
              fill="var(--foreground)"
              fontWeight={500}
            >
              {f.name}
            </text>
            <text
              x={x + w - 14}
              y={ry}
              fontSize={10.5}
              textAnchor="end"
              fill="var(--muted-foreground)"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            >
              {f.type}
            </text>
          </g>
        )
      })}
    </g>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   URL Map (shadcn Table)
   ──────────────────────────────────────────────────────────────────────── */

type RouteRow = {
  path: string
  surface: string
  description: string
  state: "Built" | "Stub" | "Modal"
}

const routes: RouteRow[] = [
  {
    path: "/projects",
    surface: "Workspace · Projects",
    description: "Searchable list of all projects with filters and pagination.",
    state: "Built",
  },
  {
    path: "/permits",
    surface: "Workspace · Permits",
    description:
      "Status-card dashboard with Open/Completed tabs; row click opens permit detail in a sheet.",
    state: "Built",
  },
  {
    path: "/requirements",
    surface: "Workspace · Project Requirements",
    description:
      "Per-permit requirements view — project questions, submission process, plan requirements, required forms.",
    state: "Built",
  },
  {
    path: "/tasks",
    surface: "Workspace · My Tasks",
    description: "Personal task inbox with priority, due dates, and per-task completion.",
    state: "Built",
  },
  {
    path: "/municipalities",
    surface: "Workspace · Municipalities",
    description:
      "AHJ directory with operational stats; row click opens contact + submission detail.",
    state: "Built",
  },
  {
    path: "/directory",
    surface: "Workspace · Directory",
    description: "People, companies, and reviewers organized into tabs.",
    state: "Built",
  },
  {
    path: "/notes/problem",
    surface: "Design Notes · Problem Statement",
    description: "Hero problem framing and the six key problems PermitOps solves.",
    state: "Built",
  },
  {
    path: "/notes/personas",
    surface: "Design Notes · Personas",
    description: "4 primary personas + 1 counter-persona with goals, pains, JTBD, and quotes.",
    state: "Built",
  },
  {
    path: "/notes/flows",
    surface: "Design Notes · Key Flows",
    description: "3 user journeys with surface chips and AI-agent attribution per step.",
    state: "Built",
  },
  {
    path: "/notes/sitemap",
    surface: "Design Notes · Sitemap",
    description: "Navigation hierarchy, entity model, and URL map (this page).",
    state: "Built",
  },
  {
    path: "/notes/ai-opportunities",
    surface: "Design Notes · AI Opportunities",
    description:
      "12 AI use cases plotted on a value × feasibility matrix, with detail cards per opportunity.",
    state: "Built",
  },
  {
    path: "/notes/ai-patterns",
    surface: "Design Notes · AI Patterns",
    description:
      "Interaction patterns for AI features — attribution, uncertainty, provenance, human-in-loop, and more.",
    state: "Built",
  },
  {
    path: "/notes/assumptions",
    surface: "Design Notes · Assumptions",
    description: "9 bets across Market / User / Technical / Design with confidence + evidence.",
    state: "Built",
  },
]

function RoutesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <Table>
        <TableHeader className="bg-muted/40">
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-xs font-medium text-muted-foreground">Path</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Surface</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Description</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">State</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routes.map((r) => (
            <TableRow key={r.path}>
              <TableCell className="font-mono text-xs">{r.path}</TableCell>
              <TableCell className="text-sm text-foreground">{r.surface}</TableCell>
              <TableCell className="max-w-[28rem] text-sm text-muted-foreground">
                {r.description}
              </TableCell>
              <TableCell>
                <StateBadge state={r.state} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function StateBadge({ state }: { state: RouteRow["state"] }) {
  if (state === "Built") {
    return (
      <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
        Built
      </Badge>
    )
  }
  if (state === "Modal") {
    return (
      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300">
        Modal
      </Badge>
    )
  }
  return (
    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
      Stub
    </Badge>
  )
}
