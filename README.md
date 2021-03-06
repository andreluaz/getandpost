# getandpost
Consumir uma API Json-Server, efetuando um GET e POST na API e usando o Mocha com Should e Expect para efetuar a validação.

## Pré-requisito

É necessário a instalação do node e npm, para instalar digite em seu terminal:

```
brew install node
```

É necessário também a instalação do Json-Server:

```
npm install -g json-server
```

### Clonando o repositório

Clone o Repositório:

```
git clone https://github.com/andreluaz/getandpost.git
```

## Instalação das dependências

Após a clonagem do repositório digite:
```
npm install
```

Isto fará a instalação das dependências necessárias para a execução dos testes.

## Iniciando o json-server

Iniciar o Json-Server:
```
json-server --watch info.json
```

Não esquecer de iniciar o json-server para executar as features.

## Execução dos Testes

Para executar os testes, abra uma nova aba no terminal e digite:

```
mocha getposturl.js
```

## Arquitetura do Projeto

```
├── README.md
├── getposturl.js         - Testes de GET e POST
├── info.json             - Arquivo usado pelo Json-server
├── info.txt              - Leitura dos dados para ser enviado via requisição POST
├── node_modules          - Dependências instaladas
├── package-lock.json     - Versões das dependências instaladas
└── package.json          - Dependências usada no projeto
```

## Referências

Link para maiores informações sobre o mocha: https://mochajs.org/

