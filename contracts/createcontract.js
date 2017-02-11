let Web3 = require('web3');
let fs = require('fs');
let path = require("path");
let solc = require('solc');
let db = new require('../database/mysql.js');

let web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.99.100:8545")),
    acc = web3.eth.accounts,
    contractLocation‌ = path.join(__dirname, 'greeting'),
    contractData = fs.readFileSync(contractLocation‌, 'utf8').replace(/\n/g, '');

let greeterCompiled = solc.compile(contractData, 1);

let abi = JSON.parse(greeterCompiled.contracts[':greeter'].interface);
let code = greeterCompiled.contracts[':greeter'].bytecode;

let _greeting = "Hello World!";
let greeterContract = web3.eth.contract(abi);

 web3.personal.unlockAccount(acc[0], "g3heimpje");

let greeter = greeterContract.new(_greeting,{ from: acc[0], data: '0x'+code, gas: 300000 }, function(e, contract){
    if(!e) {

        if(!contract.address) {
            console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

        } else {

            new db().doQuery('insert into contracts (address, abi, code, `from`) values ("' + contract.address + '",\'' + JSON.stringify(abi) + '\',"' + code + '", "' + acc[0] + '")',
            function (error, results, fields) {
                debugger;
            });
        }
    }
});

