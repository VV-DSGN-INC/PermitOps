import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  MapPin,
  Sparkles,
} from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import {
  getCalendarEvents,
  HOME_TODAY_ISO,
  owner,
  projects,
  type CalendarEvent,
  type CalendarEventKind,
} from "@/lib/home-mock"
import { useT, useHomeLocale, type HomeLocale } from "@/lib/home-i18n"

/**
 * Map our HomeLocale to a BCP-47 tag for Intl date formatting. Cantonese has
 * no widely-supported spoken-locale data tag, so we use Traditional Chinese
 * (`zh-Hant`) for month/weekday names; Punjabi uses the India region so the
 * Gurmukhi script renders.
 */
const LOCALE_TO_BCP47: Record<HomeLocale, string> = {
  en: "en-CA",
  fr: "fr-CA",
  "zh-Yue": "zh-Hant",
  pa: "pa-IN",
  tl: "fil-PH",
  "zh-Hans": "zh-Hans",
  // Gitxsan has no Intl locale data — use Canadian English for date formatting.
  git: "en-CA",
  ru: "ru-RU",
  de: "de-DE",
  ko: "ko-KR",
}

/** Format a yyyy-mm-dd as a localized agenda day header (e.g. "Wed · May 28"). */
function formatAgendaDay(iso: string, bcp47: string): string {
  return new Date(iso + "T12:00:00Z").toLocaleDateString(bcp47, {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

/**
 * Homeowner calendar — an agenda list grouped by day instead of a month grid.
 * Calmer to read, easier on older eyes, and surfaces what's coming up next
 * without forcing the user to count squares.
 */

type KindFilter = "all" | CalendarEventKind
type ProjectFilter = "all" | string

/** The translate function returned by `useT`. */
type TFn = (key: string, fallback?: string) => string

const KIND_FILTERS: { key: KindFilter; tKey: string }[] = [
  { key: "all", tKey: "calendar.filter.all" },
  { key: "milestone", tKey: "calendar.filter.milestones" },
  { key: "inspection", tKey: "calendar.filter.inspections" },
  { key: "todo", tKey: "calendar.filter.todos" },
]

const KIND_META: Record<
  CalendarEventKind,
  { labelKey: string; iconBg: string; iconColor: string; Icon: typeof Sparkles }
> = {
  milestone: {
    labelKey: "calendar.kind.milestone",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    Icon: Sparkles,
  },
  inspection: {
    labelKey: "calendar.kind.inspection",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    Icon: CalendarCheck,
  },
  todo: {
    labelKey: "calendar.kind.todo",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-800",
    Icon: CircleDashed,
  },
}

export function HomeCalendarPage() {
  const t = useT()
  const { locale } = useHomeLocale()
  const bcp47 = LOCALE_TO_BCP47[locale]
  const [kindFilter, setKindFilter] = useState<KindFilter>("all")
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all")
  const [selectedDate, setSelectedDate] = useState<string>(HOME_TODAY_ISO)
  const [viewMonth, setViewMonth] = useState<Date>(() => {
    const [y, m] = HOME_TODAY_ISO.split("-").map(Number)
    return new Date(y!, (m ?? 1) - 1, 1)
  })

  const allEvents = useMemo(() => getCalendarEvents(), [])

  // Which projects actually have at least one event? Only show the project
  // filter row if there's more than one project in play.
  const projectsWithEvents = useMemo(() => {
    const ids = new Set(allEvents.map((e) => e.projectId))
    return projects.filter((p) => ids.has(p.id))
  }, [allEvents])

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      if (kindFilter !== "all" && e.kind !== kindFilter) return false
      if (projectFilter !== "all" && e.projectId !== projectFilter) return false
      return true
    })
  }, [allEvents, kindFilter, projectFilter])

  // Group by date, preserving sort order from the source.
  const grouped = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>()
    for (const e of filtered) {
      const list = map.get(e.date) ?? []
      list.push(e)
      map.set(e.date, list)
    }
    return Array.from(map.entries())
  }, [filtered])

  // For the month grid: per-date set of event kinds (used to render dots).
  const eventDatesByKind = useMemo(() => {
    const map = new Map<string, Set<CalendarEventKind>>()
    for (const e of filtered) {
      const set = map.get(e.date) ?? new Set<CalendarEventKind>()
      set.add(e.kind)
      map.set(e.date, set)
    }
    return map
  }, [filtered])

  const showProjectFilter = projectsWithEvents.length > 1

  function selectDate(date: string) {
    setSelectedDate(date)
    // Try the exact day first; if no events there, scroll to the next upcoming.
    const exact = document.getElementById(`day-${date}`)
    if (exact) {
      exact.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    const sortedDates = [...new Set(filtered.map((e) => e.date))].sort()
    const next = sortedDates.find((d) => d >= date) ?? sortedDates[sortedDates.length - 1]
    if (next) {
      document.getElementById(`day-${next}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  function jumpToToday() {
    const [y, m] = HOME_TODAY_ISO.split("-").map(Number)
    setViewMonth(new Date(y!, (m ?? 1) - 1, 1))
    selectDate(HOME_TODAY_ISO)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24">
      {/* Owner address chip — matches the dashboard treatment */}
      <div className="text-muted-foreground flex items-center gap-2 text-[13px]">
        <MapPin className="size-3.5" />
        {owner.address} · {owner.city}, {owner.state}
      </div>

      {/* Header band */}
      <div className="mt-2">
        <div className="text-muted-foreground text-[12.5px] font-semibold tracking-[0.1em] uppercase">
          {t("calendar.eyebrow")}
        </div>
        <h1 className="text-foreground/95 mt-2 text-[28px] leading-[1.08] font-semibold tracking-[-0.015em] sm:text-[34px] sm:leading-[1.05]">
          {t("calendar.h1")}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl text-[17px] leading-relaxed">
          {t("calendar.sub")}
        </p>
      </div>

      {/* Month grid */}
      <div className="mt-8">
        <MonthGrid
          viewMonth={viewMonth}
          onViewMonthChange={setViewMonth}
          eventDatesByKind={eventDatesByKind}
          selectedDate={selectedDate}
          onSelectDate={selectDate}
          onJumpToToday={jumpToToday}
          t={t}
          bcp47={bcp47}
        />
      </div>

      {/* Kind filter chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {KIND_FILTERS.map((f) => (
          <FilterChip
            key={f.key}
            active={kindFilter === f.key}
            onClick={() => setKindFilter(f.key)}
          >
            {t(f.tKey)}
          </FilterChip>
        ))}
      </div>

      {/* Project filter chips (optional) */}
      {showProjectFilter ? (
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterChip
            active={projectFilter === "all"}
            onClick={() => setProjectFilter("all")}
            tone="subtle"
          >
            {t("calendar.filter.allProjects")}
          </FilterChip>
          {projectsWithEvents.map((p) => (
            <FilterChip
              key={p.id}
              active={projectFilter === p.id}
              onClick={() => setProjectFilter(p.id)}
              tone="subtle"
            >
              {t(`data.project.${p.id}.name`, p.name)}
            </FilterChip>
          ))}
        </div>
      ) : null}

      {/* Agenda list */}
      <div className="mt-10">
        {grouped.length === 0 ? (
          <EmptyState
            t={t}
            onClear={() => {
              setKindFilter("all")
              setProjectFilter("all")
            }}
          />
        ) : (
          <div className="space-y-9">
            {grouped.map(([date, events]) => (
              <DayGroup
                key={date}
                date={date}
                events={events}
                t={t}
                bcp47={bcp47}
              />
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
  tone = "primary",
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  tone?: "primary" | "subtle"
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-home-border/70 inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium transition",
        active
          ? tone === "primary"
            ? "border-home-accent/50 bg-home-accent-soft text-foreground"
            : "bg-foreground/90 text-background border-transparent"
          : "bg-card text-foreground/80 hover:border-home-accent/40 hover:bg-home-accent-soft/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}

function DayGroup({
  date,
  events,
  t,
  bcp47,
}: {
  date: string
  events: CalendarEvent[]
  t: TFn
  bcp47: string
}) {
  const isToday = date === HOME_TODAY_ISO
  const isPast = date < HOME_TODAY_ISO
  const countKey =
    events.length === 1 ? "calendar.eventCount.one" : "calendar.eventCount.other"
  return (
    <div id={`day-${date}`} className="scroll-mt-24">
      <div className="bg-home-canvas/85 supports-[backdrop-filter]:bg-home-canvas/70 sticky top-16 z-10 -mx-2 mb-3 flex items-center gap-3 px-2 py-1.5 backdrop-blur">
        <h2
          className={cn(
            "text-[15px] font-semibold tracking-tight",
            isPast ? "text-muted-foreground" : "text-foreground",
          )}
        >
          {formatAgendaDay(date, bcp47)}
        </h2>
        {isToday ? (
          <span className="border-home-accent/40 bg-home-accent-soft text-home-accent inline-flex items-center rounded-full border px-2 py-0.5 text-[11.5px] font-semibold tracking-wide uppercase">
            {t("calendar.today")}
          </span>
        ) : null}
        <span className="bg-home-border/70 h-px flex-1" />
        <span className="text-muted-foreground text-[12.5px] tabular-nums">
          {t(countKey).replace("{n}", String(events.length))}
        </span>
      </div>
      <ul className="space-y-2.5">
        {events.map((e) => (
          <EventCard key={e.id} event={e} t={t} />
        ))}
      </ul>
    </div>
  )
}

function EventCard({ event, t }: { event: CalendarEvent; t: TFn }) {
  const meta = KIND_META[event.kind]
  const Icon = meta.Icon
  const project = projects.find((p) => p.id === event.projectId)
  const projectLabel = project
    ? t(`data.project.${project.id}.name`, project.name).toLowerCase()
    : null
  const isLinked = Boolean(event.permitId)

  const inner = (
    <div
      className={cn(
        "border-home-border/70 bg-card group flex items-start gap-4 rounded-2xl border p-4 transition sm:p-5",
        isLinked &&
          "hover:border-home-accent/50 hover:shadow-[0_4px_24px_-12px_rgb(0_0_0_/_0.1)]",
      )}
    >
      <span
        className={cn(
          "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
          meta.iconBg,
          meta.iconColor,
        )}
      >
        <Icon className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-foreground text-[16px] font-semibold tracking-tight">
          {t(`data.calevent.${event.id}.title`, event.title)}
        </div>
        {event.note ? (
          <p className="text-muted-foreground mt-1 line-clamp-2 text-[14px] leading-snug">
            {t(`data.calevent.${event.id}.note`, event.note)}
          </p>
        ) : null}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="text-muted-foreground text-[12px] font-semibold tracking-[0.06em] uppercase">
            {t(meta.labelKey)}
          </span>
          {projectLabel ? (
            <>
              <span className="text-muted-foreground/50 text-[12px]">·</span>
              <span className="border-home-border/70 bg-home-canvas text-foreground/80 inline-flex items-center rounded-full border px-2 py-0.5 text-[12px] lowercase">
                {projectLabel}
              </span>
            </>
          ) : null}
        </div>
      </div>
      {isLinked ? (
        <ChevronRight className="text-muted-foreground/60 group-hover:text-foreground mt-1 size-4 shrink-0 transition" />
      ) : null}
    </div>
  )

  if (isLinked && event.permitId) {
    return (
      <li>
        <Link to={`/home/permit/${event.permitId}`} className="block">
          {inner}
        </Link>
      </li>
    )
  }
  return <li>{inner}</li>
}

/* ────────────────────────────────────────────────────────────────────────────
   Month grid — full-width 7-col Sunday-start grid above the agenda.
   ──────────────────────────────────────────────────────────────────────── */

function MonthGrid({
  viewMonth,
  onViewMonthChange,
  eventDatesByKind,
  selectedDate,
  onSelectDate,
  onJumpToToday,
  t,
  bcp47,
}: {
  viewMonth: Date
  onViewMonthChange: (d: Date) => void
  eventDatesByKind: Map<string, Set<CalendarEventKind>>
  selectedDate: string
  onSelectDate: (date: string) => void
  onJumpToToday: () => void
  t: TFn
  bcp47: string
}) {
  const year = viewMonth.getFullYear()
  const month = viewMonth.getMonth() // 0-indexed
  const firstOfMonth = new Date(year, month, 1)
  const startDayOfWeek = firstOfMonth.getDay() // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = new Date(year, month, 0).getDate()

  const monthLabel = viewMonth.toLocaleDateString(bcp47, {
    month: "long",
    year: "numeric",
  })

  type Cell = { iso: string; dayOfMonth: number; inMonth: boolean }
  const cells: Cell[] = []

  // Leading days from previous month so the first row aligns to Sunday.
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const d = prevMonthDays - i
    const isoYear = month === 0 ? year - 1 : year
    const isoMonth = month === 0 ? 12 : month
    cells.push({
      iso: isoFor(isoYear, isoMonth, d),
      dayOfMonth: d,
      inMonth: false,
    })
  }
  // Current month days.
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      iso: isoFor(year, month + 1, d),
      dayOfMonth: d,
      inMonth: true,
    })
  }
  // Trailing days from next month — fill out 6 full weeks (42 cells).
  let nextDay = 1
  while (cells.length < 42) {
    const isoYear = month === 11 ? year + 1 : year
    const isoMonth = month === 11 ? 1 : month + 2
    cells.push({
      iso: isoFor(isoYear, isoMonth, nextDay),
      dayOfMonth: nextDay,
      inMonth: false,
    })
    nextDay++
  }

  // Localized Sunday-start weekday abbreviations, derived via Intl so they
  // follow the active locale. 2023-01-01 is a Sunday; format the next 7 days.
  const weekdayFmt = new Intl.DateTimeFormat(bcp47, { weekday: "short" })
  const dayNames = Array.from({ length: 7 }, (_, i) =>
    weekdayFmt.format(new Date(Date.UTC(2023, 0, 1 + i, 12))),
  )

  return (
    <div className="border-home-border/70 bg-card rounded-3xl border p-5 sm:p-6">
      {/* Month nav */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onViewMonthChange(new Date(year, month - 1, 1))}
          className="border-home-border/70 bg-home-canvas text-foreground/80 hover:bg-home-accent-soft/40 hover:text-foreground inline-flex size-9 items-center justify-center rounded-full border transition"
          aria-label={t("calendar.prevMonth")}
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="text-foreground flex-1 text-center text-[18px] font-semibold tracking-tight tabular-nums">
          {monthLabel}
        </div>
        <button
          type="button"
          onClick={() => onViewMonthChange(new Date(year, month + 1, 1))}
          className="border-home-border/70 bg-home-canvas text-foreground/80 hover:bg-home-accent-soft/40 hover:text-foreground inline-flex size-9 items-center justify-center rounded-full border transition"
          aria-label={t("calendar.nextMonth")}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Weekday header */}
      <div className="mt-5 grid grid-cols-7 text-center">
        {dayNames.map((name, i) => (
          <div
            key={i}
            className="text-muted-foreground pb-2 text-[12px] font-semibold tracking-wide uppercase"
          >
            {name}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map(({ iso, dayOfMonth, inMonth }) => {
          const kinds = eventDatesByKind.get(iso)
          const isToday = iso === HOME_TODAY_ISO
          const isSelected = iso === selectedDate
          const isPast = iso < HOME_TODAY_ISO

          return (
            <button
              key={iso}
              type="button"
              onClick={() => onSelectDate(iso)}
              className={cn(
                "relative flex min-h-[68px] flex-col rounded-xl border p-2 text-left transition sm:min-h-[76px]",
                isSelected
                  ? "border-home-accent bg-home-accent-soft ring-2 ring-home-accent/25 ring-offset-2 ring-offset-card"
                  : isToday
                    ? "border-home-accent/30 bg-home-canvas/60"
                    : "border-transparent hover:bg-home-accent-soft/35",
                !inMonth && "opacity-35",
              )}
              aria-pressed={isSelected}
              aria-label={iso}
            >
              <span
                className={cn(
                  "text-[16px] font-semibold tabular-nums",
                  isToday
                    ? "text-home-accent"
                    : isPast
                      ? "text-muted-foreground"
                      : "text-foreground",
                )}
              >
                {dayOfMonth}
              </span>
              {kinds && kinds.size > 0 ? (
                <div className="mt-auto flex items-center gap-1">
                  {(["milestone", "inspection", "todo"] as CalendarEventKind[])
                    .filter((k) => kinds.has(k))
                    .map((k) => (
                      <span
                        key={k}
                        className={cn(
                          "size-1.5 rounded-full",
                          k === "milestone" && "bg-violet-500",
                          k === "inspection" && "bg-sky-500",
                          k === "todo" && "bg-amber-500",
                        )}
                        aria-hidden
                      />
                    ))}
                </div>
              ) : null}
              {isToday && !isSelected ? (
                <span
                  className="bg-home-accent absolute top-1.5 right-1.5 size-1.5 rounded-full"
                  aria-hidden
                />
              ) : null}
            </button>
          )
        })}
      </div>

      {/* Legend + Today */}
      <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]">
        <LegendDot color="bg-violet-500" label={t("calendar.filter.milestones")} />
        <LegendDot color="bg-sky-500" label={t("calendar.filter.inspections")} />
        <LegendDot color="bg-amber-500" label={t("calendar.filter.todos")} />
        <button
          type="button"
          onClick={onJumpToToday}
          className="border-home-border/70 bg-home-canvas hover:bg-home-accent-soft/60 text-foreground/85 hover:text-foreground ml-auto inline-flex items-center rounded-full border px-3 py-1 text-[12.5px] font-medium transition"
        >
          {t("calendar.today")}
        </button>
      </div>
    </div>
  )
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("size-1.5 rounded-full", color)} aria-hidden />
      {label}
    </span>
  )
}

function isoFor(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

function EmptyState({ onClear, t }: { onClear: () => void; t: TFn }) {
  return (
    <div className="border-home-border/70 bg-card rounded-3xl border px-8 py-12 text-center">
      <span className="bg-home-accent-soft text-home-accent mx-auto inline-flex size-12 items-center justify-center rounded-2xl">
        <CalendarCheck className="size-6" />
      </span>
      <h3 className="text-foreground mt-4 text-[20px] font-semibold tracking-tight">
        {t("calendar.empty.title")}
      </h3>
      <p className="text-muted-foreground mx-auto mt-2 max-w-sm text-[14.5px] leading-relaxed">
        {t("calendar.empty.body")}
      </p>
      <button
        type="button"
        onClick={onClear}
        className="border-home-border/70 bg-home-canvas hover:bg-home-accent-soft/60 text-foreground mt-5 inline-flex items-center rounded-full border px-4 py-1.5 text-[13.5px] font-medium transition"
      >
        {t("calendar.empty.clear")}
      </button>
    </div>
  )
}
