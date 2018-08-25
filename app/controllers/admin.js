module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia");
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body; 

    console.log(noticia);

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(erro, result){      
        console.log(erro);

        res.redirect("/noticias");
    });
}