# testatlas STATE
- 2026-11-10 (committed+pushed): OWASP references brought to current editions.
  security-testing/04 uses Top 10:2025 names+codes (A07 Authentication Failures, A03 Software Supply Chain
  Failures); 05/17 Related Topics updated; api-testing/13 + 14 map excessive data exposure / mass assignment
  to API3:2023 BOPLA; OWASP = Open Worldwide; CURRICULUM_ARCHITECTURE "OWASP ZAP" -> "ZAP".
  validate:diagrams 143/143, npm run build OK.
- 2026-11-10 (uncommitted, user pushes): ISTQB CTFL v4.0 principle names in foundations/03 + 15.
  "Pesticide Paradox" -> "Tests Wear Out (Pesticide Paradox)" as primary name, old name kept as an
  explicit alias everywhere it's used (prose, SVG card, glossary, interview question). Same pattern
  for "Absence-of-Errors Fallacy" -> "The Absence-of-Defects Fallacy" (absence-of-errors kept as
  alias). Updated: frontmatter keywords + last_reviewed on both files, VIS-005 SVG `<desc>` and card
  5/7 title text, the 7-item list, the "What the Seven Principles Are" full explanations (with an
  explicit "ISTQB's CTFL v4.0 syllabus names this..." sentence), "When These Principles Matter Most"
  bullets, Common Mistakes #3, Best Practices #2, Key Takeaways, Interview Q3, Related Topics, and
  both glossary entries in foundations/15. Checked foundations/14's pesticide-paradox callback and
  foundations/06 (verification-vs-validation) — neither needed a change (14's callback already just
  uses the established alias name, 06 doesn't name either fallacy term). Left releases/*.md,
  FOUNDATIONS_QA_REPORT.md, and docs/architecture/LEARNING_PATHS.md untouched — historical/record
  documents describing past decisions, not live curriculum content.
  validate:diagrams 143/143, npm run build OK (re-verified after the final Related-Topics fix).
- Next candidate: none currently queued. Re-scan for other stale ISTQB v3-vs-v4 terminology
  (e.g. "test levels" naming, "error/fault/failure" chain) if asked for more foundations work.
