pragma solidity ^0.4.8;

contract FlexBudgetContract {

    address owner;
    mapping (address => uint) public balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function FlexBudgetContract() {
        owner = msg.sender;
        balances[tx.origin] = 10000;
    }

    function deposit(address deelnemer, uint amount) {
      Transfer(owner, deelnemer, amount);
      balances[owner] -= amount;
      balances[deelnemer] += amount;
    }

    function buyProduct(address deelnemer, address supplier, uint price) {
       Transfer(deelnemer, supplier, price);
       balances[deelnemer] -= price;
       balances[supplier] += price;
    }

    function getBalance() constant returns (uint) {
      return balances[owner];
    }

    function getBalanceDeelnemer(address deelnemer) constant returns (uint) {
      return balances[deelnemer];
    }

}