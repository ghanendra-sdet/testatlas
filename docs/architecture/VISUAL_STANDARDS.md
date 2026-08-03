# Visual Standards

This document defines TestAtlas's visual design system: a consistent, reusable set of diagram and table patterns applied across every learning path, so the site reads as one coherent product instead of a collection of individually-styled articles.

## Design Principle

Every visual must answer a learning question, not decorate a page. A diagram earns its place by making a relationship, sequence, or decision easier to grasp than the same content in prose would be — never as a break from "walls of text" for its own sake. No stock photography, no decorative or unexplained imagery, ever (this was already implicit in `CONTENT_MODEL.md`'s "no external images" rule; this document makes it explicit and gives the alternative a real system to work from).

This standard is established **before** any retrofitting happens. Foundations' 17 modules are not touched by this document — they get a dedicated Visual Enhancement Sprint later, applying this system consistently in one pass, rather than accumulating an inconsistent visual style module by module. New learning paths (starting with Manual Testing) apply this standard from their first module.

## The Eight Visual Categories

### 1. Hero Illustration (one per module, where genuinely useful)
A simple conceptual diagram introducing the module's core idea, placed near the top, after the opening hook paragraph. Not every module needs one — a module whose core idea is already a clean visual relationship (like Verification vs. Validation) benefits; a module that's fundamentally a list (like Common QA Terminology) doesn't.

```mermaid
flowchart TD
    A[Requirements] --> B["Verification<br/>(Are we building it right?)"]
    B --> C[Software]
    C --> D["Validation<br/>(Are we building the right thing?)"]
```

### 2. Process Flow (0–2 per module)
For any module teaching a sequence or lifecycle — states, phases, steps.

```mermaid
flowchart LR
    New --> Assigned --> InProgress["In Progress"] --> Fixed --> Retest --> Closed
    Retest -.->|verification fails| Reopened
    Reopened --> InProgress
```

### 3. Comparison Tables (2–4 per module)
Already an established pattern across every shipped module — this standard doesn't change the format, it confirms it as the default for any "X vs. Y" contrast. Plain Markdown tables, per `CONTENT_MODEL.md`'s existing Decision Tables pattern. No new syntax.

### 4. Decision Trees
Rendered as Mermaid flowcharts, never ASCII art in published content (ASCII is fine for sketching in a draft or a conversation — never in a merged module). Best fit for Decision Table Testing, Boundary Value Analysis, State Transition Testing, and any "which technique should I use" module like Manual Testing's Module 16.

```mermaid
flowchart TD
    A{Is input numeric?} -->|Yes| B{Range valid?}
    A -->|No| D[Reject]
    B -->|Yes| C[Accept]
    B -->|No| D[Reject]
```

### 5. Timelines
Mermaid `gantt` for duration-based timelines (a sprint, a release cycle), Mermaid `flowchart LR` for ordered-but-not-time-scaled sequences (most SDLC/STLC content actually wants this, not a literal gantt chart — pick based on whether relative *duration* is part of the point, not just order).

### 6. Real UI Screenshots (deferred — Phase 3+)
Annotated screenshots from the Banking, Healthcare, E-Commerce, and Insurance project simulations, once those exist (`PROJECT_ARCHITECTURE.md`). Not available yet — there's no built sample application to screenshot. Every screenshot must be annotated to show specifically what it's teaching; an unannotated screenshot doesn't meet this standard.

### 7. Mermaid Diagrams (the primary tool for categories 1, 2, 4, 5)
Version-controlled as plain text inside the module's own Markdown file — not a separate rendered image. This is the single biggest advantage over hand-drawn diagrams: a diagram is edited the same way as the prose around it, in the same PR, with the same review. See **Mermaid Styling** below for the brand-matched theme.

### 8. Infographics (occasional — for genuinely multi-part concepts)
Hand-authored inline SVG, per `CONTENT_MODEL.md`'s existing "Mermaid or inline SVG only" rule. Reserved for concepts that are a fixed small set of parallel items — the Seven Testing Principles, the Six Quality Attributes — where a diagram of *relationships* (Mermaid's strength) doesn't fit, but a plain bullet list underuses the visual opportunity. Not for anything Mermaid can already express; reaching for hand-authored SVG when a flowchart would do is unnecessary maintenance burden for no reader benefit.

## Mermaid Styling

Docusaurus's Mermaid theme is now configured in `docusaurus.config.ts` to use TestAtlas's own brand teal instead of Mermaid's generic default palette, in both light and dark mode — see the `mermaid` key under `themeConfig`. Every diagram automatically inherits this; no per-diagram styling is needed or wanted. Do not override diagram colors inline (`style` directives, custom `classDef` colors) except in the rare case where semantic color genuinely matters (e.g., a red "Reopened" state) — and even then, prefer Mermaid's built-in `classDef` mechanism over ad hoc styling so it stays consistent across modules.

## Per-Module Visual Target (long-term goal, not a hard requirement)

- 1 conceptual (hero) diagram, where the module's core idea is a relationship diagram can express better than prose
- 1 process diagram, where the module teaches a sequence
- 2–4 comparison tables, for any "X vs. Y" contrast
- 1 real-world annotated example, once project simulations exist (category 6)

This is a target for new content, not a checklist every module must satisfy — a module with no natural sequence to diagram shouldn't force one in. The Definition of Done in `CONTENT_MODEL.md` will reference this standard once the first path built under it (Manual Testing) proves it out in practice.

## Diagram Source Organization

```
assets/
└── diagrams/
    ├── README.md              (this convention, in short form, for contributors)
    ├── foundations/
    ├── manual-testing/
    ├── api-testing/
    ├── database-testing/
    ├── automation/
    ├── performance-testing/
    ├── security-testing/
    ├── ai-testing/
    ├── interview-preparation/
    └── career/
```

**What goes here, and what doesn't**: Mermaid diagrams that appear inline in a module (categories 1, 2, 4, 5) live as code fences directly inside that module's `.md` file — they are *not* duplicated into `assets/diagrams/` as separate files. A duplicate copy would immediately risk drifting from the real, rendered version and defeats Mermaid's own version-control advantage.

`assets/diagrams/<path>/` holds two things instead:
- **Reusable template snippets** — generic, unfilled versions of each diagram category (see `assets/diagrams/README.md` and `templates/` below), for a writer to copy from when starting a new module, so every hero diagram and decision tree starts from the same visual vocabulary instead of being reinvented per module.
- **Hand-authored SVG infographics** (category 8) — these are genuinely standalone assets, referenced by path from the module that uses them, so they belong in the file system as real files, unlike inline Mermaid.

## What This Does Not Do (yet)

- Does not retrofit any of Foundations' 17 published modules. That's a dedicated future Visual Enhancement Sprint, run once, applying this system consistently — not incremental edits scattered across unrelated commits.
- Does not begin Manual Testing Module 1 content. This document is infrastructure the first Manual Testing module will be written against, not content itself.
- Does not add screenshot tooling or a design tool integration — category 6 stays deferred until a real sample application exists to screenshot.
