var request = require("request");

request('http://localhost:3000/usuarios', function (err,res, body) {
    
    //console.log(err);
    
    //console.log(res);

    console.log(body);

    var jsonConteudo = JSON.parse(body);
    
    console.log("id:", jsonConteudo.id);
    console.log("nome:", jsonConteudo.nome);
    console.log("local:", jsonConteudo.location);


});