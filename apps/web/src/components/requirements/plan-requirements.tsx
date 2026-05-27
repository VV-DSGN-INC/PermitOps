import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"

type PlanItem = {
  term: string
  description: string
  conditional?: string
}

const items: PlanItem[] = [
  { term: "Plot Plans", description: "Location of work on the lot" },
  { term: "Elevations", description: "Front of building" },
  { term: "Sections", description: "Front of building" },
  { term: "Photos", description: "Front facade" },
  {
    term: "Electrical plan",
    description: "Wiring and load schedule for the sign circuit",
    conditional: "required if illuminated",
  },
  {
    term: "Structural plan",
    description: "Stamped engineering for sign mounting and wind loads",
    conditional:
      "required if doing structural work or adding/changing a standalone sign",
  },
]

export function PlanRequirementsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Plan Requirements</CardTitle>
        <CardDescription>
          Drawings and supporting documents the reviewer expects to see in your
          plan set.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col divide-y divide-border">
          {items.map((item) => (
            <div
              key={item.term}
              className="grid grid-cols-1 gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[200px_1fr] sm:gap-4"
            >
              <dt className="flex flex-wrap items-center gap-2 text-sm font-medium text-foreground">
                {item.term}
                {item.conditional ? (
                  <Badge
                    variant="secondary"
                    className="border-0 bg-amber-100 text-[10px] font-medium text-amber-800 dark:bg-amber-500/15 dark:text-amber-300"
                  >
                    {item.conditional}
                  </Badge>
                ) : null}
              </dt>
              <dd className="text-sm text-muted-foreground">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}
