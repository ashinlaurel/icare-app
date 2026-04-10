#!/bin/bash

set -e

CONTAINER=$(docker compose ps -q mongo)

if [ -z "$CONTAINER" ]; then
  echo "Mongo container not running. Start docker compose first."
  exit 1
fi

echo "Copying sample DB into container..."

docker cp ./sampleDBData "$CONTAINER":/seed

echo "Restoring database..."

docker exec "$CONTAINER" mongorestore --drop --db icare /seed

echo "Done. Sample DB restored successfully."