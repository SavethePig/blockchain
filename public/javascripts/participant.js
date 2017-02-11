var contract = contracts['PurchaseContract'];

window.App = {
    start: function() {
        var self = this;

        getAccounts(1, function () {
            refreshBalance();
        }, this);
    },

    setStatus: function(message) {
        var status = document.getElementById("status");
        status.innerHTML = message;
    },

    deposit: function() {
        var self = this,
            amount = parseInt(document.getElementById("amount").value),
            receiver = document.getElementById("receiver").value;

        this.setStatus("Initiating transaction... (please wait)");

        return contract.deposit(receiver, amount, {from: account}, function () {
            self.setStatus("Transaction complete!");
            refreshBalance();
        });
    }
};

window.addEventListener('load', function() {
    App.start();
});
