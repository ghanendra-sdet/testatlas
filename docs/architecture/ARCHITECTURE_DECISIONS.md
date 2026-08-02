# Architecture Decision Records (ADRs)

This is the changelog for TestAtlas's architecture — not what the structure is (the other 11 documents cover that), but **why** it's shaped this way. When a future contributor asks "why don't we just do X instead," the answer should be here, not lost in a chat log.

## Format

Each ADR follows the same shape:

- **Status**: Proposed / Accepted / Superseded
- **Date**: When the decision was made
- **Owner**: Who's accountable for it
- **Context**: What problem or fork in the road prompted the decision
- **Decision**: What we chose
- **Why**: The reasoning
- **Consequences**: What this makes easier, what it makes harder

New architectural decisions get a new ADR, in order. Superseding an old decision means adding a new ADR that says so and marking the old one `Superseded by ADR-XXX` — the old ADR is never deleted or rewritten, because the history of "we used to think X, then learned Y" is the entire point.

---

## ADR-001: Knowledge Nodes Instead of Duplicated Content

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: The initial content plan was a linear module structure (write Manual Testing, then API Testing, then Automation, as separate self-contained tracks). Early review flagged that concepts like Boundary Value Analysis would need to be explained in at least four different learning paths, meaning four slightly different explanations of the same idea to keep in sync forever.

**Decision**: Atomic, reusable concepts ("knowledge nodes" — test design techniques, quality attributes, metrics) are written once, in one location, and every learning path that needs them links back to that single page instead of re-explaining it.

**Why**: Preventing duplicate content is cheaper than fixing it after the fact. A single source of truth per concept means an update propagates everywhere automatically, and learners never see three subtly different definitions of the same term.

**Consequences**: Makes maintenance and consistency easier at scale (500+ pages). Makes initial content planning harder — every new page must be checked against `KNOWLEDGE_GRAPH.md` before writing, which is friction contributors have to be taught to accept rather than skip.

---

## ADR-002: Learning Paths as Role-Based Progressions, Not Chapters

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: Documentation projects often default to a single linear chapter order (1, 2, 3...). TestAtlas serves distinct audiences (manual tester, SDET, performance engineer, security QA) whose ideal learning order genuinely differs.

**Decision**: Content is organized into 10 role-oriented learning paths that share a common Foundations gateway, branch based on specialization, and can reconverge (e.g., everyone eventually touches Interview Preparation).

**Why**: Forcing a security-focused learner through the full Database Testing path before they reach Security Testing wastes their time and makes the curriculum feel bloated. Paths let learners self-select without fragmenting the underlying concepts (which stay unified via ADR-001).

**Consequences**: Learners get a relevant, shorter route to competence in their specialty. Requires `CURRICULUM_ARCHITECTURE.md`'s dependency table to be kept accurate — if paths silently gain hidden prerequisites, learners hit gaps mid-path.

---

## ADR-003: Bug Museum as a Fixed-Template Publication Format

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: TestAtlas's differentiator is 8+ years of real production QA experience, and the most teachable unit of that experience is a specific defect: what broke, why, and what test would have caught it. Without a fixed structure, every contributor would format bug write-ups differently, making them harder to scan and compare.

