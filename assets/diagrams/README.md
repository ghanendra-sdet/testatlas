# Diagram Assets

Full convention: `docs/architecture/VISUAL_STANDARDS.md`. This file is the short version for contributors working in this directory specifically.

## What lives here

- **`templates/`** — generic, unfilled Mermaid snippets for each diagram category (hero illustration, process flow, decision tree, timeline). Copy from here when starting a new module's diagrams, so every module starts from the same visual vocabulary. Un-numbered — these are starting points, not shipped diagrams.
- **One folder per learning path** (`foundations/`, `manual-testing/`, etc.) — every diagram used in that path, as a numbered `VIS-XXX-slug.mmd` file, plus hand-authored SVG infographics (Visual Standards category 8).
- **`exports/svg/` and `exports/png/`** — rendered exports for use outside Docusaurus (social cards, PDFs). Not populated yet.

## Visual IDs

Every diagram gets a sequential ID (`VIS-001`, `VIS-002`, ...) the first time it appears in its learning path, in filename and as a comment on the diagram's first line. IDs are never reused. Full convention: `docs/architecture/VISUAL_STANDARDS.md`.

## Keeping it in sync

The module's own inline code fence is what actually renders — it's authoritative. The `.mmd` file here is a byte-identical mirror, kept for indexing and reuse. When a diagram changes, update both in the same commit. A drifted mirror is a defect.

## Styling

Diagram colors come from the site-wide Mermaid theme configured in `docusaurus.config.ts` (TestAtlas brand teal, light and dark). Don't hardcode colors inside individual diagrams — inherit the theme, so every diagram across the whole site looks consistent automatically.
