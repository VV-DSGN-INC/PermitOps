// Per-persona accent color tokens. The counter-persona (persona-5) gets a slate
// treatment so it reads as deliberately different from the four primaries.

export type PersonaAccent = {
  /** CSS color value for the pull-quote left stripe (used in linear-gradient bg, not as border). */
  quoteStripe: string
  /** Avatar fallback background + foreground. */
  avatarBg: string
  avatarText: string
  /** Tinted badge near the persona name. */
  badgeBg: string
  badgeText: string
  /** Filled dots in the tech-comfort meter. */
  meterFilled: string
  /** Card ring color (subtle hue on the card edge). */
  cardRing: string
  /** Soft tinted background for the card header. */
  headerWash: string
  /** Human-readable label for the hue. */
  hueLabel: string
}

export const personaAccents: Record<string, PersonaAccent> = {
  "persona-1": {
    quoteStripe: "var(--color-amber-500)",
    avatarBg: "bg-amber-100 dark:bg-amber-500/20",
    avatarText: "text-amber-900 dark:text-amber-200",
    badgeBg: "bg-amber-100 dark:bg-amber-500/15",
    badgeText: "text-amber-800 dark:text-amber-300",
    meterFilled: "bg-amber-500",
    cardRing: "ring-amber-500/15",
    headerWash:
      "bg-gradient-to-br from-amber-50/60 via-transparent to-transparent dark:from-amber-500/5",
    hueLabel: "Amber",
  },
  "persona-2": {
    quoteStripe: "var(--color-blue-500)",
    avatarBg: "bg-blue-100 dark:bg-blue-500/20",
    avatarText: "text-blue-900 dark:text-blue-200",
    badgeBg: "bg-blue-100 dark:bg-blue-500/15",
    badgeText: "text-blue-800 dark:text-blue-300",
    meterFilled: "bg-blue-500",
    cardRing: "ring-blue-500/15",
    headerWash:
      "bg-gradient-to-br from-blue-50/60 via-transparent to-transparent dark:from-blue-500/5",
    hueLabel: "Blue",
  },
  "persona-3": {
    quoteStripe: "var(--color-violet-500)",
    avatarBg: "bg-violet-100 dark:bg-violet-500/20",
    avatarText: "text-violet-900 dark:text-violet-200",
    badgeBg: "bg-violet-100 dark:bg-violet-500/15",
    badgeText: "text-violet-800 dark:text-violet-300",
    meterFilled: "bg-violet-500",
    cardRing: "ring-violet-500/15",
    headerWash:
      "bg-gradient-to-br from-violet-50/60 via-transparent to-transparent dark:from-violet-500/5",
    hueLabel: "Violet",
  },
  "persona-4": {
    quoteStripe: "var(--color-emerald-500)",
    avatarBg: "bg-emerald-100 dark:bg-emerald-500/20",
    avatarText: "text-emerald-900 dark:text-emerald-200",
    badgeBg: "bg-emerald-100 dark:bg-emerald-500/15",
    badgeText: "text-emerald-800 dark:text-emerald-300",
    meterFilled: "bg-emerald-500",
    cardRing: "ring-emerald-500/15",
    headerWash:
      "bg-gradient-to-br from-emerald-50/60 via-transparent to-transparent dark:from-emerald-500/5",
    hueLabel: "Emerald",
  },
  "persona-5": {
    quoteStripe: "var(--color-slate-500)",
    avatarBg: "bg-slate-200 dark:bg-slate-500/25",
    avatarText: "text-slate-900 dark:text-slate-100",
    badgeBg: "bg-slate-200 dark:bg-slate-500/20",
    badgeText: "text-slate-800 dark:text-slate-200",
    meterFilled: "bg-slate-500",
    cardRing: "ring-slate-500/25",
    headerWash:
      "bg-gradient-to-br from-slate-100/80 via-transparent to-transparent dark:from-slate-500/10",
    hueLabel: "Slate",
  },
}

export function getPersonaAccent(id: string): PersonaAccent {
  return personaAccents[id] ?? personaAccents["persona-1"]!
}
