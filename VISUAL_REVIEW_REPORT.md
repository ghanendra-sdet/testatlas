# Visual Review Report — Visual & SEO Enhancement Sprint v1.2

Scope: all 17 Foundations modules. No educational content rewritten, no curriculum or architecture changes, no URLs, titles, or H1s changed.

## Visuals Kept (15)

All process flows, lifecycles, decision logic, and genuine relationship diagrams — the shapes Mermaid is actually strong at:

| ID | Module | Type | Why kept |
|---|---|---|---|
| VIS-001 | What Is Software Testing? | Flowchart | A real 5-activity cycle, not a list |
| VIS-002 | What Is Software Testing? | Flowchart (timeline) | Sequential cost progression |
| VIS-003 | What Is Software Testing? | Flowchart | A real hierarchy (unit → production) |
| VIS-004 | Role of QA | Flowchart | A real relationship between four roles |
| VIS-006 | Testing Across the SDLC | Flowchart | Canonical sequence |
| VIS-007 | Testing Across the SDLC | Flowchart | Repeating cycle |
| VIS-008 | Agile & Scrum Basics | Flowchart | Repeating cycle |
| VIS-009 | Verification vs. Validation | Flowchart | Genuine before/after relationship |
| VIS-010 | Static vs. Dynamic Testing | Decision flow | A real branching decision |
| VIS-011 | Risk-Based Testing | Decision tree | Two-factor branching logic |
| VIS-013 | Shift-Left & Shift-Right | Flowchart (timeline) | Genuinely positional (before/after release) |
| VIS-014 | Defect Life Cycle | State diagram | Textbook state-machine shape |
| VIS-015 | Severity vs. Priority | Quadrant chart | Two continuous axes, plotted relationship |
| VIS-016 | Test Strategy vs. Test Plan | Flowchart | One-to-many relationship |
| VIS-017 | QA Metrics & Measurement | Flowchart | A real causal/evidence chain |

## Visuals Replaced (3)

| ID | Module | Was | Now | Why replaced |
|---|---|---|---|---|
| VIS-005 | Software Testing Principles | Mermaid `mindmap` | Structured cards | Seven independent, unrelated labels — a mindmap implies a relationship that doesn't exist between them. A beginner reads the numbered list faster than parsing a radial diagram for the same information. |
| VIS-012 | Quality Attributes | Mermaid `mindmap` | Structured cards (inline list) | Six independent attributes, no hierarchy or relationship between them — same reasoning as above. The comparison table immediately below already carries the real content. |
| VIS-018 | QA Career Roadmap | Mermaid `flowchart` | Structured cards | This one was a judgment call, not obviously wrong as a flowchart — a career branch genuinely is a shape Mermaid handles well. Replaced per explicit instruction; the branching structure is preserved in the card text (Junior → Mid-Level → four tracks), so no information was lost. |

All three carry a "SVG infographic planned" note per `VISUAL_STANDARDS.md` category 8, and their Visual IDs are preserved (not reused) for when that SVG work happens.

## Visuals Removed

None outright removed without replacement — every removed Mermaid diagram was replaced with cards, not deleted with nothing in its place.

## Accessibility Improvements

- **`accTitle`/`accDescr` added to all 15 remaining Mermaid diagrams**, in both the module's inline fence and its `assets/diagrams/foundations/` mirror. Verified this is real Mermaid syntax (not assumed) by testing against the actual parser before batch-applying it — see Validation below.
- **Heading hierarchy spot-checked** across the three modules most affected by this sprint (03, 09, 16): single H1, sequential H2s, no skipped levels.
- **Mermaid theme made higher-contrast and more spacious**: `fontSize: 16px`, increased `nodeSpacing`/`rankSpacing` (45/55 vs. Mermaid's tighter defaults), transparent background so diagrams never render as a light box against TestAtlas's dark theme.
- **Quadrant chart brought onto the brand palette**: previously used Mermaid's default four-color quadrant fill (a mild "rainbow" case the sprint's own instructions warned against); now uses the same teal/neutral palette as every other diagram.

