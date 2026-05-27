import { Check, ExternalLink, X } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { requiredForms } from "@/lib/mock-data"

function BoolCell({ value }: { value: boolean }) {
  const Icon = value ? Check : X
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        value
          ? "text-emerald-600 dark:text-emerald-400"
          : "text-muted-foreground/50"
      )}
      aria-label={value ? "Yes" : "No"}
    >
      <Icon className="size-4" />
    </span>
  )
}

export function RequiredFormsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Required Forms</CardTitle>
        <CardDescription>
          Forms PermitOps will pre-fill from project data. External inputs flag
          forms that still need information from outside parties.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Form Name</TableHead>
              <TableHead className="text-center">Submission Required</TableHead>
              <TableHead className="text-center">External Inputs</TableHead>
              <TableHead className="pr-4 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requiredForms.map((form) => (
              <TableRow key={form.id}>
                <TableCell className="pl-4 font-medium text-foreground">
                  {form.name}
                </TableCell>
                <TableCell className="text-center">
                  <BoolCell value={form.submissionRequired} />
                </TableCell>
                <TableCell className="text-center">
                  <BoolCell value={form.externalInputs} />
                </TableCell>
                <TableCell className="pr-4 text-right">
                  <Button variant="outline" size="sm">
                    View
                    <ExternalLink />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
