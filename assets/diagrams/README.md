# Diagram Assets

Full convention: `docs/architecture/VISUAL_STANDARDS.md`. This file is the short version for contributors working in this directory specifically.

## What lives here

- **`templates/`** — generic, unfilled Mermaid snippets for each diagram category (hero illustration, process flow, decision tree, timeline). Copy from here when starting a new module's diagrams, so every module starts from the same visual vocabulary.
- **One folder per learning path** (`foundations/`, `manual-testing/`, etc.) — hand-authored SVG infographics only (Visual Standards category 8: Seven Testing Principles, Six Quality Attributes, and similar fixed-set concepts). Referenced by path from the module that uses them.

## What does not live here

Mermaid diagrams that appear inline in a module live inside that module's own `.md` file as a code fence — never duplicated here as a separate file. Keeping one copy, in the file that renders it, is the entire point of using Mermaid instead of static images.

## Styling

Diagram colors come from the site-wide Mermaid theme configured in `docusaurus.config.ts` (TestAtlas brand teal, light and dark). Don't hardcode colors inside individual diagrams — inherit the theme, so every diagram across the whole site looks consistent automatically.
