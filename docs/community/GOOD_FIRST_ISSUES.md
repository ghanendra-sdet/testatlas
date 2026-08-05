# Good First Issues

Draft issues, ready to open on GitHub with the `good first issue` label. Grouped by category, each scoped to something a new contributor can complete without deep repo context — none require touching already-shipped content's structure or reopening a closed architectural decision (see the note at the bottom for why that's deliberate).

When you open one of these as a real issue, use it directly as the issue body and add the relevant labels from `docs/community/LABELS.md`.

## A. Build the automation scripts (7 issues)

Full, implementation-ready specs already exist in `docs/architecture/AUTOMATION_SPECIFICATIONS.md` — these issues are "implement the spec," not "design the tool." Good for contributors who want to write code rather than content.

1. **Implement `scripts/validate-frontmatter.mjs`** — see spec #1 in `AUTOMATION_SPECIFICATIONS.md`. Highest-value starter script: mechanical, well-specified, immediately useful.
2. **Implement `scripts/validate-metadata-uniqueness.mjs`** — spec #2. Catches cross-path duplicate title/description, a real bug class this project has hit twice.
3. **Implement `scripts/validate-no-orphans.mjs`** — spec #3.
4. **Extend the metadata script with duplicate-keyword detection** — spec #4, builds on #2.
5. **Implement `scripts/validate-headings.mjs`** — spec #5. Flagged in `AUTOMATION_SPECIFICATIONS.md` as "the single highest-value script to build next" — would have caught this project's largest-ever content defect (a path-wide missing recurring-element gap) automatically.
6. **Implement `scripts/validate-curriculum.mjs`** — spec #6.
7. **Implement `scripts/validate-cross-references.mjs`** — spec #7, including the specific MDX-import relative-link edge case documented in the spec (a real bug class found twice this project).

## B. Content accuracy review (4 issues)

Read a path as a real learner would, end to end, and report anything unclear, inaccurate, or outdated. This is genuinely valuable and doesn't require prior QA expertise — a careful, attentive read is the actual skill.

8. **Read-through review: Foundations (17 modules)** — report via Content Correction issues, one per finding.
9. **Read-through review: Manual Testing (23 modules)**
10. **Read-through review: API Testing (21 modules)**
11. **Read-through review: Test Automation (18 modules)**

## C. Documentation consistency spot-checks (5 issues)

Small, bounded audits — pick one file or one small file group, check it against the stated standard, report findings as issues rather than fixing directly (a maintainer will triage).

12. **Spot-check all `.github/ISSUE_TEMPLATE/*.md` files render correctly** — preview each in GitHub's issue-creation UI, report any formatting problem.
13. **Verify every link in `AUTHOR_GUIDE.md` resolves** — a broken reference here is exactly the kind of thing a final release audit already caught once; a second, independent pass is worth having.
14. **Verify every link in `FAQ.md` and `PROJECT_VISION.md` resolves** — both are new; nobody's done a second pass yet.
15. **Check `NOT_NOW.md` and `docs/architecture/ARCHITECTURE_DECISIONS.md` for staleness** — both predate the three certified paths; confirm nothing there contradicts shipped reality.
16. **Confirm `docs/architecture/PROJECT_ARCHITECTURE.md`, `LAB_ARCHITECTURE.md`, `INTERVIEW_ARCHITECTURE.md`, `BUG_MUSEUM.md`, `CASE_STUDIES.md`, `REAL_WORLD_EXPERIENCE_LIBRARY.md` are clearly marked as not-yet-built** — these are original architecture-freeze documents describing content types that don't exist yet; verify none of them read as if they're already live (a false impression a new visitor shouldn't get).

## D. Additive content, no structural changes (6 issues)

New material that doesn't touch any existing module's shipped structure.

17. **Add 2–3 additional Interview Questions to any module that currently has only the minimum** — check against `docs/architecture/CONTENT_MODEL.md`'s "2–3" guidance; some modules could reasonably support one more.
18. **Propose a new Related Topics cross-link** where a genuine connection between two modules (possibly across paths) isn't currently linked either direction.
19. **Draft a new FAQ.md entry** for a real question you had that wasn't already answered there.
20. **Review `docs/community/LABELS.md` and `GOOD_FIRST_ISSUES.md` (this file) for a category we're missing** — meta, but genuinely useful once the label set is live and real issues start accumulating.
21. **Write a short "how I used TestAtlas" testimonial or use case** for potential inclusion in a future README or launch material (optional, no technical work required).
22. **Check every module's `time_to_read` estimate against actual reading time** for a sample of 5–10 modules — report any that seem significantly off.

## E. Accessibility and SEO verification (3 issues)

Run the existing checklists against a real sample and report findings — the checklists exist (`ACCESSIBILITY_CHECKLIST.md`, `SEO_CHECKLIST.md`), running them against content nobody's specifically re-checked is the actual task.

23. **Run `ACCESSIBILITY_CHECKLIST.md` against 10 modules chosen at random** across different paths, report any finding.
24. **Run `SEO_CHECKLIST.md` against all Section Review/Solutions pages** (18 pages total) — these were checked in bulk during certification, a fresh individual pass might catch something.
25. **Test the site's dark mode and mobile rendering** on 5–10 pages with Mermaid diagrams, report anything that doesn't render legibly.

---

## Why these, and not others

Every item above is either (a) new/additive, (b) tooling that doesn't touch content, or (c) a review that reports findings rather than changes shipped structure directly. This is deliberate: several real inconsistencies already found this project (Manual Testing Modules 1–7's partial recurring-element pattern, the Manual Testing capstone's differently-named closing heading) are **documented, accepted exceptions**, not open bugs — see `docs/architecture/CURRICULUM_EVOLUTION.md` and `docs/architecture/AUTOMATION_TESTING_CERTIFICATION.md`'s "Known Accepted Exceptions." A well-meaning first-time contributor "fixing" one of these would be reopening a closed, evidenced decision, not fixing a bug — a maintainer would have to explain why it's not actually broken, which is worse for everyone than not listing it here at all.
