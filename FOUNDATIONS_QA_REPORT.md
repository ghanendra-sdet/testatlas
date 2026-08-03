# Foundations v1.0 — QA Review Sprint Report

**Scope**: All 17 modules in `learning-paths/foundations/`, treated as a release candidate.
**Method**: Structured review across five suites, matching a production QA pass rather than a proofread. No content was modified during this review — findings only, per instruction.
**Severity scale**: Critical (breaks trust or navigation for a real user) · Major (real defect, contained impact) · Minor (inconsistency, no functional break) · Enhancement (works as-is, could be better).

---

## Suite 1: Curriculum Consistency

### Finding 1.1 — CRITICAL: Module 1 has no frontmatter at all
**File**: `01-what-is-software-testing.md`
**Detail**: The file opens directly with `# What Is Software Testing?` — there is no YAML frontmatter block. `title`, `description`, `keywords`, `difficulty`, `time_to_read`, and `last_reviewed` are all missing.
**Impact**: This is the entry point to the entire curriculum — the page most new visitors land on first. It has no search-indexable description, no difficulty/time signal for learners deciding whether to start, and no `last_reviewed` date for freshness tracking. It also means this page silently fails the first bullet of the Definition of Done in `CONTENT_MODEL.md`, and has done so undetected through five batches, because nothing in the build pipeline actually enforces frontmatter presence.
**Likely cause**: Written before `CONTENT_MODEL.md`'s frontmatter requirement existed (predates the architecture freeze).

### Finding 1.2 — MINOR: Glossary term wording drift
**Terms**: "SDET" and "Triage," each defined in 2–3 different modules with slightly different phrasing.
- SDET: Module 2 says "as much as, or more than, manual test execution"; Module 16 says "focused on building and maintaining test automation, frameworks, and testing infrastructure through code" — a genuinely different phrasing, not just a shortened echo.
- Triage: Module 11/15 say "reviewing newly logged defects to assign severity, priority, and ownership"; Module 12 says "assessing a newly logged defect's severity and priority and assigning it to an owner" — same meaning, different wording.
**Impact**: Not contradictory, but a learner who reads two modules back to back may notice the same term defined twice, slightly differently, which undercuts the "one concept, one definition" discipline the project otherwise holds to.

### Verified clean
- **"Bug" vs. "defect" vs. "issue"** usage (190 / 38 / 23 occurrences respectively) fully complies with `STYLE_GUIDE.md`'s explicit rule: "Use 'bug' naturally when discussing a reported problem. Use 'defect' when discussing formal lifecycle..." — checked directly against the style guide, not just internally consistent.
- **No full re-explanation of a concept found.** Spot-checked the three most-referenced concepts (Principle 1 "presence of defects, not absence," pesticide paradox, "exhaustive testing is impossible") — each is fully explained exactly once (Module 3) and only echoed as a short callback phrase elsewhere (Modules 10, 14, 17), never re-taught at length.
- **"Acceptance criteria" vs. "ACs"** — no inconsistent abbreviation found; full term used throughout.

---

## Suite 2: Navigation Testing

### Finding 2.1 — MAJOR: Prerequisites-block "Leads to" lines are stale across nearly every module
**Files/lines** (12 instances found):
- `03-software-testing-principles.md:13` — "Agile & Scrum Basics for QA (coming soon)" — **exists** (Module 5)
- `10-shift-left-and-shift-right-testing.md:13` — "Defect Life Cycle (coming soon)" and "Severity vs. Priority (coming soon)" — **both exist** (Modules 11, 12)
- `11-defect-life-cycle.md:13` — "Severity vs. Priority (coming soon)" — **exists** (Module 12)
- `12-severity-vs-priority.md:13` — "Test Strategy vs. Test Plan (coming soon)" — **exists** (Module 13)
- `13-test-strategy-vs-test-plan.md:13` — "Metrics and Measurement (coming soon)" — **exists** (Module 14)
- `14-qa-metrics-and-measurement.md:13` — "Common QA Terminology (coming soon)" and "QA Career Roadmap (coming soon)" — **both exist** (Modules 15, 16)
- `15-common-qa-terminology.md:13` — "QA Career Roadmap (coming soon)" — **exists** (Module 16)
- `16-qa-career-roadmap.md:13` — "Testing Myths & Misconceptions (coming soon)" — **exists** (Module 17)

