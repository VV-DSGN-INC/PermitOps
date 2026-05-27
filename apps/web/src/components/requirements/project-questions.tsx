import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Switch } from "@workspace/ui/components/switch"
import { Separator } from "@workspace/ui/components/separator"
import { Label } from "@workspace/ui/components/label"

type Question = {
  id: string
  text: string
  defaultOn: boolean
}

const questions: Question[] = [
  {
    id: "q1",
    text: "Does your sign work require changes to the associated building?",
    defaultOn: true,
  },
  {
    id: "q2",
    text: "Is the sign just for advertising?",
    defaultOn: true,
  },
  {
    id: "q3",
    text: "Will the sign be illuminated?",
    defaultOn: false,
  },
  {
    id: "q4",
    text: "Are you working with a contractor?",
    defaultOn: true,
  },
  {
    id: "q5",
    text: "Are you working with an authorized agent?",
    defaultOn: true,
  },
]

export function ProjectQuestionsCard() {
  const [answers, setAnswers] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, q.defaultOn]))
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Project Questions</CardTitle>
        <CardDescription>
          Confirm scope so we can tailor the requirements to your project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          {questions.map((question, index) => (
            <div key={question.id}>
              {index > 0 ? <Separator /> : null}
              <div className="flex items-center justify-between gap-6 py-3.5">
                <Label
                  htmlFor={question.id}
                  className="cursor-pointer text-sm font-normal leading-snug text-foreground"
                >
                  {question.text}
                </Label>
                <Switch
                  id={question.id}
                  checked={answers[question.id] ?? false}
                  onCheckedChange={(value) =>
                    setAnswers((prev) => ({ ...prev, [question.id]: value }))
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
