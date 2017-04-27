var request = require('request');
var cheerio = require('cheerio');

request('http://originbooks.herokuapp.com/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('div.panel').each(function(i, element){
        var a = $(this);
        var title = a.children('.panel-heading').text().trim();
        var author = a.children().children('p').text();
        var imageUrl = a.children().children('img').attr('src');
        var price = a.children().children('.green').text();
        var metadata = {
            title: title,
            author: author,
            imageUrl: imageUrl,
            pring: price
        };
        console.log(metadata);
    });
  };
});