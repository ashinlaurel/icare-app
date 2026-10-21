# Data repair register

Keep every data cleanup here as a numbered repair, with its cause, exact scope, matching rules, scripts, rehearsal results, production procedure, and recovery instructions. Code fixes prevent new corruption; data repairs correct records already affected. Track both separately.

## Repairs

- **R001 — [Asset unit references equal the asset ID](001-asset-unit-references/README.md).** Code protection deployed to staging. All 905 affected assets repaired and verified in an isolated production-copy database on staging. Production cleanup is pending.

## Folder convention

Use `NNN-short-description/` for each new repair. Include:

- `README.md`: defect, affected records, allowed changes, exclusions, production prerequisites, and ordered steps.
- Scripts: read-only preflight, planning/dry-run, supported apply mode, and verification where available. State which environments each script supports.
- Tests: matching ambiguity, ownership boundaries, stale-plan rejection where implemented, and recovery behavior appropriate to the repair.
- `staging-result.md`: date, code version, before/after counts, evidence location, exceptions, and remaining issues.

Generate a fresh plan for every environment and run. Do not reuse historical counts or an old ID mapping as an unconditional production update list. If evidence is missing or conflicting, leave the record unresolved.

## Evidence storage

Raw dumps, credentials, per-record plans, original memberships, and execution journals belong in a private operator directory or restricted backup storage, outside Git. Commit reusable code and summaries here. `private/` and `runs/` directories under `repairs/` are ignored as a convenience; prefer storing sensitive files outside the repository altogether.

## Production sequencing

1. Deploy and verify the underlying application fix.
2. Schedule a maintenance window and pause all writers, including background jobs and integrations.
3. Take a fresh backup and verify a restore before changing records.
4. Rehearse the exact repair against that backup on an isolated test database.
5. Review the proposed mapping, exceptions, changed fields, and recovery procedure.
6. Confirm the production runner supports the actual MongoDB version and topology. A transaction-based staging script cannot run unchanged on standalone production.
7. Apply the reviewed repair during the approved production operation, verify the result, retain evidence, and only then resume writers.

Creating this folder does not execute any production repair.
