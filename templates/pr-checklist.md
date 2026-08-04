<!--
CONTRIBUTOR PR CHECKLIST TEMPLATE
Paste this into your PR description and check items off. This is the compact, PR-embeddable version —
for the full detailed checklists this summarizes, see CURRICULUM_CHECKLIST.md (what you self-certify)
and REVIEW_CHECKLIST.md (what your reviewer independently verifies). Delete this comment block before
publishing your PR description.
-->
## What changed

[One or two sentences.]

## Why

[Which learner or contributor problem this addresses.]

## Validation

- [ ] `npm run build` passes locally
- [ ] `npm run validate:diagrams` passes locally (if any diagram touched)
- [ ] Ran `CURRICULUM_CHECKLIST.md` against every new/changed module
- [ ] Ran `SEO_CHECKLIST.md` — including the cross-path title-collision check
- [ ] Ran `ACCESSIBILITY_CHECKLIST.md`
- [ ] Cross-Link Resolution Check complete (see `CURRICULUM_CHECKLIST.md`) — including checking prior modules for now-resolvable "(coming soon)" references
- [ ] No duplication with an existing `docs/architecture/KNOWLEDGE_GRAPH.md` node
- [ ] `docs/architecture/LEARNING_PATHS.md` updated if this completes a module, section, or path

## Scope check

- [ ] This PR is one focused change, not several unrelated ones bundled together
- [ ] If this introduces a new recurring pattern (a new callout type, a new page structure) not already in `docs/architecture/CONTENT_MODEL.md`, it's flagged explicitly below — not merged silently
- [ ] If this touches already-shipped content, the reason is a genuine defect, stated below — not a stylistic preference

## Trade-offs, assumptions, or follow-up work

[State anything a reviewer should know that isn't obvious from the diff — including any deliberate deviation from `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`'s defaults, with the evidenced reason.]
