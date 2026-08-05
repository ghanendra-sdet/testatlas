---
title: "QA Career Roadmap"
sidebar_label: "16 QA Career Roadmap"
description: "What actually changes between Junior QA and QA Lead, the specialization paths (SDET, automation, quality engineering), and how to plan the move to each."
keywords: ["QA career path", "QA roadmap", "SDET career", "QA lead", "quality engineering"]
difficulty: "beginner"
time_to_read: "18 min"
last_reviewed: "2026-08-05"
---

# QA Career Roadmap

**Prerequisites**: You should already understand [The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery) and [QA Metrics & Measurement](/learning-paths/foundations/qa-metrics-and-measurement).
**Leads to**: After this, you'll be ready for [Testing Myths & Misconceptions](/learning-paths/foundations/testing-myths-and-misconceptions), the final module in this path.

[The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery) introduced QA's different archetypes early in this path — before there was context for what separates them or how someone moves between them. Now, having seen the actual depth of the discipline across thirteen modules, that question has a real answer: growth in QA isn't just "get better at testing." It branches into genuinely different specializations, each with its own skills and trajectory.

## Why This Matters

**A QA engineer with no roadmap.** A tester spends three years doing solid, competent manual testing — thorough, reliable, well-regarded by their team. But nobody ever discusses what comes next, and they never deliberately build a specific direction. At a performance review, asked about their next career step, they have no concrete answer beyond "get better at what I already do." Meanwhile a peer who started at the same time, with no more raw talent, has spent the same three years deliberately building automation skills toward an SDET role, specifically because they mapped out that direction early and treated skill-building as a series of decisions, not something that would happen automatically with time served.

**A QA engineer with a roadmap.** A different tester starts in a similar generalist QA role but treats career direction as a deliberate decision, revisited periodically rather than assumed. After a year of broad exposure, they notice they enjoy the coding side of test automation more than deep manual exploratory work, and start deliberately building scripting and framework skills — not by accident, but because they identified a fit and pursued it. Eighteen months later, they move into an SDET role with a concrete track record to point to, not just a vague sense that time has passed.

Both testers were competent. Only one of them had a roadmap — and a roadmap is what turns "years of experience" into "years of deliberate direction."

## What the QA Career Landscape Looks Like

This section is written so a fresh graduate can read it once and know exactly where they stand: what the roles are called, how many years of experience each one expects, which technologies to learn at each stage, and a concrete self-check to confirm they're actually at the level they think they're at — not just a title someone gave them.

**VIS-019 — The QA Career Ladder, at a Glance**

<svg viewBox="0 0 1000 540" role="img" aria-labelledby="vis019-title vis019-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="vis019-title">The QA Career Ladder, at a Glance</title>
  <desc id="vis019-desc">Five ascending career levels by years of experience: Associate QA at 0 to 2 years, QA Engineer / Automation Engineer at 2 to 5 years, Senior QA / Senior SDET at 5 to 8 years, QA Lead / Architect at 8 to 12+ years, and Director / VP of Quality Engineering at 12 to 15+ years — each bar taller than the last to show increasing scope and seniority.</desc>
  <g font-family="Inter, ui-sans-serif, system-ui, sans-serif">
    <line x1="30" y1="440" x2="970" y2="440" stroke="#0a2a30" stroke-opacity="0.2" stroke-width="2"/>

    <rect x="40" y="380" width="160" height="60" rx="6" fill="#4fc3cd"/>
    <text x="120" y="360" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Level 1</text>
    <text x="120" y="340" text-anchor="middle" fill="#3a4a4d" font-size="11">Associate QA</text>
    <text x="120" y="415" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">0–2 yrs</text>

    <rect x="240" y="300" width="160" height="140" rx="6" fill="#0a98a8"/>
    <text x="320" y="280" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Level 2</text>
    <text x="320" y="260" text-anchor="middle" fill="#3a4a4d" font-size="11">QA / Automation Engineer</text>
    <text x="320" y="375" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">2–5 yrs</text>

    <rect x="440" y="220" width="160" height="220" rx="6" fill="#087f8c"/>
    <text x="520" y="200" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Level 3</text>
    <text x="520" y="180" text-anchor="middle" fill="#3a4a4d" font-size="11">Senior QA / Senior SDET</text>
    <text x="520" y="335" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">5–8 yrs</text>

    <rect x="640" y="140" width="160" height="300" rx="6" fill="#076f7b"/>
    <text x="720" y="120" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Level 4</text>
    <text x="720" y="100" text-anchor="middle" fill="#3a4a4d" font-size="11">QA Lead / Architect</text>
    <text x="720" y="295" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">8–12+ yrs</text>

    <rect x="840" y="60" width="160" height="380" rx="6" fill="#05565f"/>
    <text x="920" y="40" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Level 5</text>
    <text x="920" y="20" text-anchor="middle" fill="#3a4a4d" font-size="11">Director / VP of QE</text>
    <text x="920" y="255" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">12–15+ yrs</text>
  </g>
