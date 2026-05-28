import type { LocaleMessages } from "../types"

/**
 * Calendar page strings + calendar-event data.
 * Owned by the calendar translation agent. Filled per locale.
 *
 * Chrome keys cover the header band, filter chips, month-grid chrome, agenda
 * day headers, and the empty state. Data keys (`data.calevent.<id>.title` /
 * `.note`) translate the events produced by `getCalendarEvents()` in
 * home-mock.ts; the page wires each one with the English value as a fallback so
 * an untranslated event still reads correctly.
 *
 * The month-grid month label + weekday header and the agenda day headers are
 * localized at runtime via Intl (HomeLocale → BCP-47), not via string keys.
 */
export const calendar: LocaleMessages = {
  en: {
    // ── Header band ──
    "calendar.eyebrow": "Your calendar",
    "calendar.h1": "What’s coming up",
    "calendar.sub":
      "All the dates from your projects — permits, inspections, things you need to do.",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "All",
    "calendar.filter.milestones": "Milestones",
    "calendar.filter.inspections": "Inspections",
    "calendar.filter.todos": "To-dos",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "All projects",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "Milestone",
    "calendar.kind.inspection": "Inspection",
    "calendar.kind.todo": "To-do",

    // ── Agenda day header ──
    "calendar.today": "Today",
    "calendar.eventCount.one": "{n} event",
    "calendar.eventCount.other": "{n} events",

    // ── Month grid ──
    "calendar.prevMonth": "Previous month",
    "calendar.nextMonth": "Next month",

    // ── Empty state ──
    "calendar.empty.title": "Nothing matches those filters",
    "calendar.empty.body":
      "Try a different combination, or clear them to see everything coming up.",
    "calendar.empty.clear": "Clear filters",

    // ── Calendar-event data (ids come from getCalendarEvents()) ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "Building Permit submitted to Burnaby",
    "data.calevent.m-kitchen-building-submitted.note": "Filed as #B2026-4471.",
    "data.calevent.m-kitchen-building-decision.title":
      "Expected decision on Building Permit",
    "data.calevent.m-kitchen-building-decision.note":
      "Burnaby’s queue usually moves on this timeline.",
    "data.calevent.i-kitchen-building-rough-frame.title":
      "Rough framing (projected)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "After the wall comes down and new framing is up — before drywall.",
    "data.calevent.i-kitchen-building-final.title": "Final inspection (projected)",
    "data.calevent.i-kitchen-building-final.note":
      "Everything done: finishes, fixtures, the works. The sign-off.",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title":
      "Target: submit Electrical Permit",
    "data.calevent.m-kitchen-electrical-target.note":
      "Lopez is finishing the paperwork.",
    "data.calevent.i-kitchen-electrical-elec-rough.title":
      "Electrical rough-in (projected)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "Wiring in walls before they close up.",
    "data.calevent.i-kitchen-electrical-elec-final.title":
      "Electrical final (projected)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "Outlets, switches, and fixtures all working.",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title":
      "Target: submit Plumbing Permit",
    "data.calevent.m-kitchen-plumbing-target.note":
      "Lopez is finishing the paperwork.",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title": "Burnaby left a comment on your Building Permit",
    "data.calevent.t-ai-1.note": "Review draft email",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title":
      "Scope your bathroom refresh with the AI",
    "data.calevent.t-bathroom-scope.note":
      "I’ll walk you through the choices that drive cost and permits.",
    "data.calevent.m-shed-research.title": "Confirm shed permit threshold",
    "data.calevent.m-shed-research.note":
      "Burnaby exempts sheds under 10 m². Yours is right at the line.",
    "data.calevent.m-deck-consult.title":
      "Permit consultation booked for the deck",
    "data.calevent.m-deck-consult.note":
      "Burnaby pre-application call — confirm setbacks and guardrail spec.",
    "data.calevent.t-deck-contractor.title": "Pick a contractor for the deck",
    "data.calevent.t-deck-contractor.note":
      "I’ll shortlist three local builders with deck experience.",
    "data.calevent.m-bathroom-budget.title": "Finalize bathroom budget + scope",
    "data.calevent.m-bathroom-budget.note":
      "Decision point: vanity-only refresh vs. moving the linen closet.",
  },

  fr: {
    // ── Header band ──
    "calendar.eyebrow": "Votre calendrier",
    "calendar.h1": "Ce qui s’en vient",
    "calendar.sub":
      "Toutes les dates de vos projets — permis, inspections, choses à faire.",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "Tout",
    "calendar.filter.milestones": "Jalons",
    "calendar.filter.inspections": "Inspections",
    "calendar.filter.todos": "À faire",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "Tous les projets",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "Jalon",
    "calendar.kind.inspection": "Inspection",
    "calendar.kind.todo": "À faire",

    // ── Agenda day header ──
    "calendar.today": "Aujourd’hui",
    "calendar.eventCount.one": "{n} événement",
    "calendar.eventCount.other": "{n} événements",

    // ── Month grid ──
    "calendar.prevMonth": "Mois précédent",
    "calendar.nextMonth": "Mois suivant",

    // ── Empty state ──
    "calendar.empty.title": "Rien ne correspond à ces filtres",
    "calendar.empty.body":
      "Essayez une autre combinaison, ou effacez-les pour voir tout ce qui s’en vient.",
    "calendar.empty.clear": "Effacer les filtres",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "Permis de construction soumis à Burnaby",
    "data.calevent.m-kitchen-building-submitted.note":
      "Déposé sous le n° B2026-4471.",
    "data.calevent.m-kitchen-building-decision.title":
      "Décision attendue sur le permis de construction",
    "data.calevent.m-kitchen-building-decision.note":
      "La file d’attente de Burnaby suit habituellement ce délai.",
    "data.calevent.i-kitchen-building-rough-frame.title":
      "Charpente brute (prévue)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "Une fois le mur abattu et la nouvelle charpente en place — avant la pose des cloisons sèches.",
    "data.calevent.i-kitchen-building-final.title": "Inspection finale (prévue)",
    "data.calevent.i-kitchen-building-final.note":
      "Tout est terminé : finitions, appareils, le tout. L’approbation finale.",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title":
      "Objectif : soumettre le permis d’électricité",
    "data.calevent.m-kitchen-electrical-target.note":
      "Lopez termine les documents.",
    "data.calevent.i-kitchen-electrical-elec-rough.title":
      "Câblage électrique brut (prévu)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "Câblage dans les murs avant qu’ils ne soient fermés.",
    "data.calevent.i-kitchen-electrical-elec-final.title":
      "Inspection électrique finale (prévue)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "Prises, interrupteurs et luminaires tous fonctionnels.",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title":
      "Objectif : soumettre le permis de plomberie",
    "data.calevent.m-kitchen-plumbing-target.note":
      "Lopez termine les documents.",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title":
      "Burnaby a laissé un commentaire sur votre permis de construction",
    "data.calevent.t-ai-1.note": "Réviser le brouillon de courriel",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title":
      "Définissez la portée de la rénovation de votre salle de bain avec l’IA",
    "data.calevent.t-bathroom-scope.note":
      "Je vous guiderai dans les choix qui influencent le coût et les permis.",
    "data.calevent.m-shed-research.title":
      "Confirmer le seuil de permis pour le cabanon",
    "data.calevent.m-shed-research.note":
      "Burnaby exempte les cabanons de moins de 10 m². Le vôtre est juste à la limite.",
    "data.calevent.m-deck-consult.title":
      "Consultation de permis réservée pour la terrasse",
    "data.calevent.m-deck-consult.note":
      "Appel pré-demande avec Burnaby — confirmer les marges de recul et les garde-corps.",
    "data.calevent.t-deck-contractor.title":
      "Choisir un entrepreneur pour la terrasse",
    "data.calevent.t-deck-contractor.note":
      "Je présélectionnerai trois constructeurs locaux expérimentés en terrasses.",
    "data.calevent.m-bathroom-budget.title":
      "Finaliser le budget et la portée de la salle de bain",
    "data.calevent.m-bathroom-budget.note":
      "Point de décision : rénovation du meuble-lavabo seulement ou déplacement de l’armoire à linge.",
  },

  "zh-Yue": {
    // ── Header band ──
    "calendar.eyebrow": "你嘅日曆",
    "calendar.h1": "即將到來嘅事項",
    "calendar.sub": "你所有項目嘅日期 — 許可證、檢查、同埋你要做嘅嘢。",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "全部",
    "calendar.filter.milestones": "里程碑",
    "calendar.filter.inspections": "檢查",
    "calendar.filter.todos": "待辦事項",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "所有項目",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "里程碑",
    "calendar.kind.inspection": "檢查",
    "calendar.kind.todo": "待辦事項",

    // ── Agenda day header ──
    "calendar.today": "今日",
    "calendar.eventCount.one": "{n} 項",
    "calendar.eventCount.other": "{n} 項",

    // ── Month grid ──
    "calendar.prevMonth": "上一個月",
    "calendar.nextMonth": "下一個月",

    // ── Empty state ──
    "calendar.empty.title": "冇嘢符合呢啲篩選",
    "calendar.empty.body": "試吓另一個組合，或者清除篩選去睇晒所有即將到來嘅事項。",
    "calendar.empty.clear": "清除篩選",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title": "建築許可證已遞交畀 Burnaby",
    "data.calevent.m-kitchen-building-submitted.note": "以 #B2026-4471 號入檔。",
    "data.calevent.m-kitchen-building-decision.title": "預計建築許可證嘅審批結果",
    "data.calevent.m-kitchen-building-decision.note": "Burnaby 嘅排隊通常都係照呢個時間進度。",
    "data.calevent.i-kitchen-building-rough-frame.title": "粗框架檢查（預計）",
    "data.calevent.i-kitchen-building-rough-frame.note": "拆咗道牆、裝好新框架之後 — 喺上石膏板之前。",
    "data.calevent.i-kitchen-building-final.title": "最終檢查（預計）",
    "data.calevent.i-kitchen-building-final.note": "全部搞掂：飾面、裝置，樣樣都齊。即係最後簽核。",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title": "目標：遞交電力許可證",
    "data.calevent.m-kitchen-electrical-target.note": "Lopez 正喺度完成啲文件。",
    "data.calevent.i-kitchen-electrical-elec-rough.title": "電力粗裝檢查（預計）",
    "data.calevent.i-kitchen-electrical-elec-rough.note": "喺封牆之前檢查牆內嘅電線。",
    "data.calevent.i-kitchen-electrical-elec-final.title": "電力最終檢查（預計）",
    "data.calevent.i-kitchen-electrical-elec-final.note": "插座、開關同燈具全部正常運作。",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title": "目標：遞交水管許可證",
    "data.calevent.m-kitchen-plumbing-target.note": "Lopez 正喺度完成啲文件。",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title": "Burnaby 喺你嘅建築許可證留低咗意見",
    "data.calevent.t-ai-1.note": "查看電郵草稿",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title": "同 AI 一齊規劃你嘅浴室翻新",
    "data.calevent.t-bathroom-scope.note": "我會帶你睇吓邊啲選擇會影響費用同許可證。",
    "data.calevent.m-shed-research.title": "確認儲物棚嘅許可證門檻",
    "data.calevent.m-shed-research.note": "Burnaby 對少過 10 平方米嘅儲物棚豁免。你個棚啱啱喺臨界線。",
    "data.calevent.m-deck-consult.title": "已預約露台嘅許可證諮詢",
    "data.calevent.m-deck-consult.note": "Burnaby 申請前通話 — 確認後退距離同護欄規格。",
    "data.calevent.t-deck-contractor.title": "為露台揀個承建商",
    "data.calevent.t-deck-contractor.note": "我會幫你篩選三個有露台經驗嘅本地建築商。",
    "data.calevent.m-bathroom-budget.title": "敲定浴室嘅預算同範圍",
    "data.calevent.m-bathroom-budget.note": "決策點：淨係換洗手台，定係搬埋亞麻櫃。",
  },

  pa: {
    // ── Header band ──
    "calendar.eyebrow": "ਤੁਹਾਡਾ ਕੈਲੰਡਰ",
    "calendar.h1": "ਅੱਗੇ ਕੀ ਆ ਰਿਹਾ ਹੈ",
    "calendar.sub":
      "ਤੁਹਾਡੇ ਪ੍ਰੋਜੈਕਟਾਂ ਦੀਆਂ ਸਾਰੀਆਂ ਤਾਰੀਖਾਂ — ਪਰਮਿਟ, ਨਿਰੀਖਣ, ਤੇ ਉਹ ਕੰਮ ਜੋ ਤੁਹਾਨੂੰ ਕਰਨੇ ਹਨ।",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "ਸਾਰੇ",
    "calendar.filter.milestones": "ਮੀਲ-ਪੱਥਰ",
    "calendar.filter.inspections": "ਨਿਰੀਖਣ",
    "calendar.filter.todos": "ਕਰਨ ਵਾਲੇ ਕੰਮ",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "ਸਾਰੇ ਪ੍ਰੋਜੈਕਟ",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "ਮੀਲ-ਪੱਥਰ",
    "calendar.kind.inspection": "ਨਿਰੀਖਣ",
    "calendar.kind.todo": "ਕਰਨ ਵਾਲਾ ਕੰਮ",

    // ── Agenda day header ──
    "calendar.today": "ਅੱਜ",
    "calendar.eventCount.one": "{n} ਘਟਨਾ",
    "calendar.eventCount.other": "{n} ਘਟਨਾਵਾਂ",

    // ── Month grid ──
    "calendar.prevMonth": "ਪਿਛਲਾ ਮਹੀਨਾ",
    "calendar.nextMonth": "ਅਗਲਾ ਮਹੀਨਾ",

    // ── Empty state ──
    "calendar.empty.title": "ਇਹਨਾਂ ਫਿਲਟਰਾਂ ਨਾਲ ਕੁਝ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ",
    "calendar.empty.body":
      "ਕੋਈ ਹੋਰ ਸੁਮੇਲ ਅਜ਼ਮਾਓ, ਜਾਂ ਅੱਗੇ ਆ ਰਿਹਾ ਸਭ ਕੁਝ ਵੇਖਣ ਲਈ ਉਹਨਾਂ ਨੂੰ ਸਾਫ਼ ਕਰੋ।",
    "calendar.empty.clear": "ਫਿਲਟਰ ਸਾਫ਼ ਕਰੋ",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "ਬਿਲਡਿੰਗ ਪਰਮਿਟ Burnaby ਨੂੰ ਜਮ੍ਹਾਂ ਕੀਤਾ ਗਿਆ",
    "data.calevent.m-kitchen-building-submitted.note": "#B2026-4471 ਵਜੋਂ ਦਾਖਲ ਕੀਤਾ।",
    "data.calevent.m-kitchen-building-decision.title":
      "ਬਿਲਡਿੰਗ ਪਰਮਿਟ ’ਤੇ ਉਮੀਦ ਕੀਤਾ ਫੈਸਲਾ",
    "data.calevent.m-kitchen-building-decision.note":
      "Burnaby ਦੀ ਕਤਾਰ ਆਮ ਤੌਰ ’ਤੇ ਇਸੇ ਸਮਾਂ-ਸੀਮਾ ਮੁਤਾਬਕ ਅੱਗੇ ਵਧਦੀ ਹੈ।",
    "data.calevent.i-kitchen-building-rough-frame.title": "ਮੋਟਾ ਢਾਂਚਾ (ਅਨੁਮਾਨਿਤ)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "ਕੰਧ ਡਿੱਗਣ ਅਤੇ ਨਵਾਂ ਢਾਂਚਾ ਖੜ੍ਹਾ ਹੋਣ ਤੋਂ ਬਾਅਦ — ਡ੍ਰਾਈਵਾਲ ਤੋਂ ਪਹਿਲਾਂ।",
    "data.calevent.i-kitchen-building-final.title": "ਅੰਤਿਮ ਨਿਰੀਖਣ (ਅਨੁਮਾਨਿਤ)",
    "data.calevent.i-kitchen-building-final.note":
      "ਸਭ ਕੁਝ ਮੁਕੰਮਲ: ਫਿਨਿਸ਼, ਫਿਕਸਚਰ, ਪੂਰਾ ਕੰਮ। ਅੰਤਿਮ ਮਨਜ਼ੂਰੀ।",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title":
      "ਟੀਚਾ: ਇਲੈਕਟ੍ਰੀਕਲ ਪਰਮਿਟ ਜਮ੍ਹਾਂ ਕਰੋ",
    "data.calevent.m-kitchen-electrical-target.note": "Lopez ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਪੂਰੀ ਕਰ ਰਿਹਾ ਹੈ।",
    "data.calevent.i-kitchen-electrical-elec-rough.title":
      "ਇਲੈਕਟ੍ਰੀਕਲ ਰਫ਼-ਇਨ (ਅਨੁਮਾਨਿਤ)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "ਕੰਧਾਂ ਬੰਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਉਹਨਾਂ ਅੰਦਰ ਦੀ ਵਾਇਰਿੰਗ।",
    "data.calevent.i-kitchen-electrical-elec-final.title":
      "ਇਲੈਕਟ੍ਰੀਕਲ ਅੰਤਿਮ (ਅਨੁਮਾਨਿਤ)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "ਆਊਟਲੈਟ, ਸਵਿੱਚ, ਤੇ ਫਿਕਸਚਰ ਸਾਰੇ ਕੰਮ ਕਰ ਰਹੇ ਹਨ।",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title":
      "ਟੀਚਾ: ਪਲੰਬਿੰਗ ਪਰਮਿਟ ਜਮ੍ਹਾਂ ਕਰੋ",
    "data.calevent.m-kitchen-plumbing-target.note": "Lopez ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਪੂਰੀ ਕਰ ਰਿਹਾ ਹੈ।",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title": "Burnaby ਨੇ ਤੁਹਾਡੇ ਬਿਲਡਿੰਗ ਪਰਮਿਟ ’ਤੇ ਟਿੱਪਣੀ ਛੱਡੀ ਹੈ",
    "data.calevent.t-ai-1.note": "ਈਮੇਲ ਡ੍ਰਾਫਟ ਵੇਖੋ",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title": "AI ਨਾਲ ਆਪਣੇ ਬਾਥਰੂਮ ਦੀ ਨਵੀਨੀਕਰਨ ਦਾ ਦਾਇਰਾ ਤੈਅ ਕਰੋ",
    "data.calevent.t-bathroom-scope.note":
      "ਮੈਂ ਤੁਹਾਨੂੰ ਉਹਨਾਂ ਚੋਣਾਂ ਬਾਰੇ ਦੱਸਾਂਗਾ ਜੋ ਖਰਚ ਤੇ ਪਰਮਿਟ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀਆਂ ਹਨ।",
    "data.calevent.m-shed-research.title": "ਸ਼ੈੱਡ ਪਰਮਿਟ ਦੀ ਹੱਦ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    "data.calevent.m-shed-research.note":
      "Burnaby 10 ਵਰਗ ਮੀਟਰ ਤੋਂ ਛੋਟੇ ਸ਼ੈੱਡਾਂ ਨੂੰ ਛੋਟ ਦਿੰਦਾ ਹੈ। ਤੁਹਾਡਾ ਠੀਕ ਹੱਦ ’ਤੇ ਹੈ।",
    "data.calevent.m-deck-consult.title": "ਡੈੱਕ ਲਈ ਪਰਮਿਟ ਸਲਾਹ-ਮਸ਼ਵਰਾ ਬੁੱਕ ਕੀਤਾ ਗਿਆ",
    "data.calevent.m-deck-consult.note":
      "Burnaby ਨਾਲ ਅਰਜ਼ੀ ਤੋਂ ਪਹਿਲਾਂ ਕਾਲ — ਸੈੱਟਬੈਕ ਤੇ ਗਾਰਡਰੇਲ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",
    "data.calevent.t-deck-contractor.title": "ਡੈੱਕ ਲਈ ਠੇਕੇਦਾਰ ਚੁਣੋ",
    "data.calevent.t-deck-contractor.note":
      "ਮੈਂ ਡੈੱਕ ਦੇ ਤਜਰਬੇ ਵਾਲੇ ਤਿੰਨ ਸਥਾਨਕ ਬਿਲਡਰਾਂ ਦੀ ਸ਼ਾਰਟਲਿਸਟ ਬਣਾਵਾਂਗਾ।",
    "data.calevent.m-bathroom-budget.title": "ਬਾਥਰੂਮ ਦਾ ਬਜਟ ਤੇ ਦਾਇਰਾ ਅੰਤਿਮ ਰੂਪ ਦਿਓ",
    "data.calevent.m-bathroom-budget.note":
      "ਫੈਸਲੇ ਦਾ ਨੁਕਤਾ: ਸਿਰਫ਼ ਵੈਨਿਟੀ ਦੀ ਨਵੀਨੀਕਰਨ ਬਨਾਮ ਲਿਨਨ ਅਲਮਾਰੀ ਨੂੰ ਹਿਲਾਉਣਾ।",
  },
}
