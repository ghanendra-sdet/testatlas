# Versioning Strategy

This document defines how TestAtlas evolves from v0.1 through v1.0+ — what's included in each version, the release cadence, and how content changes between versions.

**Status note (2026-08-05)**: the phased timeline below (Phase 1 "August 2026," Phase 3 v1.0 "April 2027") was written speculatively, before any content existed, and reality has significantly outpaced it — three full, certified learning paths (Manual Testing, API Testing, Automation Testing, 62 modules) shipped within days of each other, and v1.0.0 is releasing now, in August 2026, not April 2027. The month-by-month phase structure below is preserved as a record of the original plan, not a current forecast — treat the **Version Numbering**, **Content Stability**, **Breaking Changes**, **Release Checklist**, and **Sunset Policy** sections as current policy; treat the dated phase breakdown as historical planning content, superseded by `ROADMAP.md`'s milestone table and `docs/architecture/LEARNING_PATHS.md`'s actual per-path progress notes for current status.

## Design Principle

TestAtlas doesn't wait for perfection. We release small, frequent versions with clear promises about what's included and what's not. Each version is a stable snapshot; learners can follow a v0.5 learning path and complete it without disruption.

## Version Numbering

**Major.Minor.Patch** (e.g., 0.1.0, 0.5.0, 1.0.0)

- **Major** (0 → 1): Fundamental changes to curriculum, structure, or scope
- **Minor** (0.1 → 0.2): New content, new learning paths, significant additions
- **Patch** (0.1.0 → 0.1.1): Bug fixes, clarifications, typos (no new content)

---

## Phase 1: v0.1–v0.9 (Foundation Building)

**Timeline**: August 2026 – December 2026  
**Focus**: Core learning paths and core concepts

### v0.1 (August 2026)
**Release**: This milestone  
**Content**: 
- ✓ Foundations of Software Testing (1 module)
- ✓ Manual Testing and Test Design (partial: BVA, Equivalence Partitioning)
- ✓ Test Automation basics (5 modules)
- ✓ Architecture documentation (11 docs)
- ✓ 5 foundational concepts as knowledge nodes

**Not Included**:
- Detailed learning paths
- Labs or projects
- Case studies or bug museum
- Interview preparation
- Career path

**Learners Can Do**:
- Understand what testing is
- Learn basic test design
- Start learning automation
- Understand the full curriculum structure

### v0.2–v0.4 (September–October 2026)
**Focus**: Core learning paths expansion  
**Content Added Each Version**:
- One complete learning path (Manual Testing path in v0.2, API Testing in v0.3, Database Testing in v0.4)
- 10–15 new knowledge nodes
- Labs for each new path

### v0.5 (November 2026)
**Release**: Stability Release  
**Content**:
- ✓ Foundations
- ✓ Manual Testing and Test Design (complete)
- ✓ API Testing (complete)
- ✓ Database Testing (complete)
- ✓ Test Automation (complete)
- ✓ 15 foundational labs (automation, API, SQL, test design)
- ✓ Interview Preparation path (partial)

**Not Included Yet**:
- Performance Testing
- Security Testing
- AI Testing
- Projects and Case Studies
- Bug Museum (started but sparse)

**Learners Can Do**:
- Complete any single learning path
- Build practical skills with labs
- Prepare for QA job interviews

---

## Phase 2: v0.6–v0.9 (Specialization)

### v0.6–v0.7 (December 2026 – January 2027)
**Focus**: Performance and Security paths  
**Content Added**:
- Performance Testing (complete learning path)
- Security Testing (complete learning path)
- 20 additional labs
- 10 Bug Museum entries
- Interview preparation (complete)

### v0.8 (February 2027)
**Focus**: Project Simulations  
**Content Added**:
- 3 Project Simulations (Banking, E-Commerce, Healthcare)
- Detailed workflows for each project
- Integration with existing learning paths

### v0.9 (March 2027)
**Focus**: Case Studies and Real-World Examples  
**Content Added**:
- 5 Case Studies (scaling, flakiness, compliance, etc.)
- 20+ Bug Museum entries
- Career path (partial)

**At v0.9, TestAtlas has**:
- ✓ 10 complete learning paths
- ✓ 50+ knowledge nodes (atomic concepts)
- ✓ 30+ labs
- ✓ 3–5 project simulations
- ✓ 5 case studies
- ✓ 20+ bug museum entries
- ✓ Interview preparation
- ✓ Career path (started)
- **Total Content**: 30,000+ words, 500+ pages if printed

