# Round 2 Prep — Director of Product + PM (Botpress Head of UX)

Based on the May 12 recruiter call transcript with Vladyslav Udovenko.

---

## What we now know (facts from the call)

| Fact | Implication |
|---|---|
| **115 people**, doubled from ~55–60 last year | Scaling-pain stage; they want maturity, not process for its own sake |
| **2 product designers**: Jung-one + Amber (your direct reports) | Small team. You're a player-coach over 2, not a manager of 10 |
| Designers currently managed by **Director of Product** (PM background, *not* a designer) | ⚠️ The person you're meeting next is **handing you their current responsibility**. Handle with care. |
| 1 web designer (Anki, Barcelona, marketing-aligned) + Gideon (marketing) — collaborators, not reports | Your scope = product design only |
| **CEO is an engineer**, made early design calls, very hands-on, has public GitHub | Final-round vision check; he'll respect craft + technical fluency |
| No prior design leader — design was "a bit of everyone" | You're the **first** design leader. Founding-leader pattern = your strength (Acies.ai, MeetnGreetMe) |
| New product: **AI-native customer-support tool**, human-in-the-loop, handle 8–10 conversations at once, learns agent style, knowledge-base access, translation + ticketing, competes with **Zendesk/Intercom**, testing with clients, ~May | **This is almost certainly your design-exercise / "how would you approach this" prompt. Prepare it cold.** |
| Audience trending toward **less-technical** users | Your "developer-experience → non-technical" story (the business-automation/rules platform) is directly relevant |
| Comp: you said "180", they said "aligned" | ⚠️ You anchored at the floor of your range and attributed it to ChatGPT/Gemini/Claude. Cleanup needed (see §4). |
| Next: **Director of Product + a PM** → team meet-and-greet → **founder** | This doc preps the next one. |

---

## Who you're meeting and what they optimize for

**Director of Product (PM background, currently manages the designers).**
This is the single most important relationship dynamic in the whole loop. They are *giving up* design oversight to you. Two failure modes to avoid:
- Coming across as someone who'll relitigate past design decisions or empire-build → they get territorial.
- Coming across as someone who needs a designer-manager above them → they doubt the "self-starter owning the department" requirement.
The winning posture: **"I take design off your plate, raise the bar, and make product faster — you stay focused on product strategy, I own design and feed it back to you in your language."**

**The PM** optimizes for: day-to-day collaboration, scoping, velocity, how you handle scope cuts and disagreement.

**Both are non-designers.** This is the `business-impact.md` lesson made concrete: speak **product and business language, not craft language.** "I improved the visual system" → "I cut the time to ship a new screen so the team could spend that capacity on the support product." Reread the before/after table in `design-master-bot-analysis.md` §2 before this call.

---

## Questions to expect — ranked by likelihood

### Tier 1 — near-certain

**1. "Walk us through your background / why this role?"**
Use Arc B (data + AI + founding DNA) from `nick-personalized-answers.md`. End on: "I've been a founding/first designer three times — Acies.ai, MeetnGreetMe, effectively Sprig. Being the first design leader who also still ships is the exact pattern I do best." Ties straight to "first design leader, self-starter."

**2. "You'll face a lot of ambiguous problems you have to identify *before* solving. Tell us about a recent one."**
They asked this verbatim in round 1; expect a deeper version. Your Sprig answer (broken feedback engine nobody noticed → fixed → fed the AI roadmap) is good — **tighten it**. Structure: the problem nobody saw → how you found it (you click every button) → why it mattered to the business (the feedback engine was useless, so the AI analytics built on it were too) → what shipped. 60 seconds, not 3 minutes. In round 1 you rambled here.

