#!/bin/bash

# Lista de pastas e scripts correspondentes
declare -A scripts=(
  ["bap-client"]="config.sh"
  ["bap-network"]="config.sh"
  ["bpp-client"]="config.sh"
  ["bpp-network"]="config.sh"
  ["layer2"]="config.sh"
  ["sandbox-api"]="config_dist.sh config_src.sh"
)

# Percorre cada pasta e executa os scripts
for dir in "${!scripts[@]}"; do
  echo "➡️ Entrando na pasta: $dir"
  cd "$dir" || { echo "❌ Erro ao entrar em $dir"; exit 1; }
  
  for script in ${scripts[$dir]}; do
    if [[ -f "$script" ]]; then
      echo "🔹 Executando $script em $dir"
      chmod +x "$script"
      ./"$script"
    else
      echo "⚠️ Script $script não encontrado em $dir"
    fi
  done
  
  cd - > /dev/null
done

echo "✅ Todos os scripts foram executados!"
