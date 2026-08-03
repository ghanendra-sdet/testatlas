# Knowledge Graph

This document maps the relationships between concepts in TestAtlas, identifies which concepts are "knowledge nodes" (taught once, referenced everywhere), and prevents duplication.

## Design Principle

TestAtlas teaches concepts atomically. Boundary Value Analysis is explained once—as a knowledge node—and then referenced across Manual Testing, API Testing, Security Testing, and Automation. This prevents learners from seeing three different explanations of the same concept and keeps maintenance simple (update once, everywhere changes).

## Progressive Extraction

Concepts become standalone knowledge nodes when reuse actually demands it — not in advance of that need. This is how Wikipedia's article structure grows, and it prevents two opposite failure modes: over-engineering (extracting a node nobody links to yet, adding a file and a maintenance burden for a benefit that hasn't materialized) and under-engineering (leaving a concept buried inside one page after two or three other pages have started needing to reference it, forcing them to link into the middle of an unrelated page or, worse, re-explain it themselves).

**The flow**:

```
Concept lives inside a page
        ↓
A second page needs to reference it
        ↓
Still fine — link into the first page's relevant section
        ↓
A third reference need appears, or the links start feeling
awkward (pointing mid-page, or the concept doesn't fit the
mother page's own learning objective anymore)
        ↓
Extract it into its own knowledge node page
        ↓
Every existing reference is updated to link to the new node
```

**Not**: write the node first, speculatively, because the concept seems important or reusable in theory. Importance is not the trigger — actual reference count is.

**Rule of thumb**: one reference, leave it embedded. Two references, it's still fine to link into the host page. A third real reference need, or a reference that would have to point awkwardly into the middle of an unrelated page, is the signal to extract. When extracting, update every existing link to point at the new node — a knowledge node with stale pages still linking past it defeats the purpose.

This is the same logic `CONTENT_MODEL.md`'s **When to Split a Page** applies to splitting a page in two: the trigger is a distinct learning objective (here, a distinct *reuse* need) actually appearing, not a speculative "this could be useful elsewhere" judgment made in advance.

**Example**: "Testing vs. Checking" and "Testing Levels" currently live inside the Foundations module ([What Is Software Testing?](/learning-paths/foundations/what-is-software-testing)) and are not yet extracted, because nothing else in TestAtlas links to them independently. If a future Automation or Manual Testing page needs to reference "Testing vs. Checking" on its own, that's the moment to extract it — not before.

## Core Knowledge Nodes

These are the atomic concepts that live in only one place and are referenced throughout TestAtlas.

### Test Design Techniques (Foundation of Multiple Paths)

| Node | Location | Used In | Why |
|------|----------|---------|-----|
| Boundary Value Analysis | `/learning-paths/manual-testing/bva` | Manual Testing, API Testing, Security Testing, Database Testing, Interview Prep | Every path that designs test cases needs to know edge values matter |
| Equivalence Partitioning | `/learning-paths/manual-testing/equivalence-partitioning` | Manual Testing, API Testing, Database Testing, Interview Prep | How to reduce test cases without losing coverage |
| Decision Table Testing | `/learning-paths/manual-testing/decision-tables` | Manual Testing, API Testing, Security Testing, Interview Prep | How to test complex logical combinations |
| State Transition Testing | `/learning-paths/manual-testing/state-transitions` | Manual Testing, API Testing, Interview Prep | How to test systems that have multiple states |
| Combinatorial Testing | `/learning-paths/manual-testing/combinatorial-testing` | Manual Testing, Automation Testing, Performance Testing | How to test when variables multiply |
| Error Guessing | `/learning-paths/manual-testing/error-guessing` | Manual Testing, Security Testing, Interview Prep | Experienced intuition about what breaks |
| Pairwise Testing | `/learning-paths/manual-testing/pairwise-testing` | Automation Testing, Performance Testing | Reduced test combinations with mathematical rigor |

