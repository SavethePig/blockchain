var contract = contracts['FlexBudgetContract'];

window.App = {
    start: function() {
        var self = this;

        //we just use account 1 as participant
        getAccounts(1, function () {
            refreshBalanceDeelnemer();
        }, this);

        setParticipantName(1);
    },

    setStatus: function(message) {
        var status = document.getElementById("status");
        status.innerHTML = message;
    },

    buy: function() {
        var self = this,
            amount = parseInt(document.getElementById("products").value),
            receiver = document.getElementById("receiver").value;

        this.setStatus("Initiating transaction... (please wait)");

        return contract.buyProduct(account, receiver, amount, {from: account}, function () {
            self.setStatus("Transaction complete!");
            refreshBalanceDeelnemer();
        });
    }
};

window.addEventListener('load', function() {
    App.start();
    injectTargets(2);
    injectProducts();
});
