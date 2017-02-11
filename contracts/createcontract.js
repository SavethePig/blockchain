let Web3 = require('web3');
let fs = require('fs');
let path = require("path");
let solc = require('solc');
let db = new require('../database/mysql.js');

// let web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.99.100:8545")),
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")),
    acc = web3.eth.accounts,
    contractLocation‌ = path.join(__dirname, 'FlexBudget.sol'),
    contractData = fs.readFileSync(contractLocation‌, 'utf8').replace(/\n/g, '');

//web3.personal.unlockAccount(acc[0], "g3heimpje");
function createContract (address, abi, code, name) {

    let contractClass = web3.eth.contract(abi);

    let contractInst = contractClass.new({ from: address, data: code, gas: 500000 }, function(e, contract){
        if(!e) {

            if(!contract.address) {
                console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
            } else {

                new db().doQuery('insert into contracts (address, abi, code, `from`, name) values ("' + contract.address + '",\'' + JSON.stringify(abi) + '\',"' + code + '", "' + acc[0] + '","' + name + '")',
                    function (error, results, fields) {
                        console.log("Contract mined and address store in db");
                    });
                }
        }
    });
}

let compiled = solc.compile(contractData, 1);
let abi = JSON.parse(compiled.contracts[':FlexBudgetContract'].interface);
let code = compiled.contracts[':FlexBudgetContract'].bytecode;

createContract(acc[0], abi, code, 'FlexBudgetContract');

compiled = solc.compile(contractData, 1);
abi = JSON.parse(compiled.contracts[':PurchaseContract'].interface);
code = compiled.contracts[':PurchaseContract'].bytecode;

createContract(acc[1], abi, code, 'PurchaseContract');




