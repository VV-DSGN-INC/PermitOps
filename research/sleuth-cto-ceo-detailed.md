# Sleuth CTO/CEO Round — Detailed Q&A (Multiple Example Answers)

For each likely question: what they're testing → why it matters at Sleuth → the trap → **2–3 example answers** (different angles/lengths) → follow-up handling → delivery note. Pick the version that fits the room; don't memorize verbatim — internalize the structure and the landing line.

Voice rules throughout: headline sentence first, ≤3 beats, then stop. Real project names. No invented metrics. Never volunteer a weakness.

---

## Q1. "Tell us about yourself / your background."

**Testing:** Can you self-edit? Do you know which of your 15 years is relevant to *them*?
**Why it matters at Sleuth:** They're AI-first, data-heavy, trust-critical. They don't want a career history; they want the one thread that maps to their problem.
**The trap (round 1):** You sprayed — "15 years… 5 full-time… 5 co-founder… 5 Toptal, 22 projects" then blurred three projects. The interviewer had to assemble your story for you.

**Example A — tight (≈35 sec):**
> "Fifteen years, almost all early-stage data and AI startups, building from zero or rebuilding. The one that maps directly to Sleuth: I was founding designer at Acies.ai, a BI platform for payments — huge datasets, predictive AI, and the core problem was getting skeptical analysts to trust what the model produced. That's your problem. I also run sixteen AI agents day-to-day with my own observability layer — so AI-native is how I already work."

**Example B — deeper, leadership-flavored (≈55 sec, better for CEO):**
> "Three arcs. Five years full-time in startups — including a FATCA/compliance platform brokering data between banks and businesses, so regulated, trust-heavy data isn't new to me. Five years co-founding my own marketplace, where I owned design and was in the business decisions. Five years through Toptal as a founding/lead designer across data and AI products. The through-line is the same problem you have: complex data, an AI layer, and users who won't adopt it unless they trust it. Acies.ai is the cleanest example — founding designer, payments BI, predictive insights for skeptical analysts."

**Example C — technical-flavored (≈45 sec, better for CTO):**
> "I've spent fifteen years as the designer on data-heavy products where the technical constraint *is* the design problem. At Acies.ai, founding designer on a payments BI platform, the first report builder was bounded by what the data backend could return — I designed honestly to that, shipped, then we expanded to flexible slice-and-dice over a few iterations. I work close to engineering and I live in AI tooling — sixteen agents on OpenClaw with my own reliability layer, Claude wired into Figma daily. That combination is why this role exists."

