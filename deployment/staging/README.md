# iCare staging deployment

This is an isolated test environment. Production at `3.7.169.91` is not a deployment target of this workflow.

## Day-to-day deployment

1. Develop on a feature branch and review the changes.
2. Merge or push the accepted changes to `staging`.
3. Open GitHub Actions → **Deploy staging**. The workflow builds the frontend and backend dependencies on a GitHub runner, then deploys the commit to the test instance.
4. Verify the staging application and the exact release at `/api/health` and `/release.json`.
5. Promote accepted code to `master` separately. **This pipeline does not deploy master to production.** Keep the existing production process until a production deployment is explicitly prepared and tested.

The workflow also declares a **Run workflow** deploy/rollback choice. GitHub requires the workflow definition on the repository's default branch to expose manual dispatch normally. Until this is merged to `master`, pushes to `staging` are the supported trigger and rollback is available through SSM below. Do not merge just to deploy production: the workflow targets staging only.

## What happens during a release

- GitHub installs the committed lockfiles and builds with Node 22.23.3.
- The old CRA/Webpack build temporarily uses `--openssl-legacy-provider`; application modernization is separate work.
- Backend dependency lifecycle scripts are disabled. PDFs use the host's Chrome through an explicit executable path instead of downloading an obsolete browser or PhantomJS.
- GitHub uploads the release and SHA-256 checksum to a private, encrypted S3 bucket under its full commit SHA.
- GitHub assumes a short-lived AWS role using OIDC. No AWS access key or SSH private key is stored in GitHub.
- SSM runs `/usr/local/sbin/icare-deploy COMMIT_SHA` on the **staging instance only**.
- The script acquires a deployment lock, verifies/extracts the archive, switches `/srv/icare/current`, and restarts only `icare-backend`.
- Health checks must confirm MongoDB connectivity and the same frontend/backend commit. Release smoke checks also verify synthetic login, SPA routing, disabled external integrations, PDF rendering and metadata isolation. Failed verification restores the previous application release when one exists.
- `/srv/icare/previous` retains the previous successful release. No automatic database migrations run.

Backend restart causes a short interruption on staging. This is not a zero-downtime or database-rollback system.

## Host layout

- `/srv/icare/releases/COMMIT_SHA`: immutable application releases.
- `/srv/icare/current`: active release symlink.
- `/srv/icare/previous`: previous successful release symlink.
- `/etc/icare/staging.env`: instance-generated application/database secrets, root-readable only.
- `/etc/icare/test-admin.env`: synthetic test administrator credentials, root-readable only.
- `/etc/icare/mongo-admin.env`: staging database administrator secret, root-readable only.
- `icare-backend.service`: unprivileged `icare` application user, automatic restart and boot startup.
- `mongod.service`: local authenticated MongoDB 8.0, single-node `icare-staging` replica set.
- Ubuntu AWS LTS kernel 6.8: the current AMI kernel is rejected by MongoDB. Bootstrap selects the maintained LTS kernel and resumes after a staging-only reboot.
- Nginx serves the frontend and proxies `/api/` without removing the `/api` prefix.

A single-node replica set supports transaction development; it does not provide database high availability. MongoDB/Node/Ubuntu versions differ from production and must be included in compatibility testing before a production migration.

## Access and test data

The staging website is publicly accessible over HTTPS so engineers can use it from any IP. HTTP redirects external visitors to HTTPS; the ACME certificate-validation path remains available for renewal. SSH stays restricted to the operator IP recorded in local `infrastructure.json`. Ports 3000, 8081 and 27017 are not exposed. SMTP ports are not allowed outbound. Staging upload/contact integrations and the contract-expiry scheduler are disabled. The application user cannot retrieve the instance's AWS credentials from metadata.

The initial environment uses **synthetic data only**. It has no production `.env`, database credentials, customer records, or backup dumps. A sanitized production-data import is a separate, explicit operation.

On 20 October 2026, an explicitly authorized production dump was restored to the separate **`icare_audit_20261020`** database on this VM for unit-reference reconciliation. The public app still uses synthetic `icare_staging`; its database user has no access to the audit database. The dump, dry-run plans, original unit memberships, and repair results are root-only under `/var/lib/icare-audits/20261020-unit-repair/`. Do not change the app database URL to expose this confidential copy through the public site.

