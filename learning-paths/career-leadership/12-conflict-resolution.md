---
title: "Conflict Resolution"
sidebar_label: "12 Conflict Resolution"
description: "How to resolve genuine disagreements in QA leadership — between engineers, across QA and development, or over a risk tradeoff — by addressing the underlying interest, not just the surface positions."
keywords: ["conflict resolution QA", "resolving disagreements engineering", "QA vs developer conflict", "test lead conflict management"]
difficulty: "intermediate"
time_to_read: "8 min"
last_reviewed: "2026-08-08"
---

# Conflict Resolution

**Prerequisites**: [Delegation and Decision Making](/learning-paths/career-leadership/delegation-and-decision-making)
**Leads to**: After this, you'll be ready for [Shift Left at Scale](/learning-paths/career-leadership/shift-left-at-scale).

## Why This Matters

**A QA Lead who resolves conflict by picking a side.** A QA engineer and a developer disagree sharply over whether a specific edge case is worth fixing before release — the developer sees it as low-priority polish, the QA engineer sees it as a real risk. The QA Lead, wanting to resolve it quickly, sides with the QA engineer because "QA should support QA." The developer complies but is visibly frustrated, the underlying disagreement about how the team assesses risk is never actually addressed, and a near-identical conflict resurfaces on the very next release.

**A QA Lead who resolves conflict by addressing the underlying interest.** A peer facing a similar disagreement instead asks both people to separately explain *why* they hold their position — not just what they think should happen. It turns out the developer's real concern is the release timeline, not that the edge case doesn't matter, while the QA engineer's real concern is a specific customer-facing consequence they'd seen before. Once both underlying concerns are visible, a third option emerges: fix the highest-risk part of the edge case now, defer the rest with an explicit follow-up ticket. Both people accept it, because it actually addresses what each of them cared about.

Both leads wanted to resolve the conflict. Only one addressed what was actually driving it — because most real conflict is about underlying interests, not the stated positions people first bring to the table.

## Positions vs. Interests

