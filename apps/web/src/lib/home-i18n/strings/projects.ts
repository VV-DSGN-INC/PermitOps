import type { LocaleMessages } from "../types"

/**
 * Projects index + project-detail strings, project data (names/summaries),
 * photo captions, and kind/status labels. Owned by the projects agent.
 *
 * Permit/status data lives in permit.ts and is referenced by key
 * (data.permit.*, data.status.*) with an English fallback.
 */
export const projects: LocaleMessages = {
  en: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "Your projects",
    "projects.title": "Everything you’re working on",
    "projects.sub":
      "Active and planning — all in one place. Open any one to see the details.",
    "projects.filter.all": "All",
    "projects.filter.active": "Active",
    "projects.filter.planning": "Planning",
    "projects.featured": "Featured",
    "projects.permits_done": "{done} of {total} permits done",
    "projects.not_scoped": "Not yet scoped",
    "projects.empty.title": "Nothing matches that filter",
    "projects.empty.sub":
      "Switch back to all projects to see everything you’re working on.",
    "projects.empty.show_all": "Show all projects",

    // ---- Project detail chrome ----
    "project.back": "All your projects",
    "project.look.eyebrow": "The look",
    "project.look.title_planning": "Where we’re heading",
    "project.look.title_active": "How it’s coming along",
    "project.state.eyebrow": "The state of things",
    "project.state.title": "Where it is now",
    "project.scoping.title": "Still scoping",
    "project.scoping.body":
      "We’re early on this one. The AI can help you firm up the scope, budget, and whether you’ll need any permits before you commit.",
    "project.scoping.cta": "Talk to AI to firm this up",
    "project.state.stage": "Stage",
    "project.state.complete": "{progress}% complete",
    "project.state.contractor_since": "On the project since {date}",
    "project.state.contractor_pending": "Joining once we kick off",
    "project.state.reviewer_footer": "Reviews your applications",
    "project.permits.eyebrow": "Paperwork",
    "project.permits.title": "Permits",
    "project.permits.empty.title": "No permits yet",
    "project.permits.empty.body":
      "We’ll know once we scope this together. Burnaby’s permit rules depend on size, height, and how close it sits to the property line.",
    "project.permits.empty.cta": "Open AI assistant",
    "project.permits.pulled_contractor": "Lopez pulls this",
    "project.permits.pulled_you": "You pull this",
    "project.glance.eyebrow": "At a glance",
    "project.glance.title": "The numbers",
    "project.stat.budget": "Budget",
    "project.stat.stage": "Stage",
    "project.stat.status": "Status",
    "project.stat.scoping_ai": "Scoping with AI",
    "project.stat.started": "Started",
    "project.stat.target_finish": "Target finish",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "In progress",
    "photo.kind.reference": "Reference",
    "photo.kind.inspiration": "Inspiration",
    "photo.kind.existing": "Before",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "Renovation",
    "data.kind.addition": "Addition",
    "data.kind.outdoor": "Outdoor",
    "data.kind.new_build": "New build",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "Planning",
    "data.pstatus.active": "Active",
    "data.pstatus.completed": "Completed",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "Kitchen remodel",
    "data.project.kitchen.summary":
      "Open up the wall between the kitchen and dining room, move the sink, replace cabinets and appliances.",
    "data.project.bathroom.name": "Main bathroom refresh",
    "data.project.bathroom.summary":
      "Replace the vanity, retile the floor and shower surround, swap lighting and the toilet. Considering moving the linen closet.",
    "data.project.shed.name": "Backyard shed",
    "data.project.shed.summary":
      "8×10 storage shed off the back fence. Probably under the Burnaby permit threshold but want to confirm.",
    "data.project.deck.name": "Backyard deck addition",
    "data.project.deck.summary":
      "12×16 deck off the kitchen sliding door. Over 24\" off grade so definitely a permit.",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "The kitchen as it stands today — small galley with the old stove and tired cabinets.",
    "data.photo.kitchen-demo.caption":
      "Wall down, studs exposed. The moment before everything gets closed up again.",
    "data.photo.kitchen-prog-1.caption":
      "Framing and rough work in around the new opening.",
    "data.photo.kitchen-target.caption":
      "Target look — bright island, white cabinets, open to the dining room.",
    "data.photo.kitchen-inspo.caption":
      "Stone-topped island with pendants — the vibe we’re after.",
    "data.photo.bath-current.caption":
      "Bathroom today — original toilet and builder vanity, ready for a refresh.",
    "data.photo.bath-inspo-1.caption":
      "Walk-in shower and clean vanity — the direction we like.",
    "data.photo.bath-inspo-2.caption":
      "Big tub next to a glass walk-in shower — light and airy.",
    "data.photo.shed-1.caption":
      "Simple gable shed with a single door and window — similar footprint to ours.",
    "data.photo.shed-2.caption":
      "Weathered wood-clad shed with the doors thrown open — character we like.",
    "data.photo.shed-3.caption":
      "Classic shingle shed with painted siding — proves the small footprint works.",
    "data.photo.deck-back-yard.caption":
      "Backyard before the deck — grass running out to the fence.",
    "data.photo.deck-ref-1.caption":
      "Cedar deck stepping down to a grassy yard — close to what we want off the kitchen.",
    "data.photo.deck-ref-2.caption":
      "Composite deck with a table and umbrella — easy upkeep.",
    "data.photo.deck-ref-3.caption":
      "Built-in bench seating along the perimeter — saves on patio furniture.",
  },

  fr: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "Vos projets",
    "projects.title": "Tout ce sur quoi vous travaillez",
    "projects.sub":
      "En cours et en planification — tout au même endroit. Ouvrez-en un pour voir les détails.",
    "projects.filter.all": "Tous",
    "projects.filter.active": "En cours",
    "projects.filter.planning": "Planification",
    "projects.featured": "En vedette",
    "projects.permits_done": "{done} permis sur {total} terminés",
    "projects.not_scoped": "Pas encore défini",
    "projects.empty.title": "Rien ne correspond à ce filtre",
    "projects.empty.sub":
      "Revenez à tous les projets pour voir tout ce sur quoi vous travaillez.",
    "projects.empty.show_all": "Afficher tous les projets",

    // ---- Project detail chrome ----
    "project.back": "Tous vos projets",
    "project.look.eyebrow": "L’allure",
    "project.look.title_planning": "Où nous allons",
    "project.look.title_active": "Comment ça avance",
    "project.state.eyebrow": "L’état des choses",
    "project.state.title": "Où ça en est",
    "project.scoping.title": "Encore à définir",
    "project.scoping.body":
      "On en est au tout début. L’IA peut vous aider à préciser la portée, le budget et déterminer si vous aurez besoin de permis avant de vous engager.",
    "project.scoping.cta": "Parler à l’IA pour préciser ça",
    "project.state.stage": "Étape",
    "project.state.complete": "{progress}% terminé",
    "project.state.contractor_since": "Sur le projet depuis le {date}",
    "project.state.contractor_pending": "Se joindra dès le lancement",
    "project.state.reviewer_footer": "Examine vos demandes",
    "project.permits.eyebrow": "Paperasse",
    "project.permits.title": "Permis",
    "project.permits.empty.title": "Pas encore de permis",
    "project.permits.empty.body":
      "On le saura une fois qu’on aura défini ça ensemble. Les règles de permis de Burnaby dépendent de la taille, de la hauteur et de la distance par rapport à la limite de propriété.",
    "project.permits.empty.cta": "Ouvrir l’assistant IA",
    "project.permits.pulled_contractor": "Lopez s’en occupe",
    "project.permits.pulled_you": "Vous vous en occupez",
    "project.glance.eyebrow": "En un coup d’œil",
    "project.glance.title": "Les chiffres",
    "project.stat.budget": "Budget",
    "project.stat.stage": "Étape",
    "project.stat.status": "Statut",
    "project.stat.scoping_ai": "Définition avec l’IA",
    "project.stat.started": "Commencé",
    "project.stat.target_finish": "Fin visée",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "En cours",
    "photo.kind.reference": "Référence",
    "photo.kind.inspiration": "Inspiration",
    "photo.kind.existing": "Avant",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "Rénovation",
    "data.kind.addition": "Agrandissement",
    "data.kind.outdoor": "Extérieur",
    "data.kind.new_build": "Construction neuve",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "Planification",
    "data.pstatus.active": "En cours",
    "data.pstatus.completed": "Terminé",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "Rénovation de la cuisine",
    "data.project.kitchen.summary":
      "Ouvrir le mur entre la cuisine et la salle à manger, déplacer l’évier, remplacer les armoires et les électroménagers.",
    "data.project.bathroom.name": "Rafraîchissement de la salle de bain principale",
    "data.project.bathroom.summary":
      "Remplacer le meuble-lavabo, refaire le carrelage du sol et du contour de la douche, changer l’éclairage et la toilette. On envisage de déplacer l’armoire à linge.",
    "data.project.shed.name": "Cabanon de jardin",
    "data.project.shed.summary":
      "Cabanon de rangement de 8×10 le long de la clôture arrière. Probablement sous le seuil de permis de Burnaby, mais on veut le confirmer.",
    "data.project.deck.name": "Ajout d’une terrasse à l’arrière",
    "data.project.deck.summary":
      "Terrasse de 12×16 devant la porte coulissante de la cuisine. À plus de 24 po du sol, donc un permis est obligatoire.",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "La cuisine telle qu’elle est aujourd’hui — petite cuisine en couloir avec la vieille cuisinière et des armoires fatiguées.",
    "data.photo.kitchen-demo.caption":
      "Mur abattu, montants à nu. Le moment juste avant que tout soit refermé.",
    "data.photo.kitchen-prog-1.caption":
      "Charpente et travaux bruts autour de la nouvelle ouverture.",
    "data.photo.kitchen-target.caption":
      "Allure visée — îlot lumineux, armoires blanches, ouvert sur la salle à manger.",
    "data.photo.kitchen-inspo.caption":
      "Îlot à dessus de pierre avec suspensions — l’ambiance qu’on recherche.",
    "data.photo.bath-current.caption":
      "La salle de bain aujourd’hui — toilette d’origine et meuble-lavabo de base, prête pour un rafraîchissement.",
    "data.photo.bath-inspo-1.caption":
      "Douche à l’italienne et meuble-lavabo épuré — la direction qu’on aime.",
    "data.photo.bath-inspo-2.caption":
      "Grande baignoire à côté d’une douche à l’italienne en verre — lumineux et aéré.",
    "data.photo.shed-1.caption":
      "Cabanon simple à pignon avec une seule porte et une fenêtre — emprise au sol semblable à la nôtre.",
    "data.photo.shed-2.caption":
      "Cabanon en bois patiné avec les portes grandes ouvertes — le caractère qu’on aime.",
    "data.photo.shed-3.caption":
      "Cabanon classique à bardeaux avec revêtement peint — preuve que la petite emprise au sol fonctionne.",
    "data.photo.deck-back-yard.caption":
      "La cour avant la terrasse — la pelouse s’étendant jusqu’à la clôture.",
    "data.photo.deck-ref-1.caption":
      "Terrasse en cèdre descendant vers une pelouse — proche de ce qu’on veut devant la cuisine.",
    "data.photo.deck-ref-2.caption":
      "Terrasse en composite avec une table et un parasol — entretien facile.",
    "data.photo.deck-ref-3.caption":
      "Banquettes intégrées sur le pourtour — économise sur le mobilier de patio.",
  },

  "zh-Yue": {
    // ---- Projects index chrome ----
    "projects.eyebrow": "你嘅項目",
    "projects.title": "你手頭上嘅所有嘢",
    "projects.sub":
      "進行中同計劃中——全部喺同一個地方。撳任何一個就睇到詳情。",
    "projects.filter.all": "全部",
    "projects.filter.active": "進行中",
    "projects.filter.planning": "計劃中",
    "projects.featured": "精選",
    "projects.permits_done": "{total} 個許可證完成咗 {done} 個",
    "projects.not_scoped": "仲未定範圍",
    "projects.empty.title": "冇嘢符合呢個篩選",
    "projects.empty.sub": "返去全部項目，睇返你手頭上嘅所有嘢。",
    "projects.empty.show_all": "顯示全部項目",

    // ---- Project detail chrome ----
    "project.back": "你嘅全部項目",
    "project.look.eyebrow": "外觀",
    "project.look.title_planning": "我哋嘅方向",
    "project.look.title_active": "進展點樣",
    "project.state.eyebrow": "目前情況",
    "project.state.title": "依家去到邊",
    "project.scoping.title": "仲喺度定範圍",
    "project.scoping.body":
      "呢個項目仲喺好初期。喺你落實之前，AI 可以幫你確定範圍、預算，同埋睇下使唔使申請任何許可證。",
    "project.scoping.cta": "搵 AI 傾下，落實呢個",
    "project.state.stage": "階段",
    "project.state.complete": "完成咗 {progress}%",
    "project.state.contractor_since": "由 {date} 開始參與呢個項目",
    "project.state.contractor_pending": "開工就會加入",
    "project.state.reviewer_footer": "審查你嘅申請",
    "project.permits.eyebrow": "文件手續",
    "project.permits.title": "許可證",
    "project.permits.empty.title": "仲未有許可證",
    "project.permits.empty.body":
      "等我哋一齊定咗範圍就知。本納比嘅許可證規定，要睇尺寸、高度，同埋距離地界有幾近。",
    "project.permits.empty.cta": "打開 AI 助手",
    "project.permits.pulled_contractor": "Lopez 負責申請",
    "project.permits.pulled_you": "你負責申請",
    "project.glance.eyebrow": "一覽",
    "project.glance.title": "數字",
    "project.stat.budget": "預算",
    "project.stat.stage": "階段",
    "project.stat.status": "狀態",
    "project.stat.scoping_ai": "同 AI 定範圍中",
    "project.stat.started": "開始",
    "project.stat.target_finish": "目標完成",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "進行中",
    "photo.kind.reference": "參考",
    "photo.kind.inspiration": "靈感",
    "photo.kind.existing": "之前",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "翻新",
    "data.kind.addition": "加建",
    "data.kind.outdoor": "戶外",
    "data.kind.new_build": "新建",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "計劃中",
    "data.pstatus.active": "進行中",
    "data.pstatus.completed": "完成",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "廚房改造",
    "data.project.kitchen.summary":
      "打通廚房同飯廳之間嘅牆，搬走星盆，換埋櫥櫃同電器。",
    "data.project.bathroom.name": "主浴室翻新",
    "data.project.bathroom.summary":
      "換洗手盆櫃，重新鋪地磚同淋浴間牆磚，換埋燈同馬桶。仲考慮緊搬走放被單嘅櫃。",
    "data.project.shed.name": "後院儲物棚",
    "data.project.shed.summary":
      "靠後欄嘅 8×10 儲物棚。應該喺本納比許可證門檻以下，不過想確認下。",
    "data.project.deck.name": "後院露台加建",
    "data.project.deck.summary":
      "廚房趟門出面嘅 12×16 露台。離地超過 24 吋，所以實要申請許可證。",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "廚房而家嘅樣——窄窄嘅長條形廚房，配住舊爐頭同殘舊嘅櫥櫃。",
    "data.photo.kitchen-demo.caption":
      "牆拆咗，露出晒龍骨。一切重新封返之前嗰一刻。",
    "data.photo.kitchen-prog-1.caption": "新開口周圍嘅框架同基礎工程。",
    "data.photo.kitchen-target.caption":
      "目標外觀——光猛嘅島台、白色櫥櫃，通向飯廳。",
    "data.photo.kitchen-inspo.caption":
      "石面島台配吊燈——我哋想要嘅感覺。",
    "data.photo.bath-current.caption":
      "浴室而家嘅樣——原裝馬桶同基本洗手盆櫃，準備翻新。",
    "data.photo.bath-inspo-1.caption":
      "步入式淋浴間同簡潔嘅洗手盆櫃——我哋鍾意嘅方向。",
    "data.photo.bath-inspo-2.caption":
      "大浴缸旁邊有個玻璃步入式淋浴間——光猛又通爽。",
    "data.photo.shed-1.caption":
      "簡單嘅人字頂儲物棚，得一道門同一扇窗——同我哋嘅佔地面積差唔多。",
    "data.photo.shed-2.caption":
      "舊木板包嘅儲物棚，啲門大開——我哋鍾意嗰種味道。",
    "data.photo.shed-3.caption":
      "經典木瓦儲物棚配油漆外牆——證明咁細嘅佔地都得。",
    "data.photo.deck-back-yard.caption":
      "整露台之前嘅後院——草地一直延伸到欄杆。",
    "data.photo.deck-ref-1.caption":
      "杉木露台一級級落去草地——同我哋想喺廚房出面嗰個好接近。",
    "data.photo.deck-ref-2.caption":
      "合成材料露台配檯同遮——易打理。",
    "data.photo.deck-ref-3.caption":
      "沿住四周嘅內置長櫈——慳返露台傢俬。",
  },

  pa: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "ਤੁਹਾਡੇ ਪ੍ਰੋਜੈਕਟ",
    "projects.title": "ਉਹ ਸਭ ਕੁਝ ਜਿਸ 'ਤੇ ਤੁਸੀਂ ਕੰਮ ਕਰ ਰਹੇ ਹੋ",
    "projects.sub":
      "ਚਾਲੂ ਅਤੇ ਯੋਜਨਾ ਅਧੀਨ — ਸਭ ਇੱਕੋ ਥਾਂ। ਵੇਰਵੇ ਦੇਖਣ ਲਈ ਕੋਈ ਵੀ ਖੋਲ੍ਹੋ।",
    "projects.filter.all": "ਸਾਰੇ",
    "projects.filter.active": "ਚਾਲੂ",
    "projects.filter.planning": "ਯੋਜਨਾ",
    "projects.featured": "ਵਿਸ਼ੇਸ਼",
    "projects.permits_done": "{total} ਵਿੱਚੋਂ {done} ਪਰਮਿਟ ਮੁਕੰਮਲ",
    "projects.not_scoped": "ਅਜੇ ਤੈਅ ਨਹੀਂ ਹੋਇਆ",
    "projects.empty.title": "ਇਸ ਫਿਲਟਰ ਨਾਲ ਕੁਝ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ",
    "projects.empty.sub":
      "ਉਹ ਸਭ ਕੁਝ ਦੇਖਣ ਲਈ ਜਿਸ 'ਤੇ ਤੁਸੀਂ ਕੰਮ ਕਰ ਰਹੇ ਹੋ, ਸਾਰੇ ਪ੍ਰੋਜੈਕਟਾਂ 'ਤੇ ਵਾਪਸ ਜਾਓ।",
    "projects.empty.show_all": "ਸਾਰੇ ਪ੍ਰੋਜੈਕਟ ਦਿਖਾਓ",

    // ---- Project detail chrome ----
    "project.back": "ਤੁਹਾਡੇ ਸਾਰੇ ਪ੍ਰੋਜੈਕਟ",
    "project.look.eyebrow": "ਦਿੱਖ",
    "project.look.title_planning": "ਅਸੀਂ ਕਿੱਧਰ ਜਾ ਰਹੇ ਹਾਂ",
    "project.look.title_active": "ਕਿਵੇਂ ਅੱਗੇ ਵਧ ਰਿਹਾ ਹੈ",
    "project.state.eyebrow": "ਹਾਲਾਤ",
    "project.state.title": "ਹੁਣ ਇਹ ਕਿੱਥੇ ਹੈ",
    "project.scoping.title": "ਅਜੇ ਤੈਅ ਕਰ ਰਹੇ ਹਾਂ",
    "project.scoping.body":
      "ਅਸੀਂ ਇਸ ਉੱਤੇ ਸ਼ੁਰੂਆਤੀ ਪੜਾਅ 'ਤੇ ਹਾਂ। ਤੁਹਾਡੇ ਵਚਨਬੱਧ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ AI ਤੁਹਾਨੂੰ ਦਾਇਰਾ, ਬਜਟ, ਅਤੇ ਕੀ ਤੁਹਾਨੂੰ ਕੋਈ ਪਰਮਿਟ ਚਾਹੀਦਾ ਹੈ — ਪੱਕਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।",
    "project.scoping.cta": "ਇਸ ਨੂੰ ਪੱਕਾ ਕਰਨ ਲਈ AI ਨਾਲ ਗੱਲ ਕਰੋ",
    "project.state.stage": "ਪੜਾਅ",
    "project.state.complete": "{progress}% ਮੁਕੰਮਲ",
    "project.state.contractor_since": "{date} ਤੋਂ ਪ੍ਰੋਜੈਕਟ 'ਤੇ",
    "project.state.contractor_pending": "ਸ਼ੁਰੂ ਹੁੰਦੇ ਹੀ ਸ਼ਾਮਲ ਹੋਵੇਗਾ",
    "project.state.reviewer_footer": "ਤੁਹਾਡੀਆਂ ਅਰਜ਼ੀਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦਾ ਹੈ",
    "project.permits.eyebrow": "ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ",
    "project.permits.title": "ਪਰਮਿਟ",
    "project.permits.empty.title": "ਅਜੇ ਕੋਈ ਪਰਮਿਟ ਨਹੀਂ",
    "project.permits.empty.body":
      "ਜਦੋਂ ਅਸੀਂ ਇਕੱਠੇ ਇਸ ਦਾ ਦਾਇਰਾ ਤੈਅ ਕਰਾਂਗੇ ਤਾਂ ਪਤਾ ਲੱਗ ਜਾਵੇਗਾ। ਬਰਨਬੀ ਦੇ ਪਰਮਿਟ ਨਿਯਮ ਆਕਾਰ, ਉਚਾਈ, ਅਤੇ ਇਹ ਜਾਇਦਾਦ ਦੀ ਹੱਦ ਦੇ ਕਿੰਨਾ ਨੇੜੇ ਹੈ — ਇਸ 'ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਨ।",
    "project.permits.empty.cta": "AI ਸਹਾਇਕ ਖੋਲ੍ਹੋ",
    "project.permits.pulled_contractor": "Lopez ਇਹ ਲੈਂਦਾ ਹੈ",
    "project.permits.pulled_you": "ਇਹ ਤੁਸੀਂ ਲੈਂਦੇ ਹੋ",
    "project.glance.eyebrow": "ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ",
    "project.glance.title": "ਅੰਕੜੇ",
    "project.stat.budget": "ਬਜਟ",
    "project.stat.stage": "ਪੜਾਅ",
    "project.stat.status": "ਸਥਿਤੀ",
    "project.stat.scoping_ai": "AI ਨਾਲ ਦਾਇਰਾ ਤੈਅ ਕਰ ਰਹੇ ਹਾਂ",
    "project.stat.started": "ਸ਼ੁਰੂ ਹੋਇਆ",
    "project.stat.target_finish": "ਨਿਸ਼ਾਨਾ ਸਮਾਪਤੀ",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "ਚੱਲ ਰਿਹਾ ਹੈ",
    "photo.kind.reference": "ਹਵਾਲਾ",
    "photo.kind.inspiration": "ਪ੍ਰੇਰਣਾ",
    "photo.kind.existing": "ਪਹਿਲਾਂ",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "ਨਵੀਨੀਕਰਨ",
    "data.kind.addition": "ਵਾਧਾ",
    "data.kind.outdoor": "ਬਾਹਰੀ",
    "data.kind.new_build": "ਨਵੀਂ ਉਸਾਰੀ",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "ਯੋਜਨਾ",
    "data.pstatus.active": "ਚਾਲੂ",
    "data.pstatus.completed": "ਮੁਕੰਮਲ",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "ਰਸੋਈ ਦੀ ਮੁਰੰਮਤ",
    "data.project.kitchen.summary":
      "ਰਸੋਈ ਅਤੇ ਖਾਣੇ ਵਾਲੇ ਕਮਰੇ ਵਿਚਕਾਰਲੀ ਕੰਧ ਖੋਲ੍ਹੋ, ਸਿੰਕ ਨੂੰ ਹਟਾਓ, ਅਲਮਾਰੀਆਂ ਅਤੇ ਉਪਕਰਣ ਬਦਲੋ।",
    "data.project.bathroom.name": "ਮੁੱਖ ਬਾਥਰੂਮ ਦੀ ਤਾਜ਼ਗੀ",
    "data.project.bathroom.summary":
      "ਵੈਨਿਟੀ ਬਦਲੋ, ਫਰਸ਼ ਅਤੇ ਸ਼ਾਵਰ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਮੁੜ ਟਾਈਲ ਲਾਓ, ਰੋਸ਼ਨੀ ਅਤੇ ਟਾਇਲਟ ਬਦਲੋ। ਲਿਨਨ ਅਲਮਾਰੀ ਨੂੰ ਹਿਲਾਉਣ ਬਾਰੇ ਵਿਚਾਰ ਕਰ ਰਹੇ ਹਾਂ।",
    "data.project.shed.name": "ਵਿਹੜੇ ਦਾ ਸ਼ੈੱਡ",
    "data.project.shed.summary":
      "ਪਿਛਲੀ ਵਾੜ ਦੇ ਨਾਲ 8×10 ਦਾ ਸਟੋਰੇਜ ਸ਼ੈੱਡ। ਸ਼ਾਇਦ ਬਰਨਬੀ ਦੀ ਪਰਮਿਟ ਹੱਦ ਤੋਂ ਘੱਟ ਹੈ ਪਰ ਪੁਸ਼ਟੀ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਾਂ।",
    "data.project.deck.name": "ਵਿਹੜੇ ਦੇ ਡੈੱਕ ਦਾ ਵਾਧਾ",
    "data.project.deck.summary":
      "ਰਸੋਈ ਦੇ ਸਲਾਈਡਿੰਗ ਦਰਵਾਜ਼ੇ ਦੇ ਨਾਲ 12×16 ਦਾ ਡੈੱਕ। ਜ਼ਮੀਨ ਤੋਂ 24\" ਉੱਪਰ, ਇਸ ਲਈ ਪਰਮਿਟ ਜ਼ਰੂਰ ਚਾਹੀਦਾ ਹੈ।",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "ਰਸੋਈ ਅੱਜ ਜਿਵੇਂ ਹੈ — ਪੁਰਾਣੇ ਚੁੱਲ੍ਹੇ ਅਤੇ ਥੱਕੀਆਂ ਅਲਮਾਰੀਆਂ ਵਾਲੀ ਛੋਟੀ ਤੰਗ ਰਸੋਈ।",
    "data.photo.kitchen-demo.caption":
      "ਕੰਧ ਡਿੱਗ ਗਈ, ਖੰਭੇ ਨੰਗੇ ਹੋ ਗਏ। ਸਭ ਕੁਝ ਮੁੜ ਬੰਦ ਹੋਣ ਤੋਂ ਠੀਕ ਪਹਿਲਾਂ ਦਾ ਪਲ।",
    "data.photo.kitchen-prog-1.caption":
      "ਨਵੇਂ ਖੁੱਲ੍ਹੇ ਹਿੱਸੇ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਫਰੇਮਿੰਗ ਅਤੇ ਮੁੱਢਲਾ ਕੰਮ।",
    "data.photo.kitchen-target.caption":
      "ਨਿਸ਼ਾਨਾ ਦਿੱਖ — ਚਮਕਦਾਰ ਆਈਲੈਂਡ, ਚਿੱਟੀਆਂ ਅਲਮਾਰੀਆਂ, ਖਾਣੇ ਵਾਲੇ ਕਮਰੇ ਵੱਲ ਖੁੱਲ੍ਹਾ।",
    "data.photo.kitchen-inspo.caption":
      "ਪੱਥਰ ਦੀ ਸਤ੍ਹਾ ਵਾਲਾ ਆਈਲੈਂਡ ਅਤੇ ਲਟਕਦੀਆਂ ਲਾਈਟਾਂ — ਉਹ ਮਾਹੌਲ ਜੋ ਅਸੀਂ ਚਾਹੁੰਦੇ ਹਾਂ।",
    "data.photo.bath-current.caption":
      "ਬਾਥਰੂਮ ਅੱਜ — ਅਸਲ ਟਾਇਲਟ ਅਤੇ ਮੁੱਢਲੀ ਵੈਨਿਟੀ, ਤਾਜ਼ਗੀ ਲਈ ਤਿਆਰ।",
    "data.photo.bath-inspo-1.caption":
      "ਵਾਕ-ਇਨ ਸ਼ਾਵਰ ਅਤੇ ਸਾਫ਼-ਸੁਥਰੀ ਵੈਨਿਟੀ — ਉਹ ਦਿਸ਼ਾ ਜੋ ਸਾਨੂੰ ਪਸੰਦ ਹੈ।",
    "data.photo.bath-inspo-2.caption":
      "ਸ਼ੀਸ਼ੇ ਦੇ ਵਾਕ-ਇਨ ਸ਼ਾਵਰ ਦੇ ਕੋਲ ਵੱਡਾ ਟੱਬ — ਖੁੱਲ੍ਹਾ ਅਤੇ ਹਵਾਦਾਰ।",
    "data.photo.shed-1.caption":
      "ਇੱਕ ਦਰਵਾਜ਼ੇ ਅਤੇ ਖਿੜਕੀ ਵਾਲਾ ਸਧਾਰਨ ਢਲਾਣਦਾਰ ਛੱਤ ਵਾਲਾ ਸ਼ੈੱਡ — ਸਾਡੇ ਵਰਗੇ ਆਕਾਰ ਦਾ।",
    "data.photo.shed-2.caption":
      "ਪੁਰਾਣੀ ਲੱਕੜ ਨਾਲ ਢਕਿਆ ਸ਼ੈੱਡ ਜਿਸ ਦੇ ਦਰਵਾਜ਼ੇ ਖੁੱਲ੍ਹੇ ਹਨ — ਉਹ ਅੰਦਾਜ਼ ਜੋ ਸਾਨੂੰ ਪਸੰਦ ਹੈ।",
    "data.photo.shed-3.caption":
      "ਪੇਂਟ ਕੀਤੀ ਸਾਈਡਿੰਗ ਵਾਲਾ ਕਲਾਸਿਕ ਸ਼ਿੰਗਲ ਸ਼ੈੱਡ — ਸਾਬਤ ਕਰਦਾ ਹੈ ਕਿ ਛੋਟਾ ਆਕਾਰ ਕੰਮ ਕਰਦਾ ਹੈ।",
    "data.photo.deck-back-yard.caption":
      "ਡੈੱਕ ਤੋਂ ਪਹਿਲਾਂ ਵਿਹੜਾ — ਘਾਹ ਵਾੜ ਤੱਕ ਫੈਲਿਆ ਹੋਇਆ।",
    "data.photo.deck-ref-1.caption":
      "ਘਾਹ ਵਾਲੇ ਵਿਹੜੇ ਵੱਲ ਉਤਰਦਾ ਸੀਡਰ ਡੈੱਕ — ਜੋ ਅਸੀਂ ਰਸੋਈ ਦੇ ਨਾਲ ਚਾਹੁੰਦੇ ਹਾਂ ਉਸ ਦੇ ਨੇੜੇ।",
    "data.photo.deck-ref-2.caption":
      "ਮੇਜ਼ ਅਤੇ ਛਤਰੀ ਵਾਲਾ ਕੰਪੋਜ਼ਿਟ ਡੈੱਕ — ਸੰਭਾਲ ਆਸਾਨ।",
    "data.photo.deck-ref-3.caption":
      "ਘੇਰੇ ਦੇ ਨਾਲ ਬਣੇ ਹੋਏ ਬੈਂਚ — ਪਟੀਓ ਫਰਨੀਚਰ ਦੀ ਬੱਚਤ ਕਰਦੇ ਹਨ।",
  },

  tl: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "Mga proyekto mo",
    "projects.title": "Lahat ng pinagtatrabahuhan mo",
    "projects.sub":
      "Aktibo at pagpaplano — lahat nasa iisang lugar. Buksan ang alinman para makita ang mga detalye.",
    "projects.filter.all": "Lahat",
    "projects.filter.active": "Aktibo",
    "projects.filter.planning": "Pagpaplano",
    "projects.featured": "Itinatampok",
    "projects.permits_done": "{done} sa {total} permit ang tapos na",
    "projects.not_scoped": "Hindi pa natutukoy",
    "projects.empty.title": "Walang tumutugma sa filter na iyon",
    "projects.empty.sub":
      "Bumalik sa lahat ng proyekto para makita ang lahat ng pinagtatrabahuhan mo.",
    "projects.empty.show_all": "Ipakita lahat ng proyekto",

    // ---- Project detail chrome ----
    "project.back": "Lahat ng proyekto mo",
    "project.look.eyebrow": "Ang itsura",
    "project.look.title_planning": "Kung saan tayo patungo",
    "project.look.title_active": "Kumusta ang takbo nito",
    "project.state.eyebrow": "Ang kalagayan ng mga bagay",
    "project.state.title": "Kung nasaan ito ngayon",
    "project.scoping.title": "Tinutukoy pa",
    "project.scoping.body":
      "Maaga pa tayo sa isang ito. Matutulungan ka ng AI na patatagin ang saklaw, badyet, at kung kakailanganin mo ng anumang permit bago ka magpasya.",
    "project.scoping.cta": "Kausapin ang AI para patatagin ito",
    "project.state.stage": "Yugto",
    "project.state.complete": "{progress}% kumpleto",
    "project.state.contractor_since": "Nasa proyekto mula pa {date}",
    "project.state.contractor_pending": "Sasama kapag nagsimula na tayo",
    "project.state.reviewer_footer": "Sinusuri ang mga aplikasyon mo",
    "project.permits.eyebrow": "Papeles",
    "project.permits.title": "Mga permit",
    "project.permits.empty.title": "Wala pang permit",
    "project.permits.empty.body":
      "Malalaman natin kapag natukoy na natin ito nang magkasama. Ang mga patakaran sa permit ng Burnaby ay nakadepende sa laki, taas, at kung gaano kalapit ito sa hangganan ng ari-arian.",
    "project.permits.empty.cta": "Buksan ang AI assistant",
    "project.permits.pulled_contractor": "Si Lopez ang kukuha nito",
    "project.permits.pulled_you": "Ikaw ang kukuha nito",
    "project.glance.eyebrow": "Sa isang sulyap",
    "project.glance.title": "Ang mga numero",
    "project.stat.budget": "Badyet",
    "project.stat.stage": "Yugto",
    "project.stat.status": "Katayuan",
    "project.stat.scoping_ai": "Tinutukoy kasama ang AI",
    "project.stat.started": "Nagsimula",
    "project.stat.target_finish": "Target na tapos",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "Isinasagawa",
    "photo.kind.reference": "Sanggunian",
    "photo.kind.inspiration": "Inspirasyon",
    "photo.kind.existing": "Dati",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "Renobasyon",
    "data.kind.addition": "Dagdag",
    "data.kind.outdoor": "Panlabas",
    "data.kind.new_build": "Bagong gawa",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "Pagpaplano",
    "data.pstatus.active": "Aktibo",
    "data.pstatus.completed": "Tapos na",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "Pag-renobate ng kusina",
    "data.project.kitchen.summary":
      "Buksan ang pader sa pagitan ng kusina at silid-kainan, ilipat ang lababo, palitan ang mga kabinet at kasangkapan.",
    "data.project.bathroom.name": "Pagpapabago ng pangunahing banyo",
    "data.project.bathroom.summary":
      "Palitan ang vanity, baguhin ang tile ng sahig at paligid ng shower, palitan ang ilaw at ang inodoro. Pinag-iisipang ilipat ang linen closet.",
    "data.project.shed.name": "Kamalig sa bakuran",
    "data.project.shed.summary":
      "8×10 na imbakang kamalig sa tabi ng likod na bakod. Malamang na mas mababa sa limitasyon ng permit ng Burnaby pero gusto naming kumpirmahin.",
    "data.project.deck.name": "Dagdag na deck sa bakuran",
    "data.project.deck.summary":
      "12×16 na deck sa tabi ng sliding door ng kusina. Mahigit 24\" mula sa lupa kaya tiyak na kailangan ng permit.",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "Ang kusina sa kasalukuyan — maliit na makitid na kusina na may lumang kalan at pagod nang mga kabinet.",
    "data.photo.kitchen-demo.caption":
      "Bagsak na ang pader, nakalantad ang mga poste. Ang sandali bago muling isara ang lahat.",
    "data.photo.kitchen-prog-1.caption":
      "Pag-frame at magaspang na trabaho sa paligid ng bagong puwang.",
    "data.photo.kitchen-target.caption":
      "Target na itsura — maliwanag na island, puting kabinet, bukas sa silid-kainan.",
    "data.photo.kitchen-inspo.caption":
      "Island na may bato sa ibabaw at mga pendant — ang dating na hinahanap namin.",
    "data.photo.bath-current.caption":
      "Ang banyo ngayon — orihinal na inodoro at simpleng vanity, handa nang baguhin.",
    "data.photo.bath-inspo-1.caption":
      "Walk-in shower at malinis na vanity — ang direksyong gusto namin.",
    "data.photo.bath-inspo-2.caption":
      "Malaking tub sa tabi ng salaming walk-in shower — maliwanag at maaliwalas.",
    "data.photo.shed-1.caption":
      "Simpleng kamalig na may tulis na bubong, iisang pinto at bintana — katulad ng laki ng amin.",
    "data.photo.shed-2.caption":
      "Kamalig na balot ng lumang kahoy na bukas ang mga pinto — ang karakter na gusto namin.",
    "data.photo.shed-3.caption":
      "Klasikong kamalig na may shingle at pininturahang siding — patunay na gumagana ang maliit na laki.",
    "data.photo.deck-back-yard.caption":
      "Ang bakuran bago ang deck — damo na umaabot hanggang sa bakod.",
    "data.photo.deck-ref-1.caption":
      "Cedar na deck na pababa patungo sa madamong bakuran — malapit sa gusto namin sa tabi ng kusina.",
    "data.photo.deck-ref-2.caption":
      "Composite na deck na may mesa at payong — madaling alagaan.",
    "data.photo.deck-ref-3.caption":
      "Nakapirming upuan sa paligid — nakakatipid sa kasangkapan sa patio.",
  },

  "zh-Hans": {
    // ---- Projects index chrome ----
    "projects.eyebrow": "你的项目",
    "projects.title": "你正在进行的一切",
    "projects.sub":
      "进行中和规划中——全部集中在一处。打开任意一个即可查看详情。",
    "projects.filter.all": "全部",
    "projects.filter.active": "进行中",
    "projects.filter.planning": "规划中",
    "projects.featured": "精选",
    "projects.permits_done": "{total} 个许可证中已完成 {done} 个",
    "projects.not_scoped": "尚未确定范围",
    "projects.empty.title": "没有符合该筛选条件的内容",
    "projects.empty.sub": "返回全部项目，查看你正在进行的一切。",
    "projects.empty.show_all": "显示全部项目",

    // ---- Project detail chrome ----
    "project.back": "你的全部项目",
    "project.look.eyebrow": "外观",
    "project.look.title_planning": "我们的方向",
    "project.look.title_active": "进展如何",
    "project.state.eyebrow": "目前状况",
    "project.state.title": "现在进展到哪了",
    "project.scoping.title": "仍在确定范围",
    "project.scoping.body":
      "这个项目还处于早期阶段。在你最终确定之前，AI 可以帮你明确范围、预算，以及是否需要任何许可证。",
    "project.scoping.cta": "找 AI 聊聊，把这个定下来",
    "project.state.stage": "阶段",
    "project.state.complete": "完成 {progress}%",
    "project.state.contractor_since": "自 {date} 起参与本项目",
    "project.state.contractor_pending": "开工后即加入",
    "project.state.reviewer_footer": "审查你的申请",
    "project.permits.eyebrow": "文书手续",
    "project.permits.title": "许可证",
    "project.permits.empty.title": "尚无许可证",
    "project.permits.empty.body":
      "等我们一起确定范围后就会知道。Burnaby 的许可证规定取决于尺寸、高度，以及距离地界有多近。",
    "project.permits.empty.cta": "打开 AI 助手",
    "project.permits.pulled_contractor": "由 Lopez 申请",
    "project.permits.pulled_you": "由你申请",
    "project.glance.eyebrow": "一览",
    "project.glance.title": "数字",
    "project.stat.budget": "预算",
    "project.stat.stage": "阶段",
    "project.stat.status": "状态",
    "project.stat.scoping_ai": "正在与 AI 确定范围",
    "project.stat.started": "开始",
    "project.stat.target_finish": "目标完成",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "进行中",
    "photo.kind.reference": "参考",
    "photo.kind.inspiration": "灵感",
    "photo.kind.existing": "之前",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "翻新",
    "data.kind.addition": "加建",
    "data.kind.outdoor": "户外",
    "data.kind.new_build": "新建",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "规划中",
    "data.pstatus.active": "进行中",
    "data.pstatus.completed": "已完成",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "厨房改造",
    "data.project.kitchen.summary":
      "打通厨房和餐厅之间的墙，移动水槽，更换橱柜和电器。",
    "data.project.bathroom.name": "主浴室翻新",
    "data.project.bathroom.summary":
      "更换洗手盆柜，重新铺设地砖和淋浴间墙砖，更换灯具和马桶。正在考虑移动放置床单的储物柜。",
    "data.project.shed.name": "后院储物棚",
    "data.project.shed.summary":
      "靠后栅栏的 8×10 储物棚。应该低于 Burnaby 的许可证门槛，但想确认一下。",
    "data.project.deck.name": "后院露台加建",
    "data.project.deck.summary":
      "厨房推拉门外的 12×16 露台。离地超过 24 英寸，所以肯定需要许可证。",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "厨房现在的样子——狭窄的长条形厨房，配着旧炉灶和陈旧的橱柜。",
    "data.photo.kitchen-demo.caption":
      "墙已拆除，立柱裸露。一切重新封闭之前的那一刻。",
    "data.photo.kitchen-prog-1.caption": "新开口周围的框架和基础工程。",
    "data.photo.kitchen-target.caption":
      "目标外观——明亮的中岛、白色橱柜，通向餐厅。",
    "data.photo.kitchen-inspo.caption":
      "石面中岛配吊灯——我们想要的感觉。",
    "data.photo.bath-current.caption":
      "浴室现在的样子——原装马桶和基础洗手盆柜，准备翻新。",
    "data.photo.bath-inspo-1.caption":
      "步入式淋浴间和简洁的洗手盆柜——我们喜欢的方向。",
    "data.photo.bath-inspo-2.caption":
      "大浴缸旁边有个玻璃步入式淋浴间——明亮又通透。",
    "data.photo.shed-1.caption":
      "简单的人字顶储物棚，只有一道门和一扇窗——与我们的占地面积差不多。",
    "data.photo.shed-2.caption":
      "旧木板包覆的储物棚，门敞开着——我们喜欢的那种韵味。",
    "data.photo.shed-3.caption":
      "经典木瓦储物棚配油漆外墙——证明这么小的占地也行得通。",
    "data.photo.deck-back-yard.caption":
      "建露台之前的后院——草地一直延伸到栅栏。",
    "data.photo.deck-ref-1.caption":
      "杉木露台逐级通向草坪——和我们想在厨房外做的很接近。",
    "data.photo.deck-ref-2.caption":
      "复合材料露台配桌子和遮阳伞——打理方便。",
    "data.photo.deck-ref-3.caption":
      "沿四周设置的内置长凳——省下露台家具。",
  },

  ru: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "Ваши проекты",
    "projects.title": "Всё, над чем вы работаете",
    "projects.sub":
      "В работе и в планах — всё в одном месте. Откройте любой, чтобы увидеть детали.",
    "projects.filter.all": "Все",
    "projects.filter.active": "В работе",
    "projects.filter.planning": "Планирование",
    "projects.featured": "Избранное",
    "projects.permits_done": "{done} из {total} разрешений готово",
    "projects.not_scoped": "Объём ещё не определён",
    "projects.empty.title": "Под этот фильтр ничего не подходит",
    "projects.empty.sub":
      "Вернитесь ко всем проектам, чтобы увидеть всё, над чем вы работаете.",
    "projects.empty.show_all": "Показать все проекты",

    // ---- Project detail chrome ----
    "project.back": "Все ваши проекты",
    "project.look.eyebrow": "Внешний вид",
    "project.look.title_planning": "Куда мы движемся",
    "project.look.title_active": "Как продвигается",
    "project.state.eyebrow": "Текущее положение дел",
    "project.state.title": "Где это сейчас",
    "project.scoping.title": "Ещё определяем объём",
    "project.scoping.body":
      "Мы в самом начале по этому проекту. ИИ поможет вам уточнить объём, бюджет и понять, понадобятся ли какие-либо разрешения, прежде чем вы решитесь.",
    "project.scoping.cta": "Обсудить с ИИ, чтобы всё уточнить",
    "project.state.stage": "Этап",
    "project.state.complete": "Выполнено на {progress}%",
    "project.state.contractor_since": "В проекте с {date}",
    "project.state.contractor_pending": "Присоединится, как только начнём",
    "project.state.reviewer_footer": "Проверяет ваши заявки",
    "project.permits.eyebrow": "Документы",
    "project.permits.title": "Разрешения",
    "project.permits.empty.title": "Пока нет разрешений",
    "project.permits.empty.body":
      "Узнаем, как только определим объём вместе. Правила выдачи разрешений в Burnaby зависят от размера, высоты и того, насколько близко это к границе участка.",
    "project.permits.empty.cta": "Открыть ИИ-помощника",
    "project.permits.pulled_contractor": "Это оформляет Lopez",
    "project.permits.pulled_you": "Это оформляете вы",
    "project.glance.eyebrow": "Кратко",
    "project.glance.title": "Цифры",
    "project.stat.budget": "Бюджет",
    "project.stat.stage": "Этап",
    "project.stat.status": "Статус",
    "project.stat.scoping_ai": "Определяем объём с ИИ",
    "project.stat.started": "Начато",
    "project.stat.target_finish": "Планируемое завершение",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "В процессе",
    "photo.kind.reference": "Образец",
    "photo.kind.inspiration": "Вдохновение",
    "photo.kind.existing": "До",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "Ремонт",
    "data.kind.addition": "Пристройка",
    "data.kind.outdoor": "Снаружи",
    "data.kind.new_build": "Новая постройка",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "Планирование",
    "data.pstatus.active": "В работе",
    "data.pstatus.completed": "Завершено",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "Ремонт кухни",
    "data.project.kitchen.summary":
      "Раскрыть стену между кухней и столовой, перенести раковину, заменить шкафы и технику.",
    "data.project.bathroom.name": "Обновление главной ванной",
    "data.project.bathroom.summary":
      "Заменить тумбу, переложить плитку на полу и в зоне душа, поменять освещение и унитаз. Думаем перенести шкаф для белья.",
    "data.project.shed.name": "Сарай на заднем дворе",
    "data.project.shed.summary":
      "Сарай для хранения 8×10 у заднего забора. Вероятно, ниже порога разрешений Burnaby, но хотим уточнить.",
    "data.project.deck.name": "Пристройка террасы на заднем дворе",
    "data.project.deck.summary":
      "Терраса 12×16 у раздвижной двери кухни. Выше 24\" над землёй, так что разрешение точно нужно.",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "Кухня в нынешнем виде — маленькая узкая кухня со старой плитой и потрёпанными шкафами.",
    "data.photo.kitchen-demo.caption":
      "Стена снесена, стойки оголены. Момент перед тем, как всё снова закроют.",
    "data.photo.kitchen-prog-1.caption":
      "Каркас и черновые работы вокруг нового проёма.",
    "data.photo.kitchen-target.caption":
      "Желаемый вид — светлый остров, белые шкафы, выход в столовую.",
    "data.photo.kitchen-inspo.caption":
      "Остров с каменной столешницей и подвесными светильниками — настроение, к которому мы стремимся.",
    "data.photo.bath-current.caption":
      "Ванная сегодня — оригинальный унитаз и базовая тумба, готовая к обновлению.",
    "data.photo.bath-inspo-1.caption":
      "Душевая без поддона и аккуратная тумба — направление, которое нам нравится.",
    "data.photo.bath-inspo-2.caption":
      "Большая ванна рядом со стеклянной душевой без поддона — светло и просторно.",
    "data.photo.shed-1.caption":
      "Простой сарай с двускатной крышей, одной дверью и окном — площадь похожа на нашу.",
    "data.photo.shed-2.caption":
      "Сарай, обшитый состаренным деревом, с распахнутыми дверями — характер, который нам по душе.",
    "data.photo.shed-3.caption":
      "Классический сарай с гонтовой крышей и крашеной обшивкой — доказывает, что небольшая площадь работает.",
    "data.photo.deck-back-yard.caption":
      "Задний двор до террасы — трава, тянущаяся до забора.",
    "data.photo.deck-ref-1.caption":
      "Кедровая терраса со ступенями к травяному двору — близко к тому, что мы хотим у кухни.",
    "data.photo.deck-ref-2.caption":
      "Терраса из композита со столом и зонтом — лёгкий уход.",
    "data.photo.deck-ref-3.caption":
      "Встроенные скамьи по периметру — экономия на садовой мебели.",
  },

  de: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "Deine Projekte",
    "projects.title": "Alles, woran du arbeitest",
    "projects.sub":
      "Aktiv und in Planung — alles an einem Ort. Öffne eines, um die Details zu sehen.",
    "projects.filter.all": "Alle",
    "projects.filter.active": "Aktiv",
    "projects.filter.planning": "Planung",
    "projects.featured": "Hervorgehoben",
    "projects.permits_done": "{done} von {total} Genehmigungen erledigt",
    "projects.not_scoped": "Noch nicht eingegrenzt",
    "projects.empty.title": "Nichts passt zu diesem Filter",
    "projects.empty.sub":
      "Geh zurück zu allen Projekten, um alles zu sehen, woran du arbeitest.",
    "projects.empty.show_all": "Alle Projekte anzeigen",

    // ---- Project detail chrome ----
    "project.back": "Alle deine Projekte",
    "project.look.eyebrow": "Die Optik",
    "project.look.title_planning": "Wohin es geht",
    "project.look.title_active": "Wie es vorangeht",
    "project.state.eyebrow": "Der Stand der Dinge",
    "project.state.title": "Wo es gerade steht",
    "project.scoping.title": "Wird noch eingegrenzt",
    "project.scoping.body":
      "Wir stehen hier noch ganz am Anfang. Die KI kann dir helfen, Umfang und Budget festzulegen und zu klären, ob du Genehmigungen brauchst, bevor du dich festlegst.",
    "project.scoping.cta": "Mit der KI sprechen, um das festzuzurren",
    "project.state.stage": "Phase",
    "project.state.complete": "{progress}% fertig",
    "project.state.contractor_since": "Seit {date} im Projekt",
    "project.state.contractor_pending": "Kommt dazu, sobald wir loslegen",
    "project.state.reviewer_footer": "Prüft deine Anträge",
    "project.permits.eyebrow": "Papierkram",
    "project.permits.title": "Genehmigungen",
    "project.permits.empty.title": "Noch keine Genehmigungen",
    "project.permits.empty.body":
      "Das wissen wir, sobald wir das gemeinsam eingegrenzt haben. Die Genehmigungsregeln von Burnaby hängen von Größe, Höhe und dem Abstand zur Grundstücksgrenze ab.",
    "project.permits.empty.cta": "KI-Assistenten öffnen",
    "project.permits.pulled_contractor": "Lopez kümmert sich darum",
    "project.permits.pulled_you": "Darum kümmerst du dich",
    "project.glance.eyebrow": "Auf einen Blick",
    "project.glance.title": "Die Zahlen",
    "project.stat.budget": "Budget",
    "project.stat.stage": "Phase",
    "project.stat.status": "Status",
    "project.stat.scoping_ai": "Eingrenzung mit KI",
    "project.stat.started": "Begonnen",
    "project.stat.target_finish": "Angestrebter Abschluss",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "In Arbeit",
    "photo.kind.reference": "Referenz",
    "photo.kind.inspiration": "Inspiration",
    "photo.kind.existing": "Vorher",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "Renovierung",
    "data.kind.addition": "Anbau",
    "data.kind.outdoor": "Außenbereich",
    "data.kind.new_build": "Neubau",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "Planung",
    "data.pstatus.active": "Aktiv",
    "data.pstatus.completed": "Abgeschlossen",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "Küchenumbau",
    "data.project.kitchen.summary":
      "Die Wand zwischen Küche und Esszimmer öffnen, die Spüle versetzen, Schränke und Geräte ersetzen.",
    "data.project.bathroom.name": "Auffrischung des Hauptbads",
    "data.project.bathroom.summary":
      "Den Waschtisch ersetzen, Boden und Duschbereich neu fliesen, Beleuchtung und Toilette austauschen. Überlegen, den Wäscheschrank zu versetzen.",
    "data.project.shed.name": "Gartenschuppen",
    "data.project.shed.summary":
      "8×10-Geräteschuppen am hinteren Zaun. Wahrscheinlich unter der Genehmigungsgrenze von Burnaby, aber wir wollen das bestätigen.",
    "data.project.deck.name": "Terrassenanbau im Garten",
    "data.project.deck.summary":
      "12×16-Terrasse an der Schiebetür der Küche. Über 24\" über dem Boden, also definitiv genehmigungspflichtig.",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "Die Küche, wie sie heute ist — kleine Schlauchküche mit altem Herd und müden Schränken.",
    "data.photo.kitchen-demo.caption":
      "Wand weg, Ständer freigelegt. Der Moment, bevor alles wieder verschlossen wird.",
    "data.photo.kitchen-prog-1.caption":
      "Rahmenbau und Roharbeiten rund um die neue Öffnung.",
    "data.photo.kitchen-target.caption":
      "Ziel-Optik — helle Kochinsel, weiße Schränke, offen zum Esszimmer.",
    "data.photo.kitchen-inspo.caption":
      "Kochinsel mit Steinplatte und Pendelleuchten — die Stimmung, die wir suchen.",
    "data.photo.bath-current.caption":
      "Das Bad heute — Original-Toilette und einfacher Waschtisch, bereit für eine Auffrischung.",
    "data.photo.bath-inspo-1.caption":
      "Begehbare Dusche und schlichter Waschtisch — die Richtung, die uns gefällt.",
    "data.photo.bath-inspo-2.caption":
      "Große Wanne neben einer gläsernen begehbaren Dusche — hell und luftig.",
    "data.photo.shed-1.caption":
      "Schlichter Satteldachschuppen mit einer Tür und einem Fenster — ähnliche Grundfläche wie bei uns.",
    "data.photo.shed-2.caption":
      "Mit verwittertem Holz verkleideter Schuppen mit weit geöffneten Türen — Charakter, den wir mögen.",
    "data.photo.shed-3.caption":
      "Klassischer Schindelschuppen mit gestrichener Verkleidung — beweist, dass die kleine Grundfläche funktioniert.",
    "data.photo.deck-back-yard.caption":
      "Der Garten vor der Terrasse — Rasen bis zum Zaun.",
    "data.photo.deck-ref-1.caption":
      "Zedernholzterrasse, die zu einem Rasen hinunterführt — nah an dem, was wir an der Küche wollen.",
    "data.photo.deck-ref-2.caption":
      "Terrasse aus Verbundmaterial mit Tisch und Sonnenschirm — pflegeleicht.",
    "data.photo.deck-ref-3.caption":
      "Eingebaute Sitzbänke entlang des Randes — spart Terrassenmöbel.",
  },

  ko: {
    // ---- Projects index chrome ----
    "projects.eyebrow": "내 프로젝트",
    "projects.title": "진행 중인 모든 작업",
    "projects.sub":
      "진행 중과 계획 중 — 모두 한곳에. 아무거나 열어 세부 정보를 확인하세요.",
    "projects.filter.all": "전체",
    "projects.filter.active": "진행 중",
    "projects.filter.planning": "계획 중",
    "projects.featured": "추천",
    "projects.permits_done": "허가 {total}건 중 {done}건 완료",
    "projects.not_scoped": "아직 범위 미정",
    "projects.empty.title": "해당 필터와 일치하는 항목이 없습니다",
    "projects.empty.sub":
      "전체 프로젝트로 돌아가 진행 중인 모든 작업을 확인하세요.",
    "projects.empty.show_all": "모든 프로젝트 보기",

    // ---- Project detail chrome ----
    "project.back": "내 모든 프로젝트",
    "project.look.eyebrow": "모습",
    "project.look.title_planning": "우리가 향하는 방향",
    "project.look.title_active": "진행 상황",
    "project.state.eyebrow": "현재 상황",
    "project.state.title": "지금 어디까지 왔나",
    "project.scoping.title": "아직 범위 정하는 중",
    "project.scoping.body":
      "이 프로젝트는 아직 초기 단계입니다. 확정하기 전에 AI가 범위, 예산, 그리고 허가가 필요한지 여부를 다지는 데 도움을 줄 수 있습니다.",
    "project.scoping.cta": "AI와 상의해 이걸 다지기",
    "project.state.stage": "단계",
    "project.state.complete": "{progress}% 완료",
    "project.state.contractor_since": "{date}부터 프로젝트 참여",
    "project.state.contractor_pending": "착수하면 합류 예정",
    "project.state.reviewer_footer": "귀하의 신청서를 검토합니다",
    "project.permits.eyebrow": "서류 작업",
    "project.permits.title": "허가",
    "project.permits.empty.title": "아직 허가 없음",
    "project.permits.empty.body":
      "함께 범위를 정하고 나면 알게 됩니다. Burnaby의 허가 규정은 크기, 높이, 그리고 대지 경계선에 얼마나 가까운지에 따라 달라집니다.",
    "project.permits.empty.cta": "AI 어시스턴트 열기",
    "project.permits.pulled_contractor": "Lopez가 이걸 신청합니다",
    "project.permits.pulled_you": "이건 직접 신청합니다",
    "project.glance.eyebrow": "한눈에 보기",
    "project.glance.title": "숫자",
    "project.stat.budget": "예산",
    "project.stat.stage": "단계",
    "project.stat.status": "상태",
    "project.stat.scoping_ai": "AI와 범위 정하는 중",
    "project.stat.started": "시작",
    "project.stat.target_finish": "목표 완료",

    // ---- Photo-kind chips ----
    "photo.kind.progress": "진행 중",
    "photo.kind.reference": "참고",
    "photo.kind.inspiration": "영감",
    "photo.kind.existing": "이전",

    // ---- Project kind labels (data) ----
    "data.kind.renovation": "리모델링",
    "data.kind.addition": "증축",
    "data.kind.outdoor": "야외",
    "data.kind.new_build": "신축",

    // ---- Project status labels (data) ----
    "data.pstatus.planning": "계획 중",
    "data.pstatus.active": "진행 중",
    "data.pstatus.completed": "완료",

    // ---- Project names + summaries (data) ----
    "data.project.kitchen.name": "주방 리모델링",
    "data.project.kitchen.summary":
      "주방과 식당 사이의 벽을 트고, 싱크대를 옮기고, 수납장과 가전을 교체합니다.",
    "data.project.bathroom.name": "주 욕실 새단장",
    "data.project.bathroom.summary":
      "세면대를 교체하고, 바닥과 샤워 주변 타일을 다시 시공하고, 조명과 변기를 교체합니다. 리넨장 이동도 고려 중입니다.",
    "data.project.shed.name": "뒷마당 창고",
    "data.project.shed.summary":
      "뒤쪽 울타리 옆 8×10 보관 창고. 아마 Burnaby의 허가 기준 미만이겠지만 확인하고 싶습니다.",
    "data.project.deck.name": "뒷마당 데크 증축",
    "data.project.deck.summary":
      "주방 미닫이문 옆 12×16 데크. 지면에서 24\" 넘게 떨어져 있어 허가가 반드시 필요합니다.",

    // ---- Photo captions (data) ----
    "data.photo.kitchen-before.caption":
      "현재 주방 — 낡은 가스레인지와 지친 수납장이 있는 좁은 일자형 주방.",
    "data.photo.kitchen-demo.caption":
      "벽이 헐리고 기둥이 드러났습니다. 모든 것을 다시 막기 직전의 순간.",
    "data.photo.kitchen-prog-1.caption":
      "새 개구부 주변의 골조와 기초 작업.",
    "data.photo.kitchen-target.caption":
      "목표 모습 — 밝은 아일랜드, 흰색 수납장, 식당으로 트인 구조.",
    "data.photo.kitchen-inspo.caption":
      "돌 상판 아일랜드에 펜던트 조명 — 우리가 원하는 분위기.",
    "data.photo.bath-current.caption":
      "현재 욕실 — 원래의 변기와 기본 세면대, 새단장 준비 완료.",
    "data.photo.bath-inspo-1.caption":
      "워크인 샤워와 깔끔한 세면대 — 우리가 좋아하는 방향.",
    "data.photo.bath-inspo-2.caption":
      "유리 워크인 샤워 옆 큰 욕조 — 밝고 시원합니다.",
    "data.photo.shed-1.caption":
      "문 하나와 창문 하나가 있는 단순한 박공지붕 창고 — 우리 것과 비슷한 면적.",
    "data.photo.shed-2.caption":
      "문을 활짝 연, 풍화된 목재로 덮인 창고 — 우리가 좋아하는 멋.",
    "data.photo.shed-3.caption":
      "페인트칠한 사이딩의 클래식 슁글 창고 — 작은 면적도 통한다는 증거.",
    "data.photo.deck-back-yard.caption":
      "데크 설치 전 뒷마당 — 울타리까지 이어지는 잔디.",
    "data.photo.deck-ref-1.caption":
      "잔디 마당으로 단을 내려가는 시더 데크 — 주방 옆에 우리가 원하는 것과 비슷합니다.",
    "data.photo.deck-ref-2.caption":
      "테이블과 파라솔이 있는 복합재 데크 — 관리가 쉽습니다.",
    "data.photo.deck-ref-3.caption":
      "둘레를 따라 짜 넣은 벤치 — 파티오 가구 비용을 아낍니다.",
  },
}
