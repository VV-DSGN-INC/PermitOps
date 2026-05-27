import { RequirementsPageHeader } from "@/components/requirements/page-header"
import { ProjectQuestionsCard } from "@/components/requirements/project-questions"
import { SubmissionProcessCard } from "@/components/requirements/submission-process"
import { PlanRequirementsCard } from "@/components/requirements/plan-requirements"
import { SpecialSubmissionCard } from "@/components/requirements/special-submission"
import { RequiredFormsCard } from "@/components/requirements/required-forms"

export function RequirementsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-col gap-8 pb-12">
      <RequirementsPageHeader />
      <div className="flex flex-col gap-6">
        <ProjectQuestionsCard />
        <SubmissionProcessCard />
        <PlanRequirementsCard />
        <SpecialSubmissionCard />
        <RequiredFormsCard />
      </div>
    </div>
  )
}
