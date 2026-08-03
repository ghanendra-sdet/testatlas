# Learning Paths

This document defines the 10 learning paths in TestAtlas, their learning objectives, target audience, and progression strategy.

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

**Status**: Curriculum frozen. 23 modules across seven sections, approved with two amendments (Thinking Like a Tester added to Section 1; Reviewing Test Cases scope confirmed in Section 5). No further curriculum review before content development — module writing begins now, following the same batch-then-QA-review lifecycle established for Foundations.

### 1. Learning Path Overview

**Directory**: `/learning-paths/manual-testing/`
**Position**: 2
**Purpose**: Foundations taught *why* testing matters and the mindset behind it. Manual Testing teaches the actual craft: how to look at a feature and systematically generate the specific, minimal set of test cases that finds real defects — the skill that underlies every other path in TestAtlas, since API Testing, Database Testing, Security Testing, and Automation all design tests using the same core techniques applied to a different surface.
**Prerequisites**: Foundations of Software Testing (all 17 modules) — specifically leans on Software Testing Principles, Risk-Based Testing, Quality Attributes, Defect Life Cycle, and Severity vs. Priority
**Target Audience**: New QA engineers building their first real test-design skill set, developers wanting to test their own features more rigorously, automation engineers who need to design a test before they can automate it
**Estimated Duration**: 5–7 weeks
**Curriculum version**: Manual Testing v1.0 (planned)

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

**23 modules across seven sections** (finalized after review — added Thinking Like a Tester to Section 1). Sections mirror how test design actually happens on a real project: understand the feature, adopt the right mindset, generate test ideas systematically, write them down well, decide when structure isn't the right tool, report what you find, then apply all of it together.

#### Section 1 — Test Design Foundations
1. **Test Design Fundamentals** — *Objective*: explain why structured test design finds more real defects than ad hoc testing, for the same time spent. *Prerequisites*: Foundations complete, especially Software Testing Principles and Risk-Based Testing. *Why it exists*: sets the mindset shift from "try things" to "systematically generate the smallest set of tests that covers the most risk" — everything else in this path is a specific technique for doing that. *Key concepts*: test idea vs. test case, coverage without redundancy, the cost of untested vs. over-tested. *Est. word count*: 2,000–2,200.
2. **From Requirements to Test Ideas** — *Objective*: turn an ambiguous or incomplete requirement into a concrete list of things that need testing. *Prerequisites*: Module 1. *Why it exists*: every technique in Section 2 needs raw material to operate on — this module is where that material comes from, and where requirement ambiguity (a defect class Foundations' Verification vs. Validation named but didn't drill into) gets practiced hands-on. *Key concepts*: requirement analysis for testability, spotting ambiguity, turning "the feature should validate input" into an actual test idea list. *Est. word count*: 2,000–2,200.
3. **Thinking Like a Tester** — *Objective*: answer the question every beginner actually asks first — "how do I even come up with test cases?" — before any named technique is introduced. *Prerequisites*: Module 2. *Why it exists*: this is the difference between a beginner and an experienced tester, and it's deliberately placed *before* BVA rather than after Section 2, because every technique that follows is easier to learn once a learner already has the underlying mindset — asking better questions, spotting unstated assumptions, thinking like both the user and the business, and deliberately probing negative/unhappy paths, not just the happy path. *Key concepts*: tester mindset, assumption-spotting, user vs. business thinking, positive vs. negative testing, happy path vs. unhappy path. *Est. word count*: 2,000–2,200.

