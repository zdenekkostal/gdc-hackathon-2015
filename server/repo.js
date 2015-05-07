var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/mydb';

exports.addRepo = function(req, res) {
    var repo = req.body;

    mongo.Db.connect(mongoUri, function (err, db) {
        console.log('Adding repo: '+JSON.stringify(repo))

        db.collection('repo', function(err, collection) {
            collection.insert(repo, {safe: true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + JSON.stringify(result[0]));
                    res.send(result[0]);
                }
            });
        });
    });
}


exports.findAll = function(req, res) {
    mongo.Db.connect(mongoUri, function (err, db) {
        db.collection('repo', function(err, collection) {
            collection.find().toArray(function(err, repos) {
                res.send(repos);
            });
        });
    });
};
