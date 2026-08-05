# TestAtlas Roadmap

This roadmap describes the direction of TestAtlas, not a promise of fixed delivery dates. The project will prioritize quality, review capacity, and learner value over publishing content quickly.

## Guiding rule

> Every merge should make TestAtlas better than it was yesterday.

The standards behind that rule are defined in [PROJECT_CONSTITUTION.md](PROJECT_CONSTITUTION.md).

## Release Milestones

Each release is a meaningful checkpoint, not just a version bump. This is the order we're building in, aimed at a v1.0.0 public launch.

| Version | Milestone | Status |
|---|---|---|
| v0.1.0 | Repository Foundation | ✅ Complete |
| v0.2.0 | Architecture Freeze | ✅ Complete |
| v0.3.0 | Website Foundation | ✅ Complete |
| v0.4.0 | Foundations Learning Path | ✅ Complete (17/17, tagged `foundations-v1.0.0`) |
| v0.5.0 | Manual Testing | ✅ Complete (23/23), certified |
| v0.6.0 | API Testing | ✅ Complete (21/21), certified |
| v0.7.0 | Test Automation | ✅ Complete (18/18), certified — shipped ahead of Database Testing's original slot, once its own architecture proposal was ready; sequence isn't strictly first-proposed-first-shipped |
| v0.8.0 | Authoring Platform + Release Preparation | ✅ Complete — contributor documentation, templates, repository standards, community-health files |
| **v1.0.0** | **Public Launch** | **In progress** — see `RELEASE_READINESS.md` |
| v1.1.0+ | Database Testing, Performance Testing, Security Testing, AI for QA, Interview Preparation, Project Simulations + Labs, Career Growth | Planned, post-v1.0.0 |

**Revised from the original plan**: v1.0.0 was originally sequenced after Database Testing, Project Simulations, Interview Academy, and AI Testing (see the now-superseded v0.9–v0.11 entries below, kept for historical record). That sequencing is revised — v1.0.0 now ships with the three complete, certified curricula (Manual Testing, API Testing, Automation Testing) plus Foundations, rather than holding the first stable public release back for four more learning paths. Everything below v1.1.0 becomes an extension of a stable, released platform, not a precondition for reaching v1.0.0 at all — matching how the project's own actual pace (three certified paths shipped within days of each other) outstripped the original month-by-month plan.

Ideas that aren't on this list — mascot/branding, gamification, accounts, and similar — are intentionally parked in `NOT_NOW.md` at the repository root, not forgotten, just not competing with the roadmap above.

### v0.1.0 — Repository Foundation ✅

**Goal:** establish a clear, maintainable base before publishing learning content.

- Defined project identity, mission, and long-term direction
- Published the constitution, style guide, contribution guide, and governance model
- Established the repository structure for learning paths, projects, labs, templates, resources, and assets
- Added a documentation site, automated checks, and a contribution workflow

### v0.2.0 — Architecture Freeze ✅

**Goal:** design the system content lives in before writing more of it, so 500+ future pages don't fragment or duplicate.

- Curriculum architecture, content model, and knowledge-graph design (`docs/architecture/` in the repository)
- Learning path, project simulation, lab, interview, bug museum, case study, and versioning structures defined
- Architecture Decision Records capturing why each structural choice was made
- Validated end-to-end against the live site (routing, search indexing, build) before freezing

### v0.3.0 — Website Foundation

**Goal:** give the project a real front door — the homepage, not just a README.

- Homepage that states what TestAtlas is and gets a visitor to "Start Learning" in one click
- Top-level navigation connecting Learning Paths → Projects → Labs → Community
- Visual identity pass (the mascot idea in NOT_NOW.md can inform this later, not block it now)

### v0.4.0 — Foundations Learning Path ✅

**Goal:** ship a complete, reliable Path 1 that every other path builds on.

