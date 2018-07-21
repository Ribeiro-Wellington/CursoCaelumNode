var createConnection = require("../db/connectionFactory")

module.exports = function (server){
    server.get("/produtos", function trataPedidos(request, resposta){
        var conexao = createConnection.getConnection()
        
        conexao.query('SELECT * FROM LIVROS', function processaResultados(erro, livros){
            if(!erro){
                resposta.render("produtos/lista.ejs", {
                    livros: livros 
                })      
            } else {
                resposta.send(erro)
            }
            conexao.end();
        })
    })
}