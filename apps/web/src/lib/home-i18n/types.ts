/**
 * Shared types for the homeowner-edition i18n.
 * Split out so per-surface string modules can import the type without a
 * circular dependency on the provider in index.tsx.
 */

export type HomeLocale =
  | "en"
  | "fr"
  | "zh-Yue"
  | "pa"
  | "tl"
  | "zh-Hans"
  | "git"
  | "ru"
  | "de"
  | "ko"

/**
 * A per-surface dictionary. Partial so a module can ship a subset of locales —
 * any missing locale/key falls back to English via `useT`. Lets new languages
 * be added incrementally without breaking the build.
 */
export type LocaleMessages = Partial<Record<HomeLocale, Record<string, string>>>

export const HOME_LOCALE_CODES: HomeLocale[] = [
  "en",
  "fr",
  "zh-Yue",
  "pa",
  "tl",
  "zh-Hans",
  "git",
  "ru",
  "de",
  "ko",
]

export const HOME_LOCALES: { code: HomeLocale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "fr", label: "Français", native: "Français" },
  { code: "zh-Yue", label: "Cantonese", native: "粵語" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "tl", label: "Tagalog", native: "Tagalog" },
  { code: "zh-Hans", label: "Mandarin", native: "普通话" },
  { code: "git", label: "Gitxsan", native: "Gitxsanimx̱" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "ko", label: "Korean", native: "한국어" },
]