- All 17 modules written across six sections (Introduction, Software Development Context, Testing Fundamentals, Quality Mindset, Defect Management, Professional QA) — see `docs/architecture/LEARNING_PATHS.md`
- Editorial/consistency review and Prerequisites-block retrofit both complete; tagged `foundations-v1.0.0`

### v0.5.0 — Manual Testing ✅

**Goal:** the core test-design knowledge nodes every other path references — became a full 23-module path, not just an initial "Part 1" slice.

- All seven sections shipped: Test Design Foundations, Core Test Design Techniques (BVA, Equivalence Partitioning, Decision Tables, State Transitions, Combinatorial/Pairwise, Error Guessing), Writing and Organizing Tests, Exploratory and Ad Hoc Testing, Reporting and Communication, Applying Test Design Across Domains, and a Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 2
- A Curriculum Consistency Sprint (2026-08-04) aligned documentation with shipped reality; committed, not yet tagged `manual-testing-v1.0.0`

### v0.6.0 — API Testing ✅

**Goal:** apply test design to APIs — became a full 21-module path, using Manual Testing as its reference implementation, not just an initial "Part 1" slice.

- All seven sections shipped: API Testing Foundations, Data/Contracts/Test Cases, Auth and Access Control, Integration and Resilience, API Security Testing, Performance and Tooling, and Application/Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 3
- Certified as a Reference Curriculum

### v0.7.0 — Test Automation ✅

**Goal:** turn designed tests into maintainable automation — an 18-module path using both Manual Testing and API Testing as reference implementations, shipped ahead of Database Testing in the original sequence once its own architecture proposal was approved.

- Five sections shipped: Automation Foundations, Framework and Design Patterns, Reliability and Verification, Reporting and Execution at Scale, and Application/Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 5
- Certified as a Reference Curriculum with the cleanest audit result of the three paths (`docs/architecture/AUTOMATION_TESTING_CERTIFICATION.md`)

### v0.8.0 — Authoring Platform + Release Preparation ✅

**Goal:** turn three shipped paths' proven patterns into a reusable platform for every future path, then prepare for public release.

- `AUTHOR_GUIDE.md`, per-concern checklists, nine contributor templates, `docs/architecture/REPOSITORY_STANDARDS.md`, `docs/architecture/AUTOMATION_SPECIFICATIONS.md`
- `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, `CHANGELOG.md`, GitHub issue/PR templates, `RELEASE_READINESS.md`

### v1.1.0+ — Planned, Post-Launch (originally sequenced before v1.0.0, now revised)

The following were originally planned as v0.9–v0.11, blocking the first public release. They're now v1.1+ work, built on a stable, already-released platform instead of gating the release:

- **Database Testing** (SQL Fundamentals) — SQL basics for QA, writing assertions, data integrity testing
- **Performance Testing**, **Security Testing**, **AI for QA** — each proposed against `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`'s defaults, following `AUTHOR_GUIDE.md`'s workflow, same as every path so far
- **Project Simulations + Labs** — first 2–3 end-to-end project simulations, first wave of runnable labs
- **Interview Academy** — question bank, mock interview structures, scenario-based practice
- **Career Growth in Quality Engineering**

### v1.0.0 — Public Launch

**Goal:** a stable, complete resource ready for a public audience.

- All quality gates from `docs/architecture/VERSIONING_STRATEGY.md` met
- Structure frozen for learners — starting a path after v1.0.0 means finishing it without disruption

### Beyond v1.0.0 — Community Ecosystem

Once the core resource is live and stable: contributor recognition, translation and accessibility initiatives, and a transparent process for community proposals. Not before.

## How priorities are chosen

Proposed work is evaluated using the project's decision order:

1. Best Practice
2. Scalability
3. Maintainability
4. Contributor Experience
5. Learner Experience

The roadmap may change when evidence shows a better route. Architectural changes and major content patterns require documented discussion under [GOVERNANCE.md](GOVERNANCE.md).
