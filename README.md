# getandpost
Consumir uma API Json-Server, efetuando um GET e POST na API e usando o Mocha com Should e Expect para efetuar a validação.

## Pré-requisito

É necessário a instalação do Json-Server, para instalar digite em seu terminal:

```
npm install -g json-server
```

Também é necessário a instalação do Bundle:

```
gem install bundler
```

### Clonando o repositório

Clone o Repositório:

```
git clone https://github.com/andreluaz/getandpost.git
```

## Instalação das dependências:

Após a cópia "clonagem" do repositório digite:
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

Para executar os testes abra uma nova aba no terminal e digite:

```
mocha getposturl.js
```

## Arquitetura do Projeto

## Referências:

Link para maiores informações sobre o mocha: https://mochajs.org/

