import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

/**
 * Demo-grade i18n for the homeowner edition. Only a small, hand-picked surface
 * (the welcome screen + the dashboard hero) is translated; everything else
 * gracefully falls back to English. Not intended as a replacement for a real
 * i18n stack — sized for a VC/interview prototype.
 */

export type HomeLocale = "en" | "fr" | "zh-Yue" | "pa"

export const HOME_LOCALES: { code: HomeLocale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "fr", label: "Français", native: "Français" },
  { code: "zh-Yue", label: "Cantonese", native: "粵語" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
]

const STORAGE_KEY = "permitops:home-locale"

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

const messages: Record<HomeLocale, Record<string, string>> = {
  en: {
    "welcome.eyebrow": "Let’s set up your renovation",
    "welcome.h1": "Tell me about the project, in your own words.",
    "welcome.sub":
      "No forms, no jargon. I’ll figure out which permits you need, who pulls them, and what Burnaby will ask for. You stay in the loop the whole way.",
    "welcome.where.label": "Where is the work happening?",
    "welcome.where.helper":
      "Your address — I’ll figure out the right city and zoning automatically.",
    "welcome.what.label": "What are you doing?",
    "welcome.what.helper":
      "A sentence or two is plenty. Mention if you have a contractor.",
    "welcome.takes_about":
      "Takes about 30 seconds. I’ll show you the plan before anything is filed.",
    "welcome.cta": "See my plan",
    "welcome.examples.label": "Or try one of these",
    "welcome.examples.deck": "Adding a back deck off the kitchen",
    "welcome.examples.basement": "Finishing my basement into a guest suite",
    "welcome.examples.adu": "Building an ADU in the backyard",
    "welcome.review.h1": "Here’s what I figured out.",
    "welcome.review.sub_lead": "Looks like a ",
    "welcome.review.sub_type": "structural kitchen remodel in Burnaby",
    "welcome.review.sub_tail":
      ". Four permits, your contractor pulls them all. I’ll watch the city queue for you.",
    "welcome.review.what_i_heard": "What I heard",
    "welcome.review.permits_label": "Permits you’ll need",
    "welcome.review.contractor_note":
      "Lopez Construction handles all four under their contractor account. I’ll prep the paperwork with them and flag anything that needs your decision.",
    "welcome.review.change": "Change something",
    "welcome.review.open": "Open my renovation",
    "home.whats_happening": "What’s happening",
    "home.hero.title": "Burnaby is reviewing your plans.",
    "home.hero.days_tail": " About 9 more days.",
    "home.hero.sub":
      "Lopez sent everything Tuesday. Nothing for you to do today — I’ll ping you if they ask for anything.",
    "home.hero.see_review": "See the review",
    "home.hero.ask": "Ask AI a question",
    "switcher.aria": "Change language",
  },
  fr: {
    "welcome.eyebrow": "Préparons votre rénovation",
    "welcome.h1": "Parlez-moi du projet, dans vos propres mots.",
    "welcome.sub":
      "Pas de formulaires, pas de jargon. Je détermine quels permis vous faut, qui les obtient, et ce que Burnaby va demander. Vous restez au courant tout du long.",
    "welcome.where.label": "Où les travaux ont-ils lieu ?",
    "welcome.where.helper":
      "Votre adresse — je détermine la bonne ville et le bon zonage automatiquement.",
    "welcome.what.label": "Que faites-vous ?",
    "welcome.what.helper":
      "Une phrase ou deux suffit. Mentionnez si vous avez un entrepreneur.",
    "welcome.takes_about":
      "Environ 30 secondes. Je vous montre le plan avant qu’aucun document ne soit déposé.",
    "welcome.cta": "Voir mon plan",
    "welcome.examples.label": "Ou essayez l’un de ces",
    "welcome.examples.deck": "Ajouter une terrasse à l’arrière de la cuisine",
    "welcome.examples.basement": "Aménager mon sous-sol en suite d’invités",
    "welcome.examples.adu": "Construire un logement accessoire dans la cour",
    "welcome.review.h1": "Voici ce que j’ai compris.",
    "welcome.review.sub_lead": "On dirait une ",
    "welcome.review.sub_type": "rénovation structurelle de cuisine à Burnaby",
    "welcome.review.sub_tail":
      ". Quatre permis, votre entrepreneur les obtient tous. Je surveille la file d’attente municipale pour vous.",
    "welcome.review.what_i_heard": "Ce que j’ai entendu",
    "welcome.review.permits_label": "Permis nécessaires",
    "welcome.review.contractor_note":
      "Lopez Construction gère les quatre sous leur compte d’entrepreneur. Je prépare la paperasse avec eux et signale tout ce qui demande votre décision.",
    "welcome.review.change": "Modifier quelque chose",
    "welcome.review.open": "Ouvrir ma rénovation",
    "home.whats_happening": "Ce qui se passe",
    "home.hero.title": "Burnaby examine vos plans.",
    "home.hero.days_tail": " Environ 9 jours de plus.",
    "home.hero.sub":
      "Lopez a tout envoyé mardi. Rien à faire aujourd’hui — je vous ping si on vous demande quelque chose.",
    "home.hero.see_review": "Voir l’examen",
    "home.hero.ask": "Poser une question à l’IA",
    "switcher.aria": "Changer de langue",
  },
  "zh-Yue": {
    "welcome.eyebrow": "嚟設定你嘅裝修",
    "welcome.h1": "用你自己嘅話講下個項目。",
    "welcome.sub":
      "唔使填表，唔使術語。我會搞清楚你需要乜嘢牌照、邊個負責申請、本納比會問乜嘢。全程都會話你知。",
    "welcome.where.label": "工程喺邊度進行？",
    "welcome.where.helper": "你嘅地址——我會自動搞清楚啱嘅城市同分區。",
    "welcome.what.label": "你做緊乜嘢？",
    "welcome.what.helper": "一兩句就夠。如果有承建商，請講低。",
    "welcome.takes_about": "大約30秒。任何嘢遞交之前，我會畀你睇個計劃。",
    "welcome.cta": "睇我嘅計劃",
    "welcome.examples.label": "或者試吓呢啲",
    "welcome.examples.deck": "喺廚房後面加個露台",
    "welcome.examples.basement": "將地庫改裝做客房",
    "welcome.examples.adu": "喺後院起個附屬單位",
    "welcome.review.h1": "我了解到嘅嘢喺度。",
    "welcome.review.sub_lead": "睇起嚟係",
    "welcome.review.sub_type": "本納比嘅結構性廚房裝修",
    "welcome.review.sub_tail":
      "。四個牌照，你嘅承建商全部負責。我幫你睇住市政府嘅隊。",
    "welcome.review.what_i_heard": "我聽到嘅",
    "welcome.review.permits_label": "你需要嘅牌照",
    "welcome.review.contractor_note":
      "Lopez Construction 用佢哋嘅承建商賬戶處理呢四個。我會幫佢哋準備文件，需要你決定嘅嘢會即刻話你知。",
    "welcome.review.change": "更改",
    "welcome.review.open": "打開我嘅裝修",
    "home.whats_happening": "依家點",
    "home.hero.title": "本納比正在審查你嘅計劃。",
    "home.hero.days_tail": " 仲有大約9日。",
    "home.hero.sub":
      "Lopez 星期二已經遞交咗所有嘢。今日冇嘢做——如果佢哋有問題，我會即刻話你知。",
    "home.hero.see_review": "查看審查",
    "home.hero.ask": "問 AI 問題",
    "switcher.aria": "更改語言",
  },
  pa: {
    "welcome.eyebrow": "ਆਪਣੀ ਮੁਰੰਮਤ ਸੈਟ ਅਪ ਕਰੀਏ",
    "welcome.h1": "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਪ੍ਰੋਜੈਕਟ ਬਾਰੇ ਦੱਸੋ।",
    "welcome.sub":
      "ਕੋਈ ਫਾਰਮ ਨਹੀਂ, ਕੋਈ ਜਟਿਲ ਭਾਸ਼ਾ ਨਹੀਂ। ਮੈਂ ਪਤਾ ਕਰਾਂਗਾ ਕਿ ਤੁਹਾਨੂੰ ਕਿਹੜੇ ਪਰਮਿਟ ਚਾਹੀਦੇ ਹਨ, ਕੌਣ ਅਰਜ਼ੀ ਦੇਵੇਗਾ, ਅਤੇ ਬਰਨਬੀ ਕੀ ਮੰਗੇਗਾ। ਪੂਰੇ ਸਮੇਂ ਦੌਰਾਨ ਤੁਹਾਨੂੰ ਜਾਣਕਾਰੀ ਦਿੰਦਾ ਰਹਾਂਗਾ।",
    "welcome.where.label": "ਕੰਮ ਕਿੱਥੇ ਹੋ ਰਿਹਾ ਹੈ?",
    "welcome.where.helper":
      "ਤੁਹਾਡਾ ਪਤਾ — ਮੈਂ ਆਪਣੇ-ਆਪ ਸਹੀ ਸ਼ਹਿਰ ਤੇ ਜ਼ੋਨਿੰਗ ਪਤਾ ਕਰ ਲਵਾਂਗਾ।",
    "welcome.what.label": "ਤੁਸੀਂ ਕੀ ਕਰ ਰਹੇ ਹੋ?",
    "welcome.what.helper": "ਇੱਕ-ਦੋ ਵਾਕ ਕਾਫੀ ਹਨ। ਜੇ ਠੇਕੇਦਾਰ ਹੈ ਤਾਂ ਦੱਸੋ।",
    "welcome.takes_about":
      "ਲਗਭਗ 30 ਸਕਿੰਟ। ਕੁਝ ਫਾਈਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਯੋਜਨਾ ਦਿਖਾਵਾਂਗਾ।",
    "welcome.cta": "ਮੇਰੀ ਯੋਜਨਾ ਦੇਖੋ",
    "welcome.examples.label": "ਜਾਂ ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    "welcome.examples.deck": "ਰਸੋਈ ਦੇ ਪਿੱਛੇ ਡੈੱਕ ਜੋੜਨਾ",
    "welcome.examples.basement": "ਬੇਸਮੈਂਟ ਨੂੰ ਮਹਿਮਾਨ ਸੂਟ ਵਿੱਚ ਬਦਲਨਾ",
    "welcome.examples.adu": "ਵਿਹੜੇ ਵਿੱਚ ADU ਬਣਾਉਣਾ",
    "welcome.review.h1": "ਇੱਥੇ ਮੈਂ ਜੋ ਸਮਝਿਆ।",
    "welcome.review.sub_lead": "ਲੱਗਦਾ ਹੈ ਇਹ ",
    "welcome.review.sub_type": "ਬਰਨਬੀ ਵਿੱਚ ਇੱਕ ਢਾਂਚਾਗਤ ਰਸੋਈ ਮੁਰੰਮਤ",
    "welcome.review.sub_tail":
      "ਹੈ। ਚਾਰ ਪਰਮਿਟ, ਤੁਹਾਡਾ ਠੇਕੇਦਾਰ ਸਾਰੇ ਲਵੇਗਾ। ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਸ਼ਹਿਰ ਦੀ ਕਤਾਰ ਉੱਤੇ ਨਜ਼ਰ ਰੱਖਾਂਗਾ।",
    "welcome.review.what_i_heard": "ਜੋ ਮੈਂ ਸੁਣਿਆ",
    "welcome.review.permits_label": "ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੇ ਪਰਮਿਟ",
    "welcome.review.contractor_note":
      "Lopez Construction ਆਪਣੇ ਠੇਕੇਦਾਰ ਖਾਤੇ ਹੇਠ ਸਾਰੇ ਚਾਰ ਸੰਭਾਲੇਗੀ। ਮੈਂ ਉਨ੍ਹਾਂ ਨਾਲ ਕਾਗਜ਼ਾਤ ਤਿਆਰ ਕਰਾਂਗਾ ਤੇ ਜੋ ਤੁਹਾਡੇ ਫੈਸਲੇ ਦੀ ਲੋੜ ਹੈ, ਉਹ ਦੱਸਾਂਗਾ।",
    "welcome.review.change": "ਕੁਝ ਬਦਲੋ",
    "welcome.review.open": "ਮੇਰੀ ਮੁਰੰਮਤ ਖੋਲ੍ਹੋ",
    "home.whats_happening": "ਹੁਣ ਕੀ ਹੋ ਰਿਹਾ ਹੈ",
    "home.hero.title": "ਬਰਨਬੀ ਤੁਹਾਡੀਆਂ ਯੋਜਨਾਵਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰ ਰਿਹਾ ਹੈ।",
    "home.hero.days_tail": " ਲਗਭਗ 9 ਦਿਨ ਹੋਰ।",
    "home.hero.sub":
      "Lopez ਨੇ ਮੰਗਲਵਾਰ ਨੂੰ ਸਭ ਕੁਝ ਭੇਜ ਦਿੱਤਾ। ਅੱਜ ਤੁਹਾਡੇ ਲਈ ਕੁਝ ਨਹੀਂ — ਜੇ ਉਹ ਕੁਝ ਮੰਗਣਗੇ ਤਾਂ ਮੈਂ ਤੁਹਾਨੂੰ ਪਿੰਗ ਕਰਾਂਗਾ।",
    "home.hero.see_review": "ਸਮੀਖਿਆ ਦੇਖੋ",
    "home.hero.ask": "AI ਨੂੰ ਸਵਾਲ ਪੁੱਛੋ",
    "switcher.aria": "ਭਾਸ਼ਾ ਬਦਲੋ",
  },
}

export function useT() {
  const { locale } = useHomeLocale()
  return (key: string): string =>
    messages[locale]?.[key] ?? messages.en[key] ?? key
}
