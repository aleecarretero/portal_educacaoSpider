var request = require('request');
var cheerio = require('cheerio');
var fs =      require('fs');

request('https://www.portaleducacao.com.br/cursos?utm_campaign=cursos&utm_medium=header-menu&utm_source=uol', function(err, res, body){
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    $('.box.listaProdutos div.prateleira').each(function(){

        var title = $(this).find('h2').text().trim().toUpperCase();

        // console.log(title);

        $('ul li.cursos-online-de-informatica-e-tecnologia---portal-educacao').each(function(){

            var categoria = $(this).find('div.categoriaProduto').text().trim();
            var nome = $(this).find('div.nomeProduto').text().trim();
            var cargaHoraria = $(this).find('div.cargaHoraria').text().trim();
            var precoDe = $(this).find('div.precoDe').text().trim();
            var precoAtual = $(this).find('div.precoPor').text().trim();

            fs.appendFile('extract.txt', title + '\n'+ categoria + '\n' + nome + '\n' + cargaHoraria+ '\n' +precoDe+ '\n' +precoAtual+ '\n-----------------\n', (err) => {
                if (err) console.log(err);
            });
        });
    });
});
