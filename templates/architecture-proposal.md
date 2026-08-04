<!--
ARCHITECTURE PROPOSAL TEMPLATE
For proposing a new learning path, BEFORE any module content is written. Gets written into
docs/architecture/LEARNING_PATHS.md as that path's section, replacing whatever stub exists there.
Modeled directly on API Testing v1.0's own architecture proposal — see LEARNING_PATHS.md, Path 3,
for a filled-in example of this exact structure.
Delete this comment block before publishing. Replace every [bracketed] placeholder.
-->
## Path [N]: [Path Name]

**Status**: 📋 Architecture proposal — planning only, no module content written. This section is the blueprint for [Path Name] v1.0, produced against [Reference Curriculum used, typically Manual Testing v1.0 and/or API Testing v1.0] as the reference implementation. Nothing below is final until reviewed and approved; no module writing begins until then.

### 1. Learning Path Overview

**Directory**: `/learning-paths/[path-slug]/`
**Position**: [N]
**Prerequisites**: [Which prior paths this assumes, and specifically which of their modules/knowledge nodes get reused rather than re-taught]
**Target Audience**: [Who this path is for]
**Estimated Duration**: [Weeks]

**Learning Objectives** (path-level):
- [Objective 1]
- [Objective 2]
- [Objective 3]
- [...]

### 2. Curriculum Structure — Sections and Modules

[State up front whether this path uses the dedicated Section Review + Solutions pattern from Section 1 (the current default per REFERENCE_CURRICULUM_CERTIFICATION.md) or deviates, and why.]

#### Section 1 — [Section Name] (Modules 1–[N])

1. **[Module Title]** — *Objective*: [...]. *Prerequisites*: [...]. *Why it exists*: [...]. *Est. length*: [N,NNN–N,NNN] words.
2. **[Module Title]** — [same structure]
3. **[Module Title]** — [same structure]

**Section 1 Review + Solutions**: [confirm dedicated pages, per default]

#### Section 2 — [Section Name] (Modules [N]–[N])

[Same structure as Section 1]

<!-- Repeat for every planned section -->

### 3. Learning Objectives — Mapped to Sections

[Show the one-to-one mapping between the path-level objectives in Section 1 and which section(s) deliver each one.]

### 4. Dependency Map

[State the prerequisite chain — which prior path(s) and specifically which of their modules this path's Section 1 explicitly bridges from, and how sections within this path build on each other.]

### 5. Estimated Module Lengths — Summary

[State the target word-count bands for instruction modules and application modules, and an estimated path total, referencing actual shipped ranges from the Reference Curricula rather than inventing new numbers.]

### 6. Review/Solutions Page Strategy

[Confirm: dedicated pages from Section 1, per the certified default — or state the evidenced reason for deviating.]

### 7. Application-Module Strategy

[Identify which section(s) will be Application Modules AT DESIGN TIME — this must happen now, not be decided after the fact, per CURRICULUM_EVOLUTION.md Entry 2's explicit migration guidance for future paths.]

### 8. Capstone Approach

[Describe the capstone feature/scenario. If reusing an established fictional entity (AtlasBank) outside its currently-documented scope, flag this explicitly as an open decision requiring confirmation — don't assume it.]

### 9. Differences from [Reference Curriculum] (evidence-justified only)

[List ONLY deviations from the Reference Curriculum's defaults, each with a stated, evidenced reason. If there are none, say so explicitly — "everything else carries over unchanged, since no evidence suggests otherwise" is a valid, expected answer for most of this section.]

### Open Questions for Review

1. [Any point requiring an explicit decision before content writing begins]
2. [...]

**Success Criteria**:
- [What a learner should be able to do after completing this path]
- [...]
