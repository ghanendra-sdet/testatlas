# Writing Guidelines

`STYLE_GUIDE.md` defines the rules — voice, tone, terminology, structure. This document is different on purpose: it's a calibration guide, showing what following those rules actually looks like in already-shipped content, so "realistic example" and "generic advice" stop being subjective judgment calls. If you're choosing between the two documents, read `STYLE_GUIDE.md` first; come here when you're not sure whether a specific paragraph you've drafted actually clears the bar.

## The single biggest quality gap: specific vs. generic

Almost every weak first draft in TestAtlas's history failed the same way — it was *correct* but *generic*. It could have appeared on any testing blog, about any technique, with the nouns swapped. The fix is always the same: replace an abstract claim with a concrete, consequential scenario.

**Generic** (technically true, adds nothing):
> Boundary value analysis is important because defects often occur at the edges of valid ranges.

**Specific** (shipped, from `learning-paths/manual-testing/01-test-design-fundamentals.md`):
> Execution finds a real defect: the premium calculation is off by one bracket at the exact age where two brackets meet, because the pricing rule used a strict `<` where it needed `<=`. It's found because a boundary was deliberately targeted — not because the tester got lucky picking a round number.

The second version is specific enough that a reader could reproduce the defect from the description alone. That's the bar.

## What makes an opening scenario "realistic" vs. "toy"

A toy scenario states a rule and a hypothetical without any consequence: *"if a form accepts ages 18–65, you should test 17, 18, 65, and 66."* True, forgettable.

A realistic scenario has three things a toy scenario doesn't:
1. **A named context** — a specific company, product, or feature (AtlasBank's international transfer, a customer-profile update endpoint), not "a system."
2. **A real, traceable consequence** — a customer charged twice, a compliance rule silently evaded, a support ticket. Not "this could cause problems."
3. **A reason the obvious approach missed it** — what a less careful tester actually did, and why it looked fine at the time.

Compare the two "From the Field" callouts below — both about the same underlying lesson (test the actual invalid value, not just presence/absence), from two different modules:

> **Weaker**: Query parameters should be validated, not just accepted. Otherwise you might get unexpected behavior.

> **Shipped** (`learning-paths/api-testing/05-headers-parameters-and-payload-validation.md`): A search API accepted a `sortBy` query parameter with a small set of valid values. A client integration once sent `sortBy=priceAsc` — a value that looked plausible but wasn't in the actual allowed set (`price_asc` was correct). The API silently ignored the unrecognized value and returned results in default order instead of erroring. The client team spent most of a day debugging their own sorting logic before realizing the API had never validated the parameter at all.

The shipped version names the exact wrong value, the exact wrong consequence (a full day lost debugging the wrong layer), and the exact reason it went unnoticed (silent fallback to default behavior looks like a working feature).

## The two-tester contrast pattern

Most TestAtlas modules open with two named testers — one who does the obvious, incomplete thing, one who does the more careful thing — rather than stating the lesson directly. Use this pattern when a module's core lesson is a *behavioral* difference (what someone does), and reserve a direct definition-first opening only when the concept itself, not a behavior, is what's genuinely new.

## Calibrating "Senior QA Insight"

This is the callout most likely to collapse into a platitude. A platitude states that senior people are more careful, without saying what they actually do differently:

**Platitude**: A senior tester is more thorough about checking edge cases than a junior tester.

**Real contrast** (shipped, `learning-paths/api-testing/02-http-fundamentals.md`): A newer tester reads a response by asking "does the data look right." A senior tester reads a response by asking "does the status code, the headers, and the data all agree with each other and with what I actually asked for" — three separate questions, not one.

The test: could you turn the "senior" half into a concrete checklist item someone could actually follow tomorrow? If not, it's still a platitude.

## Sentence-level habits

- **Active voice, direct address**: "Test the boundary values" not "Boundary values should be tested." "You should already understand X" not "A reader familiar with X will find this useful."
- **State the mechanism, not just the outcome**: don't just say a defect was "caught" — say *what specific thing revealed it* (a comparison against a sibling endpoint, a deliberately non-round test value, a re-tested endpoint that had previously passed elsewhere).
- **Avoid stacking qualifiers**: "This can sometimes potentially cause issues in certain cases" → "This causes X when Y."
- **Never claim a statistic, incident, or tool behavior you haven't verified.** Fictional scenarios (AtlasBank, named test data) are fine and expected; fabricated "studies show" claims are not — see `STYLE_GUIDE.md` section 3.

## Fictional data conventions

- Use AtlasBank for banking-domain examples from Manual Testing Section 3 onward and throughout all of API Testing — see `STYLE_GUIDE.md`'s Recurring Fictional Product section for the exact scope and its documented exception.
- Outside AtlasBank's scope, use realistic but clearly fictional identifiers: `fictional-bank.com`, `test-user@example.com`, `ACC-4471829` — never a real domain, real-looking SSN/card number pattern, or anything that could be mistaken for genuine PII even as an example.
- Prefer non-round numeric test data ($333.33, not $500.00) specifically for anything involving a calculation — round numbers hide rounding-direction and precision defects, a lesson stated directly in several shipped modules and worth applying in your own examples too.

## Before you submit

Read your draft's opening paragraph and your From the Field / Senior QA Insight callouts once more, specifically asking: *could this exact text, with only the nouns changed, appear in a module about a completely different technique?* If yes, it's still generic. Go back to the two-tester or named-consequence pattern above.
