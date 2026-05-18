# Sleuth CTO/CEO Round — Prep Doc

Next round after May 11 (Namartha). It's the **CTO or CEO**, then possibly an engineer. Toptal contract **Product Designer** role (IC), replacing the current designer, AI biopharma competitive-intelligence platform with a knowledge-graph backend.

---

## What they're evaluating (different lens than the PM)

| Interviewer | Cares most about |
|---|---|
| **CEO** | Vision fit, the self-serve-vs-concierge bet, biopharma market sense, design as the trust moat, can you *own* it strategically as the only designer |
| **CTO** | Real AI fluency (not buzzword — they fired the last designer over this), designing within data/technical constraints, knowledge-graph exposure, engineer hand-off, startup speed |
| **Both** | The skeptical-expert trust problem (their core UX risk), AI-native workflow, can you replace the designer cleanly and fast |

Speak vision + technical-judgment language. This is not a craft round.

---

## The recurring fix (carry from `sleuth-interview-analysis.md`)

Every answer below: **headline sentence first → ≤3 beats → stop.** No "it depends." No volunteered weakness. Portfolio = decisions, not screens. Position explicitly against the bar the old designer missed.

---

## Questions to expect — with a solid answer each

### 1. "Walk us through your background." (lighter — they have Namartha's notes)
> "Fifteen years, almost all early-stage data and AI startups. The one that maps directly to Sleuth is Acies.ai — I was founding designer on a BI platform for payments, huge datasets, predictive AI, and the real problem was getting skeptical analysts to trust what the model produced. That's your problem. More recently I set AI direction and rebuilt the design system at Sprig, an AI-native research product. And I personally run sixteen AI agents with my own observability layer — AI-centric is how I already work, not a skill I'm adding."

### 2. "What does AI-centric design mean to you?" (THE Sleuth question)
> "Two halves. In the product: AI-native patterns — streaming, source attribution, reversible state, progressive disclosure of reasoning — instead of a database UI with a chat box bolted on. In my workflow: AI-forward tools by default — Claude wired into Figma for design-system and token work, agents for research synthesis, prototyping with AI in the loop. You told Namartha the gap with the current designer is exactly this. It's my edge: data-heavy depth *plus* modern AI fluency, and I live in the tooling, I don't observe it."

### 3. "Our users are skeptical expert analysts who must trust the output. Have you designed for that?" (best card)
> "Directly, at Acies.ai and Sprig. The pattern isn't 'make the AI look smarter,' it's making it legible and reversible. Four moves: every output traces to its source on click; reasoning shown step-by-step, not just the answer; the user can revert to a prior state; and the deep thinking is surfaced on demand, not dumped by default. Expert users don't want less AI — they want to audit it on their terms. For Sleuth the knowledge graph is the unlock: 'this insight came from these nodes' is a trust primitive almost no AI tool can offer. I'd lean on that hard."

### 4. "Walk through a data-heavy AI product." (Acies.ai — your mirror)
> "Acies.ai, founding designer, BI for payments. Three beats. One: real research — read the domain, mined G2 and forums for competitor pain, ran RFM analysis on the data myself. Two: I brought twenty possible features and with the CEO we cut to three — that cut is the work, not the twenty. Three: the first report builder was constrained by what engineering could ship, then over a few iterations became a flexible slice-and-dice tool. The hard part was never the dashboard — it was a skeptical analyst trusting a prediction. Same as Sleuth."

### 5. "How do you work with engineers / handle technical constraints?" (CTO)
> "I design within the constraint, not around it. At Acies.ai the first report builder was literally 'what can engineering ship this iteration' — I designed to that honestly, shipped, then we expanded it to flexible over a few cycles. I work live with strong engineers — screen-share, change it together — and write detailed specs for outsourced or non-native-English teams. I adapt the ceremony; the spine is: get engineers in before pixels are frozen so the constraint shapes the design instead of breaking it later."

### 6. "How do you incorporate feedback / metrics and rethink something?"
> "Sprig example: we shipped AI survey-creation, watched usage, ran interviews — people didn't trust the AI output enough to ship it as-is. We changed the model from 'AI generates, you accept' to 'AI drafts, you see why, you edit, it learns.' Reframing the human from approver to editor was the fix. The principle: when adoption stalls on an AI feature, it's almost always a trust problem wearing a usability mask."

### 7. "Where do you get involved / your process?" (kill 'it depends')
> "Default: I get in at the problem, before requirements freeze — that's where design changes the outcome instead of decorating it. Three beats: clarify the business and user picture, pressure-test scope, prototype and iterate live with engineers. On a fast team I compress the front, never the iteration. Six-person pod or solo-with-the-CTO — I adapt the ceremony, not the spine."

### 8. "First 30/60/90 days?"
> "30: use the product hard, find where trust breaks for a skeptical analyst, deep-dive the knowledge graph with the CTO, talk to real users. 60: ship one visible trust fix end-to-end so the team sees the bar, not just hears it. 90: systematize — the AI-pattern library and the design system the product needs to move fast without drifting. The plan is a hypothesis; the first 30 days rewrite it."

### 9. "Why Sleuth / why this role?"
> "Two specific reasons. One: data-heavy, AI-native, trust-critical, fast is the exact intersection I've worked in for fifteen years — Acies.ai and Sprig were rehearsals. Two: the knowledge-graph foundation makes trust *solvable*, not just patchable — most AI tools can't show their work; you can. That's the design problem I want."

### 10. "What would you change about the current product?" (have a real, careful answer)
> "I'd need to use it hard first, so this is a hypothesis, not a verdict: the highest-leverage area is almost always the moment a skeptical analyst decides whether to trust an insight enough to put it in front of their leadership. I'd want to see how visible the knowledge-graph provenance is at that moment, because that's where adoption is won or lost in tools like this. If it's buried, surfacing it is the single biggest unlock."

---

## Likely mini-exercise

CTO/CEO may ask "how would you approach designing [X]" — most likely **knowledge-graph exploration** or **insight → presentation handoff**. Structure:
1. Clarify: self-serve user or concierge-team user? near-term goal — trust or speed?
2. User: skeptical BD/S&E analyst, expert, time-poor, judged on the quality of decisions they brief upward.
3. Trust primitives first: provenance on every node/insight, reasoning trail, reversible exploration.
4. One flow: question → graph-grounded answer with sources inline → refine → bake into a presentation artifact.
5. Metric: % insights exported into a deliverable; trust proxy = source-click rate, revert rate.
6. Name a tradeoff: more provenance = more trust but more clutter; default-clean, audit-on-demand.
7. "Want me to go deeper on the flow or the trust model?"

---

## Questions YOU ask (round 1 yours were thin — fix this)

- "90 days in, what makes replacing the designer clearly the right call?"
- "How exposed is the knowledge graph in the UI today vs. how far you *want* it exposed?"
- "Long-term — is self-serve the bet, or is the concierge motion the moat?"
- "Riskiest assumption in the product right now that design could de-risk?"
- "Most recent thing you shipped that you'd now redo, and why?"

Ask the same of CTO and CEO; mismatched answers reveal the real risk.

---

## Pre-round cleanups

- **Use the product before the call.** You critiqued nothing specific in round 1. Walk in with one concrete, careful observation about where trust breaks.
- **Lead with Acies.ai**, not a chronological sweep. It's the mirror.
- **Reframe the Sprig story** as a strength (the approver→editor trust reframe), never "I was behind on AI."
- **Record one practice answer.** You'll hear the rambling immediately.

Sources: May 11 transcript; `sleuth-interview-analysis.md`; `nicks-bio`.
