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
}
