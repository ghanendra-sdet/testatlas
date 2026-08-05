# Learning Paths

This document defines the 10 learning paths in TestAtlas, their learning objectives, target audience, and progression strategy.

**Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, and Database Testing v1.0 are certified Reference Curricula** — see `REFERENCE_CURRICULUM_CERTIFICATION.md` for the structure and process every future path should default to, and `AUTOMATION_TESTING_CERTIFICATION.md` / `DATABASE_TESTING_CERTIFICATION.md` for each path's own certification record.

## Design Principle

Learning paths are role-based progressions: a junior QA takes a different path than an SDET, but both start at Foundations and may converge in Interview Prep. Each path is self-contained (learners can start and stop) and feeds into others (learners can specialize).

## Path 1: Foundations of Software Testing

**Directory**: `/learning-paths/foundations/`  
**Position**: 1 (gateway to all other paths)  
**Prerequisites**: None  
**Target Audience**: Anyone starting QA, developers wanting to understand testing, students  
**Estimated Duration**: 2–4 weeks  

**Curriculum version**: Foundations v1.0 (17 modules). Later additions to this path (new topics, not fixes) increment this — e.g. "Foundations v1.1 added AI-Assisted Exploratory Testing" — so structural growth is a visible, named event rather than a silent module-count change. See **Curriculum Versioning** below.

**Learning Outcomes** — when finished, a learner should be able to:
- Explain the purpose of software testing and why it's risk-based thinking, not test-case execution
- Describe how the SDLC and STLC relate, how testing maps onto Waterfall, V-Model, Agile, and continuous delivery, and participate meaningfully in Agile/Scrum ceremonies as a QA voice
- State the core principles of testing (e.g. exhaustive testing is impossible, defects cluster, pesticide paradox) and use them to justify testing decisions
- Distinguish testing from checking, and verification from validation
- Distinguish static testing from dynamic testing, and know when each applies
- Design basic test scenarios using risk-based prioritization
- Describe the six quality attributes and weigh which matter most for a given product
- Explain shift-left and shift-right testing, and why catching a defect earlier is cheaper
- Report a defect correctly and track it through its lifecycle, including severity vs. priority
- Distinguish a test strategy from a test plan
- Read basic QA metrics and know what they do and don't prove
- Describe the QA role, its boundaries with other functions, and the career paths within it
- Use core QA terminology correctly and consistently
- Recognize and correct common misconceptions about what QA does and doesn't guarantee

**Modules** (planned for v0.1–v1.0), grouped into six sections that tell a single story — understand testing, understand development, understand testing concepts, understand quality, understand defects, become a professional QA:

**Section 1 — Introduction**
1. What Is Software Testing? (✓ done)
2. The Role of QA in Product Delivery (✓ done)

**Section 2 — Software Development Context**
3. Software Testing Principles
4. Testing Across the SDLC — includes the STLC and SDLC models (✓ done)
5. Agile & Scrum Basics for QA

**Section 3 — Testing Fundamentals**
6. Verification vs. Validation (✓ done)
7. Static vs. Dynamic Testing (✓ done)

**Section 4 — Quality Mindset**
8. Risk-Based Testing Fundamentals (✓ done)
9. Quality Attributes (Functionality, Performance, Security, Usability, Reliability, Maintainability) (✓ done)
10. Shift-Left & Shift-Right Testing

**Section 5 — Defect Management**
11. Defect Life Cycle
12. Severity vs. Priority

**Section 6 — Professional QA**
13. Test Strategy vs. Test Plan
14. Metrics and Measurement (Coverage, Defect Density, MTTR)
15. QA Career Roadmap (types of roles, growth opportunities)
16. Common QA Terminology (glossary capstone)
17. Testing Myths & Misconceptions (myth / reality / real story / lesson / interview angle format — the closing module)

**Sequencing note**: Docusaurus derives each page's route from its slug, not its numeric filename prefix — the prefix only controls sidebar order. That means reordering modules, even already-published ones, does not break any existing link, so this section replaces the file numbering used during initial drafting with the sequence below.

Modules 3 and 5 (Software Testing Principles, Agile & Scrum Basics) are newly identified gaps, not yet written. Everything else already published keeps its content; only its position in the sequence changed. Section-by-section reasoning:

- **Section 1 (1–2)**: unchanged — what testing is, then who does it, before anything else can make sense.
- **Section 2 (3–5)**: Software Testing Principles moves ahead of the SDLC material deliberately — the principles (exhaustive testing is impossible, defects cluster, pesticide paradox, etc.) shape *how a learner should think* about everything that follows, so teaching them before process detail means the process modules land as applications of a mindset, not a disconnected list of process trivia. Testing Across the SDLC follows, and Agile & Scrum Basics is placed directly after it because Agile is one of the SDLC models already introduced there — going straight from the general SDLC landscape to the one model most learners will actually work under day-to-day.
- **Section 3 (6–7)**: Verification vs. Validation and Static vs. Dynamic Testing stay paired, as already established — same underlying distinction (purpose vs. mechanism) taught from two angles.
- **Section 4 (8–10)**: Risk-Based Testing and Quality Attributes now follow Section 3 rather than precede it, because "what to prioritize" (risk) and "what to weigh" (quality attributes) are easier to reason about once a learner already has verification/validation and static/dynamic as tools for thinking about testing depth. Shift-Left & Shift-Right closes the section because it depends on Module 4 (SDLC/STLC, to know what "left" and "right" mean in a timeline) and previews Section 5's defect lifecycle — the point of shifting left is catching a defect before it needs a full lifecycle.
- **Section 5 (11–12)**: hard dependency, unchanged — severity and priority are properties of a logged defect, so the lifecycle comes first.
- **Section 6 (13–17)**: Test Strategy vs. Test Plan is a synthesis module depending on Section 4 (risk-based thinking, quality attributes) as inputs to what a real strategy or plan contains. Metrics and Measurement follows because defect density and MTTR are metrics *about* Section 5's defects, and because metrics are how a strategy's success gets evaluated. QA Career Roadmap comes next — a learner can only meaningfully evaluate specialization paths after seeing the discipline's full breadth, and it follows directly from Module 2's role definitions. Common QA Terminology is a reference capstone, meant to be bookmarked rather than read start-to-front. Testing Myths & Misconceptions closes the entire path deliberately: a myth like "verification and validation are the same thing" is only meaningful — and only debunkable by the learner themselves — once every concept it references has already been taught.

**Per-module Prerequisites block**: every module should open with a short block naming the specific prior modules it assumes and the modules it unlocks next (e.g. "You should already understand: Module 6, Module 7 → After this you'll be ready for: Module 11, Module 12"), making the dependency graph visible on the page itself, not just in this document. This is now part of the Definition of Done in `CONTENT_MODEL.md`. Modules 1–2 and 6–9 predate this requirement and should get it retrofitted as a small housekeeping pass, separate from new-module writing.

**Success Criteria**:
- Learner explains why testing matters beyond "finding bugs"
- Learner maps where testing happens in a product release
- Learner articulates risk-based thinking in simple terms
- Learner can correctly use verification/validation, static/dynamic, and severity/priority in a sentence without mixing them up
- Learner can name at least one testing myth they used to believe and explain why it's wrong
- Learner can describe their own eventual QA specialization path and why it fits them

### Curriculum Versioning

Once a path's module list stabilizes (as Foundations' has now, after this review), track it as a versioned curriculum, separate from the site's own `VERSIONING_STRATEGY.md` release versioning:

