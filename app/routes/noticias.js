var connection = require('../../config/dbConnection')();

module.exports = function(app){
    app.get('/noticias', function(req, res){
        
        connection.query("select * from noticias", function(erro, result){
            console.log(result);
            
            res.render("noticias/noticias", {noticias : result});
        });
        //res.render("noticias/noticias");
    });
}

