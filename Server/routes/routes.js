var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var assert = require('assert');


var url = 'mongodb://localhost:27017/';

// module.exports = router;

router.get('/get-data', function(req, res, next) {
    res.render('index');
});

router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            db.close();
            res.render('index', {items: resultArray});
        }
        );
    })
})

router.post('/inscription', function(req, res, next) {
    var item = {
        username: req.body.username,
        lastname: req.body.lastname,
        objet: req.body.objet,
        sexe: req.body.sexe
    };

    mongo.connect(url, function(err, db) {

        assert.equal(null, err);
        db.collection('user-data').insertOne(item, function(err, res) {

            assert.equal(null, error);
            console.log('Item inserted');
            db.close();
        });

    });
    res.redirect('/inscription');

});

module.exports = router;