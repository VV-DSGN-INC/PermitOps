import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import {
  Home as HomeIcon,
  HousePlug,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { renovation } from "@/lib/home-mock"

/**
 * The Home edition deliberately drops the sidebar. Homeowners only have one
 * renovation at a time, so a portfolio-style nav adds friction. Instead a calm
 * top strip with three places: Home, Ask, and the avatar/account.
 */
export function HomeShell() {
  const location = useLocation()
  const isWelcome = location.pathname.endsWith("/welcome")

  return (
    <TooltipProvider delayDuration={200}>
      <div className="bg-home-canvas text-foreground min-h-screen">
        <header className="border-home-border/60 sticky top-0 z-30 border-b bg-home-canvas/85 backdrop-blur supports-[backdrop-filter]:bg-home-canvas/70">
          <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-6">
            <Link to="/home" className="flex items-center gap-2.5">
              <span className="bg-primary text-primary-foreground inline-flex size-9 items-center justify-center rounded-xl shadow-sm">
                <HousePlug className="size-4.5" strokeWidth={2.25} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                PermitOps <span className="text-muted-foreground/90">Home</span>
              </span>
            </Link>

            {!isWelcome ? (
              <nav className="ml-2 hidden gap-1 sm:flex">
                <HomeNavLink to="/home" icon={<HomeIcon className="size-4" />}>
                  Home
                </HomeNavLink>
                <HomeNavLink
                  to="/home/ask"
                  icon={<MessageCircle className="size-4" />}
                >
                  Ask
                </HomeNavLink>
              </nav>
            ) : null}

            <div className="ml-auto flex items-center gap-3">
              {!isWelcome ? (
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="hidden gap-2 rounded-full text-[13px] sm:flex"
                >
                  <Link to="/home/ask">
                    <Sparkles className="size-3.5" />
                    Ask AI
                  </Link>
                </Button>
              ) : null}
              <Link
                to="/home"
                className="border-home-border/70 bg-card/70 inline-flex size-9 items-center justify-center rounded-full border text-[12px] font-semibold tracking-tight"
                title={renovation.ownerName}
              >
                {renovation.ownerInitials}
              </Link>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </TooltipProvider>
  )
}

function HomeNavLink({
  to,
  icon,
  children,
}: {
  to: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <NavLink to={to} end>
      {({ isActive }) => (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium transition",
            isActive
              ? "bg-foreground/90 text-background"
              : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground",
          )}
        >
          {icon}
          {children}
        </span>
      )}
    </NavLink>
  )
}
