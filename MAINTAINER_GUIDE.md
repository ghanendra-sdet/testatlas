# Maintainer Guide

The practical, task-level companion to `GOVERNANCE.md` — that document defines roles and decision-making; this one is the checklist for actually doing maintainer work day to day.

## Triaging a new issue

1. Confirm it has a type label (`content`, `bug`, `proposal`, `question`, `docs`) — apply one if the template didn't set it.
2. Remove `needs-triage` once you've read it and confirmed it's not a duplicate.
3. For a `content` issue: verify the claim against the actual page before assuming it's correct — a reporter's read can itself be mistaken.
4. For a `proposal` issue: this is a Learning Path Proposal (the lightweight pitch, per `AUTHOR_GUIDE.md`), not yet a full architecture proposal — respond with genuine engagement (learner problem, alternatives considered), not a rubber stamp.
5. If it's small and well-scoped, consider adding `good first issue` — see `docs/community/GOOD_FIRST_ISSUES.md` for what that bar looks like in practice.
6. Assign a milestone if it's targeted for a specific release; leave unmilestoned if it's genuinely unscheduled.

## Reviewing a pull request

Run `REVIEW_CHECKLIST.md` in full — it's written for exactly this moment, not just as reference material. Specifically:

- Verify `npm run build` and `npm run validate:diagrams` actually pass — don't trust "I ran it locally" without checking yourself.
- For any content PR, confirm the module type (Instruction vs. Application) is correct before checking its structure against the right template.
- Check whether this PR resolves a `(coming soon)` reference in an earlier module — if it does and the author didn't update it, that's a real, required fix before merge, not a nitpick.
- If the PR touches already-shipped content, the stated reason needs to be a genuine defect, not a stylistic preference — ask, don't assume, if it's unclear.
- If a new recurring pattern appears (a new callout type, a new page structure) not already in `docs/architecture/CONTENT_MODEL.md`, don't merge it silently — it hasn't earned formalization yet (`docs/architecture/CURRICULUM_EVOLUTION.md`'s evidence bar), ask the author to flag it explicitly instead.

## Merging

Per `GOVERNANCE.md`: substantive changes need at least one reviewer who isn't the author. Minor mechanical corrections (typos, broken-link fixes with no effect on meaning) can be merged directly. Squash or merge commit, either is fine — this repo doesn't currently enforce one strategy; use judgment based on whether the PR's individual commits are independently meaningful.

## Cutting a release

Full process in `docs/architecture/RELEASE_WORKFLOW.md`. Short version: confirm every gate in `QUALITY_GATES.md` (for a curriculum release) or run the equivalent site-level checklist (for a platform release, like this one), update `CHANGELOG.md` and `RELEASES.md`, tag, and only then publish the GitHub Release.

## Managing labels and milestones

Taxonomy in `docs/community/LABELS.md`; policy in `docs/architecture/VERSIONING_STRATEGY.md`. Don't create a new label for a one-off situation. Don't create a milestone below the site-release level — a single module's progress belongs in `docs/architecture/LEARNING_PATHS.md`'s per-path notes, not a GitHub milestone.

## Handling a governance or architecture question

If an issue or PR surfaces something that's genuinely a `needs-decision` situation — a new curriculum pattern, a real conflict between documented policy and a proposed change — don't resolve it unilaterally in a comment thread. Follow `GOVERNANCE.md`'s decision-making order (Best Practice → Scalability → Maintainability → Contributor Experience → Learner Experience), and if it has broad or lasting impact, record the rationale in a dedicated decision record, not just the issue thread.

## Handling a Code of Conduct report

Follow `CODE_OF_CONDUCT.md`'s Enforcement section directly. Privacy first, proportionate response, document the decision per `GOVERNANCE.md`'s maintainer accountability standard — maintainers are held to the same conduct standard as anyone else.

## Stepping back

If you need to step back from maintaining, `GOVERNANCE.md`'s "Maintainer selection and removal" section covers stepping down cleanly — say so explicitly rather than going quiet, so remaining maintainers aren't left guessing about capacity.
