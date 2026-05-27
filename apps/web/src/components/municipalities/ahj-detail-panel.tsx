import {
  Building2,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  MapPin,
  Phone,
  Timer,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"
import { JurisdictionBadge } from "./jurisdiction-badge"
import { SubmissionMethodBadge } from "./submission-badge"
import { permitsForMunicipality } from "./ahj-metadata"
import type { MunicipalityRow } from "./ahj-metadata"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
      {children}
    </h4>
  )
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z")
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function AhjDetailPanel({
  row,
  open,
  onOpenChange,
}: {
  row: MunicipalityRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!row) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:max-w-[540px]" />
      </Sheet>
    )
  }

  const recentPermits = permitsForMunicipality(row.id).slice(0, 3)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-[540px]"
      >
        <SheetHeader className="shrink-0 border-b p-5 pr-12">
          <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Authority Having Jurisdiction
          </div>
          <SheetTitle className="flex items-center gap-2 text-xl leading-tight">
            <Building2 className="size-5 text-muted-foreground" />
            {row.name}
          </SheetTitle>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <JurisdictionBadge type={row.jurisdictionType} />
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3" />
              {row.state}
            </span>
            <SubmissionMethodBadge method={row.meta.submissionMethod} />
          </div>
        </SheetHeader>

        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-6 px-5 py-5">
            <section>
              <SectionHeading>Contact</SectionHeading>
              <div className="space-y-2 rounded-lg bg-muted/40 p-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 text-muted-foreground" />
                  <span className="text-foreground">{row.meta.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5 text-muted-foreground" />
                  <a
                    href={`mailto:${row.meta.email}`}
                    className="text-foreground hover:underline"
                  >
                    {row.meta.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="size-3.5 text-muted-foreground" />
                  <a
                    href={row.meta.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground hover:underline"
                  >
                    {row.meta.website.replace(/^https?:\/\//, "")}
                    <ExternalLink className="size-3 opacity-60" />
                  </a>
                </div>
              </div>
            </section>

            <section>
              <SectionHeading>Submission methods</SectionHeading>
              <ul className="space-y-1.5 text-sm">
                {row.meta.submissionChannels.map((channel) => (
                  <li
                    key={channel}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/60"
                    />
                    <span>{channel}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionHeading>Average review time</SectionHeading>
              <div className="flex items-baseline gap-2">
                <Timer className="size-4 self-center text-muted-foreground" />
                <span className="font-heading text-3xl font-semibold text-foreground tabular-nums">
                  {row.meta.averageReviewDays}
                </span>
                <span className="text-sm text-muted-foreground">
                  business days
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {row.meta.reviewNote}
              </p>
            </section>

            <Separator />

            <section>
              <SectionHeading>
                Recent permits in this AHJ
                <span className="ml-1 font-normal normal-case tracking-normal text-muted-foreground/70">
                  ({recentPermits.length})
                </span>
              </SectionHeading>
              {recentPermits.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No permits filed yet in this jurisdiction.
                </p>
              ) : (
                <ul className="space-y-1.5">
                  {recentPermits.map((permit) => (
                    <li
                      key={permit.id}
                      className="flex items-start gap-2 rounded-md border border-border/60 bg-card px-3 py-2"
                    >
                      <FileText className="mt-0.5 size-3.5 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-sm font-medium text-foreground">
                            {permit.name}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {permit.permitNumber}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {permit.tags.join(" · ") || "No tags"}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {row.meta.notes ? (
              <section>
                <SectionHeading>Notes</SectionHeading>
                <p
                  className={cn(
                    "rounded-lg border border-dashed border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground/80"
                  )}
                >
                  {row.meta.notes}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Last filing: {formatDate(row.meta.lastFiled)}
                </p>
              </section>
            ) : null}

            <div className="h-2" />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
