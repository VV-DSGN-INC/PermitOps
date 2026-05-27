import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const steps: string[] = [
  "Prepare your application packet (signed forms + plan set + payment authorization)",
  "Print two copies of each plan set; primary building forms on 8.5×14 paper, plans on minimum 11×17",
  "Visit the local Department of Building Inspection at the published address during operating hours and join the in-person queue",
  "Pay the permit fees and receive your approved permit + job card",
  "Submit any construction-related applications (street space, water access) after receiving the job card",
]

export function SubmissionProcessCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Submission Process</CardTitle>
        <CardDescription>
          Over-the-Counter Submission with Drawings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <span className="pt-0.5 text-sm leading-relaxed text-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
