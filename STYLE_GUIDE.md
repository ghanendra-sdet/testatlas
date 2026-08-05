# TestAtlas Style Guide

This guide turns the principles in [PROJECT_CONSTITUTION.md](PROJECT_CONSTITUTION.md) into repeatable writing and presentation rules. It applies to documentation, labs, project simulations, templates, resources, and review comments.

## 1. Write for practical use

Write as a senior QA engineer explaining work to another engineer. Start with the problem the reader needs to solve, not a dictionary definition.

Every learning chapter must explain **why**, **what**, **when**, and **how**. Use this order when it fits the subject:

1. Why it matters
2. What it is
3. When to use it
4. How it works in a real project
5. Common mistakes
6. Good practices and related topics

Do not force this structure into a short checklist or reference page. Use the structure to make learning pages useful, not repetitive.

## 2. Voice and tone

- Write in direct, conversational professional English.
- Address the reader as `you` when giving guidance.
- Prefer active voice: “Review the acceptance criteria before writing cases,” not “Acceptance criteria should be reviewed.”
- Be confident where the guidance is established; be explicit about uncertainty where context matters.
- Avoid hype, filler, corporate language, and vague claims such as “robust,” “seamless,” or “best-in-class” unless the claim is demonstrated.

Avoid phrases such as “In today’s fast-paced world,” “It is important to note,” or “This comprehensive guide.” They add length without helping the reader.

## 3. Explain concepts with evidence

Use a concrete example after introducing a concept when one will improve understanding.

Bad:

> Equivalence partitioning divides inputs into classes.

Better:

> If a registration form accepts ages from 18 to 65, test one valid value such as 30 and invalid values such as 17 and 66. The purpose is not to test every age; it is to test the rule that separates valid and invalid input.

Use realistic constraints, data, expected results, and risks. Do not invent claims about production incidents, industry statistics, or tool behaviour.

## 4. Structure and Markdown

- Use one `#` heading per document.
- Use `##` for major sections and `###` only when a section needs subdivision.
- Choose descriptive headings that help scanning.
- Keep paragraphs focused; split a paragraph when the subject changes.
- Use ordered lists for sequence and unordered lists for groups.
- Use tables only when readers need to compare repeated fields or options.
- Use blockquotes for important cautions or principles, not decoration.
- Use fenced code blocks with a language identifier whenever possible.

Prefer readable file names in lowercase kebab-case, for example `boundary-value-analysis.md`.

## 5. Terminology

Use these terms consistently:

| Prefer | Avoid when referring to the same idea |
| --- | --- |
| test case | testcase, test-case |
| test suite | test set, test pack |
| defect | bug, issue, error, when precision matters |
| acceptance criteria | ACs, unless defined first |
| automation | automated testing, when the shorter term is clear |
| QA engineer | tester, when the role includes broader quality work |

Use “bug” naturally when discussing a reported problem. Use “defect” when discussing formal lifecycle, severity, or quality terminology.

Define acronyms on first use: “requirements traceability matrix (RTM).” Do not use an acronym repeatedly if the full term remains clearer.

### Forward Reference Rule

A page may reference content that doesn't exist yet — a future module, a future learning path — only as plain text, clearly marked "(coming soon)."

Never link a forward reference with `](#)` or any other placeholder anchor. A `#` link is not a broken link a build checker will catch, but it is a dead one: it does nothing for a reader, and it silently stays wrong even after the real content ships, because nothing forces it to be revisited. Plain text has no such failure mode — and once the target exists, converting "(coming soon)" into a real link is an explicit, visible edit, not a silent gap.

## 6. Examples, code, and test data

Examples must be safe to copy and easy to understand.

- State prerequisites and expected outcomes for runnable examples.
- Use fictional names, domains, credentials, identifiers, and data.
- Never include real secrets, customer data, tokens, or private endpoints.
- Keep code focused on the lesson; move supporting setup into a separate file or lab when needed.
- Explain important assertions, waits, test-data setup, and cleanup.
- Label pseudocode clearly.

For automation examples, explain why the chosen locator, assertion, test boundary, or design pattern is appropriate. A passing snippet without reasoning is not a complete lesson.

### Recurring Fictional Product: AtlasBank

Starting with Manual Testing Section 3, **AtlasBank** (a fictional internet banking platform — Internet Banking, Mobile App, Admin Portal, Loan Portal) is the default banking-domain example across the Manual Testing path, used wherever a banking example illustrates a concept. This gives learners continuity — the same product recurring across test cases, RTM entries, test data, and defect examples — instead of a new, unrelated bank invented per module.

