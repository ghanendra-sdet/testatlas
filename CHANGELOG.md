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

## [v1.4.0] — Mobile Testing

### Added
- **Mobile Testing v1.0** (16 modules): device fragmentation, functional mobile testing, device/platform testing, mobile performance/security/diagnostics, and Application/Capstone. Added as an evidenced 11th path at Position 9 — not part of the original 10-path plan — once six certified curricula already existed to build on.
- Certified as a Reference Curriculum (`docs/architecture/MOBILE_TESTING_CERTIFICATION.md`) — TestAtlas's seventh.

### Notable
- Capstone extends the same International Money Transfer feature five other certified paths already verified at their own layer, confirming it also survives real mobile-device conditions — a sixth, distinct layer in that shared AtlasBank narrative.

## [v1.3.0] — AI for QA

### Added
- **AI for QA v1.0** (17 modules): foundations, AI-assisted testing techniques, testing AI-driven features, AI governance and security, and Application/Capstone.
- Certified as a Reference Curriculum with zero findings (`docs/architecture/AI_FOR_QA_CERTIFICATION.md`) — a second consecutive clean sprint.

### Notable
- TestAtlas's first path to expand beyond traditional testing disciplines; introduced the AtlasBank AI Support Assistant, TestAtlas's first AI-native fictional feature, permanently scoped to six question categories.

## [v1.2.0] — Performance Testing

### Added
- **Performance Testing v1.0** (17 modules): foundations, designing a performance test, executing and tooling, analysis and operations, and Application/Capstone.
- Certified as a Reference Curriculum with zero findings (`docs/architecture/PERFORMANCE_TESTING_CERTIFICATION.md`) — the first TestAtlas certification sprint to close with nothing to fix.

### Notable
- Kept concept-first and tool-neutral throughout, with JMeter introduced as a primary, not canonical, worked example.

## [v1.1.0] — Database Testing

### Added
- **Database Testing v1.0** (16 modules): foundations, core SQL and data verification, data integrity and transactions, advanced database testing, and Application/Capstone.
- Certified as a Reference Curriculum (`docs/architecture/DATABASE_TESTING_CERTIFICATION.md`).

### Notable
- Introduced **AtlasShop**, TestAtlas's second recurring fictional domain, for its second Application Module — a pattern every later path reused rather than introducing further domains of its own.

## [foundations-v1.0.0] — 2026-08-03

First complete learning path (17 modules) plus the entire production pipeline every later path reuses — curriculum design, content batches, QA review, visual sprint, SEO/accessibility pass, Engineering Review, release. Full detail in [RELEASES.md](RELEASES.md).

## [v0.2.0-architecture-freeze]

Curriculum architecture, content model, and knowledge-graph design frozen before further content was written.

---

For per-batch, in-progress detail below the level this file tracks, see the `releases/` directory.