**Impact**: This is a real, confirmed defect, not a style nitpick. On every one of these pages, the **top** of the page (Prerequisites block) says a module is "coming soon," while the **bottom** of the same page (the "Next" link) links to that exact module, live and working. A learner reading top to bottom encounters a direct contradiction on the same page. Root cause: each batch's workflow correctly updated the *previous* module's bottom "Next" link once a new module shipped, but never went back to fix the *new* module's own top-of-page "Leads to" line referencing whatever came after it — which was itself "coming soon" at the time of writing and simply never got revisited once its target existed.

**Note**: `15-common-qa-terminology.md:154` also has one instance in its Related Topics section ("Testing Myths & Misconceptions (coming soon)") with the same problem.

### Finding 2.2 — MAJOR: Three dead placeholder links point to content that now exists
**Files/lines**:
- `01-what-is-software-testing.md:202` — `[Defect Management](#)` should link to `/learning-paths/foundations/defect-life-cycle` (Module 11 now covers exactly this)
- `04-testing-across-the-sdlc.md:111` — `[Defect Life Cycle](#)` should link to `/learning-paths/foundations/defect-life-cycle` (Module 11, exact title match)
- `02-role-of-qa-in-product-delivery.md:145` — `[Career Paths in QA](#)` should link to `/learning-paths/foundations/qa-career-roadmap` (Module 16 covers this, under its final title)

**Impact**: These are missed opportunities to connect early modules forward to content that was written specifically to fulfill the promise those early modules made. A learner reading Module 1 sees a dead link exactly where a real, relevant module now exists.

### Finding 2.3 — MAJOR: 9 remaining dead `](#)` links violate the project's own linking rule
**Files/lines**: `01-what-is-software-testing.md:200-201,203`, `04-testing-across-the-sdlc.md:112`, `02-role-of-qa-in-product-delivery.md:144`, `08-risk-based-testing-fundamentals.md:117-118`, `09-quality-attributes.md:114-115`
**Detail**: These point to genuinely not-yet-built content (Test Design Techniques, Test Automation, Performance Testing, Security Testing — all future learning paths). `CONTENT_MODEL.md`'s own Cross-Linking Strategy section states plainly: never link to a page that doesn't exist; use plain text with "(coming soon)" instead — the exact convention this review sprint's own Batches 3–5 correctly followed for in-path forward references.
**Impact**: Low practical impact (clicking one just scrolls to the top of the same page — not a broken build link, so the build's link checker doesn't catch it), but it's an inconsistency against a rule the project explicitly wrote down and otherwise follows.

### Verified clean
- **Sidebar order**: confirmed 1–17, matches intended sequence exactly.
- **Prev/Next pagination**: no explicit override in `docusaurus.config.ts` or `_category_.json` — Docusaurus's default autogenerated pagination is active and correctly reflects file order, since sidebar order is confirmed correct. This works via theme defaults, not authored navigation text (the path's own "Next" links, addressed above, are a separate, intentional layer on top of it).
- **Breadcrumbs**: no custom override; default Docusaurus breadcrumb generation from the category path is active and functions normally.
- **Related Topics sections**: present on all 17 modules, cross-linking correctly in every case except the dead links noted above.

---

## Suite 3: Learning Flow Testing

### Finding 3.1 — MAJOR: Prerequisites block missing entirely on 7 modules
**Files**: `01-what-is-software-testing.md`, `02-role-of-qa-in-product-delivery.md`, `04-testing-across-the-sdlc.md`, `06-verification-vs-validation.md`, `07-static-vs-dynamic-testing.md`, `08-risk-based-testing-fundamentals.md`, `09-quality-attributes.md`
**Detail**: This was already flagged during the curriculum review and logged as a known deferred task in `LEARNING_PATHS.md`, and is confirmed still open. These seven modules were written before the Prerequisites block was added to `CONTENT_MODEL.md`'s Definition of Done.
**Impact**: The dependency graph is invisible on these seven pages specifically — a learner landing on, say, Module 8 (Risk-Based Testing) directly has no on-page signal of what it assumes.

