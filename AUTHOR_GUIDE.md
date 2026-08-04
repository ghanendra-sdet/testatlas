# TestAtlas Author Guide

**Start here if you're writing content for TestAtlas** — a module, a Section Review page, or a whole new learning path. This document doesn't duplicate the rules living elsewhere in the repository; it tells you which document to read for which decision, in the order you'll actually need them, and gives you the concrete workflow to follow. Everything here assumes you've already read [CONTRIBUTING.md](CONTRIBUTING.md) and [PROJECT_CONSTITUTION.md](PROJECT_CONSTITUTION.md).

## The one-sentence version

Manual Testing v1.0 and API Testing v1.0 are TestAtlas's **Reference Curricula** — the certified default for how every future path is structured. See [`docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`](docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md). Read it before anything else in this guide; everything below assumes it.

## Which document answers which question

| Your question | Read this |
|---|---|
| "Why does TestAtlas work this way at all — not just how do I add to it?" | `docs/architecture/ARCHITECTURE_OVERVIEW.md` |
| "What's the overall shape of TestAtlas — paths, knowledge nodes, how they connect?" | `docs/architecture/CURRICULUM_ARCHITECTURE.md` |
| "What are TestAtlas's file/folder/frontmatter/heading conventions?" | `docs/architecture/REPOSITORY_STANDARDS.md` |
| "What structure does every module need — frontmatter, headings, recurring elements?" | `docs/architecture/CONTENT_MODEL.md` |
| "How do I write a sentence, choose a term, format a table?" | `STYLE_GUIDE.md` |
| "Has a pattern changed since the Reference Curricula shipped, and why?" | `docs/architecture/CURRICULUM_EVOLUTION.md` |
| "Does a knowledge node (BVA, a quality attribute, a metric) already exist for this concept?" | `docs/architecture/KNOWLEDGE_GRAPH.md` |
| "What's the detailed, module-by-module plan for a specific path?" | `docs/architecture/LEARNING_PATHS.md` |
| "What must be true before I mark a module done?" | `CURRICULUM_CHECKLIST.md` |
| "What does a reviewer check on my PR?" | `REVIEW_CHECKLIST.md` |
| "Is my frontmatter/keywords/description actually going to work for search?" | `SEO_CHECKLIST.md` |
| "Are my diagrams and tables actually accessible?" | `ACCESSIBILITY_CHECKLIST.md` |
| "How do I build a compliant Mermaid diagram?" | `MERMAID_GUIDELINES.md` |
| "What does good TestAtlas prose actually read like?" | `WRITING_GUIDELINES.md` |
| "What gates does a whole path need to clear before it's tagged v1.0?" | `QUALITY_GATES.md` |
| "I don't want to write a page from scratch — is there a starting skeleton?" | `templates/` |

## Workflow: writing one module

1. Confirm the module's place in its path's plan — check `LEARNING_PATHS.md` for that path. If the path doesn't have an approved architecture proposal yet, stop — that comes first (see "Workflow: proposing a new learning path" below).
2. Check `KNOWLEDGE_GRAPH.md` for whether the module's core concept is already a knowledge node taught elsewhere. If it is, link to it — don't re-teach it.
3. Copy the right template from `templates/` (Instruction Module or Application Module — see `CONTENT_MODEL.md` for which one your module actually is) and fill it in.
4. Write following `STYLE_GUIDE.md` and `WRITING_GUIDELINES.md`.
5. Before marking it done, run `CURRICULUM_CHECKLIST.md` in full, including the Cross-Link Resolution Check.
6. Run `SEO_CHECKLIST.md` and `ACCESSIBILITY_CHECKLIST.md`.
7. Run `npm run build` and `npm run validate:diagrams`.
8. Open a PR; a reviewer runs `REVIEW_CHECKLIST.md`.

## Workflow: proposing a new learning path

1. Read `REFERENCE_CURRICULUM_CERTIFICATION.md` in full — it's your default. Deviate only where you have a stated, evidenced reason, the same bar API Testing itself was held to.
2. Draft an architecture proposal using `templates/architecture-proposal-template.md`. It must cover: overview, section-by-section module breakdown with learning objectives and word-count estimates, dependency map, Review/Solutions strategy, Application-Module strategy, capstone approach, and — only if evidenced — differences from the Reference Curricula.
3. Get the proposal approved before writing any module content.
4. Build section by section. After each section: run `CURRICULUM_CHECKLIST.md` on every new module, full validation, and update `LEARNING_PATHS.md` with an "As Shipped" note for that section (including any deviation from the original proposal and why).
5. Flag — don't silently resolve — any point where you hit a real governance decision, a proposed new curriculum pattern, or a contradiction between documentation and shipped content. Use `templates/engineering-review-template.md` to report progress at natural checkpoints.
6. Once the whole path is complete, it goes through `QUALITY_GATES.md` before being tagged.

## What "Reference Curriculum" actually constrains

Read `REFERENCE_CURRICULUM_CERTIFICATION.md` for the full list, but the short version: five recurring elements on every instruction module, Application Modules as a distinct lighter-weight type from the start of any new path, dedicated Section Review/Solutions pages from Section 1 onward, and the general "propose, get approval, then build" sequence. None of this is arbitrary — every rule in that document traces back to either a documented, evidenced formalization (`CURRICULUM_EVOLUTION.md`) or a directly observed defect from building the first two paths.

## What TestAtlas deliberately does NOT want from you

- **Don't duplicate a knowledge node.** If BVA, a quality attribute, or a metric already has a home, link to it. See `KNOWLEDGE_GRAPH.md`'s Preventing Duplication checklist.
- **Don't introduce a new recurring content block** (a sixth mandatory callout type, a new page pattern) without it recurring at least 3 times with evidence first — see `CURRICULUM_EVOLUTION.md`'s own standard for why.
- **Don't retrofit already-shipped, already-reviewed content** for consistency alone. Only a genuine defect justifies touching it.
- **Don't leave a forward reference as `](#)`.** Plain "(coming soon)" text, resolved the moment the target exists — see the Forward Reference Rule in `STYLE_GUIDE.md`.
- **Don't skip the Cross-Link Resolution Check** because it feels like it can wait until the path is done. It can't — see `QUALITY_GATES.md`'s "Why This Exists" for what happens when it's skipped.

## If you get stuck

If none of the documents above answer your question, that's a real gap in this guide, not a sign you're missing something obvious — open an issue describing what you were trying to do and what you couldn't find. See "Contributor Experience" in `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md` for how this guide itself gets tested against that bar.
