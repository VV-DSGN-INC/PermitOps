import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  Bath,
  ChefHat,
  FolderHeart,
  MapPin,
  TreeDeciduous,
  Warehouse,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import {
  formatMoney,
  owner,
  projects,
  type HomeProject,
} from "@/lib/home-mock"
import { useT } from "@/lib/home-i18n"

// Lucide icon lookup — kept in sync with the dashboard and project detail pages
// so the same `project.icon` string resolves consistently.
const ICONS: Record<string, LucideIcon> = {
  ChefHat,
  Bath,
  Warehouse,
  TreeDeciduous,
}

function getProjectIcon(name: string): LucideIcon {
  return ICONS[name] ?? ChefHat
}

// English fallbacks for the kind/status data keys. The localized label is
// resolved via t(`data.kind.${kind}`, KIND_LABEL[kind]); the map keeps the
// English copy in one place.
const KIND_LABEL: Record<HomeProject["kind"], string> = {
  renovation: "Renovation",
  addition: "Addition",
  new_build: "New build",
  outdoor: "Outdoor",
}

const STATUS_LABEL: Record<HomeProject["status"], string> = {
  planning: "Planning",
  active: "Active",
  completed: "Completed",
}

type StatusFilter = "all" | "active" | "planning"

// Filter chips. `labelKey`/`fallback` feed t() so the chip text localizes.
const STATUS_FILTERS: {
  key: StatusFilter
  labelKey: string
  fallback: string
}[] = [
  { key: "all", labelKey: "projects.filter.all", fallback: "All" },
  { key: "active", labelKey: "projects.filter.active", fallback: "Active" },
  {
    key: "planning",
    labelKey: "projects.filter.planning",
    fallback: "Planning",
  },
]

function permitsDoneCount(project: HomeProject): number {
  return project.permits.filter(
    (p) => p.status === "approved" || p.status === "closed",
  ).length
}

/**
 * Index of every project the homeowner is working on. Calmer companion to the
 * dashboard — instead of leading with the featured project, lay all of them
 * out side-by-side with a hero photo each and a single click into the detail
 * page.
 */
