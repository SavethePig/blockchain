var express = require('express');
var router = express.Router();
let fs = require('fs');
let path = require("path");
let db = new (require('../database/mysql.js'))();

function retrieveTargets (res) {

    let contracts = db.doQuery('select * from targets', function (error, results, fields) {

        res.send('var targets = ' + JSON.stringify(results));
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    retrieveTargets(res);

});

module.exports = router;