---

## Phase 3: v1.0+ (Stability and Scale)

### v1.0 (April 2027)
**Release**: Production Ready  
**What's Included**:
- ✓ All 10 learning paths (complete)
- ✓ 100+ knowledge nodes
- ✓ 50+ labs (all types: automation, API, SQL, performance, security, test design)
- ✓ 9 project simulations (banking, e-commerce, healthcare, HRMS, insurance, CRM, food delivery, ride-sharing, social media)
- ✓ 10 case studies
- ✓ 50+ bug museum entries
- ✓ Complete career path
- ✓ Interview preparation + mock interviews
- ✓ Glossary, style guide, API documentation

**Quality Gates**:
- 98%+ of links working
- Mobile responsive throughout
- Dark mode tested
- Search functionality working
- No major technical debt

**Stability Promise**:
> Starting with v1.0, TestAtlas guarantees that learners can start a learning path and complete it without major disruptions. Content will evolve, but structure is stable.

### v1.x (May 2027+)
**Release Cadence**: New minor version every 2–3 months

#### v1.1: Expanding Specialty Paths
- New path: Accessibility Testing
- New path: Localization Testing
- Expanded: AI and Testing (as field evolves)
- 30 additional labs

#### v1.2: Advanced Topics
- New path: DevOps and QA
- Advanced: Testing in Microservices
- Advanced: Contract Testing
- 15 new case studies

#### v2.0 (Future)
Only when we have fundamental insights to add:
- New learning architecture (if knowledge graph approach needs rethinking)
- Major curriculum restructure (if experience shows different progression is better)
- Platform change (Docusaurus → something else)

---

## Content Stability Across Versions

### Guaranteed Stable
- Learning paths and their progression
- Knowledge nodes (core concepts)
- Project simulation domain structures

### May Change
- Number of modules within a path (v0.5 might have 10, v1.0 might have 15)
- Lab structure (new labs added, old ones improved)
- Bug museum and case studies (new entries added, old ones clarified)

### Archive, Don't Delete
If something becomes outdated (tool deprecated, technique superseded):
1. Move to `docs/project/archive/deprecated-topic` (served at `/project/archive/deprecated-topic`)
2. Add a note: "This is now covered in [new location]"
3. Update KNOWLEDGE_GRAPH.md to reflect the change

Example:
> **Note**: This page covered [Old Approach], which is now covered in [New Page]. [Old Approach] is still valid but [New Approach] is preferred.

---

## Version-Specific Content

When content differs significantly between versions, we version it:

### Example: Automation Tools Comparison

**v0.1–v0.5**: Focuses on Playwright, mentions Selenium  
**v1.0**: Covers Playwright, Selenium, Cypress, Robot Framework  
**Future**: AI-powered automation tools as they emerge

Mark version-specific content in frontmatter:
```yaml
---
title: "Test Automation Frameworks"
introduced_in: "0.5"
updated_in: "1.0"
current_state: "stable"
---
```

---

## Breaking Changes (Rare)

A breaking change only happens for major version bumps and is documented prominently.

**Example Breaking Change** (hypothetical v2.0):
> If we redesigned the learning path structure from "Manual Testing" to "Test Design" as a cross-cutting concept, v1.x learners would need a migration guide:
> 
> v1.0 path: Manual Testing → API Testing → Automation
> v2.0 path: Test Design (core) → API Testing, Automation, Security as applications
> 
> **Migration**: All v1.0 content links updated; navigation shows "This content is from v1.0 and structure has changed in v2.0"

---

## Release Checklist

Before releasing any version:

**Content Quality**
- [ ] All knowledge nodes reviewed for accuracy
- [ ] No duplicate content within the version
- [ ] Cross-links checked (internal, external)
- [ ] Code examples tested
- [ ] Grammar and spelling checked

**Platform Quality**
- [ ] Build passes: `npm run build`
- [ ] Serve works: `npm run serve`
- [ ] Search indexing complete
- [ ] Sitemap generated
- [ ] Mobile rendering checked
- [ ] Dark mode rendering checked
- [ ] Accessibility checked (basic)

**Documentation**
- [ ] Changelog updated
- [ ] README reflects new content
- [ ] Version history documented
- [ ] Migration guide (if applicable)

