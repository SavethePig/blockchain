var express = require('express');
var router = express.Router();

let Web3 = require('web3');
let fs = require('fs');
let path = require("path");
let solc = require('solc');
let db = new (require('../database/mysql.js'))();

function retrieveContracts (res) {

      let contracts = db.doQuery('select * from contracts', function (error, results, fields) {

      var services = {};

      for (let i = 0; i < results.length; i++) {
          let contract = web3.eth.contract(JSON.parse(results[i]['abi'])).at(results[i]['address']);
          services[results[i].name] = contract;
      }

      debugger;

      res.render('index', { title: 'Express' });

    });

}

/* GET home page. */
router.get('/', function(req, res, next) {
  retrieveContracts(res);

});

module.exports = router;
