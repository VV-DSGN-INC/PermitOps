/**
 * Accent palette for AI pattern cards.
 *
 * Cycled through the 10 patterns to give the catalogue visual rhythm.
 * Maps to Tailwind 4 color vars so it works in both light and dark mode.
 */

export type AccentTone =
  | "blue"
  | "violet"
  | "amber"
  | "emerald"
  | "cyan"
  | "red"
  | "slate"

export const accentVar: Record<AccentTone, string> = {
  blue: "var(--color-blue-500)",
  violet: "var(--color-violet-500)",
  amber: "var(--color-amber-500)",
  emerald: "var(--color-emerald-500)",
  cyan: "var(--color-cyan-500)",
  red: "var(--color-red-500)",
  slate: "var(--color-slate-500)",
}

export const accentChip: Record<AccentTone, string> = {
  blue: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200",
  violet:
    "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-200",
  amber: "bg-amber-50 text-amber-800 dark:bg-amber-500/15 dark:text-amber-200",
  emerald:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-200",
  red: "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-200",
  slate:
    "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-200",
}

export const accentIconWrap: Record<AccentTone, string> = {
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
  violet:
    "bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
  amber:
    "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",
  emerald:
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
  red: "bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-300",
  slate:
    "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-200",
}

export const accentDot: Record<AccentTone, string> = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
  cyan: "bg-cyan-500",
  red: "bg-red-500",
  slate: "bg-slate-500",
}
