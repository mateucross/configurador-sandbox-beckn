#!/bin/bash

container="bap-client"
caminho_container="/usr/src/app/config/default.yml"
arquivo_local="default.yml"

# 1. Copia do container para a máquina local
docker cp "$container:$caminho_container" "$arquivo_local"

# 2. Altera a linha registryUrl
sed -i.bak 's|^  registryUrl:.*|  registryUrl: http://registry:3030/subscribers|' "$arquivo_local"

# 3. Copia o arquivo de volta para o container
docker cp "$arquivo_local" "$container:$caminho_container"

echo "Arquivo $caminho_container atualizado no container $container"
