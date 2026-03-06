#!/bin/bash

# Função para verificar se os logs de um container estão inativos por 10 segundos
wait_for_log_silence() {
    local container_name=$1
    echo "Aguardando logs do container $container_name ficarem inativos por 10 segundos..."
    while true; do
        local last_log=$(docker logs --tail 1 "$container_name" 2>&1 | cat)
        sleep 10
        local current_log=$(docker logs --tail 1 "$container_name" 2>&1 | cat)
        if [ "$last_log" = "$current_log" ]; then
            break
        fi
    done
}

echo "Iniciando containers base..."
docker start mongoDB rabbitmq redis
sleep 10

echo "Iniciando registry e gateway..."
docker start registry gateway
sleep 10

echo "Iniciando network containers..."
docker start bap-network bpp-network

# Aguardar silêncio nos logs dos network containers
echo "Aguardando estabilização dos network containers..."
wait_for_log_silence "bap-network" &
wait_for_log_silence "bpp-network" &
wait

echo "Iniciando client containers..."
docker start bap-client bpp-client

# Aguardar silêncio nos logs dos client containers
echo "Aguardando estabilização dos client containers..."
wait_for_log_silence "bap-client" &
wait_for_log_silence "bpp-client" &
wait

echo "Iniciando sandbox API..."
docker start sandbox-api

echo "Todos os containers foram iniciados com sucesso!"
