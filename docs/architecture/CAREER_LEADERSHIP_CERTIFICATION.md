# Career & Leadership Certification

**Certified 2026-08-08.** Career & Leadership v1.0 (35 modules, 10 sections) is TestAtlas's 10th certified Reference Curriculum, built on `feature/career-leadership` across 5 implementation batches plus a dedicated repository-wide certification audit, and released as v1.3.0.

## Governance Path

Architecture proposed, reviewed, and revised before implementation began — the original 52-module / 20–24-diagram proposal was not approved; scope was explicitly reduced to ~35 modules / 10–14 diagrams, kept substantial but consistent with every other certified path's 16–23-module norm (this path's own size is still the largest, an explicitly evidenced and flagged departure, not a silent one). Implementation proceeded in 5 batches of 2 sections each, with full validation (`npm run build`, `npm run validate:diagrams`, duplicate-metadata scan, runtime page checks) after every batch, and public-facing documentation (README, homepage, ROADMAP, this registry) deliberately left untouched until after certification and merge — the direct governance lesson carried forward from the Interview Preparation revert earlier in this project.

## Certification Audit Findings

A full repository-wide audit (16 categories: architecture, curriculum, navigation, forward references, cross-curriculum linking, Mermaid correctness, Quick Revision consistency, Section Review consistency, module sequencing, naming, markdown structure, accessibility, documentation consistency, duplicate content, broken links, build integrity) found:

- **1 Major finding**: the capstone (Module 35) omitted five standard closing sections — Key Takeaways, What You Just Learned, Related Topics, Glossary, Quick Revision — that both existing certified-path capstones (Security Testing, Interview Preparation) retained. Found by direct structural comparison against precedent, not assumed clean.
- **0 Critical, 0 Minor, 0 Informational findings.**

The Major finding was closed in a single, narrowly scoped fix to Module 35 only, re-validated, and confirmed resolved. Interview Questions was deliberately omitted from the capstone (matching Interview Preparation's own precedent, not Security Testing's) since the capstone is an applied synthesis exercise rather than instructional content — a stated decision, not a silent gap.

## Defects Caught During Implementation (Not Assumed Clean)

Across the 5 implementation batches, `npm run build`'s broken-link check caught:
- 4 forward-reference violations (same-path links to not-yet-built later sections written as live links instead of the Forward Reference Rule's plain "(coming soon)" text).
- 4 bare learning-path-root links (linking to a path's directory root instead of a resolving page slug) — the same defect class caught once already elsewhere in the project this session, recurring here independently and caught again by the same build check, not inherited or missed.
- 1 module-numbering issue during the initial merge to `main` (a merge-base collision briefly dropped a section during an earlier, unrelated curriculum's revert-and-remerge; not a Career & Leadership defect, but the same class of git mechanics worth remembering for any future revert-then-remerge sequence).

Every defect was fixed before its batch's commit, none deferred to a later cleanup pass.

## Scope and Limits

This certification covers structure and process, per `REFERENCE_CURRICULUM_CERTIFICATION.md`'s own stated scope — it does not certify content accuracy beyond what the certification audit's structural checks covered, and it does not certify production deployment (that remains a separate release step: merge, docs sync, tag, GitHub Release).
