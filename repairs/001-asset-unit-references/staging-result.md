# R001 staging result — 20 October 2026

## Completed work

The `bug-fixes` branch was fast-forward merged into `staging`. The unit-reference protection was committed as `c71a3795850c1e67cd92a5ed92e2dfe172b60d0d` and deployed successfully to the test VM. Reproducible cleanup tooling and documentation were committed separately as `17b8813e`.

A fresh read-only `mongodump` of production database `icare` was streamed over SSH into a private archive, transferred to the test VM, and restored into **`icare_audit_20261020`**. All 16 restored collection counts match the dump log, including 1,979 assets, 68 units, 2,001 current hardware records, 556 original hardware records, and 5,214 calls.

**905 assets repaired; 905 verified. Zero self-ID or dangling unit references remain in this test copy.**

Production was not changed. The publicly accessible staging application continues to use synthetic database `icare_staging` (zero assets); its application database user has no privileges to read the production-copy database. The repaired copy is on the test VM for private database inspection, not exposed through the public application.

## How matches were established

- 608: customer + valid account + normalized unit name.
- 280: unique normalized unit name within the customer, where the asset incorrectly uses its customer as its account.
- 15: repeated names disambiguated by one existing unit back-reference.
- 1: repeated KKD P&I name disambiguated by nine calls consistently referencing the same existing unit. Later calls with the broken self-ID were excluded as invalid references; calls themselves were not modified.
- 1: the copied name `INFOACRE TVM` matched the reviewed `INFOCARE TVM` spelling alias within the same customer/account, corroborated by its existing unit membership. This was an explicit scoped alias, not general fuzzy matching.

Case and repeated whitespace were normalized. Candidate units and their role-2 account/customer ancestry were verified. Uncertain matches were left unresolved during planning; additional evidence resolved the final 17 before application. No ambiguous name was picked arbitrarily.

## What changed

The script changed only each matched asset's `unitId`, ensured its ID occurs in the selected unit's `assetsId` array, and removed its membership from other units. All repairs ran in one transaction against the single-node staging replica set, followed by an independent verification pass. Every repaired asset now resolves to the selected unit and appears in exactly that unit's list.

The original example asset `6074bf0e5e22452aec354c2b` now has:

```javascript
unitId: ObjectId("606f1e7c6a4e0544841faa13") // MDS DAIRY
```

Its customer is MRCMPU LTD and account is KNR DAIRY.

## Remaining issues

- **296 repaired assets retain their separate customer-as-account defect.** The operation intentionally did not change account ownership or copied account names. The wider 721 wrong-role account references remain a separate cleanup task.
- Three unrelated existing unit-list ownership mismatches remain outside these 905 repairs.
- 3,981 unit-list entries still reference missing/deleted assets; this operation did not delete those entries.
- Copied name differences, historical call references, duplicate serials, orphan hardware, missing original snapshots, and contract/billing dates remain outside this repair.
- The frontend/backend protection is deployed to staging only. A final read-only production query still found all 905 self-ID references and confirmed the original example was unchanged.

## Recovery and evidence

Private files on test VM `35.154.244.123`, root-only directory:

```text
/var/lib/icare-audits/20261020-unit-repair/
  production.archive.gz
  restore.log
  initial-unit-repair-plan.json
  backrefs-unit-repair-plan.json
  unit-name-aliases.json
  unit-repair-plan.json
  unit-repair-plan-summary.json
  unit-repair-applied.json
  independent-verification.json
```

The final plan includes each original/selected unit ID, the supporting match method, historical call IDs where used, and the original memberships of all units. Restore the original archive into a fresh isolated database to recover the original baseline. No production dump or per-record repair plan was committed to GitHub.

Archive: 3,286,220 bytes; SHA-256 `dc546fbe9ba9464140603c93ed073231361d4f4ea9598a36d585003f7fd24446`.

Final plan SHA-256: `18b8e270fddb3b0e1370bfd6aa961287c0ebb7d73d5a2a79061c111b4cd36d2c`.

This was a live dump of a standalone production MongoDB instance, not a transactionally consistent snapshot. Counts were checked against the completed dump, not a claim that production stopped changing during the export.

## Reproducibility and validation

- [Staging-only repair script](staging-repair.cjs).
- [Repair matching regression cases](staging-repair.test.cjs).
- [Staging runbook](../../deployment/staging/README.md).
- [Backend suspicious areas, B06/B33](../../docs/backend-suspicious-areas.md).

Passed 13 controller validation cases, the actual edit-form load/save handler regression, 14 repair matching cases, syntax checks, the full frontend production build in CI, transaction postconditions, all collection-count comparisons, and application-user access isolation. Cleanup matching checks were added to staging CI. Both staging deployments passed their application health/login/PDF/isolation smoke checks. Final commit `17b8813eabae78ccb1fbdd3f3d9937191b7d9caa` deployed successfully: [GitHub Actions run](https://github.com/ashinlaurel/icare-app/actions/runs/39453948720).

Canonical runbook: [R001](README.md). This records the completed rehearsal, not a production execution.
