pragma solidity ^0.4.8;

contract FlexBudgetContract {

    address owner;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function FlexBudgetContract() {
        owner = msg.sender;
    }

    function deposit(address deelnemer, uint amount) {
      Transfer(owner, deelnemer, amount);
    }

    function getBalance() constant returns (uint) {
      return this.balance;
    }

}

contract PurchaseContract {

    address owner;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function PurchaseContract() {
        owner = msg.sender;
    }

    function buyProduct(address supplier, uint price) {
          Transfer(owner, supplier, price);
    }

    function getBalance() constant returns (uint) {
          return this.balance;
    }
}