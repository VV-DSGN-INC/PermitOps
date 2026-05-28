import { Check, Languages } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"
import {
  HOME_LOCALES,
  useHomeLocale,
  useT,
  type HomeLocale,
} from "@/lib/home-i18n"

// Short, single-character trigger labels — chosen to read at-a-glance from the
// top strip without crowding the avatar circle.
const SHORT_LABEL: Record<HomeLocale, string> = {
  en: "EN",
  fr: "FR",
  "zh-Yue": "粵",
  pa: "ਪੰ",
  tl: "TL",
  "zh-Hans": "中",
  git: "GX",
  ru: "RU",
  de: "DE",
  ko: "한",
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useHomeLocale()
  const t = useT()
  const short = SHORT_LABEL[locale]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("switcher.aria")}
        className="border-home-border/70 bg-card/70 hover:bg-foreground/[0.04] text-foreground inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
      >
        <Languages className="size-3.5 text-muted-foreground" />
        <span className="tabular-nums">{short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        {HOME_LOCALES.map((l) => {
          const active = l.code === locale
          return (
            <DropdownMenuItem
              key={l.code}
              onSelect={() => setLocale(l.code)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-3 text-[13.5px]",
                active && "font-medium",
              )}
            >
              <span>{l.native}</span>
              {active ? (
                <Check className="text-home-accent size-3.5" />
              ) : (
                <span className="text-muted-foreground text-[11.5px] tracking-[0.06em] uppercase">
                  {l.label}
                </span>
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
