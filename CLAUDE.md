# CLAUDE.md — TestAtlas Development Guidelines

This document establishes architectural decisions, content patterns, and working agreements for TestAtlas development. It serves as a reference for implementers (human or AI) working on the project.

## Project Context

**TestAtlas** is an open-source Software Testing curriculum — not a documentation site — designed to become one of the most comprehensive, practical, and free structured learning resources for QA Engineers worldwide. Every module, lab, project, or guide exists because it helps someone progress through that curriculum, not simply because it's another topic worth documenting.

**Mission**: Help anyone master Software Testing through practical learning, real-world projects, and open-source resources.

**Guiding Principle**: Every merge should make TestAtlas better than it was yesterday.

## Architectural Decisions

### 1. Technology Stack

- **Static Site Generator**: Docusaurus 3.10.2 (proven at scale, SEO-friendly, excellent search)
- **Deployment**: GitHub Pages via GitHub Actions
- **Search**: `@easyops-cn/docusaurus-search-local` (privacy-first, no external service)
- **Diagrams**: Mermaid (embedded, no external rendering)
- **Node Version**: 20.0+ (stable LTS)

**Why**: Minimal dependencies, excellent contributor experience, no build complexity, free hosting, works offline, future-proof.

### 2. Content Organization

**Learning Paths** (10 total): Structured progressions for different roles/goals
- `foundations/` — Prerequisite for all other paths
- `manual-testing/` — Manual test design and execution
- `api-testing/` — API testing, HTTP, payloads, responses
- `database-testing/` — SQL, data validation, state
- `automation/` — Test automation architecture, frameworks
- `performance-testing/` — Load, stress, soak, spike testing
- `security-testing/` — Threat modeling, OWASP, secure test design
- `ai-testing/` — Testing AI systems, LLM validation
- `interview-preparation/` — Job interview readiness
- `career/` — QA leadership, career growth

**Labs** (Phase 2+): Runnable exercises with setup, expected outcomes, verification
**Projects** (Phase 3+): End-to-end domain simulations (banking, e-commerce, healthcare, HR)
**Templates** (Phase 2+): Reusable test plans, bug reports, RTMs, checklists
**Resources** (Phase 2+): Quick-reference guides, diagrams, decision trees
**Interview Academy** (Phase 2+): Practical interview scenarios and answers
**Blog** (Ongoing): Project updates, learner stories, community highlights

**Why**: Separation of concerns prevents content bleed; each type serves a distinct learner need; structure scales to 500+ files without confusion.

### 3. Content Pattern — The "Why-What-When-How" Framework

Every learning chapter follows this progression (from PROJECT_CONSTITUTION.md, Section 4):

1. **Why** — Why does this matter? What risk, cost, or opportunity does it address?
2. **What** — What is it? Clear definition, not jargon-heavy.
3. **When** — When should it be used? What conditions trigger its use?
4. **How** — How is it used in real projects? Realistic scenario, not toy example.
5. **Common Mistakes** — What breaks when this is done wrong?
6. **Good Practices** — Checklists, principles, related topics

**Why**: Mirrors how experienced engineers teach; moves from principle to application; prevents theory-only content; enables pattern reuse across all 10 paths.

### 4. Writing Voice and Tone

- Write as a senior QA engineer mentoring another engineer
- Direct, conversational, confident where guidance is established
- Active voice: "Review the acceptance criteria," not "Criteria should be reviewed"
- Avoid hype, filler, corporate language ("robust," "seamless," "best-in-class")
- Use concrete examples after concepts; never define without demonstrating
- Use fictional data; never include real secrets, customer data, or private endpoints

**Why**: Builds trust; makes content actionable; distinguishes TestAtlas from generic tutorials.

### 5. Example Quality Standards

All code examples, scenarios, and test data must:

- State prerequisites and expected outcomes explicitly
- Be safe to copy and run
- Use realistic names, constraints, and data
- Explain why the chosen approach is appropriate (not just "here's code that works")
- Include setup, expected result, and cleanup where relevant
- Use fictional identifiers (fictional-bank.com, user ID 12345, etc.)

**Why**: Learners build confidence by running examples; realistic scenarios prevent false confidence; fictional data respects privacy.

### 6. Review and Merge Process