</svg>

**Figure 1 — The QA Career Ladder, at a Glance.** Five levels, each defined by a years-of-experience band, not a fixed timeline — bar height tracks scope and seniority, not time served on its own. *Source: TestAtlas.*

### The Core Difference: QA Automation Engineer vs. SDET

Both roles focus on software quality and both write code, but they approach the software from entirely different angles, and mixing them up is the single most common confusion for anyone new to the field.

A **QA Automation Engineer** is a tester who can code. Their primary job is writing scripts that mimic a human user clicking through an application, to find bugs in finished features.

An **SDET (Software Development Engineer in Test)** is a developer focused on testing. Their primary job is building the systems that test other software — writing unit tests inside the developer's own source code and preventing bugs before a feature is even finished being built.

| | QA Automation Engineer | SDET |
|---|---|---|
| **Primary mindset** | "How can I automate this user scenario?" | "How can I build a system to test everything?" |
| **Where they code** | Outside the application (functional test suites) | Inside the application code and infrastructure |
| **Coding skill level** | Medium — writing test scripts, using existing functions | Expert — data structures, algorithms, design patterns |
| **Core daily task** | Automating test cases, finding regressions | Building test frameworks, tools, and CI/CD pipelines |

### Every Major Profile, by Experience Level

This is the full directory of job titles you'll actually see on job boards, grouped by the experience level they typically target.

**Fresher / Entry Level (0–2 years)**

| Title | What They Actually Do |
|---|---|
| **QA Intern / Trainee** | A learning role: shadowing senior testers, executing basic test cases, learning standard workflows and Jira. |
| **Manual QA Analyst / Functional Tester** | The entry-level executioner: tests purely from the UI, documents steps, records issues, verifies basic bug fixes. |
| **Associate Automation Engineer** | A junior script writer: translates existing manual test cases into code inside an already-established automation tool, following step-by-step instructions. |

**Mid-Level (2–5 years)**

| Title | What They Actually Do |
|---|---|
| **QA Engineer (Manual + Automation)** | The standard industry role: balances exploratory manual testing with UI/API test-script automation. |
| **API / Backend QA Specialist** | Focuses entirely on what happens behind the screen: server responses, databases, microservices, and integrations, using tools like Postman or RestAssured. |
| **Mobile QA Engineer** | Specializes in iOS/Android testing: device fragmentation, network throttling, battery consumption, mobile automation (Appium). |
| **SDET I / SDET II** | Embedded directly in a development squad: reviews developer code, writes white-box tests, builds internal tools to speed up the local dev cycle. |

**Senior / Advanced (5–8 years)**

| Title | What They Actually Do |
|---|---|
| **Senior QA Engineer / Lead QA** | Owns product delivery quality: mentors juniors, assigns sprint testing work, writes the master test plan, decides release readiness. |
| **Senior SDET / Automation Architect** | The framework master: designs and maintains custom, scalable testing frameworks, ensures automated scripts run fast, reliably, and concurrently. |
| **Performance / Load Testing Engineer** | A highly technical non-functional specialist: simulates high traffic, detects memory leaks, evaluates stress thresholds, reports infrastructure bottlenecks. |
| **Security QA / Penetration Tester** | The team's ethical hacker: proactively scans for data vulnerabilities, XSS, SQL injection, and authentication flaws. |

**Leadership / Executive (8–15+ years)**

| Title | What They Actually Do |
|---|---|
| **QA Manager / Delivery Head** | Focuses on people and process: hiring, team budgets, resource allocation, client management, cross-department communication. |
| **Principal QA Architect / Director of QE** | Shapes the company's entire technical QA landscape and integrates testing deeply into the DevOps/cloud pipeline. |
| **VP of Quality Engineering / Chief Quality Officer** | The executive seat: drives company-wide quality strategy, aligns engineering standards with business revenue targets, reports directly to the board. |

