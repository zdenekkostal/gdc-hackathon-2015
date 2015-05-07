var express = require('express');
var path = require('path');
var repo = require('./repo.js');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var serveStatic = require('serve-static');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser());
app.use(serveStatic(path.join(__dirname, '../build')));

app.get('/repo', repo.findAll);
app.post('/repo', repo.addRepo);

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Listening on ' + port);
});

