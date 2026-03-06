# Guia de instalação sandbox da rede beckn

### Pré-requisitos para a instalação da rede beckn sandbox

- Os sistemas operacionais suportados e o instalador de teste do Beckn-ONIX são Ubuntu (20.04, 22.04 e 24.04), Debian (12), Amazon Linux 2, Windows com suporte a WSL e MacOS.
- Docker e Docker Compose
- Git

Rode este codigo no terminal para evitar erros de permissão do docker:

```
sudo groupadd docker
sudo usermod -aG docker $USER
```

### Baixando repositorio beckn-onix

No terminal do Ubuntu utilize este codigo:

```
git clone https://github.com/Beckn-One/beckn-onix.git
```

Isso irá instalar o repositorio no seu computador

### Instalando a rede em uma maquina local

Utilize este comando para entrar na pasta raiz do projeto:

```
cd beckn-onix/
```

Utilize este comando para alternar para a branch correta:

```
git checkout main-pre-plugins
```

Utilize este comando para entrar na pasta de instalação:

```
cd install/
```

Depois utilize este comando para iniciar o script de instalação:

```
./beckn-onix.sh
```

Ao script ser executado, ele exibirá as seguites opções:

```
Welcome to Beckn-ONIX!
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@::;;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:;;;;:;;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;::;:::;;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@......@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;:;;;;:;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@............@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@::::@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@..................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@.........,,::,,.........@@@@@........@@.......@@@@@@@........@.........@@@@@........@@@@@@@
@@@@@@.........,,::;;;;::,.........@@@...................@@@@@........@..........@@@.........@@@@@@@
@@@@@@.......,::;;;:,::;;;::,......@@@....................@@@@........@@..........@.........@@@@@@@@
@@@@@@.....,:;;;::,....,::;;;:,....@@@.....................@@@........@@@..................@@@@@@@@@
@@@@@@.....:;;:,..........,:;;,....@@@.....................@@@........@@@@................@@@@@@@@@@
@@@@@@.....:;;:............:;;,....@@@........@@@@@........@@@........@@@@@@.............@@@@@@@@@@@
@@@@@@.....:;;:............:;;,....@@@........@@@@@........@@@........@@@@@@@..........@@@@@@@@@@@@@
@@@@@@.....:;;:............:;;,....@@@........@@@@@........@@@........@@@@@@............@@@@@@@@@@@@
@@@@@@.....:;;:............:;;,....@@@........@@@@@........@@@........@@@@@..............@@@@@@@@@@@
@@@@@@.....,;;;:,,......,::;;;,....@@@........@@@@@........@@@........@@@@................@@@@@@@@@@
@@@@@@......,::;;;:,,,::;;;::,.....@@@........@@@@@........@@@........@@@..................@@@@@@@@@
@@@@@@........,,:;;;;;;;::,........@@@........@@@@@........@@@........@@.........@@.........@@@@@@@@
@@@@@@@@.........,,::::,,.........@@@@........@@@@@........@@@........@.........@@@@.........@@@@@@@
@@@@@@@@@@@.........,..........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@..............@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Checking prerequisites of Beckn-ONIX deployment
Beckn-ONIX is a platform that helps you quickly launch and configure beckn-enabled networks.

What would you like to do?
1. Join an existing network
2. Create new production network
3. Set up a network on your local machine
4. Merge multiple networks
5. Configure Existing Network
6. Update/Upgrade Application
(Press Ctrl+C to exit)
Enter your choice: 3
```

Insira o 3 em "Enter you choice: ", para escolher a opção "3. Set up a network on your local machine".

Espere até que o script termine de rodar para a instalação ser concluida.


### Configurando a rede beckn

Vá no seu navegador de internet e acesse: localhost:3030

Será necessario realizar login, o usuário e senha padrão são os seguintes:

```
Usuário: root
Senha: root
```

Ao fazer login, siga esse passo a passo para inscrever o bpp-network e bap-network no registry:

- Selecione: Admin
- Selecione: Network Participant

Para inscrever o bpp-network:

- Selecione: lapis com a folha, para editar
- Selecione: Network Role
- Selecione: lapis com a folha, para editar
- Vá até Status e altere de INITIATED para SUBSCRIBED
- Selecione: Done

Pronto o bpp-network está inscrito na rede.

Para inscrever o bap-network:

- Selecione: lapis com a folha, para editar
- Selecione: Network Role
- Selecione: lapis com a folha, para editar
- Vá até Status e altere de INITIATED para SUBSCRIBED
- Selecione: Done

Pronto o bap-network está inscrito na rede.

### Configurando os dominios:

Vá no seu navegador de internet e acesse: localhost:3030

Será necessario realizar login, o usuário e senha padrão são os seguintes:

```
Usuário: root
Senha: root
```

Depois de logado siga este passo a passo:

- Selecione: Beckn
- Selecione: Network Domain
- Selecione o simbolo de "+" para adicionar um dominio
- Em Name adicione: dsep:gercom-courses
- Selecione: Done

Pronto o domínio está adicionado.

### Usando o script run_all.sh

Para configurar o sandbox-api clone este projeto, entre na pasta raiz deste projeto e rode este comando:

```
./run_all.sh
```

Agora será necessário reiniciar os containers

### Reiniciando os containers

Para tudo funcionar corretamente dê docker stop em:

```
docker stop mongoDB rabbitmq redis registry gateway bap-network bpp-network bap-client bpp-client sandbox-api
```

Para iniciar corretamente e não dar nenhum erro, inicie os containers utilizando o script que está na raiz do projeto start_containers.sh:

```
./start_containers.sh
```

Pronto seu Sandbox da rede Beckn já deve estar funcionando.

### Agora utilize este repositorio para rodar uma aplicação WEB que vai interagir com o Sandbox da rede beckn.

link: 