### Finding 3.2 — MINOR: One forward-referenced term with no in-path definition
**File**: `16-qa-career-roadmap.md`, SDET row of the career table
**Detail**: "CI/CD integration" is listed as a typical SDET skill with no definition anywhere in Foundations.
**Impact**: Low — it's in a skills table for a future specialization, not a taught concept this path depends on, and the term is common enough that most readers will have some intuition for it. Worth a one-line gloss or an explicit "(covered in the Automation path)" note rather than leaving it bare.

### Verified clean
- **Prerequisites ordering**: spot-checked all 10 modules that do have a Prerequisites block — none reference a module that comes later in the sequence than itself. No forward-dependency errors found.
- **One learning objective per module**: 15 of 17 modules teach a single, clearly stated concept. The two structural exceptions (Module 15, a consolidated reference; Module 17, the capstone) both explicitly state and justify their deviation from the single-objective pattern in their own body text, per `CONTENT_MODEL.md`'s "stated, justified deviation" allowance.

---

## Suite 4: Technical Validation

| Check | Result |
|---|---|
| `npm run build` | ✅ Clean, zero errors |
| Broken links (Docusaurus checker) | ✅ Zero reported — note this checker does not catch the `](#)` same-page anchors in Finding 2.2/2.3, since those are technically valid anchors, not broken links |
| Search indexing | ✅ All 17 titles confirmed present in `build/search-index.json` (spot-verified across Batches 3–4, re-confirmed for this report) |
| Sidebar ordering | ✅ 1–17 sequential, matches `LEARNING_PATHS.md` |
| Frontmatter metadata | ⚠️ 16 of 17 complete — see Finding 1.1 |

---

## Suite 5: Editorial Review

### Finding 5.1 — ENHANCEMENT: Two modules sit at the top of the acceptable length band
**Files**: `02-role-of-qa-in-product-delivery.md` (2,719 words), `17-testing-myths-and-misconceptions.md` (2,632 words)
**Detail**: Both are within the acceptable 2,500–3,000 word band defined in `CONTENT_MODEL.md`, not over it. Module 17's length is already justified in-page (it's the capstone, covering seven myths in full Myth/Reality/Story/Lesson/Interview-Angle format). Module 2 predates the tighter length discipline established from Module 3 onward but was not flagged as needing a split during its original review.
**Impact**: None functionally. Noting only because both are the two longest modules in the path and worth a light editorial pass for tightening if time allows — not because either fails the one-objective test.

### Verified clean
- **No unnecessary repetition found** beyond the intentional, brief callback references documented as clean in Finding 1.2's sibling check above.
- **No toy examples found** — every module's worked example uses a named industry context (fintech, healthcare, e-commerce, logistics, insurance, media streaming, ride-sharing) with specific, plausible detail, consistent with `CLAUDE.md`'s example quality standard.
- **Readability**: no section identified as denser or harder to follow than its neighbors during this pass; no module stood out as needing a rewrite rather than a targeted fix.

---

## Summary

| Severity | Count |
|---|---|
| Critical | 1 |
| Major | 4 |
| Minor | 2 |
| Enhancement | 2 |

**Total findings: 9**, all with an exact file and, where applicable, line number. None require new educational content or a structural rethink — every finding is a fix to existing content: one missing frontmatter block, a batch of stale "coming soon" references now that their targets exist, three placeholder links that should point to real in-path content, nine placeholder links that should become plain "(coming soon)" text per the project's own rule, and small wording/consistency polish.

The most important pattern across these findings: **every Major and Critical issue is a byproduct of the batch-based writing workflow itself** — specifically, forward references written correctly at the time (before their target existed) that were never revisited once the target shipped in a later batch. This is worth naming explicitly, since it will recur identically in Manual Testing unless the workflow changes: a "did any prior forward-reference just become resolvable" check belongs at the *start* of writing each new module, not only as a retrospective sweep at the end of a path.

No fixes have been made. Waiting for approval before making any changes.
