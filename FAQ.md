# Frequently Asked Questions

The short version of these lives in `README.md`. This is the fuller version — if your question isn't here, see `SUPPORT.md` for where to ask it.

## About TestAtlas

**Is this free?**
Yes, entirely. MIT licensed, no paywall, no account required to read. See `PROJECT_VISION.md` for why that's a deliberate choice, not just a default.

**Is this affiliated with a company, bootcamp, or certification body?**
No. TestAtlas is an independent, community-built project.

**Who is this actually for?**
Students building testing skills for a first role, manual testers extending into API/automation work, automation engineers wanting a firmer grounding in test design, and SDETs or QA leads who want a resource they can point teammates to. See README's "Who it is for" section for the full list.

**How is this different from other testing tutorials?**
Every module follows Why → What → When → How, and shows a technique catching a specific, realistic defect — not just defining it. See `PROJECT_VISION.md` for the reasoning, and `docs/architecture/CONTENT_MODEL.md` if you want the underlying structure.

## Using the curriculum

**Do I need to start from Foundations?**
Not if you already have testing experience. Each learning path states its own prerequisites at the top of its first module — jump to whichever matches where you actually are.

**Do the paths depend on each other?**
Manual Testing assumes Foundations. API Testing and Test Automation both assume Manual Testing's test-design toolkit (boundary value analysis, equivalence partitioning, and so on) and reference it directly rather than re-teaching it — so skipping Manual Testing means missing context those paths lean on.

**What's the "AtlasBank" I keep seeing in examples?**
A recurring fictional banking platform used across most examples from Manual Testing Section 3 onward, and throughout API Testing and Test Automation. It's there so you build up familiarity with one realistic system instead of a new invented company every module. See `STYLE_GUIDE.md`'s Recurring Fictional Product section if you're curious about the convention itself.

**Is there hands-on practice, or is it all reading?**
Today it's reading — techniques taught with realistic worked examples, but no runnable exercises yet. Building actual hands-on practice (a sample app to test, practice tickets, mock code review) is explicitly the next priority before adding another full learning path. See `COMMUNITY_ROADMAP.md`.

**Can I use this to prepare for a QA interview?**
Yes — every module includes real interview questions with "what to look for" guidance for what a strong answer actually demonstrates, plus a "Common Interview Mistake" callout naming a specific wrong answer candidates commonly give.

## Contributing

**I found a typo or an error — what do I do?**
Open an issue using the Content Correction template. See `SUPPORT.md`.

**Can I propose a new learning path?**
Yes — read `AUTHOR_GUIDE.md` first, then open an issue using the Learning Path Proposal template. A full architecture proposal comes after that pitch is discussed, not instead of it.

**I want to contribute but don't know where to start.**
Check the repository's "good first issue" label for small, scoped tasks — see `docs/community/GOOD_FIRST_ISSUES.md` for the current list and what makes a good starting contribution.

**Do I need deep QA experience to contribute?**
No. A clearer explanation, a caught error, or a thoughtful review are all genuinely useful contributions regardless of experience level — see `PROJECT_CONSTITUTION.md`'s "Contribution principles."

## Technical

**What's TestAtlas built with?**
Docusaurus (a static-site generator), Markdown/MDX content, and Mermaid for diagrams. See `CONTRIBUTING.md`'s Local Development Setup for how to run it.

**Why doesn't a diagram render / a link seem broken?**
Please report it — see `SUPPORT.md`'s Bug Report path. TestAtlas validates every diagram and link before release (`npm run build`, `npm run validate:diagrams`), but if something slipped through, we want to know.

**Is there a mobile app or offline version?**
Not currently — the site is a standard responsive website, readable on mobile, no separate app.
