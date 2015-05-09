var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var serveStatic = require('serve-static');

var repo = require('./repo.js');
var instagram = require('./instagram.js');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, '../build')));

app.get('/repo', repo.findAll);
app.post('/repo', repo.addRepo);

app.get('/instagram', instagram.provide);
app.get('/insta', instagram.cache);

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Listening on ' + port);
});