The single most useful conflict-resolution distinction: a **position** is what someone says they want ("we should fix this edge case before release"); an **interest** is the underlying reason they want it (a specific past incident, a timeline concern, a risk they're personally accountable for). Two people can hold opposing positions while having compatible, or even shared, interests — the developer's timeline concern and the QA engineer's risk concern aren't actually incompatible, as this module's opening example shows, once both are visible.

Resolving conflict at the position level ("who's right") tends to produce a winner and a loser, and the underlying disagreement resurfaces later in a new form. Resolving it at the interest level tends to surface solutions neither party initially proposed, because the actual constraint space is larger than either person's first stated position.

## A Practical Process

1. **Separate the people from the problem.** Address the disagreement about the edge case, not a judgment about either person's competence or motives.
2. **Ask each side why, not just what.** "Why does this matter to you?" surfaces the actual interest behind the stated position.
3. **Name the interests explicitly, out loud, to both parties.** This alone often reduces the temperature of a disagreement, since both people feel genuinely heard rather than just overruled.
4. **Look for an option that addresses both interests, not just a compromise between the two positions.** A compromise splits the difference between two positions; addressing both interests can produce a better solution than either original position.
5. **If no option satisfies both interests, make the call explicitly and explain the reasoning**, per the decision-making discipline from [Delegation and Decision Making](/learning-paths/career-leadership/delegation-and-decision-making) — sometimes a genuine tradeoff exists and someone's interest won't be fully satisfied, but the reasoning should still be visible.

## Common Mistakes

**Mistake 1: Resolving conflict by simply picking a side.**
This module's opening scenario — picking a winner resolves the immediate friction but not the underlying disagreement, which resurfaces in a new form on the next similar situation.

**Mistake 2: Treating every disagreement as needing a compromise, rather than looking for a solution addressing both interests.**
A pure compromise (fix half the edge case) can satisfy neither person's actual interest — the fix that addressed the highest-risk part while deferring the rest, from this module's second example, wasn't a 50/50 split, it was a solution designed around both actual interests.

**Mistake 3: Avoiding conflict entirely, hoping it resolves itself.**
Unaddressed conflict doesn't disappear — it tends to resurface with more frustration attached each time, and avoiding it as a leader signals that genuine disagreements won't get a fair hearing.

**Mistake 4: Making the conflict personal rather than keeping it about the actual disagreement.**
Framing a disagreement in terms of one person being difficult or wrong, rather than addressing the substance of the disagreement itself, damages working relationships without resolving anything.

## Best Practices

**Practice 1: Ask "why does this matter to you" before proposing any resolution.**
This single question is the core mechanism for surfacing interests rather than staying stuck at the position level.

**Practice 2: Name both parties' interests out loud, explicitly, before proposing a solution.**
Both people hearing their actual concern acknowledged, not just their stated position, meaningfully reduces defensiveness even before a resolution is reached.

**Practice 3: Look actively for a third option, not just a split-the-difference compromise.**
A genuinely better solution than either original position is more available than it first appears, once the actual underlying interests are visible.

**Practice 4: When a genuine tradeoff exists and no option satisfies everyone, say so explicitly and explain your reasoning.**
Not every conflict has a win-win resolution — when it doesn't, transparency about the tradeoff and the reasoning behind the final call still preserves trust, even when someone doesn't get their preferred outcome.

:::note From the Field
At AtlasBank, a recurring conflict between the Loan Portal team's QA engineers and developers centered on how much testing new loan-calculation logic required before release — QA consistently wanted more time, developers consistently felt timelines were being threatened. A new QA Lead, instead of continuing to negotiate release-by-release, asked both sides directly why their positions mattered to them. QA's actual interest was a specific past incident where a calculation error had real financial consequences for customers; developers' actual interest was that release delays were affecting a metric they were evaluated on. Once both interests were visible, the team introduced a targeted, faster-running automated test suite specifically for loan-calculation logic — addressing QA's actual risk concern without the release-delay cost developers were actually worried about. The recurring conflict, which had resurfaced on nearly every release for months, didn't recur again.
:::

## Mini Challenge

**Scenario**: A QA engineer and a product manager disagree over whether a feature is ready to ship — the QA engineer wants another day of testing, the product manager wants to ship today.

**Your task**: Write the two questions you'd ask each person to surface their actual underlying interest (not just their stated position), and describe what kind of third option might satisfy both.

## Key Takeaways

- Most real conflict is driven by underlying interests, not the stated positions people first bring to the table.
- Resolving conflict by picking a side settles the immediate friction but leaves the underlying disagreement to resurface later.
- Asking "why does this matter to you" surfaces the interest behind a position and often reveals solutions neither original position considered.
- Not every conflict has a solution satisfying everyone — when a genuine tradeoff exists, explicit, transparent reasoning still preserves trust.

## What You Just Learned

- The distinction between positions and interests, and why resolving conflict at the interest level produces more durable outcomes
- A concrete five-step process for resolving disagreements
- Why picking a side or defaulting to a 50/50 compromise often fails to actually resolve the underlying issue
- The AtlasBank Loan Portal example of resolving a recurring QA-versus-development conflict at the interest level

## Related Topics

- [Delegation and Decision Making](/learning-paths/career-leadership/delegation-and-decision-making) — What to do when a genuine tradeoff means no option satisfies every interest
- [Leading Without Authority](/learning-paths/career-leadership/leading-without-authority) — The same evidence-based, interest-focused reasoning applied to driving change without formal power
- Working with Product and Developers (coming soon, Section 7) — Applying this same conflict-resolution discipline specifically across team boundaries

## Interview Questions

**Q1: Tell me about a significant disagreement you had to resolve between two people or teams.**

*What to look for*: A real example showing the candidate looked past stated positions to underlying interests, ideally producing a solution neither original position proposed — not just "I made a decision and everyone accepted it."

**Q2: How do you handle a conflict where you don't have the authority to simply make the final call?**

*What to look for*: An answer connecting to interest-based resolution and evidence-based influence (per [Leading Without Authority](/learning-paths/career-leadership/leading-without-authority)), rather than escalation as the only tool.

:::note Common Interview Mistake
Many candidates describe conflict resolution purely as a communication or diplomacy skill — "I stay calm and listen." A strong answer goes further, describing the specific mechanism (surfacing interests behind positions) that actually resolves the underlying disagreement, not just manages the tone of the conversation.
:::

**Q3: Describe a conflict you weren't able to fully resolve. What did you do?**

*What to look for*: Honesty that not every conflict has a solution satisfying everyone, combined with a description of making the tradeoff explicit and explaining the reasoning — showing maturity about genuine, unresolvable tradeoffs rather than claiming every conflict has a perfect answer.

---

## Glossary

**Position**: What someone explicitly states they want in a disagreement, as distinct from the underlying reason they want it.

**Interest**: The actual underlying concern or reason driving someone's stated position in a conflict — often more compatible with the other party's interest than the surface positions suggest.

## Quick Revision

Remember these five points:

✓ Most real conflict is driven by underlying interests, not the stated positions people first bring to a disagreement.

✓ Resolving conflict by simply picking a side settles the immediate friction but leaves the underlying disagreement to resurface.

✓ Asking "why does this matter to you" is the core mechanism for surfacing interests behind stated positions.

✓ A solution addressing both underlying interests is often better than a straight compromise between two positions.

✓ Not every conflict has a solution satisfying everyone — when a genuine tradeoff exists, explicit reasoning still preserves trust.
