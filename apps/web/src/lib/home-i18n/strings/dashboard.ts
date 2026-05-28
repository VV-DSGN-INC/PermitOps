import type { LocaleMessages } from "../types"

/**
 * Dashboard strings + AI-suggestion data. This surface owns the dashboard
 * chrome (section headings, "what else you're planning", contacts, stats) and
 * the AI-suggestion content (data.suggestion.*). Permit/status/project data is
 * referenced by key (data.permit.*, data.status.*, data.project.*, data.kind.*,
 * data.pstatus.*) and owned by other surfaces.
 *
 * The hero keys below are migrated from the original single-file i18n.
 */
export const dashboard: LocaleMessages = {
  en: {
    // Hero (migrated)
    "home.whats_happening": "What’s happening",
    "home.hero.title": "Burnaby is reviewing your plans.",
    "home.hero.days_tail": " About 9 more days.",
    "home.hero.sub":
      "Lopez sent everything Tuesday. Nothing for you to do today — I’ll ping you if they ask for anything.",
    "home.hero.see_review": "See the review",
    "home.hero.ask": "Ask AI a question",

    // Featured project header
    "home.featured.heading": "Your {name}",
    "home.featured.target_prefix": "· target {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "From your AI",
    "home.suggestions.title": "Three things I noticed",
    "home.suggestions.hint":
      "None of these are urgent — just keeping you in the loop.",

    // The four permits section
    "home.permits.eyebrow": "The four permits",
    "home.permits.title": "Where each one stands",
    "home.permits.pulled_by_contractor": "Lopez pulls this",
    "home.permits.pulled_by_you": "You pull this",

    // Other projects section
    "home.projects.eyebrow": "Your other projects",
    "home.projects.title": "What else you’re planning",
    "home.projects.open": "Open",

    // Team section
    "home.team.eyebrow": "The team",
    "home.team.title": "Who’s helping",
    "home.team.contractor_since": "On the project since {date}",
    "home.team.contractor_pending": "Joining once we kick off",
    "home.team.reviewer_footer": "Reviews your applications",

    // Numbers section
    "home.numbers.eyebrow": "At a glance",
    "home.numbers.title": "The numbers",
    "home.numbers.budget": "Budget",
    "home.numbers.permit_fees": "Permit fees",
    "home.numbers.started": "Started",
    "home.numbers.target_finish": "Target finish",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "Burnaby left a comment on your Building Permit",
    "data.suggestion.ai-1.body":
      "They want a section drawing showing the new header above the removed wall. Your engineer (Vargas) already has this — I drafted a quick email asking him to send it directly to the city.",
    "data.suggestion.ai-1.primary": "Review draft email",
    "data.suggestion.ai-1.secondary": "Mark as handled",
    "data.suggestion.ai-2.headline": "I can finish your Energy Step Code form",
    "data.suggestion.ai-2.body":
      "It needs the same window dimensions and recessed-light counts that are already on your floor plan. I’ll fill it out and you just approve.",
    "data.suggestion.ai-2.primary": "Fill it out for me",
    "data.suggestion.ai-3.headline":
      "Heads up: Mechanical permit hasn’t been started",
    "data.suggestion.ai-3.body":
      "Lopez usually pulls this last, but it’ll be needed before the range-hood install. No action today — just a watch item for late June.",
    "data.suggestion.ai-3.primary": "Remind me June 20",
  },
  fr: {
    // Hero (migrated)
    "home.whats_happening": "Ce qui se passe",
    "home.hero.title": "Burnaby examine vos plans.",
    "home.hero.days_tail": " Environ 9 jours de plus.",
    "home.hero.sub":
      "Lopez a tout envoyé mardi. Rien à faire aujourd’hui — je vous ping si on vous demande quelque chose.",
    "home.hero.see_review": "Voir l’examen",
    "home.hero.ask": "Poser une question à l’IA",

    // Featured project header
    "home.featured.heading": "Votre {name}",
    "home.featured.target_prefix": "· objectif {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "De votre IA",
    "home.suggestions.title": "Trois choses que j’ai remarquées",
    "home.suggestions.hint":
      "Rien d’urgent ici — je vous tiens simplement au courant.",

    // The four permits section
    "home.permits.eyebrow": "Les quatre permis",
    "home.permits.title": "Où en est chacun",
    "home.permits.pulled_by_contractor": "Lopez s’en occupe",
    "home.permits.pulled_by_you": "Vous vous en occupez",

    // Other projects section
    "home.projects.eyebrow": "Vos autres projets",
    "home.projects.title": "Ce que vous prévoyez d’autre",
    "home.projects.open": "Ouvrir",

    // Team section
    "home.team.eyebrow": "L’équipe",
    "home.team.title": "Qui vous aide",
    "home.team.contractor_since": "Sur le projet depuis le {date}",
    "home.team.contractor_pending": "Se joindra dès le lancement",
    "home.team.reviewer_footer": "Examine vos demandes",

    // Numbers section
    "home.numbers.eyebrow": "En un coup d’œil",
    "home.numbers.title": "Les chiffres",
    "home.numbers.budget": "Budget",
    "home.numbers.permit_fees": "Frais de permis",
    "home.numbers.started": "Commencé",
    "home.numbers.target_finish": "Fin prévue",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "Burnaby a laissé un commentaire sur votre permis de construction",
    "data.suggestion.ai-1.body":
      "Ils veulent un dessin en coupe montrant la nouvelle poutre au-dessus du mur enlevé. Votre ingénieur (Vargas) l’a déjà — j’ai rédigé un court courriel lui demandant de l’envoyer directement à la municipalité.",
    "data.suggestion.ai-1.primary": "Revoir le brouillon de courriel",
    "data.suggestion.ai-1.secondary": "Marquer comme réglé",
    "data.suggestion.ai-2.headline":
      "Je peux terminer votre formulaire Energy Step Code",
    "data.suggestion.ai-2.body":
      "Il demande les mêmes dimensions de fenêtres et le même nombre de luminaires encastrés qui figurent déjà sur votre plan d’étage. Je le remplis et vous n’avez qu’à approuver.",
    "data.suggestion.ai-2.primary": "Remplissez-le pour moi",
    "data.suggestion.ai-3.headline":
      "À noter : le permis de mécanique n’a pas été entamé",
    "data.suggestion.ai-3.body":
      "Lopez s’en occupe habituellement en dernier, mais il faudra l’obtenir avant l’installation de la hotte. Aucune action aujourd’hui — juste un point à surveiller pour la fin juin.",
    "data.suggestion.ai-3.primary": "Rappelez-moi le 20 juin",
  },
  "zh-Yue": {
    // Hero (migrated)
    "home.whats_happening": "依家點",
    "home.hero.title": "本納比正在審查你嘅計劃。",
    "home.hero.days_tail": " 仲有大約9日。",
    "home.hero.sub":
      "Lopez 星期二已經遞交咗所有嘢。今日冇嘢做——如果佢哋有問題，我會即刻話你知。",
    "home.hero.see_review": "查看審查",
    "home.hero.ask": "問 AI 問題",

    // Featured project header
    "home.featured.heading": "你嘅{name}",
    "home.featured.target_prefix": "· 目標 {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "嚟自你嘅 AI",
    "home.suggestions.title": "我留意到三樣嘢",
    "home.suggestions.hint": "全部都唔急——淨係話你知一聲。",

    // The four permits section
    "home.permits.eyebrow": "四個許可證",
    "home.permits.title": "每個進度去到邊",
    "home.permits.pulled_by_contractor": "Lopez 負責申請",
    "home.permits.pulled_by_you": "你負責申請",

    // Other projects section
    "home.projects.eyebrow": "你其他嘅項目",
    "home.projects.title": "你仲計劃緊啲乜",
    "home.projects.open": "打開",

    // Team section
    "home.team.eyebrow": "團隊",
    "home.team.title": "邊個幫緊你",
    "home.team.contractor_since": "由 {date} 開始參與項目",
    "home.team.contractor_pending": "一開工就會加入",
    "home.team.reviewer_footer": "審查你嘅申請",

    // Numbers section
    "home.numbers.eyebrow": "概覽",
    "home.numbers.title": "數字",
    "home.numbers.budget": "預算",
    "home.numbers.permit_fees": "許可證費用",
    "home.numbers.started": "開始日",
    "home.numbers.target_finish": "目標完工",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline": "本納比就你嘅建築許可證留咗個意見",
    "data.suggestion.ai-1.body":
      "佢哋想要一張剖面圖，顯示拆咗嗰幅牆上面嘅新橫樑。你嘅工程師（Vargas）已經有呢樣嘢——我擬咗封簡短電郵，叫佢直接寄畀市政府。",
    "data.suggestion.ai-1.primary": "查看電郵草稿",
    "data.suggestion.ai-1.secondary": "標記為已處理",
    "data.suggestion.ai-2.headline": "我可以幫你填好 Energy Step Code 表格",
    "data.suggestion.ai-2.body":
      "佢需要嘅窗戶尺寸同埋崁燈數量，你嘅樓面圖上面已經有。我幫你填好，你淨係批准就得。",
    "data.suggestion.ai-2.primary": "幫我填好佢",
    "data.suggestion.ai-3.headline": "提提你：機械許可證仲未開始",
    "data.suggestion.ai-3.body":
      "Lopez 通常最後先申請呢個，但喺裝抽油煙機之前就要搞掂。今日唔使做嘢——淨係六月底要留意嘅事項。",
    "data.suggestion.ai-3.primary": "6月20日提我",
  },
  pa: {
    // Hero (migrated)
    "home.whats_happening": "ਹੁਣ ਕੀ ਹੋ ਰਿਹਾ ਹੈ",
    "home.hero.title": "ਬਰਨਬੀ ਤੁਹਾਡੀਆਂ ਯੋਜਨਾਵਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰ ਰਿਹਾ ਹੈ।",
    "home.hero.days_tail": " ਲਗਭਗ 9 ਦਿਨ ਹੋਰ।",
    "home.hero.sub":
      "Lopez ਨੇ ਮੰਗਲਵਾਰ ਨੂੰ ਸਭ ਕੁਝ ਭੇਜ ਦਿੱਤਾ। ਅੱਜ ਤੁਹਾਡੇ ਲਈ ਕੁਝ ਨਹੀਂ — ਜੇ ਉਹ ਕੁਝ ਮੰਗਣਗੇ ਤਾਂ ਮੈਂ ਤੁਹਾਨੂੰ ਪਿੰਗ ਕਰਾਂਗਾ।",
    "home.hero.see_review": "ਸਮੀਖਿਆ ਦੇਖੋ",
    "home.hero.ask": "AI ਨੂੰ ਸਵਾਲ ਪੁੱਛੋ",

    // Featured project header
    "home.featured.heading": "ਤੁਹਾਡਾ {name}",
    "home.featured.target_prefix": "· ਟੀਚਾ {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "ਤੁਹਾਡੇ AI ਵੱਲੋਂ",
    "home.suggestions.title": "ਤਿੰਨ ਗੱਲਾਂ ਜੋ ਮੈਂ ਵੇਖੀਆਂ",
    "home.suggestions.hint":
      "ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਜ਼ਰੂਰੀ ਨਹੀਂ — ਬੱਸ ਤੁਹਾਨੂੰ ਜਾਣਕਾਰੀ ਦੇ ਰਿਹਾ ਹਾਂ।",

    // The four permits section
    "home.permits.eyebrow": "ਚਾਰ ਪਰਮਿਟ",
    "home.permits.title": "ਹਰੇਕ ਕਿੱਥੇ ਖੜ੍ਹਾ ਹੈ",
    "home.permits.pulled_by_contractor": "ਇਹ Lopez ਲੈਂਦਾ ਹੈ",
    "home.permits.pulled_by_you": "ਇਹ ਤੁਸੀਂ ਲੈਂਦੇ ਹੋ",

    // Other projects section
    "home.projects.eyebrow": "ਤੁਹਾਡੇ ਹੋਰ ਪ੍ਰੋਜੈਕਟ",
    "home.projects.title": "ਤੁਸੀਂ ਹੋਰ ਕੀ ਯੋਜਨਾ ਬਣਾ ਰਹੇ ਹੋ",
    "home.projects.open": "ਖੋਲ੍ਹੋ",

    // Team section
    "home.team.eyebrow": "ਟੀਮ",
    "home.team.title": "ਕੌਣ ਮਦਦ ਕਰ ਰਿਹਾ ਹੈ",
    "home.team.contractor_since": "{date} ਤੋਂ ਪ੍ਰੋਜੈਕਟ ਉੱਤੇ",
    "home.team.contractor_pending": "ਸ਼ੁਰੂ ਹੁੰਦੇ ਹੀ ਸ਼ਾਮਲ ਹੋਵੇਗਾ",
    "home.team.reviewer_footer": "ਤੁਹਾਡੀਆਂ ਅਰਜ਼ੀਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦਾ ਹੈ",

    // Numbers section
    "home.numbers.eyebrow": "ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ",
    "home.numbers.title": "ਅੰਕੜੇ",
    "home.numbers.budget": "ਬਜਟ",
    "home.numbers.permit_fees": "ਪਰਮਿਟ ਫੀਸ",
    "home.numbers.started": "ਸ਼ੁਰੂ ਹੋਇਆ",
    "home.numbers.target_finish": "ਟੀਚਾ ਸਮਾਪਤੀ",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "ਬਰਨਬੀ ਨੇ ਤੁਹਾਡੇ ਬਿਲਡਿੰਗ ਪਰਮਿਟ ਉੱਤੇ ਟਿੱਪਣੀ ਛੱਡੀ ਹੈ",
    "data.suggestion.ai-1.body":
      "ਉਹ ਇੱਕ ਸੈਕਸ਼ਨ ਡਰਾਇੰਗ ਚਾਹੁੰਦੇ ਹਨ ਜੋ ਹਟਾਈ ਗਈ ਕੰਧ ਉੱਤੇ ਨਵੇਂ ਹੈਡਰ ਨੂੰ ਦਿਖਾਏ। ਤੁਹਾਡੇ ਇੰਜੀਨੀਅਰ (Vargas) ਕੋਲ ਇਹ ਪਹਿਲਾਂ ਹੀ ਹੈ — ਮੈਂ ਇੱਕ ਛੋਟੀ ਈਮੇਲ ਤਿਆਰ ਕੀਤੀ ਹੈ ਜਿਸ ਵਿੱਚ ਉਸ ਨੂੰ ਸਿੱਧਾ ਸ਼ਹਿਰ ਨੂੰ ਭੇਜਣ ਲਈ ਕਿਹਾ ਗਿਆ ਹੈ।",
    "data.suggestion.ai-1.primary": "ਈਮੇਲ ਦਾ ਖਰੜਾ ਵੇਖੋ",
    "data.suggestion.ai-1.secondary": "ਨਿਪਟਾਇਆ ਵਜੋਂ ਨਿਸ਼ਾਨ ਲਗਾਓ",
    "data.suggestion.ai-2.headline":
      "ਮੈਂ ਤੁਹਾਡਾ Energy Step Code ਫਾਰਮ ਪੂਰਾ ਕਰ ਸਕਦਾ ਹਾਂ",
    "data.suggestion.ai-2.body":
      "ਇਸ ਨੂੰ ਉਹੀ ਖਿੜਕੀ ਦੇ ਮਾਪ ਅਤੇ ਛੱਤ ਵਾਲੀਆਂ ਲਾਈਟਾਂ ਦੀ ਗਿਣਤੀ ਚਾਹੀਦੀ ਹੈ ਜੋ ਤੁਹਾਡੇ ਫਲੋਰ ਪਲਾਨ ਉੱਤੇ ਪਹਿਲਾਂ ਹੀ ਹਨ। ਮੈਂ ਇਸ ਨੂੰ ਭਰ ਦਿਆਂਗਾ ਤੇ ਤੁਸੀਂ ਬੱਸ ਮਨਜ਼ੂਰ ਕਰ ਦਿਓ।",
    "data.suggestion.ai-2.primary": "ਮੇਰੇ ਲਈ ਇਸ ਨੂੰ ਭਰੋ",
    "data.suggestion.ai-3.headline":
      "ਧਿਆਨ ਦਿਓ: ਮਕੈਨੀਕਲ ਪਰਮਿਟ ਅਜੇ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਇਆ",
    "data.suggestion.ai-3.body":
      "Lopez ਆਮ ਤੌਰ ਉੱਤੇ ਇਹ ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਲੈਂਦਾ ਹੈ, ਪਰ ਰੇਂਜ-ਹੁੱਡ ਲਗਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਇਸ ਦੀ ਲੋੜ ਪਵੇਗੀ। ਅੱਜ ਕੋਈ ਕਾਰਵਾਈ ਨਹੀਂ — ਬੱਸ ਜੂਨ ਦੇ ਅਖੀਰ ਲਈ ਧਿਆਨ ਰੱਖਣ ਵਾਲੀ ਗੱਲ।",
    "data.suggestion.ai-3.primary": "20 ਜੂਨ ਨੂੰ ਯਾਦ ਕਰਾਓ",
  },
}