### The Master QA Career Ladder — Level by Level

#### Level 1 — Associate QA / Trainee / Junior Manual Tester
*Experience needed: 0–2 years (fresh-graduate level).*

The reality: this is your entry point, and your job isn't to write code — it's to think like a user actively trying to break the software. You'll read requirements, write test steps, execute them by hand, and report bugs.

Technologies and tools to learn:
- **Jira, ClickUp, or Azure DevOps** — bug tracking
- **TestRail, Xray, or Zephyr** — test case management
- **SDLC, STLC, black-box testing, Agile/Scrum** — the core concepts everything else builds on

:::tip Am I on the right track?
You're succeeding if, given a new feature, you naturally find several edge-case scenarios the developers missed, and your bug reports are clear enough that a developer can reproduce the issue without asking you a follow-up question.
:::

#### Level 2 — QA Engineer / Automation Engineer
*Experience needed: 2–5 years.*

The reality: you can no longer rely on manual clicking alone. You start writing basic scripts to automate repetitive tests, and start testing what happens behind the scenes (APIs, databases) rather than only the visual UI.

Technologies and tools to learn:
- **Java, Python, or JavaScript** — one programming language, chosen and stuck with
- **Selenium WebDriver or Cypress** — UI automation
- **Postman, plus RestAssured or Newman** — manual and automated API testing
- **SQL** — querying and verifying data directly

:::tip Am I on the right track?
You're on track if you no longer manually re-test the same login page every week — you've written a script that does it in under 10 seconds while you focus on harder work.
:::

#### Level 3 — Senior QA Engineer / Senior SDET
*Experience needed: 5–8 years.*

The reality: you're now a core technical asset. You don't just use automation tools, you build the custom frameworks other QA engineers rely on, and you understand — and help secure — how code moves from a developer's laptop to production.

Technologies and tools to learn:
- **Playwright or Appium** — advanced and mobile automation
- **Jenkins, GitHub Actions, or GitLab CI** — CI/CD integration
- **Docker** — isolated, repeatable test environments
- **JMeter or Locust** — performance and load testing

:::tip Am I on the right track?
You're on track if you're the one designing the automation strategy for entire projects, and your pipelines run inside the company's daily deployment cycle without needing constant manual intervention.
:::

#### Level 4 — QA Lead / QA Principal / Test Architect
*Experience needed: 8–12+ years.*

The reality: your work splits into two paths — the people path (managing teams, schedules, budgets) or the technical path (architecting large, multi-platform test infrastructure). You write fewer individual test scripts and solve more process-level bottlenecks.

Technologies and tools to learn:
- **AWS, Azure, or Google Cloud** — cloud-based QA tooling
- **Testsigma, ACCELQ, and similar** — AI-assisted testing suites
- **Power BI, Tableau, or Jira metrics** — governance dashboards for product health, bug-leakage rate, and coverage

:::tip Am I on the right track?
You're on track if executives rely on your risk assessment to decide whether a major release is safe to ship, and your workflow changes have measurably cut delivery time.
:::

#### Level 5 — Director of Quality / VP of Quality Engineering
*Experience needed: 12–15+ years.*

The reality: the top of the ladder — a purely strategic, executive role. You manage budgets in the hundreds of thousands to millions, set engineering-wide quality standards, and report directly to the CTO or CEO.

Skills at this level: executive leadership, financial budgeting, vendor management, and strategic ROI modeling — not a specific tool or language.

:::tip Am I on the right track?
You're at the top if your quality vision aligns directly with the business's financial goals — cutting overhead while scaling output across many global engineering teams.
:::

### Three Rules for a Fresh Graduate

If you're entering the market straight out of college, these three rules are the shield that keeps a career from stalling early:

1. **The 18-month manual trap.** Starting 100% manual at Level 1 to get your foot in the door is completely fine. But if you're still 100% manual after 18 months, with no code and no API tooling touched, your career is at real risk of stalling — start upskilling immediately, not "eventually."
2. **Pick one language and commit to it.** Don't try to learn Java, Python, and JavaScript at once. Pick one — Python is the easiest starting point, Java is the most common in large legacy enterprise codebases — and master its basics before attempting to build automation on top of it.
3. **Understand *why*, not just *how*.** Anyone can learn to click through a script someone else wrote or copy-paste an automation snippet. The QA professionals who move up the ladder fastest are the ones who deeply understand the underlying product architecture — knowing exactly where the data goes on the backend when a user clicks a button, not just that clicking the button "works."

