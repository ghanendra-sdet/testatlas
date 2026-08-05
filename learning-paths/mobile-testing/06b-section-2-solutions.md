---
title: "Mobile Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — applying installation/upgrade testing, mobile UI technique, and connectivity interruption testing to five realistic scenarios."
keywords: ["mobile testing solutions", "installation testing knowledge check", "connectivity testing answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/mobile-testing/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Notification Preference Storage Change

**Correct answer**: [Installation and Upgrade Testing](/learning-paths/mobile-testing/installation-and-upgrade-testing)'s upgrade-path testing — install a real prior version, set real preferences, then upgrade and verify they survive correctly.

**Explanation**: This is the module's own central lesson — a fresh install can never test this, since it has no prior preferences to carry forward; only an upgrade from a real prior version, with real data set beforehand, exercises the actual migration logic.

**Alternative approaches considered**: Testing only a fresh install with default preferences would provide no evidence about whether existing users' actual settings survive the update.

**Real-world reasoning**: A direct application of the module's own central distinction (fresh install vs. upgrade) to a new but structurally identical scenario.

## Scenario 2: Rotation Losing Partially-Filled Form Data

**Correct answer**: [Mobile UI and Navigation Testing](/learning-paths/mobile-testing/mobile-ui-and-navigation-testing)'s rotation-transition testing — this is the module's own transfer-confirmation opening scenario, restated.

**Explanation**: Testing each orientation independently wouldn't catch this — the defect lives specifically in the transition, occurring mid-interaction, exactly the boundary this module's Boundary Value Analysis application identifies as the real risk.

**Alternative approaches considered**: Confirming the form looks correct in both portrait and landscape separately would miss the transition-specific data-loss risk entirely.

**Real-world reasoning**: A near-identical restatement of the module's own opening scenario, confirming the transition-not-orientation distinction was understood.

## Scenario 3: Payment Safety Against Double Submission on Connectivity Drop

**Correct answer**: [Network, Interruptions, and Offline Testing](/learning-paths/mobile-testing/network-interruptions-and-offline-testing)'s retry-on-reconnect testing — interrupt connectivity between send and confirmation, then verify the retry checks the actual outcome first.

**Explanation**: This is the module's own central, highest-stakes risk, restated with a different feature — the specific test sequence (interrupt in the send-to-confirmation window, then verify reconnect behavior) is exactly what the module's bill-payment example used.

**Alternative approaches considered**: Testing only full offline/online toggling without targeting the specific send-to-confirmation window would miss the exact timing where this defect class lives.

**Real-world reasoning**: Directly tests whether the specific, narrow timing window (not just "test with bad connectivity" generally) was understood as the actual test method.

## Scenario 4: Rapid Double-Tap Triggering Two Submissions

**Correct answer**: [Mobile UI and Navigation Testing](/learning-paths/mobile-testing/mobile-ui-and-navigation-testing)'s touch-gesture equivalence partitioning — test single tap and rapid double-tap as distinct equivalence classes.

**Explanation**: This is the module's own AtlasBank double-tap verification example, restated — single tap and rapid double-tap need to be tested as genuinely different input classes, not assumed to behave identically.

**Alternative approaches considered**: Testing only a single, deliberate tap and assuming a double-tap behaves the same way would miss exactly this risk.

**Real-world reasoning**: Tests recognition of touch gestures as distinct equivalence classes, connecting back to [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning)'s general principle applied here.

## Scenario 5: Action Taken With No Signal

**Correct answer**: [Network, Interruptions, and Offline Testing](/learning-paths/mobile-testing/network-interruptions-and-offline-testing)'s offline queuing verification — confirm the action queues, persists, and submits correctly on reconnect, not just that an error is shown.

**Explanation**: This is the module's own offline-queuing concern directly — a well-designed app should queue the action for later, and testing needs to verify this actually happens, persists, and resolves correctly, not just that a generic offline message appears.

**Alternative approaches considered**: Confirming only that an appropriate error message displays would miss whether the action is actually recoverable once connectivity returns.

**Real-world reasoning**: Tests whether offline queuing was understood as needing its own verification (queue exists, persists, submits correctly), not just error-message-level testing.

## Section 2 Complete

Across three modules, this section covered installation and upgrade paths, mobile-specific UI input testing, and connectivity interruption and offline behavior — closing with this path's highest-stakes risk, retry-on-reconnect safety. From here, continue to Section 3 — Device and Platform Testing, starting with Device Fragmentation, where this section's coverage extends into systematic testing across the real device landscape Section 1 mapped.
