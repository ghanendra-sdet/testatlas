# Changelog

All notable changes to TestAtlas are documented here, following the spirit of [Keep a Changelog](https://keepachangelog.com/). This file is the terse, scannable version-bump log; for the full narrative behind each release — what changed, why, and what's next — see [RELEASES.md](RELEASES.md), the curated, high-level record this file summarizes.

TestAtlas uses two independent version schemes, both explained in [ROADMAP.md](ROADMAP.md): the site's own `v0.x` build-out sequence, and per-path curriculum-product versioning (`foundations-v1.0.0`, `manual-testing-v1.0.0`, and so on). This file tracks the site-level releases.

## [Unreleased] — v1.0.0

### Added
- **Three newly certified learning paths**: Manual Testing v1.0 (23 modules), API Testing v1.0 (21 modules), Automation Testing v1.0 (18 modules) — 62 modules, each following the certified Reference Curriculum architecture. Combined with Foundations' 17 modules (shipped prior to this release), **79 modules total ship in v1.0.0**.
- **Reference Curriculum Certification** (`docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`) and per-path certification records.
- **TestAtlas Authoring Platform**: `AUTHOR_GUIDE.md`, `CURRICULUM_CHECKLIST.md`, `REVIEW_CHECKLIST.md`, `SEO_CHECKLIST.md`, `ACCESSIBILITY_CHECKLIST.md`, `MERMAID_GUIDELINES.md`, `WRITING_GUIDELINES.md`, and nine contributor templates under `templates/`.
- **Repository standards and automation specifications** (`docs/architecture/REPOSITORY_STANDARDS.md`, `docs/architecture/AUTOMATION_SPECIFICATIONS.md`).
- **Governance and community-health files**: `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, GitHub issue and pull request templates.

### Changed
- `README.md`, `ROADMAP.md`, and `docs/architecture/CURRICULUM_ARCHITECTURE.md` updated to describe shipped reality rather than original planning-stage stubs.

## [foundations-v1.0.0] — 2026-08-03

First complete learning path (17 modules) plus the entire production pipeline every later path reuses — curriculum design, content batches, QA review, visual sprint, SEO/accessibility pass, Engineering Review, release. Full detail in [RELEASES.md](RELEASES.md).

## [v0.2.0-architecture-freeze]

Curriculum architecture, content model, and knowledge-graph design frozen before further content was written.

---

For per-batch, in-progress detail below the level this file tracks, see the `releases/` directory.
