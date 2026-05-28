import type { LocaleMessages } from "../types"

/**
 * Permit-detail + Ask strings, and the SHARED permit/status data used across
 * dashboard, calendar, and permit detail. Owned by the permit agent.
 *
 * Shared data-key convention (other agents reference these, do not redefine):
 *   data.permit.<permitId>.name        e.g. data.permit.building.name
 *   data.permit.<permitId>.blurb       (whatItCovers, short)
 *   data.permit.<permitId>.req.<reqId>.label / .helper
 *   data.permit.<permitId>.insp.<inspId>.name / .check   (inspections)
 *   data.status.<HomePermitStatus>.label   (homeStatusLabel)
 *   data.status.<HomePermitStatus>.blurb   (homeStatusBlurb)
 *   data.chat.<msgId>                  (chat transcript message content)
 *   data.chat.<msgId>.followup.<n>     (follow-up chips on that message)
 *   data.prompt.<n>                    (suggested-prompt chips)
 *
 * Chrome keys for this surface are prefixed `permit.*` (detail page) and
 * `ask.*` (chat page).
 */
export const permit: LocaleMessages = {
  en: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "Building Permit",
    "data.permit.building.blurb":
      "The structural changes — taking down the wall between the kitchen and dining room counts as structural, so Burnaby needs to sign off.",
    "data.permit.electrical.name": "Electrical Permit",
    "data.permit.electrical.blurb":
      "New circuits for the island outlets, the range, and recessed lighting. Pulled by your electrician under Lopez’s umbrella.",
    "data.permit.plumbing.name": "Plumbing Permit",
    "data.permit.plumbing.blurb": "Moving the sink and the dishwasher line.",
    "data.permit.mechanical.name": "Mechanical Permit",
    "data.permit.mechanical.blurb":
      "The new range hood vent through the exterior wall. Needed because it changes the building envelope.",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "Site plan",
    "data.permit.building.req.site-plan.helper":
      "A drawing showing your lot and where the house sits.",
    "data.permit.building.req.floor-plan.label": "Floor plan (existing + proposed)",
    "data.permit.building.req.floor-plan.helper":
      "Two drawings: how the kitchen is today, and how it’ll be after.",
    "data.permit.building.req.structural-letter.label": "Structural engineer letter",
    "data.permit.building.req.structural-letter.helper":
      "Because you’re removing a wall. The engineer certifies it’s safe.",
    "data.permit.building.req.contractor-license.label": "Contractor’s license proof",
    "data.permit.building.req.contractor-license.helper":
      "Lopez Construction’s BC business licence, currently active.",
    "data.permit.building.req.energy-form.label": "Energy Step Code compliance (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "BC requires this for any room with new lighting, insulation, or windows.",
    "data.permit.electrical.req.load-calc.label": "Load calculation",
    "data.permit.electrical.req.load-calc.helper":
      "Shows your panel can handle the new circuits.",
    "data.permit.electrical.req.one-line.label": "One-line diagram",
    "data.permit.electrical.req.one-line.helper":
      "A simple wiring map. Your electrician draws this.",
    "data.permit.plumbing.req.fixture-count.label": "Fixture count form",
    "data.permit.plumbing.req.fixture-count.helper":
      "Just a count of sinks, dishwashers, etc. Quick form.",
    "data.permit.mechanical.req.vent-spec.label": "Vent specification",
    "data.permit.mechanical.req.vent-spec.helper": "Which hood + how it vents outside.",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "Rough framing",
    "data.permit.building.insp.rough-frame.check":
      "After the wall comes down and new framing is up — before drywall.",
    "data.permit.building.insp.final.name": "Final inspection",
    "data.permit.building.insp.final.check":
      "Everything done: finishes, fixtures, the works. The sign-off.",
    "data.permit.electrical.insp.elec-rough.name": "Electrical rough-in",
    "data.permit.electrical.insp.elec-rough.check": "Wiring in walls before they close up.",
    "data.permit.electrical.insp.elec-final.name": "Electrical final",
    "data.permit.electrical.insp.elec-final.check":
      "Outlets, switches, and fixtures all working.",

    // ---- Shared status data ----
    "data.status.not_started.label": "Not started",
    "data.status.not_started.blurb": "Hasn’t been started yet",
    "data.status.preparing.label": "Getting ready",
    "data.status.preparing.blurb": "Lopez is putting the paperwork together",
    "data.status.submitted.label": "Submitted",
    "data.status.submitted.blurb": "Burnaby has the application",
    "data.status.in_review.label": "Burnaby is reviewing",
    "data.status.in_review.blurb": "Burnaby is reading through your plans",
    "data.status.needs_info.label": "Needs your input",
    "data.status.needs_info.blurb": "Burnaby needs something from you",
    "data.status.approved.label": "Approved",
    "data.status.approved.blurb": "Cleared to start work",
    "data.status.inspections.label": "Inspections",
    "data.status.inspections.blurb": "Inspectors checking the work",
    "data.status.closed.label": "Done",
    "data.status.closed.blurb": "Finished and filed",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "I can fill this out from your plans. Takes about 2 minutes.",
    "data.permit.plumbing.req.fixture-count.ai":
      "I can fill this out — only one new sink, one dishwasher.",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "Why do I need a permit to take down a wall in my own house? It’s not even a load-bearing one.",
    "data.chat.m2":
      "Burnaby requires a permit any time you change the footprint of a room — even non-bearing walls. It’s about two things: (1) making sure no electrical or plumbing is hidden in the wall, and (2) keeping your home’s insurance and resale clean. If a future buyer finds an un-permitted change, it can hold up a sale.\n\nThe good news: this is a small permit, and yours is already in review.",
    "data.chat.m2.ref.building": "Your Building Permit",
    "data.chat.m2.followup.1": "How long will the review take?",
    "data.chat.m2.followup.2": "What happens if they ask for changes?",
    "data.chat.m2.followup.3": "Can I start demo before approval?",
    "data.chat.m3": "Can I start demo before approval?",
    "data.chat.m4":
      "Short answer: no, not the wall. Burnaby’s policy is that any work covered by a permit-in-review can’t begin until the permit is issued. If an inspector drives by and sees the wall down, they can red-tag the site, which means everything stops.\n\nWhat you *can* start: cabinet demo, appliance disconnect, and floor protection — none of that needs a permit. I’d hold off on the wall and electrical until you’re approved (about 9 more days based on Burnaby’s current queue).",
    "data.chat.m4.followup.1": "What does red-tagged mean?",
    "data.chat.m4.followup.2": "Email Lopez to confirm the schedule",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "Good question. Based on what I know about your permit, here’s what’s likely: Burnaby’s review queue typically moves on Tuesdays and Thursdays. If they’re going to ask for changes, you usually hear within the first week. So far yours has been quiet — that’s a good sign.",
    "data.chat.fallback.followup.1": "What does a typical review comment look like?",
    "data.chat.fallback.followup.2": "Should I be worried?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "How long until my permit is approved?",
    "data.prompt.2": "What do I do during the inspection?",
    "data.prompt.3": "Walk me through what happens next",
    "data.prompt.4": "Did Lopez send everything they were supposed to?",

    // ---- Permit-detail page chrome ----
    "permit.back": "Back to your renovation",
    "permit.eyebrow": "Permit",
    "permit.stat.where": "Where it is now",
    "permit.stat.pulledBy": "Pulled by",
    "permit.stat.fee": "City fee",
    "permit.stat.filed": "Filed {date}",
    "permit.queue.lead": "Burnaby’s building queue is about",
    "permit.queue.days": "{n} business days",
    "permit.queue.tail": "right now. I’ll let you know the moment anything moves.",
    "permit.needs.eyebrow": "What it needs",
    "permit.needs.title": "Documents",
    "permit.needs.count": "· {done} of {total} done",
    "permit.ai.yes": "Yes, fill it out",
    "permit.ai.no": "I’ll do it",
    "permit.req.inProgress": "Lopez is working on this.",
    "permit.next.eyebrow": "What comes next",
    "permit.next.title": "Inspections after approval",
    "permit.next.hint":
      "Burnaby sends someone out to verify the work. I’ll walk you through each one.",
    "permit.insp.notYet": "Not yet",
    "permit.callout.title": "Burnaby left one comment on this permit",
    "permit.callout.body":
      "They want a section drawing of the new wall header. I drafted an email to your engineer.",
    "permit.callout.cta": "See the draft",
    "permit.foot.question": "Have a question about this?",
    "permit.foot.ask": "Ask AI",
    "permit.foot.next": "Next: {name}",

    // ---- Ask page chrome ----
    "ask.back": "Back to your renovation",
    "ask.knows": "AI knows your project",
    "ask.placeholder": "Ask anything about your renovation…",
    "ask.send": "Send",
    "ask.tryAsking": "Try asking",
  },
  fr: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "Permis de construction",
    "data.permit.building.blurb":
      "Les modifications structurelles — abattre le mur entre la cuisine et la salle à manger est considéré comme structurel, alors Burnaby doit l’approuver.",
    "data.permit.electrical.name": "Permis d’électricité",
    "data.permit.electrical.blurb":
      "De nouveaux circuits pour les prises de l’îlot, la cuisinière et l’éclairage encastré. Demandé par votre électricien sous l’égide de Lopez.",
    "data.permit.plumbing.name": "Permis de plomberie",
    "data.permit.plumbing.blurb": "Déplacer l’évier et le raccordement du lave-vaisselle.",
    "data.permit.mechanical.name": "Permis de mécanique",
    "data.permit.mechanical.blurb":
      "La nouvelle évacuation de la hotte à travers le mur extérieur. Nécessaire parce qu’elle modifie l’enveloppe du bâtiment.",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "Plan d’implantation",
    "data.permit.building.req.site-plan.helper":
      "Un dessin montrant votre terrain et l’emplacement de la maison.",
    "data.permit.building.req.floor-plan.label": "Plan d’étage (existant + proposé)",
    "data.permit.building.req.floor-plan.helper":
      "Deux dessins : la cuisine telle qu’elle est aujourd’hui, et telle qu’elle sera après.",
    "data.permit.building.req.structural-letter.label": "Lettre de l’ingénieur en structure",
    "data.permit.building.req.structural-letter.helper":
      "Parce que vous enlevez un mur. L’ingénieur certifie que c’est sécuritaire.",
    "data.permit.building.req.contractor-license.label": "Preuve de licence de l’entrepreneur",
    "data.permit.building.req.contractor-license.helper":
      "La licence d’affaires de la C.-B. de Lopez Construction, actuellement active.",
    "data.permit.building.req.energy-form.label": "Conformité au Code Énergie Step (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "La C.-B. l’exige pour toute pièce avec un nouvel éclairage, une nouvelle isolation ou de nouvelles fenêtres.",
    "data.permit.electrical.req.load-calc.label": "Calcul de charge",
    "data.permit.electrical.req.load-calc.helper":
      "Montre que votre panneau peut supporter les nouveaux circuits.",
    "data.permit.electrical.req.one-line.label": "Schéma unifilaire",
    "data.permit.electrical.req.one-line.helper":
      "Un plan de câblage simple. Votre électricien le dessine.",
    "data.permit.plumbing.req.fixture-count.label": "Formulaire de décompte des appareils",
    "data.permit.plumbing.req.fixture-count.helper":
      "Juste un décompte des éviers, lave-vaisselle, etc. Formulaire rapide.",
    "data.permit.mechanical.req.vent-spec.label": "Spécification de la hotte",
    "data.permit.mechanical.req.vent-spec.helper": "Quelle hotte + comment elle s’évacue à l’extérieur.",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "Charpente brute",
    "data.permit.building.insp.rough-frame.check":
      "Après l’abattage du mur et le montage de la nouvelle charpente — avant les cloisons sèches.",
    "data.permit.building.insp.final.name": "Inspection finale",
    "data.permit.building.insp.final.check":
      "Tout est terminé : finitions, accessoires, le tout. L’approbation finale.",
    "data.permit.electrical.insp.elec-rough.name": "Câblage brut électrique",
    "data.permit.electrical.insp.elec-rough.check": "Le câblage dans les murs avant qu’ils ne soient fermés.",
    "data.permit.electrical.insp.elec-final.name": "Inspection électrique finale",
    "data.permit.electrical.insp.elec-final.check":
      "Prises, interrupteurs et appareils tous fonctionnels.",

    // ---- Shared status data ----
    "data.status.not_started.label": "Pas commencé",
    "data.status.not_started.blurb": "N’a pas encore été commencé",
    "data.status.preparing.label": "En préparation",
    "data.status.preparing.blurb": "Lopez prépare les documents",
    "data.status.submitted.label": "Soumis",
    "data.status.submitted.blurb": "Burnaby a la demande",
    "data.status.in_review.label": "Burnaby examine",
    "data.status.in_review.blurb": "Burnaby parcourt vos plans",
    "data.status.needs_info.label": "Besoin de votre réponse",
    "data.status.needs_info.blurb": "Burnaby a besoin de quelque chose de vous",
    "data.status.approved.label": "Approuvé",
    "data.status.approved.blurb": "Autorisé à commencer les travaux",
    "data.status.inspections.label": "Inspections",
    "data.status.inspections.blurb": "Les inspecteurs vérifient les travaux",
    "data.status.closed.label": "Terminé",
    "data.status.closed.blurb": "Terminé et classé",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "Je peux le remplir à partir de vos plans. Ça prend environ 2 minutes.",
    "data.permit.plumbing.req.fixture-count.ai":
      "Je peux le remplir — seulement un nouvel évier, un lave-vaisselle.",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "Pourquoi ai-je besoin d’un permis pour abattre un mur dans ma propre maison ? Ce n’est même pas un mur porteur.",
    "data.chat.m2":
      "Burnaby exige un permis chaque fois que vous changez la configuration d’une pièce — même les murs non porteurs. C’est pour deux raisons : (1) s’assurer qu’aucun fil électrique ou tuyau n’est caché dans le mur, et (2) garder l’assurance et la revente de votre maison en règle. Si un futur acheteur découvre une modification non autorisée, cela peut retarder une vente.\n\nLa bonne nouvelle : c’est un petit permis, et le vôtre est déjà en cours d’examen.",
    "data.chat.m2.ref.building": "Votre permis de construction",
    "data.chat.m2.followup.1": "Combien de temps prendra l’examen ?",
    "data.chat.m2.followup.2": "Que se passe-t-il s’ils demandent des modifications ?",
    "data.chat.m2.followup.3": "Puis-je commencer la démolition avant l’approbation ?",
    "data.chat.m3": "Puis-je commencer la démolition avant l’approbation ?",
    "data.chat.m4":
      "Réponse courte : non, pas le mur. La politique de Burnaby est que tout travail couvert par un permis en cours d’examen ne peut pas commencer avant que le permis ne soit délivré. Si un inspecteur passe et voit le mur abattu, il peut placarder le chantier d’un avis rouge, ce qui veut dire que tout s’arrête.\n\nCe que vous *pouvez* commencer : la démolition des armoires, le débranchement des appareils et la protection du plancher — rien de tout ça ne nécessite un permis. Je m’abstiendrais de toucher au mur et à l’électricité jusqu’à votre approbation (environ 9 jours de plus selon la file d’attente actuelle de Burnaby).",
    "data.chat.m4.followup.1": "Que veut dire « avis rouge » ?",
    "data.chat.m4.followup.2": "Écrire à Lopez pour confirmer l’échéancier",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "Bonne question. D’après ce que je sais de votre permis, voici ce qui est probable : la file d’examen de Burnaby avance généralement les mardis et les jeudis. S’ils vont demander des modifications, vous l’apprenez habituellement dans la première semaine. Jusqu’ici, le vôtre est resté tranquille — c’est bon signe.",
    "data.chat.fallback.followup.1": "À quoi ressemble un commentaire d’examen typique ?",
    "data.chat.fallback.followup.2": "Devrais-je m’inquiéter ?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "Dans combien de temps mon permis sera-t-il approuvé ?",
    "data.prompt.2": "Que dois-je faire pendant l’inspection ?",
    "data.prompt.3": "Expliquez-moi ce qui se passe ensuite",
    "data.prompt.4": "Est-ce que Lopez a envoyé tout ce qu’il devait ?",

    // ---- Permit-detail page chrome ----
    "permit.back": "Retour à votre rénovation",
    "permit.eyebrow": "Permis",
    "permit.stat.where": "Où ça en est",
    "permit.stat.pulledBy": "Demandé par",
    "permit.stat.fee": "Frais municipaux",
    "permit.stat.filed": "Déposé le {date}",
    "permit.queue.lead": "La file de construction de Burnaby est d’environ",
    "permit.queue.days": "{n} jours ouvrables",
    "permit.queue.tail": "en ce moment. Je vous préviens dès que quelque chose bouge.",
    "permit.needs.eyebrow": "Ce qu’il faut",
    "permit.needs.title": "Documents",
    "permit.needs.count": "· {done} sur {total} faits",
    "permit.ai.yes": "Oui, remplis-le",
    "permit.ai.no": "Je m’en occupe",
    "permit.req.inProgress": "Lopez s’en occupe.",
    "permit.next.eyebrow": "Ce qui vient ensuite",
    "permit.next.title": "Inspections après l’approbation",
    "permit.next.hint":
      "Burnaby envoie quelqu’un pour vérifier les travaux. Je vous guiderai à travers chacune.",
    "permit.insp.notYet": "Pas encore",
    "permit.callout.title": "Burnaby a laissé un commentaire sur ce permis",
    "permit.callout.body":
      "Ils veulent un dessin en coupe du nouveau linteau du mur. J’ai rédigé un courriel à votre ingénieur.",
    "permit.callout.cta": "Voir le brouillon",
    "permit.foot.question": "Une question à ce sujet ?",
    "permit.foot.ask": "Demander à l’IA",
    "permit.foot.next": "Suivant : {name}",

    // ---- Ask page chrome ----
    "ask.back": "Retour à votre rénovation",
    "ask.knows": "L’IA connaît votre projet",
    "ask.placeholder": "Demandez n’importe quoi sur votre rénovation…",
    "ask.send": "Envoyer",
    "ask.tryAsking": "Essayez de demander",
  },
  "zh-Yue": {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "建築許可證",
    "data.permit.building.blurb":
      "結構上嘅改動——拆走廚房同飯廳之間嗰幅牆算係結構性改動，所以本納比要批先得。",
    "data.permit.electrical.name": "電力許可證",
    "data.permit.electrical.blurb":
      "島台插座、爐頭同埋嵌入式燈嘅新電路。由你嘅電工喺 Lopez 名下申請。",
    "data.permit.plumbing.name": "水喉許可證",
    "data.permit.plumbing.blurb": "搬移星盆同洗碗機嘅水管。",
    "data.permit.mechanical.name": "機械許可證",
    "data.permit.mechanical.blurb":
      "穿過外牆嘅新抽油煙機排氣口。因為佢改變咗建築外殼，所以要申請。",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "地盤平面圖",
    "data.permit.building.req.site-plan.helper": "一張顯示你塊地同埋屋喺邊度嘅圖。",
    "data.permit.building.req.floor-plan.label": "樓面平面圖（現有 + 擬建）",
    "data.permit.building.req.floor-plan.helper":
      "兩張圖：廚房而家嘅樣，同埋改完之後嘅樣。",
    "data.permit.building.req.structural-letter.label": "結構工程師信件",
    "data.permit.building.req.structural-letter.helper":
      "因為你要拆牆。工程師證明咁做係安全嘅。",
    "data.permit.building.req.contractor-license.label": "承建商牌照證明",
    "data.permit.building.req.contractor-license.helper":
      "Lopez Construction 嘅 BC 商業牌照，目前有效。",
    "data.permit.building.req.energy-form.label": "能源步驟法規合規（BCBC §9.36）",
    "data.permit.building.req.energy-form.helper":
      "BC 規定任何有新照明、隔熱或者窗戶嘅房間都要交呢份。",
    "data.permit.electrical.req.load-calc.label": "負荷計算",
    "data.permit.electrical.req.load-calc.helper": "顯示你嘅電箱頂得住啲新電路。",
    "data.permit.electrical.req.one-line.label": "單線圖",
    "data.permit.electrical.req.one-line.helper": "一張簡單嘅佈線圖。由你嘅電工畫。",
    "data.permit.plumbing.req.fixture-count.label": "潔具數量表格",
    "data.permit.plumbing.req.fixture-count.helper":
      "淨係數吓星盆、洗碗機等等。好快填完。",
    "data.permit.mechanical.req.vent-spec.label": "排氣規格",
    "data.permit.mechanical.req.vent-spec.helper": "用邊款抽油煙機 + 點樣向出面排氣。",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "粗框架",
    "data.permit.building.insp.rough-frame.check":
      "幅牆拆咗、新框架搭好之後——喺釘石膏板之前。",
    "data.permit.building.insp.final.name": "最終驗收",
    "data.permit.building.insp.final.check":
      "全部完成：飾面、裝置、所有嘢。最後簽批。",
    "data.permit.electrical.insp.elec-rough.name": "電力粗裝",
    "data.permit.electrical.insp.elec-rough.check": "封牆之前牆入面嘅佈線。",
    "data.permit.electrical.insp.elec-final.name": "電力最終驗收",
    "data.permit.electrical.insp.elec-final.check": "插座、開關同裝置全部正常運作。",

    // ---- Shared status data ----
    "data.status.not_started.label": "未開始",
    "data.status.not_started.blurb": "重未開始",
    "data.status.preparing.label": "準備緊",
    "data.status.preparing.blurb": "Lopez 喺度整緊啲文件",
    "data.status.submitted.label": "已遞交",
    "data.status.submitted.blurb": "本納比收咗份申請",
    "data.status.in_review.label": "本納比審查緊",
    "data.status.in_review.blurb": "本納比喺度睇你啲計劃",
    "data.status.needs_info.label": "需要你回覆",
    "data.status.needs_info.blurb": "本納比要你提供啲嘢",
    "data.status.approved.label": "已批准",
    "data.status.approved.blurb": "可以開工",
    "data.status.inspections.label": "驗收",
    "data.status.inspections.blurb": "驗收員喺度檢查工程",
    "data.status.closed.label": "完成",
    "data.status.closed.blurb": "完成同埋已歸檔",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "我可以幫你用你啲計劃填好佢。大約 2 分鐘搞掂。",
    "data.permit.plumbing.req.fixture-count.ai":
      "我可以幫你填——淨係一個新星盆、一部洗碗機。",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "點解喺自己間屋拆幅牆都要許可證？嗰幅仲唔係承重牆添。",
    "data.chat.m2":
      "本納比規定，每逢你改變房間嘅佈局都要許可證——就算係非承重牆都要。原因有兩個：（1）確保牆入面冇收埋電線或者水管，同埋（2）保持你間屋嘅保險同轉售清清楚楚。如果將來嘅買家發現有未經批准嘅改動，可能會阻住賣屋。\n\n好消息係：呢個係小許可證，而你嗰份已經喺審查緊。",
    "data.chat.m2.ref.building": "你嘅建築許可證",
    "data.chat.m2.followup.1": "審查要幾耐？",
    "data.chat.m2.followup.2": "如果佢哋要求改動會點？",
    "data.chat.m2.followup.3": "批准之前我可唔可以開始拆？",
    "data.chat.m3": "批准之前我可唔可以開始拆？",
    "data.chat.m4":
      "簡單講：唔得，幅牆唔得。本納比嘅政策係，凡係許可證審查緊所涵蓋嘅工程，喺許可證發出之前都唔可以開始。如果驗收員經過見到幅牆拆咗，佢可以貼紅牌封咗個地盤，即係所有嘢都要停。\n\n你*可以*開始嘅：拆櫃、拆電器、鋪地板保護——呢啲全部都唔使許可證。我會建議你喺批准之前唔好掂幅牆同電力（按本納比而家嘅排隊，大約仲有 9 日）。",
    "data.chat.m4.followup.1": "貼紅牌係咩意思？",
    "data.chat.m4.followup.2": "電郵 Lopez 確認時間表",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "問得好。根據我所知你個許可證嘅情況，最有可能係咁：本納比嘅審查隊列通常喺星期二同星期四先有進展。如果佢哋要求改動，你通常喺第一個星期內就會收到通知。到目前為止你嗰份都好平靜——呢個係好兆頭。",
    "data.chat.fallback.followup.1": "典型嘅審查意見係點樣㗎？",
    "data.chat.fallback.followup.2": "我使唔使擔心？",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "我個許可證仲有幾耐先批？",
    "data.prompt.2": "驗收嗰陣我要做啲咩？",
    "data.prompt.3": "話我知跟住會發生咩事",
    "data.prompt.4": "Lopez 係咪交齊咗佢哋應該交嘅嘢？",

    // ---- Permit-detail page chrome ----
    "permit.back": "返去你嘅裝修",
    "permit.eyebrow": "許可證",
    "permit.stat.where": "而家去到邊",
    "permit.stat.pulledBy": "由邊個申請",
    "permit.stat.fee": "市政費用",
    "permit.stat.filed": "{date} 遞交",
    "permit.queue.lead": "本納比嘅建築隊列而家大約係",
    "permit.queue.days": "{n} 個工作天",
    "permit.queue.tail": "。一有任何進展我即刻話你知。",
    "permit.needs.eyebrow": "需要啲咩",
    "permit.needs.title": "文件",
    "permit.needs.count": "· {total} 份完成咗 {done} 份",
    "permit.ai.yes": "好，幫我填",
    "permit.ai.no": "我自己嚟",
    "permit.req.inProgress": "Lopez 喺度跟緊呢樣。",
    "permit.next.eyebrow": "跟住係咩",
    "permit.next.title": "批准之後嘅驗收",
    "permit.next.hint": "本納比會派人嚟核實工程。我會逐個帶你行一次。",
    "permit.insp.notYet": "重未到",
    "permit.callout.title": "本納比就呢個許可證留低咗一個意見",
    "permit.callout.body":
      "佢哋想要新牆楣嘅剖面圖。我已經幫你草擬咗一封電郵畀你個工程師。",
    "permit.callout.cta": "睇吓草稿",
    "permit.foot.question": "對呢樣有疑問？",
    "permit.foot.ask": "問 AI",
    "permit.foot.next": "下一個：{name}",

    // ---- Ask page chrome ----
    "ask.back": "返去你嘅裝修",
    "ask.knows": "AI 了解你個項目",
    "ask.placeholder": "有咩關於你裝修嘅問題都可以問…",
    "ask.send": "傳送",
    "ask.tryAsking": "試吓問",
  },
  pa: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "ਬਿਲਡਿੰਗ ਪਰਮਿਟ",
    "data.permit.building.blurb":
      "ਢਾਂਚਾਗਤ ਤਬਦੀਲੀਆਂ — ਰਸੋਈ ਅਤੇ ਡਾਇਨਿੰਗ ਰੂਮ ਵਿਚਕਾਰਲੀ ਕੰਧ ਢਾਹੁਣਾ ਢਾਂਚਾਗਤ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ, ਇਸ ਲਈ ਬਰਨਬੀ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦੇਣੀ ਪੈਂਦੀ ਹੈ।",
    "data.permit.electrical.name": "ਇਲੈਕਟ੍ਰੀਕਲ ਪਰਮਿਟ",
    "data.permit.electrical.blurb":
      "ਆਈਲੈਂਡ ਦੀਆਂ ਆਊਟਲੈਟਾਂ, ਰੇਂਜ ਅਤੇ ਰੀਸੈੱਸਡ ਲਾਈਟਿੰਗ ਲਈ ਨਵੇਂ ਸਰਕਟ। ਤੁਹਾਡੇ ਇਲੈਕਟ੍ਰੀਸ਼ੀਅਨ ਨੇ Lopez ਦੇ ਅਧੀਨ ਲਿਆ।",
    "data.permit.plumbing.name": "ਪਲੰਬਿੰਗ ਪਰਮਿਟ",
    "data.permit.plumbing.blurb": "ਸਿੰਕ ਅਤੇ ਡਿਸ਼ਵਾਸ਼ਰ ਦੀ ਲਾਈਨ ਨੂੰ ਹਿਲਾਉਣਾ।",
    "data.permit.mechanical.name": "ਮਕੈਨੀਕਲ ਪਰਮਿਟ",
    "data.permit.mechanical.blurb":
      "ਬਾਹਰੀ ਕੰਧ ਰਾਹੀਂ ਨਵੀਂ ਰੇਂਜ ਹੁੱਡ ਦੀ ਵੈਂਟ। ਲੋੜੀਂਦੀ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇਮਾਰਤ ਦੇ ਆਵਰਣ ਨੂੰ ਬਦਲਦੀ ਹੈ।",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "ਸਾਈਟ ਪਲਾਨ",
    "data.permit.building.req.site-plan.helper":
      "ਇੱਕ ਡਰਾਇੰਗ ਜੋ ਤੁਹਾਡਾ ਪਲਾਟ ਅਤੇ ਘਰ ਕਿੱਥੇ ਹੈ ਦਿਖਾਉਂਦੀ ਹੈ।",
    "data.permit.building.req.floor-plan.label": "ਫਲੋਰ ਪਲਾਨ (ਮੌਜੂਦਾ + ਪ੍ਰਸਤਾਵਿਤ)",
    "data.permit.building.req.floor-plan.helper":
      "ਦੋ ਡਰਾਇੰਗਾਂ: ਰਸੋਈ ਅੱਜ ਕਿਹੋ ਜਿਹੀ ਹੈ, ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਕਿਹੋ ਜਿਹੀ ਹੋਵੇਗੀ।",
    "data.permit.building.req.structural-letter.label": "ਢਾਂਚਾਗਤ ਇੰਜੀਨੀਅਰ ਦੀ ਚਿੱਠੀ",
    "data.permit.building.req.structural-letter.helper":
      "ਕਿਉਂਕਿ ਤੁਸੀਂ ਇੱਕ ਕੰਧ ਹਟਾ ਰਹੇ ਹੋ। ਇੰਜੀਨੀਅਰ ਪ੍ਰਮਾਣਿਤ ਕਰਦਾ ਹੈ ਕਿ ਇਹ ਸੁਰੱਖਿਅਤ ਹੈ।",
    "data.permit.building.req.contractor-license.label": "ਠੇਕੇਦਾਰ ਦੇ ਲਾਇਸੈਂਸ ਦਾ ਸਬੂਤ",
    "data.permit.building.req.contractor-license.helper":
      "Lopez Construction ਦਾ BC ਕਾਰੋਬਾਰੀ ਲਾਇਸੈਂਸ, ਮੌਜੂਦਾ ਸਮੇਂ ਚਾਲੂ।",
    "data.permit.building.req.energy-form.label": "ਐਨਰਜੀ ਸਟੈੱਪ ਕੋਡ ਅਨੁਕੂਲਤਾ (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "BC ਨੂੰ ਨਵੀਂ ਲਾਈਟਿੰਗ, ਇਨਸੂਲੇਸ਼ਨ ਜਾਂ ਖਿੜਕੀਆਂ ਵਾਲੇ ਕਿਸੇ ਵੀ ਕਮਰੇ ਲਈ ਇਹ ਚਾਹੀਦਾ ਹੈ।",
    "data.permit.electrical.req.load-calc.label": "ਲੋਡ ਗਣਨਾ",
    "data.permit.electrical.req.load-calc.helper":
      "ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਤੁਹਾਡਾ ਪੈਨਲ ਨਵੇਂ ਸਰਕਟਾਂ ਨੂੰ ਸੰਭਾਲ ਸਕਦਾ ਹੈ।",
    "data.permit.electrical.req.one-line.label": "ਵਨ-ਲਾਈਨ ਡਾਇਗ੍ਰਾਮ",
    "data.permit.electrical.req.one-line.helper":
      "ਇੱਕ ਸਧਾਰਨ ਵਾਇਰਿੰਗ ਨਕਸ਼ਾ। ਤੁਹਾਡਾ ਇਲੈਕਟ੍ਰੀਸ਼ੀਅਨ ਇਸਨੂੰ ਬਣਾਉਂਦਾ ਹੈ।",
    "data.permit.plumbing.req.fixture-count.label": "ਫਿਕਸਚਰ ਗਿਣਤੀ ਫਾਰਮ",
    "data.permit.plumbing.req.fixture-count.helper":
      "ਬੱਸ ਸਿੰਕਾਂ, ਡਿਸ਼ਵਾਸ਼ਰਾਂ ਆਦਿ ਦੀ ਗਿਣਤੀ। ਤੇਜ਼ ਫਾਰਮ।",
    "data.permit.mechanical.req.vent-spec.label": "ਵੈਂਟ ਵਿਸ਼ੇਸ਼ਤਾ",
    "data.permit.mechanical.req.vent-spec.helper": "ਕਿਹੜੀ ਹੁੱਡ + ਇਹ ਬਾਹਰ ਕਿਵੇਂ ਵੈਂਟ ਕਰਦੀ ਹੈ।",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "ਰਫ਼ ਫਰੇਮਿੰਗ",
    "data.permit.building.insp.rough-frame.check":
      "ਕੰਧ ਢਾਹੁਣ ਅਤੇ ਨਵੀਂ ਫਰੇਮਿੰਗ ਖੜ੍ਹੀ ਹੋਣ ਤੋਂ ਬਾਅਦ — ਡ੍ਰਾਈਵਾਲ ਤੋਂ ਪਹਿਲਾਂ।",
    "data.permit.building.insp.final.name": "ਅੰਤਿਮ ਨਿਰੀਖਣ",
    "data.permit.building.insp.final.check":
      "ਸਭ ਕੁਝ ਹੋ ਗਿਆ: ਫਿਨਿਸ਼, ਫਿਕਸਚਰ, ਸਭ ਕੁਝ। ਅੰਤਿਮ ਮਨਜ਼ੂਰੀ।",
    "data.permit.electrical.insp.elec-rough.name": "ਇਲੈਕਟ੍ਰੀਕਲ ਰਫ਼-ਇਨ",
    "data.permit.electrical.insp.elec-rough.check": "ਕੰਧਾਂ ਬੰਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਉਨ੍ਹਾਂ ਵਿੱਚ ਵਾਇਰਿੰਗ।",
    "data.permit.electrical.insp.elec-final.name": "ਇਲੈਕਟ੍ਰੀਕਲ ਅੰਤਿਮ",
    "data.permit.electrical.insp.elec-final.check":
      "ਆਊਟਲੈਟਾਂ, ਸਵਿੱਚ ਅਤੇ ਫਿਕਸਚਰ ਸਭ ਕੰਮ ਕਰ ਰਹੇ ਹਨ।",

    // ---- Shared status data ----
    "data.status.not_started.label": "ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਇਆ",
    "data.status.not_started.blurb": "ਅਜੇ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਇਆ",
    "data.status.preparing.label": "ਤਿਆਰੀ ਚੱਲ ਰਹੀ ਹੈ",
    "data.status.preparing.blurb": "Lopez ਕਾਗਜ਼ਾਤ ਇਕੱਠੇ ਕਰ ਰਿਹਾ ਹੈ",
    "data.status.submitted.label": "ਜਮ੍ਹਾਂ ਕੀਤਾ",
    "data.status.submitted.blurb": "ਬਰਨਬੀ ਕੋਲ ਅਰਜ਼ੀ ਹੈ",
    "data.status.in_review.label": "ਬਰਨਬੀ ਸਮੀਖਿਆ ਕਰ ਰਿਹਾ ਹੈ",
    "data.status.in_review.blurb": "ਬਰਨਬੀ ਤੁਹਾਡੀਆਂ ਯੋਜਨਾਵਾਂ ਪੜ੍ਹ ਰਿਹਾ ਹੈ",
    "data.status.needs_info.label": "ਤੁਹਾਡੇ ਜਵਾਬ ਦੀ ਲੋੜ",
    "data.status.needs_info.blurb": "ਬਰਨਬੀ ਨੂੰ ਤੁਹਾਡੇ ਤੋਂ ਕੁਝ ਚਾਹੀਦਾ ਹੈ",
    "data.status.approved.label": "ਮਨਜ਼ੂਰ",
    "data.status.approved.blurb": "ਕੰਮ ਸ਼ੁਰੂ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ",
    "data.status.inspections.label": "ਨਿਰੀਖਣ",
    "data.status.inspections.blurb": "ਨਿਰੀਖਕ ਕੰਮ ਦੀ ਜਾਂਚ ਕਰ ਰਹੇ ਹਨ",
    "data.status.closed.label": "ਮੁਕੰਮਲ",
    "data.status.closed.blurb": "ਪੂਰਾ ਹੋਇਆ ਅਤੇ ਦਾਇਰ ਕੀਤਾ",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "ਮੈਂ ਇਸਨੂੰ ਤੁਹਾਡੀਆਂ ਯੋਜਨਾਵਾਂ ਤੋਂ ਭਰ ਸਕਦਾ ਹਾਂ। ਲਗਭਗ 2 ਮਿੰਟ ਲੱਗਦੇ ਹਨ।",
    "data.permit.plumbing.req.fixture-count.ai":
      "ਮੈਂ ਇਸਨੂੰ ਭਰ ਸਕਦਾ ਹਾਂ — ਸਿਰਫ਼ ਇੱਕ ਨਵਾਂ ਸਿੰਕ, ਇੱਕ ਡਿਸ਼ਵਾਸ਼ਰ।",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "ਮੈਨੂੰ ਆਪਣੇ ਘਰ ਵਿੱਚ ਇੱਕ ਕੰਧ ਢਾਹੁਣ ਲਈ ਪਰਮਿਟ ਦੀ ਕਿਉਂ ਲੋੜ ਹੈ? ਇਹ ਤਾਂ ਭਾਰ ਚੁੱਕਣ ਵਾਲੀ ਵੀ ਨਹੀਂ ਹੈ।",
    "data.chat.m2":
      "ਬਰਨਬੀ ਨੂੰ ਹਰ ਵਾਰ ਪਰਮਿਟ ਚਾਹੀਦਾ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਕਿਸੇ ਕਮਰੇ ਦੀ ਬਣਤਰ ਬਦਲਦੇ ਹੋ — ਭਾਰ ਨਾ ਚੁੱਕਣ ਵਾਲੀਆਂ ਕੰਧਾਂ ਲਈ ਵੀ। ਇਹ ਦੋ ਗੱਲਾਂ ਬਾਰੇ ਹੈ: (1) ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਕਿ ਕੰਧ ਵਿੱਚ ਕੋਈ ਬਿਜਲੀ ਜਾਂ ਪਲੰਬਿੰਗ ਲੁਕੀ ਨਹੀਂ ਹੈ, ਅਤੇ (2) ਤੁਹਾਡੇ ਘਰ ਦਾ ਬੀਮਾ ਅਤੇ ਮੁੜ-ਵਿਕਰੀ ਸਾਫ਼ ਰੱਖਣਾ। ਜੇ ਕੋਈ ਭਵਿੱਖੀ ਖਰੀਦਦਾਰ ਬਿਨਾਂ ਪਰਮਿਟ ਵਾਲੀ ਤਬਦੀਲੀ ਲੱਭ ਲਵੇ, ਤਾਂ ਇਹ ਵਿਕਰੀ ਨੂੰ ਰੋਕ ਸਕਦੀ ਹੈ।\n\nਚੰਗੀ ਗੱਲ: ਇਹ ਇੱਕ ਛੋਟਾ ਪਰਮਿਟ ਹੈ, ਅਤੇ ਤੁਹਾਡਾ ਪਹਿਲਾਂ ਹੀ ਸਮੀਖਿਆ ਵਿੱਚ ਹੈ।",
    "data.chat.m2.ref.building": "ਤੁਹਾਡਾ ਬਿਲਡਿੰਗ ਪਰਮਿਟ",
    "data.chat.m2.followup.1": "ਸਮੀਖਿਆ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗੇਗਾ?",
    "data.chat.m2.followup.2": "ਜੇ ਉਹ ਤਬਦੀਲੀਆਂ ਮੰਗਣ ਤਾਂ ਕੀ ਹੋਵੇਗਾ?",
    "data.chat.m2.followup.3": "ਕੀ ਮੈਂ ਮਨਜ਼ੂਰੀ ਤੋਂ ਪਹਿਲਾਂ ਢਾਹੁਣਾ ਸ਼ੁਰੂ ਕਰ ਸਕਦਾ ਹਾਂ?",
    "data.chat.m3": "ਕੀ ਮੈਂ ਮਨਜ਼ੂਰੀ ਤੋਂ ਪਹਿਲਾਂ ਢਾਹੁਣਾ ਸ਼ੁਰੂ ਕਰ ਸਕਦਾ ਹਾਂ?",
    "data.chat.m4":
      "ਛੋਟਾ ਜਵਾਬ: ਨਹੀਂ, ਕੰਧ ਨਹੀਂ। ਬਰਨਬੀ ਦੀ ਨੀਤੀ ਇਹ ਹੈ ਕਿ ਸਮੀਖਿਆ-ਅਧੀਨ ਪਰਮਿਟ ਨਾਲ ਕਵਰ ਹੋਇਆ ਕੋਈ ਵੀ ਕੰਮ ਪਰਮਿਟ ਜਾਰੀ ਹੋਣ ਤੱਕ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋ ਸਕਦਾ। ਜੇ ਕੋਈ ਨਿਰੀਖਕ ਲੰਘਦਾ ਹੈ ਅਤੇ ਕੰਧ ਢਹੀ ਦੇਖਦਾ ਹੈ, ਤਾਂ ਉਹ ਸਾਈਟ ਨੂੰ ਰੈੱਡ-ਟੈਗ ਕਰ ਸਕਦੇ ਹਨ, ਜਿਸਦਾ ਮਤਲਬ ਹੈ ਸਭ ਕੁਝ ਰੁਕ ਜਾਂਦਾ ਹੈ।\n\nਜੋ ਤੁਸੀਂ *ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ*: ਕੈਬਿਨੇਟ ਢਾਹੁਣਾ, ਉਪਕਰਣ ਡਿਸਕਨੈਕਟ ਕਰਨਾ, ਅਤੇ ਫਰਸ਼ ਦੀ ਸੁਰੱਖਿਆ — ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਲਈ ਪਰਮਿਟ ਦੀ ਲੋੜ ਨਹੀਂ। ਮੈਂ ਕੰਧ ਅਤੇ ਬਿਜਲੀ ਨੂੰ ਮਨਜ਼ੂਰੀ ਮਿਲਣ ਤੱਕ ਰੋਕ ਕੇ ਰੱਖਾਂਗਾ (ਬਰਨਬੀ ਦੀ ਮੌਜੂਦਾ ਕਤਾਰ ਅਨੁਸਾਰ ਲਗਭਗ 9 ਦਿਨ ਹੋਰ)।",
    "data.chat.m4.followup.1": "ਰੈੱਡ-ਟੈਗ ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    "data.chat.m4.followup.2": "ਸਮਾਂ-ਸਾਰਣੀ ਦੀ ਪੁਸ਼ਟੀ ਲਈ Lopez ਨੂੰ ਈਮੇਲ ਕਰੋ",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "ਵਧੀਆ ਸਵਾਲ। ਤੁਹਾਡੇ ਪਰਮਿਟ ਬਾਰੇ ਜੋ ਮੈਂ ਜਾਣਦਾ ਹਾਂ, ਉਸ ਅਨੁਸਾਰ ਇਹ ਸੰਭਾਵਨਾ ਹੈ: ਬਰਨਬੀ ਦੀ ਸਮੀਖਿਆ ਕਤਾਰ ਆਮ ਤੌਰ 'ਤੇ ਮੰਗਲਵਾਰ ਅਤੇ ਵੀਰਵਾਰ ਨੂੰ ਅੱਗੇ ਵਧਦੀ ਹੈ। ਜੇ ਉਹ ਤਬਦੀਲੀਆਂ ਮੰਗਣ ਜਾ ਰਹੇ ਹਨ, ਤਾਂ ਤੁਹਾਨੂੰ ਆਮ ਤੌਰ 'ਤੇ ਪਹਿਲੇ ਹਫ਼ਤੇ ਵਿੱਚ ਪਤਾ ਲੱਗ ਜਾਂਦਾ ਹੈ। ਹੁਣ ਤੱਕ ਤੁਹਾਡਾ ਸ਼ਾਂਤ ਰਿਹਾ ਹੈ — ਇਹ ਚੰਗੀ ਨਿਸ਼ਾਨੀ ਹੈ।",
    "data.chat.fallback.followup.1": "ਇੱਕ ਆਮ ਸਮੀਖਿਆ ਟਿੱਪਣੀ ਕਿਹੋ ਜਿਹੀ ਹੁੰਦੀ ਹੈ?",
    "data.chat.fallback.followup.2": "ਕੀ ਮੈਨੂੰ ਚਿੰਤਾ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "ਮੇਰਾ ਪਰਮਿਟ ਮਨਜ਼ੂਰ ਹੋਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗੇਗਾ?",
    "data.prompt.2": "ਨਿਰੀਖਣ ਦੌਰਾਨ ਮੈਂ ਕੀ ਕਰਾਂ?",
    "data.prompt.3": "ਮੈਨੂੰ ਦੱਸੋ ਕਿ ਅੱਗੇ ਕੀ ਹੁੰਦਾ ਹੈ",
    "data.prompt.4": "ਕੀ Lopez ਨੇ ਸਭ ਕੁਝ ਭੇਜ ਦਿੱਤਾ ਜੋ ਉਨ੍ਹਾਂ ਨੂੰ ਭੇਜਣਾ ਚਾਹੀਦਾ ਸੀ?",

    // ---- Permit-detail page chrome ----
    "permit.back": "ਆਪਣੀ ਮੁਰੰਮਤ 'ਤੇ ਵਾਪਸ",
    "permit.eyebrow": "ਪਰਮਿਟ",
    "permit.stat.where": "ਹੁਣ ਕਿੱਥੇ ਹੈ",
    "permit.stat.pulledBy": "ਕਿਸ ਨੇ ਲਿਆ",
    "permit.stat.fee": "ਸ਼ਹਿਰ ਦੀ ਫੀਸ",
    "permit.stat.filed": "{date} ਨੂੰ ਦਾਇਰ ਕੀਤਾ",
    "permit.queue.lead": "ਬਰਨਬੀ ਦੀ ਬਿਲਡਿੰਗ ਕਤਾਰ ਇਸ ਵੇਲੇ ਲਗਭਗ",
    "permit.queue.days": "{n} ਕੰਮਕਾਜੀ ਦਿਨ",
    "permit.queue.tail": "ਹੈ। ਜਿਉਂ ਹੀ ਕੁਝ ਹਿਲਦਾ ਹੈ ਮੈਂ ਤੁਹਾਨੂੰ ਦੱਸ ਦੇਵਾਂਗਾ।",
    "permit.needs.eyebrow": "ਕੀ ਚਾਹੀਦਾ ਹੈ",
    "permit.needs.title": "ਦਸਤਾਵੇਜ਼",
    "permit.needs.count": "· {total} ਵਿੱਚੋਂ {done} ਹੋ ਗਏ",
    "permit.ai.yes": "ਹਾਂ, ਭਰ ਦਿਓ",
    "permit.ai.no": "ਮੈਂ ਕਰ ਲਵਾਂਗਾ",
    "permit.req.inProgress": "Lopez ਇਸ 'ਤੇ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ।",
    "permit.next.eyebrow": "ਅੱਗੇ ਕੀ ਆਉਂਦਾ ਹੈ",
    "permit.next.title": "ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਾਅਦ ਨਿਰੀਖਣ",
    "permit.next.hint":
      "ਬਰਨਬੀ ਕੰਮ ਦੀ ਤਸਦੀਕ ਕਰਨ ਲਈ ਕਿਸੇ ਨੂੰ ਭੇਜਦਾ ਹੈ। ਮੈਂ ਤੁਹਾਨੂੰ ਹਰ ਇੱਕ ਵਿੱਚੋਂ ਲੰਘਾਵਾਂਗਾ।",
    "permit.insp.notYet": "ਅਜੇ ਨਹੀਂ",
    "permit.callout.title": "ਬਰਨਬੀ ਨੇ ਇਸ ਪਰਮਿਟ 'ਤੇ ਇੱਕ ਟਿੱਪਣੀ ਛੱਡੀ ਹੈ",
    "permit.callout.body":
      "ਉਹ ਨਵੀਂ ਕੰਧ ਦੇ ਹੈਡਰ ਦੀ ਸੈਕਸ਼ਨ ਡਰਾਇੰਗ ਚਾਹੁੰਦੇ ਹਨ। ਮੈਂ ਤੁਹਾਡੇ ਇੰਜੀਨੀਅਰ ਨੂੰ ਇੱਕ ਈਮੇਲ ਦਾ ਖਰੜਾ ਤਿਆਰ ਕੀਤਾ ਹੈ।",
    "permit.callout.cta": "ਖਰੜਾ ਦੇਖੋ",
    "permit.foot.question": "ਇਸ ਬਾਰੇ ਕੋਈ ਸਵਾਲ ਹੈ?",
    "permit.foot.ask": "AI ਨੂੰ ਪੁੱਛੋ",
    "permit.foot.next": "ਅਗਲਾ: {name}",

    // ---- Ask page chrome ----
    "ask.back": "ਆਪਣੀ ਮੁਰੰਮਤ 'ਤੇ ਵਾਪਸ",
    "ask.knows": "AI ਤੁਹਾਡੇ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਜਾਣਦਾ ਹੈ",
    "ask.placeholder": "ਆਪਣੀ ਮੁਰੰਮਤ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ…",
    "ask.send": "ਭੇਜੋ",
    "ask.tryAsking": "ਪੁੱਛ ਕੇ ਦੇਖੋ",
  },
}