This is a default, not a rule without exceptions: healthcare, e-commerce, insurance, and other domains remain in active use wherever they illustrate a concept better than a banking example would (as they have throughout Foundations and Manual Testing so far). Don't force AtlasBank into an example where a different domain is genuinely the better fit — continuity is valuable, but not at the cost of picking a worse example just to reuse the name.

Not retrofitted into Modules 1–12's existing banking examples — applies going forward from Section 3.

**Extended to API Testing (approved 2026-08-04)**: AtlasBank is also the default domain for API Testing, at the user's explicit direction during API Testing v1.0 architecture review — learners already know the business domain from Manual Testing, so they can focus on API testing itself rather than learning a new product. API Testing examples use realistic AtlasBank-style banking APIs (authentication, customer, account, beneficiary, fund transfer, transaction, statement, card, KYC, notification endpoints) with representative JSON payloads. Same exception as above: don't force an AtlasBank API example where a different domain genuinely fits better.

**Extended to Automation Testing**: AtlasBank is also the domain under test for Automation Testing — its web app (Internet Banking, Admin Portal) automated via Playwright/Selenium/Cypress-style examples — continuing the same "reuse unless a genuine reason exists" reasoning as the API Testing extension above.

**Extended to Database Testing (approved 2026-08-05)**: AtlasBank's data layer is the default schema for Database Testing — Customers, Accounts, Transactions, Beneficiaries, Loans, Cards, Audit Logs, KYC, and Payments tables — per that path's architecture proposal in `LEARNING_PATHS.md`. Module 14 deliberately steps outside AtlasBank into **AtlasShop**, a named e-commerce entity, for its second Application Module domain, the same way Manual Testing and API Testing each used a second domain in their own Application sections.

**Extended to Performance Testing (approved 2026-08-05)**: both AtlasBank and AtlasShop are reused as Performance Testing's two Application Module domains — AtlasBank's steady, predictable transfer traffic and AtlasShop's bursty, sale-driven checkout traffic providing a deliberate load-shape contrast. No third domain was introduced.

**AtlasBank AI Support Assistant (approved 2026-08-05)**: an official AtlasBank feature, introduced for AI for QA v1.0 — TestAtlas's first AI-native feature, since testing AI-driven content requires an actual AI feature to test, which no domain previously covered. Deliberately, permanently scoped to six question categories only: transaction questions, card support, loan FAQs, KYC guidance, account information, and payment help. It is not, and should never become, a general-purpose chatbot — it exists purely as a realistic system under test, the same way every other AtlasBank feature exists to illustrate a testing concept rather than as a product in its own right. Any future module referencing the AI Support Assistant should stay within these six categories rather than expanding its scope informally.

## 7. Diagrams and visuals

Use visuals when they make a relationship, flow, or comparison easier to understand than prose.

- Keep diagrams focused on one idea.
- Give each visual a meaningful title or caption.
- Use labels that remain understandable outside surrounding text.
- Maintain sufficient contrast and avoid relying on colour alone.
- Store reusable source material in `assets/`; keep site-ready public assets in `static/` when the site is introduced.

Do not add a diagram simply because a page has one. A well-made table or short example is often better.

## 8. Page-specific rules

### Learning paths

Learning pages teach a concept and should include practical use, mistakes, and related topics.

### Labs

Labs must include prerequisites, setup, the exercise, expected result, verification steps, cleanup where relevant, and a clear distinction between required and optional work.

### Project simulations

Projects must keep traceability between requirements, acceptance criteria, scenarios, tests, defects, and regression coverage. Keep each domain realistic without copying proprietary material.

### Templates

Templates must explain when to use them, how to fill them in, and what a good completed example looks like. A blank form alone is not enough.

## 9. Sources and freshness

Link to primary sources for standards, tools, specifications, and factual claims where practical. Do not cite a source you have not checked.

For time-sensitive guidance, state the relevant version, date, or assumption. If a page becomes outdated, correct it, label the limitation, or remove it rather than leaving readers with uncertain advice.

## 10. Editorial checklist

Before requesting review, confirm:

- The reader can identify the practical purpose of the page.
- The explanation is accurate, scoped, and free of unsupported claims.
- Examples are realistic and safe.
- The document is easy to scan.
- Terms, headings, links, code, and visuals are consistent.
- The page links to useful next steps where applicable.
- The change follows the constitution and contribution guidance.
