# getandpost
Consumir uma API Json-Server usando GET and POST

## Pré-requisito

É necessário a instalação do Json-Server, sua instalação poderá ser seguida neste link abaixo:
https://github.com/danilopolicarpos/Httparty

## Clonando o repositório

Para fazer uma cópia "clone" do repositório é necessário a instalação do git para isto basta seguir os passos deste link abaixo:
https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git

Após a instalação do git digite:
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

Para usar, não esquecer de iniciar o json-server e então digite.

```
mocha getposturl.js
```
