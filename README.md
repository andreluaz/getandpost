# getandpost
Consumir uma API Json-Server, efetuando um GET e POST na API e usando o supertest e validando com should e expect.

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

## Iniciando o json-server

Após a cópia "clonagem" do repositório e a instalação do Json-Server digite:
```
json-server --watch info.json
```

## Instalação das dependências:

Após a cópia "clonagem" do repositório digite:
```
npm install
```

Isto fará a instalação das dependências necessárias para a execução dos testes.

## Uso:

Para executar, não esquecer de iniciar o json-server e então digite:

```
mocha getposturl.js
```
