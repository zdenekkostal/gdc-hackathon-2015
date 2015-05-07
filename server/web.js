var express = require('express');
var path = require('path');
var repo = require('./repo.js');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(serveStatic(path.join(__dirname, '../build')));

app.get('/repo', repo.findAll);
app.post('/repo', repo.addRepo);

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Listening on ' + port);
});

