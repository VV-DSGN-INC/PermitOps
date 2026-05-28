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

  tl: {
    // ── Header band ──
    "calendar.eyebrow": "Ang iyong kalendaryo",
    "calendar.h1": "Mga paparating",
    "calendar.sub":
      "Lahat ng petsa mula sa iyong mga proyekto — mga permit, inspeksyon, mga bagay na kailangan mong gawin.",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "Lahat",
    "calendar.filter.milestones": "Mga milestone",
    "calendar.filter.inspections": "Mga inspeksyon",
    "calendar.filter.todos": "Mga gagawin",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "Lahat ng proyekto",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "Milestone",
    "calendar.kind.inspection": "Inspeksyon",
    "calendar.kind.todo": "Gagawin",

    // ── Agenda day header ──
    "calendar.today": "Ngayon",
    "calendar.eventCount.one": "{n} kaganapan",
    "calendar.eventCount.other": "{n} kaganapan",

    // ── Month grid ──
    "calendar.prevMonth": "Nakaraang buwan",
    "calendar.nextMonth": "Susunod na buwan",

    // ── Empty state ──
    "calendar.empty.title": "Walang tumutugma sa mga filter na iyon",
    "calendar.empty.body":
      "Subukan ang ibang kumbinasyon, o i-clear ang mga ito para makita ang lahat ng paparating.",
    "calendar.empty.clear": "I-clear ang mga filter",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "Naisumite ang Building Permit sa Burnaby",
    "data.calevent.m-kitchen-building-submitted.note":
      "Inihain bilang #B2026-4471.",
    "data.calevent.m-kitchen-building-decision.title":
      "Inaasahang desisyon sa Building Permit",
    "data.calevent.m-kitchen-building-decision.note":
      "Karaniwang sumusunod sa timeline na ito ang pila ng Burnaby.",
    "data.calevent.i-kitchen-building-rough-frame.title":
      "Rough framing (tinatayang)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "Pagkatapos bumagsak ang dingding at maitayo ang bagong framing — bago ang drywall.",
    "data.calevent.i-kitchen-building-final.title":
      "Pinal na inspeksyon (tinatayang)",
    "data.calevent.i-kitchen-building-final.note":
      "Tapos na ang lahat: mga finish, fixture, lahat-lahat. Ang pag-sign-off.",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title":
      "Target: isumite ang Electrical Permit",
    "data.calevent.m-kitchen-electrical-target.note":
      "Tinatapos ni Lopez ang mga papeles.",
    "data.calevent.i-kitchen-electrical-elec-rough.title":
      "Electrical rough-in (tinatayang)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "Pagkakable sa loob ng mga dingding bago ito isara.",
    "data.calevent.i-kitchen-electrical-elec-final.title":
      "Pinal na elektrikal (tinatayang)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "Gumagana na ang lahat ng saksakan, switch, at fixture.",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title":
      "Target: isumite ang Plumbing Permit",
    "data.calevent.m-kitchen-plumbing-target.note":
      "Tinatapos ni Lopez ang mga papeles.",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title":
      "Nag-iwan ng komento ang Burnaby sa iyong Building Permit",
    "data.calevent.t-ai-1.note": "Suriin ang draft na email",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title":
      "Planuhin ang pag-renew ng iyong banyo kasama ang AI",
    "data.calevent.t-bathroom-scope.note":
      "Gagabayan kita sa mga pagpiling nakakaapekto sa gastos at mga permit.",
    "data.calevent.m-shed-research.title":
      "Kumpirmahin ang threshold ng permit para sa shed",
    "data.calevent.m-shed-research.note":
      "Hindi nangangailangan ng permit ang Burnaby para sa mga shed na wala pang 10 m². Ang sa iyo ay nasa hangganan mismo.",
    "data.calevent.m-deck-consult.title":
      "Nakatakda ang konsultasyon sa permit para sa deck",
    "data.calevent.m-deck-consult.note":
      "Tawag bago mag-aplay sa Burnaby — kumpirmahin ang setback at spec ng guardrail.",
    "data.calevent.t-deck-contractor.title": "Pumili ng kontratista para sa deck",
    "data.calevent.t-deck-contractor.note":
      "Mag-shortlist ako ng tatlong lokal na builder na may karanasan sa deck.",
    "data.calevent.m-bathroom-budget.title":
      "Tapusin ang badyet at saklaw ng banyo",
    "data.calevent.m-bathroom-budget.note":
      "Punto ng desisyon: pag-renew lang ng vanity vs. paglipat ng linen closet.",
  },

  "zh-Hans": {
    // ── Header band ──
    "calendar.eyebrow": "你的日历",
    "calendar.h1": "即将到来的事项",
    "calendar.sub": "你所有项目的日期 — 许可证、检查，以及你需要做的事。",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "全部",
    "calendar.filter.milestones": "里程碑",
    "calendar.filter.inspections": "检查",
    "calendar.filter.todos": "待办事项",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "所有项目",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "里程碑",
    "calendar.kind.inspection": "检查",
    "calendar.kind.todo": "待办事项",

    // ── Agenda day header ──
    "calendar.today": "今天",
    "calendar.eventCount.one": "{n} 项",
    "calendar.eventCount.other": "{n} 项",

    // ── Month grid ──
    "calendar.prevMonth": "上个月",
    "calendar.nextMonth": "下个月",

    // ── Empty state ──
    "calendar.empty.title": "没有符合这些筛选的项目",
    "calendar.empty.body": "试试其他组合，或者清除筛选以查看所有即将到来的事项。",
    "calendar.empty.clear": "清除筛选",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title": "建筑许可证已提交给 Burnaby",
    "data.calevent.m-kitchen-building-submitted.note": "以 #B2026-4471 号备案。",
    "data.calevent.m-kitchen-building-decision.title": "预计建筑许可证的审批结果",
    "data.calevent.m-kitchen-building-decision.note":
      "Burnaby 的排队通常按照这个时间进度推进。",
    "data.calevent.i-kitchen-building-rough-frame.title": "粗框架检查（预计）",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "在拆掉墙体、装好新框架之后 — 在上石膏板之前。",
    "data.calevent.i-kitchen-building-final.title": "最终检查（预计）",
    "data.calevent.i-kitchen-building-final.note":
      "一切就绪：饰面、装置，样样齐全。即最终签核。",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title": "目标：提交电力许可证",
    "data.calevent.m-kitchen-electrical-target.note": "Lopez 正在完成文件。",
    "data.calevent.i-kitchen-electrical-elec-rough.title": "电力粗装检查（预计）",
    "data.calevent.i-kitchen-electrical-elec-rough.note": "在封墙之前检查墙内的电线。",
    "data.calevent.i-kitchen-electrical-elec-final.title": "电力最终检查（预计）",
    "data.calevent.i-kitchen-electrical-elec-final.note": "插座、开关和灯具全部正常运作。",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title": "目标：提交水管许可证",
    "data.calevent.m-kitchen-plumbing-target.note": "Lopez 正在完成文件。",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title": "Burnaby 在你的建筑许可证上留下了评论",
    "data.calevent.t-ai-1.note": "查看邮件草稿",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title": "与 AI 一起规划你的浴室翻新",
    "data.calevent.t-bathroom-scope.note": "我会带你了解哪些选择会影响费用和许可证。",
    "data.calevent.m-shed-research.title": "确认储物棚的许可证门槛",
    "data.calevent.m-shed-research.note":
      "Burnaby 对小于 10 m² 的储物棚予以豁免。你的储物棚正好在临界线上。",
    "data.calevent.m-deck-consult.title": "已预约露台的许可证咨询",
    "data.calevent.m-deck-consult.note": "Burnaby 申请前通话 — 确认后退距离和护栏规格。",
    "data.calevent.t-deck-contractor.title": "为露台选一个承包商",
    "data.calevent.t-deck-contractor.note": "我会帮你筛选三个有露台经验的本地建筑商。",
    "data.calevent.m-bathroom-budget.title": "敲定浴室的预算和范围",
    "data.calevent.m-bathroom-budget.note": "决策点：只更换洗手台，还是把亚麻柜也挪走。",
  },

  ru: {
    // ── Header band ──
    "calendar.eyebrow": "Ваш календарь",
    "calendar.h1": "Что предстоит",
    "calendar.sub":
      "Все даты по вашим проектам — разрешения, проверки, дела, которые нужно сделать.",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "Все",
    "calendar.filter.milestones": "Вехи",
    "calendar.filter.inspections": "Проверки",
    "calendar.filter.todos": "Задачи",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "Все проекты",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "Веха",
    "calendar.kind.inspection": "Проверка",
    "calendar.kind.todo": "Задача",

    // ── Agenda day header ──
    "calendar.today": "Сегодня",
    "calendar.eventCount.one": "{n} событие",
    "calendar.eventCount.other": "{n} событий",

    // ── Month grid ──
    "calendar.prevMonth": "Предыдущий месяц",
    "calendar.nextMonth": "Следующий месяц",

    // ── Empty state ──
    "calendar.empty.title": "Ничего не соответствует этим фильтрам",
    "calendar.empty.body":
      "Попробуйте другую комбинацию или очистите их, чтобы увидеть всё предстоящее.",
    "calendar.empty.clear": "Очистить фильтры",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "Разрешение на строительство подано в Burnaby",
    "data.calevent.m-kitchen-building-submitted.note":
      "Зарегистрировано под № B2026-4471.",
    "data.calevent.m-kitchen-building-decision.title":
      "Ожидаемое решение по разрешению на строительство",
    "data.calevent.m-kitchen-building-decision.note":
      "Очередь в Burnaby обычно движется по этому графику.",
    "data.calevent.i-kitchen-building-rough-frame.title":
      "Черновой каркас (прогноз)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "После сноса стены и установки нового каркаса — перед гипсокартоном.",
    "data.calevent.i-kitchen-building-final.title":
      "Финальная проверка (прогноз)",
    "data.calevent.i-kitchen-building-final.note":
      "Всё готово: отделка, сантехника, всё целиком. Окончательное утверждение.",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title":
      "Цель: подать разрешение на электрику",
    "data.calevent.m-kitchen-electrical-target.note":
      "Lopez заканчивает оформление документов.",
    "data.calevent.i-kitchen-electrical-elec-rough.title":
      "Черновая электропроводка (прогноз)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "Проводка в стенах до того, как их закроют.",
    "data.calevent.i-kitchen-electrical-elec-final.title":
      "Финальная электрика (прогноз)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "Розетки, выключатели и светильники — всё работает.",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title":
      "Цель: подать разрешение на сантехнику",
    "data.calevent.m-kitchen-plumbing-target.note":
      "Lopez заканчивает оформление документов.",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title":
      "Burnaby оставил комментарий к вашему разрешению на строительство",
    "data.calevent.t-ai-1.note": "Просмотреть черновик письма",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title":
      "Определите объём обновления ванной вместе с ИИ",
    "data.calevent.t-bathroom-scope.note":
      "Я проведу вас по решениям, которые влияют на стоимость и разрешения.",
    "data.calevent.m-shed-research.title":
      "Подтвердить порог разрешения для сарая",
    "data.calevent.m-shed-research.note":
      "Burnaby освобождает от разрешения сараи меньше 10 m². Ваш — прямо на границе.",
    "data.calevent.m-deck-consult.title":
      "Назначена консультация по разрешению для террасы",
    "data.calevent.m-deck-consult.note":
      "Предварительный звонок в Burnaby — уточнить отступы и спецификацию ограждения.",
    "data.calevent.t-deck-contractor.title": "Выбрать подрядчика для террасы",
    "data.calevent.t-deck-contractor.note":
      "Я составлю короткий список из трёх местных строителей с опытом по террасам.",
    "data.calevent.m-bathroom-budget.title":
      "Утвердить бюджет и объём работ по ванной",
    "data.calevent.m-bathroom-budget.note":
      "Точка решения: обновить только тумбу или перенести бельевой шкаф.",
  },

  de: {
    // ── Header band ──
    "calendar.eyebrow": "Ihr Kalender",
    "calendar.h1": "Was ansteht",
    "calendar.sub":
      "Alle Termine aus Ihren Projekten — Genehmigungen, Inspektionen, Dinge, die Sie erledigen müssen.",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "Alle",
    "calendar.filter.milestones": "Meilensteine",
    "calendar.filter.inspections": "Inspektionen",
    "calendar.filter.todos": "Aufgaben",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "Alle Projekte",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "Meilenstein",
    "calendar.kind.inspection": "Inspektion",
    "calendar.kind.todo": "Aufgabe",

    // ── Agenda day header ──
    "calendar.today": "Heute",
    "calendar.eventCount.one": "{n} Termin",
    "calendar.eventCount.other": "{n} Termine",

    // ── Month grid ──
    "calendar.prevMonth": "Voriger Monat",
    "calendar.nextMonth": "Nächster Monat",

    // ── Empty state ──
    "calendar.empty.title": "Nichts passt zu diesen Filtern",
    "calendar.empty.body":
      "Probieren Sie eine andere Kombination oder löschen Sie sie, um alles Anstehende zu sehen.",
    "calendar.empty.clear": "Filter löschen",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "Baugenehmigung bei Burnaby eingereicht",
    "data.calevent.m-kitchen-building-submitted.note":
      "Eingereicht als #B2026-4471.",
    "data.calevent.m-kitchen-building-decision.title":
      "Erwartete Entscheidung zur Baugenehmigung",
    "data.calevent.m-kitchen-building-decision.note":
      "Die Warteschlange von Burnaby läuft normalerweise nach diesem Zeitplan.",
    "data.calevent.i-kitchen-building-rough-frame.title":
      "Rohbau-Rahmen (voraussichtlich)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "Nachdem die Wand abgerissen und der neue Rahmen steht — vor dem Trockenbau.",
    "data.calevent.i-kitchen-building-final.title":
      "Endinspektion (voraussichtlich)",
    "data.calevent.i-kitchen-building-final.note":
      "Alles fertig: Oberflächen, Armaturen, das ganze Programm. Die Abnahme.",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title":
      "Ziel: Elektrogenehmigung einreichen",
    "data.calevent.m-kitchen-electrical-target.note":
      "Lopez schließt den Papierkram ab.",
    "data.calevent.i-kitchen-electrical-elec-rough.title":
      "Elektro-Rohinstallation (voraussichtlich)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "Verkabelung in den Wänden, bevor sie geschlossen werden.",
    "data.calevent.i-kitchen-electrical-elec-final.title":
      "Elektro-Endabnahme (voraussichtlich)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "Steckdosen, Schalter und Leuchten funktionieren alle.",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title":
      "Ziel: Sanitärgenehmigung einreichen",
    "data.calevent.m-kitchen-plumbing-target.note":
      "Lopez schließt den Papierkram ab.",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title":
      "Burnaby hat einen Kommentar zu Ihrer Baugenehmigung hinterlassen",
    "data.calevent.t-ai-1.note": "E-Mail-Entwurf prüfen",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title":
      "Planen Sie Ihre Badrenovierung mit der KI",
    "data.calevent.t-bathroom-scope.note":
      "Ich führe Sie durch die Entscheidungen, die Kosten und Genehmigungen bestimmen.",
    "data.calevent.m-shed-research.title":
      "Genehmigungsgrenze für den Schuppen bestätigen",
    "data.calevent.m-shed-research.note":
      "Burnaby stellt Schuppen unter 10 m² frei. Ihrer liegt genau an der Grenze.",
    "data.calevent.m-deck-consult.title":
      "Genehmigungsberatung für die Terrasse gebucht",
    "data.calevent.m-deck-consult.note":
      "Vorab-Anruf bei Burnaby — Abstände und Geländer-Spezifikation bestätigen.",
    "data.calevent.t-deck-contractor.title":
      "Einen Auftragnehmer für die Terrasse wählen",
    "data.calevent.t-deck-contractor.note":
      "Ich erstelle eine Auswahlliste mit drei lokalen Bauunternehmen mit Terrassenerfahrung.",
    "data.calevent.m-bathroom-budget.title":
      "Budget und Umfang des Bades festlegen",
    "data.calevent.m-bathroom-budget.note":
      "Entscheidungspunkt: nur den Waschtisch erneuern oder den Wäscheschrank versetzen.",
  },

  ko: {
    // ── Header band ──
    "calendar.eyebrow": "내 캘린더",
    "calendar.h1": "다가오는 일정",
    "calendar.sub":
      "프로젝트의 모든 날짜 — 허가, 점검, 그리고 해야 할 일들.",

    // ── Filter chips (kind) ──
    "calendar.filter.all": "전체",
    "calendar.filter.milestones": "마일스톤",
    "calendar.filter.inspections": "점검",
    "calendar.filter.todos": "할 일",

    // ── Filter chips (project) ──
    "calendar.filter.allProjects": "모든 프로젝트",

    // ── Event kind labels (on each card) ──
    "calendar.kind.milestone": "마일스톤",
    "calendar.kind.inspection": "점검",
    "calendar.kind.todo": "할 일",

    // ── Agenda day header ──
    "calendar.today": "오늘",
    "calendar.eventCount.one": "이벤트 {n}개",
    "calendar.eventCount.other": "이벤트 {n}개",

    // ── Month grid ──
    "calendar.prevMonth": "이전 달",
    "calendar.nextMonth": "다음 달",

    // ── Empty state ──
    "calendar.empty.title": "해당 필터에 맞는 항목이 없습니다",
    "calendar.empty.body":
      "다른 조합을 시도하거나, 필터를 지워서 다가오는 모든 일정을 확인하세요.",
    "calendar.empty.clear": "필터 지우기",

    // ── Calendar-event data ──
    // Kitchen · Building Permit
    "data.calevent.m-kitchen-building-submitted.title":
      "건축 허가가 Burnaby에 제출됨",
    "data.calevent.m-kitchen-building-submitted.note": "#B2026-4471로 접수됨.",
    "data.calevent.m-kitchen-building-decision.title": "건축 허가에 대한 예상 결정",
    "data.calevent.m-kitchen-building-decision.note":
      "Burnaby의 처리 대기열은 보통 이 일정대로 진행됩니다.",
    "data.calevent.i-kitchen-building-rough-frame.title": "골조 작업 (예정)",
    "data.calevent.i-kitchen-building-rough-frame.note":
      "벽을 철거하고 새 골조를 세운 뒤 — 석고보드 작업 전.",
    "data.calevent.i-kitchen-building-final.title": "최종 점검 (예정)",
    "data.calevent.i-kitchen-building-final.note":
      "모든 작업 완료: 마감, 설비, 전부. 최종 승인.",

    // Kitchen · Electrical Permit
    "data.calevent.m-kitchen-electrical-target.title": "목표: 전기 허가 제출",
    "data.calevent.m-kitchen-electrical-target.note": "Lopez가 서류를 마무리하고 있습니다.",
    "data.calevent.i-kitchen-electrical-elec-rough.title": "전기 배선 작업 (예정)",
    "data.calevent.i-kitchen-electrical-elec-rough.note":
      "벽을 막기 전 벽 안의 배선 작업.",
    "data.calevent.i-kitchen-electrical-elec-final.title": "전기 최종 점검 (예정)",
    "data.calevent.i-kitchen-electrical-elec-final.note":
      "콘센트, 스위치, 조명 기구가 모두 작동합니다.",

    // Kitchen · Plumbing Permit
    "data.calevent.m-kitchen-plumbing-target.title": "목표: 배관 허가 제출",
    "data.calevent.m-kitchen-plumbing-target.note": "Lopez가 서류를 마무리하고 있습니다.",

    // To-do from AI suggestion (ai-1)
    "data.calevent.t-ai-1.title": "Burnaby가 귀하의 건축 허가에 의견을 남겼습니다",
    "data.calevent.t-ai-1.note": "이메일 초안 검토",

    // Hand-authored planning-stage items
    "data.calevent.t-bathroom-scope.title": "AI와 함께 욕실 리모델링 범위 정하기",
    "data.calevent.t-bathroom-scope.note":
      "비용과 허가에 영향을 주는 선택 사항들을 안내해 드리겠습니다.",
    "data.calevent.m-shed-research.title": "창고 허가 기준 확인",
    "data.calevent.m-shed-research.note":
      "Burnaby는 10 m² 미만의 창고를 면제합니다. 귀하의 창고는 딱 경계선에 있습니다.",
    "data.calevent.m-deck-consult.title": "데크 허가 상담 예약 완료",
    "data.calevent.m-deck-consult.note":
      "Burnaby 사전 신청 통화 — 이격 거리와 난간 사양 확인.",
    "data.calevent.t-deck-contractor.title": "데크 시공업체 선택하기",
    "data.calevent.t-deck-contractor.note":
      "데크 경험이 있는 지역 시공업체 세 곳을 추려 드리겠습니다.",
    "data.calevent.m-bathroom-budget.title": "욕실 예산 및 범위 확정",
    "data.calevent.m-bathroom-budget.note":
      "결정 시점: 세면대만 교체할지 vs. 린넨 수납장을 옮길지.",
  },
}