export function HomeProjectsPage() {
  const t = useT()
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")

  const filtered = useMemo(() => {
    if (statusFilter === "all") return projects
    return projects.filter((p) => p.status === statusFilter)
  }, [statusFilter])

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24">
      {/* Owner address chip — matches dashboard + calendar */}
      <div className="text-muted-foreground flex items-center gap-2 text-[13px]">
        <MapPin className="size-3.5" />
        {owner.address} · {owner.city}, {owner.state}
      </div>

      {/* Header */}
      <div className="mt-2">
        <div className="text-muted-foreground text-[12.5px] font-semibold tracking-[0.1em] uppercase">
          {t("projects.eyebrow")}
        </div>
        <h1 className="text-foreground/95 mt-2 text-[28px] leading-[1.08] font-semibold tracking-[-0.015em] sm:text-[34px] sm:leading-[1.05]">
          {t("projects.title")}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl text-[17px] leading-relaxed">
          {t("projects.sub")}
        </p>
      </div>

      {/* Status filter chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {STATUS_FILTERS.map((f) => (
          <FilterChip
            key={f.key}
            active={statusFilter === f.key}
            onClick={() => setStatusFilter(f.key)}
          >
            {t(f.labelKey, f.fallback)}
          </FilterChip>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState onClear={() => setStatusFilter("all")} />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-home-border/70 inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium transition",
        active
          ? "border-home-accent/50 bg-home-accent-soft text-foreground"
          : "bg-card text-foreground/80 hover:border-home-accent/40 hover:bg-home-accent-soft/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}

function ProjectCard({ project }: { project: HomeProject }) {
  const t = useT()
  const Icon = getProjectIcon(project.icon)
  const firstPhoto = project.photos?.[0]
  const totalPermits = project.permits.length
  const doneCount = permitsDoneCount(project)

  return (
    <Link to={`/home/project/${project.id}`} className="group block">
      <article className="border-home-border/70 bg-card overflow-hidden rounded-3xl border transition hover:border-home-accent/50 hover:shadow-[0_4px_24px_-12px_rgb(0_0_0_/_0.1)]">
        {/* Hero */}
        <div className="relative aspect-[16/9] overflow-hidden bg-home-canvas">
          {firstPhoto ? (
            <img
              src={firstPhoto.url}
              alt={t(
                `data.photo.${firstPhoto.id}.caption`,
                firstPhoto.caption ??
                  t(`data.project.${project.id}.name`, project.name),
              )}
              loading="lazy"
              style={
                firstPhoto.color
                  ? { backgroundColor: firstPhoto.color }
                  : undefined
              }
              className="absolute inset-0 size-full object-cover transition group-hover:scale-105"
            />
          ) : (
            <div className="from-home-accent-soft/70 via-home-canvas to-home-canvas absolute inset-0 flex items-center justify-center bg-gradient-to-br">
              <span className="bg-home-accent/15 text-home-accent inline-flex size-16 items-center justify-center rounded-2xl">
                <Icon className="size-8" />
              </span>
            </div>
          )}
          {/* Status badge */}
          <span className="bg-background/90 absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium backdrop-blur">
            <StatusDot status={project.status} />
            {t(`data.pstatus.${project.status}`, STATUS_LABEL[project.status])}
          </span>
          {/* Featured pill */}
          {project.featured ? (
            <span className="bg-home-accent text-home-accent-foreground absolute top-3 right-3 inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-semibold">
              {t("projects.featured")}
            </span>
          ) : null}
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="bg-home-accent/15 text-home-accent inline-flex size-6 items-center justify-center rounded-md">
              <Icon className="size-3.5" />
            </span>
            <span className="text-muted-foreground text-[12.5px] font-semibold tracking-[0.06em] uppercase">
              {t(`data.kind.${project.kind}`, KIND_LABEL[project.kind])}
            </span>
          </div>
          <h2 className="text-foreground mt-2 text-[22px] font-semibold tracking-tight">
            {t(`data.project.${project.id}.name`, project.name)}
          </h2>
          <p className="text-muted-foreground mt-2 line-clamp-2 text-[15px] leading-relaxed">
            {t(`data.project.${project.id}.summary`, project.summary)}
          </p>
          <div className="border-home-border/60 mt-5 flex items-center justify-between border-t pt-4">
            <div className="text-muted-foreground text-[13px]">
              {totalPermits > 0
                ? t("projects.permits_done", "{done} of {total} permits done")
                    .replace("{done}", String(doneCount))
                    .replace("{total}", String(totalPermits))
                : t("projects.not_scoped")}
            </div>
            <span className="text-foreground/85 group-hover:text-foreground text-[13px] font-medium tabular-nums">
              {formatMoney(project.budget)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

function StatusDot({ status }: { status: HomeProject["status"] }) {
  return (
    <span
      className={cn(
        "inline-block size-1.5 rounded-full",
        status === "active" && "bg-emerald-500",
        status === "planning" && "bg-amber-500",
        status === "completed" && "bg-slate-500",
      )}
      aria-hidden
    />
  )
}

function EmptyState({ onClear }: { onClear: () => void }) {
  const t = useT()
  return (
    <div className="border-home-border/70 bg-card rounded-3xl border px-8 py-12 text-center">
      <span className="bg-home-accent-soft text-home-accent mx-auto inline-flex size-12 items-center justify-center rounded-2xl">
        <FolderHeart className="size-6" />
      </span>
      <h3 className="text-foreground mt-4 text-[20px] font-semibold tracking-tight">
        {t("projects.empty.title")}
      </h3>
      <p className="text-muted-foreground mx-auto mt-2 max-w-sm text-[14.5px] leading-relaxed">
        {t("projects.empty.sub")}
      </p>
      <button
        type="button"
        onClick={onClear}
        className="border-home-border/70 bg-home-canvas hover:bg-home-accent-soft/60 text-foreground mt-5 inline-flex items-center rounded-full border px-4 py-1.5 text-[13.5px] font-medium transition"
      >
        {t("projects.empty.show_all")}
      </button>
    </div>
  )
}

