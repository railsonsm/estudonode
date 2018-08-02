//var connection = require('../../config/dbConnection')();

module.exports = function(app){
   
    app.get('/noticia', function(req, res){
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function(erro, result){          
            res.render("noticias/noticia", {noticia : result});
        })

        //connection.query("select * from noticias where id_noticias = 1", f);
        //res.render("noticias/noticias");
    });
}

