pragma solidity ^0.4.8;

contract AflosbaarProduct {
  uint balance;

  function losAf(uint amount) {
     if (balance > amount) throw;
     balance -= amount;
  }
}

contract MortgageContract is AflosbaarProduct {}
contract SolarContract is AflosbaarProduct {}

contract Supplier {
  // Bank of leverancier

  address owner;

  function Supplier() {
     owner = msg.sender();
  }
}

contract SupplierForSolarContract is Supplier {}
contract SupplierForMortgagesContract is Supplier {}

contract FlexBudgetContract {

    address owner; // Deelnemer
    uint balance; // Totaal balans waarmee aflossingen kunnen worden gedaan voor deze deelnemer
    mapping(address => AflosbaarProduct) public producten; // Aflosbare producten van toepassing voor deze deelnemer

    function FlexBudgetContract() {
        owner = msg.sender;
    }

    function losAf(address aflosbaarProduct, uint amount) {
      if (msg.sender() != owner) {
        throw; // onbekende deelnemer
      }
      AflosbaarProduct product = producten[aflosbaarProduct];
      if (product) {
          product.losAf(amount);
          balance -= amount;
      } else {
          throw; // Product niet gevonden
        }
   }

    function getBalance() constant returns (uint) {
        return balance;
    }

    function getAflosbareProducten() contract returns () {
       return producten;
    }
}