#### Section 2 — Core Test Design Techniques
4. **Boundary Value Analysis** — *Objective*: identify and test the edges of an input range, where defects concentrate most. *Prerequisites*: Module 3. *Why it exists*: the single most commonly asked test-design interview technique, and the most direct application of Foundations' defect-clustering principle — and the first place the tester mindset from Module 3 gets applied to a named technique. *Key concepts*: valid/invalid boundaries, off-by-one defects, boundary value tables. *Est. word count*: 2,200–2,500. **Knowledge node** (see Dependency Map).
5. **Equivalence Partitioning** — *Objective*: group inputs into classes that can be tested with one representative case each, without losing coverage. *Prerequisites*: Module 4. *Why it exists*: BVA finds edge defects; EP is what makes testing the *middle* of a range efficient instead of exhaustive — the two are taught back to back because they're usually applied together in practice. *Key concepts*: valid/invalid equivalence classes, representative test case selection, avoiding redundant coverage. *Est. word count*: 2,200–2,500. **Knowledge node**.
6. **Decision Table Testing** — *Objective*: design test cases for a feature whose behavior depends on multiple conditions combined. *Prerequisites*: Module 5. *Why it exists*: EP handles one input at a time; Decision Tables are the next step once a feature's logic depends on combinations of inputs, not single values. *Key concepts*: condition/action tables, rule coverage, collapsing redundant rules. *Est. word count*: 2,300–2,600. **Knowledge node**.
7. **State Transition Testing** — *Objective*: design test cases for a feature that behaves differently depending on its current state. *Prerequisites*: Module 6. *Why it exists*: many real features (an order, a claim, a defect itself, per Foundations' Defect Life Cycle) aren't just condition-driven, they're state-driven — this module teaches the technique for that specific shape of problem. *Key concepts*: state diagrams, valid/invalid transitions, N-switch coverage. *Est. word count*: 2,200–2,500. **Knowledge node**.
8. **Combinatorial and Pairwise Testing** — *Objective*: test systems with many interacting variables without exhaustively testing every combination. *Prerequisites*: Modules 5–6 (builds directly on equivalence classes and decision logic). *Why it exists*: real features often have too many input combinations to test exhaustively (a form validated by browser, device, and account type, for example) — this module teaches the mathematically-grounded way to reduce that space responsibly, not by guessing. *Key concepts*: combinatorial explosion, pairwise reduction, all-pairs tools and tables. *Est. word count*: 2,300–2,600. **Knowledge node** — kept as one module; see Dependency Map for the confirmed Progressive Extraction decision.
9. **Error Guessing and Experience-Based Testing** — *Objective*: use structured intuition to find defects the formal techniques above don't systematically target. *Prerequisites*: Modules 4–8 (deliberately last in this section — the point is contrasting disciplined intuition against structured technique, which only lands once the structured techniques are already understood). *Why it exists*: closes Section 2 by being explicit that technique isn't the whole story — experience matters too, but it works best as a supplement to structure, not a replacement for it, and it echoes Module 3's mindset now that there's a full technique toolkit to contrast it against. *Key concepts*: heuristics, common defect patterns, when intuition beats formal technique and when it doesn't. *Est. word count*: 2,000–2,200.

#### Section 3 — Writing and Organizing Tests
10. **Writing Clear Test Cases** — *Objective*: write a test case precise enough that someone unfamiliar with the feature can execute it correctly. *Prerequisites*: Section 2 complete (there need to be test ideas worth writing down well). *Why it exists*: a great test idea poorly written is barely better than no test idea — this is the module that turns Section 2's output into something a team can actually use. *Key concepts*: test case structure (steps, expected results, preconditions), precision without verbosity, avoiding ambiguous expected results. *Est. word count*: 2,200–2,400.
11. **Test Case Organization and Naming** — *Objective*: structure a growing set of test cases so they stay findable and maintainable, not just individually well-written. *Prerequisites*: Module 10. *Why it exists*: a hundred well-written test cases with no organizing structure become unmaintainable exactly as fast as badly-written ones — this is a distinct skill from writing one good test case. *Key concepts*: naming conventions, grouping by feature vs. by technique, avoiding duplicate coverage across a growing suite. *Est. word count*: 1,800–2,000.
12. **Requirement Traceability Matrix (RTM)** — *Objective*: build and maintain a matrix connecting requirements to the test cases that verify them. *Prerequisites*: Modules 2 and 10. *Why it exists*: directly answers a question Foundations' Test Strategy vs. Test Plan raised but didn't operationalize — how a team actually proves every requirement got tested. Especially load-bearing for the Insurance and Healthcare domain mapping below, where regulatory traceability is a real requirement, not a nice-to-have. *Key concepts*: coverage gaps, many-to-many requirement/test mapping, RTM as an audit artifact. *Est. word count*: 1,800–2,000.
13. **Test Data Design** — *Objective*: design test data deliberately, rather than reusing whatever data happens to be lying around. *Prerequisites*: Modules 4–5 (test data design is BVA/EP applied to the data itself, not just the test case). *Why it exists*: a technically correct test case run against sloppy or unrealistic data produces false confidence — this module makes data design a first-class decision, not an afterthought. *Key concepts*: realistic vs. synthetic data, data that actually exercises boundaries and edge classes, data privacy in test environments. *Est. word count*: 1,900–2,100.

#### Section 4 — Exploratory and Ad Hoc Testing
14. **Exploratory Testing Fundamentals** — *Objective*: explain what exploratory testing actually is (structured, simultaneous learning and testing) versus the common misconception that it's just "clicking around." *Prerequisites*: Section 3 complete. *Why it exists*: contrasts deliberately against everything taught so far — scripted technique is precise but can only find what it was designed to look for; exploratory testing is how a real tester finds what nobody thought to script. *Key concepts*: exploratory vs. scripted testing, simultaneous test design and execution, why exploratory isn't "unstructured." *Est. word count*: 2,000–2,200.
15. **Session-Based Test Management** — *Objective*: run a time-boxed exploratory session using a charter, and document findings in a way that's reviewable afterward. *Prerequisites*: Module 14. *Why it exists*: turns exploratory testing from an individual skill into a practice a team can actually manage, schedule, and review — the difference between "exploratory testing" as a concept and as a repeatable team activity. *Key concepts*: session charters, time-boxing, session notes and debrief. *Est. word count*: 1,900–2,100.
16. **When to Use Structured vs. Exploratory Testing** — *Objective*: decide, for a given feature and situation, whether scripted technique or exploratory testing is the better tool. *Prerequisites*: Modules 9 and 15 (directly synthesizes Error Guessing and Session-Based Testing against the whole structured toolkit). *Why it exists*: without this module, a learner has two toolkits and no explicit guidance on which to reach for — this is the connective module that makes the choice deliberate rather than habitual. *Key concepts*: risk and novelty as decision factors, blending both approaches on one feature, common wrong-tool mistakes. *Est. word count*: 1,800–2,000.

#### Section 5 — Reporting and Communication
17. **Writing Effective Bug Reports** — *Objective*: write a bug report a developer can reproduce and act on without asking follow-up questions. *Prerequisites*: Foundations' Defect Life Cycle and Severity vs. Priority (cross-path), plus this path's Sections 2–4 (there need to be real defects found to report on). *Why it exists*: Foundations taught the defect life *cycle*; this module teaches the actual writing skill that feeds it — a distinct, practical craft Foundations deliberately didn't cover in depth. *Key concepts*: reproduction steps, expected vs. actual, environment and evidence, writing for a reader who wasn't there. *Est. word count*: 2,100–2,300.
18. **Test Execution and Reporting Results** — *Objective*: run a planned test cycle and report results in a way that's useful to people who weren't in the room. *Prerequisites*: Module 17. *Why it exists*: connects back to Foundations' Test Strategy vs. Test Plan and QA Metrics modules — this is where a test plan's exit criteria actually get evaluated against real execution results. *Key concepts*: pass/fail/blocked reporting, summarizing execution for stakeholders, tying results back to exit criteria. *Est. word count*: 1,900–2,100.
19. **Reviewing Test Cases** — *Objective*: review someone else's test cases and identify real coverage gaps, not just phrasing preferences. *Prerequisites*: Modules 10–13. *Why it exists*: peer review is how a team's test-design quality stays consistent over time, and it's a distinct, underemphasized skill — in a real QA job, a tester reviews far more test cases than they personally write, and most courses skip this entirely. *Key concepts*: peer review practice, structured review checklists, ambiguity detection, duplicate-coverage detection, spotting missing scenarios (not just critiquing what's present), giving actionable review feedback. *Est. word count*: 2,000–2,200.

