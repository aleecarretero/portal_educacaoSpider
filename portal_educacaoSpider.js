var request = require('request');
var cheerio = require('cheerio');
var fs =      require('fs');

request('https://www.portaleducacao.com.br/cursos?utm_campaign=cursos&utm_medium=header-menu&utm_source=uol', function(err, res, body){
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    console.log('hello');


    $('.box.listaProdutos div.prateleira').each(function(){

        var title = $(this).find('h2').text().trim().toUpperCase();

        console.log(title);

        var list = cheerio.load($(this));

        list('.slick-slider li.slick-slide').each(function(){

            console.log('list(this)'+list(this)+'\n--------------------------------------------------------------------------');
        });
    });
});
