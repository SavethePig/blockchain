var contract = contracts['PurchaseContract'];

window.App = {
    start: function() {
        var self = this;

        //we just use account 1 as participant
        getAccounts(1, function () {
            refreshBalance();
        }, this);

        setParticipantName(1);
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
    injectTargets(2);
    injectProducts();
});
