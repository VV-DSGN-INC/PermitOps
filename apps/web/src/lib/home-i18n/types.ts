/**
 * Shared types for the homeowner-edition i18n.
 * Split out so per-surface string modules can import the type without a
 * circular dependency on the provider in index.tsx.
 */

export type HomeLocale = "en" | "fr" | "zh-Yue" | "pa"

/** A per-surface dictionary: every locale maps a flat key → translated string. */
export type LocaleMessages = Record<HomeLocale, Record<string, string>>

export const HOME_LOCALE_CODES: HomeLocale[] = ["en", "fr", "zh-Yue", "pa"]

export const HOME_LOCALES: { code: HomeLocale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "fr", label: "Français", native: "Français" },
  { code: "zh-Yue", label: "Cantonese", native: "粵語" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
]
