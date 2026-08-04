---
title: "Automation Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — inline locator duplication, assertion placement, data-driven scaling, realistic test data, and component composition."
keywords: ["automation framework knowledge check", "page object model solutions", "data driven testing answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/automation/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: 45 Tests With Inline, Independently-Written Locators

**Correct answer**: This needs a `TransferPage` (or similar) page object, with a single `clickTransferFundsButton()` (or equivalent) method that all 45 tests call, replacing their independent inline logic.

**Explanation**: This is [Page Object Model](/learning-paths/automation/page-object-model)'s opening example almost exactly — inconsistent, duplicated locator logic across many contributors is precisely the failure mode the pattern exists to prevent, and the number of affected tests (45) shows the real scale of the maintenance risk already present.

**Alternative approaches considered**: Leaving this as-is because "it currently works" ignores that the cost only appears the next time the button's underlying markup changes — exactly the module's contrast between a suite that absorbs a UI change in one place versus one that requires updating dozens.

**Real-world reasoning**: A near-restatement of the module's own login-button example, testing whether the lesson transfers to a different specific button, not just the original scenario.

## Scenario 2: An Assertion Inside a Page Object Method

**Correct answer**: This is a real defect — the dashboard-load assertion should be removed from `submitLoginForm()` and placed in the individual tests that call it instead.

**Explanation**: [Page Object Model](/learning-paths/automation/page-object-model)'s Common Mistakes named this directly — mixing assertions into page object methods reduces reusability across tests that might have different expectations about what happens after login (a test for invalid credentials, for instance, would need this same method without the dashboard-success assertion).

**Alternative approaches considered**: Keeping the assertion because "every test using this method expects the same outcome" is fragile reasoning — it assumes every future test calling this method will have identical expectations, which defeats the point of a reusable method.

**Real-world reasoning**: Directly tests the module's own stated distinction (interactions in the page object, assertions in the test) against a concrete, plausible-sounding exception, checking whether the rule was understood as a real constraint, not just a preference.

## Scenario 3: Interest Calculator Across 12 Tiers

**Correct answer**: This is a strong data-driven testing candidate — write the steps once, supply 12 rows (one per tier) with each tier's balance input and expected interest outcome.

**Explanation**: This is [Data-Driven Testing](/learning-paths/automation/data-driven-testing)'s core pattern directly — identical steps, varying input and expected outcome, exactly the shape the pattern exists for.

**Alternative approaches considered**: Writing 12 separate, nearly-identical tests would work but repeats the exact maintenance cost this module's opening example demonstrated — any change to the calculation-verification logic would need updating in 12 places instead of one.

**Real-world reasoning**: A direct, differently-named application of the module's own boundary-value-style example, testing whether the underlying pattern (not just the specific transfer-amount scenario) was understood.

## Scenario 4: Round-Number-Only Currency Test Data

**Correct answer**: Insufficient — the data set needs at least one deliberately non-round value ($333.33-style) to have any real chance of surfacing a rounding-direction defect.

**Explanation**: This is [Data-Driven Testing](/learning-paths/manual-testing/test-data-design)'s realistic-data lesson, restated for automated data tables directly — round numbers can produce a calculation result that happens not to expose a rounding bug that a messier, realistic value would reveal.

**Alternative approaches considered**: Treating this data set as sufficient because "it covers three different amounts" mistakes variety in magnitude for variety in the specific property (roundness) that actually matters for catching this defect class.

**Real-world reasoning**: A direct application of a principle carried over from Manual Testing, testing whether the connection between the two paths' lessons was internalized, not just the automation-specific mechanics.

## Scenario 5: Duplicated Navigation-Bar Locators Across Three Page Objects

**Correct answer**: This is a real defect — the three page objects should compose a shared `NavigationBar` component object instead of each independently defining the same locators.

**Explanation**: [Page Object Model](/learning-paths/automation/page-object-model)'s component composition guidance named this directly — duplicating a shared component's locators across page objects reintroduces the same duplication problem the pattern exists to solve, one layer down.

**Alternative approaches considered**: Treating each page object's navigation locators as independent because "they're technically different files" misses that they represent the exact same underlying UI element, subject to the exact same maintenance risk as any other duplicated locator.

**Real-world reasoning**: Directly tests the module's own composition guidance, which is easy to skip past on a first read since it's mentioned briefly relative to the main login-page example — checking whether it was actually absorbed.

## Section 2 Complete

Across three modules, this section covered the structural concerns every automation framework addresses, and two specific, established patterns (Page Object Model, data-driven testing) for solving two of the most common ones. From here, continue to Section 3 — Reliability and Verification, starting with [Synchronization and Wait Strategies](/learning-paths/automation/synchronization-and-wait-strategies), where this structural foundation gets applied to timing — the single biggest source of automation failure in practice.