## SEO Improvements

- **`docs/architecture/SEO_GUIDELINES.md` created** — standards for URLs, titles, meta descriptions, headings, internal linking, canonical URLs, Open Graph, Twitter Cards, structured data, breadcrumbs, and image SEO.
- **Verified, not assumed**: canonical URLs, OG tags, and Twitter Cards are already generated automatically by Docusaurus's classic preset from existing frontmatter — confirmed this rather than building a duplicate mechanism.
- **Confirmed zero duplicate `title` or `description` values** across all 17 modules (`uniq -d` check, empty result both times).
- **Structured data (JSON-LD) is explicitly documented as NOT implemented** — it requires either a plugin or swizzling page components, both real architecture changes outside this sprint's "do not change architecture" constraint. Logged as recommended future work, not silently skipped.

## Navigation Improvements

- **`sidebar_label` added to all 17 modules**, prefixed with a two-digit module number (`"03 Software Testing Principles"`), so the sidebar now shows sequential position at a glance. `title`, the H1, and the URL slug are all untouched.
- **Breadcrumb numbering resolved**: a small, isolated swizzle of `DocBreadcrumbs` (`src/theme/DocBreadcrumbs/`) strips the leading module-number pattern from breadcrumb labels — sidebar stays numbered, breadcrumbs and their `BreadcrumbList` JSON-LD structured data stay clean. Verified directly in the built HTML: sidebar shows `"03 Software Testing Principles"`, the visible breadcrumb trail and the structured data both show `"Software Testing Principles"`. The swizzle is ~120 lines, changes exactly one line of logic from Docusaurus's stock component (a label transform), and is documented in its own header comment specifically to stay easy to diff against upstream on a version bump.

## Google Image Improvements

- **Image and Diagram Metadata Standard added to `VISUAL_STANDARDS.md`**: required filename convention (descriptive, lowercase, hyphenated), and required Title/Alt/Caption/Figure Number/Source for every future visual asset.
- No actual SVG images exist yet to apply this to — it's a standard for the SVG infographic work still ahead (Principles, Quality Attributes, Career Roadmap), not a retrofit of something that already shipped.

## Remaining SVG Candidates

1. **Seven Software Testing Principles** (replaces VIS-005's card version)
2. **Six Quality Attributes** (replaces VIS-012's card version)
3. **QA Career Tracks** (replaces VIS-018's card version)

All three are currently well-served by cards; the SVG work is a genuine visual upgrade, not a blocking gap.

## Recommendations

1. Produce the three SVG infographics above (Principles, Quality Attributes, Career Tracks) as architectural placeholders — no urgency, build them when the Banking/Healthcare/Insurance/E-Commerce project illustrations are being designed anyway, so the visual language is developed once, not three separate times.
2. ~~Decide on the breadcrumb-numbering limitation~~ — resolved via the `DocBreadcrumbs` swizzle described above.
3. Scope `Article`/`LearningResource`/`Course` structured data (beyond the `BreadcrumbList` schema Docusaurus already generates automatically) as its own milestone before Manual Testing's content is far along.
4. **New backlog item — CI Check: Mermaid Mirror Synchronization.** Not needed now (19 diagrams, 17 modules); becomes worth automating once TestAtlas approaches roughly 100 diagrams, where manual inline/mirror sync becomes a real drift risk. Extend `scripts/validate-diagrams.mjs` at that point to diff each inline fence against its `.mmd` mirror, not just check syntax.
5. **New backlog item — post-deployment release gates.** Once Foundations has a public URL: add Lighthouse Accessibility, Lighthouse SEO, and Lighthouse Performance to `QUALITY_GATES.md` as required checks, with an Axe accessibility scan as optional. Replaces this sprint's reasoned-not-measured Core Web Vitals section with a real, repeatable baseline.
