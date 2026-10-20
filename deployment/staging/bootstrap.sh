#!/usr/bin/env bash
set -Eeuo pipefail
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y ca-certificates curl gnupg nginx unzip jq python3
# MongoDB rejects the kernel shipped by this particular AMI. Resume on Ubuntu's
# maintained 6.8 AWS LTS kernel instead of bypassing MongoDB's startup check.
if [[ "$(uname -r)" != 6.8.* ]]; then
    apt-get install -y linux-aws-lts-24.04
    install -m 0700 "$0" /var/lib/icare-bootstrap-resume.sh
    cat > /etc/systemd/system/icare-bootstrap-resume.service <<'RESUME'
[Unit]
Description=Finish isolated staging bootstrap after LTS kernel selection
After=network-online.target cloud-final.service
Wants=network-online.target
[Service]
Type=oneshot
ExecStart=/var/lib/icare-bootstrap-resume.sh
TimeoutStartSec=1800
[Install]
WantedBy=multi-user.target
RESUME
    systemctl daemon-reload
    systemctl enable icare-bootstrap-resume
    KERNEL=$(basename "$(find /boot -maxdepth 1 -name 'vmlinuz-6.8.*-aws' | sort -V | tail -n 1)" | sed 's/^vmlinuz-//')
    [[ -n "$KERNEL" ]]
    update-grub
    grub-reboot "Advanced options for Ubuntu>Ubuntu, with Linux $KERNEL"
    systemctl reboot
    exit 0
fi
# Keep future boots on the supported LTS track, including its security updates.
OLD_IMAGES=$(dpkg-query -W -f='${binary:Package}\n' 'linux-image-7.*' 2>/dev/null || true)
if [[ -n "$OLD_IMAGES" ]]; then
    apt-get remove -y linux-aws linux-image-aws $OLD_IMAGES
    update-grub
fi
# Install the official Node archive, verified against its published checksum.
NODE_VERSION='v22.23.3'
NODE_SHA256='df450af89261115ef9f9e3830c3eeb2cc9213b63c720b1af623cb5dcbe2e02de'
curl --fail --silent --show-error "https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.xz" -o /tmp/node.tar.xz
printf '%s  /tmp/node.tar.xz\n' "$NODE_SHA256" | sha256sum --check -
tar -xJf /tmp/node.tar.xz -C /usr/local --strip-components=1
curl --fail --silent --show-error https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o /tmp/awscliv2.zip
unzip -q /tmp/awscliv2.zip -d /tmp
/tmp/aws/install
# A new database, with no production credentials or records.
curl --fail --silent --show-error https://pgp.mongodb.com/server-8.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-8.0.gpg
printf '%s\n' 'deb [ arch=amd64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse' > /etc/apt/sources.list.d/mongodb-org-8.0.list
curl --fail --silent --show-error https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome.gpg
printf '%s\n' 'deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] https://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/google-chrome.list
apt-get update -qq
apt-get install -y mongodb-org google-chrome-stable fonts-liberation
id icare >/dev/null 2>&1 || useradd --system --home /srv/icare --shell /usr/sbin/nologin icare
install -d -m 0755 /srv/icare/releases /srv/icare/incoming /etc/icare
chown icare:icare /srv/icare/incoming
# Secrets are generated on the instance, never placed in EC2 user data.
python3 - <<'PY'
from pathlib import Path
import secrets,json,os,base64
rootpass=secrets.token_hex(32);apppass=secrets.token_hex(32)
p=Path('/etc/icare/mongo-admin.env');p.write_text('MONGO_ADMIN_PASSWORD='+rootpass+'\n');p.chmod(0o600)
p=Path('/etc/icare/staging.env');p.write_text('\n'.join(['NODE_ENV=production','APP_ENV=staging','HOST=127.0.0.1','PORT=3000','DATABASE=mongodb://icare:'+apppass+'@127.0.0.1:27017/icare_staging?authSource=icare_staging&replicaSet=icare-staging','SECRET='+secrets.token_hex(48),'FRONT=http://127.0.0.1','PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable','AWS_EC2_METADATA_DISABLED=true','DISABLE_SCHEDULED_JOBS=true','DISABLE_EXTERNAL_INTEGRATIONS=true','S3_REGION=ap-south-1','S3_BUCEKT_NAME=staging-uploads-disabled'])+'\n');p.chmod(0o600)
p=Path('/etc/icare/test-admin.env');p.write_text('TEST_ADMIN_EMAIL=staging-admin@example.com\nTEST_ADMIN_PASSWORD='+secrets.token_urlsafe(24)+'\n');p.chmod(0o600)
p=Path('/etc/mongodb-keyfile');p.write_text(base64.b64encode(secrets.token_bytes(512)).decode());p.chmod(0o400)
import pwd
u=pwd.getpwnam('mongodb');os.chown(p,u.pw_uid,u.pw_gid)
p=Path('/run/icare-mongo-users.js');p.write_text('const a=db.getSiblingDB("admin"); a.createUser({user:"staging_admin",pwd:'+json.dumps(rootpass)+',roles:["root"]}); a.auth("staging_admin",'+json.dumps(rootpass)+'); db.getSiblingDB("icare_staging").createUser({user:"icare",pwd:'+json.dumps(apppass)+',roles:[{role:"readWrite",db:"icare_staging"}]});');p.chmod(0o600)
PY
cat > /etc/mongod.conf <<'CONFIG'
storage:
  dbPath: /var/lib/mongodb
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log
net:
  port: 27017
  bindIp: 127.0.0.1
