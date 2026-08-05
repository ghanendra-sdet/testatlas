# GitHub Labels

The canonical label taxonomy for TestAtlas's issues and pull requests. Summarized in `docs/architecture/VERSIONING_STRATEGY.md`'s Labels Strategy section — this document is the detailed, ready-to-create reference; that one states the underlying policy (deliberately small, no one-off labels).

Ready to create via `gh label create` or the GitHub UI. Hex colors are suggestions, chosen for rough visual grouping (type = blue-ish, status = yellow/red, path = green), not a strict requirement.

## Type (exactly one per issue/PR)

| Label | Color | Description |
|---|---|---|
| `content` | `#0E8A16` | A learning module or content page |
| `bug` | `#D73A4A` | A problem with the site itself, not content |
| `proposal` | `#5319E7` | A new learning path or major structural change |
| `question` | `#D876E3` | A general question, not a bug or content issue |
| `docs` | `#0075CA` | Governance or contributor documentation, not learner content |

## Status

| Label | Color | Description |
|---|---|---|
| `needs-triage` | `#FBCA04` | Default on a new issue; removed once a maintainer has reviewed it |
| `needs-decision` | `#D93F0B` | A genuine architecture/governance question is open, per `GOVERNANCE.md` |
| `blocked` | `#B60205` | Waiting on something external before work can continue |
| `in-progress` | `#1D76DB` | Actively being worked on |

## Contribution difficulty (optional, content/docs issues only)

| Label | Color | Description |
|---|---|---|
| `good first issue` | `#7057FF` | Small, well-scoped, doesn't require deep repo context — see `docs/community/GOOD_FIRST_ISSUES.md` |
| `help wanted` | `#008672` | Open for anyone, not necessarily small — maintainers would welcome a contributor picking it up |

## Curriculum path (optional, content-type issues only)

| Label | Color | Description |
|---|---|---|
| `foundations` | `#C5DEF5` | Foundations of Software Testing |
| `manual-testing` | `#C5DEF5` | Manual Testing path |
| `api-testing` | `#C5DEF5` | API Testing path |
| `automation-testing` | `#C5DEF5` | Test Automation path |

Add one per future path as it ships, matching the path's directory name under `learning-paths/`.

## What NOT to add

Per `VERSIONING_STRATEGY.md`'s policy: no label for a one-off situation. If you're tempted to create a new label for something that will only ever apply to one or two issues, use a clear title and description instead — labels exist for filtering across many issues, not describing one.
