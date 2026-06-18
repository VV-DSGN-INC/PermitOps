import { Navigate, Route, Routes } from "react-router-dom"
import { AppShell } from "@/components/app-shell"
import { HomeShell } from "@/components/home/home-shell"
import { HomeLocaleProvider } from "@/lib/home-i18n"
import { PersonasPage } from "@/pages/personas"
import { FlowsPage } from "@/pages/flows"
import { SitemapPage } from "@/pages/sitemap"
import { ProblemPage } from "@/pages/problem"
import { AIOpportunitiesPage } from "@/pages/ai-opportunities"
import { AIPatternsPage } from "@/pages/ai-patterns"
import { TimelinePage } from "@/pages/timeline"
import { TasksPage } from "@/pages/tasks"
import { BoardPage } from "@/pages/board"
import { MembersPage } from "@/pages/members"
import { HomeWelcomePage } from "@/pages/home/home-welcome"
import { HomeDashboardPage } from "@/pages/home/home-dashboard"
import { HomePermitDetailPage } from "@/pages/home/home-permit-detail"
import { HomeProjectDetailPage } from "@/pages/home/home-project-detail"
import { HomeProjectsPage } from "@/pages/home/home-projects"
import { HomeAskPage } from "@/pages/home/home-ask"
import { HomeCalendarPage } from "@/pages/home/home-calendar"

export function App() {
  return (
    <Routes>
      <Route
        path="home"
        element={
          <HomeLocaleProvider>
            <HomeShell />
          </HomeLocaleProvider>
        }
      >
        <Route index element={<HomeDashboardPage />} />
        <Route path="welcome" element={<HomeWelcomePage />} />
        <Route path="projects" element={<HomeProjectsPage />} />
        <Route path="permit/:id" element={<HomePermitDetailPage />} />
        <Route path="project/:id" element={<HomeProjectDetailPage />} />
        <Route path="calendar" element={<HomeCalendarPage />} />
        <Route path="ask" element={<HomeAskPage />} />
      </Route>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/tasks" replace />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="team">
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="members" element={<MembersPage />} />
        </Route>
        <Route path="notes">
          <Route path="problem" element={<ProblemPage />} />
          <Route path="personas" element={<PersonasPage />} />
          <Route path="flows" element={<FlowsPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="ai-patterns" element={<AIPatternsPage />} />
          <Route path="ai-opportunities" element={<AIOpportunitiesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/tasks" replace />} />
      </Route>
    </Routes>
  )
}
