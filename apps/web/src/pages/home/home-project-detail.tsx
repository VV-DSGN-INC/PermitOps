import { Link, Navigate, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Calendar,
  ChefHat,
  ChevronRight,
  Clock4,
  Hammer,
  Layers,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  TreeDeciduous,
  Warehouse,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import {
  formatMoney,
  formatShortDate,
  homeStatusBlurb,
  homeStatusLabel,
  projects,
  type HomeContact,
  type HomePermit,
  type HomePermitStatus,
  type HomeProject,
  type ProjectPhoto,
  type ProjectPhotoKind,
} from "@/lib/home-mock"
import { useT } from "@/lib/home-i18n"

const ICONS: Record<string, LucideIcon> = {
  ChefHat,
  Bath,
  Warehouse,
  TreeDeciduous,
}

function getProjectIcon(name: string): LucideIcon {
  return ICONS[name] ?? ChefHat
}

// English fallbacks for the kind/status/photo-kind data keys. Localized labels
// are resolved via t(`data.kind.${kind}`, KIND_LABEL[kind]) etc.; these maps
// keep the English copy in one place.
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

const PHOTO_KIND_LABEL: Record<ProjectPhotoKind, string> = {
  progress: "In progress",
  reference: "Reference",
  inspiration: "Inspiration",
  existing: "Before",
}

const STAGE_ORDER: HomePermitStatus[] = [
  "not_started",
  "preparing",
  "submitted",
  "in_review",
  "approved",
  "inspections",
  "closed",
]

/**
 * One project. Mirrors the dashboard's reading order: who you are, where it
 * is, what it needs, who's helping, the numbers. Works for both active projects
 * (rich content) and planning-stage ones (mostly photos + scoping).
 */
export function HomeProjectDetailPage() {
  const t = useT()
  const { id } = useParams<{ id: string }>()
  const project = id ? projects.find((p) => p.id === id) : undefined
  if (!project) {
    return <Navigate to="/home" replace />
  }

  const Icon = getProjectIcon(project.icon)
  const isPlanning = project.status === "planning"

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24">
      <div className="mb-6 text-[14px]">
        <Link
          to="/home"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="size-3.5" />
          {t("project.back")}
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-start gap-4">
        <span className="bg-home-accent/15 text-home-accent inline-flex size-14 shrink-0 items-center justify-center rounded-2xl">
          <Icon className="size-7" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="border-home-border/70 bg-card text-muted-foreground inline-flex items-center rounded-full border px-2.5 py-0.5 text-[12.5px] font-medium tracking-[0.04em] uppercase">
              {t(`data.kind.${project.kind}`, KIND_LABEL[project.kind])}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[12.5px] font-medium",
                project.status === "active" &&
                  "bg-home-accent/15 text-home-accent",
                project.status === "planning" &&
                  "bg-muted text-muted-foreground",
                project.status === "completed" &&
                  "bg-emerald-100 text-emerald-700",
              )}
            >
              <span
                className={cn(
                  "inline-block size-1.5 rounded-full",
                  project.status === "active" && "bg-home-accent",
                  project.status === "planning" && "bg-muted-foreground/60",
                  project.status === "completed" && "bg-emerald-600",
                )}
              />
              {t(`data.pstatus.${project.status}`, STATUS_LABEL[project.status])}
            </span>
          </div>
          <h1 className="text-foreground/95 mt-3 text-[34px] leading-[1.05] font-semibold tracking-[-0.018em] sm:text-[40px]">
            {t(`data.project.${project.id}.name`, project.name)}
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl text-[17px] leading-relaxed">
            {t(`data.project.${project.id}.summary`, project.summary)}
          </p>
        </div>
      </div>

      {/* Photo strip */}
      {project.photos && project.photos.length > 0 ? (
        <section className="mt-10">
          <div className="text-muted-foreground text-[12px] font-semibold tracking-[0.1em] uppercase">
            {t("project.look.eyebrow")}
          </div>
          <h3 className="text-foreground mt-1.5 text-[22px] font-semibold tracking-tight">
            {isPlanning
              ? t("project.look.title_planning")
              : t("project.look.title_active")}
          </h3>
          <div className="mt-5 -mx-6 overflow-x-auto px-6">
            <div className="flex snap-x snap-mandatory gap-3 pb-1">
              {project.photos.map((photo) => (
                <PhotoTile key={photo.id} photo={photo} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Where it is now */}
      <Section
        eyebrow={t("project.state.eyebrow")}
        title={t("project.state.title")}
      >
        {isPlanning ? (
          <div className="border-home-border/70 bg-card rounded-2xl border p-6">
            <div className="flex items-start gap-3">
              <span className="bg-home-accent/15 text-home-accent mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                <Layers className="size-4" />
              </span>
              <div className="flex-1">
                <div className="text-foreground text-[17px] font-semibold tracking-tight">
                  {t("project.scoping.title")}
                </div>
                <p className="text-muted-foreground mt-1 text-[14.5px] leading-relaxed">
                  {t("project.scoping.body")}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Button
                    asChild
                    className="bg-foreground text-background hover:bg-foreground/90 h-9 gap-1.5 rounded-full px-4 text-[14px] font-medium"
                  >
                    <Link to="/home/ask">
                      <Sparkles className="size-3.5" />
                      {t("project.scoping.cta")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="border-home-border/70 bg-card rounded-2xl border p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-muted-foreground text-[12.5px] font-medium tracking-[0.1em] uppercase">
                  {t("project.state.stage")}
                </div>
                {typeof project.progress === "number" ? (
                  <div className="text-muted-foreground text-[13px] tabular-nums">
                    {t("project.state.complete", "{progress}% complete").replace(
                      "{progress}",
                      String(project.progress),
                    )}
                  </div>
                ) : null}
              </div>
              <div className="text-foreground mt-1.5 text-[22px] font-semibold tracking-tight">
                {project.stage}
              </div>
              {typeof project.progress === "number" ? (
                <div className="bg-border/70 mt-4 h-1.5 w-full overflow-hidden rounded-full">
                  <div
                    className="bg-home-accent h-full rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.contractor ? (
                <ContactCard
                  contact={project.contractor}
                  footer={
                    project.startedOn
                      ? t(
                          "project.state.contractor_since",
                          "On the project since {date}",
                        ).replace("{date}", formatShortDate(project.startedOn))
                      : t("project.state.contractor_pending")
                  }
                />
              ) : null}
              {project.municipalityHandler ? (
                <ContactCard
                  contact={project.municipalityHandler}
                  footer={t("project.state.reviewer_footer")}
                />
              ) : null}
            </div>
          </div>
        )}
      </Section>

      {/* Permits */}
      <Section
        eyebrow={t("project.permits.eyebrow")}
        title={t("project.permits.title")}
      >
        {project.permits.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.permits.map((permit) => (
              <PermitCard key={permit.id} permit={permit} />
            ))}
          </div>
        ) : (
          <div className="border-home-border/70 border-dashed bg-card rounded-2xl border p-6">
            <div className="flex items-start gap-3">
              <span className="bg-home-canvas border-home-border/70 mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border">
                <MessageCircle className="text-muted-foreground size-4" />
              </span>
              <div className="flex-1">
                <div className="text-foreground text-[16px] font-semibold tracking-tight">
                  {t("project.permits.empty.title")}
                </div>
                <p className="text-muted-foreground mt-1 text-[14.5px] leading-relaxed">
                  {t("project.permits.empty.body")}
                </p>
                <Link
                  to="/home/ask"
                  className="text-foreground mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium underline-offset-4 hover:underline"
                >
                  {t("project.permits.empty.cta")}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* At a glance */}
      <Section
        eyebrow={t("project.glance.eyebrow")}
        title={t("project.glance.title")}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            icon={<Hammer className="size-4" />}
            label={t("project.stat.budget")}
            value={formatMoney(project.budget)}
          />
          <Stat
            icon={<Layers className="size-4" />}
            label={t("project.stat.stage")}
            value={project.stage}
          />
          {isPlanning ? (
            <Stat
              icon={<Sparkles className="size-4" />}
              label={t("project.stat.status")}
              value={t("project.stat.scoping_ai")}
            />
          ) : (
            <>
              <Stat
                icon={<Clock4 className="size-4" />}
                label={t("project.stat.started")}
                value={
                  project.startedOn
                    ? formatShortDate(project.startedOn)
                    : "—"
                }
              />
              <Stat
                icon={<Calendar className="size-4" />}
                label={t("project.stat.target_finish")}
                value={
                  project.targetFinishDate
                    ? formatShortDate(project.targetFinishDate)
                    : "—"
                }
              />
            </>
          )}
        </div>
      </Section>
    </div>
  )
}

function PhotoTile({ photo }: { photo: ProjectPhoto }) {
  const t = useT()
  const caption = photo.caption
    ? t(`data.photo.${photo.id}.caption`, photo.caption)
    : ""
  return (
    <div
      className="group border-home-border/70 bg-card relative h-[220px] w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl border"
      style={photo.color ? { backgroundColor: photo.color } : undefined}
    >
      <img
        src={photo.url}
        alt={caption}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition group-hover:scale-105"
      />
      <div className="absolute top-2 left-2">
        <span className="bg-background/90 text-foreground inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium backdrop-blur">
          {t(`photo.kind.${photo.kind}`, PHOTO_KIND_LABEL[photo.kind])}
        </span>
      </div>
      {caption ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-12">
          <p className="line-clamp-2 text-[13px] font-medium text-white">
            {caption}
          </p>
        </div>
      ) : null}
    </div>
  )
}

function PermitCard({ permit }: { permit: HomePermit }) {
  const t = useT()
  return (
    <Link
      to={`/home/permit/${permit.id}`}
      className="group border-home-border/70 bg-card hover:border-home-accent/50 block rounded-2xl border p-5 transition hover:shadow-[0_4px_24px_-12px_rgb(0_0_0_/_0.1)]"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-foreground text-[16px] font-semibold tracking-tight">
            {t(`data.permit.${permit.id}.name`, permit.name)}
          </div>
          <StageDots current={permit.status} className="mt-2" />
        </div>
        <ChevronRight className="text-muted-foreground/60 group-hover:text-foreground mt-1 size-4 transition" />
      </div>
      <p className="text-muted-foreground mt-3 line-clamp-2 text-[14px] leading-snug">
        {t(`data.status.${permit.status}.blurb`, homeStatusBlurb[permit.status])}
        {permit.permitNumber ? ` · #${permit.permitNumber}` : ""}
      </p>
      <div className="border-home-border/60 mt-4 flex items-center justify-between border-t pt-3">
        <span className="text-muted-foreground text-[13px]">
          {permit.pulledBy === "contractor"
            ? t("project.permits.pulled_contractor", "Lopez pulls this")
            : t("project.permits.pulled_you", "You pull this")}
        </span>
        {permit.fee ? (
          <span className="text-foreground text-[13px] font-medium tabular-nums">
            {formatMoney(permit.fee)}
          </span>
        ) : null}
      </div>
    </Link>
  )
}

function StageDots({
  current,
  className,
}: {
  current: HomePermitStatus
  className?: string
}) {
  const t = useT()
  const currentIdx = STAGE_ORDER.indexOf(current)
  const labels: { key: HomePermitStatus }[] = [
    { key: "preparing" },
    { key: "submitted" },
    { key: "in_review" },
    { key: "approved" },
    { key: "inspections" },
    { key: "closed" },
  ]
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {labels.map((l) => {
        const idx = STAGE_ORDER.indexOf(l.key)
        const active = idx === currentIdx
        const past = idx < currentIdx
        return (
          <div key={l.key} className="flex items-center gap-1">
            <span
              className={cn(
                "size-1.5 rounded-full transition",
                past && "bg-home-accent/80",
                active && "bg-foreground ring-foreground/15 size-2 ring-4",
                !past && !active && "bg-border",
              )}
            />
            {active ? (
              <span className="text-foreground ml-1 text-[12.5px] font-medium">
                {t(`data.status.${current}.label`, homeStatusLabel[current])}
              </span>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function ContactCard({
  contact,
  footer,
}: {
  contact: HomeContact
  footer: string
}) {
  const toneMap = {
    indigo: "bg-indigo-100 text-indigo-700",
    amber: "bg-amber-100 text-amber-700",
    emerald: "bg-emerald-100 text-emerald-700",
    rose: "bg-rose-100 text-rose-700",
    slate: "bg-slate-200 text-slate-700",
  } as const
  return (
    <div className="border-home-border/70 bg-card flex items-start gap-4 rounded-2xl border p-5">
      <span
        className={cn(
          "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold tracking-tight",
          toneMap[contact.avatarTone],
        )}
      >
        {contact.initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-foreground text-[16px] font-semibold tracking-tight">
          {contact.name}
        </div>
        <div className="text-muted-foreground text-[13.5px]">{contact.role}</div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[13.5px]">
          {contact.phone ? (
            <span className="text-foreground/80 inline-flex items-center gap-1.5">
              <Phone className="text-muted-foreground size-3" />
              {contact.phone}
            </span>
          ) : null}
          {contact.email ? (
            <span className="text-foreground/80 inline-flex items-center gap-1.5">
              <Mail className="text-muted-foreground size-3" />
              {contact.email}
            </span>
          ) : null}
        </div>
        <div className="text-muted-foreground mt-2.5 text-[13px]">{footer}</div>
      </div>
    </div>
  )
}

function Section({
  eyebrow,
  title,
  hint,
  children,
}: {
  eyebrow: string
  title: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <div className="text-muted-foreground text-[12px] font-semibold tracking-[0.1em] uppercase">
        {eyebrow}
      </div>
      <h3 className="text-foreground mt-1.5 text-[22px] font-semibold tracking-tight">
        {title}
      </h3>
      {hint ? (
        <p className="text-muted-foreground mt-1 text-[14.5px]">{hint}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  )
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="border-home-border/70 bg-card rounded-2xl border p-4">
      <div className="text-muted-foreground flex items-center gap-2 text-[12.5px]">
        <span className="text-home-accent">{icon}</span>
        {label}
      </div>
      <div className="text-foreground mt-2 text-[20px] font-semibold tracking-tight tabular-nums">
        {value}
      </div>
    </div>
  )
}
