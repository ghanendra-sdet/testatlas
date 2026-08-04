# Accessibility Checklist

What to verify on every page before opening a PR. TestAtlas has no automated accessibility testing yet (no Lighthouse/Axe run against a real deployment — see `QUALITY_GATES.md`'s Post-Deployment Gates), so this checklist is currently the only accessibility gate. Treat it as a real requirement, not a nice-to-have.

## Headings

- [ ] Exactly one `#` (H1) per page.
- [ ] No skipped heading levels — a `###` never appears without a `##` above it in the same section.
- [ ] Headings describe content meaningfully ("Boundary Value Analysis," not "Section 3") — a screen reader user navigating by heading list should be able to understand the page's structure from headings alone.

## Mermaid diagrams

- [ ] Every diagram has `accTitle` and `accDescr` as the first two lines after the diagram-type declaration — see `MERMAID_GUIDELINES.md` for the exact syntax.
- [ ] `accDescr` describes the *relationship or sequence* the diagram shows, not just a list of node labels — write it as if describing the diagram to someone who can't see it.
- [ ] Diagram renders correctly in both light and dark theme (TestAtlas's Mermaid theme handles this automatically — don't override with inline `style` unless semantic color genuinely matters, e.g. a red "Reopened" state).
- [ ] Diagram renders legibly on a narrow (mobile-width) viewport — check for text truncation or overlap on complex diagrams.

## Images and other visual assets (SVG infographics, when used)

- [ ] Descriptive alt text — a full sentence describing what the image *teaches*, not just what it depicts.
- [ ] Caption present, stating the relationship the image shows.
- [ ] Descriptive filename (`software-testing-principles.svg`, not `image1.svg`).
- [ ] No color used as the *only* way to convey information (e.g., a severity indicator needs a label or shape, not just a color).

## Tables

- [ ] Every table has a proper header row (`|---|---|` separator) — a broken table renders as a wall of text to a screen reader, not a navigable grid.
- [ ] Tables used only for genuine field/option comparison — not as a layout trick for unrelated content.
- [ ] Table content makes sense read linearly, cell by cell, row by row (how a screen reader presents it) — not just visually scannable.

## Code blocks

- [ ] Every fenced code block has a language tag (` ```json `, ` ```http `, ` ```text ` for non-language content like URL diagrams) — this affects both syntax highlighting and how some screen readers announce the block.
- [ ] Pseudocode is explicitly labeled as pseudocode, not presented as if runnable.

## Links

- [ ] Link text describes the destination — never bare "click here," "read more," or a raw URL as the visible text.
- [ ] External links open in a new tab (`target="_blank" rel="noopener noreferrer"`) and this is signaled in the link text or surrounding context where it matters (a screen reader user should not be surprised by a new tab opening).

## Color and contrast

- [ ] TestAtlas's Mermaid brand-teal theme and Docusaurus's default text/background colors are used as-is — don't introduce custom low-contrast color combinations.
- [ ] Any custom-styled text (bold, italic, admonitions) still reads correctly with CSS/color stripped entirely — the underlying text should make complete sense on its own.

## Motion

- [ ] No custom animation added without checking it respects `prefers-reduced-motion` (rare in TestAtlas's current content — flag if you're adding anything beyond the standard Mermaid/Docusaurus rendering).

## Structural data (verify, don't rebuild)

- [ ] `BreadcrumbList` JSON-LD is generated automatically and stays de-numbered (via the `DocBreadcrumbs` swizzle) — if you're touching sidebar or breadcrumb code, verify this still holds in a real build, don't assume.

## What's explicitly out of scope for now

- Real screen-reader testing (VoiceOver, NVDA) — not available in the current development environment; reasoned from first principles instead, per Foundations' own documented known issue.
- Keyboard-navigation testing against a live deployment — same reason.
- Automated Lighthouse/Axe scores — require a public URL, not yet available.

Don't claim these are "done" in a PR — they're tracked, honestly, as not yet verified. See `QUALITY_GATES.md`.