**How They Connect**:
- A Security Testing page titled "Injection Testing" references Boundary Value Analysis: "Test boundaries of input validation using BVA principles"
- An API Testing page titled "Designing API Tests" references Equivalence Partitioning: "Group request payloads into equivalence classes"
- An Automation page on "Reducing Test Flakiness" references State Transitions: "Tests that assume wrong state transitions fail intermittently"

### Quality Attributes (Referenced Across All Paths)

Per **Progressive Extraction**, these six attributes live together on one consolidated page — [Quality Attributes](/learning-paths/foundations/quality-attributes) — rather than as six separate node pages. This table originally listed a separate location per attribute, written before Progressive Extraction existed; that was exactly the speculative-extraction pattern the principle now argues against, since nothing yet links to any single attribute independently. Split an individual attribute (e.g., Performance) into its own node only once a specific path — most likely Performance Testing or Security Testing — actually needs to link to it on its own.

| Node | Location | Used In | Why |
|------|----------|---------|-----|
| Functionality | `/learning-paths/foundations/quality-attributes` | Every path (does the feature work?) | All testing must verify basic functionality first |
| Performance | `/learning-paths/foundations/quality-attributes` | Performance Testing, API Testing, Security Testing, Automation Testing | Every test should consider speed and resource use |
| Security | `/learning-paths/foundations/quality-attributes` | Security Testing, API Testing, Interview Prep | Every feature has security implications |
| Usability | `/learning-paths/foundations/quality-attributes` | Manual Testing, Interview Prep | Does the feature work for actual users? |
| Reliability | `/learning-paths/foundations/quality-attributes` | Performance Testing, Database Testing, Automation Testing | Does it work consistently, even when failures occur? |
| Maintainability | `/learning-paths/foundations/quality-attributes` | Automation Testing, Career (building testing processes) | Tests must survive code changes |

### Metrics and Measurement (Referenced When Measuring)

| Node | Location | Used In | Why |
|------|----------|---------|-----|
| Code Coverage | `/learning-paths/foundations/metrics/code-coverage` | Automation Testing, Interview Prep, Career | Should be tracked but not trusted blindly |
| Test Coverage | `/learning-paths/foundations/metrics/test-coverage` | Manual Testing, Automation Testing, Interview Prep | What requirements are tested? |
| Defect Density | `/learning-paths/foundations/metrics/defect-density` | Career, Interview Prep | How reliably does QA find problems? |
| Mean Time to Repair (MTTR) | `/learning-paths/foundations/metrics/mttr` | Career, Performance Testing | How quickly can the team fix production issues? |
| Cyclomatic Complexity | `/learning-paths/foundations/metrics/cyclomatic-complexity` | Automation Testing, Security Testing | How many paths through the code must be tested? |

### Tools (Referenced When Teaching Approaches)

Tools are NOT knowledge nodes—we reference the principle, not the tool. For example:

```markdown
You could use [Playwright](https://playwright.dev) or Selenium for this, but the principle is the same: 
wait for the element's state to change, then verify the assertion.
```

But we *do* have pages that compare tools:

| Comparison Page | Location | Referenced In | Why |
|-----------------|----------|----------------|-----|
| Automation Frameworks Comparison | `/learning-paths/automation/tool-comparison` | Automation Learning Path | Help learners choose, but principles stay general |
| Performance Testing Tools | `/learning-paths/performance-testing/tool-comparison` | Performance Learning Path | k6, JMeter, Gatling all test the same concepts |
| API Testing Tools | `/learning-paths/api-testing/tool-comparison` | API Testing Learning Path | Postman, REST Client, Bruno all send requests |

---

## How Concepts Connect

### Example 1: Boundary Value Analysis

**Main Node** (taught once):
→ `/learning-paths/manual-testing/boundary-value-analysis` (2,000 words)
   - Definition and why it matters
   - Off-by-one examples
   - Real scenarios (pricing, dates, account balances)
   - Common mistakes

