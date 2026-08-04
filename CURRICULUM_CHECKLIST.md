# Curriculum Checklist

The literal, check-it-off version of `docs/architecture/CONTENT_MODEL.md`'s Definition of Done — for you, the author, to run against your own module before opening a PR. For the full reasoning behind any item, follow the linked document; this file states *what*, not *why*.

## Which type of page is this?

Different page types have different requirements. Pick one before starting:

- **Instruction Module** — teaches one new technique, concept, or artifact. Full checklist below applies.
- **Application Module** — combines/synthesizes previously-taught material, teaches nothing new. See the Application Module exceptions marked below. Requires an evidenced reason to exist as this type — see `docs/architecture/CURRICULUM_EVOLUTION.md` Entry 2.
- **Section Review page** — see the Review/Solutions section at the bottom instead of the main checklist.
- **Section Solutions page** — see the Review/Solutions section at the bottom instead of the main checklist.

## Every Instruction Module

**Frontmatter**
- [ ] `title`, `sidebar_label` (numbered — number in sidebar only, never in title/H1/URL/breadcrumbs), `description`, `keywords` (3–6), `difficulty: "beginner"`, `time_to_read`, `last_reviewed` all present

**Structure**
- [ ] Prerequisites/Leads to block immediately after the H1
- [ ] Opening hook paragraph — what this page is about and why the reader should care, not a definition
- [ ] Why-What-When-How progression followed (or a stated, justified deviation)
- [ ] A realistic, production-inspired example — not a toy scenario
- [ ] Common Mistakes section
- [ ] Best Practices section
- [ ] "When NOT to Use [Technique]" — only for a module teaching a technique or artifact with a genuine "don't use this here" answer; skip for mindset-only modules

**The five recurring elements** (Application Modules: see exceptions below)
- [ ] `:::note From the Field` — one real, anonymized production lesson, distinct from the module's own worked example
- [ ] `:::tip Senior QA Insight` — beginner approach vs. experienced approach, contrasted
- [ ] `## Mini Challenge` — after Best Practices, before Key Takeaways
- [ ] `:::note Common Interview Mistake` — within Interview Questions, naming a specific wrong answer
- [ ] `## Quick Revision` — last heading, exactly five ✓ bullets

**Closing sections**
- [ ] `## Key Takeaways`
- [ ] `## What You Just Learned`
- [ ] `## Related Topics` — 3–5 links, sibling and cross-path
- [ ] `## Interview Questions` — 2–3, each with "what to look for"
- [ ] `## Glossary` — only genuinely new terms

**Links and cross-references**
- [ ] Internal links use `/learning-paths/...`, never a `.md` extension, never nested under another content type
- [ ] No `](#)` anywhere — unresolved forward references are plain "(coming soon)" text
- [ ] External links (if any) use `target="_blank" rel="noopener noreferrer"`
- [ ] **Cross-Link Resolution Check** — run all five sub-items before marking done:
  - [ ] Search this module for `(coming soon)` — resolve any that now have a real target
  - [ ] Search this module for `](#)` — resolve or convert to plain "(coming soon)" text
  - [ ] Search every *prior* module for `(coming soon)` referencing *this* module's title — resolve now that this module exists
  - [ ] Update this module's own Prerequisites "Leads to" line once its target module exists
  - [ ] Verify Related Topics links point to real, correct destinations

**Duplication and reuse**
- [ ] No duplication with existing content — checked against `docs/architecture/KNOWLEDGE_GRAPH.md`
- [ ] Terminology consistent with `STYLE_GUIDE.md`

**Length**
- [ ] Within target (1,500–2,500 words for a concept page) or in the acceptable band (~2,500–3,000) with a stated one-objective justification — see `docs/architecture/CONTENT_MODEL.md`'s Page Length Targets

**Diagrams and tables** (if used)
- [ ] Every Mermaid diagram has `accTitle` and `accDescr` — see `MERMAID_GUIDELINES.md`
- [ ] Renders correctly in light and dark themes and on mobile
- [ ] Tables used only for genuine field/option comparison, not decoration

**Build**
- [ ] `npm run build` succeeds, zero broken links
- [ ] `npm run validate:diagrams` passes for every `.mmd` file touched
- [ ] Page appears correctly in the sidebar and local search index

## Application Module Exceptions

Per `docs/architecture/CURRICULUM_EVOLUTION.md` Entry 2 (corrected 2026-08-04):

- [ ] `difficulty: "intermediate"` in frontmatter
- [ ] Quick Revision **retained**
- [ ] Mini Challenge **omitted**
- [ ] From the Field, Senior QA Insight, Common Interview Mistake **all omitted**
- [ ] "When NOT to Use" — typically omitted, since an Application Module usually isn't teaching a single technique
- [ ] If the module's entire content *is* a mistake-pattern synthesis (like Manual Testing Module 22 / API Testing Module 20), no separate "Common Mistakes" heading is needed — the module's structure already is that

## Section Review Page

- [ ] `slug: section-N-review`, `sidebar_label: "Section N — Review"`, no module number in title
- [ ] Section Summary — recap of what the section covered and how the pieces connect
- [ ] A Decision/Selection Matrix appropriate to the section's content
- [ ] Knowledge Check — realistic scenarios, no answers, linking forward to the Solutions page
- [ ] One-line transition into the next section
- [ ] `title:` disambiguated across paths if a same-numbered section exists in another path (e.g. `"API Testing — Section 4 Review"`, not just `"Section 4 Review"`) — see the Platform Consistency Sprint finding in `docs/architecture/LEARNING_PATHS.md`

## Section Solutions Page

- [ ] `slug: section-N-solutions`, `sidebar_label: "Section N — Solutions"`
- [ ] For every Knowledge Check scenario: correct answer, explanation, alternative approaches considered, real-world reasoning
- [ ] "Section N Complete" closing note, linking forward to the next section's first module
- [ ] Same cross-path `title:` disambiguation as the Review page
