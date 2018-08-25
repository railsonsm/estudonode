//var connection = require('../../config/dbConnection')();

module.exports = function(app){
   
    app.get('/noticias', function(req, res){
        
      app.app.controllers.noticias.noticias(app, req, res);
        //res.render("noticias/noticias");
    });

    app.get('/noticia', function(req, res){
       
        app.app.controllers.noticias.noticia(app, req, res);
        //connection.query("select * from noticias where id_noticias = 1", f);
        //res.render("noticias/noticias");
    });
}