#### Section 6 — Applying Test Design to Real Domains
20. **Applying Test Design Across Domains: Banking and E-Commerce** — *Objective*: apply the full technique toolkit to two contrasting real domains in one integrated exercise each. *Prerequisites*: Sections 1–5 complete. *Why it exists*: the first of two domain-application modules — see Real Project Mapping below for why banking and e-commerce are paired first. *Key concepts*: financial-accuracy-driven test design (banking), state- and inventory-driven test design (e-commerce). *Est. word count*: 2,400–2,700.
21. **Applying Test Design Across Domains: Healthcare and Insurance** — *Objective*: apply the full technique toolkit to two more contrasting domains, both with a regulatory/compliance dimension the first pair didn't emphasize. *Prerequisites*: Module 20. *Why it exists*: healthcare and insurance both foreground the RTM and traceability module (12) in a way banking and e-commerce don't as directly — pairing them together makes that connection explicit. *Key concepts*: compliance-driven traceability, decision-table-heavy premium/eligibility logic, state-transition-heavy claims/appointment flows. *Est. word count*: 2,400–2,700.

#### Section 7 — Capstone
22. **Common Mistakes in Test Design** — *Objective*: recognize the recurring ways test design goes wrong across everything taught in this path. *Prerequisites*: Sections 1–6. *Why it exists*: a deliberate lead-in to the capstone, in the same spirit as Foundations' Testing Myths module — reinforcement, not new teaching. *Key concepts*: over-testing vs. under-testing, technique misapplication (e.g., decision tables used where EP would do), test cases that don't survive a requirement change. *Est. word count*: 2,000–2,200.
23. **Capstone: Designing a Complete Test Suite** — *Objective*: given one real, moderately complex feature, apply every technique from this path together — tester mindset, BVA, EP, decision tables, state transitions, combinatorial reduction, error guessing, clear test case writing, and an RTM — and produce a complete, reviewable test design package. *Prerequisites*: the entire path. *Why it exists*: **the confirmed capstone** (see Deliverable 7 below) — it reinforces the whole path in one integrated exercise rather than introducing anything new, mirroring exactly how Foundations' Testing Myths module closed that path. *Key concepts*: none new — pure synthesis. *Est. word count*: 2,800–3,200 (acceptable band, justified by scope — this is the one module in the path allowed to run long, since it's deliberately comprehensive).

