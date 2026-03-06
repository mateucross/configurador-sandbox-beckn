#!/bin/bash

files=(
  dsep_gercom-courses_1.1.0.yaml
)

containers=(
  bap-client
  bap-network
  bpp-client
  bpp-network
)

for file in "${files[@]}"; do
  for container in "${containers[@]}"; do
    echo "Copiando $file para $container..."
    docker cp "$file" "$container:/usr/src/app/schemas/."
  done
done
