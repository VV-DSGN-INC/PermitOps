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
  tl: {
    // Hero (migrated)
    "home.whats_happening": "Ano ang nangyayari",
    "home.hero.title": "Sinusuri ng Burnaby ang iyong mga plano.",
    "home.hero.days_tail": " Mga 9 na araw pa.",
    "home.hero.sub":
      "Ipinadala ni Lopez ang lahat noong Martes. Wala kang kailangang gawin ngayon — ipi-ping kita kapag may hiningi sila.",
    "home.hero.see_review": "Tingnan ang pagsusuri",
    "home.hero.ask": "Magtanong sa AI",

    // Featured project header
    "home.featured.heading": "Ang iyong {name}",
    "home.featured.target_prefix": "· target {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "Mula sa iyong AI",
    "home.suggestions.title": "Tatlong bagay na napansin ko",
    "home.suggestions.hint":
      "Wala sa mga ito ang madalian — pinapaalam ko lang sa iyo.",

    // The four permits section
    "home.permits.eyebrow": "Ang apat na permit",
    "home.permits.title": "Kung nasaan ang bawat isa",
    "home.permits.pulled_by_contractor": "Si Lopez ang kukuha nito",
    "home.permits.pulled_by_you": "Ikaw ang kukuha nito",

    // Other projects section
    "home.projects.eyebrow": "Ang iyong ibang mga proyekto",
    "home.projects.title": "Ano pa ang iyong binabalak",
    "home.projects.open": "Buksan",

    // Team section
    "home.team.eyebrow": "Ang koponan",
    "home.team.title": "Sino ang tumutulong",
    "home.team.contractor_since": "Nasa proyekto simula {date}",
    "home.team.contractor_pending": "Sasali pagkasimula namin",
    "home.team.reviewer_footer": "Sinusuri ang iyong mga aplikasyon",

    // Numbers section
    "home.numbers.eyebrow": "Sa isang sulyap",
    "home.numbers.title": "Ang mga numero",
    "home.numbers.budget": "Badyet",
    "home.numbers.permit_fees": "Mga bayarin sa permit",
    "home.numbers.started": "Nagsimula",
    "home.numbers.target_finish": "Target na pagtatapos",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "Nag-iwan ang Burnaby ng komento sa iyong Building Permit",
    "data.suggestion.ai-1.body":
      "Gusto nila ng section drawing na nagpapakita ng bagong header sa ibabaw ng tinanggal na dingding. Mayroon na nito ang iyong inhinyero (Vargas) — naghanda ako ng maikling email na humihiling sa kanya na ipadala ito nang direkta sa lungsod.",
    "data.suggestion.ai-1.primary": "Suriin ang draft na email",
    "data.suggestion.ai-1.secondary": "Markahan bilang tapos na",
    "data.suggestion.ai-2.headline":
      "Maaari kong tapusin ang iyong Energy Step Code form",
    "data.suggestion.ai-2.body":
      "Kailangan nito ang parehong sukat ng bintana at bilang ng recessed na ilaw na nasa floor plan mo na. Pupunan ko ito at ikaw na lang ang mag-aapruba.",
    "data.suggestion.ai-2.primary": "Punan mo ito para sa akin",
    "data.suggestion.ai-3.headline":
      "Paalala: Hindi pa nasisimulan ang Mechanical permit",
    "data.suggestion.ai-3.body":
      "Karaniwang huli itong kinukuha ni Lopez, pero kakailanganin ito bago ang pag-install ng range hood. Walang gagawin ngayon — bantayan lang para sa huling bahagi ng Hunyo.",
    "data.suggestion.ai-3.primary": "Paalalahanan ako sa Hunyo 20",
  },
  "zh-Hans": {
    // Hero (migrated)
    "home.whats_happening": "最新进展",
    "home.hero.title": "本拿比正在审查你的方案。",
    "home.hero.days_tail": " 大约还有9天。",
    "home.hero.sub":
      "Lopez 周二已经把所有材料都提交了。今天你无需做任何事——如果他们有要求，我会马上通知你。",
    "home.hero.see_review": "查看审查",
    "home.hero.ask": "向 AI 提问",

    // Featured project header
    "home.featured.heading": "你的{name}",
    "home.featured.target_prefix": "· 目标 {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "来自你的 AI",
    "home.suggestions.title": "我注意到三件事",
    "home.suggestions.hint": "这些都不紧急——只是让你了解一下情况。",

    // The four permits section
    "home.permits.eyebrow": "四个许可证",
    "home.permits.title": "每个进展到哪一步",
    "home.permits.pulled_by_contractor": "由 Lopez 申请",
    "home.permits.pulled_by_you": "由你申请",

    // Other projects section
    "home.projects.eyebrow": "你的其他项目",
    "home.projects.title": "你还在计划些什么",
    "home.projects.open": "打开",

    // Team section
    "home.team.eyebrow": "团队",
    "home.team.title": "谁在帮你",
    "home.team.contractor_since": "自 {date} 起参与项目",
    "home.team.contractor_pending": "一开工就会加入",
    "home.team.reviewer_footer": "审查你的申请",

    // Numbers section
    "home.numbers.eyebrow": "概览",
    "home.numbers.title": "数字",
    "home.numbers.budget": "预算",
    "home.numbers.permit_fees": "许可证费用",
    "home.numbers.started": "开始日期",
    "home.numbers.target_finish": "目标完工",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline": "本拿比就你的建筑许可证留了一条意见",
    "data.suggestion.ai-1.body":
      "他们想要一张剖面图，显示拆除的那面墙上方的新过梁。你的工程师（Vargas）已经有这个了——我起草了一封简短的电子邮件，请他直接发给市政府。",
    "data.suggestion.ai-1.primary": "查看邮件草稿",
    "data.suggestion.ai-1.secondary": "标记为已处理",
    "data.suggestion.ai-2.headline": "我可以帮你填好 Energy Step Code 表格",
    "data.suggestion.ai-2.body":
      "它需要的窗户尺寸和嵌入式灯具数量，你的楼层平面图上已经有了。我帮你填好，你只需批准即可。",
    "data.suggestion.ai-2.primary": "帮我填好它",
    "data.suggestion.ai-3.headline": "提醒：机械许可证还没有开始",
    "data.suggestion.ai-3.body":
      "Lopez 通常最后才申请这个，但在安装抽油烟机之前就会需要它。今天无需操作——只是六月底要留意的事项。",
    "data.suggestion.ai-3.primary": "6月20日提醒我",
  },
  ru: {
    // Hero (migrated)
    "home.whats_happening": "Что происходит",
    "home.hero.title": "Burnaby рассматривает ваши планы.",
    "home.hero.days_tail": " Ещё около 9 дней.",
    "home.hero.sub":
      "Lopez отправил всё во вторник. Сегодня от вас ничего не требуется — я напишу вам, если они что-то запросят.",
    "home.hero.see_review": "Посмотреть рассмотрение",
    "home.hero.ask": "Задать вопрос ИИ",

    // Featured project header
    "home.featured.heading": "Ваш {name}",
    "home.featured.target_prefix": "· цель {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "От вашего ИИ",
    "home.suggestions.title": "Я заметил три вещи",
    "home.suggestions.hint":
      "Ничего срочного — просто держу вас в курсе.",

    // The four permits section
    "home.permits.eyebrow": "Четыре разрешения",
    "home.permits.title": "На каком этапе каждое",
    "home.permits.pulled_by_contractor": "Это оформляет Lopez",
    "home.permits.pulled_by_you": "Это оформляете вы",

    // Other projects section
    "home.projects.eyebrow": "Ваши другие проекты",
    "home.projects.title": "Что ещё вы планируете",
    "home.projects.open": "Открыть",

    // Team section
    "home.team.eyebrow": "Команда",
    "home.team.title": "Кто помогает",
    "home.team.contractor_since": "В проекте с {date}",
    "home.team.contractor_pending": "Присоединится, как только мы начнём",
    "home.team.reviewer_footer": "Рассматривает ваши заявки",

    // Numbers section
    "home.numbers.eyebrow": "Кратко",
    "home.numbers.title": "Цифры",
    "home.numbers.budget": "Бюджет",
    "home.numbers.permit_fees": "Сборы за разрешения",
    "home.numbers.started": "Начато",
    "home.numbers.target_finish": "Планируемое завершение",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "Burnaby оставил комментарий к вашему разрешению на строительство",
    "data.suggestion.ai-1.body":
      "Им нужен чертёж разреза, показывающий новую перемычку над снесённой стеной. У вашего инженера (Vargas) он уже есть — я подготовил короткое письмо с просьбой отправить его напрямую в город.",
    "data.suggestion.ai-1.primary": "Просмотреть черновик письма",
    "data.suggestion.ai-1.secondary": "Отметить как выполненное",
    "data.suggestion.ai-2.headline":
      "Я могу заполнить вашу форму Energy Step Code",
    "data.suggestion.ai-2.body":
      "Ей нужны те же размеры окон и количество встроенных светильников, которые уже есть на вашем поэтажном плане. Я её заполню, а вам останется только утвердить.",
    "data.suggestion.ai-2.primary": "Заполнить за меня",
    "data.suggestion.ai-3.headline":
      "Обратите внимание: разрешение на механические работы ещё не начато",
    "data.suggestion.ai-3.body":
      "Lopez обычно оформляет его последним, но оно понадобится до установки вытяжки. Сегодня ничего делать не нужно — просто пункт для контроля на конец июня.",
    "data.suggestion.ai-3.primary": "Напомнить мне 20 июня",
  },
  de: {
    // Hero (migrated)
    "home.whats_happening": "Was gerade passiert",
    "home.hero.title": "Burnaby prüft Ihre Pläne.",
    "home.hero.days_tail": " Noch etwa 9 Tage.",
    "home.hero.sub":
      "Lopez hat am Dienstag alles eingereicht. Heute müssen Sie nichts tun — ich melde mich, falls etwas angefragt wird.",
    "home.hero.see_review": "Prüfung ansehen",
    "home.hero.ask": "Die KI etwas fragen",

    // Featured project header
    "home.featured.heading": "Ihr {name}",
    "home.featured.target_prefix": "· Ziel {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "Von Ihrer KI",
    "home.suggestions.title": "Drei Dinge sind mir aufgefallen",
    "home.suggestions.hint":
      "Nichts davon ist dringend — ich halte Sie nur auf dem Laufenden.",

    // The four permits section
    "home.permits.eyebrow": "Die vier Genehmigungen",
    "home.permits.title": "Wo jede einzelne steht",
    "home.permits.pulled_by_contractor": "Lopez beantragt das",
    "home.permits.pulled_by_you": "Das beantragen Sie",

    // Other projects section
    "home.projects.eyebrow": "Ihre anderen Projekte",
    "home.projects.title": "Was Sie sonst noch planen",
    "home.projects.open": "Öffnen",

    // Team section
    "home.team.eyebrow": "Das Team",
    "home.team.title": "Wer hilft",
    "home.team.contractor_since": "Seit {date} am Projekt beteiligt",
    "home.team.contractor_pending": "Steigt zum Projektstart ein",
    "home.team.reviewer_footer": "Prüft Ihre Anträge",

    // Numbers section
    "home.numbers.eyebrow": "Auf einen Blick",
    "home.numbers.title": "Die Zahlen",
    "home.numbers.budget": "Budget",
    "home.numbers.permit_fees": "Genehmigungsgebühren",
    "home.numbers.started": "Begonnen",
    "home.numbers.target_finish": "Geplanter Abschluss",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "Burnaby hat einen Kommentar zu Ihrer Baugenehmigung hinterlassen",
    "data.suggestion.ai-1.body":
      "Sie möchten eine Schnittzeichnung, die den neuen Sturz über der entfernten Wand zeigt. Ihr Ingenieur (Vargas) hat sie bereits — ich habe eine kurze E-Mail entworfen, in der ich ihn bitte, sie direkt an die Stadt zu senden.",
    "data.suggestion.ai-1.primary": "E-Mail-Entwurf prüfen",
    "data.suggestion.ai-1.secondary": "Als erledigt markieren",
    "data.suggestion.ai-2.headline":
      "Ich kann Ihr Energy Step Code-Formular ausfüllen",
    "data.suggestion.ai-2.body":
      "Es braucht dieselben Fenstermaße und die Anzahl der Einbauleuchten, die bereits in Ihrem Grundriss stehen. Ich fülle es aus, und Sie müssen es nur genehmigen.",
    "data.suggestion.ai-2.primary": "Für mich ausfüllen",
    "data.suggestion.ai-3.headline":
      "Hinweis: Die Genehmigung für die Haustechnik wurde noch nicht begonnen",
    "data.suggestion.ai-3.body":
      "Lopez beantragt diese normalerweise zuletzt, aber sie wird vor dem Einbau der Dunstabzugshaube benötigt. Heute keine Aktion nötig — nur ein Punkt zum Beobachten für Ende Juni.",
    "data.suggestion.ai-3.primary": "Erinnere mich am 20. Juni",
  },
  ko: {
    // Hero (migrated)
    "home.whats_happening": "진행 상황",
    "home.hero.title": "Burnaby가 귀하의 계획을 검토하고 있습니다.",
    "home.hero.days_tail": " 약 9일 더 남았습니다.",
    "home.hero.sub":
      "Lopez가 화요일에 모든 것을 보냈습니다. 오늘은 하실 일이 없습니다 — 무언가 요청이 오면 알려 드리겠습니다.",
    "home.hero.see_review": "검토 보기",
    "home.hero.ask": "AI에게 질문하기",

    // Featured project header
    "home.featured.heading": "귀하의 {name}",
    "home.featured.target_prefix": "· 목표 {date}",

    // AI suggestions section
    "home.suggestions.eyebrow": "귀하의 AI로부터",
    "home.suggestions.title": "제가 발견한 세 가지",
    "home.suggestions.hint": "급한 것은 없습니다 — 그저 알려 드리는 것입니다.",

    // The four permits section
    "home.permits.eyebrow": "네 가지 허가",
    "home.permits.title": "각 항목의 진행 상황",
    "home.permits.pulled_by_contractor": "Lopez가 신청합니다",
    "home.permits.pulled_by_you": "직접 신청하십니다",

    // Other projects section
    "home.projects.eyebrow": "귀하의 다른 프로젝트",
    "home.projects.title": "그 밖에 무엇을 계획 중이신가요",
    "home.projects.open": "열기",

    // Team section
    "home.team.eyebrow": "팀",
    "home.team.title": "누가 돕고 있나요",
    "home.team.contractor_since": "{date}부터 프로젝트 참여",
    "home.team.contractor_pending": "착수하면 합류합니다",
    "home.team.reviewer_footer": "귀하의 신청서를 검토합니다",

    // Numbers section
    "home.numbers.eyebrow": "한눈에 보기",
    "home.numbers.title": "숫자",
    "home.numbers.budget": "예산",
    "home.numbers.permit_fees": "허가 수수료",
    "home.numbers.started": "시작일",
    "home.numbers.target_finish": "목표 완료일",
    "home.numbers.empty": "—",

    // AI suggestion content (owned here)
    "data.suggestion.ai-1.headline":
      "Burnaby가 귀하의 건축 허가에 의견을 남겼습니다",
    "data.suggestion.ai-1.body":
      "철거된 벽 위에 새로 설치된 헤더를 보여주는 단면도를 원합니다. 귀하의 엔지니어(Vargas)가 이미 가지고 있습니다 — 제가 그에게 시청으로 직접 보내 달라고 요청하는 짧은 이메일 초안을 작성했습니다.",
    "data.suggestion.ai-1.primary": "이메일 초안 검토",
    "data.suggestion.ai-1.secondary": "처리됨으로 표시",
    "data.suggestion.ai-2.headline":
      "제가 귀하의 Energy Step Code 양식을 완성할 수 있습니다",
    "data.suggestion.ai-2.body":
      "이미 평면도에 있는 동일한 창문 치수와 매입등 개수가 필요합니다. 제가 작성할 테니 귀하는 승인만 하시면 됩니다.",
    "data.suggestion.ai-2.primary": "저 대신 작성해 주세요",
    "data.suggestion.ai-3.headline":
      "참고: 기계 설비 허가가 아직 시작되지 않았습니다",
    "data.suggestion.ai-3.body":
      "Lopez는 보통 이것을 마지막에 신청하지만, 레인지 후드 설치 전에 필요합니다. 오늘은 할 일이 없습니다 — 6월 말에 확인할 항목일 뿐입니다.",
    "data.suggestion.ai-3.primary": "6월 20일에 알려 주세요",
  },
}
