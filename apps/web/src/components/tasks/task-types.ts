export type TaskPriority = "high" | "medium" | "low"

export type Task = {
  id: string
  title: string
  description: string
  priority: TaskPriority
  dueDate: string // ISO yyyy-mm-dd
  assignedById: string
  relatedPermitId?: string
  relatedProjectId?: string
  completed: boolean
  completedAt?: string // ISO when marked complete (for "this week" stat)
}
