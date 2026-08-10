# Feedback Log

Raw, unfiltered record of real feedback since `v1.0.0` — every "I couldn't find...", "this was confusing...", "I wish there was...", typo report, or "this helped" comment. Logged as it comes in, not judged or prioritized here. Patterns get pulled out into `COMMUNITY_ROADMAP.md` or a Learning Path Proposal issue once there's enough of them to see a real shape — not before.

Don't skip an entry because it seems small or because you disagree with it. The value of this file is the raw count and pattern over time, not a curated best-of.

## Format

```
### YYYY-MM-DD — [source: LinkedIn / Reddit / Discord / issue / direct message / etc.]

> [the feedback, as close to verbatim as possible]

Category: 🐛 Bug / ✨ Feature Request / 📚 Content Gap / ❓ Confusing / 💡 Nice Idea / 🚫 Won't Do (leave uncategorized if unsure — categorize on review, not on entry)
```

## Entries

### 2026-08-10 — [source: content audit]

> Authentication Testing (Security Testing, module 05) covers login, sessions, and JWTs in general, but doesn't address one-time-code (OTP) flows specifically — expiry timing, resend behavior, and lockout after repeated wrong codes are a distinct enough failure surface to warrant their own coverage, either as a dedicated section within module 05 or a short standalone module near it.

Category: 📚 Content Gap
