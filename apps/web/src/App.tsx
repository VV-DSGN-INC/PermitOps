import { Navigate, Route, Routes } from "react-router-dom"
import { AppShell } from "@/components/app-shell"
import { ProjectsPage } from "@/pages/projects"
import { ProjectDetailPage } from "@/pages/project-detail"
import { PermitsPage } from "@/pages/permits"
import { RequirementsPage } from "@/pages/requirements"
import { PersonasPage } from "@/pages/personas"
import { FlowsPage } from "@/pages/flows"
import { SitemapPage } from "@/pages/sitemap"
import { ProblemPage } from "@/pages/problem"
import { AIOpportunitiesPage } from "@/pages/ai-opportunities"
import { AIPatternsPage } from "@/pages/ai-patterns"
import { AssumptionsPage } from "@/pages/assumptions"
import { TasksPage } from "@/pages/tasks"
import { DirectoryPage } from "@/pages/directory"
import { MunicipalitiesPage } from "@/pages/municipalities"

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/projects" replace />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        <Route path="permits" element={<PermitsPage />} />
        <Route path="requirements" element={<RequirementsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="municipalities" element={<MunicipalitiesPage />} />
        <Route path="directory" element={<DirectoryPage />} />
        <Route path="notes">
          <Route path="problem" element={<ProblemPage />} />
          <Route path="personas" element={<PersonasPage />} />
          <Route path="flows" element={<FlowsPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="ai-opportunities" element={<AIOpportunitiesPage />} />
          <Route path="ai-patterns" element={<AIPatternsPage />} />
          <Route path="assumptions" element={<AssumptionsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/projects" replace />} />
      </Route>
    </Routes>
  )
}
