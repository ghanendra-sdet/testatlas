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
| v0.3.0 | Website Foundation | Planned |
| v0.4.0 | Foundations Learning Path | Planned |
| v0.5.0 | Manual Testing (Part 1) | Planned |
| v0.6.0 | API Testing (Part 1) | Planned |
| v0.7.0 | Database Testing (SQL Fundamentals) | Planned |
| v0.8.0 | Test Automation (Playwright) | Planned |
| v0.9.0 | Project Simulations + Labs | Planned |
| v0.10.0 | Interview Academy | Planned |
| v0.11.0 | AI Testing | Planned |
| v1.0.0 | Public Launch | Planned |

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

### v0.4.0 — Foundations Learning Path

**Goal:** ship a complete, reliable Path 1 that every other path builds on.

- Remaining Foundations modules (role of QA, SDLC, risk-based testing, quality attributes, metrics)

### v0.5.0 — Manual Testing (Part 1)

**Goal:** the core test-design knowledge nodes every other path will reference.

- Test design fundamentals, Boundary Value Analysis, Equivalence Partitioning, Decision Tables

### v0.6.0 — API Testing (Part 1)

**Goal:** apply test design to APIs.

- HTTP basics, JSON validation, designing API test cases, authentication testing

### v0.7.0 — Database Testing (SQL Fundamentals)

**Goal:** give testers enough SQL to verify state, not just click through UI.

- SQL basics for QA, writing assertions, data integrity testing

### v0.8.0 — Test Automation (Playwright)

**Goal:** turn designed tests into maintainable automation.

- Automation principles, page object model, CI/CD integration, flakiness

### v0.9.0 — Project Simulations + Labs

**Goal:** connect concepts to realistic, end-to-end domain work.

- First 2–3 project simulations (starting with high-value domains such as banking and e-commerce)
- First wave of runnable labs (automation, API, SQL)

### v0.10.0 — Interview Academy

**Goal:** turn learning into job readiness.

- Interview question bank, mock interview structures, scenario-based practice

### v0.11.0 — AI Testing

**Goal:** cover testing AI-driven features and using AI in QA work, with clear limits.

- Testing LLM outputs, prompt testing fundamentals, responsible-use guidance

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
