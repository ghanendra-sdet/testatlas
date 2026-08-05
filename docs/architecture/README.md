# TestAtlas Architecture

This directory contains the architecture that governs how TestAtlas is built. The original 11 documents below were designed before writing further educational content, following the principle: **design the system content lives within, then let content grow independently without duplication or chaos.** Nine more documents were added after three learning paths actually shipped — governance, certification, and contributor-platform documents that couldn't have been written accurately before there was real, shipped content to generalize from. See **Documents Added After First Content Shipped**, below the original 11.

## Architecture Freeze

As of this milestone (Phase 1, Milestone 2), the architecture below is **frozen**:

- No major structural changes without an architecture review
- Contributors can start writing independently against this structure
- Every chapter has a defined place
- Every learning path has a clear progression
- The project can scale from 50 pages to 500+ confidently

Changes to these documents require an explicit architecture review, not a casual PR.

## The 11 Architecture Documents

| Document | Answers |
|----------|---------|
| [CURRICULUM_ARCHITECTURE.md](./CURRICULUM_ARCHITECTURE.md) | What are all the learning paths? What order do learners follow? What are the dependencies? |
| [CONTENT_MODEL.md](./CONTENT_MODEL.md) | What does every page look like? What sections are required? How is metadata structured? |
| [KNOWLEDGE_GRAPH.md](./KNOWLEDGE_GRAPH.md) | Which concepts are taught once and referenced everywhere? How do we avoid duplication? |
| [LEARNING_PATHS.md](./LEARNING_PATHS.md) | What are the detailed objectives, modules, and audiences for each of the 10 paths? |
| [PROJECT_ARCHITECTURE.md](./PROJECT_ARCHITECTURE.md) | How are the 9 realistic domain simulations (banking, healthcare, etc.) structured? |
| [INTERVIEW_ARCHITECTURE.md](./INTERVIEW_ARCHITECTURE.md) | How does TestAtlas prepare learners for QA interviews? What formats, question banks, mocks? |
| [LAB_ARCHITECTURE.md](./LAB_ARCHITECTURE.md) | What hands-on exercises exist? How are automation, API, SQL, performance, security labs structured? |
| [BUG_MUSEUM.md](./BUG_MUSEUM.md) | How are real production defects documented? What's the reusable structure? |
| [CASE_STUDIES.md](./CASE_STUDIES.md) | How are systemic QA challenges (scaling, flakiness, compliance) documented as deep narratives? |
| [VERSIONING_STRATEGY.md](./VERSIONING_STRATEGY.md) | How does TestAtlas evolve from v0.1 to v1.0+? What's the release cadence? |
| [REAL_WORLD_EXPERIENCE_LIBRARY.md](./REAL_WORLD_EXPERIENCE_LIBRARY.md) | How is 8+ years of institutional QA knowledge captured — defects, postmortems, anti-patterns, root causes? |
| [ARCHITECTURE_DECISIONS.md](./ARCHITECTURE_DECISIONS.md) | Why was each major structural decision made — not what the structure is, but the reasoning and trade-offs behind it? |

## Documents Added After First Content Shipped

Written once Manual Testing, API Testing, and Automation Testing existed as real, shipped content — each one generalizes from actual evidence, not speculation, the same evidence-based-evolution standard `CURRICULUM_EVOLUTION.md` itself sets.

