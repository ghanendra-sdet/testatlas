# Security Policy

This policy covers TestAtlas's **site code** — the Docusaurus configuration, build scripts, theme swizzles, and site infrastructure. It does not cover educational content accuracy (see [SUPPORT.md](SUPPORT.md)'s Content Correction path for that) unless a content page itself is the vector for a real technical vulnerability (for example, embedded content that could enable script injection).

## Reporting a Vulnerability

**Do not open a public GitHub issue for a security vulnerability.** A public issue discloses the problem before a fix exists.

Instead, use GitHub's private vulnerability reporting feature on this repository (Security tab → "Report a vulnerability"), which opens a private channel directly with maintainers. If that feature isn't available on this repository, open a regular issue titled only "Security: private report requested" with no vulnerability detail in the issue body, and a maintainer will follow up with a private channel.

Please include, as far as you're able:

- What the vulnerability is and where it exists (file, route, or component)
- Steps to reproduce it
- What you believe the actual impact is
- Any suggested fix, if you have one

## What to Expect

TestAtlas is a volunteer-maintained open-source project — there's no guaranteed SLA, but a genuine security report will be treated with priority over ordinary content work. A maintainer will acknowledge a private report, investigate, and follow up with next steps once the report is reviewed.

## Scope

**In scope**: the Docusaurus site build, configuration, theme code (including swizzled components under `src/theme/`), build/validation scripts (`scripts/`), and CI workflow configuration (`.github/workflows/`).

**Out of scope**: educational content accuracy or quality (use [SUPPORT.md](SUPPORT.md) instead), and vulnerabilities in third-party dependencies that are already publicly disclosed with an available fix (open a normal issue or PR to bump the dependency instead).

## Disclosure

Once a reported vulnerability is fixed, maintainers will coordinate with the reporter on disclosure timing and, where appropriate, credit the reporter in the fix's release notes.
