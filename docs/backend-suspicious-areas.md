# Backend suspicious areas and data-integrity review

Reviewed: 18 October 2026. Companion: [current database design](db-design.md).

Feedback coverage reviewed: 20 October 2026 against [iCare feedback on 20-10-26.docx](iCare%20feedback%20on%2020-10-26.docx). Backend additions are B43–B54; the coverage checklist below also links reported incidents to existing findings.

## Scope and interpretation

This is a static review of the backend's active route wiring, controllers, all 16 models, scheduled asset update, uploads, and supporting scripts. The existing Graphify graph was used for navigation; findings were checked against source. The original static review did not query production. Subsequent read-only production findings and the unit-reference fix are explicitly identified under B06/B33 and in the companion production audit.

This inventory is a starting point for reviewing one subsystem at a time. It cannot prove that these paths caused the reported production problems or that every possible defect has been found. Deployment-level authentication, actual indexes, real data, frontend request sequences, and concurrency behavior still need verification.

**Evidence labels:** **Confirmed** means the described implementation is visible in source, not that a production incident has been reproduced. **Risk** means a failure depends on timing, payload, configuration, or an unverified business rule. Priorities are remediation order: **P0** for access paths capable of broad unauthorized changes; **P1** for direct partial writes, destructive inconsistency, or broken integrity controls; **P2** for validation, reporting, and operational weaknesses.

Each numbered item has a stable ID for follow-up discussions. Source links point to files; function names and line numbers refer to this reviewed version and can drift as code changes.

## Recommended review order

1. Access control and arbitrary updates: B01–B04. They can bypass every workflow safeguard.
2. Asset creation, edits, and hierarchy deletion: B05–B12.
3. Inventory installation/swaps, purchases, and scrap sales: B13–B20.
4. Service calls and assignment: B21–B23.
5. Attendance, leave, and payroll: B24–B29.
6. LST, schema consistency, reporting, and operational concerns: B30–B42.
7. Company feedback gaps: B43–B54. Assess session and permission controls (B43–B45) alongside B01–B04; schedule the remaining capabilities against agreed business rules.

For each subsystem, first define its invariants, reproduce the code defect against disposable fixtures, then fix writes and only afterward plan production-data reconciliation. Do not use repair endpoints as a substitute for an audited reconciliation plan.

## Access control and request boundaries

### B01 · P0 · Write routes bypass authentication

**Confirmed.** [Call routes](../Backend/routes/calls/Call.js) mount create, assignment, swap, and inventory-condition writes without `isSignedIn`/`isAuthenticated`. [Attendance routes](../Backend/routes/attendance/attendance.js) and [leave routes](../Backend/routes/leaveForm/leaveform.js) likewise expose marking/updating/approval handlers without these guards. [Employee routes](../Backend/routes/employee/EmployeeAuth.js) expose employee signup and salary creation without authentication. [Asset routes](../Backend/routes/assets/assets.js) retain `/create` as an unguarded migration route; [product routes](../Backend/routes/products/server.js) expose standalone hardware creation; [account routes](../Backend/routes/customer/Account.js) expose signup.

`router.param("id", getEmpById)` only loads an existing employee; it does not authenticate a caller. An existing employee ID can satisfy that lookup. There is no global authentication middleware in [app.js](../Backend/app.js).

**Possible outcome:** callers who can reach these routes can create or alter operational records without the intended identity checks. Verify upstream protection in production, then enforce authentication in the backend itself. Public customer call creation needs an explicit customer-authenticated policy, not an employee-ID lookup.

### B02 · P0 · Protected routes generally authenticate the actor, not authority over the target

**Confirmed implementation; exploitation depends on intended permissions.** [EmployeeAuth.isAuthenticated](../Backend/controllers/employee/EmployeeAuth.js), lines 74–85, compares the JWT identity with the employee in the URL. Target records usually come from `req.body.id`. It does not check the actor's role, target ownership, or allowed operation. `isAdmin` exists but is generally absent from write routes, including employee/customer password resets, deletion, and employee updates.

**Possible outcome:** any signed-in employee can potentially change another employee's role/payroll, reset another user's password, delete records, or access another customer's data by supplying a different target ID. Establish a permission matrix and check scope on each operation; matching the actor's URL ID is not sufficient.

### B03 · P1 · Direct request bodies can change internal fields and bypass update validation

**Confirmed.** Examples: [updateEmployee](../Backend/controllers/employee/Employee.js), line 239; [updateCustomer](../Backend/controllers/customer/Customer.js), line 156; [updateUnit](../Backend/controllers/unit/unit.js), line 160; [updateAsset and assetUpdateWithId](../Backend/controllers/assets/assets.js), lines 330/371; [updateInventory](../Backend/controllers/inventory/inventory.js), line 613; [assignEnggToCall](../Backend/controllers/calls/calls.js), line 149; [updateLST](../Backend/controllers/LST/LST.js), line 106; [updateVendor](../Backend/controllers/Vendor/Vendor.js), line 88.

Handlers pass client-supplied update objects directly to Mongoose and do not request `runValidators: true`. Schema-known fields such as `role`, credential hashes, ownership IDs, reference arrays, status, financial values, and histories can be submitted outside their intended workflows. Mongoose strictness does not protect schema-known internal fields. Create handlers also commonly instantiate models directly from request bodies.

**Possible outcome:** required values removed, contradictory IDs/names, bypassed transitions, overwritten history, or privilege changes. Use operation-specific field allowlists and payload validation; enabling update validators alone does not enforce permissions or cross-document rules.

### B04 · P1 · Credentials and sensitive records are exposed or logged

**Confirmed.** [CustomerAuth.resetPasswordByAdmin](../Backend/controllers/customer/CustomerAuth.js), line 51, persists the supplied plaintext password in declared `show_password`. [EmployeeAuth.resetPasswordByAdmin](../Backend/controllers/employee/EmployeeAuth.js), line 123, logs the password and attempts to write the same field; it is not declared in EmployeeLogin, so persistence must not be assumed. Employee/customer/account list handlers return full documents without credential-field projections. Several read routes are unguarded, including employee lookup/list and salary lookup. [Unit](../Backend/models/customer/Unit.js) declares an unhashed password string.

**Possible outcome:** exposure of reusable credentials, identity/banking details, and easier unauthorized mutation. Check API response projections and log retention as well as storage. Do not copy real credentials or customer records into GitHub issue examples.

