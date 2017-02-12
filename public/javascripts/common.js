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
    return contract.getBalance(function(som, value) {
        var balance_element = document.getElementById("balance");
        balance_element.innerHTML = value ? value.c[0] : 0;
    });
}

function injectTargets (type) {
    var select = document.getElementById('receiver');

    for (var i = 0; i < targets.length; i++ ) {

        if (targets[i].contracttype == type) {
            var opt = document.createElement('option');
            opt.value = targets[i]['address'];
            opt.innerHTML = targets[i]['name'];
            select.appendChild(opt);
        }
    }
}

function setParticipantName (me) {
    var h = document.getElementById('participant');
    h.innerHTML = targets[me]['name'];
}

function injectProducts () {
    var select = document.getElementById('products');

    for (var i = 0; i < products.length; i++ ) {

            var opt = document.createElement('option');
            opt.value = products[i]['price'];
            opt.innerHTML = products[i]['name'] + ' (' + products[i]['price'] + ' EURO )';
            select.appendChild(opt);
    }
}