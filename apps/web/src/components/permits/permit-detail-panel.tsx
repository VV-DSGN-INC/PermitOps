import { Calendar, Plus } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet"
import { Avatar, AvatarFallback, AvatarGroup } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import {
  getMunicipality,
  getPerson,
  getProject,
} from "@/lib/mock-data"
import type { Permit } from "@/lib/mock-data"
import { PermitStatusPill } from "./permit-status-pill"
import { FakeRichToolbar } from "./fake-rich-toolbar"

type DateField = {
  key: keyof Permit
  label: string
  placeholder: string
}

const dateFields: DateField[] = [
  { key: "startDate", label: "Start Date", placeholder: "No start date" },
  { key: "applicationDate", label: "Application Date", placeholder: "No application date" },
  { key: "dueDate", label: "Due Date", placeholder: "No due date" },
  { key: "issuedDate", label: "Issued Date", placeholder: "No issued date" },
  { key: "closeOutDate", label: "Close Out Date", placeholder: "No close out date" },
  { key: "expirationDate", label: "Expiration Date", placeholder: "No expiration date" },
  { key: "billDate", label: "Bill Date", placeholder: "No bill date" },
]

function formatDate(value?: string): string | null {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function PropertyRow({
  label,
  children,
  align = "center",
}: {
  label: string
  children: React.ReactNode
  align?: "center" | "start"
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[140px_1fr] gap-3 py-2",
        align === "start" ? "items-start" : "items-center"
      )}
    >
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="min-w-0 text-sm text-foreground">{children}</div>
    </div>
  )
}

function DateRow({ label, value, placeholder }: { label: string; value?: string; placeholder: string }) {
  const formatted = formatDate(value)
  return (
    <PropertyRow label={label}>
      {formatted ? (
        <span className="inline-flex items-center gap-1.5 text-sm text-foreground">
          <Calendar className="size-3.5 text-muted-foreground" />
          {formatted}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/80">
          <Calendar className="size-3.5" />
          {placeholder}
        </span>
      )}
    </PropertyRow>
  )
}

function PersonAvatar({ id }: { id: string }) {
  const person = getPerson(id)
  if (!person) return null
  return (
    <Avatar size="sm">
      <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
        {person.initials}
      </AvatarFallback>
    </Avatar>
  )
}

export function PermitDetailPanel({
  permit,
  open,
  onOpenChange,
}: {
  permit: Permit | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!permit) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:max-w-[540px]" />
      </Sheet>
    )
  }

  const project = getProject(permit.projectId)
  const muni = getMunicipality(permit.issuingMunicipalityId)
  const submitter = getPerson(permit.submitterId)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-[540px]"
      >
        <SheetHeader className="shrink-0 border-b p-5 pr-12">
          <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {project?.name ?? "Permit detail"}
          </div>
          <SheetTitle className="text-xl leading-tight">{permit.name}</SheetTitle>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              {permit.permitNumber}
            </span>
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
        </SheetHeader>

        <ScrollArea className="flex-1 min-h-0">
          <div className="px-5 py-3">
            <div className="divide-y divide-border/60">
              <PropertyRow label="Status">
                <PermitStatusPill status={permit.status} size="lg" />
              </PropertyRow>

              <PropertyRow label="Permit Number">
                <span className="font-mono text-sm">{permit.permitNumber}</span>
              </PropertyRow>

              <PropertyRow label="Issuing Municipality">
                <span>{muni?.name ?? "—"}</span>
              </PropertyRow>

              <PropertyRow label="Submitter">
                {submitter ? (
                  <div className="flex items-center gap-2">
                    <PersonAvatar id={submitter.id} />
                    <div className="leading-tight">
                      <div className="text-sm text-foreground">{submitter.name}</div>
                      <div className="text-xs text-muted-foreground">{submitter.role}</div>
                    </div>
                  </div>
                ) : (
                  <span className="text-muted-foreground">Unassigned</span>
                )}
              </PropertyRow>

              <PropertyRow label="Assignees">
                <div className="flex items-center gap-2">
                  {permit.assigneeIds.length > 0 ? (
                    <AvatarGroup>
                      {permit.assigneeIds.map((id) => (
                        <PersonAvatar key={id} id={id} />
                      ))}
                    </AvatarGroup>
                  ) : (
                    <span className="text-sm text-muted-foreground">No assignees</span>
                  )}
                  <Button
                    variant="outline"
                    size="icon-xs"
                    className="ml-1 rounded-full"
                    aria-label="Add assignee"
                  >
                    <Plus />
                  </Button>
                </div>
              </PropertyRow>

              <PropertyRow label="Municipal Reviewers">
                <div className="flex items-center gap-2">
                  {permit.reviewerIds.length > 0 ? (
                    <AvatarGroup>
                      {permit.reviewerIds.map((id) => (
                        <PersonAvatar key={id} id={id} />
                      ))}
                    </AvatarGroup>
                  ) : (
                    <span className="text-sm text-muted-foreground">No reviewers yet</span>
                  )}
                  <Button
                    variant="outline"
                    size="icon-xs"
                    className="ml-1 rounded-full"
                    aria-label="Add reviewer"
                  >
                    <Plus />
                  </Button>
                </div>
              </PropertyRow>

              {dateFields.map((field) => (
                <DateRow
                  key={field.key}
                  label={field.label}
                  value={permit[field.key] as string | undefined}
                  placeholder={field.placeholder}
                />
              ))}
            </div>

            <div className="mt-6">
              <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Description
              </h4>
              <div className="overflow-hidden rounded-lg">
                <FakeRichToolbar />
                <Textarea
                  defaultValue={permit.description ?? ""}
                  placeholder="Description..."
                  className="min-h-32 rounded-t-none border-t-0"
                />
              </div>
            </div>

            <div className="h-6" />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