processManagement:
  timeZoneInfo: /usr/share/zoneinfo
replication:
  replSetName: icare-staging
security:
  authorization: enabled
  keyFile: /etc/mongodb-keyfile
CONFIG
systemctl enable --now mongod
for n in $(seq 1 60); do mongosh --quiet --eval 'db.adminCommand({ping:1})' >/dev/null 2>&1 && break; sleep 2; done
mongosh --quiet --eval 'rs.initiate({_id:"icare-staging",members:[{_id:0,host:"127.0.0.1:27017"}]})'
for n in $(seq 1 60); do mongosh --quiet --eval 'if (!db.hello().isWritablePrimary) quit(1)' >/dev/null 2>&1 && break; sleep 2; done
mongosh --quiet /run/icare-mongo-users.js
rm /run/icare-mongo-users.js
cat > /etc/systemd/system/icare-backend.service <<'SERVICE'
[Unit]
Description=iCare staging backend
After=network-online.target mongod.service
Wants=network-online.target
Requires=mongod.service
[Service]
Type=simple
User=icare
Group=icare
WorkingDirectory=/srv/icare/current/Backend
Environment=HOME=/srv/icare/incoming
Environment=XDG_CONFIG_HOME=/srv/icare/incoming/.config
Environment=XDG_CACHE_HOME=/srv/icare/incoming/.cache
EnvironmentFile=/etc/icare/staging.env
EnvironmentFile=/srv/icare/current/release.env
ExecStart=/usr/local/bin/node app.js
Restart=on-failure
RestartSec=3
TimeoutStopSec=30
KillSignal=SIGTERM
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/srv/icare/incoming
UMask=0027
[Install]
WantedBy=multi-user.target
SERVICE
cat > /etc/nginx/sites-available/icare-staging <<'NGINX'
server {
    listen 80 default_server;
    server_name _;
    root /srv/icare/current/frontend;
    index index.html;
    client_max_body_size 10m;
    add_header X-Robots-Tag "noindex, nofollow" always;
    add_header X-iCare-Environment "staging" always;
    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    location /static/ { try_files $uri =404; }
    location / { add_header Cache-Control "no-cache"; try_files $uri $uri/ /index.html; }
}
NGINX
ln -sfn /etc/nginx/sites-available/icare-staging /etc/nginx/sites-enabled/icare-staging
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl daemon-reload
systemctl enable nginx icare-backend
systemctl restart nginx
# Restrict instance metadata access to root/SSM, not the application account.
iptables -A OUTPUT -d 169.254.169.254 -m owner --uid-owner icare -j REJECT
cat > /etc/systemd/system/icare-metadata-guard.service <<'SERVICE'
[Unit]
Description=Prevent staging application from reading instance credentials
Before=icare-backend.service
After=network.target
[Service]
Type=oneshot
ExecStart=/bin/sh -c '/usr/sbin/iptables -C OUTPUT -d 169.254.169.254 -m owner --uid-owner icare -j REJECT || /usr/sbin/iptables -A OUTPUT -d 169.254.169.254 -m owner --uid-owner icare -j REJECT'
RemainAfterExit=yes
[Install]
WantedBy=multi-user.target
SERVICE
systemctl daemon-reload
systemctl enable icare-metadata-guard
systemctl disable icare-bootstrap-resume.service 2>/dev/null || true
printf 'ready\n' > /var/lib/icare-bootstrap-ready
