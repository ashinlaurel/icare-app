#!/bin/bash

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ARCHIVE="$PROJECT_ROOT/sampleDBData.tar.gz"

CONTAINER=$(docker compose ps -q mongo)

if [ -z "$CONTAINER" ]; then
  echo "Mongo container not running. Start docker compose first."
  exit 1
fi

TMP_DIR="/tmp/sampleDBData"

echo "Extracting sample DB..."

rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"

tar -xzf "$ARCHIVE" -C "$TMP_DIR"

echo "Copying DB into container..."

docker cp "$TMP_DIR/sampleDBData" "$CONTAINER":/seed

echo "Restoring DB..."

docker exec "$CONTAINER" mongorestore --drop --db icare /seed

echo "Cleaning up temp files..."

rm -rf "$TMP_DIR"

echo "Sample DB restored successfully."