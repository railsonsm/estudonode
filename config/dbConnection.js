var mysql = require('mysql');
var connMysql = function(){
    console.log('Conexao com o banco foi establecida');
    return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connMysql;  
}
