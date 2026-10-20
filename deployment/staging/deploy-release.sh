#!/usr/bin/env bash
# Installed as /usr/local/sbin/icare-deploy. Staging only, invoked by SSM.
set -Eeuo pipefail
exec 9>/var/lock/icare-deploy.lock
flock -w 300 9
ROOT=/srv/icare
BUCKET=icare-staging-releases-426376692287
MODE=${1:-}
OLD=$(readlink -f "$ROOT/current" || true)
if [[ "$MODE" == rollback ]]; then
    TARGET=$(readlink -f "$ROOT/previous" || true)
    [[ "$TARGET" == "$ROOT/releases/"* && -f "$TARGET/release.env" ]] || { echo 'No previous release available'; exit 1; }
    SHA=$(basename "$TARGET")
else
    SHA=$MODE
    [[ "$SHA" =~ ^[a-f0-9]{40}$ ]] || { echo 'Expected a full Git commit SHA or rollback'; exit 2; }
    TARGET="$ROOT/releases/$SHA"
    if [[ ! -f "$TARGET/.release-ready" ]]; then
        WORK=$(mktemp -d "$ROOT/incoming/release.XXXXXXXX")
        trap 'rm -rf -- "${WORK:-}"' EXIT
        aws s3 cp "s3://$BUCKET/releases/$SHA/release.tar.gz" "$WORK/release.tar.gz" --only-show-errors
        aws s3 cp "s3://$BUCKET/releases/$SHA/release.sha256" "$WORK/release.sha256" --only-show-errors
        (cd "$WORK" && sha256sum --check release.sha256)
        mkdir "$WORK/unpacked"
        python3 - "$WORK/release.tar.gz" "$WORK/unpacked" <<'PY'
import tarfile,sys
with tarfile.open(sys.argv[1]) as archive:
    archive.extractall(sys.argv[2],filter='data')
PY
        [[ -f "$WORK/unpacked/Backend/app.js" && -f "$WORK/unpacked/frontend/index.html" ]]
        [[ "$(jq -r .release "$WORK/unpacked/frontend/release.json")" == "$SHA" ]]
        printf 'RELEASE_SHA=%s\n' "$SHA" > "$WORK/unpacked/release.env"
        touch "$WORK/unpacked/.release-ready"
        chown -R root:root "$WORK/unpacked"
        chmod -R a+rX,go-w "$WORK/unpacked"
        if [[ -d "$TARGET" ]]; then echo 'Incomplete release directory already exists; inspect it before retrying'; exit 1; fi
        mv "$WORK/unpacked" "$TARGET"
    fi
fi
[[ "$SHA" =~ ^[a-f0-9]{40}$ ]] || exit 2
switch_to() {
    ln -sfn "$1" "$ROOT/current.next"
    mv -Tf "$ROOT/current.next" "$ROOT/current"
    systemctl restart icare-backend
}
healthy() {
    curl --fail --silent --max-time 3 http://127.0.0.1/api/health | jq -e --arg sha "$SHA" '.status == "ok" and .release == $sha' >/dev/null &&
    curl --fail --silent --max-time 3 http://127.0.0.1/release.json | jq -e --arg sha "$SHA" '.release == $sha' >/dev/null
}
recover() {
    echo 'Release verification failed; restoring prior application release.'
    if [[ -n "$OLD" && -f "$OLD/release.env" ]]; then
        switch_to "$OLD"
        curl --retry 10 --retry-delay 2 --retry-connrefused --fail --silent --max-time 3 http://127.0.0.1/api/health >/dev/null || true
    else
        systemctl stop icare-backend
    fi
    exit 1
}
trap recover ERR
switch_to "$TARGET"
OK=false
for n in $(seq 1 30); do
    if healthy; then OK=true; break; fi
    sleep 2
 done
[[ "$OK" == true ]] || recover
trap - ERR
if [[ -n "$OLD" && "$OLD" != "$TARGET" ]]; then ln -sfn "$OLD" "$ROOT/previous"; fi
printf 'Verified %s release %s\n' "$MODE" "$SHA"
