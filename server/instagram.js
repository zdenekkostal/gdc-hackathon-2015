var httpRequest = require('request');
var fs = require('fs');

var instagramAPI = 'https://api.instagram.com/v1/tags/gooddata/media/recent/?access_token=2433696.ab103e5.83f950f1a3a94f5b8bb2c3145011cafa';

exports.provide = function(request, response) {
    fs.exists('./instagram-cache', function (exists) {
        if (!exists){
            response.send({"error": 'cache is empty'});
            return;
        }

        var contents = fs.readFileSync('./instagram-cache').toString();
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Content-Type', 'application/json');
        response.send(contents);
    });
};

exports.cache = function(request, response) {
    httpRequest(instagramAPI, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Content-Type', 'application/json');
            response.send(body);

            fs.writeFile("./instagram-cache", body, function(err) {
                if (err) response.send({"error": err});
            });
        }else{
            response.send({"error": error, "statusCode": res.statusCode, "response": res});
        }
    });
};