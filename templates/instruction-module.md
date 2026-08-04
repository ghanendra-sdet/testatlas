<!--
INSTRUCTION MODULE TEMPLATE
Use for a module teaching ONE new technique, concept, or artifact.
Not for a module that only combines/applies previously-taught material — use application-module.md for that instead.
Delete this comment block before publishing. Replace every [bracketed] placeholder.
Run CURRICULUM_CHECKLIST.md against the finished page before opening a PR.
-->
---
title: "[Concept Name, plain — no module number]"
sidebar_label: "[NN Concept Name]"
description: "[One sentence: what the reader learns and why it matters. Under ~160 characters. Must be unique site-wide.]"
keywords: ["[keyword 1]", "[keyword 2]", "[keyword 3]"]
difficulty: "beginner"
time_to_read: "[N] min"
last_reviewed: "[YYYY-MM-DD]"
---

# [Concept Name]

**Prerequisites**: [Link to prior module(s), or plain "(coming soon)" text if the target doesn't exist yet.]
**Leads to**: After this, you'll be ready for [link to next module, or "(coming soon)"].

[One paragraph: what this page is about and why the reader should care. Not a definition — a direct statement of purpose from the learner's perspective.]

## Why This Matters

[2-3 paragraphs. Open with a concrete, named scenario showing the cost of NOT knowing this — a real consequence, not a hypothetical. The two-tester contrast pattern (one tester doing the obvious/incomplete thing, one doing the more careful thing) works well here — see WRITING_GUIDELINES.md.]

## What [Concept] Covers

[2-4 paragraphs. Plain-language definition first, then technical precision. Use a table or diagram if it helps structure complexity. Name common misconceptions early.]

```mermaid
%% VIS-XXX — [Diagram Title]
%% Used in: [this file's name]
[diagram type]
    accTitle: [Same as diagram title]
    accDescr: [Describe the relationship/sequence shown, not just a list of labels]
    [diagram content]
```

<!-- Remember: save a byte-identical copy to assets/diagrams/<path>/VIS-XXX-slug.mmd and run npm run validate:diagrams -->

## When [Concept] Matters Most

[Bulleted list: specific scenarios where this earns its cost, and — if genuinely useful — where it matters less. Connect to risk-based judgment where relevant.]

## How This Works on a Real Project

[One extended, realistic, named scenario — AtlasBank or another established fictional entity where appropriate. Walk through: the situation, what a tester does, the real defect found, why the "obvious" approach would have missed it. This is your module's centerpiece example — it should be distinct from your From the Field callout below, not a restatement of it.]

## Common Mistakes

**Mistake 1: [Specific, named mistake.]**
[What goes wrong and why, tied to something demonstrated above — not generic advice.]

**Mistake 2: [...]**
[...]

**Mistake 3: [...]**
[...]

**Mistake 4: [...]**
[...]

:::note From the Field
[One real, anonymized production lesson — DISTINCT from your "How This Works on a Real Project" example above. No company names, no confidential detail. See WRITING_GUIDELINES.md for calibration against generic vs. specific.]
:::

:::tip Senior QA Insight
[Contrast a beginner's approach against an experienced tester's approach to this specific topic. Must name a concrete, actionable behavioral difference — not a platitude like "senior testers are more thorough." See WRITING_GUIDELINES.md's calibration test.]
:::

## Best Practices

**Practice 1: [...]**
[Why it matters — connect to a principle or example from earlier in the page.]

**Practice 2: [...]**
[...]

**Practice 3: [...]**
[...]

**Practice 4: [...]**
[...]

## When NOT to Use [Concept]
<!-- Only include this heading if there's a genuine "don't use this here" answer — skip for mindset-only modules with no clean negative case. -->

- [Specific situation where the investment isn't worth it, and why]
- [Another specific situation]

## Mini Challenge

**Scenario**: [A short, realistic scenario tied to this module's technique.]

**Your task**: [A specific, practical task — no single correct answer required. If a later module directly answers this, say so explicitly.]

## Key Takeaways

- [4 bullets, prose-adjacent, summarizing the module's core lessons]

---

## What You Just Learned

- [3-4 bullets, more granular than Key Takeaways]

**Next:** [Link to next module, or "(coming soon)"]

## Related Topics

- [Link] — [Why it's related, one clause]
- [Link] — [...]
- [Link] — [...]

## Interview Questions

**Q1: [A question that could come up in a real interview]**

*What to look for*: [What an experienced engineer's answer demonstrates vs. rote memorization.]

:::note Common Interview Mistake
[Name a SPECIFIC, real wrong or incomplete answer candidates commonly give, and what a strong answer includes instead. Not just "what to look for" restated.]
:::

**Q2: [...]**

*What to look for*: [...]

---

## Glossary

**[Term]**: [One-sentence definition — only genuinely new terms, used multiple times on the page.]

**[Term]**: [...]

## Quick Revision

Remember these five points:

✓ [Point 1]
✓ [Point 2]
✓ [Point 3]
✓ [Point 4]
✓ [Point 5]
