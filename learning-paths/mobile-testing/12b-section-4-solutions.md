---
title: "Mobile Testing — Section 4 Solutions"
slug: section-4-solutions
sidebar_label: "Section 4 — Solutions"
description: "Answers and reasoning for Section 4's Knowledge Check — applying mobile performance, security, and crash analysis to five realistic scenarios."
keywords: ["mobile testing solutions", "mobile performance answers", "crash analysis knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 4 Solutions

These are the answers to the [Section 4 Review](/learning-paths/mobile-testing/section-4-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: The Sluggish App

**Correct answer**: [Mobile Performance Testing](/learning-paths/mobile-testing/mobile-performance-testing)'s device-side layer — specifically, memory usage over an extended, repeated-use session, checking for a memory leak.

**Explanation**: This is the module's own opening scenario restated — healthy server-side metrics say nothing about device-side memory growth, which is exactly what causes sluggishness after extended use.

**Alternative approaches considered**: Re-testing server response times again would provide no new information, since the module's point is that this defect class lives entirely outside the server layer.

**Real-world reasoning**: Tests whether the server-side/device-side distinction was understood as functionally, not just conceptually, different.

## Scenario 2: Where's the Token?

**Correct answer**: [Mobile Security Testing](/learning-paths/mobile-testing/mobile-security-testing)'s local storage encryption check — confirming the authentication token and session data are stored using the platform's secure storage mechanism, not as plain, directly-readable text.

**Explanation**: This is the module's own opening scenario restated — fully correct login-flow testing says nothing about how the resulting session data is stored on the device afterward.

**Alternative approaches considered**: Assuming storage is secure because login itself works correctly is exactly the gap the module's opening scenario demonstrates.

**Real-world reasoning**: Tests recognition that authentication-flow testing and storage-security testing are separate, both-necessary checks.

## Scenario 3: Trust, but Verify

**Correct answer**: Explicitly test that certificate pinning rejects a connection presenting an unexpected certificate, rather than assuming it works because it was implemented.

**Explanation**: This is the module's own Best Practice 2, and its AtlasBank example — confirmed, tested protection is meaningfully different from assumed protection, even when a developer states a defensive feature was added.

**Alternative approaches considered**: Accepting the developer's word without a dedicated test leaves the team unable to distinguish "definitely works" from "was intended to work."

**Real-world reasoning**: Tests whether "identify and confirm" was understood as necessary even for defensive features believed to already be correctly implemented.

## Scenario 4: The Unreproducible Crash

**Correct answer**: Reading the crash report's shared attributes — device, manufacturer, OS version — and comparing them against other reports for the same issue, before attempting reproduction on any specific device.

**Explanation**: This is the module's own opening scenario restated — reproduction was attempted on the wrong device first, and the report was deprioritized before the actual device-specific pattern was identified through systematic reading.

**Alternative approaches considered**: Marking the report "can't reproduce" after a single attempt on one device conflates "can't reproduce on this device" with "can't reproduce at all" — a distinction the module names directly as Mistake 3.

**Real-world reasoning**: Tests whether the four-field systematic reading (what, where, when, how often/for whom) was understood as a required first step, not an optional add-on to reproduction attempts.

## Scenario 5: Background Cost

**Correct answer**: Background activity (such as a location check or sync process running independently of active feature use) is the likely cause — test for it by measuring resource consumption during background/idle states specifically, separate from active, foreground use.

**Explanation**: This is the module's own branch-locator battery-drain example restated — a rarely-used feature had a disproportionate cost specifically because a related background process ran continuously regardless of actual usage frequency.

**Alternative approaches considered**: Measuring only active, in-use battery consumption would miss this entirely, since the actual cost lived in background activity unrelated to visible use.

**Real-world reasoning**: Tests whether "measure background activity separately from foreground use" was understood as a required, not optional, part of mobile performance testing.

## Section 4 Complete

Across three modules, this section closed the mobile testing toolkit: extending performance and security disciplines already established elsewhere in TestAtlas to mobile's device-side layer, then adding systematic crash investigation for defects that only surface once real users hit them in production. From here, continue to Section 5 — Application Modules, applying everything from this path to AtlasBank and AtlasShop directly, closing with the capstone.