### How the Tracks Relate

Once past the early generalist stage, QA careers stop being one ladder and become a set of tracks that share a common start and then diverge based on what someone gravitates toward:

**VIS-018 — QA Career Tracks Branch, They Don't Ladder**

<svg viewBox="0 0 1000 420" role="img" aria-labelledby="vis018-title vis018-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="vis018-title">QA Career Tracks Branch, They Don't Ladder</title>
  <desc id="vis018-desc">Junior QA progresses to Mid-Level QA, which then branches into four parallel tracks a person chooses between rather than climbs through in order: SDET / Automation, Senior QA Individual Contributor, QA Lead / Manager, and Quality Engineer.</desc>
  <g font-family="Inter, ui-sans-serif, system-ui, sans-serif">
    <rect x="350" y="20" width="200" height="60" rx="10" fill="#087f8c"/>
    <text x="450" y="56" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="700">Junior QA</text>

    <line x1="450" y1="80" x2="450" y2="120" stroke="#0a98a8" stroke-width="2" marker-end="url(#arrow)"/>

    <rect x="350" y="120" width="200" height="60" rx="10" fill="#076f7b"/>
    <text x="450" y="156" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="700">Mid-Level QA</text>

    <line x1="450" y1="180" x2="450" y2="205" stroke="#0a98a8" stroke-width="2"/>
    <line x1="120" y1="205" x2="880" y2="205" stroke="#0a98a8" stroke-width="2"/>
    <line x1="120" y1="205" x2="120" y2="250" stroke="#0a98a8" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="370" y1="205" x2="370" y2="250" stroke="#0a98a8" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="630" y1="205" x2="630" y2="250" stroke="#0a98a8" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="880" y1="205" x2="880" y2="250" stroke="#0a98a8" stroke-width="2" marker-end="url(#arrow)"/>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" fill="#0a98a8"/>
      </marker>
    </defs>

    <rect x="20" y="250" width="200" height="90" rx="10" fill="#f3f8f8" stroke="#087f8c" stroke-width="1.5"/>
    <text x="120" y="288" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">SDET /</text>
    <text x="120" y="306" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Automation</text>
    <text x="120" y="326" text-anchor="middle" fill="#3a4a4d" font-size="10">Builds test infra</text>

    <rect x="270" y="250" width="200" height="90" rx="10" fill="#f3f8f8" stroke="#087f8c" stroke-width="1.5"/>
    <text x="370" y="288" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Senior QA</text>
    <text x="370" y="306" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">(Individual Contributor)</text>
    <text x="370" y="326" text-anchor="middle" fill="#3a4a4d" font-size="10">Deep expertise, no reports</text>

    <rect x="530" y="250" width="200" height="90" rx="10" fill="#f3f8f8" stroke="#087f8c" stroke-width="1.5"/>
    <text x="630" y="288" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">QA Lead /</text>
    <text x="630" y="306" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Manager</text>
    <text x="630" y="326" text-anchor="middle" fill="#3a4a4d" font-size="10">Team &amp; hiring</text>

    <rect x="780" y="250" width="200" height="90" rx="10" fill="#f3f8f8" stroke="#087f8c" stroke-width="1.5"/>
    <text x="880" y="288" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Quality</text>
    <text x="880" y="306" text-anchor="middle" fill="#05565f" font-size="14" font-weight="700">Engineer</text>
    <text x="880" y="326" text-anchor="middle" fill="#3a4a4d" font-size="10">Breadth across all three</text>

    <text x="500" y="395" text-anchor="middle" fill="#3a4a4d" font-size="12" font-style="italic">Four tracks chosen between, not climbed through in order</text>
  </g>
</svg>

**Figure 2 — QA Career Tracks Branch, They Don't Ladder.** After Mid-Level QA, the path splits into four tracks a person chooses based on fit, not a single ladder everyone climbs the same way. *Source: TestAtlas.*

**Junior QA** → **Mid-Level QA** → then branches into four tracks a person chooses between, not climbs through in order:
- **SDET / Automation** — building and maintaining test automation and infrastructure
- **Senior QA (Individual Contributor)** — deep expertise and strategic influence without people management
- **QA Lead / Manager** — team coordination, hiring, and reporting quality upward
- **Quality Engineer** — breadth across manual, automation, and process work

