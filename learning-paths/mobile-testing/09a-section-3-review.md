---
title: "Mobile Testing — Section 3 Review"
slug: section-3-review
sidebar_label: "Section 3 — Review"
description: "Knowledge Check for Section 3 — Device Fragmentation, Sensors/Permissions/Hardware, and Compatibility and Responsive Behavior."
keywords: ["mobile testing review", "device testing knowledge check", "hardware testing review"]
difficulty: "beginner"
time_to_read: "5 min"
last_reviewed: "2026-08-05"
---

# Section 3 Review

Section 3 covered systematic device coverage: applying pairwise testing to the device combination space, one behavioral framework for every hardware-dependent feature, and the distinction between compatibility and responsive behavior on the resulting device set.

## Knowledge Check

Work through these five scenarios before checking the [Section 3 Solutions](/learning-paths/mobile-testing/section-3-solutions).

**Scenario 1: The Combination Explosion**

AtlasShop's QA lead maps their real device landscape and finds it produces over 80 possible device/OS-version/manufacturer combinations. The team doesn't have time to test all of them, and picking "whatever's convenient" feels wrong. What should they do, and what would they be able to state about the resulting test set's coverage?

**Scenario 2: The Forgotten Runtime Case**

A tester verifies a document-scanning feature works when camera permission is granted, and shows a sensible message when permission is denied. They consider the feature fully tested. What state from this section's framework have they skipped, and why does it matter?

**Scenario 3: Permission vs. Hardware**

A QA engineer tests an NFC payment feature by only checking what happens when the user denies the NFC permission. What separate condition are they at risk of missing, and how is it different from permission denial?

**Scenario 4: Everything Works, But...**

An automated regression suite reports 100% pass on a checkout screen across every device in the pairwise set. A manual tester later finds that on one specific device, the "Place Order" button sits below the visible screen area with no scroll indicator. Why didn't the automated suite catch this, and what category of testing would have?

**Scenario 5: Large-Screen Layout**

A responsive-testing pass on a tablet-class device finds that a feature works correctly, but most of the screen is empty while all content is crammed into a narrow column. Is this a compatibility defect or a responsive-behavior defect, and why does the distinction matter?

**Next:** Check your answers against the [Section 3 Solutions](/learning-paths/mobile-testing/section-3-solutions), then continue to Section 4 — Mobile Performance, Security, and Diagnostics.
