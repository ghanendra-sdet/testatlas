# TestAtlas

> **The Open Software Testing Knowledge Base**

TestAtlas helps people learn software testing the way experienced QA engineers work: by understanding product risk, asking useful questions, designing meaningful coverage, investigating failures, and helping teams ship with confidence.

This is an open-source learning ecosystem for students, manual testers, automation engineers, SDETs, and QA leaders. It is practical, free to use, and built to remain useful after a course or interview ends.

## Why TestAtlas exists

A lot of testing material explains terminology but stops before the work becomes real. It may define boundary value analysis without showing how it catches a pricing defect, or teach API testing without explaining how a tester investigates failures across services, databases, logs, and environments.

Testing is not only about executing test cases. It is about reducing risk, finding meaningful defects early, communicating clearly, and helping teams make better delivery decisions. TestAtlas exists to close the gap between knowing a concept and applying it.

## Who it is for

- Students building practical testing skills for their first role
- Manual testers strengthening test design, API, SQL, and product-thinking skills
- Automation engineers building maintainable test suites and frameworks
- SDETs working across quality, code, infrastructure, and delivery pipelines
- QA leads creating effective processes, teams, and quality strategies
- Developers and product professionals who want to build quality into delivery

You do not need to know everything before starting. The learning paths begin with fundamentals and grow into production-oriented engineering practices.

## What makes it different

TestAtlas is not a collection of disconnected articles. Every subject is designed to answer the questions that matter on real projects:

- Why does this matter?
- What is it?
- When should it be used?
- How is it used in a real team?
- What mistakes commonly cause problems?
- What practices hold up as products and teams grow?

The project combines structured learning with hands-on work:

- **Learning Paths** for progressive skill-building
- **QA Labs** for runnable exercises and tool practice
- **Project Simulations** for end-to-end testing in realistic domains
- **Templates and Checklists** that can be used at work
- **Interview Academy** for practical interview preparation
- **Resources and Visual Guides** for quick reference
- **Open-source Frameworks** that demonstrate maintainable automation patterns
- **Community Contributions** that improve the material over time

## Learning paths

TestAtlas covers the core areas of modern software testing. Four paths are live, all certified against the same architecture; the rest are planned:

1. ✅ Foundations of Software Testing — shipped, v1.0, 17 modules
2. ✅ Manual Testing — shipped, v1.0, 23 modules, certified
3. ✅ API Testing — shipped, v1.0, 21 modules, certified
4. ✅ Test Automation — shipped, v1.0, 18 modules, certified
5. Database Testing — planned
6. Performance Testing — planned
7. Security Testing — planned
8. AI for QA — planned
9. Interview Preparation — planned
10. Career Growth in Quality Engineering — planned

79 modules live today. Each path connects concepts with practical scenarios, examples, common failure modes, and related skills. See `docs/architecture/LEARNING_PATHS.md` for the detailed curriculum architecture of every shipped and planned path, and `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md` for what "certified" means and why it matters for anyone extending TestAtlas.

## What will be available

As the project grows, TestAtlas will provide test plans, strategies, cases, checklists, RTMs, bug reports, release templates, runnable labs, project simulations, cheat sheets, diagrams, decision trees, and interview exercises.

The `projects/` area will model realistic domains such as banking, healthcare, e-commerce, and HR systems. A project will follow the work a QA engineer actually performs: requirements, user stories, acceptance criteria, test scenarios, test cases, defects, regression coverage, and relevant API, database, automation, or performance work.

## Getting started

Read online, or run the site locally:

```bash
git clone https://github.com/ghanendra-sdet/testatlas.git
cd testatlas
npm install
npm run start   # local dev server with live reload at localhost:3000
```

`npm run build` produces the production build and is the stricter check (it fails on broken links) — run it before any contribution. See `CONTRIBUTING.md`'s Local Development Setup section for the full command list.

## FAQ

**Is this free?** Yes, entirely — MIT licensed, no paywall, no account required to read.

**Do I need to start from Foundations?** Not if you already have testing experience. Each path states its own prerequisites; jump to whichever matches where you actually are.

**Can I suggest a correction or a new topic?** Yes — see Contributing below. A quick content fix and a full new learning path go through different, appropriately-sized processes.

**Is this affiliated with a company or certification body?** No. TestAtlas is an independent, community-built project.

More questions answered in `FAQ.md`. For why TestAtlas exists and where it's going in plain language, see `PROJECT_VISION.md`.

## Contributing

TestAtlas is built in the open because testing knowledge improves when practitioners challenge, refine, and share it. Contributions can be corrections, clearer explanations, practical scenarios, labs, templates, diagrams, or thoughtful reviews.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a contribution. The project standards are defined in [PROJECT_CONSTITUTION.md](PROJECT_CONSTITUTION.md), and the writing rules are in [STYLE_GUIDE.md](STYLE_GUIDE.md). Not sure where your question or report belongs — a content fix, a bug, a new idea? Check `SUPPORT.md`.

## Long-term direction

| Phase | Focus |
| --- | --- |
| Foundation | Project standards, contributor workflow, website, and core learning paths |
| Practical learning | QA labs, reusable templates, visual resources, and interview preparation |
| Real-world practice | End-to-end project simulations and production-inspired automation examples |
| Community ecosystem | Challenges, bug hunts, recognition, curated contributions, and broader learning resources |

The detailed plan lives in [ROADMAP.md](ROADMAP.md). Growth will be deliberate: a smaller collection of trusted, well-connected resources is better than a large collection of inconsistent pages.

## Why star TestAtlas?

Star the repository if you want a practical, free, open-source testing resource that grows beyond theory. A star helps learners and contributors discover the project, and signals that practical quality-engineering knowledge is worth building in public.

> **Every merge should make TestAtlas better than it was yesterday.**

## Project governance

TestAtlas is maintained through clear standards, respectful review, and transparent decisions. See [GOVERNANCE.md](GOVERNANCE.md) for maintainer responsibilities and decision-making practices.

## Community standards, security, and license

Participation in TestAtlas follows `CODE_OF_CONDUCT.md`. Report a security vulnerability in the site's code privately, per `SECURITY.md` — never in a public issue. Licensed under the MIT License; see `LICENSE`.
