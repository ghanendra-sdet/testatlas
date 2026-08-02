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

## 6. Examples, code, and test data

Examples must be safe to copy and easy to understand.

- State prerequisites and expected outcomes for runnable examples.
- Use fictional names, domains, credentials, identifiers, and data.
- Never include real secrets, customer data, tokens, or private endpoints.
- Keep code focused on the lesson; move supporting setup into a separate file or lab when needed.
- Explain important assertions, waits, test-data setup, and cleanup.
- Label pseudocode clearly.

For automation examples, explain why the chosen locator, assertion, test boundary, or design pattern is appropriate. A passing snippet without reasoning is not a complete lesson.

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
