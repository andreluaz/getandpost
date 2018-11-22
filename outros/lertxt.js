// Read Synchrously
var fs = require("fs");

console.log("\n *INICIO* \n");

var conteudo = fs.readFileSync("info.txt");
console.log("Conteudo do txt : \n"+ conteudo);



console.log("\n *FINAL* \n");