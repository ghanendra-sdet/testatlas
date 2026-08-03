# SEO Guidelines

Standards for making every TestAtlas page discoverable — by Google Search, Google Image Search, and by other pages on the site linking to each other correctly. This document distinguishes three things clearly, because conflating them leads to false confidence: what Docusaurus already handles automatically, what's a contributor convention that must be followed by hand, and what's recommended future work not yet built.

## Already Handled by Docusaurus (verify, don't rebuild)

- **Canonical URLs**: generated automatically from `url` + `baseUrl` in `docusaurus.config.ts` for every page. Nothing to add per-page.
- **Open Graph and Twitter Card tags**: generated automatically from each page's frontmatter `title` and `description`, plus the site-wide `themeConfig.image` fallback (`img/testatlas-social-card.svg`). A module-specific social image is possible later via a per-page `image` frontmatter field if a path ever wants one — not needed now.
- **`trailingSlash: false`**: already set, keeping URLs consistent (no `/page/` vs `/page` duplication, which search engines otherwise treat as separate URLs).
- **`onBrokenLinks: 'throw'`**: already set — a broken internal link fails the build, not just a lint warning. This is itself an SEO safeguard: broken internal links waste crawl budget and break the link-equity flow between pages.

Do not add a plugin or custom `<Head>` injection to duplicate any of the above — verify it's working (view page source on a real page) before assuming it's missing.

## Contributor Conventions (must be followed by hand — not automatic)

### URLs
- Descriptive, lowercase, hyphenated, matching the page's real topic — already the convention every Foundations module follows (`/learning-paths/foundations/verification-vs-validation`, not `/module-6` or `/vv`)
- Stable once published — per `LEARNING_PATHS.md`'s sequencing note, Docusaurus derives routes from slugs, not numeric filename prefixes, so reordering a module's position never has to break its URL. Never rename a published slug without a redirect plan.

### Titles
- Every page's frontmatter `title` is unique across the entire site — two pages with the same title confuse both search results and the browser tab
- Title states the concept plainly (`"Verification vs. Validation"`), not a clickbait or vague phrasing (`"Everything You Need to Know About Testing"`)

### Meta Descriptions
- Every page's frontmatter `description` is unique, under ~160 characters where practical, and states what the page actually teaches — this is already `CONTENT_MODEL.md`'s frontmatter requirement; this document adds the SEO reasoning: a duplicate or generic description across many pages reads to Google as low-quality, template-generated content
- Never leave `description` as a placeholder or copy it from another module

### Headings
- Exactly one `#` (H1) per page — the title, rendered once
- `##` for major sections, `###` for subsections, no skipped levels (an `###` should never appear without a `##` above it) — this is also an accessibility requirement (see below), not just an SEO one
- Headings should contain the terms a learner would actually search for ("Boundary Value Analysis," not "Technique #1")

### Internal Linking
- Every module links to its prerequisites and what it leads to (the Prerequisites block), plus Related Topics — this is already required by `CONTENT_MODEL.md`'s Definition of Done, and it directly serves SEO: internal links are how Google discovers page relationships and distributes authority across the site
- Never link with bare "click here" text — link text should describe the destination (`[Verification vs. Validation](...)`, not `[click here](...)`), since link text is a real ranking signal and matters for screen readers too
- Follow the Forward Reference Rule in `STYLE_GUIDE.md`: a `](#)` placeholder link is worse for SEO than no link at all — it's a same-page anchor that adds noise without adding a real connection

### Duplicate Metadata
- No two pages share the same `title` or `description` — spot-checked across all 17 Foundations modules as part of this sprint, all unique
- No two pages should teach the same concept from scratch (this is `KNOWLEDGE_GRAPH.md`'s Progressive Extraction principle, restated in SEO terms: duplicate content across pages splits search ranking signal instead of concentrating it on one authoritative page)

## Structured Data

**Already implemented, automatically**: Docusaurus's classic preset generates `BreadcrumbList` JSON-LD structured data for every doc page out of the box, via the same `DocBreadcrumbs` component that renders the visible breadcrumb trail — confirmed by inspecting the built HTML's `<script type="application/ld+json">` block, not assumed. TestAtlas's breadcrumb swizzle (see Breadcrumbs below) keeps this structured data in sync with the visible trail: both use the same de-numbered labels, verified in the same build.

**Not yet implemented — recommended future work**: page-level and path-level schema beyond breadcrumbs, which Docusaurus does not generate automatically and would require a plugin or further swizzling to add:

- **`Article`** or **`LearningResource`** schema per module (schema.org has a dedicated `LearningResource` type, more precise than generic `Article` for educational content)
- **`Course`** schema at the learning-path level (Foundations, Manual Testing, etc.), listing modules as `hasPart`

## Breadcrumbs

Docusaurus's default docs theme renders a visible breadcrumb trail automatically from the sidebar hierarchy, including matching `BreadcrumbList` structured data (see above) — both active by default, no configuration needed.

**Navigation policy**: sidebar labels carry a module number (`"03 Software Testing Principles"`) so learners can see their position in the curriculum; breadcrumbs and their structured data must not. By default, Docusaurus derives breadcrumb labels from the same `sidebar_label` frontmatter used for the sidebar, so without intervention the number leaks into breadcrumbs too. TestAtlas resolves this with a small, isolated swizzle (`src/theme/DocBreadcrumbs/`) that strips a leading `"NN "` pattern from each breadcrumb label — and, because it operates on the same array passed to the structured-data component, the JSON-LD stays de-numbered too. See the swizzled file's own header comment for the full reasoning; it's deliberately kept as close to Docusaurus's stock implementation as possible, specifically so it stays trivial to diff against upstream on a Docusaurus version bump.

## Google Image SEO

Covered in full in `VISUAL_STANDARDS.md`'s **Image and Diagram Metadata Standard** — descriptive filenames, required alt text, captions, and figure numbers for every visual asset. Restated here because it's as much an SEO concern as an accessibility one: an image with a generic filename and no alt text is invisible to Google Image Search regardless of how good the diagram is. The goal stated in that document holds here too — someone searching "Boundary Value Analysis diagram" should eventually be able to discover TestAtlas through Google Image Search, not just regular search.

## Accessibility (overlaps with SEO, not a separate concern)

Heading hierarchy, descriptive link text, and image alt text (above) all serve accessibility and SEO simultaneously — they aren't competing priorities. See `VISUAL_STANDARDS.md`'s Accessibility section for the Mermaid-specific `accTitle`/`accDescr` requirement, which has the same dual purpose: real screen-reader support, and diagram content that's actually indexable (Mermaid renders to inline SVG with a `<title>`/`<desc>`, which search engines can read when `accTitle`/`accDescr` are present).

## Core Web Vitals

Not independently measured as part of this sprint — doing so honestly requires a real Lighthouse or PageSpeed Insights run against the deployed site, which isn't possible from this environment (no browser, and the site isn't deployed yet — no GitHub remote is configured). What's already true by construction, worth noting rather than re-measuring:
- Mermaid diagrams render client-side, which has a real (if usually small) impact on Largest Contentful Paint for pages with several diagrams — worth a real Lighthouse pass once the site is deployed, not before
- No custom web fonts beyond the one `Newsreader` display face already loaded via `preconnect` hints (`docusaurus.config.ts`), which is the standard mitigation for font-loading performance cost
- No stock imagery, no unoptimized raster images anywhere in the current content — the no-external-imagery rule already avoids the most common Core Web Vitals problem (oversized hero images)

**Recommendation**: run a real Lighthouse audit once Foundations is deployed to a public URL, and treat its results as the actual Core Web Vitals baseline — not this document's assumptions.
