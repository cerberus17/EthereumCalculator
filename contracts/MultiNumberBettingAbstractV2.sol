pragma solidity ^0.4.0;

contract MultiNumberBettingAbstractV2 {
  uint constant MAX_BET = 0.0005 ether;
  uint constant MIN_BET = 0.000001 ether;

  address ownerAddress;

  modifier balanceCheck {
    if ((msg.value * 2) < this.balance) {
      _;
    }
    else {
      revert();
    }
  }

  modifier ownerOnly {
    if (msg.sender == ownerAddress) {
      _;
    }
    else {
      revert();
    }
  }

  function MultiNumberBettingAbstractV2(address owner) {
    ownerAddress = owner;
  }

  function() payable {
  }

  function guess(uint8 number, string name) payable balanceCheck returns (bool isCorrect);

  function totalGuesses() returns (uint);

  function getLastWinnerInfo() returns (address winnerAddress, string name, uint timeGuessed, uint ethers);

  function checkWinning(address player) returns (address winnerAddress, string name, uint timeGuessed, uint ethers);

  function ownerWithdraw(uint amount) ownerOnly returns (bool);
}
