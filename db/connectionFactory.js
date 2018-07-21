var config = require('../config')

function createConnection(){

    var mysql = require('mysql')
    
    var conexao = mysql.createConnection({
        database: config.DB_NAME,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        port: config.DB_PORT,
        host: config.DB_HOST
    })
    return conexao
}

module.exports = {
    getConnection: createConnection
}