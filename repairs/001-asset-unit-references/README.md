# R001 — Repair asset unit references that equal the asset ID

Status: **rehearsed successfully on a staging copy; production data unchanged**.

Related findings: [B06 and B33](../../docs/backend-suspicious-areas.md). Rehearsal details: [staging result](staging-result.md).

## Defect and code fix

The asset edit form initialized unit state from the asset route ID instead of `asset.unitId`. Saving an unrelated edit could write the asset's own ID into `unitId` while keeping the correct visible `unitName`. The backend accepted the reference without checking unit existence.

The fix preserves `asset.unitId` in both edit forms. `updateAsset` rejects malformed or nonexistent explicitly submitted unit IDs before either Asset or Server is written, and rejects update-operator payloads that could bypass this check. The fix was merged into staging as `c71a3795850c1e67cd92a5ed92e2dfe172b60d0d`.

**Production prerequisite:** deploy and verify this application fix first. Neither a staging deployment nor a data repair fixes the production application automatically.

## Exact repair scope

Select assets for which `asset.unitId == asset._id`.

Allowed writes:

- Set that asset's `unitId` to its supported existing unit ID.
- Ensure the asset appears in that unit's `assetsId` array using `$addToSet`.
- Remove that asset from other units' `assetsId` arrays using `$pull`.

Do not change customer/account IDs, copied names, contracts, hardware, original snapshots, calls, or unrelated stale entries. Customer-as-account defects are reported separately, even when the unit can be established.

## Matching rules

1. Require an existing role-1 customer.
2. For a valid role-2 account with matching parent customer, match unit names within that customer/account.
3. For the known legacy shortcut `accountId == customerId` referring to a role-1 customer, match within that customer; retain and report the separate account defect.
4. Normalize only letter case, outer whitespace, and repeated whitespace. Do not perform general fuzzy matching.
5. If names repeat, use exactly one existing unit back-reference. If still ambiguous, require all valid historical call unit references to agree on one candidate. Missing-unit/self-ID call references do not establish identity.
6. A reviewed spelling alias must be explicitly scoped to customer and account, and corroborated by an existing unit back-reference. Store aliases privately; they are not universal name replacements.
7. Validate the selected unit's account is role 2 and its parent customer agrees.
8. Leave missing, conflicting, or ambiguous matches unresolved.

## Files and supported environments

- [staging-repair.cjs](staging-repair.cjs): the tested dry-run/apply runner for an authenticated, local `icare-staging` replica set and a dated `icare_audit_YYYYMMDD` database only. It refuses other topology/environment/database combinations. It uses the native MongoDB driver exported by the installed staging Mongoose package; it does not start the app or models.
- [staging-repair.test.cjs](staging-repair.test.cjs): 14 matching cases covering owner scope, ambiguous names, historical references, reviewed aliases, and preservation of the separate account issue.
- [production-preflight.mongo.js](production-preflight.mongo.js): read-only preflight compatible with the existing legacy production `mongo` shell. It performs counts and a `hello`/`isMaster` topology check; it never updates or creates indexes.
- [staging-result.md](staging-result.md): the completed 20 October 2026 rehearsal and private recovery paths.

Existing `deployment/staging/repair-self-unit-references*.cjs` paths remain compatibility entry points. New changes belong here.

## Run the tests

From the repository root:

```sh
node repairs/001-asset-unit-references/staging-repair.test.cjs
npm --prefix Backend test
```

## Rehearse against a fresh production copy

- [ ] Obtain a fresh `mongodump` of database `icare` and record its SHA-256, start/end times, and source collection counts.
- [ ] Restore it into a new authenticated `icare_audit_YYYYMMDD` database on staging. Do not replace or expose the public app database.
- [ ] Verify all restored collection counts against the completed dump.
- [ ] Create a new root-only output directory under `/var/lib/icare-audits/`. Copy this runner there. Historical evidence directories must remain unchanged.
- [ ] Load the staging administrator password privately from `/etc/icare/mongo-admin.env` into `MONGO_AUDIT_PASSWORD`. Set `APP_ENV=staging`. Do not paste passwords into shell history or Git.
- [ ] If needed, add reviewed private `unit-name-aliases.json` entries with `customerId`, `accountId`, `from`, `to`, and an evidence note. Recheck their validity against the fresh copy.
- [ ] Run the dry run. Replace the date and directory below with the actual fresh restore and private output path:

