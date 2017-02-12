pragma solidity ^0.4.8;

contract FlexBudgetContract {

    address owner;
    uint balance;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function FlexBudgetContract() {
        owner = msg.sender;
    }

    function deposit(address deelnemer, uint amount) {
      Transfer(owner, deelnemer, amount);
      balance -= amount;
    }

    function getBalance() constant returns (uint) {
      return balance;
    }

}

contract PurchaseContract {

    address owner;
    uint balance;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function PurchaseContract() {
        owner = msg.sender;
    }

    function buyProduct(address supplier, uint price) {
          Transfer(owner, supplier, price);
          balance -= price;
    }

    function getBalance() constant returns (uint) {
          return balance;
    }
}