| Document | Answers |
|----------|---------|
| [SEO_GUIDELINES.md](./SEO_GUIDELINES.md) | What SEO conventions does Docusaurus handle automatically vs. require a contributor to follow by hand? |
| [VISUAL_STANDARDS.md](./VISUAL_STANDARDS.md) | What's the Mermaid diagram convention — theming, accessibility hooks, mirror-file sync, Visual IDs? |
| [CURRICULUM_EVOLUTION.md](./CURRICULUM_EVOLUTION.md) | Which structural curriculum patterns changed after shipping, why, and under what evidence bar? |
| [REFERENCE_CURRICULUM_CERTIFICATION.md](./REFERENCE_CURRICULUM_CERTIFICATION.md) | What makes Manual Testing, API Testing, and Automation Testing the certified default every future path is built against? |
| [AUTOMATION_TESTING_CERTIFICATION.md](./AUTOMATION_TESTING_CERTIFICATION.md) | Automation Testing's own certification record — what was audited, what was found, what's accepted as a known exception |
| [REPOSITORY_STANDARDS.md](./REPOSITORY_STANDARDS.md) | What file/folder/frontmatter/heading/diagram conventions does the repo already follow consistently? |
| [AUTOMATION_SPECIFICATIONS.md](./AUTOMATION_SPECIFICATIONS.md) | Implementation-ready specs for validation checks not yet built (frontmatter, headings, cross-references, duplicate metadata) |
| [ARCHITECTURE_OVERVIEW.md](./ARCHITECTURE_OVERVIEW.md) | The narrative "why does TestAtlas work this way" tour, tying governance, evolution, and certification together |

Root-level (not in this directory, but part of the same platform): `AUTHOR_GUIDE.md`, `CURRICULUM_CHECKLIST.md`, `REVIEW_CHECKLIST.md`, `SEO_CHECKLIST.md`, `ACCESSIBILITY_CHECKLIST.md`, `MERMAID_GUIDELINES.md`, `WRITING_GUIDELINES.md`, and `templates/` — the contributor-facing authoring platform. Start at `AUTHOR_GUIDE.md`, not here, if you're writing content rather than studying architecture.

## Routing Status (Live Site Wiring)

A content type only produces reachable pages once it has a registered `@docusaurus/plugin-content-docs` instance in `docusaurus.config.ts` (with a matching `id`/`path`/`routeBasePath`) and a sidebar wired into the navbar. This table is the single source of truth for what's actually live versus still architecture-only — check it before writing content for a type marked "Planned."

| Content Type | Directory | Route | Status |
|---|---|---|---|
| About/Governance docs | `docs/project/` | `/project/...` | ✅ Wired |
| Learning Paths | `learning-paths/` | `/learning-paths/...` | ✅ Wired (fixed in this milestone) |
| Blog/Notes | `blog/` | `/blog` | ✅ Wired |
| Labs | `labs/` | `/labs/...` | ⏳ Planned — directory scaffolded, no plugin instance yet |
| Project Simulations | `projects/` | `/projects/...` | ⏳ Planned — directory scaffolded, no plugin instance yet |
| Interview Academy | `interview-academy/` | `/interview-academy/...` | ⏳ Planned — directory scaffolded, no plugin instance yet |
| Resources | `resources/` | `/resources/...` | ⏳ Planned — directory scaffolded, no plugin instance yet |
| Templates | `templates/` | `/templates/...` | ⏳ Planned — directory scaffolded, no plugin instance yet |
| Bug Museum | `bug-museum/` | `/bug-museum/...` | ⏳ Planned — no directory yet, no plugin instance yet |
| Case Studies | `case-studies/` | `/case-studies/...` | ⏳ Planned — no directory yet, no plugin instance yet |
| Real-World Experience Library | `real-world-experience/` | `/real-world-experience/...` | ⏳ Planned — no directory yet, no plugin instance yet |

**Rule**: before the first page of a "Planned" content type is written, add its plugin instance to `docusaurus.config.ts`, add a sidebar file if needed, wire it into the navbar, and flip its status here to ✅ Wired.

## How These Documents Connect

