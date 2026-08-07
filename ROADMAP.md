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
| v1.0.0 | Public Launch | ✅ Complete — Manual Testing, API Testing, Automation Testing certified, plus Foundations (79 modules) |
| v1.1.0 | Database Testing | ✅ Complete (16/16), certified |
| v1.2.0 | Performance Testing | ✅ Complete (17/17), certified |
| v1.3.0 | AI for QA | ✅ Complete (17/17), certified |
| v1.4.0 | Mobile Testing | ✅ Complete (16/16), certified — added as an evidenced 11th path (Position 9), not part of the original 10-path plan; see `docs/architecture/LEARNING_PATHS.md` |
| v1.1.0 | Security Testing | ✅ Complete (22/22), certified — see `docs/architecture/SECURITY_TESTING_CERTIFICATION.md` |
| v1.2.0 | Interview Preparation | ✅ Complete (21/21), certified — built on `feature/interview-preparation`, merged after practitioner review; see `docs/architecture/LEARNING_PATHS.md`, Path 10 |
| **v1.3.0+** | **Project Simulations + Labs, Career Growth** | **Planned** — paused for real learner/contributor feedback before starting; see `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`'s closing note |

**Revised from the original plan**: v1.0.0 was originally sequenced after Database Testing, Project Simulations, Interview Academy, and AI Testing (see the now-superseded v0.9–v0.11 entries below, kept for historical record). That sequencing was revised — v1.0.0 shipped with the three complete, certified curricula (Manual Testing, API Testing, Automation Testing) plus Foundations, rather than holding the first stable public release back for four more learning paths. v1.1.0 through v1.4.0 then shipped as extensions of that stable, released platform — Database Testing, Performance Testing, AI for QA, and Mobile Testing, each independently certified — matching the project's own actual pace (seven certified paths shipped within days of each other) rather than the original month-by-month plan. With nine certified curricula and 171 modules now live (188 including Foundations), active curriculum work is deliberately paused before the next path: the next path starts from real feedback, not automatically.

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

### v1.0.0 — Public Launch ✅

**Goal:** a stable, complete resource ready for a public audience.

- All quality gates from `docs/architecture/VERSIONING_STRATEGY.md` met
- Structure frozen for learners — starting a path after v1.0.0 means finishing it without disruption

### v1.1.0 — Database Testing ✅

**Goal:** the data-layer verification skills every path from here on can reference — SQL fundamentals, schema and constraint testing, transactional integrity, migration and backup validation.

- All five sections shipped: Database Testing Foundations, Core SQL and Data Verification, Data Integrity and Transactions, Advanced Database Testing, and Application/Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 5
- Certified as a Reference Curriculum (`docs/architecture/DATABASE_TESTING_CERTIFICATION.md`); introduced **AtlasShop** as TestAtlas's second recurring fictional domain

### v1.2.0 — Performance Testing ✅

**Goal:** load, stress, and spike testing designed around realistic traffic and stated SLOs, not arbitrary numbers — reusing Database Testing's own QA-level slow-query recognition rather than re-teaching it.

- All five sections shipped: Performance Testing Foundations, Designing a Performance Test, Executing and Tooling, Analysis and Operations, and Application/Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 6
- Certified as a Reference Curriculum with **zero findings** (`docs/architecture/PERFORMANCE_TESTING_CERTIFICATION.md`) — the first TestAtlas certification sprint to close with nothing to fix

### v1.3.0 — AI for QA ✅

**Goal:** TestAtlas's first AI-native path — using AI to accelerate testing, and testing AI-driven features themselves, kept deliberately distinct throughout.

- All five sections shipped: Foundations, AI-Assisted Testing Techniques, Testing AI-Driven Features, AI Governance and Security, and Application/Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 8
- Certified as a Reference Curriculum with zero findings (`docs/architecture/AI_FOR_QA_CERTIFICATION.md`); introduced the **AtlasBank AI Support Assistant**, TestAtlas's first AI-native fictional feature, permanently scoped to six question categories

### v1.4.0 — Mobile Testing ✅

**Goal:** testing beyond web and API — device fragmentation, offline behavior, hardware and permissions, and mobile-specific performance and security, added as an evidenced 11th path once six certified curricula already existed to build on.

- All five sections shipped: Mobile Testing Foundations, Functional Mobile Testing, Device and Platform Testing, Mobile Performance/Security/Diagnostics, and Application/Capstone — see `docs/architecture/LEARNING_PATHS.md`, Path 9
- Certified as a Reference Curriculum (`docs/architecture/MOBILE_TESTING_CERTIFICATION.md`); capstone extends the same International Money Transfer feature five other certified paths already verified, confirming it also survives real mobile-device conditions

### v1.5.0+ — Planned, Feedback-Gated

With nine certified curricula and 188 modules live (including Foundations), further curriculum work is deliberately paused for real learner and contributor feedback before it resumes — see `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`'s closing note. When it does resume, candidates are:

- **Project Simulations + Labs** — first 2–3 end-to-end project simulations, first wave of runnable labs
- **Career Growth in Quality Engineering** — building a test strategy, leading a QA team, growing beyond individual execution
- **Career Growth in Quality Engineering**

Each still gets a written architecture proposal, reviewed and approved before any module content is written, following the six most recent paths' own example — but the trigger for starting is feedback and deliberate decision, not this roadmap alone.

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
