
var fs = require("fs");

console.log("\n *INICIO* \n");

var conteudo = fs.readFileSync("info.json");

var jsonConteudo = JSON.parse(conteudo);

console.log(jsonConteudo);

console.log("id:", jsonConteudo.usuarios.id);
console.log("nome:", jsonConteudo.usuarios.nome);
console.log("local:", jsonConteudo.usuarios.location);


console.log("\n *FIM* \n");