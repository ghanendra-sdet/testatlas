import { ChecklistSection } from './jmeterData';

export const accessibilityChecklistData: ChecklistSection[] = [
  {
    title: "1. Perceivable — Text Alternatives & Structure",
    icon: "👁️",
    items: [
      {
        id: "a11y_alt_text",
        text: "Every meaningful image has descriptive alt text; decorative images have empty alt.",
        example: "A product photo gets `alt=\"Red leather wallet, front view\"`; a purely decorative divider icon gets `alt=\"\"`."
      },
      {
        id: "a11y_heading_order",
        text: "Headings follow a logical, non-skipping order (h1 → h2 → h3), not chosen for visual size.",
        example: "A page doesn't jump from an `<h2>` section title straight to an `<h4>` subsection just because the `<h4>` looked the right font size."
      },
      {
        id: "a11y_color_not_only",
        text: "Color is never the only way information is conveyed.",
        example: "A failed form field is marked with both a red border AND an error icon/text — not red border alone, for users with color-blindness."
      }
    ]
  },
  {
    title: "2. Operable — Keyboard & Focus",
    icon: "⌨️",
    items: [
      {
        id: "a11y_keyboard_reachable",
        text: "Every interactive element is reachable and operable using only Tab / Shift+Tab / Enter / Space.",
        example: "A custom dropdown built from `<div>`s can be opened, navigated, and selected with no mouse at all."
      },
      {
        id: "a11y_focus_visible",
        text: "A visible focus indicator is present on every focusable element — never removed with `outline: none` without a replacement.",
        example: "Tabbing through a nav bar shows a clear outline/highlight on whichever link currently has focus."
      },
      {
        id: "a11y_no_trap",
        text: "Keyboard focus never gets trapped where Tab can't escape, except inside an intentional modal.",
        example: "Tabbing through a dropdown menu can always reach the next page element — a genuinely open modal dialog is the one deliberate, documented exception."
      },
      {
        id: "a11y_skip_link",
        text: "A \"skip to main content\" link is the first focusable element on the page.",
        example: "Pressing Tab once on page load reveals a \"Skip to main content\" link before the nav bar, so keyboard users don't re-tab through the header on every page."
      }
    ]
  },
  {
    title: "3. Understandable — Forms & Errors",
    icon: "📝",
    items: [
      {
        id: "a11y_label_association",
        text: "Every form input has a programmatically associated `<label>`, not just placeholder text.",
        example: "An email field uses `<label for=\"email\">Email</label>`, not just `placeholder=\"Email\"` that disappears once typing starts."
      },
      {
        id: "a11y_error_identification",
        text: "Validation errors are announced to assistive tech and clearly associated with their field.",
        example: "A screen reader announces \"Email: invalid format\" via `aria-describedby`, not just a red asterisk only a sighted user would notice."
      },
      {
        id: "a11y_consistent_nav",
        text: "Navigation and identification patterns stay consistent across pages.",
        example: "The main nav bar's items appear in the same order and location on every page of the flow."
      }
    ]
  },
  {
    title: "4. Robust — Semantics & ARIA",
    icon: "🏗️",
    items: [
      {
        id: "a11y_semantic_html",
        text: "Native semantic HTML elements are used before reaching for ARIA (`<button>`, not `<div role=\"button\">`).",
        example: "A clickable action is a real `<button>`, which gets keyboard support, focus, and role for free — not a styled `<div onClick>`."
      },
      {
        id: "a11y_aria_correct",
        text: "ARIA attributes used are valid, and roles don't contradict the native semantics.",
        example: "A checkbox styled with CSS still exposes `role=\"checkbox\"` and `aria-checked` reflecting its true state — not left announcing as a generic button."
      },
      {
        id: "a11y_live_regions",
        text: "Dynamic content updates (toasts, live status) are announced via an ARIA live region.",
        example: "A \"Payment submitted successfully\" toast is wrapped in `aria-live=\"polite\"` so screen-reader users hear it without needing to notice a visual popup."
      }
    ]
  },
  {
    title: "5. Automated & Manual Testing Process",
    icon: "🔍",
    items: [
      {
        id: "a11y_automated_scan",
        text: "An automated accessibility scanner (axe-core, Lighthouse, etc.) runs in CI on every build.",
        example: "`@axe-core/playwright` runs against every page in the E2E suite, failing the build on any new serious/critical violation."
      },
      {
        id: "a11y_manual_keyboard_pass",
        text: "A manual keyboard-only pass is done on every new interactive feature, not just the automated scan.",
        example: "Automated scanners catch roughly 30-40% of WCAG issues — logical tab order and true operability still need a human keyboard walkthrough."
      },
      {
        id: "a11y_screen_reader_spotcheck",
        text: "Critical user flows are spot-checked with a real screen reader at least once per release.",
        example: "The checkout flow is walked through with VoiceOver (Mac) or NVDA (Windows) before a major release, not just assumed to work because the automated scan passed."
      },
      {
        id: "a11y_contrast_ratio",
        text: "Text and UI-component color contrast meets WCAG AA minimums (4.5:1 normal text, 3:1 large text/UI components).",
        example: "Light-gray placeholder text on a white background is checked against the 4.5:1 ratio, not just \"looks readable to me.\""
      }
    ]
  }
];
