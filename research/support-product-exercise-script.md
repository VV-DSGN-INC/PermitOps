# The Support-Product Exercise — Full Rehearsable Script

The prompt you'll almost certainly get in the product round, in some form:
> "We're building an AI-native tool that helps human customer-support agents be more efficient — handle 8–10 conversations at once, learn their style, use their knowledge base, with translation and ticketing built in. It competes with Zendesk and Intercom. How would you approach designing this?"

This is a **thinking exercise in a product conversation**, not a whiteboard. They're testing process, product sense, and whether you speak their language — not pixels. Both interviewers are non-designers (Director of Product ex-PM + a PM). Speak product/business, not craft.

---

## Delivery rules (read first)

1. **Don't monologue.** Round 1 you rambled. Do the **90-second spine** first, then say *"I can go deeper on any of these — where do you want me to start?"* Let them pull. This is itself a signal of seniority.
2. **Ask before you answer.** The book-05 evaluation checklist scores "asks clarifying questions" and "makes assumptions explicit." Open with 2 questions, then state assumptions.
3. **Name the B2B2C triangle out loud.** It's the classic trap and naming it instantly reads as senior.
4. **End on the business**, not the design. Tie back to why this beats Zendesk/Intercom.

---

## STEP 0 — The opening move (20 seconds)

> "Before I dive in — two quick questions. One: who's the primary user we're optimizing for first — the support agent doing the work, the support *manager* watching the queue, or the admin who sets it up? Two: is the near-term goal agent throughput, resolution quality, or onboarding new agents faster? I'll make assumptions if you'd rather I just run with it."

If they say "just run with it," say:
> "Then I'll assume the primary user is the front-line support agent, the near-term goal is throughput without quality loss, and the buyer is the B2B company's support leadership. Let me build from there."

*Why this works:* it satisfies the checklist, frames you as someone who scopes before solving, and the assumptions you pick are the defensible ones.

---

## STEP 1 — WHY (the business frame — 25 seconds)

Speak their language here. This is the company-first move.

> "The strategic 'why': Botpress already wins on customer-support use cases — that's where most of your customers already are. Full-auto agents lack human judgment; pure-human support doesn't scale. The valuable middle is a tool that makes one human agent as effective as five without the customer feeling the difference. Designing that middle well is how you defend the support segment against Zendesk and Intercom and expand it — they bolted AI onto a ticketing system, so there's friction at the seam. An AI-native tool has no seam. The design *is* the moat."

*That last line is the one to land.* It tells a PM you understand the product is the strategy.

---

## STEP 2 — WHO (name the triangle — 20 seconds)

> "There are three audiences and they're easy to conflate. The **buyer** is the B2B company's support leadership — they care about cost-per-ticket and CSAT. The **user** is the human support agent — they care about not drowning. The **end-customer** is the B2C person being supported — they care about a fast, correct, human-feeling answer. I'd design for the support agent first, because if the agent's experience is good, the buyer's metrics and the end-customer's experience both follow. Designing for the buyer's dashboard first is the trap — it optimizes the thing that's easy to measure, not the thing that drives it."

---

## STEP 3 — WHEN/WHERE (the core constraint — 20 seconds)

> "The defining context: an agent juggling 8–10 live conversations, judged on speed *and* quality, under constant context-switching. That's the central design problem — not the AI. The AI is the easy part. The hard part is attention management across ten threads without dropping one or sending the right answer to the wrong customer. Everything I'd design serves that."

---

## STEP 4 — WHAT (the five hard problems — 60 seconds, the meat)

> "I see five hard design problems, roughly in priority order:
>
> **One — triage and attention.** Across 8–10 threads, which one needs me *now*? I'd design a priority queue that surfaces the conversation at risk — angry sentiment, SLA about to breach, customer waiting longest — not just newest-first. Get this wrong and nothing else matters.
>
> **Two — AI draft vs. the agent's voice.** It learns their style, so the draft should feel like *them*. The interaction has to be: draft appears, accept is one keystroke, edit is frictionless, and it **never auto-sends**. The moment the agent feels the AI is putting words in their mouth, they stop trusting it and the product is dead.
>
> **Three — trust calibration.** The agent has two seconds to decide if a draft is safe to send. So the draft has to show its grounding inline — 'this answer is based on *this* knowledge-base article' — not a confidence score, a *source*. Source beats confidence every time.
>
> **Four — the handoff seam.** When does AI draft vs. the agent take over vs. escalate to a senior? That boundary is a design decision, not a model decision, and it's where Zendesk's bolted-on AI feels broken.
>
> **Five — the monitoring layer.** Leadership wants to 'see what's working.' That's a coaching surface, not a surveillance one — if agents feel watched, they'll fight the tool. I'd design it as 'here's where the AI helped you resolve faster,' framed for the agent first, leadership second."

---

## STEP 5 — PRIORITIZE (lean-startup judgment — 15 seconds)

