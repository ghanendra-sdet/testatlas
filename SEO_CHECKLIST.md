# SEO Checklist

The actionable, per-page version of `docs/architecture/SEO_GUIDELINES.md`. Run this before opening a PR. For the reasoning behind any item — including what Docusaurus already handles automatically vs. what's a manual convention — read that document; this one is deliberately just the checklist.

## Per-page, before every PR

- [ ] `title` is unique across the **entire site**, not just within this path. Cross-path collisions are a real, found issue — see the Platform Consistency Sprint's fix in `docs/architecture/LEARNING_PATHS.md` (two paths both shipped a page literally titled "Section 4 Review"). If your new page's title could plausibly collide with a same-numbered section in another path, disambiguate it (`"API Testing — Section 4 Review"`).
- [ ] `title` states the concept plainly — not vague, not clickbait.
- [ ] `description` is unique across the entire site, under ~160 characters, states what the page actually teaches. Never a placeholder, never copied from another module.
- [ ] `keywords` has 3–6 entries, matching real search terms a learner would use — not padded, not sparse. (2 keywords or 7+ are both real audit findings from this sprint; keep to the target range.)
- [ ] URL slug is descriptive, lowercase, hyphenated, and matches the page's actual topic — never a number or abbreviation.
- [ ] Exactly one `#` (H1) on the page.
- [ ] No skipped heading levels (`###` never appears without a `##` above it).
- [ ] Headings use terms a learner would actually search for, not generic labels ("Boundary Value Analysis," not "Technique #1").
- [ ] Every link's text describes its destination — never bare "click here."
- [ ] No `](#)` placeholder links anywhere — see the Forward Reference Rule in `STYLE_GUIDE.md`.
- [ ] Prerequisites, Leads to, and Related Topics links are all present and real (this is also a `CONTENT_MODEL.md` requirement, restated here because it's directly an SEO signal — internal links are how search engines discover page relationships).
- [ ] This page doesn't re-teach a concept that already has a knowledge-node home — check `docs/architecture/KNOWLEDGE_GRAPH.md`. Duplicate content splits ranking signal instead of concentrating it.
- [ ] Every image or diagram has a descriptive filename, alt text (or `accTitle`/`accDescr` for Mermaid — see `MERMAID_GUIDELINES.md`), and a caption where relevant.

## Already handled automatically — verify, don't rebuild

Don't add custom code to duplicate any of these; if one seems missing, check a real built page first (`npm run build` then inspect the HTML) before assuming it's broken:

- Canonical URLs
- Open Graph / Twitter Card tags (generated from `title` + `description`)
- `BreadcrumbList` structured data
- `trailingSlash: false` consistency
- Broken-link build failures (`onBrokenLinks: 'throw'`)

## Not yet built — don't attempt to add ad hoc

- `Article`/`LearningResource` or `Course` schema beyond breadcrumbs — tracked as future work in `SEO_GUIDELINES.md`, requires a plugin decision, not a per-page fix.
- Core Web Vitals measurement — requires a deployed public URL, not available yet.

## Cross-path check (do this one specifically — it's easy to miss)

- [ ] If this page is a Section Review or Solutions page, grep the *other* learning path for a same-numbered Section Review/Solutions page. If one exists, your `title` needs the path-name prefix.