**3. "Here's our new customer-support product [as described]. How would you approach designing it?"**
**Highest-probability exercise. Prepare it cold.** Run 5W1H out loud (don't jump to UI):
- **Why**: CS teams are stuck between full-auto agents (no human judgment) and pure-human (doesn't scale). Botpress already wins on support use-cases; this defends and expands the most valuable segment vs. Zendesk/Intercom.
- **Who**: name the B2B2C explicitly — the *buyer* is the B2B company, the *user* is the human support agent, the *end-customer* is the B2C person being supported. Three audiences, design for the support agent first.
- **When/Where**: agent juggling 8–10 live conversations, under time pressure, judged on resolution speed + CSAT. High cognitive load. That's the core design constraint.
- **What**: the hard problems — (a) triage/attention across 8–10 threads without dropping one, (b) AI draft vs. agent voice (it "learns their style" — show the draft, make accept/edit one keystroke, never auto-send), (c) trust calibration on AI suggestions, (d) knowledge-base grounding visible inline, (e) the handoff moment between AI and human.
- **How**: agent handle-time, first-response time, CSAT, % AI-draft accepted vs. edited vs. discarded, deflection rate. Then: "I'd validate the riskiest assumption — that agents trust AI drafts under time pressure — with a prototype test before we build."
- **Pros/cons**: name a tradeoff out loud (more automation = faster but risks the agent rubber-stamping a wrong answer; that's a design problem, not just a model problem).
This single answer, structured, is worth more than any other prep. **Rehearse it timed.**

**4. "How would you work with me / with product, given I'm not a designer and I currently manage the designers?"**
The relationship answer. "You stay on product strategy; I own design and translate it into your language — tradeoffs, timelines, what we're not doing and why. We co-write the brief; I don't wait to receive a spec. And your designers keep their continuity — I'm not coming in to relitigate, I'm coming in to grow them and raise the bar." Name **trust battery** if it lands naturally: "trust starts around half; I'd spend month one over-charging it by shipping, not by reorganizing."

**5. "How would you manage and grow Jung-one and Amber?"**
They currently report to the Director of Product — this person wants the handover to be safe. Be concrete: "First 30 days I don't change anything — I do deep 1:1s, review their last 3 projects, learn what they're stuck on. Then weekly critique with a documented format, one written growth goal each, and I protect their focus." Use the real MeetnGreetMe story (you grew juniors who are now seniors at PandaDoc / Booking) — that's *proof*, use it. But fix the round-1 framing: you said juniors asking questions hourly "was hard to focus" — true, but reframe as a solved problem: "the lesson was structure — office hours and a default-direction doc so mentoring doesn't fragment the maker time."

**6. "How do you balance hands-on craft with leading, on a lean team?"**
55/25/20 (ship/coach/strategy). "The IC % stays high deliberately — 3 designers across 115 people means the leader has to ship, and juniors learn by watching. It shifts as they level up and after we add a mid-level — which I'd argue is the first hire, not the fifth."

### Tier 2 — likely

**7. "How do you prioritize with only 3 designers and a whole company asking?"**
Company-first + snacking. "I route the team to the work that moves the business — the support product right now — and I say no to snack-work that feels productive but doesn't. Saying no well is most of the job at this ratio."

**8. "How do you do research here?"** They said the Head of UX does user research. You already do this naturally (YouTube comments, Discord, clicking every button at Sprig). Frame it as a system, not a habit: lightweight continuous (support tickets, community, session-watching) + structured before big bets.

**9. "Portfolio walkthrough."** ⚠️ You told them the new one is "being updated by Claude" and you'd send it today. **This must go out before this call.** Walk 2 projects deep (Sprig + Acies.ai), four beats each: objective → your contribution vs team → key decisions + rejected alternatives → why. Don't narrate screens — they can see them.

**10. "How do you handle disagreement with product or engineering?"** Disagree in private, commit in public, build the case with evidence not authority. Pull the Acies.ai "in-room with CTO and engineers" detail.

**11. "Why leave consulting / why permanent now?"** You half-answered this in round 1 ("tired of sitting at home", "like being around designers and developers"). Tighten — and use the real frame: you *run a practice* (VV DSGN, with a partner) plus Toptal leads; you're not a lone gig-taker. "Running my own practice taught me to own design end-to-end fast. What it can't give me is a team to grow and a product to compound on over years. That's what I want next, and it's exactly this role." (Higher-status than "tired of consulting.")

**12. "It's a brand-new role with no playbook — how do you operate as a self-starter?"** They flagged they *can't* describe a typical week. "That's the part I want. My founding-designer work — Acies.ai from zero, MeetnGreetMe — was all no-playbook. My first move is always the same: diagnose which business problem design should own, then build the process around that, not before it."

### Tier 3 — possible

- "Where should design sit as we scale?" → don't over-architect; "right now, embedded with product; structure follows headcount, not the other way around."
- "What worries you about our product / strategy?" → use the dual-audience tension (developers vs. non-technical) + vision-drift, framed as a question, not a criticism.
- "How do you measure design success?" → business line first (support product handle-time, CSAT, activation for non-technical users), then product metrics, then craft.
- "What's your design philosophy?" → 3 principles, each tied to a real decision (see `nick-personalized-answers.md` #4).

---

## §4. Cleanups from the round-1 transcript (do these before round 2)

1. **Send the portfolio TODAY.** You committed to it; the recruiter said his follow-up depends on it. A late or weak portfolio kills momentum before the product round even happens. If the new site isn't ready, send the old one with a one-line note + 2–3 strongest case study links. Don't wait for perfect.

2. **Fix the compensation framing.** You said "180" sourced from "ChatGPT, Gemini, Claude." That anchors at the floor of your CAD 180–230K target and sounds unresearched. It won't reopen in the product round (comp is recruiter/offer stage), but when it returns: have a researched number with a rationale — "Based on Montreal Head-of-UX / design-lead comp and what I bring — AI-native product depth, founding-designer track record, player-coach experience — I'm targeting CAD [X] base plus equity; I'm flexible for the right scope and equity." Decide your real number now. You anchored low; you may need to re-anchor at offer with justification, which is harder but doable.

3. **Reframe the Intercom comment.** You told them you "reverse-design" using Intercom's design system. Their new product *competes with Intercom*. Reframe to: "I study Intercom and Zendesk closely as the incumbents — their patterns and where the friction is between bolted-on AI and the core product is exactly the gap your AI-native approach exploits." Same fact, competitive lens instead of "I copy them."

4. **Tighten the rambles — but don't bury the AI proof.** Round 1 the 16-agents/OpenClaw thing came out as a meandering tangent. That content is actually your strongest asset (you ship AI-native products weekly — a node-based AI flow-builder, your own agent command/observability tooling, an "AI Product Design Patterns" cert). The fix isn't to suppress it; it's to land it as *one tight, concrete sentence* — "I ship AI-native products weekly, including a node-based flow-builder that's essentially the agent-builder problem" — then stop and let them pull. Rule everywhere: 60–90 seconds, then "want me to go deeper?"

5. **Clarify reporting line — ask it early.** Unknown and critical: does Head of UX report to the Director of Product (a non-designer PM), or to the CEO? This determines whether design has a real seat or sits under product. Ask in round 2: "Who does this role report to, and how does design's voice reach the founder?"

6. **Keep doing what worked.** You were warm, technically credible on AI, asked good questions (why is the role open, team composition, design system ownership), and the Russian/Belarus rapport landed. The hands-on enthusiasm ("I click every button", reading YouTube/Discord comments) is genuinely differentiating — keep it, just compress it.

---

## §5. Questions YOU should ask in round 2

Tuned for a Director of Product + PM (not the recruiter, not the founder):

1. "Who does the Head of UX report to — you, or the founder — and how does design's perspective reach the founder day-to-day?"
2. "You currently manage the two designers. What's working with them, and where do you most want them to grow?" (shows you'll partner, not displace)
3. "For the support product — what's already decided vs. still open? What does success look like in numbers?"
4. "Where do product and design most often disagree here today, and how does that resolve?"
5. "What would make you, a year from now, say hiring a Head of UX was clearly the right call?"
6. "Is there a leveling doc or competency framework for the designers, or would building that be part of this role?"
7. "What's the riskiest assumption in the support-product bet right now?"

Ask #2 and #5 of both the Director and, later, the team — listen for whether the answers match.

---

## One-line strategy for round 2

**Speak product/business language, structure the support-product answer with 5W1H, make the Director of Product feel you'll take design off their plate (not take their territory), and prove the player-coach claim with the real MeetnGreetMe-juniors-now-seniors story — compressed.**

Sources: May 12 transcript; `nick-personalized-answers.md`; `design-master-bot-analysis.md`; `nicks-bio`.
