# Review Checklist

For whoever reviews a content PR. Distinct from `CURRICULUM_CHECKLIST.md` — that one is what the author self-certifies before opening the PR; this one is what you independently verify, because an author's own checklist pass and a reviewer's independent pass catch different things (the same reasoning behind [Reviewing Test Cases](learning-paths/manual-testing/reviewing-test-cases) in Manual Testing itself).

## Before reading a single word

- [ ] Does `npm run build` actually pass on this branch? Don't trust "I ran it locally" — run it yourself.
- [ ] Does `npm run validate:diagrams` pass?
- [ ] Is the PR scoped to one focused change, per `CONTRIBUTING.md`? A PR mixing an unrelated fix with new content is harder to review and harder to revert.

## Structural compliance (fast, mechanical — do this pass first)

- [ ] Frontmatter complete: title, sidebar_label, description, keywords, difficulty, time_to_read, last_reviewed
- [ ] Prerequisites/Leads to block present and both links resolve to real pages (or are plain "(coming soon)" text)
- [ ] All five recurring elements present for an Instruction Module — or, for an Application Module, confirm this genuinely *is* one (does it teach something new, or synthesize prior content?) before accepting the lighter template
- [ ] `## Key Takeaways`, `## What You Just Learned`, `## Related Topics`, `## Interview Questions`, `## Glossary` all present, worded exactly as `CONTENT_MODEL.md` specifies
- [ ] No `](#)` anywhere in the diff
- [ ] Every new Mermaid diagram has `accTitle` and `accDescr`
- [ ] Word count within target or acceptable band (see `CURRICULUM_CHECKLIST.md`) — flag, don't auto-reject, a page in the "beyond ~3,000 words" range; ask whether it's genuinely one learning objective first

## Content quality (slower — this is the actual review)

- [ ] **Is the opening example realistic, or generic?** A toy scenario ("a form accepts ages 18–65") without a concrete business consequence doesn't meet TestAtlas's bar — compare against an already-shipped module for calibration.
- [ ] **Does "From the Field" describe a genuinely distinct incident from the module's own worked example?** It shouldn't just restate the same scenario in admonition formatting.
- [ ] **Is "Senior QA Insight" a real contrast, not a platitude?** "A senior tester is more careful" is not an insight. It needs a specific behavioral difference.
- [ ] **Does "Common Interview Mistake" name an actual wrong answer**, not just repeat what a good answer looks like from a different angle?
- [ ] **Do the Common Mistakes and Best Practices actually trace back to something demonstrated earlier in the page** (the worked example, the From the Field story), or are they generic advice that could appear on any page about any topic?
- [ ] **Is terminology consistent with `STYLE_GUIDE.md`?** Watch for "test case" vs "test," "defect" vs "bug" used inconsistently within the same page.
- [ ] **Does this duplicate an existing knowledge node?** Check `docs/architecture/KNOWLEDGE_GRAPH.md`. If BVA, a quality attribute, or a metric is being re-explained instead of linked, that's a real finding, not a style nitpick.

## Cross-link integrity (the thing that breaks most often)

- [ ] Click through — or grep — every internal link in the new content and confirm the target actually exists at that route
- [ ] Check whether this new module resolves a "(coming soon)" reference in an *earlier*, already-shipped module. If it does and the author didn't update it, that's a real, required fix before merge — see `QUALITY_GATES.md`'s "Why This Exists"
- [ ] If this is a Section Review/Solutions page, confirm the section's last teaching module's "Next" link and Prerequisites both point here correctly

## Architecture-level judgment calls (the reviewer's real value-add)

- [ ] **Is this actually the right page type?** An Application Module that's secretly teaching something new, or an Instruction Module that's actually just synthesis, is a mislabeled page that will read wrong regardless of how well it follows its checklist.
- [ ] **Does a new recurring pattern appear here that isn't in `CONTENT_MODEL.md`?** A new callout type, a new heading, a new page structure. If so, this is not yet a formalized pattern — see the 3-occurrence evidence bar in `docs/architecture/CURRICULUM_EVOLUTION.md`. Ask the author to either remove it or flag it explicitly as a proposed new pattern, not merge it silently.
- [ ] **Does this PR touch already-shipped content "just for consistency"?** Per the non-retrofit policy, that needs a stated *genuine defect*, not a stylistic preference, as justification.

## Before approving

- [ ] Every item above is either checked or explicitly waived with a stated reason in the PR conversation — don't approve silently on an unresolved item.
- [ ] If this PR completes a section or a whole path, confirm `docs/architecture/LEARNING_PATHS.md` has (or the author has committed to adding) an "As Shipped" note.