| Level / Track | Primary Focus | Typical Skills |
|---|---|---|
| **Junior QA** | Executing test cases, learning to think in edge cases, reporting defects clearly | Test case execution, defect reporting, basic domain knowledge |
| **Mid-Level QA** | Designing test cases independently, owning a feature area's quality, mentoring juniors informally | Test design techniques, risk-based prioritization, some tooling familiarity |
| **Senior QA** | Owning testing strategy for a whole product area, identifying systemic quality gaps, driving process improvement | Deep domain expertise, cross-team collaboration, strategic thinking |
| **QA Lead / Manager** | Team coordination, hiring, reporting quality metrics upward, aligning testing strategy with business goals | Leadership, communication with non-technical stakeholders, organizational awareness |
| **SDET (Software Development Engineer in Test)** | Building and maintaining test automation, frameworks, and testing infrastructure — writes code as much as, or more than, developers do | Programming, automation frameworks, CI/CD integration (running tests automatically as part of the build and deployment pipeline — covered in depth in the future Automation path) |
| **Automation Engineer** | A closely related track to SDET, sometimes distinct, focused specifically on building and scaling automated test suites | Scripting, framework design, maintaining large test suites without them becoming brittle |
| **Quality Engineer** | A broader title some organizations use for QA that spans manual, automation, and quality-process work without a hard specialization | Breadth across manual and automated approaches, process design |

These tracks aren't strictly sequential — a Junior QA doesn't have to pass through every row before reaching SDET. The realistic path is: start broad (Junior/Mid-Level, building the foundational thinking this entire path teaches), then deliberately specialize based on what genuinely fits, rather than drifting by default into whichever track happened to have an opening.

## When to Move, and In What Direction

**Move from Junior to Mid-Level QA when:**
you can design test cases independently, without needing someone else to define the approach — not just execute test cases someone else designed.

**Consider the SDET / Automation track when:**
writing code to build and maintain testing infrastructure feels more energizing than deep manual exploratory work — this track rewards programming aptitude and enjoying tooling and framework design specifically.

**Consider the QA Lead / Management track when:**
influencing how a whole team approaches quality — not just personally executing good testing — is what actually motivates you, and you're drawn to the communication and coordination work that comes with it, not just the title.

**Consider Senior QA (an individual-contributor track, not management) when:**
you want to keep growing in depth and strategic influence over quality without taking on people-management responsibilities — a legitimate, valuable track of its own, not a consolation prize for not going into management.

**A useful signal for any transition**: notice what kind of work you gravitate toward *voluntarily*, outside of what's strictly assigned — the tester who keeps tinkering with automation scripts in their spare time is showing a real signal about direction, more reliable than a title alone.

## How This Works on a Real Career

A QA engineer joins a mid-sized e-commerce company as a Junior QA, executing test cases written by a senior teammate and learning the product. Within the first year, they build the foundational skills this entire Foundations path covers — risk-based thinking, verification and validation, defect life cycle, all applied on real features — and by year's end are designing their own test cases independently for a full feature area, marking the move to Mid-Level QA.

At that point, they notice something specific: the parts of the job they enjoy most are writing small scripts to speed up repetitive manual checks, and they've started doing this unprompted, on their own time. Recognizing this as a real signal rather than a passing interest, they deliberately shift focus — pairing with the team's one SDET, taking an online course in test automation frameworks, and gradually taking ownership of a growing slice of the regression suite.

Eighteen months later, a formal SDET role opens on the team. They have a concrete track record to point to: a real, working portion of the automated suite they built and maintain, not just a stated interest in automation. They move into the role with evidence, not just enthusiasm.

Three years into the SDET role, they notice a different pull: they're spending increasing time helping other engineers design better test strategies and mentoring newer QA hires, and they find that more rewarding than writing automation code day to day. Rather than assuming this means they should become a manager by default, they deliberately evaluate both the Senior QA (IC) and QA Lead (management) tracks against what actually motivates them — and choose QA Lead specifically because the parts they enjoy (coordinating strategy across a team, growing other people's skills) matter more to them than staying hands-on with code. The choice is deliberate, based on genuine reflection, not an assumption that management is the automatic "next level" after enough experience.

## Common Mistakes

**Mistake 1: Assuming career progression is a single ladder everyone climbs the same way.**
QA Lead isn't a "higher level" than SDET — they're different tracks serving different strengths and interests. Treating one as universally "above" the other misreads how the field actually branches.