- **Foundations v1.0** — the 17-module structure defined above.
- A version bumps (v1.1, v1.2, ...) only when modules are added, removed, or reordered at the topic level — not for prose edits, typo fixes, or example updates within an existing module, which are ordinary content maintenance.
- Each path tracks its own curriculum version independently (e.g. "Manual Testing v1.0" once that path's structure is finalized), so future changes can be announced precisely: "Curriculum v1.1 added AI-Assisted Exploratory Testing" instead of a silent structural change.

---

## Path 2: Manual Testing and Test Design

**Status**: 🔒 Content complete — 23/23 modules shipped (Manual Testing v1.0), pending the Curriculum Consistency Sprint before formal release tagging. Curriculum was approved with two amendments before writing began (Thinking Like a Tester added to Section 1; Reviewing Test Cases scope confirmed in Section 5); everything below reflects the shipped implementation, not the original plan — see individual module entries for real, as-shipped word counts.

### 1. Learning Path Overview

**Directory**: `/learning-paths/manual-testing/`
**Position**: 2
**Purpose**: Foundations taught *why* testing matters and the mindset behind it. Manual Testing teaches the actual craft: how to look at a feature and systematically generate the specific, minimal set of test cases that finds real defects — the skill that underlies every other path in TestAtlas, since API Testing, Database Testing, Security Testing, and Automation all design tests using the same core techniques applied to a different surface.
**Prerequisites**: Foundations of Software Testing (all 17 modules) — specifically leans on Software Testing Principles, Risk-Based Testing, Quality Attributes, Defect Life Cycle, and Severity vs. Priority
**Target Audience**: New QA engineers building their first real test-design skill set, developers wanting to test their own features more rigorously, automation engineers who need to design a test before they can automate it
**Estimated Duration**: 5–7 weeks
**Curriculum version**: Manual Testing v1.0 (content complete, pending Curriculum Consistency Sprint before tagging)

**Learning Outcomes** — when finished, a learner should be able to:
- Generate a systematic, minimal set of test cases for a feature using the right technique for the situation, not trial and error
- Apply Boundary Value Analysis, Equivalence Partitioning, Decision Table Testing, State Transition Testing, and Combinatorial/Pairwise Testing correctly, and know which one fits a given problem
- Write test cases and test data that are clear enough for someone else to execute without asking clarifying questions
- Build a Requirement Traceability Matrix connecting requirements to the tests that verify them
- Run a structured exploratory testing session with a charter, and know when exploratory testing is the right choice over scripted cases
- Write a bug report precise enough that a developer can reproduce the defect from the report alone
- Review someone else's test cases and identify real gaps, not just style preferences
- Apply every technique above to a real domain (banking, e-commerce, healthcare, insurance) in one integrated exercise

### 2. Curriculum Structure

**23 modules across seven sections**, all shipped. Sections mirror how test design actually happens on a real project: understand the feature, adopt the right mindset, generate test ideas systematically, write them down well, decide when structure isn't the right tool, report what you find, then apply all of it together. Word counts below are **actual, as shipped** (originally estimated pre-writing; replaced here with real figures per the Curriculum Consistency Sprint).

#### Section 1 — Test Design Foundations
1. **Test Design Fundamentals** ✓ — *Objective*: explain why structured test design finds more real defects than ad hoc testing, for the same time spent. *Prerequisites*: Foundations complete, especially Software Testing Principles and Risk-Based Testing. *Why it exists*: sets the mindset shift from "try things" to "systematically generate the smallest set of tests that covers the most risk" — everything else in this path is a specific technique for doing that. *Key concepts*: test idea vs. test case, coverage without redundancy, the cost of untested vs. over-tested. *Word count*: 2,313.
2. **From Requirements to Test Ideas** ✓ — *Objective*: turn an ambiguous or incomplete requirement into a concrete list of things that need testing. *Prerequisites*: Module 1. *Why it exists*: every technique in Section 2 needs raw material to operate on — this module is where that material comes from, and where requirement ambiguity (a defect class Foundations' Verification vs. Validation named but didn't drill into) gets practiced hands-on. *Key concepts*: requirement analysis for testability, spotting ambiguity, turning "the feature should validate input" into an actual test idea list. *Word count*: 2,197.
3. **Thinking Like a Tester** ✓ — *Objective*: answer the question every beginner actually asks first — "how do I even come up with test cases?" — before any named technique is introduced. *Prerequisites*: Module 2. *Why it exists*: this is the difference between a beginner and an experienced tester, and it's deliberately placed *before* BVA rather than after Section 2, because every technique that follows is easier to learn once a learner already has the underlying mindset — asking better questions, spotting unstated assumptions, thinking like both the user and the business, and deliberately probing negative/unhappy paths, not just the happy path. *Key concepts*: tester mindset, assumption-spotting, user vs. business thinking, positive vs. negative testing, happy path vs. unhappy path. *Word count*: 2,478 (includes the inline Section 1 Complete summary — see Section Review Pages note below).

#### Section 2 — Core Test Design Techniques
4. **Boundary Value Analysis** ✓ — *Objective*: identify and test the edges of an input range, where defects concentrate most. *Prerequisites*: Module 3. *Why it exists*: the single most commonly asked test-design interview technique, and the most direct application of Foundations' defect-clustering principle — and the first place the tester mindset from Module 3 gets applied to a named technique. *Key concepts*: valid/invalid boundaries, off-by-one defects, boundary value tables. *Word count*: 2,358. **Knowledge node** (see Dependency Map).
5. **Equivalence Partitioning** ✓ — *Objective*: group inputs into classes that can be tested with one representative case each, without losing coverage. *Prerequisites*: Module 4. *Why it exists*: BVA finds edge defects; EP is what makes testing the *middle* of a range efficient instead of exhaustive — the two are taught back to back because they're usually applied together in practice. *Key concepts*: valid/invalid equivalence classes, representative test case selection, avoiding redundant coverage. *Word count*: 2,410. **Knowledge node**.
6. **Decision Table Testing** ✓ — *Objective*: design test cases for a feature whose behavior depends on multiple conditions combined. *Prerequisites*: Module 5. *Why it exists*: EP handles one input at a time; Decision Tables are the next step once a feature's logic depends on combinations of inputs, not single values. *Key concepts*: condition/action tables, rule coverage, collapsing redundant rules. *Word count*: 2,366. **Knowledge node**.
7. **State Transition Testing** ✓ — *Objective*: design test cases for a feature that behaves differently depending on its current state. *Prerequisites*: Module 6. *Why it exists*: many real features (an order, a claim, a defect itself, per Foundations' Defect Life Cycle) aren't just condition-driven, they're state-driven — this module teaches the technique for that specific shape of problem. *Key concepts*: state diagrams, valid/invalid transitions, N-switch coverage. *Word count*: 2,537. **Knowledge node**.
8. **Combinatorial and Pairwise Testing** ✓ — *Objective*: test systems with many interacting variables without exhaustively testing every combination. *Prerequisites*: Modules 5–6 (builds directly on equivalence classes and decision logic). *Why it exists*: real features often have too many input combinations to test exhaustively (a form validated by browser, device, and account type, for example) — this module teaches the mathematically-grounded way to reduce that space responsibly, not by guessing. *Key concepts*: combinatorial explosion, pairwise reduction, all-pairs tools and tables. *Word count*: 2,737. **Knowledge node** — kept as one module; see Dependency Map for the confirmed Progressive Extraction decision.
9. **Error Guessing and Experience-Based Testing** ✓ — *Objective*: use structured intuition to find defects the formal techniques above don't systematically target. *Prerequisites*: Modules 4–8 (deliberately last in this section — the point is contrasting disciplined intuition against structured technique, which only lands once the structured techniques are already understood). *Why it exists*: closes Section 2 by being explicit that technique isn't the whole story — experience matters too, but it works best as a supplement to structure, not a replacement for it, and it echoes Module 3's mindset now that there's a full technique toolkit to contrast it against. *Key concepts*: heuristics, common defect patterns, when intuition beats formal technique and when it doesn't. *Word count*: 3,120 (includes the inline Section 2 Complete summary and Knowledge Check — the original bundled pattern, before the Section 4 architecture change; see Section Review Pages note below).

#### Section 3 — Writing and Organizing Tests
10. **Writing Clear Test Cases** ✓ — *Objective*: write a test case precise enough that someone unfamiliar with the feature can execute it correctly. *Prerequisites*: Section 2 complete (there need to be test ideas worth writing down well). *Why it exists*: a great test idea poorly written is barely better than no test idea — this is the module that turns Section 2's output into something a team can actually use. *Key concepts*: test case structure (steps, expected results, preconditions), precision without verbosity, avoiding ambiguous expected results. *Word count*: 2,728.
11. **Test Case Organization and Naming** ✓ — *Objective*: structure a growing set of test cases so they stay findable and maintainable, not just individually well-written. *Prerequisites*: Module 10. *Why it exists*: a hundred well-written test cases with no organizing structure become unmaintainable exactly as fast as badly-written ones — this is a distinct skill from writing one good test case. *Key concepts*: naming conventions, grouping by feature vs. by technique, avoiding duplicate coverage across a growing suite. *Word count*: 2,485.
12. **Requirement Traceability Matrix (RTM)** ✓ — *Objective*: build and maintain a matrix connecting requirements to the test cases that verify them. *Prerequisites*: Modules 2 and 10. *Why it exists*: directly answers a question Foundations' Test Strategy vs. Test Plan raised but didn't operationalize — how a team actually proves every requirement got tested. Especially load-bearing for the Insurance and Healthcare domain mapping below, where regulatory traceability is a real requirement, not a nice-to-have. *Key concepts*: coverage gaps, many-to-many requirement/test mapping, RTM as an audit artifact. *Word count*: 2,605.
13. **Test Data Design** ✓ — *Objective*: design test data deliberately, rather than reusing whatever data happens to be lying around. *Prerequisites*: Modules 4–5 (test data design is BVA/EP applied to the data itself, not just the test case). *Why it exists*: a technically correct test case run against sloppy or unrealistic data produces false confidence — this module makes data design a first-class decision, not an afterthought. *Key concepts*: realistic vs. synthetic data, data that actually exercises boundaries and edge classes, data privacy in test environments; also introduces "When NOT to Use" for this technique. *Word count*: 3,161 (includes the inline Section 3 Complete summary, Selection Matrix, and Knowledge Check — the last module built under the original bundled pattern; recurring across Modules 3, 9, and 13 is exactly what triggered the Section 4 architecture change documented in `CURRICULUM_EVOLUTION.md`).

#### Section 4 — Exploratory and Ad Hoc Testing
14. **Exploratory Testing Fundamentals** ✓ — *Objective*: explain what exploratory testing actually is (structured, simultaneous learning and testing) versus the common misconception that it's just "clicking around." *Prerequisites*: Section 3 complete. *Why it exists*: contrasts deliberately against everything taught so far — scripted technique is precise but can only find what it was designed to look for; exploratory testing is how a real tester finds what nobody thought to script. *Key concepts*: exploratory vs. scripted testing, simultaneous test design and execution, why exploratory isn't "unstructured." *Word count*: 2,344.
15. **Session-Based Test Management** ✓ — *Objective*: run a time-boxed exploratory session using a charter, and document findings in a way that's reviewable afterward. *Prerequisites*: Module 14. *Why it exists*: turns exploratory testing from an individual skill into a practice a team can actually manage, schedule, and review — the difference between "exploratory testing" as a concept and as a repeatable team activity. *Key concepts*: session charters, time-boxing, session notes and debrief. *Word count*: 2,444.
16. **When to Use Structured vs. Exploratory Testing** ✓ — *Objective*: decide, for a given feature and situation, whether scripted technique or exploratory testing is the better tool. *Prerequisites*: Modules 9 and 15 (directly synthesizes Error Guessing and Session-Based Testing against the whole structured toolkit). *Why it exists*: without this module, a learner has two toolkits and no explicit guidance on which to reach for — this is the connective module that makes the choice deliberate rather than habitual. *Key concepts*: risk and novelty as decision factors, blending both approaches on one feature, common wrong-tool mistakes. *Word count*: 2,327 — the first module built under the new Section Review + Solutions page pattern; its length confirms the fix (see `CURRICULUM_EVOLUTION.md` Entry 1). Section 4 closes with dedicated **Section 4 — Review** and **Section 4 — Solutions** pages (`/section-4-review`, `/section-4-solutions`), not appended to this module.

#### Section 5 — Reporting and Communication
17. **Writing Effective Bug Reports** ✓ — *Objective*: write a bug report a developer can reproduce and act on without asking follow-up questions. *Prerequisites*: Foundations' Defect Life Cycle and Severity vs. Priority (cross-path), plus this path's Sections 2–4 (there need to be real defects found to report on). *Why it exists*: Foundations taught the defect life *cycle*; this module teaches the actual writing skill that feeds it — a distinct, practical craft Foundations deliberately didn't cover in depth. *Key concepts*: reproduction steps, expected vs. actual, environment and evidence, writing for a reader who wasn't there. *Word count*: 2,510.
18. **Test Execution and Reporting Results** ✓ — *Objective*: run a planned test cycle and report results in a way that's useful to people who weren't in the room. *Prerequisites*: Module 17. *Why it exists*: connects back to Foundations' Test Strategy vs. Test Plan and QA Metrics modules — this is where a test plan's exit criteria actually get evaluated against real execution results. *Key concepts*: pass/fail/blocked reporting, summarizing execution for stakeholders, tying results back to exit criteria; also introduces the trial "Workplace Deliverables" and "Reviewer Checklist" elements (used in Modules 18–19 only — see Section 8, Consistency Sprint Findings, below). *Word count*: 2,476.
19. **Reviewing Test Cases** ✓ — *Objective*: review someone else's test cases and identify real coverage gaps, not just phrasing preferences. *Prerequisites*: Modules 10–13. *Why it exists*: peer review is how a team's test-design quality stays consistent over time, and it's a distinct, underemphasized skill — in a real QA job, a tester reviews far more test cases than they personally write, and most courses skip this entirely. *Key concepts*: peer review practice, structured review checklists, ambiguity detection, duplicate-coverage detection, spotting missing scenarios (not just critiquing what's present), giving actionable review feedback. *Word count*: 2,399. Section 5 closes with dedicated **Section 5 — Review** and **Section 5 — Solutions** pages (`/section-5-review`, `/section-5-solutions`).

#### Section 6 — Applying Test Design to Real Domains
20. **Applying Test Design Across Domains: Banking and E-Commerce** ✓ — *Objective*: apply the full technique toolkit to two contrasting real domains in one integrated exercise each. *Prerequisites*: Sections 1–5 complete. *Why it exists*: the first of two domain-application modules — see Real Project Mapping below for why banking and e-commerce are paired first. *Key concepts*: financial-accuracy-driven test design (banking), state- and inventory-driven test design (e-commerce). *Word count*: 1,707 — deliberately leaner than Sections 1–5's modules; see Section 8, Consistency Sprint Findings, on Application Modules as a distinct content type.
21. **Applying Test Design Across Domains: Healthcare and Insurance** ✓ — *Objective*: apply the full technique toolkit to two more contrasting domains, both with a regulatory/compliance dimension the first pair didn't emphasize. *Prerequisites*: Module 20. *Why it exists*: healthcare and insurance both foreground the RTM and traceability module (12) in a way banking and e-commerce don't as directly — pairing them together makes that connection explicit. *Key concepts*: compliance-driven traceability, decision-table-heavy premium/eligibility logic, state-transition-heavy claims/appointment flows. *Word count*: 1,613. No Review/Solutions pages for Section 6 — an application section, not a technique section, and never scoped with a Knowledge Check.

#### Section 7 — Capstone
22. **Common Mistakes in Test Design** ✓ — *Objective*: recognize the recurring mistake *patterns* that cut across every technique taught in this path, not a per-technique restatement of each module's own Common Mistakes section. *Prerequisites*: Sections 1–6. *Why it exists*: a deliberate lead-in to the capstone, in the same spirit as Foundations' Testing Myths module — reinforcement, not new teaching. *Key concepts*: six cross-cutting patterns (technique-familiarity shortcuts, volume vs. coverage, happy-path-only requirement coverage, technique-fit mismatches, incomplete expected results, skipping structured technique under compliance-critical time pressure). *Word count*: 1,815.
23. **Manual Testing Capstone: International Money Transfer** ✓ — *Objective*: walk one realistic, deliberately underspecified AtlasBank feature through the complete lifecycle end to end — requirement analysis, technique selection and combination, test case writing, data design, organization, RTM, execution, defect reporting, and review — introducing nothing new. *Prerequisites*: the entire path. *Why it exists*: **the shipped capstone** — reinforces the whole path in one integrated exercise, mirroring exactly how Foundations closed with Testing Myths & Misconceptions. Differs from the original planning recommendation below (a loan-eligibility form) in favor of an international money transfer feature, chosen because it combines banking's deterministic risk with compliance's rule-driven risk in one feature, requiring technique combination *and* both early analysis and late review to fully resolve its single planted defect. *Key concepts*: none new — pure synthesis. *Word count*: 2,035.

**Total**: 23 modules, **55,165 words actual** (originally estimated 48,700–54,100 before writing began — the real total landed slightly above the estimate, consistent with several modules in the "acceptable" length band; comparable in scale to Foundations' 35,852 actual, reflecting more technique depth per module). Six additional Review/Solutions pages exist outside this count (see Section Review Pages note below).

### Section Review Pages — As Shipped

Not every section has the same closing structure, by design, not oversight — see `CURRICULUM_EVOLUTION.md` Entry 1 for the full governance history:

- **Sections 1–3**: closing content (summary, matrix, Knowledge Check) is bundled into the section's last module (Modules 3, 9, 13 respectively) — the original pattern, not retrofitted after the architecture changed.
- **Sections 4–5**: dedicated `Section N — Review` and `Section N — Solutions` pages, introduced starting Section 4 after the bundled pattern inflated three consecutive closing modules past the normal length band.
- **Sections 6–7**: no Review/Solutions pages — these are application and synthesis sections without a Knowledge Check in the original curriculum scope, not an omission.
- **Modules 1, 2, 4–8, 10–12, 14–21, 22–23**: no Solutions page of their own; Solutions pages exist only for Sections 2, 3, 4, and 5 (`/section-2-solutions`, `/section-3-solutions`, `/section-4-solutions`, `/section-5-solutions`), paired with a Review page for Sections 4 and 5 only.

### 3. Dependency Map and Knowledge Nodes

```
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9   (Sections 1–2, strictly sequential:
                                      Module 3 establishes mindset before
                                      any named technique; each technique
                                      after it builds on the reduction
                                      logic of the one before it)
                    ↓
        10 → 11 → 12 → 13            (Section 3, sequential)
                    ↓
        14 → 15 → 16                 (Section 4, sequential)
                    ↓
        17 → 18 → 19                 (Section 5, sequential — 17 also
                                      cross-depends on Foundations 11 & 12)
                    ↓
        20 → 21                      (Section 6, sequential)
                    ↓
        22 → 23                      (Capstone)
```

**Knowledge nodes**: `KNOWLEDGE_GRAPH.md` already pre-designates Boundary Value Analysis, Equivalence Partitioning, Decision Table Testing, State Transition Testing, and Combinatorial/Pairwise Testing as future knowledge nodes referenced by API Testing, Security Testing, Database Testing, and Automation. That means Modules 4–8 should be written knowing from day one that other paths will link to them — unlike every Foundations module, which was written without that pressure. Two decisions, now confirmed:
- **Slug alignment — confirmed**: full descriptive slugs, matching the Foundations convention exactly — `/learning-paths/manual-testing/boundary-value-analysis`, `/equivalence-partitioning`, `/decision-table-testing`, `/state-transition-testing`, `/combinatorial-and-pairwise-testing`, `/error-guessing`. No abbreviations (`bva`, `ep`). `KNOWLEDGE_GRAPH.md`'s table will be updated to match once Module 4 is actually written.
- **Combinatorial vs. Pairwise — confirmed as one module**: kept together under Progressive Extraction, since no second or third path currently links to either independently. Extract Pairwise Testing into its own node only once Automation, API Testing, or Performance Testing actually needs to reference it on its own — not before.

No other new knowledge nodes are proposed at this stage. RTM (Module 12) and Test Data Design (Module 13) are candidates to watch — if Automation or Database Testing later need to reference either independently, that's the Progressive Extraction trigger, not before.

### 4. Real Project Mapping

| Section | Banking | E-Commerce | Healthcare | Insurance |
|---|---|---|---|---|
| 1 — Foundations | Entry skill for all four; no domain-specific emphasis | Same | Same | Same |
| 2 — Core Techniques | BVA on interest rate/loan amount limits; Decision Tables on interest calculation rules | EP on discount code categories; State Transitions on order status (placed → shipped → delivered) | State Transitions on appointment/claim status; Combinatorial Testing on patient eligibility rule combinations | Decision Tables on premium calculation (the most decision-table-heavy domain of the four) |
| 3 — Writing/Organizing | Standard | Standard | RTM carries real compliance weight (patient safety traceability) | RTM carries real compliance weight (regulatory audit trail) |
| 4 — Exploratory | Lower priority — high-stakes flows favor scripted rigor | High priority — UX and conversion flows reward exploratory discovery | High priority — patient-facing flows need empathy-driven exploration | Lower priority — favors scripted rigor, similar to banking |
| 5 — Reporting | Bug Museum: balance calculation, race conditions | Bug Museum: overselling, payment failures | Bug Museum: double-booking, data leaks, access violations | Bug Museum: premium miscalculation, claim denial errors |
| 6 — Domain Application | Module 20 | Module 20 | Module 21 | Module 21 |

This mapping is designed to plug directly into the existing Project Simulations (`PROJECT_ARCHITECTURE.md`) once those are built — Modules 20–21's worked examples are written to later become the seed material for the Banking, E-Commerce, Healthcare, and Insurance project simulations' early test-design phases, not disposable one-off examples.

### 5. Interview Mapping

- **Junior QA interviews**: Modules 1, 3, 4, 5, 10, 17 — "how do you come up with test cases" (Module 3, increasingly asked at junior level precisely because it's mindset, not memorization), "explain BVA," "explain EP," "write a test case for X," and "write a bug report for X."
- **Mid-level QA interviews**: Modules 6, 7, 8, 12, 13, 19 — decision tables and state transitions for more complex features, RTM and test data design for process maturity questions, test case review for collaboration/mentorship signals.
- **Scenario-based interviews** ("design test cases for a feature like X"): Modules 20, 21, 23 directly train for this format — the domain-application modules and capstone are, deliberately, rehearsal for exactly this interview style.

### 6. Practical Exercises

Per `LAB_ARCHITECTURE.md`, hands-on exercises belong to the Labs content type, not embedded inline in learning-path modules — this section identifies *where* Labs should attach, not new embedded content:

- After Module 3: a "spot the assumptions" Lab — given a deliberately underspecified requirement, list every assumption and question a tester should raise before writing a single test case
- After each of Modules 4–8: a short "design test cases for [a small, specific feature]" Lab per technique
- After Module 10: a Lab converting a raw test-idea list into fully written test cases
- After Module 12: a Lab building an RTM for a small multi-requirement feature
- After Module 15: a timed, charter-driven exploratory session Lab
- After Module 17: a Lab writing a bug report from a described (not self-found) defect — a natural connection point to Bug Museum entries
- After Module 19: a peer-review Lab — given a deliberately flawed test suite (missing scenarios, ambiguous wording, duplicate coverage planted in it), find and document every issue
- Modules 20–21: full case-study Labs per domain — these are the ones most directly reusable as seed material for the future Project Simulations
- Module 23: a comprehensive, graded-style capstone Lab — design a complete test suite for one real feature end to end

### 7. Capstone — As Shipped

**Module 23: Manual Testing Capstone: International Money Transfer.** The original recommendation below (pre-implementation) proposed a loan-eligibility form; the shipped capstone uses an AtlasBank international money transfer feature instead, chosen because it naturally combines banking's deterministic, boundary-driven risk with compliance's rule-driven risk in one feature — exercising BVA and Equivalence Partitioning on transfer-amount and compliance thresholds, Decision Tables on the amount/cumulative-total/compliance-status interaction, State Transitions on the transfer's own lifecycle, and Error Guessing on an abandoned-transfer pattern — without needing an artificially contrived example. The learner walks the feature through the complete lifecycle end to end and produces one complete, reviewable test design package: requirement analysis, organized test cases, an RTM, a bug report against a planted defect, and a review pass.

This mirrors exactly how Foundations closed with Testing Myths & Misconceptions: no new concept is introduced, the module exists purely to prove the rest of the path became instinct, and it's the module most directly reusable later as interview-preparation rehearsal material.

*Original pre-implementation recommendation, preserved for reference*: "Given one real, moderately complex feature (recommend a loan-eligibility form — it naturally exercises BVA on numeric limits, EP on applicant categories, Decision Tables on eligibility rules, and State Transitions on application status, without needing an artificially contrived example)..." — superseded by the transfer-feature approach above, which additionally required both early requirement analysis and late-stage review to fully resolve its single defect, demonstrating the lifecycle's connectedness more directly than a single-phase exercise would have.

**Success Criteria** (path-level):
- Learner designs a complete, minimal, high-coverage test suite for a non-trivial feature using the correct technique for each part of that feature, not one technique applied everywhere
- Learner explains why specific test cases were excluded (equivalence reasoning), not just which were included
- Learner writes a bug report a developer can act on without follow-up questions
- Learner builds an RTM that would satisfy a real compliance review
- Learner identifies edge cases and missing coverage in someone else's test suite, not just their own

### 8. Consistency Sprint Findings (2026-08-04)

Results of a holistic audit run across all 23 modules plus the 6 Review/Solutions pages, performed as part of the Curriculum Consistency Sprint. Documentation-only findings are reflected in this file directly; the one content-level finding is reported, not silently fixed, per the sprint's scope.

**Application Modules are a distinct content type, confirmed by evidence, not just asserted.** Modules 20–23 (`difficulty: "intermediate"`, versus `"beginner"` for Modules 1–19) deliberately omit Mini Challenge, Quick Revision, From the Field, Senior QA Insight, and Common Interview Mistake — all four modules audited and confirmed consistent with each other on this. Module 22 also omits a "Common Mistakes" heading, since the entire module *is* that content under a different structure (numbered patterns, not a bullet list) — an intentional structural choice, not a gap. This distinction should carry into future paths: synthesis/application content gets lighter scaffolding by design, tagged `intermediate`, not forced into the standard instruction-module template.

**Recurring-element rollout gaps are real but expected and already documented.** Module 1 (written before any of the five recurring elements existed) has none of them. Modules 1–7 lack Quick Revision (formalized after Batch 2). Modules 2–4 lack Common Interview Mistake (formalized after Batch 2). This matches `CONTENT_MODEL.md`'s own explicit policy — "Do not retrofit already-shipped Manual Testing modules... apply this standard going forward from when each element was formalized" — confirmed here as followed correctly, not discovered as a new problem.

**One genuine content inconsistency found, not yet fixed**: Module 3 (Thinking Like a Tester) is missing a "From the Field" callout, unlike its own batch-siblings Modules 2 and 4, both of which have one — this isn't explained by the rollout timeline the way the gaps above are, since From the Field was already in use within the same batch. Reported here for a decision; not edited as part of this sprint, since altering already-shipped, already-reviewed module content wasn't this sprint's scope without explicit direction to do so.

**Workplace Deliverables and Reviewer Checklist are not formalized in `CONTENT_MODEL.md`.** Both appeared in exactly two modules (18 and 19) and were deliberately not continued into Modules 20–23 per explicit instruction at the time. Two uses, not continued, doesn't meet the evidence bar `CURRICULUM_EVOLUTION.md` itself sets (a pattern recurring at least three times before being made permanent — see Entry 1). Left as an unformalized, one-time experiment; not adopted as a standing pattern. If a future path's content naturally produces workplace deliverables again, these can be reconsidered then, evaluated fresh rather than assumed still relevant.

**Heading and structural audit**: all five load-bearing headings (What You Just Learned, Related Topics, Key Takeaways, Interview Questions, Glossary) appear in exactly 23/23 modules, worded identically. "When NOT to Use" headings vary in exact phrasing per module (matching the module's specific technique or artifact name) rather than using one rigid template string — a reasonable, intended variation, not drift. No duplicate titles, descriptions, or dead links found across any of the 29 published pages (`npm run build` and a direct `uniq -d` check on frontmatter, both clean).

**AtlasBank usage**: confirmed present and consistent from Section 3 onward, exactly matching `STYLE_GUIDE.md`'s stated scope (not retrofitted into Sections 1–2, which predate the convention) — healthcare and insurance remain in active, independent use throughout, not displaced.

---

## Path 3: API Testing

**Status**: 📋 Architecture proposal — planning only, no module content written. This section is the blueprint for API Testing v1.0, produced against Manual Testing v1.0 (23/23 modules shipped, `2624d5b`) as the reference implementation. Nothing below is final until reviewed and approved; no module writing begins until then.

### 1. Learning Path Overview

**Directory**: `/learning-paths/api-testing/`
**Position**: 3
**Prerequisites**: Foundations (all 17 modules) and Manual Testing v1.0 — specifically [Test Design Fundamentals](/learning-paths/manual-testing/test-design-fundamentals), [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis), [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning), [Decision Table Testing](/learning-paths/manual-testing/decision-table-testing), [State Transition Testing](/learning-paths/manual-testing/state-transition-testing), and [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases), all of which this path reuses directly rather than re-teaching.
**Target Audience**: Testers who've completed Manual Testing and are ready to apply the same test-design discipline to a different surface — the API layer instead of the UI.
**Estimated Duration**: 5–7 weeks (21 modules vs. Manual Testing's 23, but several modules — Security, Performance — carry more conceptual density per module).

**Learning Objectives** (path-level):
- Apply test design techniques already learned (BVA, Equivalence Partitioning, Decision Tables, State Transitions) to API requests, payloads, and responses instead of UI fields and screens
- Read and validate HTTP requests/responses, status codes, headers, and JSON bodies with tester-level precision
- Validate API contracts and schemas, and test authentication, authorization, and rate-limiting behavior
- Test integration resilience — timeouts, retries, cascading failures between dependent services
- Identify common API security issues (OWASP API Top 10 scope) and evaluate an API's security posture as a tester, not a penetration tester
- Test and interpret API performance under load
- Select and justify an API testing tool for a given context
- Apply the complete API testing lifecycle to one realistic, multi-phase feature (capstone)

### 2. Curriculum Structure — Sections and Modules

This path uses the **dedicated Section Review + Solutions page pattern from its first section** — not the bundled pattern Manual Testing Sections 1–3 used before recurrence proved it wrong (see [[curriculum-evolution]] Entry 1). There is no equivalent "early bundled" phase to migrate away from here, since the evidence already exists.

#### Section 1 — API Testing Foundations (Modules 1–3)

1. **API Testing Fundamentals** — *Objective*: why APIs matter as a distinct testing surface, where API testing sits relative to UI and unit testing, scope of this path. *Prerequisites*: Foundations complete. *Why it exists*: every path so far has opened with a fundamentals module establishing scope before technique; no evidence to deviate. *Est. length*: 1,900–2,300 words.
2. **HTTP Basics for Testers** — *Objective*: methods, status codes, headers, request/response anatomy, read with the precision a tester needs (not a developer's). *Why it exists*: the API-equivalent of "reading a UI screen" — a foundational literacy module every later module assumes. *Est. length*: 2,000–2,400 words.
3. **Applying Test Design to APIs** — *Objective*: explicitly reuse BVA, Equivalence Partitioning, Decision Tables, and State Transitions — already taught in Manual Testing — against API parameters, payload fields, and response states, rather than re-teaching the techniques. *Why it exists*: this is the Progressive Extraction principle in action ([[knowledge-graph]]): these four techniques are pre-designated knowledge nodes this path was always meant to reference, not duplicate. *Est. length*: 2,200–2,600 words (denser — it's bridging four prior techniques at once).

**Section 1 Review + Solutions**: dedicated pages, per the migration policy above.

#### Section 2 — Data, Contracts, and Test Cases (Modules 4–6)

4. **JSON and Data Validation** — *Objective*: parsing, structural validation, null/missing-field handling, type mismatches. *Est. length*: 1,900–2,300 words.
5. **API Schema and Contract Testing** — *Objective*: validating requests/responses against an OpenAPI/schema definition; what a contract-testing failure looks like versus a functional failure. *Why it exists*: this is genuinely new — Manual Testing has no schema/contract equivalent, since UI testing doesn't validate against a machine-readable contract the way APIs do. *Est. length*: 2,100–2,500 words.
6. **Designing API Test Cases** — *Objective*: applying [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases)' structure to API-specific fields (endpoint, method, headers, body, expected status, expected response shape) rather than re-teaching test case writing from scratch. *Est. length*: 2,000–2,400 words.

**Section 2 Review + Solutions**: dedicated pages.

#### Section 3 — Auth and Access Control (Modules 7–9)

7. **Authentication Testing** — API keys, OAuth flows, JWTs — what a tester validates versus what's the implementation's concern. *Est. length*: 2,200–2,600 words.
8. **Authorization Testing** — roles, permissions, data isolation between tenants/users (a real defect class: user A retrieving user B's data via a predictable ID). *Est. length*: 2,200–2,600 words.
9. **Rate Limiting and Throttling** — testing quotas, backoff behavior, what a correct 429 response looks like. *Est. length*: 1,900–2,300 words.

**Section 3 Review + Solutions**: dedicated pages.

#### Section 4 — Integration and Resilience (Modules 10–12)

10. **Testing Service Integrations** — behavior when a dependent service is slow, unavailable, or returns malformed data. *Est. length*: 2,100–2,500 words.
11. **Cascading Failure Testing** — timeout, retry, and circuit-breaker behavior across a chain of dependent services. *Est. length*: 2,200–2,600 words.
12. **Idempotency and Retry Testing** — safe retries, duplicate-request handling (a real defect class distinct from anything Manual Testing covers, since UI testing rarely has to reason about network-level retry duplication). *Est. length*: 2,000–2,400 words.

**Section 4 Review + Solutions**: dedicated pages.

#### Section 5 — API Security Testing (Modules 13–15)

13. **API Security Fundamentals** — OWASP API Security Top 10 from a functional tester's vantage point (what to test for, not how to build an exploit). *Est. length*: 2,200–2,600 words.
14. **Injection and Input-Based Attacks** — SQL/command injection and malformed-payload attacks tested via API requests. *Est. length*: 2,100–2,500 words.
15. **Transport Security and CORS** — HTTPS enforcement, CORS misconfiguration, what a tester can verify without specialized security tooling. *Est. length*: 1,900–2,300 words.

**Section 5 Review + Solutions**: dedicated pages. This is a genuinely new section with no Manual Testing equivalent — see Point 10 below.

#### Section 6 — Performance and Tooling (Modules 16–17)

16. **Performance Testing APIs** — response time, throughput, and behavior under load, from a functional tester's perspective (not a full load-testing-engineer treatment — that's a separate future path). *Est. length*: 2,100–2,500 words.
17. **API Testing Tools** — Postman, REST Client/Bruno, code-based approaches; how to choose, not a feature-by-feature comparison. *Est. length*: 1,900–2,300 words.

**Section 6 Review + Solutions**: dedicated pages.

#### Section 7 — Application and Capstone (Modules 18–21) — Application Modules

Per [[curriculum-evolution]] Entry 2, this section is identified as application/synthesis **during design**, not retrofitted after the fact — all four modules ship as Application Modules from day one: `difficulty: "intermediate"`, no Mini Challenge/Quick Revision/three recurring callouts, no Section Review/Solutions pages (matching Manual Testing Sections 6–7, which also received none).

18. **Applying API Testing to a Banking Domain** — full technique combination against a realistic AtlasBank-style API feature (open question — see Point 9). *Est. length*: 1,700–2,100 words.
19. **Applying API Testing to a Healthcare/Insurance Domain** — same pattern, second domain, mirroring Manual Testing Modules 20–21's two-domain structure. *Est. length*: 1,700–2,100 words.
20. **Common Mistakes in API Testing** — cross-cutting mistake patterns, mirroring Module 22's numbered-pattern structure (no separate "Common Mistakes" heading, since the module *is* that content). *Est. length*: 1,700–2,000 words.
21. **API Testing Capstone** — one realistic, multi-phase feature walked end to end (see Point 9). *Est. length*: 1,900–2,200 words.

### 3. Learning Objectives — Mapped to Sections

Section 1 → literacy and technique transfer; Section 2 → data/contract precision; Section 3 → identity and access; Section 4 → resilience; Section 5 → security awareness; Section 6 → performance and tool judgment; Section 7 → synthesis. Every path-level objective listed in Section 1 above traces to exactly one section, matching Manual Testing's own one-to-one mapping between its stated objectives and its section structure.

### 4. Dependency Map

Foundations → Manual Testing (Sections 1–2 specifically: Test Design Fundamentals, BVA, Equivalence Partitioning, Decision Tables, State Transitions, Writing Clear Test Cases) → API Testing Section 1 (which explicitly bridges those techniques) → Sections 2–6 build linearly (contracts before auth, auth before resilience, resilience before security, security before performance/tooling) → Section 7 synthesizes all of it. No section skips a prerequisite the way, for example, Security assumes Auth (Section 3) is already understood before testing what happens when auth is deliberately bypassed.

### 5. Estimated Module Lengths — Summary

Instruction modules (Sections 1–6, 17 modules): 1,900–2,600 words each, matching Manual Testing's actual shipped range (2,197–3,120 words, excluding the two now-legacy bundled section-closers). Application modules (Section 7, 4 modules): 1,700–2,200 words, matching Manual Testing's actual Application Module range exactly (1,613–2,035 words). **Estimated path total**: roughly 39,000–45,000 words of module content — smaller than Manual Testing's 55,165 actual, consistent with 21 modules vs. 23 and the reasoning in Point 10 below.

### 6. Review/Solutions Page Strategy

Every section (1–6) gets a dedicated **Section N Review** page and **Section N Solutions** page from its first appearance — no bundled-into-last-module phase, since Manual Testing's Entry 1 evidence already exists and the user's instruction is not to introduce new patterns without evidence to deviate, not to re-earn already-earned ones. Section 7 gets no Review/Solutions pages, matching Manual Testing Sections 6–7's precedent (application modules synthesize rather than introduce new testable knowledge, so there's nothing a Knowledge Check would be checking that isn't already covered by the capstone itself).

### 7. Application-Module Strategy

Section 7 (Modules 18–21) is designated as Application Modules **at design time**, per Entry 2's explicit migration guidance ("future learning paths should identify their own application/synthesis sections during curriculum design, not after the fact"). Structure: `difficulty: "intermediate"`, no Mini Challenge, no Quick Revision, no From the Field/Senior QA Insight/Common Interview Mistake callouts, tighter word-count band. Module 20 additionally drops the separate "Common Mistakes" heading, mirroring Module 22's exact precedent.

### 8. Capstone Approach

**Recommendation**: one realistic feature — a banking transfer or payment API — walked through the complete API testing lifecycle in Module 21, mirroring the Manual Testing Capstone's structure: requirement analysis → test design (multiple techniques combined by risk shape) → test case writing → execution and defect reporting → review. This is an **open decision, not a default**: `STYLE_GUIDE.md` currently scopes the AtlasBank convention to Manual Testing specifically. Extending AtlasBank into an API-layer capstone (e.g., "AtlasBank Transfer API") would give the curriculum a recognizable throughline across paths, but that's a real scope decision the user should confirm before it's treated as established convention — this proposal recommends it but does not assume it. If declined, a standalone fictional API (not tied to AtlasBank) works equally well structurally.

### 9. Differences from Manual Testing (evidence-justified only)

- **21 modules vs. 23, fewer sections of "new" foundational skill**: Manual Testing was the first practical path and had to build artifact/process skills from zero (test case writing, RTM, test data design, defect reporting, review). API Testing is the *second* path and reuses those skills by direct reference (Module 6 explicitly reuses Writing Clear Test Cases rather than re-teaching it) rather than duplicating them — a direct application of the Progressive Extraction principle already documented in `KNOWLEDGE_GRAPH.md`, not a new pattern.
- **A dedicated Security section (Section 5) with no Manual Testing equivalent**: APIs expose a security surface (injection via payloads, token handling, CORS, transport security) that UI-only manual testing doesn't foreground the same way. This is a genuine domain-specific addition, not invented without cause.
- **Dedicated Section Review/Solutions pages from Section 1 onward**: not a new pattern — this is Manual Testing's own Entry 1 evidence applied from the start, exactly as that entry's migration policy directs.
- **Everything else** — the five recurring callouts, the Prerequisites/Leads-to block, the Forward Reference Rule, frontmatter conventions, the `slug:` fix for Review/Solutions pages, Application Modules as a distinct type — carries over unchanged, since no evidence suggests any of it doesn't apply to this path.

### Decisions (Approved 2026-08-04)

1. **AtlasBank for the API Capstone**: ✅ Approved. AtlasBank's scope is extended from Manual Testing into API Testing (see `STYLE_GUIDE.md`'s Recurring Fictional Product section) — learners already know the domain, so they can focus on API testing itself rather than a new product.
2. **21-module/7-section structure**: ✅ Approved as proposed.
3. **Difficulty tagging**: ❌ Declined. No path-specific difficulty taxonomy beyond the existing beginner/Application-Module-intermediate distinction. Avoid adding a new taxonomy without future evidence of need.

### Section 1 — As Shipped

Module 3 shipped as **"REST Architecture and API Design Principles"** rather than this proposal's original "Applying Test Design to APIs" — a deliberate substitution made when Section 1 was implemented: REST conventions are a genuinely new literacy this path needs before any later module can meaningfully apply prior test-design technique to API-specific fields, so it earned the Section 1 foundational slot instead. Explicit test-design-to-API application (BVA/Equivalence Partitioning/Decision Tables/State Transitions applied to parameters and payloads) is deferred to a later module, not dropped — Module 1 and Module 3 both reference it as "(coming soon)." Section 1 shipped with dedicated **Section 1 Review** and **Section 1 Solutions** pages (`03a-section-1-review.md`, `03b-section-1-solutions.md`), per this path's approved Point 6 (dedicated pages from the first section).

### Section 2 — As Shipped

Section 2 shipped as designed: **API Requests and Responses** (Module 4), **Headers, Parameters, and Payload Validation** (Module 5), **Data Validation and Response Verification** (Module 6) — retitled slightly from this proposal's original "JSON and Data Validation / API Schema and Contract Testing / Designing API Test Cases" three-module split, consolidating into a request-lifecycle-then-request-validation-then-response-validation progression instead. Dedicated schema/contract testing (OpenAPI validation) and API-specific test case writing (applying [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases)) remain future topics, not dropped — both are natural fits for a later module once Section 3's auth literacy exists to test against. Section 2 shipped with dedicated **Section 2 Review** and **Section 2 Solutions** pages (`06a-section-2-review.md`, `06b-section-2-solutions.md`).

### Section 3 — As Shipped

Section 3 shipped as designed: **API Authentication** (Module 7 — API keys, bearer tokens, JWTs, OAuth 2.0 concepts, the per-endpoint expired/malformed/tampered-token failure checklist), **Authorization and Access Control** (Module 8 — RBAC, resource ownership, horizontal/vertical privilege escalation, IDOR), **Rate Limiting, Throttling, and Session Management** (Module 9 — 429/Retry-After, burst vs. sustained limits, server-side token revocation). Section 3 shipped with dedicated **Section 3 Review** and **Section 3 Solutions** pages (`09a-section-3-review.md`, `09b-section-3-solutions.md`).

### Section 4 — As Shipped

Section 4 shipped as designed: **Testing Service Integrations** (Module 10 — dependency mapping, blocking/non-blocking classification, timeouts, mocking concept, webhooks), **Cascading Failures, Error Handling, and Fault Tolerance** (Module 11 — shared-resource exhaustion, circuit breakers, fail-fast, retry storms, standardized error responses), **Idempotency, Retry Logic, and Duplicate Request Prevention** (Module 12 — idempotency keys, safe vs. duplicate retries, race conditions, exactly-once vs. at-least-once). Section 4 shipped with dedicated **Section 4 Review** and **Section 4 Solutions** pages (`12a-section-4-review.md`, `12b-section-4-solutions.md`).

### Section 5 — As Shipped

Section 5 shipped as designed: **API Security Fundamentals** (Module 13 — CIA Triad, OWASP API Security Top 10 overview, BOLA and excessive data exposure as the two categories a functional tester is best positioned to catch), **Injection and Input-Based Attacks** (Module 14 — explicitly scoped to symptom recognition and responsible reporting, not exploit construction; mass assignment, realistic special-character input, file upload validation), **Transport Security, CORS, and Secure Communication** (Module 15 — HTTPS enforcement, CORS severity depending on endpoint sensitivity, dynamically-reflected-origin risk). Section 5 shipped with dedicated **Section 5 Review** and **Section 5 Solutions** pages (`15a-section-5-review.md`, `15b-section-5-solutions.md`). Per the task's explicit scope instruction, all security content stays at a QA-validation/identification level — no offensive exploitation technique or implementation-internals content was introduced.

### Section 6 — As Shipped

Section 6 shipped as designed: **Performance Testing APIs** (Module 16 — response time vs. throughput, sibling-endpoint comparison, moderate concurrent load, explicitly scoped short of full-scale load engineering), **API Testing Tools** (Module 17 — matching GUI-based/lightweight/code-based tool categories to exploratory-vs-maintained task categories, not a feature comparison). Section 6 shipped with dedicated **Section 6 Review** and **Section 6 Solutions** pages (`17a-section-6-review.md`, `17b-section-6-solutions.md`).

### Section 7 — As Shipped

Section 7 shipped as **Application and Capstone**, per the approved Decisions above, but with Modules 18–19 substantially redesigned from this proposal's original "Applying API Testing to a Banking Domain" / "...to a Healthcare/Insurance Domain" titles. **Reason for the change**: by the time Section 7 was reached, every module in this path (1–17) had used AtlasBank exclusively, per repeated explicit instruction across Sections 2–5's task prompts to keep AtlasBank canonical and not introduce new domains. Introducing healthcare/insurance for only two modules at the very end, with no setup anywhere earlier in this path, would have contradicted that standing instruction and, unlike Manual Testing (where multiple domains were already in active rotation well before its own Section 6), had no earlier foundation to build on. Flagged to the user directly rather than decided unilaterally; user approved staying within AtlasBank.

**As shipped**: Module 18 — **Applying API Testing: AtlasBank Cross-Border Payment Flow** (combines Sections 3–4: authentication, authorization, resilience, idempotency) and Module 19 — **Applying API Testing: AtlasBank Loan and KYC Flow** (combines Sections 2, 4–5: data validation across a realistic input range, dependency failure-mode distinction, security). Module 20 — **Common Mistakes in API Testing** (six cross-cutting patterns, each traced to a real defect from an earlier module's own worked example) and Module 21 — **API Testing Capstone: International Money Transfer API** (the same underlying feature and compliance-aggregation defect as the Manual Testing capstone, now tested independently at the API layer — a deliberate narrative bookend, not a coincidence) close the path.

**A second correction made during Section 7**: while using Manual Testing's Application Modules (20–23) as the literal template for API Testing's own Application Modules, direct inspection found `CURRICULUM_EVOLUTION.md` Entry 2 didn't match what actually shipped — it claimed Application Modules omit Quick Revision, but Modules 20, 21, and 23 all shipped *with* a Quick Revision section; only Mini Challenge and the three narrative callouts were actually, consistently omitted. Flagged to the user; approved fix: Entry 2's wording corrected (Quick Revision removed from the exclusion list, with a dated correction note), and API Testing's own Application Modules (18–21) follow the corrected, accurate pattern — Quick Revision retained, Mini Challenge and the three callouts omitted. Module 22's own additional inconsistency (it shipped with both a Mini Challenge and two of the three callouts) was left as-is, per the existing policy against retrofitting already-shipped content for uniformity alone.

**Progress**: 21 / 21 modules shipped. **API Testing v1.0 is complete.**

**Success Criteria** (unchanged from the original stub, still accurate):
- Learner designs tests for a REST API including happy path, edge cases, and error scenarios
- Learner identifies security issues in an API design
- Learner explains when API testing differs from UI testing

---

## Path 4: Database Testing

**Status**: 📋 Architecture proposal — planning only, no module content written. This section is the blueprint for Database Testing v1.0, produced against Manual Testing v1.0, API Testing v1.0, and Automation Testing v1.0 (all certified) as the reference implementations. Nothing below is final until reviewed and approved; no module writing begins until then.

### 1. Learning Path Overview

**Directory**: `/learning-paths/database-testing/`
**Position**: 4
**Prerequisites**: Foundations (all 17 modules) and Manual Testing v1.0 — specifically [Test Design Fundamentals](/learning-paths/manual-testing/test-design-fundamentals), [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis), and [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning), all reused directly against constraints and data states rather than re-taught — `KNOWLEDGE_GRAPH.md` already pre-designates BVA and Equivalence Partitioning as reused by Database Testing (lines 47–48), so this path is completing a link the graph already anticipated, not inventing a new one.
**Target Audience**: Testers who've completed Manual Testing and want to verify what actually happened to the data, not just what the UI or API reports back — QA engineers on data-heavy systems, backend testers, anyone whose bug reports currently stop at "the UI shows the wrong value" instead of tracing it to the row that caused it.
**Estimated Duration**: 4–6 weeks (16 modules — smaller than Manual Testing's 23 and API Testing's 21, comparable to Automation Testing's 18).

**Industry alignment**: SQL literacy and the ability to verify data state directly (rather than only through the UI/API) is one of the most commonly cited "gap skills" in QA job postings and interview loops — most QA roles above entry level expect at least basic SELECT/JOIN/aggregate fluency, and this path is scoped to close exactly that gap from a tester's, not a DBA's, vantage point.

**Learning Objectives** (path-level):
- Write SQL confidently enough to verify what a feature actually did to the data — not to administer a database
- Apply test design techniques already learned (BVA, Equivalence Partitioning) to constraints, keys, and data boundaries instead of UI fields or API parameters
- Validate CRUD operations, constraints, keys, and relationships directly against the data layer
- Reason about data integrity, consistency, and transactional behavior (ACID) from a tester's perspective — recognizing a violation, not implementing the mechanism
- Read and use stored procedures, views, and triggers well enough to test around them
- Investigate a data-layer defect systematically: trace a wrong UI/API value back to the query, row, or transaction that produced it
- Test database performance and security at a QA level — index awareness and slow-query recognition, not DBA tuning; access-control and injection awareness, not penetration testing
- Validate backup, recovery, and audit-trail behavior for compliance-relevant systems
- Apply the complete database-testing toolkit to realistic banking and e-commerce scenarios, and to one end-to-end capstone

### 2. Curriculum Structure — Sections and Modules

This path uses the **dedicated Section Review + Solutions page pattern from Section 1**, per the certified default established in `REFERENCE_CURRICULUM_CERTIFICATION.md` and applied without deviation by both API Testing and Automation Testing.

#### Section 1 — Database Foundations (Modules 1–3)

1. **What is Database Testing?** — *Objective*: why testers verify the data layer directly instead of trusting the UI/API to report it accurately; where database testing sits relative to manual, API, and automation testing already covered. *Prerequisites*: Foundations complete. *Why it exists*: every path so far opens with a fundamentals module establishing scope before technique — no evidence to deviate. *Est. length*: 1,900–2,300 words.
2. **Relational Database Fundamentals** — *Objective*: tables, rows, columns, primary/foreign keys, schemas, and relationships, taught at the depth a tester needs to reason about data — not database design or normalization theory. *Why it exists*: the conceptual vocabulary every later module assumes; parallels API Testing's HTTP Basics as a new-surface literacy module. *Est. length*: 1,900–2,300 words.
3. **SQL for Testers** — *Objective*: SELECT, WHERE, ORDER BY, JOIN, GROUP BY, and aggregate functions (COUNT, SUM), taught as a verification tool ("did the data end up the way the feature says it should have") rather than as general SQL literacy. *Why it exists*: the direct SQL-equivalent of API Testing's HTTP Basics and Automation's Framework Fundamentals — a new technical surface this entire path is built on. *Est. length*: 2,200–2,600 words (denser — it's the path's core technical-literacy module).

**Section 1 Review + Solutions**: dedicated pages, per the migration policy established in `CURRICULUM_EVOLUTION.md` Entry 1.

#### Section 2 — Data Validation (Modules 4–6)

4. **CRUD Validation** — *Objective*: verifying Create, Read, Update, and Delete operations actually did what the feature claims — the right row changed, the right row didn't, nothing else moved. *Est. length*: 2,000–2,400 words.
5. **Constraints, Keys, and Relationships** — *Objective*: testing that NOT NULL, UNIQUE, primary-key, and foreign-key constraints are actually enforced, and what an orphaned or duplicate record looks like when they aren't — explicitly applying [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) and [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) to constraint boundaries rather than re-teaching the techniques. *Why it exists*: this is the Progressive Extraction principle in action — `KNOWLEDGE_GRAPH.md` pre-designated exactly this link. *Est. length*: 2,200–2,600 words.
6. **Data Integrity and Consistency** — *Objective*: what "the data is correct" actually means across a multi-table operation — consistency after a partial failure, stale reads, and the difference between a UI bug and a data bug. *Est. length*: 2,100–2,500 words.

**Section 2 Review + Solutions**: dedicated pages.

#### Section 3 — Advanced Database Testing (Modules 7–9)

7. **Stored Procedures, Views, and Triggers** — *Objective*: testing business logic that lives in the database itself — what a tester verifies about a stored procedure's output, a view's projection, and a trigger's side effect, without needing to write one from scratch. *Est. length*: 2,100–2,500 words.
8. **Transactions, Locks, and Concurrency** — *Objective*: ACID properties from a tester's perspective (recognizing a violation — a lost update, a dirty read, a deadlock symptom — not implementing isolation levels), and what concurrent-access defects actually look like in a bug report. *Why it exists*: genuinely new content — no prior path tests concurrent data access this directly. *Est. length*: 2,300–2,600 words (this path's most conceptually dense module).
9. **Database Defect Investigation** — *Objective*: the systematic trace from "the UI shows the wrong number" back through the API response, the query, and the row/transaction that actually caused it — this path's equivalent of Automation's flaky-test diagnosis chapter, applied to data instead of test infrastructure. *Est. length*: 2,200–2,600 words.

**Section 3 Review + Solutions**: dedicated pages.

#### Section 4 — Performance and Security (Modules 10–12)

10. **Database Performance Testing** — *Objective*: recognizing a slow query, index awareness (what an index is for, not how to design one), and query-plan literacy at a level a tester can use to file a precise performance defect. *Why it exists*: deliberately scoped to QA-level recognition, not DBA-level tuning — matching how API Testing's Performance module stopped short of full load-engineering treatment. *Est. length*: 2,000–2,400 words.
11. **Database Security Testing** — *Objective*: access-control testing at the data layer (who can query what), SQL injection recognition from a tester's vantage point (identification and reporting, not exploit construction — same scope discipline API Testing's Injection module used), and sensitive-data-at-rest awareness. *Est. length*: 2,000–2,400 words.
12. **Backup, Recovery, and Audit Validation** — *Objective*: what a tester verifies about backup integrity, recovery correctness, and audit-log completeness — directly relevant to AtlasBank's compliance-heavy domain. *Est. length*: 1,900–2,300 words.

**Section 4 Review + Solutions**: dedicated pages. **Deliberate scope decision**: Performance and Security share one section rather than each getting a dedicated section the way API Testing gave Security its own (Section 5). Reason: this path's explicit scope is "basics" for both (see Database Scope in the originating task) — a full dedicated-section treatment of either would exceed what a QA-level (not DBA- or security-specialist-level) database tester needs, and there's no equivalent depth requirement here that API Testing's OWASP API Top 10 treatment had.

#### Section 5 — Application Modules & Capstone (Modules 13–16) — Application Modules

Per `CURRICULUM_EVOLUTION.md` Entry 2 (corrected version), identified as Application Modules **at design time**: `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts (From the Field, Senior QA Insight, Common Interview Mistake) omitted, no Section Review/Solutions pages — matching Manual Testing Sections 6–7, API Testing Section 7, and Automation Section 5's identical precedent.

13. **Applying Database Testing: AtlasBank Banking Database Validation** — full technique combination against AtlasBank's Accounts, Transactions, Beneficiaries, and Loans tables. *Est. length*: 1,700–2,100 words.
14. **Applying Database Testing: E-Commerce Database Validation** — same pattern, second domain, mirroring Manual Testing Modules 20–21's and API Testing Modules 18–19's two-domain structure (order/inventory/payment tables instead of banking tables, since forcing a second AtlasBank scenario here would repeat rather than diversify the practice surface). *Est. length*: 1,700–2,100 words.
15. **Common Mistakes in Database Testing** — cross-cutting mistake patterns, mirroring Manual Testing Module 22 / API Testing Module 20 / Automation Module 17's identical structure (no separate "Common Mistakes" heading — the module *is* that content). *Est. length*: 1,700–2,000 words.
16. **Database Testing Capstone: AtlasBank End-to-End Database Verification** — see Section 8 below. *Est. length*: 1,900–2,200 words.

### 3. Learning Objectives — Mapped to Sections

Section 1 → literacy (relational concepts, SQL as a verification tool); Section 2 → CRUD/constraint/integrity precision, direct technique reuse from Manual Testing; Section 3 → advanced mechanics (stored logic, concurrency, defect tracing); Section 4 → performance and security awareness at QA depth; Section 5 → synthesis across two domains plus one capstone. Every path-level objective listed in Section 1 traces to exactly one section, matching every certified path's own one-to-one mapping.

### 4. Dependency Map

Foundations → Manual Testing (Test Design Fundamentals, BVA, Equivalence Partitioning specifically) → Database Testing Section 1 (which establishes the new SQL/relational literacy those techniques get applied against) → Section 2 (constraints/keys, explicitly reusing BVA/Equivalence Partitioning) → Section 3 (advanced mechanics, assumes Section 2's integrity vocabulary) → Section 4 (performance/security, assumes querying fluency from Sections 1–3) → Section 5 (synthesizes all of it across two domains and a capstone). No section skips a prerequisite — Section 3's concurrency module, for instance, assumes Section 2's transaction-adjacent integrity concepts are already in place.

### 5. AtlasBank Integration Strategy

Database Testing **extends AtlasBank** as its primary domain, continuing the precedent set by Manual Testing (Section 3 onward) and extended by API Testing and Automation Testing. This path adds the data layer underneath tables already implied by those paths' examples: **Customers, Accounts, Transactions, Beneficiaries, Loans, Cards, Audit Logs, KYC, Payments**. SQL examples throughout Sections 1–4 draw from this schema (e.g., verifying a transfer's double-entry via `Transactions`, checking `Beneficiaries` foreign-key integrity against `Accounts`, confirming `Audit Logs` completeness for a `KYC` status change). Module 14 deliberately steps outside AtlasBank into **AtlasShop**, a named e-commerce entity (orders, inventory, payments) approved specifically so learners get a genuinely different schema and data model, not an unnamed placeholder — the same reason Manual Testing and API Testing each used a second domain in their own Application sections. Practicing the same techniques against an unfamiliar schema is a different, valuable skill from applying them to an already-memorized one. `STYLE_GUIDE.md`'s existing exception applies unchanged: don't force AtlasBank where a different domain genuinely fits better.

### 6. Application-Module Strategy

Section 5 (Modules 13–16) is designated as Application Modules at design time, per `CURRICULUM_EVOLUTION.md` Entry 2's corrected migration guidance: `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, tighter word-count band (1,700–2,200 words), no Section Review/Solutions pages.

### 7. Capstone Proposal

**Recommendation**: **AtlasBank End-to-End Database Verification** (Module 16) — the same underlying AtlasBank international-transfer compliance-aggregation defect that Manual Testing, API Testing, and Automation Testing each independently rediscovered at their own layer (test-case design, API contract, automated suite), now traced to its actual source: a data-layer aggregation error, found via the SQL joins and window-based queries this path teaches in Sections 2–3. This would be the fourth independent confirmation of the same defect at a fourth layer — a deliberate narrative bookend across all four shipped/proposed paths, not a coincidence, and the strongest possible demonstration of *why* database-layer verification matters (the UI, the API, and the automated suite could all look correct while the underlying data aggregation is still wrong).

Unlike API Testing's original proposal — where extending AtlasBank into a new layer was a genuinely open decision requiring confirmation — this recommendation applies an already-approved, three-times-confirmed pattern rather than opening a new one, so it's presented here as the adopted approach rather than a blocking question. If a reason emerges during implementation to deviate (as happened with API Testing's own Section 7 domain substitution), it will be flagged the same way that was.

### 8. Review/Solutions Page Strategy

Every section (1–4) gets a dedicated **Section N Review** page and **Section N Solutions** page from its first appearance, per the certified default — cross-path title disambiguation applied proactively (`"Database Testing — Section N Review"`), since Manual Testing, API Testing, and Automation Testing all already have Sections 1–4. Section 5 gets no Review/Solutions pages, matching every other path's Application section precedent.

### 9. Word-Count Targets and Estimated Total Curriculum Size

Instruction modules (Sections 1–4, 12 modules): 1,900–2,600 words each, matching the certified range every prior path has shipped within. Application modules (Section 5, 4 modules): 1,700–2,200 words, matching API Testing's approved Application Module band (Automation's own Application Modules shipped tighter, 1,312–1,412 words, which remains within `CONTENT_MODEL.md`'s tolerance as a lower bound, not a target). **Estimated path total**: roughly 30,000–35,000 words across 16 modules — smaller than API Testing's ~39,000–45,000 and Automation's ~13,000–15,000-for-its-own-Section-5-alone-plus-12-earlier-modules, consistent with this being the narrowest-scope certified-track path so far (16 modules, one clearly bounded technical surface).

### 10. Differences from the Reference Curricula (evidence-justified only)

- **Combined Performance + Security section (Section 4)** instead of each getting its own dedicated section the way API Testing dedicated Section 5 to Security alone: both are explicitly scoped to "basics" per this path's originating task, not full specialist depth — a deliberate, evidenced scope decision, not an oversight.
- **New foundational literacy module (SQL for Testers, Module 3)**: parallels HTTP Basics for Testers (API Testing) and Automation Framework Fundamentals (Automation Testing) — every path so far has needed exactly one new-surface-literacy module in Section 1, and this is Database Testing's.
- **Direct reuse of BVA and Equivalence Partitioning against constraints (Module 5)** rather than re-teaching test-value selection — not a new pattern; `KNOWLEDGE_GRAPH.md` pre-designated this exact link before this proposal was written.
- **16 modules / 5 sections**, the smallest of the four tracks proposed or shipped so far — Database Testing is a single, well-bounded technical surface (the data layer) rather than a discipline with its own sub-specializations the way API Testing's security/performance/tooling sections each represented, so it doesn't need as many sections to cover its scope completely.
- **Everything else** — the five recurring callouts, the Prerequisites/Leads-to block, the Forward Reference Rule, frontmatter conventions, the Application Module structure, dedicated Review/Solutions pages from Section 1 — carries over unchanged, since no evidence suggests any of it doesn't apply to this path.

### Decisions (Approved 2026-08-05)

1. **AtlasBank extension into Database Testing**: ✅ Approved (see Section 5 above) — applying an already-three-times-approved pattern, not a new open question.
2. **Capstone as the fourth independent confirmation of the AtlasBank compliance defect**: ✅ Approved (see Section 7), plus one additional database-specific defect (referential integrity, transaction consistency, or audit-log persistence) discoverable only through direct database validation — the layer no prior capstone could reach.
3. **16-module / 5-section structure**: ✅ Approved as proposed.
4. **Test Data Management**: ✅ Stays integrated throughout (CRUD Validation, Data Integrity, and the Application Modules) rather than becoming a standalone module — a dedicated module would overemphasize it relative to the rest of the curriculum. Module 14's original placeholder question is resolved: no standalone module.
5. **Module 14's contrasting domain**: ✅ **AtlasShop** — a named e-commerce entity, keeping AtlasBank as the primary domain while giving learners a genuinely different schema and data model to practice against, without introducing a fully unrelated fictional universe.

**Success Criteria**:
- Learner writes a SQL query to verify what a feature actually did to the data, not just what the UI or API reported
- Learner identifies a constraint, integrity, or concurrency defect directly from the data layer, and traces a UI-visible bug back to its data-layer cause
- Learner tests database performance and security at a QA level of depth (recognition and reporting, not DBA-level tuning or exploit construction)
- Learner applies the full toolkit to a realistic banking and a realistic e-commerce scenario, and completes an end-to-end capstone

### Section 1 — As Shipped

Shipped as designed: **What is Database Testing?** (Module 1 — the four-layer diagram distinguishing database testing from UI/API/automated-suite testing, and the interruption/retry principle), **Relational Database Fundamentals** (Module 2 — tables, keys, relationship types, and the AtlasBank schema ER diagram), **SQL for Testers** (Module 3 — `SELECT`/`WHERE`/`ORDER BY`/`JOIN`/`GROUP BY`/`COUNT`/`SUM`/`EXISTS`, taught as verification tools against real AtlasBank tables). Dedicated **Section 1 Review** and **Section 1 Solutions** pages shipped from the start, with proactive cross-path title disambiguation (`"Database Testing — Section 1 Review"`).

### Section 2 — As Shipped

Shipped as designed: **CRUD Validation** (Module 4 — a systematic per-operation framework, including the "did anything unintended also change" check most UI-only testing structurally misses), **Constraints, Keys, and Relationships** (Module 5 — NOT NULL/UNIQUE/PK/FK/CHECK constraints, with [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) and [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) applied directly to constraint boundaries, per this path's approved Progressive Extraction link), **Data Integrity and Consistency** (Module 6 — cross-row consistency under partial-failure interruption, and the UI-bug-vs-data-bug diagnostic). Dedicated **Section 2 Review** and **Section 2 Solutions** pages shipped, cross-path disambiguated.

### Section 3 — As Shipped

Shipped as designed: **Stored Procedures, Views, and Triggers** (Module 7 — testing database-resident business logic, and trigger-coverage testing across every distinct write path that can fire a trigger, not just the obvious one), **Transactions, Locks, and Concurrency** (Module 8 — ACID from a tester's vantage, and deliberately-triggered concurrent tests for lost updates, dirty reads, and deadlocks), **Database Defect Investigation** (Module 9 — the systematic, outside-in trace chain from a vague symptom to a specific, reproducible root cause, tying every earlier module's defect class together). Dedicated **Section 3 Review** and **Section 3 Solutions** pages shipped, cross-path disambiguated.

### Section 4 — As Shipped

Shipped as designed: **Database Performance Testing** (Module 10 — realistic-data-volume scaling tests, QA-level index awareness, and N+1 query detection via observable query counts), **Database Security Testing** (Module 11 — least-privilege verification, SQL injection symptom recognition using legitimate special-character input, and data-at-rest checks, all scoped to identification and reporting per API Testing's own precedent), **Backup, Recovery, and Audit Validation** (Module 12 — why a backup job's own success status isn't evidence of restorability, and trigger-coverage testing extended specifically to compliance-relevant audit trails). Dedicated **Section 4 Review** and **Section 4 Solutions** pages shipped, cross-path disambiguated. Performance and Security remained one combined section as proposed, both scoped deliberately to QA-level "basics."

### Section 5 — As Shipped (Approved 2026-08-05)

Shipped per the approved decisions: Test Data Management stayed integrated throughout rather than becoming a standalone module; Module 14 used **AtlasShop**, a named e-commerce entity, as its contrasting domain.

**Modules**: **Applying Database Testing: AtlasBank Loan Disbursement Validation** (Module 13, Application — combining Sections 1–4 against a loan lifecycle feature; found an under-scoped disbursement-cap constraint, a lost-update financial discrepancy under concurrent early repayment, and an audit-trail gap on an automated auto-debit path), **Applying Database Testing: AtlasShop Database Validation** (Module 14, Application — the same toolkit against a genuinely unfamiliar e-commerce schema; found a non-atomic stock check-and-decrement, a resulting inventory overselling lost update, and a least-privilege gap in a read-only analytics tool), **Common Mistakes in Database Testing** (Module 15, Application — six cross-cutting patterns, each traced to a real defect from earlier in this path, mirroring Manual Testing Module 22 / API Testing Module 20 / Automation Module 17's identical structure), **Database Testing Capstone: AtlasBank End-to-End Database Verification** (Module 16, Application — see below).

**Capstone**: independently rediscovered the same AtlasBank compliance-aggregation defect (a rolling-hour check where the business rule requires a full calendar day) that Manual Testing, API Testing, and Automation Testing each already found at their own layer — the fourth independent confirmation, and the first able to trace the defect to its exact query-level root cause (the stored procedure's date-range clause) rather than only its symptom, since only direct database access can read the query logic itself. Also introduced one genuinely new, database-specific defect per the approved capstone requirement: an audit-trail gap where a nightly batch reconciliation job updates compliance-flag state via a bulk `UPDATE` that bypasses the same audit trigger the real-time path correctly fires — invisible to every layer above the database, since none of the other three capstones had any visibility into whether a trigger fired.

**No Section 5 Review/Solutions pages** — matching every other path's identical Application Module precedent.

**Progress**: 16 / 16 modules shipped. **Database Testing v1.0 is complete.**

---

## Path 5: Test Automation

**Status**: 🚧 In progress. Sections 1–4 (Modules 1–12) below are approved and being implemented against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s defaults, per direct user specification (module titles and section grouping given explicitly, in place of a separate architecture-proposal document — the equivalent decisions this section normally records are captured inline below instead).

**Directory**: `/learning-paths/automation/`
**Position**: 5
**Prerequisites**: Foundations, Manual Testing and Test Design — reuses its test-design toolkit and artifact skills directly rather than re-teaching them, the same Progressive Extraction pattern API Testing established
**Target Audience**: Automation engineers, SDETs, developers writing tests
**Estimated Duration**: 6–10 weeks (Sections 1–4; more sections likely follow beyond this scope)

**Learning Objectives** (Sections 1–4):
- Understand what automation is for, and how to select which test cases actually belong in an automated suite
- Understand automation framework fundamentals, the Page Object Model, and data-driven testing as design patterns — concepts first, tool syntax second
- Diagnose and prevent test flakiness: synchronization, wait strategies, and assertion design
- Report results, integrate into CI/CD, and run tests in parallel reliably

**Architecture decisions made for this path** (defaults inherited from `REFERENCE_CURRICULUM_CERTIFICATION.md` unless noted):
- **Domain**: continues AtlasBank as the system under test (its web app — Internet Banking, Admin Portal — automated via Playwright/Selenium/Cypress-style examples) rather than introducing a new fictional entity, per the "reuse unless a genuine reason exists" instruction and consistent with API Testing's own extension of AtlasBank.
- **Tool coverage**: concept-first, tool-second throughout — a principle (e.g., an explicit wait vs. a synchronization primitive) is taught before any framework-specific syntax, and no single framework (Playwright, Selenium, Cypress) is treated as canonical; examples rotate or show comparative snippets deliberately, per explicit instruction to avoid framework bias.
- **Review/Solutions pages**: dedicated pages from Section 1, per the certified default.
- **Recurring elements**: all five (From the Field, Senior QA Insight, Mini Challenge, Common Interview Mistake, Quick Revision) on every instruction module from Module 1 onward — applying the lesson from the Platform Consistency Sprint's largest finding (API Testing shipped all 17 modules missing two of five) by checking this explicitly at each module, not just at a later audit.
- **Cross-path title disambiguation**: applied proactively from the first Section Review/Solutions page (`"Automation Testing — Section N Review"`), since Manual Testing and API Testing both already have Sections 1–4 — this collision is now anticipated, not discovered after the fact.
- **Application Modules**: none in Sections 1–4 scope; a later section (mistakes/tool-comparison/capstone, per the original stub below) would identify its own application-module section at design time when reached.

### Section 1 — Automation Foundations (Modules 1–3)
1. Introduction to Automation Testing
2. Automation vs. Manual Testing
3. Selecting the Right Test Cases for Automation

### Section 2 — Framework and Design Patterns (Modules 4–6)
4. Automation Framework Fundamentals
5. Page Object Model
6. Data-Driven Testing

### Section 3 — Reliability and Verification (Modules 7–9)
7. Synchronization and Wait Strategies
8. Test Stability and Flaky Tests
9. Assertions and Verification Strategies

### Section 4 — Reporting and Execution at Scale (Modules 10–12)
10. Test Reporting
11. CI/CD Integration
12. Parallel Execution

**Success Criteria** (Sections 1–4):
- Learner explains what should and shouldn't be automated, and why
- Learner designs a maintainable Page Object Model for a realistic feature
- Learner diagnoses a flaky test's root cause and fixes it, not just retries it
- Learner explains how a suite integrates into CI/CD and runs safely in parallel

**Remaining, not yet scoped in detail**: the original stub's later topics (maintaining automation at scale, tool comparison, common automation mistakes, interview preparation) likely become a Section 5 Application/Capstone phase, following the same identify-at-design-time policy as every certified path — to be proposed once Sections 1–4 are reviewed, not assumed now.

### Section 1 — As Shipped

Shipped as designed: **Introduction to Automation Testing** (Module 1 — execution vs. design distinction, automation-candidate criteria), **Automation vs. Manual Testing** (Module 2 — complementary, not competing, framed around risk category), **Selecting the Right Test Cases for Automation** (Module 3 — multi-criteria framework plus anti-criteria). Dedicated **Section 1 Review** and **Section 1 Solutions** pages shipped from the start, with proactive cross-path title disambiguation (`"Automation Testing — Section 1 Review"`) since API Testing already has a Section 1 Review.

### Section 2 — As Shipped

Shipped as designed: **Automation Framework Fundamentals** (Module 4 — six structural concerns, tool-agnostic, brief Playwright/Selenium/Cypress/TestNG/JUnit comparison with no framework bias), **Page Object Model** (Module 5), **Data-Driven Testing** (Module 6 — explicitly linked back to Manual Testing's BVA/Equivalence Partitioning/Test Data Design rather than re-teaching test-value selection). Dedicated **Section 2 Review** and **Section 2 Solutions** pages, cross-path disambiguated.

### Section 3 — As Shipped

Shipped as designed: **Synchronization and Wait Strategies** (Module 7 — hardcoded pause vs. explicit wait, tool-agnostic with a Playwright/Cypress automatic-waiting note), **Test Stability and Flaky Tests** (Module 8 — diagnosis over blind retry, explicitly including "the application itself" as a possible root cause, not just the test), **Assertions and Verification Strategies** (Module 9 — assertion precision spectrum, explicitly linked back to Manual Testing's Writing Clear Test Cases). Dedicated **Section 3 Review** and **Section 3 Solutions** pages, cross-path disambiguated.

### Section 4 — As Shipped

Shipped as designed: **Test Reporting** (Module 10 — actionable failure reports, expected/actual detail, screenshots, failure history), **CI/CD Integration** (Module 11 — the required-check mechanism that makes automation a real gate, not just automatic execution; tool-agnostic, GitHub Actions/Jenkins mentioned as examples only), **Parallel Execution** (Module 12 — runtime benefit vs. the strict test-isolation requirement it demands, closing with a real isolation-defect example). Dedicated **Section 4 Review** and **Section 4 Solutions** pages, cross-path disambiguated.

**Progress**: 12 / 12 modules shipped. **Automation Testing Sections 1–4 complete.**

### Section 5 — Application and Capstone (Approved Architecture Proposal, 2026-08-05)

**Status**: 📋 Approved, implementation beginning. Full proposal reasoning lives in this session's Engineering Review; summarized here per standard practice.

**Modules**:
13. Choosing and Comparing Automation Tools (Instruction) — genuinely new content: deliberate tool selection, absent from Sections 1–4's tool-agnostic framing
14. Maintaining Automation at Scale (Instruction) — genuinely new content: suite health after it's built and stable, never covered in Sections 1–4
15. Applying Automation: AtlasBank Fund Transfer Suite (Application) — data-driven, assertion-heavy integrated scenario
16. Applying Automation: AtlasBank Onboarding and KYC Flow (Application) — synchronization/CI-integration-heavy contrasting scenario
17. Common Mistakes in Test Automation (Application) — cross-cutting synthesis, third instance of this cross-path pattern (after Manual Testing Module 22, API Testing Module 20)
18. Automation Testing Capstone (Application) — automates the same international-transfer feature Manual Testing and API Testing already capstoned, continuing that explicit cross-path narrative thread

**Deviation from precedent, evidenced**: 6 modules instead of Manual Testing's/API Testing's 4, because two modules (13–14) are genuinely new instruction content the original stub identified and Sections 1–4 never covered — unlike either reference path's closing section, which was 100% synthesis. Rejected the stub's "Interview Preparation" module — every module already has its own Interview Questions section; neither reference path built a dedicated interview-prep module despite the identical redundancy.

**No Section 5 Review/Solutions pages** — matching Manual Testing Sections 6–7 and API Testing Section 7's identical precedent.

**Estimated total**: ~13,000–15,000 words across 6 modules. Path total on completion: 18 modules — smaller than both reference paths, consistent with this path's tighter section pacing throughout.

### Section 5 — As Shipped

Shipped as proposed: Modules 13–14 (Instruction, 2,214/2,425 words), Modules 15–18 (Application, 1,312–1,412 words — leaner than API Testing's own Application Module range, within `CONTENT_MODEL.md`'s tolerance and consistent with the "tighter, more focused" quality that pattern is designed to produce). Module 18's capstone confirmed the same aggregation-window compliance defect Manual Testing's and API Testing's capstones each independently found at their own layer — a deliberate, evidenced third confirmation, not a coincidence. No Section 5 Review/Solutions pages, per the approved proposal. Zero deviations from the approved architecture proposal during implementation.

**Progress**: 18 / 18 modules shipped. **Automation Testing v1.0 complete.**

---

## Path 6: Performance Testing

**Status**: 📋 Architecture proposal — planning only, no module content written. This section is the blueprint for Performance Testing v1.0, produced against Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, and Database Testing v1.0 (all certified) as the reference implementations. Nothing below is final until reviewed and approved; no module writing begins until then. **All four certified paths remain frozen — this proposal modifies none of them.**

### 1. Learning Path Overview

**Directory**: `/learning-paths/performance-testing/`
**Position**: 6
**Prerequisites**: Foundations (all 17 modules), plus at least one of Manual Testing, API Testing, or Database Testing — this path assumes general test-design fluency and, for its data-layer bottleneck content specifically, light familiarity with [Database Performance Testing](/learning-paths/database-testing/database-performance-testing)'s QA-level scope (referenced, not re-taught).
**Target Audience**: Testers and QA engineers moving from functional correctness into non-functional testing — performance-focused QA, backend testers, and SDETs asked to own load testing for the first time.
**Estimated Duration**: 6–9 weeks (17 modules).

**Industry alignment**: performance testing is consistently named as a "next skill" QA engineers are asked to grow into once functional testing is established, and job postings for Senior QA / SDET roles frequently list load/stress testing and basic capacity reasoning as expected, not specialist-only, skills — this path is scoped to close that specific gap, not to produce a dedicated performance engineer.

**Learning Objectives** (path-level):
- Understand the distinct performance testing types (load, stress, spike, soak, volume) and when each is the right tool
- Read and set meaningful performance metrics and SLOs, not arbitrary numbers
- Model realistic workload and design a test environment and test data that produce trustworthy results
- Run a performance test using a real tool (JMeter, with concept-first framing applying to k6/Gatling/Locust equally)
- Analyze results to find the actual bottleneck, not just observe that something was slow
- Monitor a system under load and connect findings to real architecture and resource constraints
- Report performance findings and plan for future capacity, both to technical and non-technical stakeholders
- Apply the complete performance-testing toolkit to a realistic AtlasBank feature under load, and to one capstone

### 2. Curriculum Structure — Sections and Modules

This path uses the **dedicated Section Review + Solutions page pattern from Section 1**, per the certified default every prior path has applied without deviation.

#### Section 1 — Performance Testing Foundations (Modules 1–3)

1. **What is Performance Testing?** — *Objective*: why correctness (what every prior path taught) and performance (does it stay correct fast enough, under real load) are two different, both-necessary questions; where this path sits relative to Database Testing's and API Testing's own QA-level performance modules, which it references rather than repeats. *Prerequisites*: Foundations complete. *Why it exists*: every certified path opens with a fundamentals module establishing scope before technique — no evidence to deviate. *Est. length*: 1,900–2,300 words.
2. **Performance Testing Types** — *Objective*: load, stress, spike, soak, and volume testing, taught together as one module (each type is a variation on "how load is shaped over time," not five unrelated concepts) rather than split into five separate pages. *Why it exists*: mirrors `KNOWLEDGE_GRAPH.md`'s own Progressive Extraction discipline — these five stay one node until a real, separate reference need splits them, the same reasoning that's kept Combinatorial/Pairwise Testing and the six Quality Attributes each as one page. *Est. length*: 2,200–2,600 words (denser — five distinct types, each needing a clear, memorable distinction).
3. **Performance Metrics and SLOs** — *Objective*: latency, throughput, error rate, and resource utilization as the core metrics; how a meaningful SLO threshold is set (tied to real user/business impact) versus an arbitrary round number. *Est. length*: 2,000–2,400 words.

**Section 1 Review + Solutions**: dedicated pages, per the certified default.

#### Section 2 — Designing a Performance Test (Modules 4–6)

4. **Workload Modeling** — *Objective*: turning real or estimated usage patterns into a realistic test workload — concurrent users, request mix, think time — instead of an arbitrary number picked because it sounded big enough. *Est. length*: 2,100–2,500 words.
5. **Test Environment Design** — *Objective*: why a performance test run against a scaled-down or misconfigured environment produces numbers that don't transfer to production, and what "close enough to production" actually requires. *Est. length*: 1,900–2,300 words.
6. **Test Data for Performance** — *Objective*: realistic data *volume* and *shape* for a performance test, explicitly building on [Database Performance Testing](/learning-paths/database-testing/database-performance-testing)'s own "small test data hides this defect class" lesson — referenced directly, not re-taught, since that module already established the core principle at QA-recognition depth; this module extends it to designing the data a dedicated performance test actually needs. *Est. length*: 2,000–2,400 words.

**Section 2 Review + Solutions**: dedicated pages.

#### Section 3 — Executing Performance Tests (Modules 7–9)

7. **Performance Testing Tools** — *Objective*: JMeter fundamentals as the primary worked tool, with concept-first framing (what a test plan, a thread group, and an assertion are *for*) that transfers directly to k6/Gatling/Locust, mirroring Automation Testing's own tool-agnostic, concept-first discipline and API Testing's own Tools module structure — not a single-tool tutorial. *Est. length*: 2,200–2,600 words.
8. **Load and Stress Testing in Practice** — *Objective*: structuring an actual load test (baseline → ramp → sustained) and an actual stress test (pushing past expected capacity to find the breaking point), using the workload model and environment from Section 2. *Est. length*: 2,200–2,600 words.
9. **Spike, Soak, and Volume Testing in Practice** — *Objective*: the same practical structuring for the three remaining types from Module 2 — a sudden traffic spike, a long-duration soak run (catching memory leaks and slow degradation), and a large-data-volume run. *Est. length*: 2,100–2,500 words.

**Section 3 Review + Solutions**: dedicated pages.

#### Section 4 — Analysis and Operations (Modules 10–13)

10. **Bottleneck Analysis and Monitoring** — *Objective*: reading monitoring data (CPU, memory, database, network) during and after a test run to identify *which* resource is actually the constraint, not just that something was slow. Combines bottleneck identification and the monitoring/observability tooling that makes it possible into one module, since one doesn't function without the other. *Est. length*: 2,300–2,600 words.
11. **Result Analysis and Reporting** — *Objective*: turning raw test output into a defensible finding, and communicating it to both an engineering audience (percentile latency, error budgets) and a non-technical stakeholder (business-impact framing) — the same dual-audience discipline [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports) established for defects, applied here to performance findings. *Est. length*: 2,000–2,400 words.
12. **Capacity Planning** — *Objective*: using performance-test results to forecast when current infrastructure will no longer meet demand, and what a testable, credible capacity recommendation looks like. *Est. length*: 1,900–2,300 words.
13. **Performance Defect Investigation** — *Objective*: a systematic, repeatable trace from "the system feels slow" to a specific, reproducible root cause — this path's own version of [Database Defect Investigation](/learning-paths/database-testing/database-defect-investigation)'s closing-the-toolkit module, tying Modules 1–12 together the same way that module tied Database Testing's own techniques together. *Est. length*: 2,200–2,600 words.

**Section 4 Review + Solutions**: dedicated pages.

#### Section 5 — Application Modules & Capstone (Modules 14–17) — Application Modules

Per `CURRICULUM_EVOLUTION.md` Entry 2 (corrected version), identified as Application Modules **at design time**: `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, no Section Review/Solutions pages — matching every certified path's identical Section 5 precedent.

14. **Applying Performance Testing: AtlasBank Fund Transfer Under Load** — full technique combination (workload modeling, load + stress testing, bottleneck analysis) against AtlasBank's fund-transfer feature. *Est. length*: 1,700–2,100 words.
15. **Applying Performance Testing: AtlasShop Checkout Under Load** — same pattern, second domain, continuing Database Testing's own AtlasShop extension rather than introducing a third fictional entity — checkout and inventory-reservation flows have a genuinely different load shape (bursty, sale-driven) than steady banking traffic, a deliberate contrast. *Est. length*: 1,700–2,100 words.
16. **Common Mistakes in Performance Testing** — cross-cutting mistake patterns, mirroring every certified path's identical Common-Mistakes-module structure (no separate "Common Mistakes" heading — the module *is* that content). *Est. length*: 1,700–2,000 words.
17. **Performance Testing Capstone** — see Section 8 below. *Est. length*: 1,900–2,200 words.

### 3. Learning Objectives — Mapped to Sections

Section 1 → literacy (types, metrics, SLOs); Section 2 → test design (workload, environment, data); Section 3 → execution (tools, running each test type); Section 4 → analysis, reporting, capacity, and systematic investigation; Section 5 → synthesis across two domains plus one capstone. Every path-level objective listed in Section 1 traces to exactly one section, matching every certified path's own one-to-one mapping.

### 4. Dependency Map

Foundations → (Manual Testing, API Testing, or Database Testing — any one satisfies the prerequisite) → Performance Testing Section 1 (establishes performance-specific literacy) → Section 2 (design, assumes Section 1's metrics vocabulary) → Section 3 (execution, assumes Section 2's design artifacts exist to run) → Section 4 (analysis, assumes Section 3 produced real results to analyze) → Section 5 (synthesizes all of it). Module 6 explicitly bridges from [Database Performance Testing](/learning-paths/database-testing/database-performance-testing) rather than re-teaching its core lesson — the clearest Progressive Extraction link this path has, alongside Combinatorial/Pairwise Testing's pre-designated reuse per `KNOWLEDGE_GRAPH.md`.

### 5. AtlasBank Integration Strategy

Performance Testing **extends both AtlasBank and AtlasShop** as its Application Module domains, continuing the precedent Database Testing most recently established (the first path to name a second, contrasting domain rather than leaving it unnamed). AtlasBank's fund-transfer flow provides steady, predictable traffic; AtlasShop's checkout flow provides bursty, sale-driven traffic — a deliberate load-shape contrast neither prior path's own examples needed to make, since neither was testing *under load* specifically. Sections 1–4's own examples draw from both schemas as needed for variety, per `STYLE_GUIDE.md`'s existing exception (don't force a domain where a different one fits better).

### 6. Application-Module Strategy

Section 5 (Modules 14–17) is designated as Application Modules at design time, per `CURRICULUM_EVOLUTION.md` Entry 2's corrected migration guidance: `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, tighter word-count band (1,700–2,200 words), no Section Review/Solutions pages.

### 7. Review/Solutions Page Strategy

Every section (1–4) gets a dedicated **Section N Review** page and **Section N Solutions** page from its first appearance, per the certified default — cross-path title disambiguation applied proactively (`"Performance Testing — Section N Review"`), since all four certified paths already have Sections 1–4. Section 5 gets no Review/Solutions pages, matching every certified path's Application section precedent.

### 8. Capstone Proposal

**Recommendation**: **AtlasBank International Transfer Under Load** (Module 17) — the same feature Manual Testing, API Testing, Automation Testing, and Database Testing each already tested at their own layer, now tested for the first time *under realistic concurrent load* rather than for correctness. This is a genuinely new angle, not a fifth repetition of the same finding: the prior four capstones all independently found the same compliance-aggregation-window defect: at low, uncontended traffic. This capstone's distinctive contribution is testing whether the *fix* (and the feature generally) holds up under realistic peak load — proposed finding: the compliance-check stored procedure Database Testing's own capstone identified (`WHERE created_at > NOW() - INTERVAL '1 hour'`, since corrected) becomes a measurable bottleneck under concurrent load even after correctness is fixed, because the corrected calendar-day query scans a wider row range per check — a real, previously-invisible performance cost of the correctness fix itself, only discoverable by a dedicated load test. This is presented as a recommendation, not an assumed default, the same way every capstone proposal before it has been — but it continues an established, four-times-confirmed pattern rather than opening a new one.

### 9. Word-Count Targets and Estimated Total Curriculum Size

Instruction modules (Sections 1–4, 13 modules): 1,900–2,600 words each, matching the certified range every prior path has shipped within. Application modules (Section 5, 4 modules): 1,700–2,200 words, matching the approved default band (Database Testing's own Application Modules shipped leaner, 1,435–1,779, which remains within `CONTENT_MODEL.md`'s tolerance as a lower bound, not a target). **Estimated path total**: roughly 32,000–37,000 words across 17 modules — between Database Testing's ~30,000–35,000 and API Testing's ~39,000–45,000, consistent with this path's 17-module scope.

### 10. Industry Alignment (restated, see also Section 1)

Load/stress testing and basic capacity reasoning are commonly expected of Senior QA and SDET roles, not reserved for a dedicated performance-engineering specialist — this path is scoped to that realistic expectation, explicitly not to the deeper, infrastructure-level specialization a dedicated Site Reliability or Performance Engineering role would need.

### 11. Differences from the Reference Curricula (evidence-justified only)

- **Two Application Module domains from the start (AtlasBank and AtlasShop, Modules 14–15)**, continuing rather than introducing this pattern — Database Testing already established a second, named domain; this path reuses both rather than inventing a third.
- **Section 4 runs four modules instead of three**: Bottleneck Analysis/Monitoring, Result Analysis/Reporting, Capacity Planning, and Performance Defect Investigation are four genuinely distinct concerns that don't compress further without losing a real objective — Database Testing's own Section 4 similarly ran a non-default size (three modules, deliberately combining Performance+Security) when the content required it; this is the same "size follows content, not a fixed template" principle applied in the other direction.
- **Five performance-testing types taught as one module (Module 2)** rather than five separate ones — directly applying `KNOWLEDGE_GRAPH.md`'s Progressive Extraction discipline (already used for Combinatorial/Pairwise Testing and the six Quality Attributes) to a new case, not inventing a new principle.
- **17 modules / 5 sections**, comparable in scope to Database Testing (16) and Automation Testing (18) — a single, well-bounded discipline (performance testing) rather than one with its own internal sub-specializations the way API Testing's security/performance/tooling sections each represented.
- **Everything else** — the five recurring callouts, the Prerequisites/Leads-to block, the Forward Reference Rule, frontmatter conventions, the Application Module structure, dedicated Review/Solutions pages from Section 1 — carries over unchanged, since no evidence suggests any of it doesn't apply to this path.

### Decisions

1. **AtlasBank and AtlasShop as this path's two Application domains**: recommended (see Section 5) — applying an already-established pattern, not opening a new one.
2. **Capstone as a fifth, load-specific confirmation layer on the same AtlasBank feature, surfacing a new performance cost of the Database Testing capstone's own fix**: recommended (see Section 8) — flagged explicitly per template convention; genuinely new content (a performance finding, not a repeated correctness finding), not just narrative continuity for its own sake.
3. **17-module / 5-section structure, with Module 2 consolidating five performance-testing types into one module**: as proposed above, pending review.

### Open Questions for Review

1. **This path's own certified-frozen constraint**: since Manual Testing, API Testing, Automation Testing, and Database Testing are all certified and explicitly frozen per this proposal's own instruction, the capstone's proposed finding (a performance cost in Database Testing's already-shipped, already-certified fix) can be *described and tested* by this path, but nothing in Database Testing itself would be retrofitted to reflect it — worth confirming this framing (a new finding *about* frozen content, not a change *to* it) is the intended interpretation before Module 17 is written.
2. **Tool choice for worked examples**: JMeter is proposed as primary (per the originating task's explicit scope list), with k6/Gatling/Locust referenced conceptually rather than given equal worked-example treatment — confirm this asymmetry (one primary tool, others referenced) is acceptable, or whether a more tool-agnostic treatment (no single primary tool, matching Automation Testing's own stricter tool-neutrality) is preferred instead.

**Success Criteria**:
- Learner designs a realistic load test (workload model, environment, data) for a given feature, not just runs a tool with default settings
- Learner runs a performance test and correctly identifies the actual bottleneck from monitoring data, not just that something was slow
- Learner reports a performance finding appropriately to both a technical and a non-technical audience, and produces a credible capacity recommendation
- Learner applies the full toolkit to a realistic AtlasBank and AtlasShop scenario, and completes an end-to-end capstone

### Approved Decisions (2026-08-05)

1. **Capstone framing**: approved with clarification — the capstone must not imply Database Testing's certified fix was wrong or needs changing. Reframed explicitly as five layers each answering a different question about the *same, already-correct* implementation (Manual Testing found the business-rule defect; API Testing verified service-layer behavior; Database Testing identified the stored-procedure implementation; Automation Testing keeps the regression fixed; Performance Testing evaluates the operational *cost*, under production-scale load, of that already-correct solution) — a new quality attribute of correct code, not a new defect in it. Keeps all four certified curricula internally consistent; nothing about Database Testing is implied to need revisiting.
2. **Tool neutrality**: approved — follow Automation Testing's own precedent. Concepts first; JMeter as the primary worked example specifically because it's open-source and widely adopted, not because it's canonical; other tools (k6, Gatling, Locust, plus Grafana/Prometheus for monitoring) introduced where educationally appropriate without being given equal worked-example treatment. The curriculum teaches "how performance testing works," not "how JMeter works."

### Section 1 — As Shipped

Shipped with a revised module list, given directly at implementation time (the same "module titles specified directly, equivalent decisions captured inline" pattern Automation Testing's own Sections 1–4 used): **What is Performance Testing?** (Module 1 — correctness vs. performance as independent properties, explicitly building on rather than duplicating Database Testing's and API Testing's own QA-level performance-recognition modules), **Performance Metrics and SLAs** (Module 2 — latency/throughput/error rate/resource utilization, percentiles vs. averages, the SLA-vs-SLO distinction), **Performance Testing Strategy** (Module 3 — risk-based prioritization of what deserves dedicated testing, the baseline→load→stress sequencing dependency, what a written strategy captures). Dedicated **Section 1 Review** and **Section 1 Solutions** pages shipped, cross-path disambiguated (`"Performance Testing — Section 1 Review"`).

**Deviation from the original proposal**: Module 2 was originally proposed as "Performance Testing Types," with metrics/SLOs as Module 3. As implemented, Module 2 became **Performance Metrics and SLAs** and Module 3 became the new **Performance Testing Strategy** (a planning-layer module not in the original 17-module proposal); **Performance Testing Types** moved to open Section 2 as Module 4 instead. This restructuring was specified directly in the implementation task, the same way Automation Testing's own Section 1 modules were — not discovered as a defect requiring correction.

### Section 2 — As Shipped

Shipped as directed: **Performance Testing Types** (Module 4 — load, stress, spike, soak, and volume testing kept as one module per `KNOWLEDGE_GRAPH.md`'s Progressive Extraction discipline, the same reasoning already applied to Combinatorial/Pairwise Testing and the six Quality Attributes), **Performance Test Environment** (Module 5 — infrastructure, network, third-party dependency, and configuration parity; why an unrealistically fast mock can hide the real bottleneck), **Test Data for Performance** (Module 6 — volume, shape, and distribution as three separate properties, extending rather than repeating Database Testing's own small-test-data lesson). Dedicated **Section 2 Review** and **Section 2 Solutions** pages shipped, cross-path disambiguated.

### Section 3 — As Shipped

Shipped as directed: **Performance Testing Tools** (Module 7 — the four concepts any performance tool implements, mapped onto JMeter as this path's primary worked example per Decision 2, with k6/Gatling/Locust and Grafana/Prometheus introduced as alternative implementations, never canonical), **Executing Load, Stress, Spike, Soak, and Volume Tests** (Module 8 — the distinct ramp-up/duration configuration each type actually requires), **Bottleneck Analysis and Monitoring** (Module 9 — correlating a load timeline against CPU/memory/database/network timelines to identify the actual constraint). Dedicated **Section 3 Review** and **Section 3 Solutions** pages shipped, cross-path disambiguated.

### Section 4 — As Shipped

Shipped as directed: **Result Analysis and Reporting** (Module 10 — producing coordinated technical and business-impact reports from one finding), **Capacity Planning** (Module 11 — combining a confirmed ceiling with a real growth trend and safety margin into a forecast), **Performance Defect Investigation** (Module 12 — a six-step systematic trace from vague symptom to reproducible root cause, tying the entire path together). Dedicated **Section 4 Review** and **Section 4 Solutions** pages shipped, cross-path disambiguated.

### Section 5 — As Shipped (Approved 2026-08-05)

Shipped per the approved decisions: the capstone frames Performance Testing as a fifth, distinct question ("what does an already-correct implementation cost under load?") about the same feature four other certified paths verified, explicitly not a defect in or contradiction of any of them; tool treatment stayed concept-first throughout, with JMeter as primary worked example only.

**Modules**: **Applying Performance Testing: AtlasBank Loan Application Under Load** (Module 13, Application — combining Sections 1–4 against a loan-application feature; found a spike-specific document-verification service scaling lag invisible to load/stress testing, and an independent organic-growth capacity forecast), **Applying Performance Testing: AtlasShop Checkout Under Load** (Module 14, Application — AtlasShop's bursty, sale-driven load shape as a deliberate contrast to AtlasBank's steady traffic; confirmed Database Testing's own AtlasShop overselling defect additionally produces a retry-amplification effect under spike-level concurrency, resolved by the same already-known data-layer fix), **Common Mistakes in Performance Testing** (Module 15, Application — six cross-cutting patterns, each traced to a real defect from earlier in this path, mirroring every other certified path's identical Common-Mistakes structure), **Performance Testing Interview Scenarios** (Module 16, Application — six multi-part scenarios requiring synthesis across the full toolkit, deliberately distinct from the single recall-style question pairs every other module already has), **Performance Testing Capstone** (Module 17, Application — see below).

**Capstone**: per the approved five-layer framing (Decision 1), evaluates the operational cost of the already-correct AtlasBank compliance-aggregation fix under real production-scale load — finding that the corrected calendar-day query, while functionally correct, scales non-linearly with an individual account's same-day transfer count, a genuinely new finding invisible to Manual, API, Database, and Automation Testing's own small-scale correctness testing. Explicitly reported as an operational cost and optimization opportunity, not a defect, per Decision 1's required framing — nothing about it implies Database Testing's certified fix needs revisiting.

**No Section 5 Review/Solutions pages** — matching every other certified path's identical Application Module precedent.

**Progress**: 17 / 17 modules shipped. **Performance Testing v1.0 is content complete**, pending certification.

---

## Path 7: Security Testing

**Directory**: `/learning-paths/security-testing/`  
**Position**: 7  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Target Audience**: Security-focused QA, SDETs, developers responsible for security  
**Estimated Duration**: 6–12 weeks  

**Learning Objectives**:
- Understand OWASP Top 10 from a testing perspective
- Threat model and design security tests
- Test authentication, authorization, and data protection
- Use security testing tools (Burp Suite, OWASP ZAP)
- Shift-left: find security issues early, not after release
- Understand compliance testing (GDPR, HIPAA, PCI-DSS)

**Modules** (planned for v0.1–v1.0):
1. Security Testing Fundamentals (threat model, attack surface)
2. OWASP Top 10 Explained (each vulnerability, real examples)
3. Threat Modeling for Testers (identifying risks)
4. Authentication Testing (login, session management, password policies)
5. Authorization and Access Control (role-based access, data isolation)
6. Injection Testing (SQL, command, XML injection)
7. Cross-Site Scripting (XSS) Testing
8. Cross-Site Request Forgery (CSRF) Testing
9. Encryption and Data Protection (in transit, at rest, TLS)
10. API Security Testing (authentication, rate limiting, data leakage)
11. Security in CI/CD (scanning, secret management)
12. Compliance Testing (GDPR, HIPAA, PCI-DSS, SOC 2)
13. Security Tools: Burp Suite vs. OWASP ZAP vs. Code Scanning
14. Common Security Testing Mistakes (testing obvious attacks, missing business logic flaws)
15. Interview Preparation for Security Questions

**Success Criteria**:
- Learner threat models a feature and designs security tests
- Learner tests for SQL injection and explains how it works
- Learner explains the difference between authentication and authorization

---

## Path 8: AI for QA

**Status**: 📋 Architecture proposal — planning only, no module content written. This section is the blueprint for AI for QA v1.0, produced against all five certified Reference Curricula (Manual, API, Automation, Database, Performance Testing) as reference implementations. Nothing below is final until reviewed and approved; no module writing begins until then. **All five certified paths remain frozen — this proposal modifies none of them.**

**Scope decision (approved 2026-08-05)**: this path **broadens** the original "AI and Testing" stub rather than replacing or duplicating it. Two genuinely different angles are unified under one curriculum: (a) QA engineers **using AI tools** to test more productively — test case generation, test data creation, AI-assisted automation, defect analysis — and (b) QA engineers **testing AI-driven product features** — LLM output quality, hallucination detection, bias, safety. These are related (both require understanding AI's failure modes) but distinct skills, and the proposal below teaches the shared foundation once, then branches.

### 1. Learning Path Overview

**Directory**: `/learning-paths/ai-for-qa/`
**Position**: 8
**Prerequisites**: Foundations (all 17 modules), plus at least one of Manual Testing, API Testing, or Automation Testing — Section 2's AI-assisted techniques explicitly apply AI to test design, API testing, and automation work those paths already taught, not re-teaching the underlying discipline.
**Target Audience**: Working QA engineers integrating AI tools into their existing practice, and testers who need to validate AI-driven features as part of their product's own functionality.
**Estimated Duration**: 6–9 weeks (17 modules).

**Industry alignment**: AI-assisted development and testing tooling has moved from novelty to default expectation across QA job postings in a short span, while testing AI-driven product features (chatbots, recommendation engines, AI-assisted workflows) is an increasingly common feature-testing requirement, not a specialist ML role. This path is explicitly **not** a prompt-engineering course and **not** a machine-learning course — it's scoped to what a working QA engineer needs: using AI tools with judgment, and testing AI features with the same rigor applied to any other feature.

**Learning Objectives** (path-level):
- Understand where AI genuinely helps QA work and where it introduces new risk, without treating either "AI replaces testers" or "AI is irrelevant to testing" as true
- Apply human-in-the-loop review to any AI-generated testing artifact, recognizing hallucination and low-quality output before it enters a test suite
- Use AI tools to accelerate test case generation, test data creation, API testing, automation authoring, defect analysis, and exploratory testing — always with the same review discipline
- Test AI-driven product features for output quality, hallucination, bias, and safety, using evaluation frameworks and metrics appropriate to non-deterministic systems
- Apply AI governance and security judgment appropriate to a QA role — what data is safe to send to an AI tool, and what oversight a team's AI usage needs
- Apply the complete toolkit to a realistic AtlasBank AI feature, combining both angles in one capstone

### 2. Curriculum Structure — Sections and Modules

This path uses the **dedicated Section Review + Solutions page pattern from Section 1**, per the certified default every prior path has applied without deviation.

#### Section 1 — Foundations of AI for QA (Modules 1–3)

1. **AI in Software Testing** — *Objective*: where AI genuinely helps QA work today, where it doesn't, and why neither "replaces testers" nor "irrelevant to testing" holds up; sets this path's explicit scope (not prompt engineering, not ML). *Prerequisites*: Foundations complete. *Why it exists*: every certified path opens with a fundamentals module establishing scope before technique — no evidence to deviate. *Est. length*: 1,900–2,300 words.
2. **Responsible AI Usage and Human-in-the-Loop QA** — *Objective*: the core operating principle this entire path depends on — AI output is a draft requiring review, never a final artifact; what "human-in-the-loop" concretely means for test case review, code review, and output verification. *Why it exists*: this is the load-bearing concept every later module assumes; establishing it before any AI-assisted technique prevents the single biggest real-world failure mode (uncritical AI-output acceptance). *Est. length*: 2,000–2,400 words.
3. **Reviewing AI Output and Recognizing Hallucination** — *Objective*: concrete, practiced skill for catching a plausible-sounding but wrong AI output — a fabricated API endpoint in a generated test, a test case for behavior the feature doesn't have, a confidently wrong root-cause suggestion. *Why it exists*: the practical skill Module 2's principle requires; taught once here and referenced, not re-taught, by every later module in Sections 2–3. *Est. length*: 2,200–2,600 words.

**Section 1 Review + Solutions**: dedicated pages, per the certified default.

#### Section 2 — AI-Assisted Testing Techniques (Modules 4–7)

4. **AI-Assisted Test Case Generation** — *Objective*: using AI to draft test cases from a requirement or user story, then applying [Test Design Fundamentals](/learning-paths/manual-testing/test-design-fundamentals)'s existing technique (BVA, Equivalence Partitioning) to evaluate and correct AI-drafted cases, not accept them wholesale. *Est. length*: 2,000–2,400 words.
5. **AI-Assisted Test Data Creation** — *Objective*: using AI to generate realistic test data, explicitly applying [Test Data Design](/learning-paths/manual-testing/test-data-design)'s and [Test Data for Performance](/learning-paths/performance-testing/test-data-for-performance)'s existing volume/shape/distribution criteria to evaluate whether AI-generated data is actually realistic, not just plausible-looking. *Est. length*: 1,900–2,300 words.
6. **AI-Assisted API Testing and Automation** — *Objective*: using AI to draft API test scripts and automation code (Playwright/Selenium-style), reviewed against [API Testing](/learning-paths/api-testing/what-is-api-testing)'s and [Automation Testing](/learning-paths/automation/introduction-to-automation-testing)'s own existing standards — not a new automation framework, an AI-assisted way of authoring within the ones already taught. *Est. length*: 2,200–2,600 words.
7. **AI-Assisted Defect Analysis and Exploratory Testing** — *Objective*: using AI to help triage a defect (suggesting probable root cause from a stack trace or log) and to suggest exploratory testing charters, both explicitly reviewed per Module 3's hallucination-recognition skill before being trusted. *Est. length*: 2,100–2,500 words.

**Section 2 Review + Solutions**: dedicated pages.

#### Section 3 — Testing AI-Driven Features (Modules 8–11)

8. **Testing LLM-Generated Content** — *Objective*: what a tester validates about AI-generated product content (a chatbot response, a summarization feature) — accuracy, relevance, tone — as a distinct feature-testing surface, not a general AI-literacy topic. *Est. length*: 2,100–2,500 words.
9. **Prompt Testing Fundamentals** — *Objective*: testing how a product feature's own prompts behave across realistic and edge-case inputs — the AI-feature equivalent of boundary testing, applied to prompt-input space. *Est. length*: 2,000–2,400 words.
10. **AI Evaluation Frameworks and Metrics** — *Objective*: structured evaluation approaches (DeepEval, RAGAS-style frameworks, custom metrics) for scoring AI output quality systematically, rather than ad hoc manual review alone — this path's equivalent of a dedicated tools module. *Est. length*: 2,200–2,600 words.
11. **Hallucination, Bias, and Safety Testing for AI Features** — *Objective*: testing an AI-driven feature itself for hallucinated claims, demographic or fairness bias, and harmful-output risk — the product-safety counterpart to Module 3's tool-output-review skill, applied to what a shipped feature produces for real users. *Est. length*: 2,300–2,600 words (this path's most conceptually dense module, combining three related defect classes deliberately, the same consolidation reasoning Performance Testing applied to its five test types).

**Section 3 Review + Solutions**: dedicated pages.

#### Section 4 — AI Governance and Security (Modules 12–13)

12. **AI Governance for QA Teams** — *Objective*: what a QA team needs in place before adopting AI tools at scale — usage policy, review requirements, accountability for AI-assisted work products. *Est. length*: 1,900–2,300 words.
13. **AI Security Considerations for QA Workflows** — *Objective*: what data is unsafe to send to an external AI tool (customer data, credentials, proprietary code), and prompt-injection-style risks specific to AI-assisted testing workflows — scoped to QA-relevant awareness, not a security-specialist treatment. *Est. length*: 2,000–2,400 words.

**Section 4 Review + Solutions**: dedicated pages. **Deliberate scope decision**: two modules, not three or four — governance and security are both explicitly scoped to QA-relevant awareness (matching Database Testing's own "basics" scope decision for its combined Performance+Security section), not a full compliance or security-engineering treatment.

#### Section 5 — Application Modules & Capstone (Modules 14–17) — Application Modules

Per `CURRICULUM_EVOLUTION.md` Entry 2 (corrected version), identified as Application Modules **at design time**: `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, no Section Review/Solutions pages.

14. **Applying AI for QA: AtlasBank AI-Assisted Test Suite** — combining Section 2's techniques (AI-assisted test cases, test data, API/automation scripts, defect triage) against a realistic AtlasBank feature. *Est. length*: 1,700–2,100 words.
15. **Applying AI for QA: AtlasBank AI Support Assistant** — testing a new, purpose-built AtlasBank AI feature (a customer-support assistant) for content quality, prompt robustness, hallucination, and bias, combining Section 3's techniques. *Est. length*: 1,700–2,100 words.
16. **Common Mistakes in AI for QA** — cross-cutting mistake patterns across both angles, mirroring every certified path's identical Common-Mistakes structure. *Est. length*: 1,700–2,000 words.
17. **AI for QA Capstone** — see Section 8 below. *Est. length*: 1,900–2,200 words.

### 3. Learning Objectives — Mapped to Sections

Section 1 → foundational judgment (where AI helps, human-in-the-loop, hallucination recognition); Section 2 → AI-assisted productivity across existing certified disciplines; Section 3 → testing AI as a product feature; Section 4 → governance and security awareness; Section 5 → synthesis across both angles plus one capstone. Every path-level objective traces to exactly one section, matching every certified path's own one-to-one mapping.

### 4. Dependency Map

Foundations → (Manual Testing, API Testing, or Automation Testing — any one satisfies the prerequisite) → AI for QA Section 1 (the shared foundation both angles need) → Section 2 (AI-assisted productivity, explicitly reusing Manual/API/Automation/Performance Testing's own existing standards as the bar AI output is reviewed against) → Section 3 (testing AI features, a genuinely new surface with no prior-path equivalent) → Section 4 (governance/security, assumes familiarity with the AI-assisted workflows from Section 2) → Section 5 (synthesizes both angles). Section 2 is the path's clearest Progressive Extraction application — reviewing AI-generated test cases against BVA/Equivalence Partitioning, AI-generated test data against Test Data Design's criteria, and AI-generated automation against Automation Testing's own standards, rather than inventing new review criteria.

### 5. AtlasBank Integration Strategy

AI for QA **extends AtlasBank** as its primary domain, continuing the precedent every certified path has established. Section 2's examples apply AI assistance to already-familiar AtlasBank scenarios (drafting test cases for the fund-transfer flow, generating realistic AtlasBank-shaped test data). Section 3 introduces one new, narrow AtlasBank surface this path specifically needs: the **AtlasBank AI Support Assistant** — approved 2026-08-05 as an official AtlasBank feature, recorded in `STYLE_GUIDE.md`. Deliberately scoped, per the approved decision, to six question categories only (transaction questions, card support, loan FAQs, KYC guidance, account information, payment help) — not a general-purpose chatbot. It exists purely as a realistic system under test, the same way every other AtlasBank feature exists to illustrate a testing concept, not as a product in its own right.

### 6. Application-Module Strategy

Section 5 (Modules 14–17) is designated as Application Modules at design time, per `CURRICULUM_EVOLUTION.md` Entry 2's corrected migration guidance: `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, tighter word-count band (1,700–2,200 words), no Section Review/Solutions pages.

### 7. Review/Solutions Page Strategy

Every section (1–4) gets a dedicated **Section N Review** page and **Section N Solutions** page from its first appearance, per the certified default — cross-path title disambiguation applied proactively (`"AI for QA — Section N Review"`), since all five certified paths already have Sections 1–4. Section 5 gets no Review/Solutions pages, matching every certified path's Application section precedent.

### 8. Capstone Proposal

**Approved 2026-08-05**: unlike every certified path's capstone, this path does **not** continue the International Money Transfer narrative thread — that storyline served its purpose across five technical testing disciplines, and forcing an "AI angle" onto it would feel artificial rather than genuine. Instead, the **AI for QA Capstone** (Module 17) centers on the **AtlasBank AI Support Assistant** — TestAtlas's first AI-native feature, a natural, dedicated fit for this path rather than a sixth layer bolted onto an existing narrative. The capstone combines both of this path's angles: using AI-assisted techniques (Section 2) to build the assistant's own test suite, then testing the assistant itself (Section 3) for hallucination, bias, and safety within its intentionally scoped six question categories, closing with an explicit statement of what human review caught that fully-automated AI-assisted testing alone would have missed — directly reinforcing this path's central theme: AI accelerates testing, it does not replace engineering judgment.

### 9. Word-Count Targets and Estimated Total Curriculum Size

Instruction modules (Sections 1–4, 13 modules): 1,900–2,600 words each, matching the certified range every prior path has shipped within. Application modules (Section 5, 4 modules): 1,700–2,200 words, matching the approved default band. **Estimated path total**: roughly 33,000–38,000 words across 17 modules — comparable to Database Testing (16 modules) and Performance Testing (17 modules).

### 10. Industry Alignment (restated, see also Section 1)

AI-assisted testing tooling is now a common expectation in QA job postings, not a specialist niche; testing AI-driven features is an increasingly ordinary feature-testing requirement as more products ship AI-powered functionality. This path is scoped to a working QA engineer's actual needs on both fronts — explicitly not prompt engineering or ML engineering, which remain out of scope per the originating task's own framing.

### 11. Differences from the Reference Curricula (evidence-justified only)

- **This path unifies two genuinely different angles** (using AI to test; testing AI features) under one curriculum rather than two separate paths — an explicit, approved scope decision (Section 2 of this proposal's header), not an default architectural pattern.
- **A new AtlasBank *feature* (the AI Support Assistant) introduced within Section 3** — not a new domain, but the first time a certified or proposed path has needed to introduce net-new AtlasBank product surface rather than reusing an existing one; justified by Section 3's specific, otherwise-unmeetable need for a real AI feature to test.
- **The capstone breaks the five-path International Transfer narrative thread** — flagged explicitly as an open decision in Section 8, not assumed.
- **Section 4 runs two modules instead of three**, both explicitly scoped to QA-relevant awareness rather than specialist depth — the same "size follows content, not a fixed template" reasoning Database Testing's and Performance Testing's own non-default section sizes already established.
- **Everything else** — the five recurring callouts, the Prerequisites/Leads-to block, the Forward Reference Rule, frontmatter conventions, the Application Module structure, dedicated Review/Solutions pages from Section 1 — carries over unchanged.

### Decisions (Approved 2026-08-05)

1. **Capstone domain break**: ✅ Approved — the International Transfer narrative thread is not continued; the capstone centers on the AtlasBank AI Support Assistant as TestAtlas's first AI-native feature.
2. **New AtlasBank feature**: ✅ Approved — the AtlasBank AI Support Assistant is now an official AtlasBank feature, intentionally scoped to six question categories (transaction questions, card support, loan FAQs, KYC guidance, account information, payment help), not a general-purpose chatbot. Recorded in `STYLE_GUIDE.md`.
3. **Path slug**: ✅ Approved — `/learning-paths/ai-for-qa/` is the permanent slug.
4. **Curriculum principle** (new, added at approval): every AI-assisted workflow throughout this path reinforces one central theme — *AI accelerates testing; it does not replace engineering judgment*. Verification before generation, review before acceptance, applied consistently across every module, not just Section 1's foundational treatment of it.

**Success Criteria**:
- Learner uses an AI tool to draft a testing artifact (test case, test data, automation script) and correctly identifies what needs correction before use
- Learner tests an AI-driven feature for output quality, hallucination, and bias using a structured evaluation approach
- Learner explains what data is unsafe to share with an AI tool and what governance a team's AI usage needs
- Learner applies the complete toolkit to a realistic AtlasBank AI feature, combining AI-assisted testing technique with AI-feature testing in one capstone

### Section 1 — As Shipped

Shipped as designed: **AI in Software Testing** (Module 1 — where AI accelerates QA work vs. where judgment stays essential; establishes this path's central, recurring theme: AI accelerates testing, it does not replace engineering judgment), **Responsible AI Usage and Human-in-the-Loop QA** (Module 2 — the difference between a genuine review checkpoint and a rubber-stamp formality; why a review needs a specific, defined verification target), **Reviewing AI Output and Recognizing Hallucinations** (Module 3 — the practiced, mechanical skill of verifying every specific, checkable claim against its real source; taught once, referenced by every later module). Dedicated **Section 1 Review** and **Section 1 Solutions** pages shipped, cross-path disambiguated (`"AI for QA — Section 1 Review"`).

### Section 2 — As Shipped

Shipped as designed: **AI-Assisted Test Case Generation** (Module 4 — AI drafts, Boundary Value Analysis/Equivalence Partitioning applied explicitly to the draft to find what its obvious-shape coverage misses), **AI-Assisted Test Data Creation** (Module 5 — AI-generated batches evaluated against existing volume/shape/distribution criteria, plus format-validity checks against real validation logic), **AI-Assisted API and Automation Authoring** (Module 6 — reviewed against API Testing's and Automation Testing's own existing standards: real endpoint accuracy, Page Object Model, explicit waits, precise assertions), **AI-Assisted Defect Analysis and Exploratory Testing** (Module 7 — an AI-suggested root cause treated as a hypothesis requiring verification via Database/Performance Testing's own systematic trace methods; AI-generated exploratory charters treated as a starting point, not a substitute for human discovery). Dedicated **Section 2 Review** and **Section 2 Solutions** pages shipped, cross-path disambiguated.

### Section 3 — As Shipped

Shipped as directed: **Testing AI-Driven Features** (Module 8 — the deterministic-vs-AI-quality distinction, per the reviewer's explicit guidance: wrong API response/incorrect database update/missing validation/performance bottleneck as deterministic defects, vs. hallucination/prompt sensitivity/inconsistent responses/bias/safety failures/grounding failures as AI quality issues; introduces the AtlasBank AI Support Assistant as this section's scoped system under test), **Prompt Testing and Evaluation** (Module 9 — realistic phrasing variation testing, scored against a structured accuracy/completeness/relevance/tone rubric instead of pass/fail), **Hallucinations, Bias, Safety, and Reliability** (Module 10 — four related defect classes consolidated into one module per the same type-consolidation reasoning Performance Testing applied to its five test types: grounding verification, framing-consistency testing, scope-boundary testing, and consistency/appropriate-uncertainty testing). Dedicated **Section 3 Review** and **Section 3 Solutions** pages shipped, cross-path disambiguated.

**Deviation from the original proposal**: Module 9 combines what the proposal split into two modules ("Prompt Testing Fundamentals" and "AI Evaluation Frameworks and Metrics") into one, "Prompt Testing and Evaluation" — specified directly at implementation time, the same pattern used for this path's own Section 1/2 reordering.

### Section 4 — As Shipped

Shipped as directed: **AI Governance for QA** (Module 11 — the four elements a real governance policy needs: approved tools, per-artifact-type review requirements, accountability, an audit trail), **AI Security and Privacy Awareness** (Module 12 — what's unsafe to send to an external AI tool, and prompt injection awareness for AI-assisted analysis of real user-generated content), **Human Review Workflows and AI Quality Assurance** (Module 13 — assembling every review standard from Sections 1–4 into one unified, four-step operational workflow; this section's closing-the-toolkit module, the same role [Database Defect Investigation](/learning-paths/database-testing/database-defect-investigation) and [Performance Defect Investigation](/learning-paths/performance-testing/performance-defect-investigation) played in their own paths). Dedicated **Section 4 Review** and **Section 4 Solutions** pages shipped, cross-path disambiguated.

**Deviation from the original proposal**: Section 4 shipped with three modules instead of the proposal's two, adding Module 13 as a genuinely new, synthesis-role module — a real, evidenced size difference (matching Automation Testing's own precedent for Section 5 running six modules instead of four when content required it), not a template deviation.

### Section 5 — As Shipped (Approved 2026-08-05)

Shipped per the approved decisions: the capstone centers on the AtlasBank AI Support Assistant rather than continuing the International Transfer narrative thread; the Assistant's documented six-category scope (transaction questions, card support, loan FAQs, KYC guidance, account information, payment help) held consistently across every Section 5 module.

**Modules**: **Applying AI for QA: AtlasBank AI Support Assistant Validation** (Module 14, Application — Section 3's full toolkit applied systematically across all six documented categories; found a payment-help-specific completeness gap under ambiguous phrasing, and a scope-boundary gap specific to mixed in-scope/out-of-scope requests), **Applying AI for QA: AI-Assisted End-to-End QA Workflow** (Module 15, Application — Section 2's full toolkit applied across one realistic feature's complete lifecycle, routed through Section 4's unified review workflow; found a real boundary-adjacent defect specifically because review was applied consistently at every stage), **Common Mistakes in AI for QA** (Module 16, Application — six cross-cutting patterns, each traced to a real defect earlier in this path, mirroring every other certified path's identical Common-Mistakes structure), **AI for QA Capstone: AtlasBank AI Support Assistant End-to-End Verification** (Module 17, Application — see below).

**Capstone**: per the approved decisions, does not continue the International Transfer narrative thread — centers on the AI Support Assistant as TestAtlas's first AI-native feature instead. Combines AI-accelerated test preparation (Section 2), AI-feature testing (Section 3), and governance/audit review (Section 4) into one lifecycle, closing with three explicit findings from three different layers: a BVA-coverage gap AI's own draft missed, a new compound AI-quality pattern found only by testing two previously-separate gap types together, and a real data-safety incident caught by the governance audit-trail process itself — not by any testing technique — reinforcing this path's central theme (AI accelerates, it does not replace engineering judgment) in three structurally different forms.

**No Section 5 Review/Solutions pages** — matching every other certified path's identical Application Module precedent.

**Progress**: 17 / 17 modules shipped. **AI for QA v1.0 is content complete**, pending certification.

---

## Path 9: Interview Preparation

**Directory**: `/learning-paths/interview-preparation/`  
**Position**: 9  
**Prerequisites**: Foundations (minimum), any technical path (recommended)  
**Target Audience**: Job seekers, career-changers, QA professionals  
**Estimated Duration**: 2–8 weeks (depends on preparation depth)  

**Learning Objectives**:
- Understand QA interview patterns (behavioral, technical, system design)
- Practice scenario-based questioning
- Articulate testing judgment clearly
- Communicate under interview pressure
- Showcase real-world problem-solving
- Negotiate offers confidently

**Modules** (planned for v0.1–v1.0):
1. The QA Interview: What Companies Ask (panel discussion, take-home, real-time)
2. Behavioral Interviews for QA (STAR method, discussing failures)
3. Technical Interviews: Test Design (designing tests for a feature)
4. Technical Interviews: Automation (designing test automation)
5. Technical Interviews: API Testing (testing REST APIs)
6. Technical Interviews: Security Testing (finding vulnerabilities)
7. Technical Interviews: System Design for QA (scalability, reliability of QA infrastructure)
8. Whiteboarding Test Cases (drawing test matrices on the board)
9. Take-Home Challenges (typical assignments, time management)
10. Salary Negotiation for QA Professionals (knowing your worth)
11. Mock Interviews (scenario-based practice)
12. Post-Interview (follow-up, handling rejection)

**Success Criteria**:
- Learner explains a testing challenge using the STAR method
- Learner designs tests for a feature in an interview setting
- Learner negotiates a competitive offer

---

## Path 10: Career and Leadership in QA

**Directory**: `/learning-paths/career/`  
**Position**: 10  
**Prerequisites**: Foundations + 1+ years QA experience  
**Target Audience**: QA professionals, team leads, QA managers, QA directors  
**Estimated Duration**: Ongoing (career development)  

**Learning Objectives**:
- Build and communicate testing strategies
- Lead QA teams and processes
- Measure and report testing impact
- Grow your QA career (IC or management track)
- Handle technical debt and process improvement
- Navigate organizational politics

**Modules** (planned for v0.1–v1.0):
1. From QA Engineer to QA Lead (first leadership role)
2. Building a Test Strategy (risk-based approach, scoping)
3. QA Process Design and Governance (how QA works in your organization)
4. Metrics That Matter (reporting test effectiveness, not vanity metrics)
5. Communicating Test Results (to engineers, to PMs, to executives)
6. Managing Technical Debt in Testing (when to refactor, when to rebuild)
7. Tool Selection and Vendor Evaluation (choosing frameworks, platforms)
8. Onboarding and Growing QA Teams (hiring, training, retaining)
9. Career Growth Paths in QA (IC vs. management, specialization)
10. QA in Agile, Waterfall, and Hybrid (adapting strategy to process)
11. Executive Communication (dashboards, ROI, business impact)
12. Common Leadership Mistakes in QA (moving too fast, ignoring culture)

**Success Criteria**:
- QA leader builds a testing strategy that's understood and followed
- QA leader measures testing impact on business outcomes
- QA leader grows team members into their next roles

---

## Path Progression Map

```
Start Here
    ↓
Foundations (gateway)
    ↓
    ├─→ Manual Testing → API Testing → Interview Prep
    │       ↓
    │    Automation ──→ Performance → Career
    │       ↓
    │    Database Testing
    │
    └─→ Security Testing ────→ Interview Prep
           ↓
        Career

Specialized Paths:
    Performance Testing → Career
    AI Testing → (emerging, connects to all)
```

---

## Switching Paths

Learners can switch paths at any time, but some transitions are smoother:

**Smooth Transitions**:
- Manual Testing → API Testing (concepts apply directly)
- Manual Testing → Automation (design first, then automate)
- Automation → Performance Testing (load testing uses the same tools)
- Any path → Interview Prep (prerequisites satisfied)
- Any path → Career (after 1+ years experience)

**Rougher Transitions** (more catch-up needed):
- Automation → Database Testing (requires SQL knowledge)
- Performance Testing → Security Testing (different mindset, different tools)

---

## Path Maintenance

**Annually**:
- Review each path's modules for accuracy and currency
- Check if new topics should be added (e.g., AI Testing expanded in v1.0)
- Gather learner feedback on difficulty and progression

**Per Merge**:
- New content connects to existing paths; no isolated modules
- Cross-references between paths are validated

This flexible path structure allows TestAtlas to serve different roles without forcing everyone through the same progression.