> "If I'm shipping an MVP with a 3-person design team into a fast release: problems one and two are the product. Triage plus the draft-accept-edit loop. Three, four, and five are fast-follows. I'd resist building the leadership dashboard first even though it's the easiest to demo — it's not what makes the agent faster, and the agent is who the buyer is actually paying for."

---

## STEP 6 — SOLVE (one flow, described verbally — 30 seconds)

Don't try to describe a whole UI. Describe the one flow that matters.

> "The core flow I'd prototype first: agent lands in a single console. Left rail is the priority queue — sorted by risk, not recency, with a one-glance signal for why each is surfaced. Center is the active conversation. Below the reply box, the AI draft is pre-composed in the agent's voice, with the source it's grounded in shown as a chip. Tab to accept, type to override, the draft adapts as they type. Switching threads preserves a two-line 'where this was' summary so re-entry costs nothing. That re-entry cost across ten threads is the entire ballgame — I'd design that first and test it before anything else."

---

## STEP 7 — HOW (metrics — business first — 15 seconds)

> "Success metrics, in order: agent handle-time and first-response time, CSAT held flat or up while throughput rises, percentage of AI drafts accepted vs. edited vs. discarded — that ratio is the health metric for the whole product — and ramp time for a new agent. The discard rate is my early-warning signal: if it climbs, trust is breaking."

---

## STEP 8 — PROS/CONS + VALIDATION (the senior close — 20 seconds)

Always name a tradeoff. Always propose a test before build.

> "The honest tension: the more we automate the draft, the faster the agent goes — and the higher the risk they rubber-stamp a confidently-wrong answer to a real customer. That's a design problem, not just a model problem, and I'd treat it as the central risk. Before we build, I'd validate the riskiest assumption — that agents will trust and adopt drafts under time pressure rather than ignore them — with a prototype test on real support agents in a week. If they don't adopt it under pressure, the whole concept needs rethinking, and better to know that before engineering builds it."

---

## The 90-second spine (memorize THIS — use when time is short)

> "Botpress already wins on support; the valuable middle is making one human agent as effective as five — that's how you beat Zendesk and Intercom, because their AI is bolted onto ticketing and yours has no seam. Three audiences: buyer is support leadership, user is the agent, end-customer is the B2C person — I design for the agent first because the other two follow. The core constraint isn't the AI, it's attention across 8–10 live threads. The five hard problems: triage by risk not recency; an AI draft in the agent's voice that's one keystroke to accept and never auto-sends; trust via inline source not confidence scores; the AI-to-human handoff seam; and a monitoring layer that coaches rather than surveils. MVP is triage plus the draft loop — everything else is fast-follow. Success is handle-time down with CSAT flat or up, and I'd watch the draft-discard rate as the trust early-warning. Before building I'd prototype-test whether agents actually adopt drafts under pressure — that's the riskiest assumption. Want me to go deeper anywhere?"

That's the whole exercise in 90 seconds. Deliver it, stop, let them pull.

---

## If they push back (the "one pushback" test)

Book-05 says interviewers deliberately push once to see if you defend or adapt. Likely pushbacks + your move:

- **"Why design for the agent first, not the buyer who pays?"**
  > "Fair challenge. The buyer pays, but they're buying an outcome — lower cost per ticket at held CSAT. That outcome is *produced* by the agent's experience. Optimize the buyer's dashboard first and you get a great demo and a tool agents route around. I'd show the buyer ROI through agent metrics, not a separate surveillance layer." *(Adapt, don't re-argue.)*

- **"Zendesk has way more resources. Why do we win?"**
  > "Exactly because they have an installed base on an older architecture — their AI has to respect the ticketing system it's bolted to. You're not carrying that. The win isn't more features, it's the absence of the seam. That's a design-led advantage, which is rare and worth protecting."

- **"That sounds like a lot for a 3-person team."**
  > "Agreed — that's why I scoped the MVP to two problems, triage and the draft loop, and pushed the rest to fast-follow. On a lean team the design leader's main job is saying no to the demo-friendly work that doesn't move the agent's speed. I'd hold that line."

- **"How is this different from Intercom Fin / Copilot?"**
  > "Honest answer: I'd want to study their latest closely before claiming differentiation — I'd never wing that. Directionally, the wedge is AI-native from the ground up versus AI-as-layer, and the design expression of that is the absence of mode-switching between 'the AI part' and 'the human part.' One surface, not two." *(Models intellectual honesty — high-scoring.)*

---

## What this exercise is really testing

Per the book-05 evaluation checklist, working this structure satisfies it by construction: you asked questions, made assumptions explicit, followed a process instead of jumping to UI, connected to company mission, defined the audience and the B2B2C nuance, justified what to build first, named strong AND weak sides, explored beyond the obvious (the coaching-not-surveillance insight), and defined success metrics. You don't have to perform seniority — the structure demonstrates it.

The single highest-leverage rehearsal: say the **90-second spine** out loud, timed, five times, until it's natural. Then practice getting pushed and adapting without defensiveness.

Sources: May 12 transcript; `interviews-and-exercises` (book-05 5W1H/7-step); `design-master-bot-analysis.md`; `round2-product-call-prep.md`.