**Mistake 2: Drifting into a specialization by accident rather than choosing it deliberately.**
Ending up in a track just because it happened to have an opening, rather than because it fits, tends to produce burnout or a mismatch discovered only after significant time invested.

**Mistake 3: Assuming management is the default "next step" after enough experience.**
Senior QA (IC) is a legitimate, valuable, non-management track — treating management as the only form of career growth pushes good individual contributors into roles that don't actually fit them.

**Mistake 4: Chasing a title without building the actual track record behind it.**
An SDET title without real, demonstrated automation work (or a QA Lead title without real coordination and communication experience) tends to be discovered as a mismatch quickly, both by the person and by their team.

## Best Practices

**Practice 1: Build the generalist foundation deliberately before specializing.**
The concepts across this entire Foundations path — risk-based thinking, defect management, verification and validation — apply to every specialization track; skipping this stage to specialize early often means specializing on a shaky foundation.

**Practice 2: Pay attention to what you gravitate toward voluntarily, not just what's assigned.**
Unprompted interest (tinkering with scripts, volunteering to mentor, digging into process improvement) is a more reliable signal for direction than a job description alone.

**Practice 3: Build a track record before pursuing a title change.**
Concrete evidence — an automation suite actually built and maintained, a process improvement actually driven — makes a transition a formality rather than a leap of faith for whoever's hiring or promoting.

**Practice 4: Revisit your direction periodically instead of assuming an early choice is permanent.**
The SDET-to-QA-Lead move in the example above happened because someone noticed a genuine shift in what motivated them and acted on it, rather than assuming their first specialization was a lifetime commitment.

## Key Takeaways

- QA careers branch into distinct tracks (SDET/Automation, Senior QA IC, QA Lead/Management, Quality Engineering) rather than following one universal ladder.
- Voluntary, unprompted interest is a more reliable signal for which track fits than a title or an available opening.
- Senior QA (individual contributor) is a legitimate track of its own, not a fallback for people who don't go into management.
- A concrete track record — real automation work, real coordination experience — makes a specialization transition credible, not just a stated interest.
- Career direction is worth revisiting periodically; an early specialization choice doesn't have to be permanent.

---

## What You Just Learned

- The QA career landscape: Junior through Senior, and the SDET/Automation, QA Lead, and Quality Engineering tracks that branch from it
- How to recognize genuine signals for which direction fits, versus drifting into one by accident
- How a real QA career moved from Junior to Mid-Level to SDET to QA Lead, each transition driven by a deliberate, evidence-backed decision
- Why management isn't the automatic "next level" after enough QA experience

**Next:** [Testing Myths & Misconceptions](/learning-paths/foundations/testing-myths-and-misconceptions)

## Related Topics

- [The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery) — Where these archetypes were first introduced, before there was context for what separates them
- [QA Metrics & Measurement](/learning-paths/foundations/qa-metrics-and-measurement) — Metrics literacy that becomes increasingly important at the Senior QA and QA Lead levels
- [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan) — Strategy-level thinking that becomes a core Senior QA and QA Lead responsibility

## Interview Questions

**Q1: What's the difference between a Senior QA engineer and a QA Lead?**

*What to look for*: Recognition that Senior QA is typically an individual-contributor track (deep expertise, strategic influence without people management) while QA Lead involves team coordination and management — not treating one as simply "more senior" than the other.

**Q2: How did you decide which QA specialization to pursue?**

*What to look for*: A real, specific answer showing deliberate reflection (what work they gravitated toward, what evidence they built) rather than "it's just what was available" or a vague, generic answer.

**Q3: What skills would someone need to move from manual QA into an SDET role?**

*What to look for*: A concrete answer covering programming ability, automation framework experience, and CI/CD familiarity — not just "know the product well," which describes any QA role, not the specific SDET transition.

---

## Glossary

**SDET (Software Development Engineer in Test)**: A QA specialization focused on building and maintaining test automation, frameworks, and testing infrastructure through code. See [The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery) for the role-level definition.

**Quality Engineer**: A broader title some organizations use for QA spanning manual, automation, and quality-process work without a hard specialization.

**Individual Contributor (IC) Track**: A career path that grows in depth and influence without taking on people-management responsibilities — Senior QA is a common IC track in QA.

**Track Record**: Concrete, demonstrated evidence of skill or ownership (built automation, driven process change) used to support a career transition, as opposed to a stated interest alone.
