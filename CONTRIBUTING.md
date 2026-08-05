# Contributing to TestAtlas

Thank you for helping improve TestAtlas. Useful contributions do not need to be large: a corrected explanation, clearer example, broken-link report, diagram, template improvement, or thoughtful review can save a learner hours of confusion.

Before contributing, read [PROJECT_CONSTITUTION.md](PROJECT_CONSTITUTION.md) and [STYLE_GUIDE.md](STYLE_GUIDE.md). They define the quality bar for the project.

## Ways to contribute

- Report inaccurate, outdated, or unclear content
- Improve wording, examples, diagrams, or navigation
- Propose a practical lab, template, checklist, or project scenario
- Add a production-inspired example that does not disclose confidential information
- Review open pull requests constructively
- Help keep links, code samples, and references current

## Before you start

Search existing issues and content before starting substantial work. This avoids duplicate effort and lets maintainers point you to related decisions or work in progress.

For a new learning path, major project simulation, repository-wide pattern, or architectural change, open an issue or discussion first. Explain the learner problem, the proposed approach, alternatives considered, and maintenance implications. Do not begin a large change until there is agreement on its direction.

## Local development setup

```bash
npm install        # once, after cloning
npm run start       # local dev server with live reload, for previewing your changes
npm run build        # production build — this is what CI/the required checks actually run
npm run validate:diagrams   # required if you touched any Mermaid diagram
```

`npm run build` is stricter than `npm run start` — it fails on broken links (`onBrokenLinks: 'throw'`) where the dev server will just render a warning. Always run the full build before opening a PR, not just the dev server.

## Writing your first piece of content

If you're adding to an existing learning path (a module, a Section Review page), start at `AUTHOR_GUIDE.md` — it's the single entry point for "which document answers which question" and the exact step-by-step workflow, including which template to copy from `templates/`.

## Contribution workflow

1. Read the relevant project standards.
2. Create a focused branch from the default branch.
3. Make the smallest complete change that solves the problem.
4. Validate links, formatting, examples, code, and assets affected by your change.
5. Open a pull request using `templates/pr-checklist.md` as your PR description.
6. Respond to review feedback with context and respect.

Do not combine unrelated changes in one pull request. A focused pull request is easier to review, easier to revert, and less likely to introduce accidental conflicts.

## Contribution examples, by size

Not sure how big a change should be? Three real shapes:

**Smallest — a typo or a broken link.** Fix it directly, one file, one focused PR. No proposal needed, no discussion required first. Example: correcting a misspelled term in a module's Glossary section.

**Small — a content correction or a clearer example.** Open a Content Correction issue first if you're not certain the fix is right (see `SUPPORT.md`); if you're confident, open the PR directly with a clear description of what was wrong and why the fix is correct. Example: a stale claim in a governance document, or an outdated cross-link.

**Larger — a new module or a structural addition.** Start at `AUTHOR_GUIDE.md`, not with the PR. A new module needs its place in an already-approved path plan; a new learning path needs a Learning Path Proposal issue before any content is written. See `docs/community/GOOD_FIRST_ISSUES.md` for a curated list of scoped starting points if you're looking for something concrete to pick up.

Match your contribution's size to the process it actually needs — a one-word fix doesn't need an architecture proposal, and a new learning path shouldn't skip one.

## Content expectations

For learning content, explain why the topic matters, what it is, when to use it, and how it works in real projects. Add realistic examples and common mistakes when they improve the lesson.

**Don't split a page just because it's long, and don't extract a shared concept into its own page just because it seems reusable.** TestAtlas follows Progressive Extraction: a concept stays embedded in its page until something else actually needs to reference it — a second reference is still fine to link into the host page; a third, or a link that would have to point awkwardly into the middle of an unrelated page, is the signal to extract it into a standalone knowledge node. The same logic applies to splitting a page in two: the trigger is a genuinely distinct learning objective, not a word count. See `docs/architecture/CONTENT_MODEL.md` and `docs/architecture/KNOWLEDGE_GRAPH.md` for the full reasoning.

For labs, include prerequisites, setup, the exercise, expected result, verification steps, and cleanup where relevant. For templates, include instructions and a completed example. For project simulations, preserve traceability between requirements, coverage, and outcomes.

Use fictional data. Never submit secrets, customer data, private endpoints, internal documentation, or material you do not have permission to share.

## Pull request expectations

In the pull request description, state:

- What changed
- Why the change is useful
- Which learner or contributor problem it addresses
- How you validated it
- Any trade-offs, assumptions, or follow-up work

All substantive changes require review before merge. Reviewers may request changes for accuracy, clarity, consistency, maintainability, or learner experience. See [GOVERNANCE.md](GOVERNANCE.md) for how decisions and reviews are handled.

## Community standard

Be respectful, specific, and constructive. Challenge ideas with evidence; do not attack people. Assume good intent, ask questions when context is missing, and make space for contributors who are still learning.

## Licensing and attribution

By contributing, you agree that your contribution is licensed under the repository's [MIT License](LICENSE). Attribute third-party work correctly and make sure external material can legally be included.
