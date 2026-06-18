import { useMemo } from "react"
import { people } from "@/lib/mock-data"
import { useTasks } from "@/lib/tasks-store"
import { MemberCard } from "@/components/members/member-card"

// Per-person task counts derived live from the shared store.
//   active    = tasks whose status is "todo" or "in_progress"
//   inReview  = tasks whose status is "in_review"
type MemberCounts = { active: number; inReview: number }

export function MembersPage() {
  const allTasks = useTasks()

  const countsByPerson = useMemo(() => {
    const counts = new Map<string, MemberCounts>()
    for (const task of allTasks) {
      const entry = counts.get(task.assigneeId) ?? { active: 0, inReview: 0 }
      if (task.status === "todo" || task.status === "in_progress") {
        entry.active += 1
      } else if (task.status === "in_review") {
        entry.inReview += 1
      }
      counts.set(task.assigneeId, entry)
    }
    return counts
  }, [allTasks])

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Members
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The team and what&apos;s on each plate.
        </p>
      </div>

      {/* Directory grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => {
          const counts = countsByPerson.get(person.id) ?? {
            active: 0,
            inReview: 0,
          }
          return (
            <MemberCard
              key={person.id}
              person={person}
              active={counts.active}
              inReview={counts.inReview}
            />
          )
        })}
      </div>
    </div>
  )
}
