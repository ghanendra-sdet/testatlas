# Release Workflow

The mechanical, step-by-step process for cutting a TestAtlas release — both a full site release (like `v1.0.0`) and a single curriculum path's own tag (like `manual-testing-v1.0.0`). Policy and versioning scheme live in `docs/architecture/VERSIONING_STRATEGY.md`; this document is just the steps.

## Site release (e.g., `v1.0.0`, `v1.1.0`)

1. **Confirm everything is merged to `main`** — no release is cut from a feature branch.
2. **Run full validation**: `npm run build`, `npm run validate:diagrams`. Both must pass clean.
3. **Update `CHANGELOG.md`**: move the `[Unreleased]` section's contents to a new dated, versioned section.
4. **Update `RELEASES.md`**: add or finalize the curated narrative entry for this release.
5. **Update `ROADMAP.md`**'s milestone table if this release changes what's marked complete/in-progress.
6. **Tag**:
   ```bash
   git tag -a v1.0.0 -m "TestAtlas v1.0.0 — Public Launch"
   git push origin v1.0.0
   ```
7. **Create the GitHub Release**, using the tag and the release notes prepared for it:
   ```bash
   gh release create v1.0.0 --title "TestAtlas v1.0.0" --notes-file <release-notes-file>
   ```
   Or via the GitHub web UI: Releases → Draft a new release → choose the tag → paste notes → Publish.
8. **Post-release verification**: once deployed, spot-check the live site's key routes actually resolve (`/`, each learning path's root, `/project/`). If this is the first release with a public URL, run a real Lighthouse pass now — this was explicitly blocked before deployment existed.
9. **Branch for the next cycle**: create a `v1.1` development branch (or continue on `main` if the team prefers trunk-based development with feature branches) so future work doesn't destabilize the just-released, stable state.

## Curriculum path release (e.g., `manual-testing-v1.0.0`)

Distinct from a site release — versions one path as a standalone product, per `docs/architecture/LEARNING_PATHS.md`'s Curriculum Versioning section.

1. **Clear every gate in `QUALITY_GATES.md`** — the release checklist every path must pass before tagging, independent of the site's own release cadence.
2. **Confirm the path is certified** (or run its certification sprint if this is its first release) — see `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md` for what certification means, and the per-path certification documents (e.g., `AUTOMATION_TESTING_CERTIFICATION.md`) for the template.
3. **Tag with the path-specific scheme**: `git tag <path>-v1.0.0` (e.g., `manual-testing-v1.0.0`), push the tag.
4. **Add a `releases/` entry** for detailed, per-batch history if this release involved multiple development batches.
5. A curriculum path tag does **not** necessarily trigger a new site release — multiple path tags can accumulate before the next site-level `vX.Y.0`.

## Rollback

If a release needs to be pulled after publishing: mark the GitHub Release as a pre-release or draft (don't delete it — see `KNOWLEDGE_GRAPH.md`'s Archive Decision policy, "do not delete, archive with a note"), fix the issue on `main`, and cut a patch release once resolved. Never force-push over a published tag.

## Who can cut a release

Per `GOVERNANCE.md`: maintainers manage releases. A release is a public, largely irreversible action (a tag, once pushed and referenced, shouldn't be silently rewritten) — it should never happen as part of an unattended or automated content sprint, even when every underlying validation check passes. Treat it as a deliberate, separate step every time.
