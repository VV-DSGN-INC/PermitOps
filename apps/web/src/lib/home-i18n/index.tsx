import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import {
  HOME_LOCALE_CODES,
  HOME_LOCALES,
  type HomeLocale,
  type LocaleMessages,
} from "./types"
import { common } from "./strings/common"
import { welcome } from "./strings/welcome"
import { dashboard } from "./strings/dashboard"
import { calendar } from "./strings/calendar"
import { projects } from "./strings/projects"
import { permit } from "./strings/permit"

/**
 * Demo-grade i18n for the homeowner edition, split into per-surface modules so
 * the dictionary can grow without one giant file. Each surface owns its keys;
 * this index merges them into one flat lookup per locale. `useT` falls back
 * locale → English → the key itself, so a missing translation degrades to
 * English rather than blanking out.
 */

export { HOME_LOCALES, type HomeLocale }

const STORAGE_KEY = "permitops:home-locale"

// Merge every surface dictionary into a single per-locale map.
const surfaces: LocaleMessages[] = [
  common,
  welcome,
  dashboard,
  calendar,
  projects,
  permit,
]

// Merged result is complete (one entry per locale code), so type it as a full
// Record even though each source surface is Partial.
const messages: Record<HomeLocale, Record<string, string>> = HOME_LOCALE_CODES.reduce(
  (acc, loc) => {
    acc[loc] = Object.assign({}, ...surfaces.map((s) => s[loc] ?? {}))
    return acc
  },
  {} as Record<HomeLocale, Record<string, string>>,
)

type LocaleCtx = { locale: HomeLocale; setLocale: (l: HomeLocale) => void }

const LocaleContext = createContext<LocaleCtx>({
  locale: "en",
  setLocale: () => {},
})

export function HomeLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<HomeLocale>(() => {
    if (typeof window === "undefined") return "en"
    const stored = window.localStorage.getItem(STORAGE_KEY) as HomeLocale | null
    return stored && HOME_LOCALES.some((l) => l.code === stored) ? stored : "en"
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale)
    }
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale: setLocaleState }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useHomeLocale() {
  return useContext(LocaleContext)
}

/**
 * Chrome + data lookup. Pass a key; get the localized string.
 * For data rendered from mock content, pass the English value as `fallback`
 * so untranslated data still reads correctly:
 *   t(`data.permit.${id}.name`, permit.name)
 */
export function useT() {
  const { locale } = useHomeLocale()
  return (key: string, fallback?: string): string =>
    messages[locale]?.[key] ?? messages.en?.[key] ?? fallback ?? key
}