### Repairing self-ID unit references in an isolated copy

`repair-self-unit-references.cjs` accepts only a dated `icare_audit_YYYYMMDD` database, `APP_ENV=staging`, a private output directory under `/var/lib/icare-audits/`, and the staging Mongo administrator password supplied as `MONGO_AUDIT_PASSWORD`. It connects only to localhost and requires replica set `icare-staging`; production is not a supported target. Use root on the VM and load the administrator secret from `/etc/icare/mongo-admin.env` without printing it.

Run without `--apply` to create a private plan and membership backup; inspect the counts and unresolved records. Add `--apply` only to execute an unchanged plan. Plans are checked against current records before writing; repairs and reciprocal unit-list changes run in one transaction, followed by verification. Existing output files are never overwritten automatically.

Matching is scoped to customer/account ancestry and normalized unit names. For the known customer-as-account shortcut, a unique unit within the customer can establish the unit while preserving the separate account defect. Duplicate names need a unique existing unit membership or consistent valid historical call references. Optional spelling aliases are explicitly reviewed, customer/account scoped, stored privately in `unit-name-aliases.json`, and require an existing unit membership. Ambiguous records remain unresolved; no fuzzy global name matching is performed.

The script changes only the self-ID assets' `unitId` fields and their `Unit.assetsId` memberships. It does not correct account IDs, copied display names, contracts, calls, hardware, missing snapshots, or stale references to deleted assets. Preserve the original archive for recovery; restore it into another isolated database if a clean baseline is needed. Never use this staging-only script to repair production.

Read synthetic login credentials over your existing SSH access:

```sh
sudo cat /etc/icare/test-admin.env
```

Use `https://35.154.244.123/admin/signin`. The IP has a trusted Let's Encrypt certificate with automated renewal and an Nginx reload hook. The certificate is short-lived, so the renewal timer and public ACME path must stay operational. `enable-public-https.sh prepare IP` configures routing; `enable-public-https.sh issue IP` obtains/configures the certificate after ports 80/443 are allowed. Local HTTP remains available for deployment checks and server-side PDF rendering.

If your public IP changes, only SSH access needs its operator rule updated. The EC2 public IP can change after a stop/start; in that case reissue the certificate for the new address, update `STAGING_URL` in the GitHub staging environment, and share the new URL. Keep this public environment synthetic: importing confidential production records requires a separate access-control review.

## Inspect and roll back

On the instance:

```sh
sudo systemctl status icare-backend mongod nginx
sudo journalctl -u icare-backend -n 50 --no-pager
curl --fail http://127.0.0.1/api/health
sudo /usr/local/sbin/icare-deploy rollback
```

With AWS CLI, use `aws ssm send-command` with the local infrastructure state's instance ID, document `AWS-RunShellScript`, and command `/usr/local/sbin/icare-deploy rollback`. Inspect the returned command invocation until it finishes. The original commit remains available for redeployment by SHA as long as its S3 artifact is retained.

Application rollback does **not** reverse database writes or future migrations. The staging database currently has no scheduled backup job; synthetic fixtures can be recreated. Design backups and a restore drill before importing valuable data.

## Infrastructure and boundaries

`provision.py` provisions only named staging resources using the `personal` AWS CLI profile in `ap-south-1`. It stores returned AWS IDs in ignored local `infrastructure.json`; do not delete that state and rerun blindly. Launch-template versions contain no secrets; secrets are generated on the instance.

The instance role has SSM management and read access only to this release prefix. The GitHub role can upload/read that prefix and invoke SSM on the staging instance. Its OIDC trust is restricted to this repository's `staging` GitHub environment, which permits only the `staging` branch. The app does not receive those deployment permissions.

The test instance, encrypted disk, public IPv4 address and release storage incur AWS charges. Stop staging when idle if appropriate; its automatically assigned public IP can change after a stop/start. Update the access URL then. No Elastic IP, second production server, production DNS change or production security-group change is included.

Before a production cutover, separately verify backups/restoration, runtime/database compatibility, PDF flows, role journeys, migration recovery, HTTPS and production deployment permissions.
