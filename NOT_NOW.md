# Not Now

Every good idea for TestAtlas isn't a good idea *right now*. This file is where they go instead of into the roadmap or the architecture.

The rule: if it's not on [ROADMAP.md](ROADMAP.md), it doesn't get built, no matter how good it sounds in the moment. It goes here instead, so it isn't lost — just not competing with content for attention.

## How to use this file

- Add an idea in one or two lines: what it is, why it's tempting, and a rough sense of when it might make sense (a version, a milestone, or a condition like "once we have outside contributors").
- Don't flesh ideas out here. A one-line placeholder is enough — if it's worth building, it earns a real design pass when its time comes.
- Move an idea to the roadmap only when it's deliberately promoted, not by accretion.

## Parked Ideas

- **Mascot / visual identity character** — Rust has Ferris, Go has the Gopher. Worth having eventually for memorability, but shouldn't block v0.3.0's Website Foundation work. Revisit closer to v1.0.0 Public Launch.
- **RFC process** (`docs/rfcs/`) — Formal architecture-change proposals make sense once there are multiple maintainers or active outside contributors making structural suggestions. Premature with one maintainer. Revisit around v0.7.0–v0.8.0.
- **Gamification** (badges, streaks, XP) — Tempting but adds product surface area (accounts, state, design work) before there's content to gamify.
- **User accounts** — No feature currently requires them (no progress tracking, no personalization). Adds auth, privacy, and data-handling scope.
- **AI chatbot / AI tutor** — Different from the AI Testing *learning path* (v0.11.0, which teaches testing AI systems). This would be an AI feature embedded in the site itself — significant scope, and easy to confuse with the actual content mission.
- **Certifications** — Needs a stable, complete curriculum and some credibility track record first. Premature before v1.0.0.
- **Mobile app** — The website is responsive; a dedicated app is a different project with its own maintenance burden.
- **Plugin system** — No evidence yet that extensibility is a real need versus a speculative one.
- **Advanced search improvements** (semantic search, filters, facets) — Current local search is adequate for the current content volume. Revisit if search becomes a genuine pain point at higher page counts.
- **Community voting** (on proposals, roadmap items) — Belongs with the RFC process, same timing logic: needs a community to vote first.
- **Visual progress bars for learning-path completion** (e.g. `Foundations ██████░░░░`) — Genuinely nice for learner motivation and could live on the homepage or roadmap. Deferred because it's a UI feature, not content, and the current milestone is "produce Foundations modules," not "add more platform surface area." Revisit once a couple of paths are far enough along that a progress bar shows real movement.
- **Contributor template library** (`/templates`: Learning Module, Lab, Case Study, Bug Museum, Interview Question, Project Simulation templates) — Good idea for keeping outside-contributor submissions consistent, but there's a single maintainer today and `CONTENT_MODEL.md` already has the required structure per content type. Revisit once outside contributors are actually submitting content and the template's value is proven by real onboarding friction, not anticipated friction.
- **Module → Knowledge Check → Mini Assignment → Project → Completion journey** — Turning each module into an interactive learning flow instead of a static page. Genuinely more engaging, but it's a platform feature (quiz/assignment infrastructure, completion tracking) layered on top of content that doesn't exist yet in most paths. Revisit once Foundations is complete and there's real content to wrap the interaction around — building the interaction layer before the content it operates on is backwards.

## Why this file exists

Infrastructure work is seductive because it always feels productive and it's always "almost done." The actual test of TestAtlas's value is the quality and consistency of what a learner reads — not how sophisticated the system behind it is. This file exists to protect the 90% of effort that should go to content from being quietly eaten by the next interesting system to build.
