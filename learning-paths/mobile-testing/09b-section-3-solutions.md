---
title: "Mobile Testing — Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — applying pairwise device testing, the five-state hardware framework, and compatibility vs. responsive behavior to five realistic scenarios."
keywords: ["mobile testing solutions", "device fragmentation answers", "hardware testing knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 3 Solutions

These are the answers to the [Section 3 Review](/learning-paths/mobile-testing/section-3-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: The Combination Explosion

**Correct answer**: [Device Fragmentation](/learning-paths/mobile-testing/device-fragmentation)'s pairwise-generation technique — apply Combinatorial and Pairwise Testing directly to the mapped dimensions, producing a much smaller test set while stating a specific, checkable coverage guarantee: every pair of dimension values is covered together at least once.

**Explanation**: This is the module's own central problem restated at a larger scale (80+ combinations instead of 60) — the same technique applies regardless of the exact combination count.

**Alternative approaches considered**: Picking a convenient subset would provide no defensible, statable coverage guarantee, exactly the gap pairwise generation closes.

**Real-world reasoning**: Confirms the technique transfers to a differently-sized combination space, not just the exact numbers used in the module's own example.

## Scenario 2: The Forgotten Runtime Case

**Correct answer**: The runtime permission change state, from [Sensors, Permissions, and Hardware](/learning-paths/mobile-testing/sensors-permissions-and-hardware)'s five-state framework — testing only initial grant and initial denial skips what happens when permission is revoked or re-granted while the app is already running or previously requested.

**Explanation**: This is the module's own central, recurring defect pattern — permission re-grant not being detected without a restart — restated with a different hardware feature (camera instead of biometrics).

**Alternative approaches considered**: Assuming granted/denied coverage is sufficient is exactly Mistake 2 the module names directly.

**Real-world reasoning**: Tests whether the runtime-change state was understood as a distinct, necessary test, not an edge case safe to skip.

## Scenario 3: Permission vs. Hardware

**Correct answer**: Hardware unavailability — the device may lack an NFC chip entirely, or have it disabled at the OS level, which is a separate condition from the user actively denying a permission request.

**Explanation**: The module explicitly distinguishes these two conditions because an app can have full permission and still have no hardware to use — testing only the permission-denial path misses the hardware-absent case entirely.

**Alternative approaches considered**: Treating "permission denied" and "hardware unavailable" as the same test case is exactly Mistake 3 the module names directly.

**Real-world reasoning**: Tests recognition that permission state and hardware presence are independent conditions requiring separate test coverage.

## Scenario 4: Everything Works, But...

**Correct answer**: The automated suite interacted with the "Place Order" button programmatically, regardless of whether it was genuinely visible on screen without an unprompted scroll — [Compatibility and Responsive Behavior](/learning-paths/mobile-testing/compatibility-and-responsive-behavior)'s dedicated responsive-behavior check, applied as a distinct pass from functional/compatibility testing, would have caught this.

**Explanation**: This is the module's own opening scenario restated — a passing functional/compatibility suite says nothing about whether a real user can actually see and reach the control.

**Alternative approaches considered**: Trusting a 100% automated pass rate as evidence of full device readiness misses exactly this class of defect, which is the module's central point.

**Real-world reasoning**: Confirms the compatibility/responsive-behavior distinction was understood as functionally consequential, not just conceptual.

## Scenario 5: Large-Screen Layout

**Correct answer**: A responsive-behavior defect, not a compatibility defect — the underlying functionality works correctly (compatibility is intact), but the layout fails to adapt to the larger screen (a responsive-behavior failure).

**Explanation**: This is the module's own tablet-class AtlasBank example restated — wasted screen space and poor layout adaptation on large screens are a real, distinct defect category from small-screen truncation, but still squarely a responsive-behavior issue, not a functional one.

**Alternative approaches considered**: Dismissing this as "not a real bug" since the feature technically works misses that responsive-behavior defects are real, user-facing defects in their own right.

**Real-world reasoning**: Tests whether the compatibility/responsive-behavior distinction extends correctly to large-screen cases, not only the small-screen scenario used earlier in the section.

## Section 3 Complete

Across three modules, this section closed the systematic device-testing arc: pairwise-generated device coverage, one behavioral framework applied consistently to every hardware-dependent feature, and the distinction between functional compatibility and visual responsive behavior on that same device set. From here, continue to Section 4 — Mobile Performance, Security, and Diagnostics, starting with Mobile Performance Testing.