**Decision**: Every published defect story follows a mandatory 7-section template (Story, Impact, Root Cause, The Test That Would Have Found It, Why QA Didn't Catch It, The Lesson, Prevention Strategy), tagged by domain, root-cause type, and severity.

**Why**: A consistent template turns individual anecdotes into a comparable, searchable dataset. Learners who read 20 Bug Museum entries start recognizing patterns (concurrency bugs cluster around shared state, authorization bugs cluster around role edge cases) — that pattern recognition is the actual teaching goal, and it only emerges if entries are structurally comparable.

**Consequences**: Raises the bar for what counts as a "finished" Bug Museum page (it can't just be a paragraph). This is why ADR-004 exists — not every real defect is worth that investment immediately.

---

## ADR-004: Real-World Experience Library as the Intake Layer Beneath the Bug Museum

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: Requiring every real-world observation to immediately meet the Bug Museum's full template (ADR-003) creates a high barrier that discourages capturing smaller, still-valuable lessons — a one-line edge case, a bottleneck without a full postmortem, an anti-pattern seen once. Early drafts of these two documents described near-identical "production defects" categories with no stated relationship, which the architecture review flagged as a genuine overlap risk.

**Decision**: The Real-World Experience Library (REWL) is the lower-friction intake taxonomy across nine categories (production defects, incident postmortems, anti-patterns, root causes, edge cases, bottlenecks, integration challenges, strategy decisions, failed releases). A REWL "Production Defects" entry graduates to a full Bug Museum page only when it's substantial enough to teach as a standalone lesson.

**Why**: Separates "capture the knowledge" (low friction, encourages contribution) from "polish it into a teaching artifact" (higher effort, reserved for defects with a clear, generalizable lesson). Without this split, contributors either over-invest in write-ups for minor observations or skip logging them entirely.

**Consequences**: Requires the boundary rule (documented in both `BUG_MUSEUM.md` and `REAL_WORLD_EXPERIENCE_LIBRARY.md`) to stay visible, or the overlap the review originally flagged will recur as both documents are extended independently.

---

## ADR-005: Nine Project Simulations as the Applied-Learning Layer

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: Learning paths teach concepts in isolation (test design, automation, performance). Without an integration layer, learners never practice combining disciplines the way real QA work requires — and generic example apps (a TODO list, a calculator) don't carry the domain-specific risk reasoning (financial accuracy, patient safety, inventory races) that makes testing judgment realistic.

**Decision**: Nine realistic domain simulations (Banking, E-Commerce, Healthcare, HRMS, Insurance, CRM, Food Delivery, Ride Sharing, Social Media), each walking a learner through a full QA workflow — manual testing, API testing, database testing, automation, security, performance — against one coherent, realistic product.

**Why**: Domain context changes what "risky" means. A race condition matters differently in a banking transfer than in a social media like-count. Simulating real domains, not generic apps, is what makes the risk-based thinking taught in Foundations transferable to an actual job.

**Consequences**: Nine full simulations is a large content commitment (see the architecture review's note on this being sized for more contributor capacity than the project currently has). The template in `PROJECT_ARCHITECTURE.md` explicitly allows partial/stub simulations so this can be built incrementally rather than blocking on all nine at once.

---

## ADR-006: Why-What-When-How as the Universal Content Model

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: The first content milestone (Foundations Module 1) was written without a fixed structural template and came out at 4,300 words — too long, and structured more like a narrative essay than a scannable reference page. Review feedback was that pages need a predictable shape so learners can navigate by pattern.

**Decision**: Every concept-level page follows a fixed six-part progression: Why (risk/motivation) → What (definition) → When (applicability) → How (realistic worked example) → Common Mistakes → Best Practices, with target lengths (1,500–2,500 words for a concept page) and a mandate to split anything longer into linked child pages.

**Why**: Mirrors how experienced engineers actually explain things to each other — motivation before mechanism, mechanism before application. A fixed structure also lets contributors write independently without a structural review cycle for every page, because the shape is already agreed.

**Consequences**: Content that doesn't naturally fit six sections (e.g., a tool comparison table) needs an explicitly justified deviation rather than silently ignoring the model. Enforced by human review today; not yet enforced by tooling (flagged as an open item, not yet built).

---

## ADR-007: Docusaurus Multi-Instance Docs Architecture

- **Status**: Accepted
- **Date**: 2026-08-03
- **Owner**: TestAtlas Team

**Context**: The original `docusaurus.config.ts` registered a single `@docusaurus/plugin-content-docs` instance scoped to `docs/project` (governance/meta content). `learning-paths/` was created as a separate top-level directory with real content (including the already-written Foundations module) but was never registered with any plugin instance — meaning it silently built successfully while being completely unreachable on the live site. This was caught during a formal architecture review, not by the build (Docusaurus doesn't error on directories it was never told to watch).

**Decision**: Each content type gets its own `@docusaurus/plugin-content-docs` instance with a matching `id`, `path`, and `routeBasePath`, one instance per top-level content directory (`docs/project` → `/project/...`, `learning-paths/` → `/learning-paths/...`, and so on as future types are wired). A Routing Status table in `docs/architecture/README.md` tracks which content types are actually wired versus still planned, so this gap can't recur silently.

**Why**: A content architecture is only real if it's reachable. Documenting a learning path in `LEARNING_PATHS.md` means nothing if the corresponding directory was never connected to the site. Making the wiring status explicit and checkable (rather than assumed) turns a class of silent failure into a visible checklist item.

**Consequences**: Adding a new content type (Bug Museum, Case Studies, Labs, Projects) now has a mandatory first step — register the plugin instance and flip its Routing Status row to ✅ — before any page in it is written, not after. One operational lesson from this ADR: the primary docs instance must keep its implicit `default` plugin id (giving it an explicit id broke the search bar's hardcoded lookup); only additional instances need explicit `id`s.

---

## Using This Document

- New architectural decision → new ADR, appended at the end, numbered sequentially.
- Decision reversed or replaced → new ADR explaining the change, with a note added to the old ADR's Status line (`Superseded by ADR-XXX`). Never edit or delete a past ADR's Decision/Why — the record of "why we used to think this" is the value.
- Casual content additions within the existing architecture (a new module, a new lab, a new bug entry) do **not** need an ADR — this log is for structural decisions, not content.