```
                        CURRICULUM_ARCHITECTURE
                         (the spine: 10 paths)
                                  |
              ┌───────────────────┼───────────────────┐
              |                   |                    |
      LEARNING_PATHS      KNOWLEDGE_GRAPH        CONTENT_MODEL
      (detail per path)   (no duplication)      (page structure)
              |                   |                    |
              └───────────────────┼───────────────────┘
                                  |
        ┌─────────────┬──────────┼──────────┬─────────────┐
        |              |          |          |             |
  PROJECT_ARCH    LAB_ARCH   BUG_MUSEUM  CASE_STUDIES  INTERVIEW_ARCH
  (apply it in    (practice  (learn from (learn from   (prove you
   real domains)   it)        failures)   systemic       learned it)
                                           challenges)
        |              |          |          |             |
        └──────────────┴──────────┼──────────┴─────────────┘
                                  |
                    REAL_WORLD_EXPERIENCE_LIBRARY
                 (the raw material behind all of the above:
                  8+ years of production defects, postmortems,
                  anti-patterns, root causes, hard-won lessons)
                                  |
                        VERSIONING_STRATEGY
              (governs how all of the above ships over time,
                   v0.1 → v1.0, without breaking learners)
```

**Reading order for new contributors**: CURRICULUM_ARCHITECTURE → LEARNING_PATHS → CONTENT_MODEL → KNOWLEDGE_GRAPH → whichever of PROJECT/LAB/BUG_MUSEUM/CASE_STUDIES/INTERVIEW is relevant to what you're building → VERSIONING_STRATEGY to know which release it targets. Read ARCHITECTURE_DECISIONS.md whenever you find yourself asking "why is it built this way" — that's what it's for.

## Design Decisions That Cut Across All Documents

1. **Knowledge nodes over duplication** — Atomic concepts (e.g., Boundary Value Analysis) live in one place and are referenced everywhere, not re-explained per path.
2. **Real experience over theory** — Bug Museum, Case Studies, and the Real-World Experience Library exist because 8+ years of production QA experience is TestAtlas's differentiator versus generic tutorials.
3. **Paths, not chapters** — Learners specialize (an API tester skips Database Testing) while sharing a common Foundations base.
4. **Stability at v1.0** — v0.1–v0.9 can restructure freely; v1.0+ commits to not breaking a learner mid-path.
5. **Every new content type has a template** — Bug entries, case studies, labs, and project modules all follow reusable, documented structures so contributors don't reinvent format per submission.

## Status

**This milestone**: Architecture drafted, then reviewed against the actual repo (see the Architecture Review Report), and the three critical findings from that review have been fixed:
1. `learning-paths/` is now a registered Docusaurus docs instance (routed at `/learning-paths/...`, autogenerated sidebar, navbar entry, indexed by search) instead of an orphaned directory.
2. Path conventions across `CONTENT_MODEL.md`, `BUG_MUSEUM.md`, `CASE_STUDIES.md`, `REAL_WORLD_EXPERIENCE_LIBRARY.md`, `KNOWLEDGE_GRAPH.md`, and `VERSIONING_STRATEGY.md` are standardized to one route per content type, with a Routing Status table above as the source of truth for what's actually wired versus still planned.
3. The Bug Museum vs. Real-World Experience Library boundary is now explicit in both documents (REWL = intake taxonomy, Bug Museum = publication format for defect entries that earn a full page).

**Reasoning behind the major decisions is recorded in [ARCHITECTURE_DECISIONS.md](./ARCHITECTURE_DECISIONS.md)** as a set of Architecture Decision Records (ADRs) — the changelog for *why*, not just *what*.

**Architecture approved and frozen for its original 11 documents.** The later nine documents (see above) were added under the same discipline — evidence-based, written after real content existed to generalize from, not speculative.

**Current status (2026-08-05)**: Manual Testing v1.0 (23 modules), API Testing v1.0 (21 modules), and Automation Testing v1.0 (18 modules) are all complete and certified — 62 modules across three Reference Curricula. See `docs/architecture/LEARNING_PATHS.md` for full per-path detail and `REFERENCE_CURRICULUM_CERTIFICATION.md` for what "certified" means. TestAtlas is preparing for its `v1.0.0` public release; see `RELEASE_READINESS.md` at the repository root for the release-readiness record.

**Next milestone**: a fourth learning path, proposed against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s defaults following `AUTHOR_GUIDE.md`'s workflow — not yet started, not yet chosen. New structural changes to this directory still require a compelling, evidenced reason, not routine editing.