## Customers, accounts, units, and assets

### B05 · P1 · Asset creation can leave partially constructed assets

**Confirmed.** [createAsset](../Backend/controllers/assets/assets.js), line 126, writes Asset → Server → OriginalProduct → Asset links → Unit.assetsId in separate steps. `reasset.save()` at line 151 is not awaited before the final response path. Parent existence and ownership agreement are not verified before writes.

**Trigger/outcome:** duplicate hardware serial, missing unit, validation failure, or interruption after the first save can leave an Asset without hardware links, orphan hardware, or an Asset missing from its Unit. A failed response followed by retry can create another partial Asset. Check reciprocal links, missing referenced documents, and orphan Server/OriginalProduct records. Future fix needs one transaction and server-validated ownership, plus retry semantics.

### B06 · P1 · Asset edits do not reconcile ownership or hardware back-references

**Confirmed; partially addressed on `bug-fixes` (20 October 2026; not deployed to production).** [updateAsset](../Backend/controllers/assets/assets.js) updates Asset, then finds Server by `{ asset: id }` and updates it independently. It does not check either matched document. `assetUpdateWithId` in the same controller updates a Server directly.

**Confirmed cause of self-ID unit corruption:** [UpdateAsset](../FrontEnd/src/pages/Assets/UpdateAsset.js) initialized unit state with the asset route ID (`setUnit({ _id: id, ... })`) rather than `asset.unitId`, then submitted that state as `unitId`. Editing unrelated fields without reselecting the unit could corrupt a previously correct relationship while leaving its visible name unchanged. Production source and served frontend source maps matched this code; the read-only audit found **905 assets with `unitId` equal to their own asset ID**. This mechanism was reproduced locally; the exact edit history of every affected record is not established. See the [production audit](production-core-data-audit-2026-10-20.md#confirmed-code-path-behind-self-id-unit-references).

**Branch fix:** both the asset edit form and the equivalent unit initialization in [UpdateAssetFromCall](../FrontEnd/src/pages/Calls/UpdateAssetFromCall.js) now preserve `asset.unitId`. The call form currently omits `unitId` from its update payload, so its initialization was not identified as a writer of this corruption. The backend `updateAsset` endpoint rejects malformed or nonexistent explicitly submitted unit IDs before either Asset or Server is written, and rejects MongoDB update-operator payloads that could bypass this check. Partial updates that omit `unitId` retain their previous behavior. Controller regression checks cover invalid references, no writes on validation/lookup failure, valid updates, and partial updates.

**Still open:** existing production records have not been repaired; ownership ancestry, reciprocal unit arrays, atomicity, matched-document checks, and hardware-link validation remain unresolved. Fixing this initialization does not resolve B06 as a whole.

**Trigger/outcome:** changing `unitId` leaves old/new `Unit.assetsId` arrays unchanged; changing product pointers or `Server.asset` can break reciprocal links. Server failure after Asset success leaves mixed versions. Duplicated owner names can become stale. Audit forward/back-links and customer/account/unit agreement. Treat reassignment and hardware changes as explicit operations.

### B07 · P1 · Asset deletion has incomplete cleanup and deletes before checking dependencies

**Confirmed.** [deleteAsset](../Backend/controllers/assets/assets.js), line 314, deletes Asset first, pulls its ID from Unit, then deletes Server. There is no transaction or missing-record guard. OriginalProduct, calls, inventory placement/history, and other referencing records are not reconciled here.

**Possible outcome:** dangling operational/history references, orphan original configuration, and partially deleted assets after errors. Define whether referenced assets should be retired rather than deleted; audit references before implementing cleanup. A repeat delete can dereference null instead of behaving idempotently.

### B08 · P1 · Customer/account/unit cascades run unawaited and reference an undefined model

**Confirmed.** [deleteAccount/deleteCustomer](../Backend/controllers/customer/Customer.js), lines 184/218, use nested `map(async ...)` without awaiting the resulting promises. [deleteUnit](../Backend/controllers/unit/unit.js), line 105, does the same. Both files call `Server.findByIdAndDelete` without importing `Server`.

**Trigger/outcome:** parent records are already deleted when descendant cleanup reaches the undefined symbol. Responses can report success while descendants fail; outer catches do not collect these asynchronous failures. Cleanup follows stored child arrays, so children missing from those arrays are skipped. OriginalProduct, calls, and inventory references also remain outside the cascade. Audit missing parents and descendants independently of the arrays; redesign deletion before attempting any production replay.

### B09 · P1 · Unit creation saves the child before checking/linking its account

**Confirmed.** [unitCreate](../Backend/controllers/unit/unit.js), line 33, saves Unit, then looks up CustomerLogin using `accountId`, appends to `unitIds`, and calls `account.save()` without awaiting it.

**Possible outcome:** orphan units after a missing/wrong parent or failed parent save; retries create duplicates. It does not verify parent role or whether `customerId` matches the account's parent customer. Check Unit-to-account ownership and reciprocal membership. Creation/linking should be one validated operation.

### B10 · P1 · Account creation has two incompatible representations, including a broken path

**Confirmed.** [CustomerAuth.signup](../Backend/controllers/customer/CustomerAuth.js), line 21, creates role-2 CustomerLogin accounts and then updates the parent. [Account.signup](../Backend/controllers/customer/Account.js), line 20, instead saves Account and then accesses `customer.accountId`, which is not declared on CustomerLogin, before calling `.push()`.

**Possible outcome:** the standalone path can persist an Account then fail while linking it. Both routes remain mounted. Unit/Asset/Call/LST schemas declare account references to Account even though unit creation and customer traversal use CustomerLogin. Check both collections and real ID targets before selecting the canonical account representation. Do not migrate by renaming fields alone.

### B11 · P1 · Customer/account hierarchy creation and edits lack invariant checks

**Confirmed.** [CustomerAuth.signup](../Backend/controllers/customer/CustomerAuth.js) saves an account before parent lookup/update, with no transaction, parent-role check, or cycle prevention. [updateCustomer](../Backend/controllers/customer/Customer.js) allows direct edits of role, parent, and child arrays. [updateUnit](../Backend/controllers/unit/unit.js) does not repair parent membership on moves.

**Possible outcome:** unlinked accounts, incompatible roles, cycles, cross-customer units, and divergent parent/child lists. Concurrent array changes need explicit atomic membership operations; the current application does not establish a general concurrency policy. Audit reciprocal membership and role/ancestry rules.

### B12 · P1 · Bulk asset updates report success before completion

**Confirmed.** [multiAssetUpdate](../Backend/controllers/assets/assets.js), line 386, starts `selectedids.map(async ...)` and immediately returns 200. Rejections do not reach the outer catch; it also references out-of-scope `id` in that catch. No date-range validation, matching-count check, or transaction exists.

**Possible outcome:** only some contracts/billing dates change, yet the caller sees success. Check batches with mixed dates or missing IDs. Decide whether bulk edits are atomic or report explicit per-record results; await every write.

## Inventory and movement history

### B13 · P1 · Inventory swaps are non-atomic and hardware saves are not awaited

**Confirmed.** [swapItems](../Backend/controllers/calls/calls.js), line 174, independently changes outgoing/incoming InvItem records and the current Server component array. `prod.save()` at lines 241, 292, and 355 is not awaited. The Call-history write is commented out.

**Possible outcome:** inventory says installed while hardware does not, outgoing hardware remains attached after being returned to stock, or the caller gets success before persistence fails. Partial failures/retries can duplicate component entries and history. Compare inventory placement with Server component serials and movement history. One transaction should encompass the actual invariant; merely awaiting saves is insufficient.

### B14 · P1 · Swaps trust client state and do not reserve stock atomically

**Confirmed missing guards; concurrency outcome is a risk.** The same [swapItems](../Backend/controllers/calls/calls.js) trusts client `call`, `assetId`, `type`, names, and serials. Incoming updates filter only by `_id`, not availability, condition, or existing asset. Outgoing removal does not assert that the component actually exists; a two-way swap can change inventory even if no matching component is found. Missing update results are ignored.

**Possible outcome:** one serialized item can be installed on two assets, a wrong item can be detached, or an inventory ID's serial can differ from the serial copied into hardware. Concurrent read/modify/save operations have no explicit expected-version guard. Validate against stored call/asset/item records and use conditional claims; check matched counts and same-item swaps.

### B15 · P1 · Removed components are created from untrusted, incomplete snapshots

**Confirmed.** In the remove/swap branches of [swapItems](../Backend/controllers/calls/calls.js), the missing inventory record is created from `existswap` with only history/location set by the handler. Condition, type, asset placement, and serial are not reconstructed consistently from the persisted hardware. The handler does not update `assetsIdHistory` when installing stock.

**Possible outcome:** the returned part may retain stale placement/condition, fail schema validation after earlier writes, or have incomplete installation history. Check removed-item snapshots and missing asset-history membership. Define a canonical return-to-stock payload rather than storing the client object.

### B16 · P1 · Bulk inventory duplicate checks do not prevent insertion

**Confirmed.** [createItems](../Backend/controllers/inventory/inventory.js), line 253, launches callback-based Server searches inside synchronous `map`. Matches only create a local message; they neither set a blocking result nor abort `insertMany` at line 420. Search errors are not handled before `result.docs` access.

**Possible outcome:** serials already installed in hardware can be added as available inventory. Serial uniqueness inside InvItem does not enforce uniqueness across Server's component arrays. Audit installed serials versus available stock, and duplicate serials across component arrays. Specify whether installed items are allowed as inventory records and what their placement must be.

### B17 · P1 · Bulk inserts and purchase-history creation are not one operation

**Confirmed design; partial-batch outcome depends on the failure.** [createItems](../Backend/controllers/inventory/inventory.js), line 420, uses `insertMany` without a transaction. A server-side duplicate-key failure can occur after earlier ordered inserts succeeded. [createPurchaseHistrory](../Backend/controllers/inventory/inventory.js), line 685, separately accepts a history payload; it does not reconcile or create the items atomically.

**Possible outcome:** a failed purchase request can leave a subset of stock, items without purchase history, history pointing to missing items, or duplicate purchase records after retries. Verify actual driver errors/batch results against fixtures. Introduce a purchase operation with a stable request key and defined batch semantics.

### B18 · P1 · Asset inventory update sends responses from inside parallel callbacks

**Confirmed.** [handleAssetUpdate](../Backend/controllers/inventory/inventory.js), line 540, uses unawaited `inventory.map(async ...)`, with `res.json()` inside each item's branch. It has no aggregate response, and an empty list or unsupported operation may never respond. Its ADD catch references undefined `err`; the DEL catch only logs. A null match can be returned as success.

**Possible outcome:** first-item success masks later failures, multiple responses, hanging requests and retries, inconsistent placement, repeated `assetsIdHistory` entries via `$push`. It updates inventory only, not Server hardware. Coordinate this path with asset edits and swaps rather than treating it as an independent source of truth.

### B19 · P1 · Scrap sale can commit history independently of item updates

**Confirmed.** [scrapSaleUpdate](../Backend/controllers/inventory/inventory.js), line 628, does not await per-item updates before saving ScrapSaleHistory. It does not require items to be in scrap stock, clear/reconcile `assetId`, check all IDs matched, or prevent repeated sale of the same item.

**Possible outcome:** sold items remain installed/available, sale history includes items never updated, or an item appears in multiple sales. Check sale membership against condition and placement. Validate eligibility, amounts, unique request identity, and inventory/history writes together.

### B20 · P1 · General inventory edits/deletion and repair endpoint bypass lifecycle controls

**Confirmed.** [updateInventory/deleteInventory](../Backend/controllers/inventory/inventory.js), lines 613/601, can alter/delete referenced items without reconciling hardware, LST, purchase, or scrap references. [invCallUpdate](../Backend/controllers/calls/calls.js), line 370, sets arbitrary condition/history without verifying call/item association.

[FixPurchaseHistory](../Backend/controllers/inventory/inventory.js), line 701, is mounted at `/:id/fixpurch`; it loads up to ten million records and overwrites purchase vendor information from the first current inventory item, without awaiting all changes. There is no dry run, mixed-vendor check, or bounded batch result.

**Possible outcome:** broken historical references and purchase metadata rewritten from mutable current data. Confirm whether the repair endpoint has been used; do not invoke it during investigation. Restrict lifecycle edits and replace repairs with reviewed, resumable scripts.

## Service-call lifecycle

### B21 · P1 · Duplicate-active-call prevention is a race, and call numbers are not unique

**Confirmed.** [callCreate](../Backend/controllers/calls/calls.js), line 10, queries existing calls and then inserts separately. Two requests can both pass the check. The check runs only for literal `callType == "external"`; callType/status have no enums. [Call schema](../Backend/models/call/call.js) requires `callNo` but declares no unique index.

**Possible outcome:** duplicate active calls or duplicate human-readable numbers, especially after concurrent submissions/retries. Define which call types permit multiple active calls and allocate business numbers atomically. Audit duplicates before adding constraints.

### B22 · P1 · Assignment/status updates do not enforce a lifecycle or maintain both assignment representations

**Confirmed.** [assignEnggToCall](../Backend/controllers/calls/calls.js), line 149, applies any supplied update to Call. It does not verify engineer existence/role, allowed transition, expected current status, or required closure details, and does not update `EmployeeLogin.assignedCalls`.

**Possible outcome:** Call.employeeId and employee priority queues disagree, closed calls can be reopened by stale requests, and histories can be replaced. Confirm which representation the current UI relies on; establish one authoritative assignment workflow with conditional updates.

### B23 · P1 · Calls can contain mismatched or nonexistent ownership references

**Confirmed missing validation.** [callCreate](../Backend/controllers/calls/calls.js) stores the request without checking that asset, unit, account, customer, and assigned employee belong together. [Call.customerId](../Backend/models/call/call.js) declares `ref: "Customer"`, but the repository defines CustomerLogin instead. Account references also have the mismatch in B10.

**Possible outcome:** calls appear under the wrong customer or cannot be populated. Read filters are supplied by the caller rather than derived from authenticated customer scope. Audit against persisted Asset ownership, not copied names.

## Attendance, leave, and payroll

### B24 · P1 · Monthly attendance creation races and day edits replace shared state

**Confirmed.** [markAttendance](../Backend/controllers/attendance/attendance.js), line 4, counts then finds/creates an employee/month document. [Attendance schema](../Backend/models/attendance/attendance.js) has no unique employee/month/year index. [updateAttendance](../Backend/controllers/attendance/attendance.js), line 185, replaces the entire `days` array from the request.

**Possible outcome:** duplicate months, stale whole-array overwrites, missing/duplicate days, or marks for nonexistent employees. There is no explicit expected-version check. Audit monthly uniqueness and the exact calendar day set; replace whole-array updates with validated conditional day updates.

### B25 · P1 · Leave approval can save an approved form before failing attendance creation

**Confirmed.** [approveLeave](../Backend/controllers/leaveForm/leaveForm.js), line 22, changes the leave form first, then marks days independently. Its local [markAttendance helper](../Backend/controllers/leaveForm/leaveForm.js), line 168, constructs new Attendance documents without `monthNo`, which is required by the schema.

**Trigger/outcome:** approval crossing a month with no Attendance document can fail validation after the form and possibly earlier days/months were saved. Check approved leave against actual attendance, especially the first leave in a month. Use one shared attendance implementation and transactional workflow where feasible.

### B26 · P1 · Leave transitions can overwrite attendance and do not reverse prior approvals

**Confirmed implementation; precedence rules need business confirmation.** Any status other than literal `"Rejected"` enters the attendance-marking branch. The request supplies employee/date fields rather than the handler loading the stored form as authority. Date order, overlap, allowed states, and existing Present marks are not checked. Rejecting a previously approved form does not undo its attendance marks.

**Possible outcome:** marking the wrong employee/date range, leave overwriting presence, submitted/invalid states marking leave, or rejected leave remaining in attendance. Define precedence and reversal rules before repairing records; compare stored forms with day-level marks.

### B27 · P2 · Attendance error/response handling can conceal the result

**Confirmed.** [checkIfPresent](../Backend/controllers/attendance/attendance.js), line 142, responds inside `days.map()` and then responds again after the loop. Its catch and the updateAttendance catch refer to `err` while the caught variable is `error`. updateAttendance has a trailing success response after its catch.

**Possible outcome:** double responses, exceptions in the error handler, or ambiguous client retries. Missing monthly records/days are not reported clearly. Fix one-response control flow and explicit not-found behavior; do not infer a failed write solely from an HTTP error.

### B28 · P1 · Payroll accepts unverified calculations and duplicate periods

**Confirmed.** [createSalary](../Backend/controllers/employee/Employee.js), line 257, passes the entire request to Salary.create. [Salary schema](../Backend/models/salary/Salary.js) has no required employee/date/payment fields, no calculation constraints, and no unique employee/pay-period key. Most monetary fields are strings.

**Possible outcome:** incomplete slips, invalid amounts, mismatched employeeID/queryID/name, duplicate payroll after retry, or inconsistent gross/deduction/net values. Define the pay-period key and compute/validate authoritative values server-side. Audit duplicate periods and arithmetic using agreed payroll rules.

### B29 · P1 · Employee deletion leaves dependent operational records

**Confirmed.** [deleteEmployee](../Backend/controllers/employee/Employee.js), line 227, removes only EmployeeLogin. It does not reconcile assigned calls, attendance, leave, or salary references. Broad employee updates can independently replace assigned-call arrays and payroll defaults (B03).

**Possible outcome:** calls assigned to missing engineers and historical payroll/attendance losing their employee reference. Decide on employee deactivation versus deletion and retention rules before cleanup.

## LST and shared schema issues

### B30 · P1 · LST writes are disconnected from inventory movement

**Confirmed implementation; intended movement rules need confirmation.** [LSTCreate/updateLST/deleteLST](../Backend/controllers/LST/LST.js), lines 7/106/122, write only the LST record. They do not validate referenced items/ownership or coordinate item placement/condition. `CMRRItems` is an untyped array in [LST schema](../Backend/models/LST/LST.js).

**Possible outcome:** a dispatch/return document can disagree with inventory, refer to missing items, or contain incompatible item shapes. Deleting it does not reverse movements. Confirm which LST statuses imply physical movement before defining an invariant.

### B31 · P1 · Generating an LST PDF also performs an unrestricted database update

**Confirmed.** [downloadPdf](../Backend/controllers/LST/LST.js), line 211, applies request-supplied `update` before launching the browser. PDF generation failure returns an error after the database change has committed. The fallback `despatchedBy == ""` is a comparison, not assignment.

**Possible outcome:** a supposedly read/export action changes status or ownership, failed exports leave state changes, and retries repeat the update. Separate export from mutation, or explicitly document and make dispatch idempotent.

### B32 · P2 · Soft-delete behavior is optional and inconsistent

**Confirmed.** LST stores string `isDeleted` and [getAllItems](../Backend/controllers/LST/LST.js), line 38, applies it only when requested. Other entities mostly hard-delete; employees also have a string Live flag without a global active-record policy.

**Possible outcome:** deleted records reappear in lists/counts or remain selectable. Establish explicit active/history query rules and distinguish intentional archival from corrupt references.

### B33 · P1 · Schema definitions do not enforce cross-document ownership or existence

**Confirmed.** All [models](../Backend/models) use references without foreign-key enforcement. Important refs are optional, parent/child arrays are independently writable, and names are duplicated. Unit/Asset/Call/LST Account refs disagree with the active CustomerLogin account path; Call's Customer ref has no matching model.

**Possible outcome:** individually valid documents form an invalid hierarchy. Reconciliation should check existence, reciprocal links, owner ancestry, and identifier/name disagreement separately. Required ObjectIds alone would not fix this.

**Limited guard added on `bug-fixes` (20 October 2026; not deployed to production):** `updateAsset` verifies the existence of an explicitly submitted `unitId` before writing. This addresses the confirmed self-ID unit corruption path documented under B06. It does not enforce customer/account ancestry, protect every other write path, repair existing bad references, or prevent a unit from being deleted between validation and update. B33 remains open.

### B34 · P2 · Duplicate property declarations silently change validation

**Confirmed.** [Asset schema](../Backend/models/assets/assets.js), lines 12 and 83, declares producttype twice; the later optional definition overrides the required one. [EmployeeLogin](../Backend/models/employee/EmployeeLogin.js) repeats identity/payroll/banking keys; [Call](../Backend/models/call/call.js) repeats unitName.

**Possible outcome:** developers rely on constraints that are not effective. Remove duplicate declarations deliberately and check stored data before tightening validation. This finding concerns actual JavaScript object overwriting, not duplicate MongoDB fields.

### B35 · P2 · Business values lack canonical types and domain validation

**Confirmed.** [Salary](../Backend/models/salary/Salary.js), [InvItem](../Backend/models/inventory/InvItem.js), [Attendance](../Backend/models/attendance/attendance.js), [leaveForm](../Backend/models/LeaveForm/leaveForm.js), and [LST](../Backend/models/LST/LST.js) mix string money/dates/flags with Date/Number elsewhere. No enums enforce most conditions/statuses; date-order, nonnegative-amount, and tax-total checks are absent from the reviewed write paths.

**Possible outcome:** spelling/case variants disappear from exact-match reports, dates compare inconsistently, financial arithmetic needs unsafe parsing, and contradictory ranges persist. Inventory history IDs and Call.attachedinv are strings, not typed refs; PurchaseHistory.vendorId is a string while InvItem.vendorId is ObjectId. Normalize with a migration plan, not a blind schema-type change.

### B36 · P2 · Business uniqueness, query indexes, and audit metadata are incomplete

**Confirmed declarations; live indexes unverified.** Models declare uniqueness for selected usernames/emails/serials, but not callNo, LSTNo, employeeID, employee/month attendance, or payroll period. No explicit compound indexes, automatic timestamps, or optimisticConcurrency option were found in model definitions.

**Possible outcome:** duplicates and weak traceability; slow scans can increase timeout/retry pressure. Unique schema declarations do not prove indexes exist in production. Verify indexes and duplicates before adding constraints. Transactions additionally require a supported MongoDB topology; the repository's Compose file declares a single MongoDB service without replica-set configuration, so production transaction support must be checked.

## Reports, jobs, integrations, and error handling

### B37 · P2 · Stock statistics contain repeated/missing category calculations

**Confirmed.** [getStockStats](../Backend/controllers/inventory/inventory.js), line 12, implements mouse statistics only. Vendor buckets query `condition: "Scrap"`; some Kottayam/Kozhikode scrap assignments are duplicated while corresponding vendor fields remain their initial values. Total vendor fields are not calculated.

**Possible outcome:** the UI can report problematic stock even when underlying records are correct. Establish category definitions and verify calculations before treating dashboard differences as database corruption.

### B38 · P2 · Some asset/call reads can misrepresent the stored data

**Confirmed or targeted verification needed.** [countAssetValue](../Backend/controllers/assets/assets.js), line 94, uses parseInt and drops fractional AMC amounts; its error branch continues into results.map. `countAmcContract`, line 85, chains distinct with count and ignores its error—verify actual installed Mongoose behavior and the intended distinct-contract definition. [getCalls](../Backend/controllers/calls/calls.js), line 35, queries `assetId.amcrate` although assetId is stored as an ObjectId; population does not turn that query into a join. Employee filtering also forces active statuses.

**Possible outcome:** inaccurate totals or apparently missing calls. Separate read/query defects from genuinely invalid stored records. [Vendor list](../Backend/controllers/Vendor/Vendor.js), line 19, ignores requested pagination; employee lists also use fixed/default pages, so API results are not complete audit inventories.

### B39 · P2 · Contract expiry job overwrites business classification without an audit event

**Confirmed.** [contractCheckForAssets](../Backend/controllers/assets/assetcron.js), line 3, changes expired AMC/WTY records to NOS. [app.js](../Backend/app.js) schedules it in every backend instance. There is no recorded previous classification, actor/job ID, or renewal coordination.

**Possible outcome:** an apparently unexpected business-category change may be job behavior. The update itself is a conditional database update; multiple instances alone do not prove corruption. Check expiry rules, renewal timing, timezone/cutoff expectations, and whether deployments run several schedulers.

### B40 · P2 · Missing-record guards and error handlers often fail after partial work

**Confirmed.** Several updates return 200 with null results. Create/delete handlers dereference parents or deleted records without null checks. Catch blocks in asset/customer/vendor/inventory/LST lookups reference variables outside scope; invCallUpdate catches `error` but returns `err`. [createSalary](../Backend/controllers/employee/Employee.js) calls undefined `handleError` on failure. Many handlers destructure nested request objects before their try blocks.

**Possible outcome:** the original failure is masked, the request hangs or returns an ambiguous response, and clients retry completed or partially completed work. Express 4 is declared and no general async error wrapper/central error middleware is visible. Standardize payload/not-found/errors and one final response, while preserving the actual write outcome in logs.

### B41 · P2 · Database readiness and external-service completion are misleading

**Confirmed.** [app.js](../Backend/app.js) uses `.then(console.log("DB CONNECTED"))`, which logs immediately rather than on successful connection; it starts listening independently and `/api/test` does not verify database readiness. [contactus](../Backend/controllers/contactus/contactus.js) sends success before its email callback completes, contains embedded SMTP credentials, and disables TLS certificate verification. Do not reproduce credential values in documentation. [uploadapi](../Backend/routes/uploadapi.js) has no authentication middleware, requests public-read uploads, and validates file extension/MIME strings rather than content. PDF browser cleanup is not in a finally block in LST/salary exports.

**Possible outcome:** misleading health/success, duplicate retries, exposed documents, orphan S3 uploads, or resource exhaustion. These are secondary to DB invariants but can amplify production ambiguity. Verify whether embedded credentials remain active and move configuration out of source.

### B42 · P2 · Broad repair/test paths and missing regression safeguards

**Confirmed.** The mounted fixpurch route (B20), unguarded migration create route (B01), and separate Account/Server create routes widen the production write surface. [tempcode/temptest.js](../Backend/tempcode/temptest.js) contains an obsolete create flow with undefined dependencies and callback/await mixing, but is **not imported or mounted by app.js**; do not attribute production corruption to it without evidence of manual use. The duplicate leave route file is likewise not the file mounted by app.js. No backend test script is declared in [package.json](../Backend/package.json).

**Possible outcome:** maintenance scripts or alternate routes evade canonical workflows, and fixes regress unnoticed. Inventory which paths are actually deployed/used. Add targeted failure-injection, retry, and concurrency tests as each subsystem is fixed; do not test writes against production.

## Backend gaps from company feedback on 20 October 2026

The feedback combines reported incidents with requests for new capabilities. **Requirement gap** below means the requested behavior is not implemented in the reviewed backend paths, or needs an explicit contract; it does not mean a production failure has been reproduced. Existing B01–B42 retain their IDs and evidence labels. Paragraph references such as P7 refer to top-level paragraphs in the supplied Word document, counting blank paragraphs.

### B43 · P1 · Password policy and optional OTP are absent from account workflows

**Requirement gap; confirmed source behavior.** Feedback P7 says weak passwords are accepted and asks for stronger passwords, with OTP if possible. The password setters in [EmployeeLogin](../Backend/models/employee/EmployeeLogin.js) and [CustomerLogin](../Backend/models/customer/CustomerLogin.js) hash supplied values without a strength policy. Signup and administrative password reset in [EmployeeAuth](../Backend/controllers/employee/EmployeeAuth.js) and [CustomerAuth](../Backend/controllers/customer/CustomerAuth.js) do not enforce a shared password policy or an OTP challenge.

**Follow-up:** enforce the agreed policy on every password-setting path. OTP is an optional request: agree when it is required and how expiry, attempt limits, delivery, and recovery work before implementing it. This extends B04; password storage/exposure and password acceptance are separate concerns.

### B44 · P1 · No server-side mechanism enforces one active session per credential

**Requirement gap; confirmed source behavior.** Feedback P8 requires only one simultaneous login per credential, including admin credentials. Both [authentication controllers](../Backend/controllers/employee/EmployeeAuth.js) issue JWTs without an expiry option, active-session identifier, or revocation lookup; [customer authentication](../Backend/controllers/customer/CustomerAuth.js) follows the same pattern. Signout clears a cookie without invalidating an issued token. Password resets do not invalidate prior tokens.

**Possible outcome:** previously issued credentials remain usable from multiple clients. Agree whether a new login replaces the previous session or is rejected, then enforce that policy atomically on the server and check it on authenticated requests. Cover logout, password reset, account deactivation, expiry, and simultaneous login attempts.

### B45 · P1 · Requested role, location, customer, and revenue permissions need backend enforcement

**Requirement gap extending B01–B04 and B23.** Feedback P9–P25/P30 requests CEO and Administration full rights; coordinator access to calls, spares, and the Revenue Module without deletion or the revenue dashboard; LST/store access with no additions/deletions, viewing and location-wise stock/LST generation; TVM/KTM/CLT logins; and customer access to call status/unit performance. Existing identity middleware does not implement this operation/resource matrix. [Asset counter/value routes](../Backend/routes/assets/assets.js) expose dashboard totals without authentication. [Inventory](../Backend/controllers/inventory/inventory.js) and [LST](../Backend/controllers/LST/LST.js) accept location/from/to filters from the request, rather than enforcing an actor's allowed locations. [Customer call routes](../Backend/routes/calls/Call.js) do not apply customer authentication or derive customer scope from the token.

**Follow-up:** enforce permissions on reads, writes, counts, exports, downloads, and generated PDFs. Revenue figures must be returned only to CEO/Administration, even when the menu is hidden. Clarify the coordinator's Revenue Module access versus restricted figures, and whether LST generation may create records despite the no-addition rule. Confirm how TVM/KTM/CLT map to stored location names and whether locations restrict access or merely default filters. Customer reports must stay within the authenticated customer's account/unit hierarchy.

### B46 · P2 · Reported wrong asset counts and zero revenue need explicit metric reconciliation

**Reported incident; cause unverified.** Feedback P28–P29 reports wrong asset counts and zero revenue. B38 covers some calculations, but does not establish why these particular displayed values are wrong. [countAssets/countAmcAssets/countWtyAssets/countNosAssets](../Backend/controllers/assets/assets.js) count stored documents globally or by exact business strings; `countAssetsByCustomer` accepts client filters. `countAssetValue` sums current `amcrate` values across assets, using integer parsing. That sum is not a defined billed/collected revenue calculation.

**Follow-up:** agree the asset population, customer/location/date scope, contract categories, and revenue definition. Compare expected totals, API responses, persisted records, and dashboard bindings using the same sample. Account for duplicates/orphans (B05–B11), classification changes (B39), and rounding (B38); a zero UI field alone does not prove a database defect. Apply B45 to every revenue response.

### B47 · P2 · Requested transactional emails and scheduled alerts are not wired into workflows

**Requirement gap.** Feedback P31/P34/P40–P41/P61 requests: contract expiry email one month ahead to `accounts@infocareindia.com` and `basil@infocareindia.com`; leave-submission email to accounts with Basil in CC; end-user email after an external call is registered and assigned, and after coordinator closure; and mail to Basil for calls pending more than three days. [app.js](../Backend/app.js) schedules contract reclassification only. The active [asset job](../Backend/controllers/assets/assetcron.js), [leave submission](../Backend/controllers/leaveForm/leaveForm.js), and [call creation/assignment updates](../Backend/controllers/calls/calls.js) do not implement these notifications. The contact-form mailer and standalone email test do not satisfy these workflows.

**Follow-up:** define committed events and durable delivery/retry records so mail failure cannot misrepresent a successful business write, and retries do not create duplicate alerts. Confirm whether registration and assignment require separate emails; the end-user email source is not defined in the Call schema. Define calendar-month versus fixed-day expiry warning, pending-age origin and timezone, excluded statuses, reminder frequency, renewal cancellation, and job ownership across instances. Do not send trial messages to the supplied recipients during investigation.

### B48 · P2 · Leave submission lacks application time, typed leave rules, and reliable newest-first retrieval

**Requirement gap; confirmed source behavior.** Feedback P33/P35–P37 requests latest applications first, application date, ordinary leave requested a week ahead, and sick leave requested after use. [leaveForm schema](../Backend/models/LeaveForm/leaveForm.js) has no submission timestamp or leave-type field. [createLeaveForm](../Backend/controllers/leaveForm/leaveForm.js) accepts the supplied form without these timing rules; `getAll` has no explicit sort and builds month/year filters although those fields are not declared in the schema.

**Follow-up:** record server-generated submission time, define leave types, enforce advance/retrospective rules against an agreed timezone, and sort/paginate deterministically by submission time. Clarify the exact seven-day boundary and sick-leave submission window. Base month/year filtering on declared dates or explicit canonical fields. This supplements approval/attendance defects B25–B27; simply displaying a date or rearranging menus cannot establish these backend rules.

### B49 · P2 · Call attachments support image URLs but not the requested PDF workflow

**Requirement gap; confirmed source behavior.** Feedback P42/P69 requests CCFR PDFs and JPG photos, including mobile call updates. [uploadapi](../Backend/routes/uploadapi.js) accepts JPEG/JPG/PNG/GIF only, with a 2 MB limit, so a PDF is rejected. [Call history](../Backend/models/call/call.js) stores `ccfrImgUrl`, `existUrl`, and `newUrl` strings without managed attachment metadata or a verified ownership link.

**Follow-up:** support agreed PDF/image types and limits, inspect file content, and persist attachment identity/type/size plus call and uploader associations. Authorize upload, attachment linking, and retrieval; define failed-upload/orphan cleanup and private download behavior (B41/B54). Agree whether multiple CCFRs/photos are needed. The call-update model label in P43 is presentation work unless API inspection shows the associated product model is unavailable.

### B50 · P1 · Whole-device replacement needs serial lineage and preserved AMC association

**Requirement gap beyond component swaps B13–B15.** Feedback P44 requests replacement of printers, KVM switches, and other complete units, retaining searchable old/new serial numbers and AMC contract details. [swapItems](../Backend/controllers/calls/calls.js) edits component arrays under `Server[type]`; it is not an explicit whole-device replacement operation. [Server](../Backend/models/products/server.js) has one current top-level serial and generic history strings, while [Asset](../Backend/models/assets/assets.js) holds current contract details. Those fields alone do not enforce complete-device replacement lineage or historical search.

**Follow-up:** decide whether replacement preserves the asset identity or creates a successor. Persist an audited old/new device relationship with effective date, call, actor, disposition, and contract association; update current placement atomically with inventory. Support lookup by either serial without losing the original configuration or historical calls. Coordinate serial uniqueness and contract versioning (B36/B51).

### B51 · P1 · Contract renewal cannot preserve a full before-and-after contract record

**Requirement gap; confirmed source behavior.** Feedback P51–P52 requires renewal changes to PO number, contract dates, billing dates, and rates, with old and new details retained. [multiAssetUpdate](../Backend/controllers/assets/assets.js) accepts only contract/billing date changes. [Asset schema](../Backend/models/assets/assets.js) stores one current set of PO/date/rate/tax values and no contract-version history; arbitrary edits can overwrite them. B12 covers incomplete batch writes, but not this historical requirement.

**Follow-up:** introduce an explicit renewal operation and retained contract versions with PO details, applicable assets, effective periods, rates/taxes, actor, and renewal time. Define validation, overlap, rounding, batch/retry behavior, and links from historical service/reporting records to the applicable version. Preserve the previous version before switching current terms and coordinate the expiry job/alerts (B39/B47).

### B52 · P2 · Performance reporting needs complete scoped queries and agreed measures

**Requirement gap extending B23/B38.** Feedback P25/P54–P60/P66 requests customer, unit, duration, product, combined customer/product/duration, and employee performance reports. [getCalls](../Backend/controllers/calls/calls.js) offers some ownership/date filters, but no product filter, and forces active statuses for employee queries. `getCallsChartData` returns overall recent monthly counts, not these scoped performance measures. Existing [report helpers](../FrontEnd/src/pages/Reports/ReportsHelper.js) export employee call lists using large fixed page sizes; that is not proof of complete historical reporting.

**Follow-up:** define measures such as received/closed/pending calls and response/resolution times, relevant event timestamps, date boundaries, reopened calls, and employee attribution. Provide authorized combined filters and complete pagination/aggregation, including closed calls where required. Verify historical timestamps are sufficient before promising metrics. Customer reports inherit B45 scope; location-wise stock availability/reporting additionally needs corrected category totals (B37), defined availability, and complete exports. LST generation needs the same location rules and movement safeguards (B30–B31/B45).

### B53 · P2 · Mobile backend coverage and conveyance need an explicit scope

**Requirement gap; partial capabilities already exist.** Feedback P39/P62–P70 requests attendance, leave application/tracking, salary details, performance, location-wise spares, call management/updates/uploads, and conveyance in the mobile app. Attendance, leave, salary, inventory, and call APIs already exist; do not describe all of these as missing modules. Their identity/scope, correctness, attachment, and reporting gaps are B01–B04/B21–B29/B37/B45/B49/B52. No conveyance model or mounted route is present among the reviewed [models](../Backend/models) and [application routes](../Backend/app.js).

**Follow-up:** define the mobile API contract and verify employee self-service boundaries, especially payroll and attendance/leave access. Capture conveyance requirements before design: entries/claims, journey/date/amount fields, receipts, approval, and any payroll linkage need business decisions. Do not infer offline synchronization or a particular reimbursement formula from this feedback.

### B54 · P1 · AWS document archive and financial record formats need managed storage and access rules

**Requirement gap extending B04/B41.** Feedback P71–P117 requests an AWS-backed document archive and Excel formats. The mounted [upload route](../Backend/routes/uploadapi.js) is a public-read image upload; the reviewed [models](../Backend/models) have no general document catalogue, document-level access policy, or outstanding-balance/register subsystem. Existing [PurchaseHistory](../Backend/models/PurchaseHistory/PurchaseHistory.js) invoice metadata and generated LST PDFs do not cover this archive.

The requested archive covers purchase invoices for sales/assets/service spares; B2B/B2C sales invoices; income/land/building tax and land records; KWA/KSEB invoices and receipts; issued POs and received sales/AMC POs; bank guarantees and issue/receipt/return acknowledgments; HPE/Lenovo/other AMC contracts; health/family and vehicle insurance; medical records; LST copies; TDS; appointment/ESI/PF records; legal notices; Aadhaar/PAN/GST/TAN certificates; and employee identity/address proofs. The repeated medical-record line in the feedback is one category unless the company clarifies otherwise.

The requested Excel formats cover EMD and BG outstanding, debtors, creditors, business/bank list, asset purchase and warranty expiry/details, KSFE Chitty, and Metlife. Clarify whether each is an uploaded workbook/template, an export, or a live structured register; the feedback alone does not establish accounting or calculation rules.

**Follow-up:** catalogue documents with category, owner/linked business record, S3 key, verified type/size, uploader/time, versions, expiry where relevant, and retention/deletion rules. Use private storage and authorized downloads with appropriate access separation for medical, identity, employee, and financial records. Define searchable metadata and any required structured register/export fields. Reconcile existing public uploads before reusing this endpoint for the requested archive; no production bucket policy was inspected.

## Company feedback coverage checklist

This checklist accounts for backend-related observations and requests without duplicating existing findings. Paragraphs refer to the linked feedback document, not this Markdown file.

- **Password acceptance/optional OTP and simultaneous logins (P7–P8):** newly covered by B43–B44.
- **Named roles, restricted revenue, TVM/KTM/CLT, customer call status/unit reports, stock reports and LST by location (P9–P25/P30):** B01–B04/B23/B30–B31/B37 already cover underlying risks; B45/B52 add the explicit permission/reporting requirements and unresolved role wording.
- **Wrong dashboard asset counts and zero revenue (P28–P29):** B05–B11/B38–B39 are relevant existing candidates; B46 adds the reported symptoms and reconciliation scope. Root cause remains unverified.
- **Expiry, leave, external-call and overdue-call email (P31/P34/P40–P41/P61):** newly covered by B47; B39/B41 alone did not cover these notifications.
- **Newest leave first, application date, advance ordinary leave and retrospective sick leave (P33/P35–P37):** B48 adds persistence/query/business-rule gaps to B25–B27. Separate leave/history menus (P38) are excluded as UI work.
- **Attendance module (P39/P63):** existing B24–B27, plus B53 for mobile coverage. An attendance backend already exists.
- **CCFR PDF/JPG photos and spare images (P42/P69):** B49 extends existing B41 upload concerns.
- **Whole printer/KVM/other-device replacement, old/new serial search and AMC continuity (P44):** B50 adds this workflow beyond component swaps B13–B15.
- **Duplicate product serials, inability to delete duplicates, and a blank system after registering a call on a duplicate asset (P47–P49):** existing B05–B08/B16/B20/B33/B36/B40 cover partial creation, deletion, serial integrity, and broken references/error handling. [Server.serialno](../Backend/models/products/server.js) declares uniqueness; verify deployed indexes, actual duplicate records, serial normalization/scope, reciprocal links, and failing call responses before deciding the cause. The blank-screen symptom is not reproduced and must not be attributed to duplicates solely from this report. Preserve affected call/history links during any later reconciliation.
- **Calls under INFOACRE TVM but no matching customer in the list (P50):** existing B10–B11/B23/B33/B38 cover account representations, ownership, broken references, and incomplete reads. Compare persisted owner IDs, roles, names, customer-list filters, and all result pages; do not assume a spelling correction resolves the hierarchy.
- **Renewal PO/rates/dates and retained old/new terms (P51–P52):** B51 extends B06/B12/B35/B39.
- **Customer/unit/duration/product/combined and employee performance (P54–P60/P66):** B52 adds explicit scope and metric requirements; customer authorization is B45.
- **Mobile attendance, leave/tracking, salary, performance, location stock, calls, updates/uploads and conveyance (P62–P70):** B53 maps existing APIs and the conveyance gap; B45/B49/B52 cover permissions, files, and reports.
- **AWS document categories and Excel formats/registers (P71–P117):** B54 captures every listed category and distinguishes file storage from structured data requirements.

**Excluded for this pass:** HTTP/HTTPS, WIX/domain renewal and professional URL changes (P3–P5); accepted email usernames (P6); login-page navigation (P26); LST menu placement (P32); leave/history menu separation (P38); model display in the call-update screen (P43, unless API data is missing); inventory-selection cancellation (P45); and unsaved-form prompts (P46). These remain outside the backend review scope requested here.

## Cross-cutting invariants to agree before fixing data

- Every account/unit/asset has an existing parent in the agreed canonical collection, with reciprocal membership where arrays are retained.
- Asset.product and Server.asset agree; OriginalProduct retention and mutability have explicit rules.
- A serialized component is installed in at most one current hardware configuration; inventory placement, condition, and movement history agree with that configuration.
- Purchase/scrap/LST documents reference the intended items, and lifecycle transitions are applied exactly once or safely retried.
- A call's owner hierarchy derives from its asset; assignment, engineer queues, status, and history agree.
- Each employee has at most one attendance document per canonical month/year, with exactly the valid days and an agreed precedence between presence and leave.
- Payroll uniqueness, calculation inputs, rounding, approval, and retention rules are explicit.
- Success means all required writes completed; errors identify whether any work committed. A timeout is not proof of rollback.

## Review limitations and next step

This inventory identifies source-level candidates, not a diagnosis of particular production records. Priorities should be adjusted using actual request logs, deployed commit, route reachability, business rules, and the problematic data once supplied. Some denormalized names may intentionally preserve historical snapshots; do not automatically synchronize them until that intent is settled.

Recommended first data-integrity deep dive: **asset creation and deletion (B05–B08)**, followed by **inventory swaps (B13–B15)**. Access-control exposure (B01–B04) should be assessed promptly alongside that work. No remediation, migration, credential changes, or production-data repairs were performed for this document.
