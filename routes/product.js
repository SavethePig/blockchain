var express = require('express');
var router = express.Router();
let fs = require('fs');
let path = require("path");
let db = new (require('../database/mysql.js'))();

function retrieveContracts (res) {

    let contracts = db.doQuery('select * from products', function (error, results, fields) {

        res.send('var products = ' + JSON.stringify(results));
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    retrieveContracts(res);

});

module.exports = router;
