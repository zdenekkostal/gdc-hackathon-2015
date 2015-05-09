var httpRequest = require('request');
var fs = require('fs');
var Twitter = require('twitter');

var twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONS_KEY,
    consumer_secret: process.env.TWITTER_CONS_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var hashtag = 'AllDataHack2015';
var cacheFile = './twitter-cache';

exports.provide = function(request, response) {
    fs.exists(cacheFile, function (exists) {
        if (!exists){
            response.send({"error": 'cache is empty'});
            return;
        }

        var contents = fs.readFileSync(cacheFile).toString();
        // response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Content-Type', 'application/json');
        response.send(contents);
    });
};

exports.cache = function(request, response) {
    twitterClient.get('search/tweets', {q: '#'+hashtag}, function(error, body, res){
        if (!error && res.statusCode == 200) {
            // response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Content-Type', 'application/json');
            response.send(body);

            fs.writeFile(cacheFile, JSON.stringify(body), function(err) {
                if (err) response.send({"error": err});
            });
        }else{
            response.send({"error": error, "statusCode": res.statusCode, "response": res});
        }
    });
};