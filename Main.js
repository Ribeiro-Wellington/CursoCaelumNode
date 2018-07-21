//Modulo
var server = require("./server")
var config = require("./config")
//
//Async não trava a Thread principal
//começou a pedir para o SO
// lambda //Função anonima
var porta = config.CDC_PORT // buscando do arquivo de configcle
//buscando da variavel de ambiente ($Env:CDC_port=3000 ;node Server.js)
//var porta = process.env.CDC_port
server.listen(porta, function(){
    console.log("Server em execução na Porta " + porta)
})