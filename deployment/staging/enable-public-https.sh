#!/usr/bin/env bash
# Staging only. Prepare Nginx before allowing public ACME HTTP traffic.
set -Eeuo pipefail
MODE=${1:?prepare or issue}; IP=${2:?public IPv4}
python3 - "$IP" <<'PY'
import ipaddress,sys
assert isinstance(ipaddress.ip_address(sys.argv[1]),ipaddress.IPv4Address)
PY
[[ -f /var/lib/icare-bootstrap-ready ]] || exit 1
install -d -m 0755 /var/www/letsencrypt/.well-known/acme-challenge
cat > /etc/nginx/snippets/icare-staging-routes.conf <<'NGINX'
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
location / {
    add_header Cache-Control "no-cache";
    add_header X-Robots-Tag "noindex, nofollow" always;
    add_header X-iCare-Environment "staging" always;
    try_files $uri $uri/ /index.html;
}
NGINX
write_config() {
    cat > /etc/nginx/sites-available/icare-staging <<NGINX
# Local-only HTTP keeps deployment checks and server-side PDF rendering working.
server {
    listen 127.0.0.1:8081;
    server_name localhost;
    include /etc/nginx/snippets/icare-staging-routes.conf;
}
server {
    listen 80 default_server;
    server_name $IP;
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/letsencrypt;
        try_files \$uri =404;
    }
    location / {
        if (\$remote_addr != 127.0.0.1) { return 301 https://$IP\$request_uri; }
        proxy_pass http://127.0.0.1:8081;
        proxy_set_header Host \$host;
    }
}
NGINX
    if [[ -f "/etc/letsencrypt/live/$IP/fullchain.pem" ]]; then
        cat >> /etc/nginx/sites-available/icare-staging <<NGINX
server {
    listen 443 ssl default_server;
    server_name $IP;
    ssl_certificate /etc/letsencrypt/live/$IP/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$IP/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    include /etc/nginx/snippets/icare-staging-routes.conf;
}
NGINX
    fi
    nginx -t
    systemctl reload nginx
}
case "$MODE" in
    prepare) write_config ;;
    issue)
        if ! snap list certbot >/dev/null 2>&1; then snap install --classic certbot; fi
        /snap/bin/certbot certonly --non-interactive --agree-tos --register-unsafely-without-email \
            --preferred-profile shortlived --webroot --webroot-path /var/www/letsencrypt \
            --ip-address "$IP" --cert-name "$IP" \
            --deploy-hook 'nginx -t && systemctl reload nginx'
        write_config
        /snap/bin/certbot certificates
        systemctl list-timers --all --no-pager 'snap.certbot*'
        ;;
    *) echo 'Expected prepare or issue'; exit 2 ;;
esac