**References** (from other paths, keep brief):

1. **API Testing**: "Testing API Boundaries"
   - Link to BVA node: "Start by understanding [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis)"
   - Specific example: "API accepts amounts $0.01–$99,999.99. Test at boundaries: $0.00, $0.01, $99,999.99, $100,000.00"

2. **Security Testing**: "Input Validation and Injection"
   - Link to BVA: "Attackers find injections at input boundaries. Use [BVA](/learning-paths/manual-testing/boundary-value-analysis) to test validation."
   - Specific example: "SQL Injection at boundaries: empty string, very long string, special characters"

3. **Database Testing**: "Testing Constraints"
   - Link to BVA: "[Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) applies to database constraints too"
   - Specific example: "Column max_length=100. Test at 99, 100, 101 characters."

4. **Interview Prep**: "Test Design Questions"
   - Link to BVA: "Learn [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) for answering test case design questions"
   - Sample question: "A field accepts ages 0–120. What test cases would you write?"

**Pattern**: Each reference is 1–2 paragraphs, contextual to that path, with a link to the full node.

### Example 2: Code Coverage

**Main Node** (taught once):
→ `/learning-paths/foundations/metrics/code-coverage` (1,500 words)
   - Definition: "% of code lines that tests execute"
   - Why we track it (catches untested code paths)
   - Why it's not a quality guarantee (100% coverage ≠ zero defects)
   - When to use it (refactoring, team standards) and when not to (pursuing 100% wastes time)

**References**:

1. **Automation Testing**: "Setting Coverage Goals"
   - Link to Code Coverage: "Before chasing high coverage, understand [what code coverage actually means](/learning-paths/foundations/metrics/code-coverage)"
   - Context: "Aim for 70–80% coverage on new code. Focus on high-risk areas instead."

2. **Interview Prep**: "Metrics Question"
   - Link to Code Coverage: "Know the difference between [code coverage](/learning-paths/foundations/metrics/code-coverage) and test coverage"
   - Context: "In interviews, explain why 100% coverage is not the goal."

3. **Career**: "Reporting Test Effectiveness"
   - Link to Code Coverage: "Avoid vanity metrics like [code coverage](/learning-paths/foundations/metrics/code-coverage). Report risk-adjusted metrics instead."
   - Context: "Leaders care about defect escape rate and customer impact, not coverage %, which engineers can game."

---

## Preventing Duplication: The Checklist

Before writing a new page, ask:

1. **Is this a reusable concept** (test design technique, metric, quality attribute)?
   - Yes → Does a knowledge node for it already exist?
     - Yes → Link to it; don't rewrite it
     - No → Create the knowledge node first, then reference it
   - No → Proceed with writing the specific page

2. **Does similar content exist elsewhere in TestAtlas**?
   - Check KNOWLEDGE_GRAPH.md and search the repo for keywords
   - Yes → Does yours add new value?
     - Yes (different context, clearer explanation, new examples) → Explain why in the PR
     - No (better to just link) → Link instead

3. **Is this page a "reference" or a "path"**?
   - Reference: A tool comparison, glossary, or cheat sheet → One version, high visibility
   - Path: A learning progression specific to a role → May be duplicative if not careful

---

## Cross-Path Visibility: When Concepts Connect

### The Test Design Concept Web

Boundary Value Analysis connects across:
```
Manual Testing ←→ API Testing
     ↓              ↓
Database Testing ← Security Testing
     ↓              ↓
Automation → Interview Prep → Career (mentoring others)
```

Every reference points back to the same node.

### The Quality Attributes Web

Every quality attribute is referenced in multiple paths:

```
Functionality ← Every path (foundational)
Performance ← Performance path + API path + Automation path
Security ← Security path + API path + Database path
Usability ← Manual path + Interview path
Reliability ← Automation + Performance + Career
Maintainability ← Automation + Career (process design)
```