**Follow-ups:** "Tell me more about Acies.ai" → go to Q4. "Why so many short engagements?" → "Toptal is how senior designers do startup work without the visa/relocation friction — I pick problems, not logos; 22 completed engagements, several multi-year." (Don't apologize for consulting.)
**Delivery:** Pick ONE arc framing and commit. Land "that's your problem" — it forces them to agree.

---

## Q2. "What does AI-centric design mean to you?"

**Testing:** Are you the AI-modern designer they fired the last one for not being? Buzzword or real?
**Why it matters at Sleuth:** This is *the* reason the role is open. They said it twice. If you don't nail this, nothing else matters.
**The trap (round 1):** You asked them to define it instead of owning it, then never came back with your answer. Fatal pass.

**Example A — the two-halves frame (≈40 sec):**
> "Two halves. In the product: AI-native patterns — source attribution, streaming, reversible state, progressive disclosure of reasoning — not a database UI with a chat box stapled on. In my own workflow: AI-forward tools by default — Claude wired into Figma for tokens and design-system work, agents for research synthesis, prototyping with AI in the loop. You told Namartha the gap with the current designer is exactly these two things. That's my edge, not my stretch."

**Example B — contrast with the anti-pattern (≈50 sec):**
> "Easiest way to say it is what it's *not*. AI-centric is not a traditional data table with an 'Ask AI' button — that's a database product wearing an AI hat, and expert users see through it instantly. AI-centric means the interface is organized around the model's behavior: outputs that cite their grounding, reasoning you can expand, states you can revert, latency designed as progress not a spinner. And it means the designer works that way too — I generate and maintain design systems with Claude, I run agents to compress research. I don't design AI from the outside; I operate inside it."

**Example C — proof-first (≈45 sec, strong for CTO):**
> "Concretely: I run sixteen agents on OpenClaw and got frustrated that I couldn't see what they were doing, so I built my own observability — synced diagrams, rules, state — instead of trusting a chat window. That instinct *is* AI-centric design: make the system legible and controllable, not magical. In product work it's the same — at Sprig the AI-native move was showing why the AI drafted what it drafted, not just the draft. AI-centric is legibility plus control, in the product and in how I build."

**Follow-ups:** "Which AI tools specifically?" → name them concretely: Claude (daily, Figma + Claude Code), OpenClaw agents, Gen-AI Maven certifications, prototyping flows. "Show me an AI pattern you'd bring here" → provenance-on-click + step-by-step reasoning trail on knowledge-graph results.
**Delivery:** This is the answer to over-rehearse. Say it cold, confident, no hedging. It directly clears the bar.

---

## Q3. "Our users are skeptical expert analysts who must trust the output. Have you designed for that?"

**Testing:** Their single biggest UX risk. Have you actually solved it, or will you hand-wave?
**Why it matters at Sleuth:** Biopharma BD/S&E analysts make million-dollar calls. If they don't trust an insight, they won't use it, and the product dies regardless of how good the data is.
**The trap (round 1):** Your answer here was actually your *best* — but garbled. Tighten it; don't lose it.

**Example A — the four-move pattern (≈45 sec):**
> "Directly, at Acies.ai and Sprig. The pattern isn't 'make the AI look smarter,' it's making it legible and reversible. Four moves: every output traces to its source on click; reasoning shown step-by-step, not just the answer; the user can revert to a prior state; deep thinking surfaced on demand, not dumped by default. Experts don't want less AI — they want to audit it on their terms."

**Example B — Sleuth-specific, knowledge-graph angle (≈55 sec):**
> "This is the problem I'd most want to own here. At Sprig users didn't trust AI-generated output enough to ship it, so we moved from 'AI generates, you accept' to 'AI drafts, you see why, you edit, it learns' — reframing the human from approver to editor. For Sleuth the unlock is bigger: the knowledge graph means you can show 'this insight came from these specific nodes and sources.' Almost no AI tool can do that — most can only gesture at confidence. Provenance from a real graph is the strongest trust primitive there is, and I'd build the UX around exposing it cleanly, audit-on-demand so it doesn't drown the analyst."

**Example C — the behavioral-trust angle (≈50 sec):**
> "Trust isn't a feature, it's earned through predictability. Skeptical experts test a tool — they'll check three answers they already know the truth of. So the design has to win those three: same input, same answer, every time; visible sourcing they can verify against what they know; and a graceful, honest 'I don't have enough to answer that' instead of a confident wrong answer. One confident hallucination to an expert and you've lost them for good. I designed exactly this tension at Acies.ai with payments analysts who'd been doing the work by hand for years."

**Follow-ups:** "How do you show provenance without clutter?" → default-clean surface, provenance one click deep, persistent only for flagged/high-stakes items. "What if the graph is wrong?" → reversibility + a fast 'this is wrong' path that feeds back; trust is also about how gracefully you handle being wrong.
**Delivery:** This wins the round. Slow down here. It's their core problem and you've genuinely solved versions of it twice.

---

## Q4. "Walk us through a data-heavy AI product." (Acies.ai)

**Testing:** Real depth, or portfolio gloss? Do you show *thinking* or screens?
**Why it matters at Sleuth:** Acies.ai is the closest analog to their product that exists in your history. Nail this and you're the obvious hire.
**The trap (round 1):** Screen tour — "this is Acies, board system, marketing materials." She had to extract the substance.

**Example A — the 3-beat decision story (≈70 sec):**
> "Acies.ai, founding designer, BI for the payments industry. Beat one — research: I read the domain, mined G2 and forums for where competitors frustrated users, watched their demo videos, and ran RFM analysis on the data myself so I understood it, not just displayed it. Beat two — the cut: I brought twenty possible features to the CEO and team; we killed seventeen and kept three. That cut is the actual design work — anyone can list twenty. Beat three — the constraint: the first report builder was bounded by what engineering could return that quarter, so I designed honestly to that and shipped, then over a few iterations it became a flexible slice-and-dice tool. The hard part was never the chart. It was a skeptical analyst trusting a prediction enough to act on it — which is exactly Sleuth."

**Example B — constraint-led (≈55 sec, strong for CTO):**
> "Acies.ai is my best example of designing *with* technical reality instead of fighting it. Big-data backend, a parent company shaping requirements, real limits on what could be queried fast. The first version of the report builder was deliberately simplified — what engineering could ship — and I designed to that honestly rather than mocking a fantasy. Then we iterated it into something that let analysts slice and dice freely. Founding designer, so I also did the PM-adjacent work: research, specs, the 20-features-to-3 prioritization with the CEO. The discipline that mattered was shipping the constrained version without resentment, then compounding it."

**Follow-ups:** "What were the three features?" — have them ready (RFM-based segmentation, the report/slice-dice builder, an insight/recommendation surface — phrase from memory honestly). "How technical did you get with the data?" → "Enough to run RFM myself and spec what the backend needed to return — I design data products by understanding the data, not abstracting it away."
**Delivery:** Screen-share only to support a decision point, not to tour. The line to land: "the hard part was never the chart."

---

## Q5. "How do you work with engineers and handle technical constraints?"

**Testing (CTO):** Will you spec well, move fast, and not design fantasies engineering can't build?
**Why it matters at Sleuth:** Mostly-engineering team, ship-fast, knowledge-graph backend with real limits.
**The trap:** Generic "I collaborate closely" with no proof.

**Example A — constraint-as-material (≈45 sec):**
> "I treat the constraint as design material, not an obstacle. Acies.ai: the first report builder was literally 'what can the backend return this quarter' — I designed to that, shipped, then expanded. I get engineers in before pixels freeze so the constraint shapes the design instead of breaking it in QA. With strong engineers I work live — screen-share and change it together. With outsourced or non-native-English teams I write detailed specs they can build from without me in the room."

**Example B — speed-tuned (≈40 sec):**
> "At startup speed the spine is fixed and the ceremony flexes. Spine: engineers see the design at sketch stage, not redline; we agree the constraint; I prototype the risky interaction first. Ceremony: a six-person pod gets lightweight Figma + a call; a solo-with-CTO setup gets a shared doc and live edits. At Acies.ai it was me, the CTO, and a few engineers — tight loop, decisions in minutes, not meetings. I'm comfortable being that close to the build."

**Follow-ups:** "How do you spec for engineers?" → "Detailed enough that someone in another timezone with English as a second language can build it unambiguously — states, edge cases, data shape, not just happy path." "What if eng says it's too expensive?" → "I ask what makes it expensive — usually it's a sub-feature I don't need; we ship the 80% and revisit. I don't die on the original design."
**Delivery:** Concrete > principle. The Acies.ai constraint story is the proof; lead with it.

---

## Q6. "Where do you like to get involved? What's your process?"

**Testing:** Do you have a point of view, or do you wait for requirements?
**Why it matters at Sleuth:** "Own this role, strategic." They need someone who gets in early, not a ticket-taker.
**The trap (round 1):** Two minutes of "it depends," pods, double-diamond, "give me one second I have an example." No spine.

**Example A — spine with exception (≈35 sec):**
> "My default: I get in at the problem, before requirements freeze — that's where design changes the outcome instead of decorating it. Three beats: clarify the business and user picture, pressure-test scope, then prototype and iterate live with engineers. On a fast team I compress the front, never the iteration."

**Example B — with the proof (≈55 sec):**
> "Default is early — at the problem, not the screen. The clearest example: Acies.ai, the founder gave me a proof-of-concept and essentially 'figure out what we should build.' So I did research, came back with twenty features, and we cut to three with the CEO. That's me at my best — given ambiguity and trusted to turn it into a scoped plan, not handed a spec to skin. I'll happily take the tactical end too when speed demands it, but if you want someone to *own* design strategically, early is where I add the most."

**Follow-ups:** "What if there's no PM and no requirements?" → "That's the Acies.ai situation and my favorite one — I write the requirements, validate them, and bring options, not just execution." "Double diamond?" → don't recite frameworks; "I use it as a sanity check, not a script."
**Delivery:** Never say "it depends" first. Default → exception → proof. Land it in 35 seconds; expand only on pull.

---

## Q7. "How do you incorporate feedback/metrics and rethink something you built?"

**Testing:** Are you evidence-driven, and can you kill your own work?
**Why it matters at Sleuth:** Fast iteration culture; they need someone who changes course on data, not ego.
**The trap (round 1):** You drifted into "less research than I wanted… behind on AI." Reframe as a strength.

**Example A — the approver→editor reframe (≈45 sec):**
> "Sprig: we shipped AI survey-creation, watched usage, ran interviews — adoption stalled because people didn't trust the AI output enough to ship it. The fix wasn't more polish; it was changing the human's role from 'approve the AI's work' to 'edit it, see why, and let it learn.' Reframing the relationship, not the UI, moved it. My rule: when an AI feature's adoption stalls, it's almost always a trust problem wearing a usability mask — so I look at the relationship before the pixels."

**Example B — Acies.ai validation loop (≈40 sec):**
> "At Acies.ai we tested with the parent company's internal stakeholders and I validated patterns with people who actually run brick-and-mortar and retail businesses — I have relatives in that world, so I pressure-tested 'does this insight make sense to someone who lives it' before we scaled it. When it didn't land, I changed the framing of the insight, not just the chart. Feedback that doesn't change the work isn't feedback — it's decoration."

**Follow-ups:** "What if you disagree with the feedback?" → "I separate signal from preference — one user's taste vs. a pattern across users. Pattern changes the design; preference gets logged." 
**Delivery:** This is where round 1 leaked the "behind on AI" line. Replace it permanently with the approver→editor story. Never narrate the gap.

---

## Q8. "First 30/60/90 days?"

**Testing:** Will you flail without a playbook, or self-direct?
**Why it matters at Sleuth:** Replacing a designer, fast team, high autonomy — they need a self-starter.
**The trap:** Over-promising sweeping change with no context.

**Example A — diagnose→ship→systematize (≈45 sec):**
> "Thirty: use the product hard as a skeptical analyst would, find exactly where trust breaks, deep-dive the knowledge graph with the CTO, talk to real users. Sixty: ship one visible trust fix end-to-end so the team sees the new bar rather than hears about it. Ninety: systematize — the AI-pattern library and the design-system spine the product needs to move fast without drifting. It's a hypothesis; the first thirty days will rewrite it, and that's the point."

**Example B — replacement-aware (≈40 sec):**
> "Because I'm replacing someone, the first move is continuity, not a teardown — understand what's mid-flight before I touch it. Then within the first month, one clear, shipped improvement at the trust layer so the team feels the change is real. By ninety days, the patterns and system that make 'AI-centric' repeatable instead of dependent on me eyeballing every screen. The goal by day ninety: design isn't the bottleneck and the bar is visible in the product, not in my head."

**Follow-ups:** "What's the one fix you'd ship first?" → "Hypothesis until I use it: surface knowledge-graph provenance at the moment an analyst decides whether to trust an insight — that's where adoption is won." 
**Delivery:** End with the humility caveat ("the first 30 days rewrite it") — it signals senior, not arrogant.

---

## Q9. "Why Sleuth / why this role?"

**Testing:** Genuine fit or spray-and-pray contractor?
**Why it matters:** Toptal contractors can read as mercenary. Show this one is specific.
**The trap:** Generic "I love AI and startups."

**Example A — the intersection (≈35 sec):**
> "Two specific reasons. One: data-heavy, AI-native, trust-critical, fast is the exact intersection I've worked in for fifteen years — Acies.ai and Sprig were rehearsals for this. Two: your knowledge graph makes trust *solvable*, not just patchable — most AI tools can't show their work; you structurally can. That's the design problem I actually want."

**Example B — mission-aware (≈45 sec):**
> "The biopharma angle matters to me more than it might sound. These analysts make calls that decide which drugs get funded — getting them trustworthy insight faster has real downstream weight, not just a metric. And the design challenge is the hardest and most interesting kind: make a skeptical expert trust an AI in a domain where being confidently wrong is catastrophic. Fifteen years of data-and-AI work has been pointing at this; the knowledge graph is what makes it winnable here."

**Follow-ups:** "It's contract — are you just between things?" → "I pick problems over logos. This is one I'd want to own, not pass through."
**Delivery:** Specificity is sincerity. Name the knowledge graph; generic enthusiasm reads as filler.

---

## Q10. "What would you change about our current product?"

**Testing:** Product judgment + can you critique without arrogance or vagueness?
**Why it matters at Sleuth:** They literally fired a designer over the product not matching the vision. They want to hear sharp, humble product sense.
**The trap:** Either no opinion ("I'd need to see it") or reckless teardown of work you don't understand.

**Example A — hypothesis-framed (≈40 sec):**
> "I'd need to use it hard first, so this is a hypothesis, not a verdict. The highest-leverage area in tools like this is almost always the exact moment a skeptical analyst decides whether an insight is trustworthy enough to put in front of their leadership. I'd want to see how visible the knowledge-graph provenance is at that moment. If it's buried, surfacing it cleanly is probably the single biggest adoption unlock — and it's pure design work, not an eng lift."

**Example B — pattern-modernization angle (≈40 sec, ties to why role is open):**
> "Namartha mentioned the current patterns feel a bit traditional-database for where you're going. Without having lived in it yet, the move I'd look for first: shift from 'table with an AI box' to an AI-native flow where the answer, its sources, and its reasoning are one continuous object the analyst can interrogate — not three disconnected panels. That's the difference between a data tool with AI bolted on and an AI-native product. It's also exactly the gap you opened the role to close."

**Follow-ups:** "You haven't used it much — how confident are you?" → "Not confident, deliberately — I'd be wary of anyone who tears apart a product they've used for an hour. It's a starting hypothesis I'd validate in week one."
**Delivery:** Always frame as hypothesis. Confidence without context is the exact thing that reads junior.

---

## Cross-cutting follow-up rule (the "one pushback" test)

CTO/CEOs will push once to see if you fold or dig in. Correct move every time: **"Good challenge — here's how that changes my thinking,"** then adjust. Never re-argue the original. Never get defensive. Adapting in real time is itself the thing they're testing.

---

## What to never do (carry from round 1)

1. Start before you know the landing → ramble.
2. "It depends" with no default.
3. Narrate doubt — "behind on AI," "less research than I wanted," "ChatGPT said."
4. Tour screens instead of telling a decision.
5. Let the defining question (AI-centric, why-replace-the-designer) pass without positioning against it.

The single highest-ROI prep: record yourself answering Q2, Q3, Q4 out loud. Time them. If any runs past 75 seconds or starts with "yes, well, it depends," do it again. That feedback loop fixes more than any amount of reading.

Sources: May 11 Sleuth transcript; Botpress round-1 transcript; `sleuth-interview-analysis.md`; `nicks-bio`.