**Total**: 23 modules, ~48,700–54,100 words estimated (comparable in scale to Foundations' 35,852 actual, reflecting more technique depth per module).

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

### 7. Capstone Recommendation

**Module 23: Capstone — Designing a Complete Test Suite.** Given one real, moderately complex feature (recommend a loan-eligibility form — it naturally exercises BVA on numeric limits, EP on applicant categories, Decision Tables on eligibility rules, and State Transitions on application status, without needing an artificially contrived example), the learner applies every technique from the path together and produces one complete, reviewable test design package: test ideas, organized test cases, an RTM, and a sample bug report against a planted defect.

This mirrors exactly how Foundations closed with Testing Myths & Misconceptions: no new concept is introduced, the module exists purely to prove the rest of the path became instinct, and it's the module most directly reusable later as interview-preparation rehearsal material.

**Success Criteria** (path-level):
- Learner designs a complete, minimal, high-coverage test suite for a non-trivial feature using the correct technique for each part of that feature, not one technique applied everywhere
- Learner explains why specific test cases were excluded (equivalence reasoning), not just which were included
- Learner writes a bug report a developer can act on without follow-up questions
- Learner builds an RTM that would satisfy a real compliance review
- Learner identifies edge cases and missing coverage in someone else's test suite, not just their own

---

## Path 3: API Testing

**Directory**: `/learning-paths/api-testing/`  
**Position**: 3  
**Prerequisites**: Foundations, Manual Testing and Test Design (concepts apply equally)  
**Target Audience**: API testers, backend QA engineers, SDETs  
**Estimated Duration**: 4–6 weeks  

**Learning Objectives**:
- Understand REST, gRPC, GraphQL from a testing perspective
- Design API tests using test design techniques
- Test error handling, edge cases, and integrations
- Validate data contracts and schemas
- Understand authentication, authorization, and rate limiting
- Test cascading failures and recovery

**Modules** (planned for v0.1–v1.0):
1. API Testing Fundamentals (why APIs matter, testing scope)
2. HTTP Basics for Testers (status codes, methods, headers, body)
3. JSON and Data Validation (parsing, schema validation, nulls)
4. Designing API Test Cases (applying test design to API payloads)
5. Authentication Testing (API keys, OAuth, JWTs)
6. Authorization Testing (roles, permissions, data isolation)
7. Rate Limiting and Throttling (testing quotas and backoff)
8. Cascading Failures and Integration Testing (when one service is down)
9. API Security Testing (injection, XXE, CORS, HTTPS)
10. Performance Testing APIs (response time, throughput under load)
11. API Testing Tools Comparison (Postman, REST Client, Bruno, code-based approaches)
12. Common API Testing Mistakes
13. Interview Preparation for API Testing

**Success Criteria**:
- Learner designs tests for a REST API including happy path, edge cases, and error scenarios
- Learner identifies security issues in an API design
- Learner explains when API testing differs from UI testing

---

## Path 4: Database Testing

**Directory**: `/learning-paths/database-testing/`  
**Position**: 4  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Target Audience**: QA engineers testing data-heavy systems, data specialists, backend testers  
**Estimated Duration**: 3–5 weeks  

**Learning Objectives**:
- Write basic SQL for testing (not for the database team, but for QA)
- Understand data integrity and consistency
- Test ETL and data pipelines
- Validate data state after operations
- Understand transactions and concurrency
- Test constraints and relationships

**Modules** (planned for v0.1–v1.0):
1. SQL Basics for QA (SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY)
2. Writing Assertions with SQL (SELECT to verify expected state)
3. Data Integrity Testing (checking constraints are enforced)
4. Transaction and Concurrency Testing (ACID properties, deadlocks)
5. Referential Integrity (foreign keys, orphaned records)
6. Testing ETL Pipelines (data in → transformation → data out)
7. Testing Denormalization and Caching
8. Data Validation Checklists (common mistakes in data operations)
9. Performance Implications of Queries (indexes, query plans)
10. Common Database Testing Mistakes
11. Interview Preparation for Database Testing

**Success Criteria**:
- Learner writes SQL queries to verify expected data state after a feature
- Learner designs tests for an ETL pipeline
- Learner identifies data integrity issues in a system

---

## Path 5: Test Automation

**Directory**: `/learning-paths/automation/`  
**Position**: 5  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Target Audience**: Automation engineers, SDETs, developers writing tests  
**Estimated Duration**: 6–12 weeks  

**Learning Objectives**:
- Understand test automation principles and design patterns
- Build maintainable test automation using frameworks like Playwright
- Understand page object model and abstraction layers
- Integrate tests into CI/CD pipelines
- Write automation that is fast, reliable, and understandable
- Test automation frameworks and tool trade-offs

**Modules** (planned for v0.1–v1.0):
1. Why Automate? (mindset: what should be automated vs. manual)
2. Test Automation Principles (maintainability, reliability, speed)
3. Designing Automation from Test Cases (test design → automation)
4. Page Object Model (abstraction and maintainability)
5. Locator Strategies and Best Practices (selectors that survive change)
6. Waiting Strategies and Flakiness (timing issues are the biggest automation problem)
7. Data-Driven Testing (parameterizing test cases)
8. CI/CD Integration (running tests automatically)
9. Parallel Execution and Performance (scaling test runs)
10. Maintaining Automation at Scale (refactoring, removing dead tests)
11. Tool Comparison: Playwright vs. Selenium vs. Others
12. Common Automation Mistakes (brittle tests, false positives, slow feedback loops)
13. Interview Preparation for Automation Questions

**Success Criteria**:
- Learner writes maintainable automation for a realistic workflow
- Learner explains why a test is flaky and fixes it
- Learner refactors brittle tests into reliable ones

---

## Path 6: Performance Testing

**Directory**: `/learning-paths/performance-testing/`  
**Position**: 6  
**Prerequisites**: Foundations, one of (Manual Testing, API Testing, Database Testing)  
**Target Audience**: Performance engineers, backend QA, DevOps engineers  
**Estimated Duration**: 4–8 weeks  

**Learning Objectives**:
- Understand performance testing types (load, stress, spike, soak)
- Design load tests that reflect realistic scenarios
- Use performance testing tools (k6, JMeter, Gatling, Locust)
- Identify bottlenecks and troubleshoot performance issues
- Connect performance problems to architecture and resources
- Report performance results to non-technical stakeholders

**Modules** (planned for v0.1–v1.0):
1. Performance Testing Fundamentals (why it matters, what we measure)
2. Load, Stress, Spike, and Soak Testing Defined (each type, when to use)
3. Performance Metrics and SLOs (latency, throughput, resource use, acceptable thresholds)
4. Load Testing Tools Comparison (k6, JMeter, Gatling, Locust, their trade-offs)
5. Designing Load Tests That Reflect Reality (realistic user behavior, not unrealistic peaks)
6. Baseline, Ramp, and Spike Profiles (how to structure a load test)
7. Identifying and Troubleshooting Bottlenecks (CPU? Memory? Database? Network?)
8. Performance Reporting and Root Cause Analysis (explaining findings)
9. Database Performance Testing (joins, indexes, query optimization)
10. API Performance Under Load (response time degradation, timeout handling)
11. Frontend Performance Testing (rendering, memory leaks)
12. Common Performance Testing Mistakes (unrealistic scenarios, ignoring steady state)
13. Interview Preparation for Performance Questions

**Success Criteria**:
- Learner designs a load test for a realistic scenario
- Learner analyzes performance results and identifies the bottleneck
- Learner explains performance findings to a non-technical stakeholder

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

## Path 8: AI and Testing (Future-Focused)

**Directory**: `/learning-paths/ai-testing/`  
**Position**: 8  
**Prerequisites**: Foundations  
**Target Audience**: QA engineers preparing for AI-driven testing, ML engineers  
**Estimated Duration**: 4–6 weeks (evolving as AI changes)  

**Learning Objectives** (v0.1 scope):
- Understand how AI changes QA work
- Test LLM outputs and AI-driven features
- Evaluate prompt quality and model behavior
- Synthetic data generation for testing
- Safety and hallucination testing

**Modules** (v0.1 scope):
1. AI in Testing: Opportunity and Risk (how AI changes QA)
2. Testing LLM-Generated Content (quality, safety, accuracy)
3. Prompt Testing Fundamentals (designing prompts, evaluating responses)
4. Evaluating AI Outputs (factual accuracy, relevance, tone)
5. Synthetic Data Generation (using AI to create test data)
6. Safety Testing for AI Systems (harmful outputs, bias)
7. AI Evaluation Frameworks (DeepEval, RAGAS, custom metrics)
8. Hallucination Detection (when LLMs make things up)
9. Bias Testing in AI Systems (fairness across demographics)

**Future Expansion** (v1.0+ as field evolves):
- Agent Testing (multi-step AI workflows)
- RAG Testing (retrieval-augmented generation)
- Model Evaluation (specialized)
- LLM Performance Benchmarking
- Adversarial Testing (jailbreaks, prompt injection against LLMs)

**Success Criteria**:
- Learner tests an LLM feature and identifies quality issues
- Learner designs synthetic test data for an AI system
- Learner explains why traditional QA approaches don't work for AI

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