```sh
node /private/operator/path/staging-repair.cjs \
  icare_audit_YYYYMMDD /var/lib/icare-audits/NEW_RUN
```

The first path is wherever the operator copied this file on the VM; it need not be in a deployed application release. The script loads the driver from `/srv/icare/current/Backend/node_modules/mongoose`.

- [ ] Review `unit-repair-plan.json` and its summary: count, target identities, match reasons, unresolved records, and retained account conflicts. The plan also saves original memberships for all units.
- [ ] Apply the reviewed plan on the isolated copy:

```sh
node /private/operator/path/staging-repair.cjs \
  icare_audit_YYYYMMDD /var/lib/icare-audits/NEW_RUN --apply
```

The runner refuses a changed plan/database state. The apply step uses one transaction, followed by verification that each repaired asset points to its selected unit and occurs in exactly that unit's list. Generated evidence files are created exclusively; existing files are not silently overwritten.

- [ ] Independently verify unit existence, selected ancestry, unique membership, total collection counts, unchanged out-of-scope fields, and preserved account conflicts.
- [ ] Save a new dated result summary. Do not assume the historical count of 905 will recur.

## Production replay procedure

### Current compatibility boundary

Production was MongoDB **4.4.2, standalone** when inspected. Staging is MongoDB 8 on a single-node replica set. The tested apply runner requires the staging replica set and **does not support production**. Do not remove its guards or change the database name to force it through.

A production apply runner has **not** been implemented or validated yet. Before production execution, choose and rehearse one of these approaches:

- Enable a properly planned production replica set, verify backup/recovery and runtime compatibility, then adapt and rehearse the transaction-based runner.
- Implement a standalone-compatible runner with a durable per-record journal, conditional writes, stop-on-error behavior, resumability, and a tested compensating rollback. Asset/unit writes are separate operations on standalone MongoDB and must not be described as atomic.

### Checklist for the future production operation

- [ ] Verify the application fix is actually deployed to production.
- [ ] Confirm MongoDB version, topology, backup health, and the exact selected database. Run the read-only preflight through the existing production shell:

```sh
# Run on the production host, using its existing local access/authentication.
mongo --quiet icare /private/operator/path/production-preflight.mongo.js
```

- [ ] Pause all writers and confirm no engineer or background process can mutate assets, units, ownership, or supporting calls during the operation.
- [ ] Take a fresh backup under the maintenance window, verify restoration, and retain it privately. A live dump of standalone MongoDB is not a point-in-time snapshot across collections.
- [ ] Generate a fresh plan from that baseline and rehearse it on a fresh isolated copy.
- [ ] Review every exception/alias and match method; confirm the planned ID map is still current. Never apply the historical staging map blindly.
- [ ] Review the topology-compatible production runner and its rollback drill. Record its commit, plan hash, backup hash, operator, and timestamps.
- [ ] Execute only the reviewed plan with conditional before-state checks and the chosen transaction/journal guarantees.
- [ ] Verify every changed asset has the expected unit, exactly one membership, valid target ancestry, and unchanged non-target fields. Count remaining self-ID/dangling references and unresolved exceptions.
- [ ] Verify collection counts and explicitly report retained account defects and other out-of-scope issues.
- [ ] Resume writers only after successful checks. Retain the journal, plan, backup, and result privately.

## Recovery

On staging, a failed transaction aborts its writes. If the transaction committed but later verification failed, stop further repairs and inspect the result; do not assume a reported error means no data changed.

The original archive and saved plan/memberships are the recovery baseline. Restore the archive to another isolated database to inspect/rehearse recovery. The staging runner does not have an automatic rollback mode.

For future production, prepare and rehearse the rollback before applying anything. A full database restore also reverses unrelated writes, so it requires the maintenance freeze and an explicit recovery decision. Prefer a reviewed scoped rollback where possible; preserve preimages and postconditions so it cannot silently overwrite later legitimate changes.
