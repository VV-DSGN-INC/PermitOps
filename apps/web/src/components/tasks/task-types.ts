export type TaskPriority = "high" | "medium" | "low"

export type TaskStatus =
  | "backlog"
  | "todo"
  | "in_progress"
  | "in_review"
  | "done"

export type Task = {
  id: string
  title: string
  description: string
  priority: TaskPriority
  dueDate: string // ISO yyyy-mm-dd
  status: TaskStatus
  assigneeId: string // person who owns the task (references people[].id)
  assignedById: string // person who delegated it
  completedAt?: string // ISO when moved to done (for "completed this week" stat)
}