**Release**
- [ ] GitHub Release created with notes
- [ ] Deployed to GitHub Pages
- [ ] Social media announcement
- [ ] Email to learners (if subscribed)

---

## Labels Strategy

A small, deliberately limited label set — more labels than anyone can keep straight defeats the point of labeling at all. Full taxonomy, including suggested colors and exact descriptions ready to create on GitHub, lives in `docs/community/LABELS.md`; this section states the policy.

**Categories**: Type (exactly one per issue/PR — `content`, `bug`, `proposal`, `question`, `docs`), Status (`needs-triage`, `needs-decision`, `blocked`, `in-progress`), contribution-difficulty (`good first issue`, `help wanted`), and curriculum path (optional, content-type issues only — one per shipped path).

Don't invent a new label for a one-off situation — use a clear issue title and description instead. Labels exist for filtering across many issues, not for describing one.

## Milestone Strategy

A milestone represents one release, matching `CHANGELOG.md`'s entries — `v1.0.0`, `v1.1.0`, and so on. Every issue and PR intended for a specific release gets that release's milestone; anything without a milestone is unscheduled, not implicitly "next."

Don't create a milestone for a partial unit of work (a single module, a single section) — a learning path's own progress is tracked in `docs/architecture/LEARNING_PATHS.md`'s per-path "As Shipped" notes, not duplicated into GitHub milestones. Milestones exist at the site-release level, matching the granularity `ROADMAP.md` and `CHANGELOG.md` already track.

## Long-Term Vision (v2.0+)

Beyond v1.0, TestAtlas could evolve:

1. **Community Contributions**: v1.x stabilizes the structure so contributors can add domain-specific content independently

2. **Translations**: As structure stabilizes, translations become viable (v1.0 is a good checkpoint)

3. **Specialization**: New paths for emerging areas (AI Testing, Accessibility, Localization) as separate branches

4. **Interactive Elements**: v1.0+ could add simulators, interactive labs, or live coding environments

5. **Certification**: v1.0 is stable enough that a "TestAtlas Certified" credential becomes meaningful

---

## Version Timeline

```
v0.1    v0.2    v0.3    v0.4    v0.5    v0.6    v0.7    v0.8    v0.9    v1.0
Aug     Sep     Sep     Oct     Nov     Dec     Jan     Feb     Mar     Apr
2026    2026    2026    2026    2026    2026    2027    2027    2027    2027
|-------|-------|-------|-------|-------|-------|-------|-------|-------|
Foundation         Core Paths         Specialization            v1.0 Ready
Building          Expansion          & Simulation
```

---

## Communication Strategy

### For v0.1–v0.9 (Unstable)
- Clearly mark as "In Development"
- Learners warned: structure and content may change
- Regular updates announced (what's new, what changed)
- "Stable paths" marked (unlikely to change)

### For v1.0+ (Stable)
- Learners can commit to paths; we commit to not breaking them
- New content added; old content rarely changed
- Clear changelog for each update
- Breaking changes only in major versions

### For Each Release
- **GitHub Release Notes**: What's new, what changed, known issues
- **Changelog**: Detailed list by content type
- **Migration Guide**: If structure changed ("v0.5 to v0.6: API Testing reorganized")
- **Social Media**: Short announcement ("TestAtlas v0.8 adds Performance and Security testing paths")

---

## Sunset Policy

Content rarely disappears; it evolves. But if something becomes truly obsolete:

1. **Deprecation Notice** (1 version before removal)
   > This content is deprecated as of v1.2. It will be archived in v1.3. See [replacement content] instead.

2. **Archive** (next version)
   > Moved to `docs/project/archive/deprecated-XXX` with a note explaining why and where to find the replacement.

3. **Reference from Archive**
   > If someone lands on the archived page, they see: "This page is archived. The current version of this topic is at [link]."

This respects learners who've bookmarked content while keeping the main curriculum clean.

---

## Summary: Versioning Philosophy

- **Small, frequent releases**: v0.1–v0.9 every 1–2 months
- **Stability checkpoint at v1.0**: After v1.0, structure is frozen
- **Content evolves without breaking**: Add labs, add bug museum entries, clarify concepts
- **Version sparingly**: Breaking changes only for major versions
- **Archive, don't delete**: Old content moves to archive with a note
- **Learners can commit**: v1.0+ means you can start a learning path and finish without major disruption

This approach lets TestAtlas grow confidently while protecting learner investment.
