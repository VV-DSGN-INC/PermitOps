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
  tl: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "Building Permit",
    "data.permit.building.blurb":
      "Ang mga pagbabagong istruktural — ang pagtanggal ng dingding sa pagitan ng kusina at dining room ay itinuturing na istruktural, kaya kailangang aprubahan ito ng Burnaby.",
    "data.permit.electrical.name": "Electrical Permit",
    "data.permit.electrical.blurb":
      "Mga bagong sirkito para sa mga saksakan ng island, sa range, at sa recessed lighting. Kinuha ng iyong electrician sa ilalim ng pangalan ng Lopez Construction.",
    "data.permit.plumbing.name": "Plumbing Permit",
    "data.permit.plumbing.blurb": "Paglilipat ng lababo at ng linya ng dishwasher.",
    "data.permit.mechanical.name": "Mechanical Permit",
    "data.permit.mechanical.blurb":
      "Ang bagong vent ng range hood na dumaraan sa panlabas na dingding. Kailangan ito dahil binabago nito ang building envelope.",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "Site plan",
    "data.permit.building.req.site-plan.helper":
      "Isang guhit na nagpapakita ng iyong lote at kung saan nakatayo ang bahay.",
    "data.permit.building.req.floor-plan.label": "Floor plan (kasalukuyan + iminumungkahi)",
    "data.permit.building.req.floor-plan.helper":
      "Dalawang guhit: kung ano ang itsura ng kusina ngayon, at kung ano ang magiging itsura nito pagkatapos.",
    "data.permit.building.req.structural-letter.label": "Liham ng structural engineer",
    "data.permit.building.req.structural-letter.helper":
      "Dahil nagtatanggal ka ng dingding. Pinapatunayan ng engineer na ligtas ito.",
    "data.permit.building.req.contractor-license.label": "Patunay ng lisensya ng kontratista",
    "data.permit.building.req.contractor-license.helper":
      "Ang BC business licence ng Lopez Construction, kasalukuyang aktibo.",
    "data.permit.building.req.energy-form.label": "Pagsunod sa Energy Step Code (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "Kinakailangan ito ng BC para sa anumang silid na may bagong ilaw, insulation, o bintana.",
    "data.permit.electrical.req.load-calc.label": "Load calculation",
    "data.permit.electrical.req.load-calc.helper":
      "Nagpapakita na kaya ng iyong panel ang mga bagong sirkito.",
    "data.permit.electrical.req.one-line.label": "One-line diagram",
    "data.permit.electrical.req.one-line.helper":
      "Isang simpleng mapa ng wiring. Iginuguhit ito ng iyong electrician.",
    "data.permit.plumbing.req.fixture-count.label": "Form ng bilang ng fixture",
    "data.permit.plumbing.req.fixture-count.helper":
      "Bilang lang ng mga lababo, dishwasher, atbp. Mabilis na form.",
    "data.permit.mechanical.req.vent-spec.label": "Espesipikasyon ng vent",
    "data.permit.mechanical.req.vent-spec.helper": "Aling hood + paano ito naglalabas sa labas.",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "Rough framing",
    "data.permit.building.insp.rough-frame.check":
      "Pagkatapos matanggal ang dingding at maitayo ang bagong framing — bago ang drywall.",
    "data.permit.building.insp.final.name": "Pinal na inspeksyon",
    "data.permit.building.insp.final.check":
      "Tapos na ang lahat: mga finish, fixture, lahat. Ang pinal na pag-apruba.",
    "data.permit.electrical.insp.elec-rough.name": "Electrical rough-in",
    "data.permit.electrical.insp.elec-rough.check": "Wiring sa mga dingding bago ito isara.",
    "data.permit.electrical.insp.elec-final.name": "Pinal na electrical",
    "data.permit.electrical.insp.elec-final.check":
      "Gumagana lahat ng saksakan, switch, at fixture.",

    // ---- Shared status data ----
    "data.status.not_started.label": "Hindi pa nasisimulan",
    "data.status.not_started.blurb": "Hindi pa nasisimulan",
    "data.status.preparing.label": "Naghahanda",
    "data.status.preparing.blurb": "Inihahanda ng Lopez ang mga papeles",
    "data.status.submitted.label": "Naisumite na",
    "data.status.submitted.blurb": "Nasa Burnaby na ang aplikasyon",
    "data.status.in_review.label": "Sinusuri ng Burnaby",
    "data.status.in_review.blurb": "Binabasa ng Burnaby ang iyong mga plano",
    "data.status.needs_info.label": "Kailangan ng iyong sagot",
    "data.status.needs_info.blurb": "May kailangan ang Burnaby mula sa iyo",
    "data.status.approved.label": "Aprubado",
    "data.status.approved.blurb": "Malaya nang magsimula ng trabaho",
    "data.status.inspections.label": "Mga inspeksyon",
    "data.status.inspections.blurb": "Sinusuri ng mga inspektor ang trabaho",
    "data.status.closed.label": "Tapos na",
    "data.status.closed.blurb": "Natapos at naitala na",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "Kaya kong punan ito mula sa iyong mga plano. Mga 2 minuto lang.",
    "data.permit.plumbing.req.fixture-count.ai":
      "Kaya kong punan ito — isang bagong lababo lang, isang dishwasher.",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "Bakit kailangan ko ng permit para magtanggal ng dingding sa sarili kong bahay? Hindi naman ito load-bearing.",
    "data.chat.m2":
      "Nangangailangan ang Burnaby ng permit tuwing binabago mo ang hugis ng isang silid — kahit ang mga dingding na hindi load-bearing. Tungkol ito sa dalawang bagay: (1) pagtiyak na walang elektrisidad o tubo na nakatago sa dingding, at (2) pagpapanatiling malinis ng insurance at resale ng iyong bahay. Kung may matuklasang hindi pinermisuhang pagbabago ang isang bibili sa hinaharap, maaari nitong maantala ang isang benta.\n\nMagandang balita: maliit na permit ito, at ang sa iyo ay sinusuri na.",
    "data.chat.m2.ref.building": "Ang iyong Building Permit",
    "data.chat.m2.followup.1": "Gaano katagal ang pagsusuri?",
    "data.chat.m2.followup.2": "Ano ang mangyayari kung humingi sila ng mga pagbabago?",
    "data.chat.m2.followup.3": "Puwede ko bang simulan ang demo bago ang pag-apruba?",
    "data.chat.m3": "Puwede ko bang simulan ang demo bago ang pag-apruba?",
    "data.chat.m4":
      "Maikling sagot: hindi, hindi ang dingding. Patakaran ng Burnaby na anumang trabahong sakop ng isang permit na sinusuri ay hindi puwedeng simulan hanggang hindi pa naibibigay ang permit. Kung dumaan ang isang inspektor at makitang nakatanggal na ang dingding, puwede nilang red-tag ang site, na ang ibig sabihin ay titigil ang lahat.\n\nAng *puwede* mong simulan: pagtanggal ng cabinet, pag-disconnect ng appliance, at proteksyon sa sahig — wala sa mga ito ang nangangailangan ng permit. Iiwasan ko muna ang dingding at elektrisidad hanggang maaprubahan ka (mga 9 pang araw batay sa kasalukuyang pila ng Burnaby).",
    "data.chat.m4.followup.1": "Ano ang ibig sabihin ng red-tagged?",
    "data.chat.m4.followup.2": "I-email ang Lopez para kumpirmahin ang iskedyul",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "Magandang tanong. Batay sa nalalaman ko tungkol sa iyong permit, ito ang malamang: ang pila ng pagsusuri ng Burnaby ay karaniwang gumagalaw tuwing Martes at Huwebes. Kung hihingi sila ng mga pagbabago, kadalasang nababalitaan mo ito sa loob ng unang linggo. Sa ngayon, tahimik ang sa iyo — magandang senyales iyon.",
    "data.chat.fallback.followup.1": "Ano ang itsura ng karaniwang komento sa pagsusuri?",
    "data.chat.fallback.followup.2": "Dapat ba akong mag-alala?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "Gaano katagal bago maaprubahan ang aking permit?",
    "data.prompt.2": "Ano ang gagawin ko habang inspeksyon?",
    "data.prompt.3": "Ipaliwanag mo sa akin kung ano ang susunod na mangyayari",
    "data.prompt.4": "Naipadala ba ng Lopez ang lahat ng dapat nilang ipadala?",

    // ---- Permit-detail page chrome ----
    "permit.back": "Bumalik sa iyong renovation",
    "permit.eyebrow": "Permit",
    "permit.stat.where": "Kung nasaan na ito ngayon",
    "permit.stat.pulledBy": "Kinuha ni",
    "permit.stat.fee": "Bayad sa lungsod",
    "permit.stat.filed": "Naihain noong {date}",
    "permit.queue.lead": "Ang building queue ng Burnaby ay mga",
    "permit.queue.days": "{n} araw ng trabaho",
    "permit.queue.tail": "sa ngayon. Sasabihin ko sa iyo sa sandaling may magbago.",
    "permit.needs.eyebrow": "Ang kailangan nito",
    "permit.needs.title": "Mga dokumento",
    "permit.needs.count": "· {done} sa {total} tapos na",
    "permit.ai.yes": "Oo, punan mo",
    "permit.ai.no": "Ako na ang bahala",
    "permit.req.inProgress": "Ginagawa ito ng Lopez.",
    "permit.next.eyebrow": "Ang susunod na mangyayari",
    "permit.next.title": "Mga inspeksyon pagkatapos ng pag-apruba",
    "permit.next.hint":
      "Nagpapadala ang Burnaby ng tao para tingnan ang trabaho. Gagabayan kita sa bawat isa.",
    "permit.insp.notYet": "Hindi pa",
    "permit.callout.title": "Nag-iwan ang Burnaby ng isang komento sa permit na ito",
    "permit.callout.body":
      "Gusto nila ng section drawing ng header ng bagong dingding. Nagdraft ako ng email para sa iyong engineer.",
    "permit.callout.cta": "Tingnan ang draft",
    "permit.foot.question": "May tanong ka ba tungkol dito?",
    "permit.foot.ask": "Tanungin ang AI",
    "permit.foot.next": "Susunod: {name}",

    // ---- Ask page chrome ----
    "ask.back": "Bumalik sa iyong renovation",
    "ask.knows": "Alam ng AI ang iyong proyekto",
    "ask.placeholder": "Magtanong ng kahit ano tungkol sa iyong renovation…",
    "ask.send": "Ipadala",
    "ask.tryAsking": "Subukang itanong",
  },
  "zh-Hans": {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "建筑许可证",
    "data.permit.building.blurb":
      "结构性改动——拆除厨房和餐厅之间的那道墙属于结构改动，所以需要 Burnaby 批准。",
    "data.permit.electrical.name": "电气许可证",
    "data.permit.electrical.blurb":
      "为岛台插座、灶具和嵌入式灯具新增电路。由您的电工以 Lopez Construction 的名义申请。",
    "data.permit.plumbing.name": "管道许可证",
    "data.permit.plumbing.blurb": "移动水槽和洗碗机管线。",
    "data.permit.mechanical.name": "机械许可证",
    "data.permit.mechanical.blurb":
      "穿过外墙的新抽油烟机排气口。由于它改变了建筑外壳，因此需要申请。",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "场地平面图",
    "data.permit.building.req.site-plan.helper": "一张显示您的地块以及房屋位置的图纸。",
    "data.permit.building.req.floor-plan.label": "楼层平面图（现有 + 拟建）",
    "data.permit.building.req.floor-plan.helper":
      "两张图纸：厨房现在的样子，以及改造后的样子。",
    "data.permit.building.req.structural-letter.label": "结构工程师信函",
    "data.permit.building.req.structural-letter.helper":
      "因为您要拆除一道墙。工程师证明这样做是安全的。",
    "data.permit.building.req.contractor-license.label": "承包商执照证明",
    "data.permit.building.req.contractor-license.helper":
      "Lopez Construction 的 BC 营业执照，目前有效。",
    "data.permit.building.req.energy-form.label": "Energy Step Code 合规（BCBC §9.36）",
    "data.permit.building.req.energy-form.helper":
      "BC 规定，任何有新增照明、隔热或窗户的房间都需要这一项。",
    "data.permit.electrical.req.load-calc.label": "负荷计算",
    "data.permit.electrical.req.load-calc.helper": "表明您的配电盘能承受新增电路。",
    "data.permit.electrical.req.one-line.label": "单线图",
    "data.permit.electrical.req.one-line.helper": "一张简单的布线图。由您的电工绘制。",
    "data.permit.plumbing.req.fixture-count.label": "洁具数量表",
    "data.permit.plumbing.req.fixture-count.helper":
      "只是数一数水槽、洗碗机等。填起来很快。",
    "data.permit.mechanical.req.vent-spec.label": "排气规格",
    "data.permit.mechanical.req.vent-spec.helper": "用哪种抽油烟机 + 如何向外排气。",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "粗框架",
    "data.permit.building.insp.rough-frame.check":
      "在墙拆除、新框架搭好之后——钉石膏板之前。",
    "data.permit.building.insp.final.name": "最终检验",
    "data.permit.building.insp.final.check":
      "一切完成：饰面、装置、所有的一切。最终签批。",
    "data.permit.electrical.insp.elec-rough.name": "电气粗装",
    "data.permit.electrical.insp.elec-rough.check": "封墙之前墙内的布线。",
    "data.permit.electrical.insp.elec-final.name": "电气最终检验",
    "data.permit.electrical.insp.elec-final.check": "插座、开关和装置全部正常运作。",

    // ---- Shared status data ----
    "data.status.not_started.label": "未开始",
    "data.status.not_started.blurb": "尚未开始",
    "data.status.preparing.label": "准备中",
    "data.status.preparing.blurb": "Lopez 正在整理文件",
    "data.status.submitted.label": "已提交",
    "data.status.submitted.blurb": "Burnaby 已收到申请",
    "data.status.in_review.label": "Burnaby 正在审查",
    "data.status.in_review.blurb": "Burnaby 正在阅读您的方案",
    "data.status.needs_info.label": "需要您的回复",
    "data.status.needs_info.blurb": "Burnaby 需要您提供一些东西",
    "data.status.approved.label": "已批准",
    "data.status.approved.blurb": "可以开工了",
    "data.status.inspections.label": "检验",
    "data.status.inspections.blurb": "检验员正在检查工程",
    "data.status.closed.label": "完成",
    "data.status.closed.blurb": "已完成并归档",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "我可以根据您的方案填写这份表格。大约需要 2 分钟。",
    "data.permit.plumbing.req.fixture-count.ai":
      "我可以帮您填写——只有一个新水槽、一台洗碗机。",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "为什么在自己家里拆一道墙也需要许可证？那甚至都不是承重墙。",
    "data.chat.m2":
      "每当您改变房间的格局时，Burnaby 都要求办理许可证——即使是非承重墙也是如此。这关乎两件事：(1) 确保墙内没有隐藏的电线或管道，以及 (2) 让您房屋的保险和转售保持清晰无虞。如果将来的买家发现未经许可的改动，可能会拖延房屋出售。\n\n好消息是：这是一个小许可证，而您的申请已经在审查中了。",
    "data.chat.m2.ref.building": "您的建筑许可证",
    "data.chat.m2.followup.1": "审查需要多长时间？",
    "data.chat.m2.followup.2": "如果他们要求修改会怎样？",
    "data.chat.m2.followup.3": "我可以在批准前开始拆除吗？",
    "data.chat.m3": "我可以在批准前开始拆除吗？",
    "data.chat.m4":
      "简短回答：不行，墙不行。Burnaby 的政策是，凡是审查中的许可证所涵盖的工程，在许可证签发之前都不得开工。如果检验员经过时看到墙已经拆了，他们可以给工地贴红牌，这意味着一切都得停下来。\n\n您*可以*开始的：拆橱柜、断开电器、铺设地板保护——这些都不需要许可证。在获得批准之前，我建议先不要碰墙和电气（根据 Burnaby 目前的排队情况，大约还需 9 天）。",
    "data.chat.m4.followup.1": "贴红牌是什么意思？",
    "data.chat.m4.followup.2": "给 Lopez 发邮件确认时间表",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "好问题。根据我对您许可证的了解，最有可能的情况是：Burnaby 的审查队列通常在周二和周四推进。如果他们要求修改，您通常会在第一周内收到通知。到目前为止，您的申请一直很平静——这是个好兆头。",
    "data.chat.fallback.followup.1": "典型的审查意见是什么样的？",
    "data.chat.fallback.followup.2": "我需要担心吗？",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "我的许可证还要多久才能批准？",
    "data.prompt.2": "检验时我该做什么？",
    "data.prompt.3": "跟我讲讲接下来会发生什么",
    "data.prompt.4": "Lopez 把该交的都交齐了吗？",

    // ---- Permit-detail page chrome ----
    "permit.back": "返回您的装修",
    "permit.eyebrow": "许可证",
    "permit.stat.where": "现在进展到哪了",
    "permit.stat.pulledBy": "由谁申请",
    "permit.stat.fee": "市政费用",
    "permit.stat.filed": "{date} 提交",
    "permit.queue.lead": "Burnaby 的建筑队列目前大约为",
    "permit.queue.days": "{n} 个工作日",
    "permit.queue.tail": "。一有任何进展我会立刻通知您。",
    "permit.needs.eyebrow": "需要什么",
    "permit.needs.title": "文件",
    "permit.needs.count": "· {total} 份已完成 {done} 份",
    "permit.ai.yes": "好，帮我填",
    "permit.ai.no": "我自己来",
    "permit.req.inProgress": "Lopez 正在处理这一项。",
    "permit.next.eyebrow": "接下来是什么",
    "permit.next.title": "批准后的检验",
    "permit.next.hint": "Burnaby 会派人来核实工程。我会逐项带您了解。",
    "permit.insp.notYet": "还没到",
    "permit.callout.title": "Burnaby 就这份许可证留了一条意见",
    "permit.callout.body":
      "他们想要新墙楣的剖面图。我已经为您给工程师草拟了一封邮件。",
    "permit.callout.cta": "查看草稿",
    "permit.foot.question": "对此有疑问？",
    "permit.foot.ask": "问 AI",
    "permit.foot.next": "下一个：{name}",

    // ---- Ask page chrome ----
    "ask.back": "返回您的装修",
    "ask.knows": "AI 了解您的项目",
    "ask.placeholder": "关于您装修的任何问题都可以问…",
    "ask.send": "发送",
    "ask.tryAsking": "试试问",
  },
  ru: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "Разрешение на строительство",
    "data.permit.building.blurb":
      "Структурные изменения — снос стены между кухней и столовой считается структурным, поэтому Burnaby должен это одобрить.",
    "data.permit.electrical.name": "Разрешение на электрику",
    "data.permit.electrical.blurb":
      "Новые цепи для розеток острова, плиты и встроенного освещения. Оформляет ваш электрик под эгидой Lopez Construction.",
    "data.permit.plumbing.name": "Разрешение на сантехнику",
    "data.permit.plumbing.blurb": "Перенос раковины и линии посудомоечной машины.",
    "data.permit.mechanical.name": "Разрешение на механические работы",
    "data.permit.mechanical.blurb":
      "Новый вытяжной канал кухонной вытяжки через наружную стену. Нужно, потому что это меняет оболочку здания.",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "Ситуационный план",
    "data.permit.building.req.site-plan.helper":
      "Чертёж, показывающий ваш участок и расположение дома.",
    "data.permit.building.req.floor-plan.label": "План этажа (существующий + предлагаемый)",
    "data.permit.building.req.floor-plan.helper":
      "Два чертежа: как кухня выглядит сейчас и как она будет выглядеть после.",
    "data.permit.building.req.structural-letter.label": "Письмо инженера-конструктора",
    "data.permit.building.req.structural-letter.helper":
      "Потому что вы сносите стену. Инженер подтверждает, что это безопасно.",
    "data.permit.building.req.contractor-license.label": "Подтверждение лицензии подрядчика",
    "data.permit.building.req.contractor-license.helper":
      "Бизнес-лицензия Lopez Construction в BC, на данный момент действующая.",
    "data.permit.building.req.energy-form.label": "Соответствие Energy Step Code (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "BC требует это для любого помещения с новым освещением, утеплением или окнами.",
    "data.permit.electrical.req.load-calc.label": "Расчёт нагрузки",
    "data.permit.electrical.req.load-calc.helper":
      "Показывает, что ваш щиток выдержит новые цепи.",
    "data.permit.electrical.req.one-line.label": "Однолинейная схема",
    "data.permit.electrical.req.one-line.helper":
      "Простая схема проводки. Её рисует ваш электрик.",
    "data.permit.plumbing.req.fixture-count.label": "Форма подсчёта сантехники",
    "data.permit.plumbing.req.fixture-count.helper":
      "Просто подсчёт раковин, посудомоечных машин и т. д. Быстрая форма.",
    "data.permit.mechanical.req.vent-spec.label": "Спецификация вытяжки",
    "data.permit.mechanical.req.vent-spec.helper": "Какая вытяжка + как она выводится наружу.",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "Черновой каркас",
    "data.permit.building.insp.rough-frame.check":
      "После сноса стены и возведения нового каркаса — до гипсокартона.",
    "data.permit.building.insp.final.name": "Финальная инспекция",
    "data.permit.building.insp.final.check":
      "Всё готово: отделка, оборудование, всё целиком. Окончательное одобрение.",
    "data.permit.electrical.insp.elec-rough.name": "Черновая электрика",
    "data.permit.electrical.insp.elec-rough.check": "Проводка в стенах до того, как их закроют.",
    "data.permit.electrical.insp.elec-final.name": "Финальная электрика",
    "data.permit.electrical.insp.elec-final.check":
      "Розетки, выключатели и приборы — всё работает.",

    // ---- Shared status data ----
    "data.status.not_started.label": "Не начато",
    "data.status.not_started.blurb": "Ещё не начато",
    "data.status.preparing.label": "Идёт подготовка",
    "data.status.preparing.blurb": "Lopez собирает документы",
    "data.status.submitted.label": "Подано",
    "data.status.submitted.blurb": "Заявка у Burnaby",
    "data.status.in_review.label": "Burnaby рассматривает",
    "data.status.in_review.blurb": "Burnaby изучает ваши планы",
    "data.status.needs_info.label": "Нужен ваш ответ",
    "data.status.needs_info.blurb": "Burnaby нужно что-то от вас",
    "data.status.approved.label": "Одобрено",
    "data.status.approved.blurb": "Можно начинать работы",
    "data.status.inspections.label": "Инспекции",
    "data.status.inspections.blurb": "Инспекторы проверяют работу",
    "data.status.closed.label": "Готово",
    "data.status.closed.blurb": "Завершено и оформлено",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "Я могу заполнить это по вашим планам. Займёт около 2 минут.",
    "data.permit.plumbing.req.fixture-count.ai":
      "Я могу это заполнить — всего одна новая раковина, одна посудомоечная машина.",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "Почему мне нужно разрешение, чтобы снести стену в собственном доме? Она ведь даже не несущая.",
    "data.chat.m2":
      "Burnaby требует разрешение каждый раз, когда вы меняете планировку помещения — даже для ненесущих стен. Дело в двух вещах: (1) убедиться, что в стене не спрятана электрика или сантехника, и (2) сохранить страховку и перепродажу вашего дома в порядке. Если будущий покупатель обнаружит несанкционированное изменение, это может задержать продажу.\n\nХорошая новость: это небольшое разрешение, и ваше уже на рассмотрении.",
    "data.chat.m2.ref.building": "Ваше разрешение на строительство",
    "data.chat.m2.followup.1": "Сколько времени займёт рассмотрение?",
    "data.chat.m2.followup.2": "Что будет, если они попросят изменения?",
    "data.chat.m2.followup.3": "Можно ли начать демонтаж до одобрения?",
    "data.chat.m3": "Можно ли начать демонтаж до одобрения?",
    "data.chat.m4":
      "Короткий ответ: нет, стену нельзя. Политика Burnaby такова, что любые работы, охваченные разрешением на рассмотрении, не могут начаться, пока разрешение не выдано. Если инспектор проедет мимо и увидит снесённую стену, он может повесить на объект красную бирку, а это значит, что всё остановится.\n\nЧто вы *можете* начать: демонтаж шкафов, отключение техники и защиту пола — ничего из этого не требует разрешения. Я бы повременил со стеной и электрикой до получения одобрения (примерно ещё 9 дней, судя по текущей очереди Burnaby).",
    "data.chat.m4.followup.1": "Что значит «красная бирка»?",
    "data.chat.m4.followup.2": "Написать Lopez, чтобы подтвердить график",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "Хороший вопрос. Судя по тому, что я знаю о вашем разрешении, вот что наиболее вероятно: очередь рассмотрения в Burnaby обычно продвигается по вторникам и четвергам. Если они собираются попросить изменения, вы обычно узнаёте об этом в течение первой недели. Пока что у вас всё тихо — это хороший знак.",
    "data.chat.fallback.followup.1": "Как выглядит типичный комментарий при рассмотрении?",
    "data.chat.fallback.followup.2": "Стоит ли мне беспокоиться?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "Сколько ещё до одобрения моего разрешения?",
    "data.prompt.2": "Что мне делать во время инспекции?",
    "data.prompt.3": "Расскажите, что будет дальше",
    "data.prompt.4": "Lopez отправил всё, что должен был?",

    // ---- Permit-detail page chrome ----
    "permit.back": "Назад к вашему ремонту",
    "permit.eyebrow": "Разрешение",
    "permit.stat.where": "Где оно сейчас",
    "permit.stat.pulledBy": "Оформил",
    "permit.stat.fee": "Городской сбор",
    "permit.stat.filed": "Подано {date}",
    "permit.queue.lead": "Очередь по строительству в Burnaby сейчас составляет около",
    "permit.queue.days": "{n} рабочих дней",
    "permit.queue.tail": "прямо сейчас. Я сообщу вам, как только что-то сдвинется.",
    "permit.needs.eyebrow": "Что для этого нужно",
    "permit.needs.title": "Документы",
    "permit.needs.count": "· {done} из {total} готово",
    "permit.ai.yes": "Да, заполни",
    "permit.ai.no": "Я сам сделаю",
    "permit.req.inProgress": "Lopez работает над этим.",
    "permit.next.eyebrow": "Что дальше",
    "permit.next.title": "Инспекции после одобрения",
    "permit.next.hint":
      "Burnaby присылает человека для проверки работ. Я проведу вас через каждую.",
    "permit.insp.notYet": "Ещё нет",
    "permit.callout.title": "Burnaby оставил один комментарий по этому разрешению",
    "permit.callout.body":
      "Им нужен чертёж сечения перемычки новой стены. Я набросал письмо вашему инженеру.",
    "permit.callout.cta": "Посмотреть черновик",
    "permit.foot.question": "Есть вопрос по этому поводу?",
    "permit.foot.ask": "Спросить ИИ",
    "permit.foot.next": "Далее: {name}",

    // ---- Ask page chrome ----
    "ask.back": "Назад к вашему ремонту",
    "ask.knows": "ИИ знает ваш проект",
    "ask.placeholder": "Спросите что угодно о вашем ремонте…",
    "ask.send": "Отправить",
    "ask.tryAsking": "Попробуйте спросить",
  },
  de: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "Baugenehmigung",
    "data.permit.building.blurb":
      "Die baulichen Änderungen — das Entfernen der Wand zwischen Küche und Esszimmer gilt als baulich, daher muss Burnaby zustimmen.",
    "data.permit.electrical.name": "Elektrogenehmigung",
    "data.permit.electrical.blurb":
      "Neue Stromkreise für die Steckdosen der Kücheninsel, den Herd und die Einbauleuchten. Beantragt von Ihrem Elektriker unter dem Dach von Lopez Construction.",
    "data.permit.plumbing.name": "Sanitärgenehmigung",
    "data.permit.plumbing.blurb": "Verlegen der Spüle und der Geschirrspülerleitung.",
    "data.permit.mechanical.name": "Genehmigung für Haustechnik",
    "data.permit.mechanical.blurb":
      "Die neue Dunstabzugshauben-Entlüftung durch die Außenwand. Erforderlich, weil sie die Gebäudehülle verändert.",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "Lageplan",
    "data.permit.building.req.site-plan.helper":
      "Eine Zeichnung, die Ihr Grundstück und die Lage des Hauses zeigt.",
    "data.permit.building.req.floor-plan.label": "Grundriss (vorhanden + geplant)",
    "data.permit.building.req.floor-plan.helper":
      "Zwei Zeichnungen: wie die Küche heute ist und wie sie danach aussehen wird.",
    "data.permit.building.req.structural-letter.label": "Schreiben des Statikers",
    "data.permit.building.req.structural-letter.helper":
      "Weil Sie eine Wand entfernen. Der Statiker bescheinigt, dass es sicher ist.",
    "data.permit.building.req.contractor-license.label": "Nachweis der Bauunternehmer-Lizenz",
    "data.permit.building.req.contractor-license.helper":
      "Die BC-Gewerbelizenz von Lopez Construction, derzeit aktiv.",
    "data.permit.building.req.energy-form.label": "Energy-Step-Code-Konformität (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "BC verlangt dies für jeden Raum mit neuer Beleuchtung, Dämmung oder neuen Fenstern.",
    "data.permit.electrical.req.load-calc.label": "Lastberechnung",
    "data.permit.electrical.req.load-calc.helper":
      "Zeigt, dass Ihr Schaltschrank die neuen Stromkreise bewältigen kann.",
    "data.permit.electrical.req.one-line.label": "Einlinienschema",
    "data.permit.electrical.req.one-line.helper":
      "Ein einfacher Verdrahtungsplan. Ihr Elektriker zeichnet ihn.",
    "data.permit.plumbing.req.fixture-count.label": "Formular zur Zählung der Sanitärobjekte",
    "data.permit.plumbing.req.fixture-count.helper":
      "Nur eine Zählung von Spülen, Geschirrspülern usw. Schnelles Formular.",
    "data.permit.mechanical.req.vent-spec.label": "Lüftungsspezifikation",
    "data.permit.mechanical.req.vent-spec.helper": "Welche Haube + wie sie nach außen entlüftet.",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "Rohbau-Rahmenwerk",
    "data.permit.building.insp.rough-frame.check":
      "Nachdem die Wand entfernt und das neue Rahmenwerk steht — vor dem Trockenbau.",
    "data.permit.building.insp.final.name": "Schlussabnahme",
    "data.permit.building.insp.final.check":
      "Alles fertig: Oberflächen, Einrichtungen, alles. Die endgültige Freigabe.",
    "data.permit.electrical.insp.elec-rough.name": "Elektro-Rohinstallation",
    "data.permit.electrical.insp.elec-rough.check": "Verkabelung in den Wänden, bevor sie geschlossen werden.",
    "data.permit.electrical.insp.elec-final.name": "Elektro-Endabnahme",
    "data.permit.electrical.insp.elec-final.check":
      "Steckdosen, Schalter und Leuchten funktionieren alle.",

    // ---- Shared status data ----
    "data.status.not_started.label": "Nicht begonnen",
    "data.status.not_started.blurb": "Wurde noch nicht begonnen",
    "data.status.preparing.label": "Wird vorbereitet",
    "data.status.preparing.blurb": "Lopez stellt die Unterlagen zusammen",
    "data.status.submitted.label": "Eingereicht",
    "data.status.submitted.blurb": "Burnaby hat den Antrag",
    "data.status.in_review.label": "Burnaby prüft",
    "data.status.in_review.blurb": "Burnaby liest Ihre Pläne durch",
    "data.status.needs_info.label": "Ihre Rückmeldung nötig",
    "data.status.needs_info.blurb": "Burnaby braucht etwas von Ihnen",
    "data.status.approved.label": "Genehmigt",
    "data.status.approved.blurb": "Freigegeben, um mit der Arbeit zu beginnen",
    "data.status.inspections.label": "Abnahmen",
    "data.status.inspections.blurb": "Prüfer kontrollieren die Arbeit",
    "data.status.closed.label": "Fertig",
    "data.status.closed.blurb": "Abgeschlossen und abgelegt",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "Ich kann das anhand Ihrer Pläne ausfüllen. Dauert etwa 2 Minuten.",
    "data.permit.plumbing.req.fixture-count.ai":
      "Ich kann das ausfüllen — nur eine neue Spüle, ein Geschirrspüler.",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "Warum brauche ich eine Genehmigung, um in meinem eigenen Haus eine Wand zu entfernen? Sie ist nicht einmal tragend.",
    "data.chat.m2":
      "Burnaby verlangt jedes Mal eine Genehmigung, wenn Sie den Grundriss eines Raums ändern — auch bei nicht tragenden Wänden. Es geht um zwei Dinge: (1) sicherzustellen, dass keine Elektrik oder Sanitärleitungen in der Wand verborgen sind, und (2) die Versicherung und den Wiederverkauf Ihres Hauses sauber zu halten. Wenn ein künftiger Käufer eine ungenehmigte Änderung entdeckt, kann das einen Verkauf verzögern.\n\nDie gute Nachricht: Das ist eine kleine Genehmigung, und Ihre wird bereits geprüft.",
    "data.chat.m2.ref.building": "Ihre Baugenehmigung",
    "data.chat.m2.followup.1": "Wie lange dauert die Prüfung?",
    "data.chat.m2.followup.2": "Was passiert, wenn sie Änderungen verlangen?",
    "data.chat.m2.followup.3": "Kann ich vor der Genehmigung mit dem Abriss beginnen?",
    "data.chat.m3": "Kann ich vor der Genehmigung mit dem Abriss beginnen?",
    "data.chat.m4":
      "Kurze Antwort: nein, die Wand nicht. Burnabys Richtlinie besagt, dass keine Arbeit, die von einer in Prüfung befindlichen Genehmigung abgedeckt ist, beginnen darf, bevor die Genehmigung erteilt wurde. Wenn ein Prüfer vorbeifährt und die entfernte Wand sieht, kann er die Baustelle mit einem roten Anhänger versehen, was bedeutet, dass alles gestoppt wird.\n\nWas Sie *beginnen* können: Schränke abbauen, Geräte abklemmen und Bodenschutz — nichts davon braucht eine Genehmigung. Ich würde mit der Wand und der Elektrik warten, bis Sie genehmigt sind (etwa 9 weitere Tage nach Burnabys aktueller Warteschlange).",
    "data.chat.m4.followup.1": "Was bedeutet „roter Anhänger“?",
    "data.chat.m4.followup.2": "Lopez eine E-Mail schreiben, um den Zeitplan zu bestätigen",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "Gute Frage. Nach allem, was ich über Ihre Genehmigung weiß, ist Folgendes wahrscheinlich: Burnabys Prüfungswarteschlange bewegt sich in der Regel dienstags und donnerstags. Wenn sie Änderungen verlangen wollen, hören Sie das normalerweise in der ersten Woche. Bisher ist es bei Ihnen ruhig geblieben — das ist ein gutes Zeichen.",
    "data.chat.fallback.followup.1": "Wie sieht ein typischer Prüfungskommentar aus?",
    "data.chat.fallback.followup.2": "Sollte ich mir Sorgen machen?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "Wie lange dauert es noch, bis meine Genehmigung erteilt wird?",
    "data.prompt.2": "Was muss ich während der Abnahme tun?",
    "data.prompt.3": "Erklären Sie mir, was als Nächstes passiert",
    "data.prompt.4": "Hat Lopez alles geschickt, was vorgesehen war?",

    // ---- Permit-detail page chrome ----
    "permit.back": "Zurück zu Ihrer Renovierung",
    "permit.eyebrow": "Genehmigung",
    "permit.stat.where": "Wo es gerade steht",
    "permit.stat.pulledBy": "Beantragt von",
    "permit.stat.fee": "Gebühr der Stadt",
    "permit.stat.filed": "Eingereicht am {date}",
    "permit.queue.lead": "Burnabys Bau-Warteschlange beträgt etwa",
    "permit.queue.days": "{n} Werktage",
    "permit.queue.tail": "im Moment. Ich melde mich, sobald sich etwas bewegt.",
    "permit.needs.eyebrow": "Was es braucht",
    "permit.needs.title": "Dokumente",
    "permit.needs.count": "· {done} von {total} erledigt",
    "permit.ai.yes": "Ja, fülle es aus",
    "permit.ai.no": "Ich mache es selbst",
    "permit.req.inProgress": "Lopez arbeitet daran.",
    "permit.next.eyebrow": "Was als Nächstes kommt",
    "permit.next.title": "Abnahmen nach der Genehmigung",
    "permit.next.hint":
      "Burnaby schickt jemanden vorbei, um die Arbeit zu überprüfen. Ich führe Sie durch jede einzelne.",
    "permit.insp.notYet": "Noch nicht",
    "permit.callout.title": "Burnaby hat einen Kommentar zu dieser Genehmigung hinterlassen",
    "permit.callout.body":
      "Sie wollen eine Schnittzeichnung des neuen Wandsturzes. Ich habe eine E-Mail an Ihren Statiker entworfen.",
    "permit.callout.cta": "Entwurf ansehen",
    "permit.foot.question": "Haben Sie dazu eine Frage?",
    "permit.foot.ask": "KI fragen",
    "permit.foot.next": "Weiter: {name}",

    // ---- Ask page chrome ----
    "ask.back": "Zurück zu Ihrer Renovierung",
    "ask.knows": "Die KI kennt Ihr Projekt",
    "ask.placeholder": "Fragen Sie alles über Ihre Renovierung…",
    "ask.send": "Senden",
    "ask.tryAsking": "Versuchen Sie zu fragen",
  },
  ko: {
    // ---- Shared permit data: names + blurbs ----
    "data.permit.building.name": "건축 허가",
    "data.permit.building.blurb":
      "구조 변경 — 주방과 식당 사이의 벽을 허무는 것은 구조 작업으로 간주되므로 Burnaby의 승인이 필요합니다.",
    "data.permit.electrical.name": "전기 허가",
    "data.permit.electrical.blurb":
      "아일랜드 콘센트, 레인지, 매입 조명을 위한 새 회로. 귀하의 전기 기사가 Lopez Construction 명의로 신청합니다.",
    "data.permit.plumbing.name": "배관 허가",
    "data.permit.plumbing.blurb": "싱크대와 식기세척기 배관을 옮기는 작업.",
    "data.permit.mechanical.name": "기계 허가",
    "data.permit.mechanical.blurb":
      "외벽을 통과하는 새 레인지 후드 배기구. 건물 외피를 변경하기 때문에 필요합니다.",

    // ---- Shared permit data: requirements ----
    "data.permit.building.req.site-plan.label": "부지 배치도",
    "data.permit.building.req.site-plan.helper": "대지와 집의 위치를 보여주는 도면.",
    "data.permit.building.req.floor-plan.label": "평면도 (기존 + 제안)",
    "data.permit.building.req.floor-plan.helper":
      "도면 두 장: 지금의 주방 모습과 작업 후의 모습.",
    "data.permit.building.req.structural-letter.label": "구조 기술사 확인서",
    "data.permit.building.req.structural-letter.helper":
      "벽을 허물기 때문입니다. 기술사가 안전하다는 것을 증명합니다.",
    "data.permit.building.req.contractor-license.label": "시공사 면허 증빙",
    "data.permit.building.req.contractor-license.helper":
      "Lopez Construction의 BC 사업자 면허, 현재 유효함.",
    "data.permit.building.req.energy-form.label": "Energy Step Code 준수 (BCBC §9.36)",
    "data.permit.building.req.energy-form.helper":
      "BC는 새 조명, 단열, 창문이 있는 모든 방에 대해 이를 요구합니다.",
    "data.permit.electrical.req.load-calc.label": "부하 계산",
    "data.permit.electrical.req.load-calc.helper": "분전반이 새 회로를 감당할 수 있음을 보여줍니다.",
    "data.permit.electrical.req.one-line.label": "단선 결선도",
    "data.permit.electrical.req.one-line.helper": "간단한 배선도. 귀하의 전기 기사가 그립니다.",
    "data.permit.plumbing.req.fixture-count.label": "설비 수량 양식",
    "data.permit.plumbing.req.fixture-count.helper":
      "싱크대, 식기세척기 등의 수량만 세면 됩니다. 빠른 양식.",
    "data.permit.mechanical.req.vent-spec.label": "배기 사양",
    "data.permit.mechanical.req.vent-spec.helper": "어떤 후드 + 어떻게 외부로 배기하는지.",

    // ---- Shared permit data: inspections ----
    "data.permit.building.insp.rough-frame.name": "골조 검사",
    "data.permit.building.insp.rough-frame.check":
      "벽을 허물고 새 골조를 세운 후 — 석고보드 전에.",
    "data.permit.building.insp.final.name": "최종 검사",
    "data.permit.building.insp.final.check":
      "모든 것이 완료됨: 마감, 설비, 전부. 최종 승인.",
    "data.permit.electrical.insp.elec-rough.name": "전기 초벌 배선",
    "data.permit.electrical.insp.elec-rough.check": "벽을 막기 전 벽 안의 배선.",
    "data.permit.electrical.insp.elec-final.name": "전기 최종 검사",
    "data.permit.electrical.insp.elec-final.check": "콘센트, 스위치, 설비가 모두 작동함.",

    // ---- Shared status data ----
    "data.status.not_started.label": "시작 안 함",
    "data.status.not_started.blurb": "아직 시작하지 않음",
    "data.status.preparing.label": "준비 중",
    "data.status.preparing.blurb": "Lopez가 서류를 준비하고 있습니다",
    "data.status.submitted.label": "제출됨",
    "data.status.submitted.blurb": "Burnaby가 신청서를 받았습니다",
    "data.status.in_review.label": "Burnaby 검토 중",
    "data.status.in_review.blurb": "Burnaby가 귀하의 계획을 살펴보고 있습니다",
    "data.status.needs_info.label": "귀하의 답변 필요",
    "data.status.needs_info.blurb": "Burnaby가 귀하에게 필요한 것이 있습니다",
    "data.status.approved.label": "승인됨",
    "data.status.approved.blurb": "작업 시작 허가됨",
    "data.status.inspections.label": "검사",
    "data.status.inspections.blurb": "검사관이 작업을 점검하고 있습니다",
    "data.status.closed.label": "완료",
    "data.status.closed.blurb": "완료 및 보관됨",

    // ---- Per-permit AI-assist lines (requirement.aiAssist) ----
    "data.permit.building.req.energy-form.ai":
      "귀하의 계획을 바탕으로 제가 작성해 드릴 수 있습니다. 약 2분 걸립니다.",
    "data.permit.plumbing.req.fixture-count.ai":
      "제가 작성해 드릴 수 있습니다 — 새 싱크대 하나, 식기세척기 하나뿐입니다.",

    // ---- Shared chat transcript ----
    "data.chat.m1":
      "왜 내 집의 벽 하나 허무는 데 허가가 필요한가요? 심지어 내력벽도 아닌데요.",
    "data.chat.m2":
      "Burnaby는 방의 구획을 바꿀 때마다 허가를 요구합니다 — 내력벽이 아닌 경우에도요. 두 가지 이유 때문입니다: (1) 벽 안에 전기나 배관이 숨겨져 있지 않은지 확인하고, (2) 주택의 보험과 재판매를 깔끔하게 유지하기 위해서입니다. 미래의 구매자가 허가받지 않은 변경을 발견하면 매매가 지연될 수 있습니다.\n\n좋은 소식은: 이건 작은 허가이고, 귀하의 것은 이미 검토 중입니다.",
    "data.chat.m2.ref.building": "귀하의 건축 허가",
    "data.chat.m2.followup.1": "검토는 얼마나 걸리나요?",
    "data.chat.m2.followup.2": "변경을 요구하면 어떻게 되나요?",
    "data.chat.m2.followup.3": "승인 전에 철거를 시작해도 되나요?",
    "data.chat.m3": "승인 전에 철거를 시작해도 되나요?",
    "data.chat.m4":
      "짧게 답하면: 안 됩니다, 벽은요. Burnaby의 정책은 검토 중인 허가가 포함하는 어떤 작업도 허가가 발급되기 전까지는 시작할 수 없다는 것입니다. 검사관이 지나가다 벽이 허물어진 것을 보면 현장에 레드 태그를 붙일 수 있는데, 이는 모든 것이 멈춘다는 뜻입니다.\n\n*시작할 수 있는* 것: 캐비닛 철거, 가전 분리, 바닥 보호 — 이 중 어느 것도 허가가 필요 없습니다. 승인이 날 때까지 벽과 전기는 미루시길 권합니다 (Burnaby의 현재 대기열 기준 약 9일 더).",
    "data.chat.m4.followup.1": "레드 태그가 무슨 뜻인가요?",
    "data.chat.m4.followup.2": "일정 확인을 위해 Lopez에게 이메일 보내기",

    // ---- Scripted assistant fallback reply (typed questions) ----
    "data.chat.fallback":
      "좋은 질문입니다. 귀하의 허가에 대해 제가 아는 바로는 다음이 가장 가능성이 높습니다: Burnaby의 검토 대기열은 보통 화요일과 목요일에 움직입니다. 변경을 요구할 경우 보통 첫 주 안에 연락을 받습니다. 지금까지 귀하의 것은 조용했습니다 — 좋은 신호입니다.",
    "data.chat.fallback.followup.1": "일반적인 검토 의견은 어떤 모습인가요?",
    "data.chat.fallback.followup.2": "걱정해야 하나요?",

    // ---- Shared suggested prompts ----
    "data.prompt.1": "제 허가가 승인되기까지 얼마나 걸리나요?",
    "data.prompt.2": "검사 중에 저는 무엇을 해야 하나요?",
    "data.prompt.3": "다음에 무슨 일이 일어나는지 설명해 주세요",
    "data.prompt.4": "Lopez가 보내야 할 것을 다 보냈나요?",

    // ---- Permit-detail page chrome ----
    "permit.back": "리노베이션으로 돌아가기",
    "permit.eyebrow": "허가",
    "permit.stat.where": "현재 진행 상황",
    "permit.stat.pulledBy": "신청자",
    "permit.stat.fee": "시 수수료",
    "permit.stat.filed": "{date} 제출",
    "permit.queue.lead": "Burnaby의 건축 대기열은 현재 약",
    "permit.queue.days": "영업일 {n}일",
    "permit.queue.tail": "입니다. 진전이 있는 즉시 알려드리겠습니다.",
    "permit.needs.eyebrow": "필요한 것",
    "permit.needs.title": "문서",
    "permit.needs.count": "· {total}개 중 {done}개 완료",
    "permit.ai.yes": "네, 작성해 주세요",
    "permit.ai.no": "제가 할게요",
    "permit.req.inProgress": "Lopez가 작업 중입니다.",
    "permit.next.eyebrow": "다음 단계",
    "permit.next.title": "승인 후 검사",
    "permit.next.hint":
      "Burnaby가 작업을 확인하러 사람을 보냅니다. 제가 각 단계를 안내해 드리겠습니다.",
    "permit.insp.notYet": "아직",
    "permit.callout.title": "Burnaby가 이 허가에 의견을 하나 남겼습니다",
    "permit.callout.body":
      "새 벽 헤더의 단면도를 원합니다. 귀하의 기술사에게 보낼 이메일 초안을 작성했습니다.",
    "permit.callout.cta": "초안 보기",
    "permit.foot.question": "이에 대해 궁금한 점이 있나요?",
    "permit.foot.ask": "AI에게 묻기",
    "permit.foot.next": "다음: {name}",

    // ---- Ask page chrome ----
    "ask.back": "리노베이션으로 돌아가기",
    "ask.knows": "AI가 귀하의 프로젝트를 알고 있습니다",
    "ask.placeholder": "리노베이션에 대해 무엇이든 물어보세요…",
    "ask.send": "보내기",
    "ask.tryAsking": "이렇게 물어보세요",
  },
}
