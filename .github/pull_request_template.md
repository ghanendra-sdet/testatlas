<!--
See templates/pr-checklist.md for the full version of this checklist with explanations.
This is the compact, GitHub-native version — fill it in directly.
-->

## What changed

## Why

<!-- Which learner or contributor problem does this address? -->

## Validation

- [ ] `npm run build` passes locally
- [ ] `npm run validate:diagrams` passes locally (if any diagram touched)
- [ ] Ran `CURRICULUM_CHECKLIST.md` against every new/changed module (if applicable)
- [ ] Ran `SEO_CHECKLIST.md` and `ACCESSIBILITY_CHECKLIST.md` (if applicable)
- [ ] Cross-Link Resolution Check complete (if a module was added or completed)
- [ ] No duplication with an existing `docs/architecture/KNOWLEDGE_GRAPH.md` node

## Scope check

- [ ] This PR is one focused change, not several unrelated ones bundled together
- [ ] If this introduces a new recurring pattern not already in `docs/architecture/CONTENT_MODEL.md`, it's flagged explicitly below, not merged silently
- [ ] If this touches already-shipped content, the reason is a genuine defect (stated below), not a stylistic preference

## Trade-offs, assumptions, or follow-up work

<!-- Anything a reviewer should know that isn't obvious from the diff. -->