### The Metrics Web

Metrics are referenced when reporting test results:

```
Code Coverage ← Automation path + Career path
Defect Density ← Career path + Interview path
Test Coverage ← Manual + Automation + Career
MTTR ← Career + Performance
```

---

## Cyclic References (Intentional)

Some connections are bidirectional and intentional:

1. **Test Design ↔ Automation**: 
   - Manual Testing teaches test design techniques
   - Automation Testing teaches how to automate those techniques
   - Both link to each other: "Once you design tests, you'll automate them—see Automation Testing"

2. **Concept ↔ Interview Prep**:
   - Every technical path teaches concepts
   - Interview Prep has a "Test Design Interview Questions" page that links back to Manual Testing

3. **Any Path → Career**:
   - Every learning path is part of a career progression
   - Career path links out to all technical paths

This is not duplication; it's intentional navigation.

---

## Knowledge Gaps and Future Additions

As TestAtlas grows, new knowledge nodes may emerge:

| Emerging Concept | Currently Covered In | Future Node Candidate | Why |
|------------------|----------------------|----------------------|-----|
| Flakiness in Automation | Automation path (section) | `/learning-paths/automation/flakiness` (dedicated page) | Complex enough for its own node |
| API Contract Testing | API Testing (section) | `/learning-paths/api-testing/contract-testing` | Growing practice with dedicated tools |
| Accessibility Testing | Not yet covered | `/learning-paths/manual-testing/accessibility` | Important enough for v1.0 |
| Test Data Management | Automation path (section) | `/learning-paths/automation/test-data` | Critical for teams; complex topic |
| Observability and Testing | Not yet covered | `/learning-paths/automation/observability` | Increasingly important for QA |

---

## Maintenance Process

**Quarterly Review**:
1. Check if any knowledge nodes have become outdated
2. Verify that all cross-path references are still accurate
3. Look for new duplication that emerged this quarter
4. Update this graph if concepts were added or merged

**When Merging Content**:
1. Contributor confirms the page is not a duplicate
2. If it's a new knowledge node, update KNOWLEDGE_GRAPH.md
3. If it references existing nodes, check that links are correct
4. If it's similar to existing content, explain why both exist

**Archive Decision**:
If a page becomes obsolete (tool deprecated, technique superseded, path consolidated):
1. Do not delete—move to `docs/project/archive/` (served at `/project/archive/...`, since the archive is meta/governance content under the already-wired `project` instance)
2. Add a note to the main node: "This was previously taught as [Deprecated Page](link). We now cover it here instead."
3. Update KNOWLEDGE_GRAPH.md to reflect the change

---

## Visualization: The Knowledge Graph

Below is a simplified map of how concepts connect. In v1.0, this becomes an interactive graph on the TestAtlas website.

```
                    ┌─ Equivalence Partitioning ──┐
                    │                              ↓
Test Design ────→ Boundary Value Analysis ─→ API Testing
                    │                              ↑
                    └──────────→ Security Testing ─┘
                                   ↑
                              Database Testing

                    ┌─ Code Coverage ──┐
                    │                  ↓
Quality Attributes ─→ Functionality ──→ Automation Testing
                    │                  ↑
                    └─ Performance ───→ Performance Testing
                    │
                    └─ Security ──────→ Security Testing


                    All Paths
                        ↓
                    Interview Prep ←─────┐
                        ↓                │
                     Career ────────────┘
```

---

## Summary: Write Once, Reference Everywhere

- **Knowledge Nodes** (1–2 per learning path): Core reusable concepts taught in depth
- **References** (5–10 per node): Brief links from other paths showing how the concept applies
- **Paths** (10 total): Specialized progressions that bring together multiple nodes
- **No Duplication**: Same concept never explained twice; every reference points back to the source

This structure allows TestAtlas to scale from 50 pages to 500+ without fragmentation.