**Before opening a PR**:
1. Search existing content to avoid duplicates
2. For major content (new learning path, project simulation), open an issue first for agreement
3. Make focused changes; do not combine unrelated improvements
4. Validate all links, formatting, code examples, and assumptions

**PR Template Requirements**:
- What changed?
- Why is it useful?
- Which learner problem does it address?
- How was it validated?
- Any trade-offs or follow-up work?

**Review Criteria** (from PROJECT_CONSTITUTION.md, Section 6):
- Technical claims are correct and appropriately scoped
- Examples reflect realistic testing work
- Links work and related content is connected
- Markdown, code, diagrams render correctly
- No duplication without clear reason
- Content is maintainable as the repository grows

**Decision Priority** (from ROADMAP.md):
1. Best Practice
2. Scalability
3. Maintainability
4. Contributor Experience
5. Learner Experience

**Why**: Protects learner trust; catches errors early; prevents scale problems; maintains contributor morale.

### 7. Versioning and Content Freshness

**Current State (Phase 0-1)**: Single version ("current")
**Phase 3+ (Project Simulations)**: May need "current" vs "archived" versions when real-world contexts change

For fast-changing topics (AI, security, tools), content must:
- Identify its assumptions and scope
- Include a last-reviewed date (in frontmatter, Phase 2+)
- Be revisited annually or when major changes occur

**Why**: Prevents outdated guidance from silently misleading learners; enables community contributions to freshness tracking.

### 8. Internationalization (i18n)

Currently configured for English only; infrastructure ready for future translations.

Do not:
- Assume US context without stating it
- Use region-specific examples without explaining (e.g., "banking in the US means...")
- Hardcode idioms that don't translate

**Why**: Removes barriers for future contributors and learners worldwide.

## Development Workflow

### Making Content Changes

1. **Create a branch** from `main`
2. **Write content** following the Why-What-When-How pattern
3. **Validate locally**:
   ```bash
   npm install          # One time only
   npm run build        # Catch any errors before PR
   npm run serve        # Test locally at http://localhost:3000
   ```
4. **Check for issues**:
   - Broken links (internal: `/docs/project/...`, external: full URLs with `target="_blank"`)
   - Terminology consistency (use STYLE_GUIDE.md terminology table)
   - Markdown formatting (one `#` heading per file, `##` for sections, etc.)
   - Code examples (state prerequisites, expected outcomes, use fictional data)
5. **Open a PR** using the template; explain the learner problem you're solving
6. **Respond to review feedback** with context and respect

### Adding a New Learning Path

1. Create a folder in `learning-paths/` (e.g., `learning-paths/new-topic/`)
2. Create an `_category_.json` file to organize the sidebar
3. Create individual module files following the Why-What-When-How pattern
4. Open an issue first to discuss scope and connection to existing paths
5. Update `sidebars.ts` to wire the new path into navigation

See an existing learning path (e.g., `learning-paths/foundations/`) for the exact structure.

## Quality Gates

### Before Merging

- [ ] Content follows Why-What-When-How pattern
- [ ] Examples use realistic scenarios, fictional data
- [ ] Links are validated and external links use `target="_blank"`
- [ ] Terminology is consistent with STYLE_GUIDE.md
- [ ] Markdown is valid (checked by `npm run build`)
- [ ] No duplication with existing content
- [ ] At least one peer review completed

### Pre-Launch Checklist (New Module)

- [ ] Local build passes: `npm run build`
- [ ] Local serve works: `npm run serve`
- [ ] All links verified
- [ ] Related topics linked
- [ ] Code examples tested
- [ ] No console errors in browser dev tools
- [ ] Mobile rendering checked (responsive)
- [ ] Dark mode appearance checked

## When to Contact Maintainers

Open an issue or discussion for:
- Proposing a new learning path
- Suggesting a major content change
- Reporting broken links or outdated information
- Requesting clarification on the Constitution or Style Guide
- Sharing a community contribution

## Standards That Will Never Change

TestAtlas will not compromise on:
- Technical accuracy
- Honest, practical guidance
- Respectful collaboration
- Review before substantive changes
- Clear and maintainable content
- Proper attribution and license compliance
- Learner trust
- Real-world context
- The principle that every merge must make TestAtlas better than it was yesterday

---

**Last Updated**: 2026-08-03  
**Version**: 1.0 (Phase 0 Complete, Phase 1 Starting)  
**Maintained By**: TestAtlas Community
