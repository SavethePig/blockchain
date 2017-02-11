var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contracts = {};

for (var i = 0; i < contractLocations.length; i++) {
    contracts[contractLocations[i]['name']] = web3.eth.contract(JSON.parse(contractLocations[i]['abi'])).at(contractLocations[i]['address']);
}

var accounts,
    account;

function getAccounts (me, callback, scope) {
    web3.eth.getAccounts(function (err, accs) {
        if (err != null) {
            alert("There was an error fetching your accounts.");
            return;
        }

        if (accs.length == 0) {
            alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
            return;
        }

        accounts = accs;
        account = accounts[me];

        callback.call(scope || this);
    });
}

function refreshBalance() {
    return contract.getBalance.call(account, {from: account}, function(value) {
        var balance_element = document.getElementById("balance");
        balance_element.innerHTML = value ? value.valueOf() : 0;
    });
}
