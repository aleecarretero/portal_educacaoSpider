var request = require('request');
var cheerio = require('cheerio');
var fs =      require('fs');

request('https://www.portaleducacao.com.br/cursos?utm_campaign=cursos&utm_medium=header-menu&utm_source=uol', function(err, res, body){
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    $('.box.listaProdutos div.prateleira').each(function(){

        var title = $(this).find('h2').text().trim().toUpperCase();

        console.log(title);

        var list = cheerio.load(list(this).html());

        list('ul li.cursos-online-de-informatica-e-tecnologia---portal-educacao').each(function(){

            var categoria = list(this).html().find('div.categoriaProduto').text().trim();
            var nome = list(this).html().find('div.nomeProduto').text().trim();
            var cargaHoraria = list(this).html().find('div.cargaHoraria').text().trim();
            var precoDe = list(this).html().find('div.precoDe').text().trim();
            var precoAtual = list(this).html().find('div.precoPor').text().trim();

        });
    });
});
