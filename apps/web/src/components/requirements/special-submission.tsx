import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function SpecialSubmissionCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Special Submission</CardTitle>
        <CardDescription>
          Extra documents required because of who is filing on the project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-foreground">
          Signed letter from the property owner authorizing the submission by a
          third-party agent. Letter must be dated within 90 days of submission
          and reference the project address.
        </p>
      </CardContent>
    </Card>
  )
}
