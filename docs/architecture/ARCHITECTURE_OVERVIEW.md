# Architecture Overview

Where `AUTHOR_GUIDE.md` answers "how do I do X," this document answers "why does TestAtlas work this way at all." It's the narrative tour for someone trying to understand the system's shape — a new maintainer, a contributor proposing a structural change, or a returning contributor re-orienting after time away. Every claim below is backed by a source document; this file narrates the connections between them rather than restating their content.

## How TestAtlas Is Structured

Three layers, each with a different job:

1. **Learning paths** (`learning-paths/`) — the actual curriculum content, organized as role-based progressions. See `CURRICULUM_ARCHITECTURE.md` for the full path list, dependency graph, and entry points by role.
2. **Knowledge nodes** (referenced from `docs/architecture/KNOWLEDGE_GRAPH.md`) — atomic concepts (Boundary Value Analysis, a quality attribute, a metric) taught once and linked to from every path that needs them, rather than re-explained per path.
3. **Governance documents** (`docs/architecture/`, plus root-level files like `STYLE_GUIDE.md` and `CONTENT_MODEL.md`) — the rules that keep layers 1 and 2 consistent as more contributors and more paths are added.

`REPOSITORY_STANDARDS.md` documents the concrete file/folder/frontmatter conventions that implement this structure on disk.

## Why It's Structured This Way

Two failure modes shaped every major decision in TestAtlas's architecture, and both are named explicitly in the documents that resulted from hitting them:

**Duplication** — the risk of a concept (BVA, a quality attribute) being explained differently in three different paths, so a learner sees inconsistent definitions and a maintainer has to update three places instead of one. `KNOWLEDGE_GRAPH.md`'s **Progressive Extraction** principle exists specifically to prevent this: a concept stays embedded in its first host page until a second, then a *third* real reference need appears — extraction is triggered by actual reuse, never spun up speculatively "because it seems reusable."

**Drift between documentation and shipped reality** — the risk of a planning document (a module list, a roadmap milestone) staying frozen at "planned" while the actual content evolves past it, so a new contributor reads stale guidance. This happened for real, twice, discovered in the Platform Consistency Sprint (2026-08-04): `CURRICULUM_ARCHITECTURE.md` still described API Testing's original 10-module stub after 21 real modules had shipped, and `ROADMAP.md` still marked both Manual Testing and API Testing "Planned." The fix in both cases was the same: `LEARNING_PATHS.md` is the one place that gets updated continuously, with an "As Shipped" note for every section, and everything else either points to it or gets actively re-synced during periodic consistency sprints — never left to silently diverge.

A third, quieter theme: **evidence before formalization**. Every recurring pattern in TestAtlas's curriculum (the five recurring elements, Application Modules, dedicated Section Review/Solutions pages) was adopted only after it recurred at least three times, not on first appearance — see `CURRICULUM_EVOLUTION.md`'s own explicit standard, and every entry in that document demonstrating it.

## How Future Curricula Inherit the Architecture

`REFERENCE_CURRICULUM_CERTIFICATION.md` is the concrete answer: Manual Testing v1.0 and API Testing v1.0 are certified as the default every future path is built against, with every rule traced to either a formalized `CURRICULUM_EVOLUTION.md` entry or a directly observed defect from building the first two paths. A new path's workflow (`AUTHOR_GUIDE.md`'s "Workflow: proposing a new learning path") starts by reading that certification and defaulting to everything in it, deviating only with a stated, evidenced reason — the same bar API Testing itself was held to when it proposed staying within a single fictional domain rather than introducing a second one for its own Section 7.

## Governance Rules

Five rules, each demonstrated at least once in TestAtlas's own history, not stated in the abstract:

1. **Documentation describes the shipped product, not the plan for it** — `LEARNING_PATHS.md` gets updated after every section, not just at path completion.
2. **A contradiction between documentation and shipped content gets corrected, not silently propagated** — demonstrated when `CURRICULUM_EVOLUTION.md` Entry 2's Quick Revision claim was found not to match what actually shipped, and the documentation was corrected rather than the shipped content changed to match the (wrong) doc.
3. **A real design conflict gets flagged before building past it, not resolved unilaterally** — demonstrated by API Testing Section 7's domain-scope decision, raised as an explicit choice rather than either following a stale proposal or silently overriding it.
4. **Already-shipped, already-reviewed content is not retrofitted for consistency alone** — only a genuine defect justifies touching it (Manual Testing Module 3's real gap, fixed; Module 22's cosmetic inconsistency, left as documented history; Modules 1–7's incremental-formalization gap, documented rather than retrofitted — see `CURRICULUM_EVOLUTION.md` Entry 3).
5. **A pattern earns formalization after repeated evidence, not a single clean instance** — the explicit standard behind every entry in `CURRICULUM_EVOLUTION.md`.

## Evidence-Based Evolution Policy

Full detail in `CURRICULUM_EVOLUTION.md`'s own opening standard: *"a change belongs here when it alters the curriculum's structural pattern (not its content) and was adopted only after a problem recurred, not on first appearance."* Three entries currently document this in practice — the Section Review/Solutions pattern (recurred 3x before formalizing), Application Modules as a distinct type (confirmed across 4 modules' actual word counts, not a single editorial choice), and the Modules 1–7 formalization timeline (a historical fact discovered by audit, documented rather than retrofitted).

## Reference Curriculum Policy

See `REFERENCE_CURRICULUM_CERTIFICATION.md` in full. Short version: certification is a statement about structure and process, re-verifiable against evidence, not a claim that content is frozen or beyond correction — Manual Testing's own Module 3 fix happened *after* its content was first reviewed, precisely because a genuine defect doesn't get grandfathered in just because content already shipped.

## Application Module Policy

See `CURRICULUM_EVOLUTION.md` Entry 2 (and its 2026-08-04 correction) for the full rule and its evidence. The one-sentence test for whether a module should be this type: *is there a new skill here a Mini Challenge could isolate and practice?* If yes, it's an Instruction Module. If the module only combines or synthesizes material already taught, it's an Application Module — lighter structure (Quick Revision retained; Mini Challenge and the three narrative callouts omitted), `difficulty: "intermediate"`, identified at design time for a new path, not discovered after the fact.

## Review/Solutions Policy

See `CURRICULUM_EVOLUTION.md` Entry 1. Dedicated Section Review and Section Solutions pages, not bundled into the last teaching module of a section — a pattern that recurred as a real problem three times (Manual Testing Modules 3, 9, and 13 all ran long specifically because of the bundled approach) before being formalized starting Section 4. Every learning path built after that formalization — all of API Testing — adopts the dedicated-page pattern from its very first section, since the evidence bar for *this* pattern is already met; a new path doesn't need to re-earn it.

## The One Thing to Internalize

Every rule in this document exists because something concrete happened, not because it seemed like good practice in the abstract. When you're unsure whether a rule still applies to your situation, the right move is checking whether your situation is actually analogous to the evidence behind it — not assuming the rule is arbitrary, and not assuming it's absolute either.
