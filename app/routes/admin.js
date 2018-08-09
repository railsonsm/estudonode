module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body; 

        console.log(noticia);

       

      

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
    
        noticiasModel.salvarNoticia(noticia, function(erro, result){      
            console.log(erro);

            res.redirect("/noticias");
        });
    });


   
}

