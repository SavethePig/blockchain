pragma solidity ^0.4.8;

contract FlexBudgetContract {

    address owner; // Pensioenfonds

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function FlexBudgetContract() {
        owner = msg.sender;
    }

    function deposit(address deelnemer, uint amount) {
      // Pre / postcondities

      Transfer(owner, deelnemer, amount);
    }

}

contract PurchaseContract {

    address owner; // Deelnemer

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function PurchaseContract() {
        owner = msg.sender;
    }

    function buyProduct(address supplier, uint price) {
          // Pre / postcondities
          // product

          Transfer(owner, supplier, price);
    }


}