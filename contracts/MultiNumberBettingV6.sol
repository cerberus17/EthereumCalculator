pragma solidity ^0.4.0;

import "./MultiNumberBettingAbstractV2.sol";

contract MultiNumberBettingV6 is MultiNumberBettingAbstractV2 {
  struct Winner {
    address winnerAddress;
    string name;
    uint8 guess;
    uint guessAt;
    uint weiReceived;
  }

  mapping(address => Winner) winners;

  uint loserCount = 0;
  uint winnerCount = 0;

  address lastWinner;

  uint8[3] numbers;

  function MultiNumberBettingV6(uint8 v1, uint8 v2, uint8 v3) MultiNumberBettingAbstractV2(msg.sender) {
    numbers[0] = v1;
    numbers[1] = v2;
    numbers[2] = v3;
  }


  function guess(uint8 number, string name) payable balanceCheck returns (bool) {
    assert(msg.value <= MAX_BET && msg.value >= MIN_BET);
    assert(number < 11);

    Winner memory w;

    for (uint8 i = 0; i < numbers.length; i++) {
      if (numbers[i] == number) {
        w.winnerAddress = msg.sender;
        w.guess = number;
        w.name = name;
        w.guessAt = now;
        w.weiReceived = msg.value * 2;

        winners[w.winnerAddress] = w;

        lastWinner = w.winnerAddress;

        msg.sender.transfer(w.weiReceived);
        break;
      }
    }

    w.winnerAddress != 0x0 ? winnerCount++ : loserCount++;

    return w.winnerAddress != 0x0;
  }

  function totalGuesses() returns (uint) {
    return loserCount + winnerCount;
  }

  function getLastWinnerInfo() returns (address winnerAddress, string name, uint timeGuessed, uint ethers) {
    return checkWinning(lastWinner);
  }

  function checkWinning(address player) returns (address winnerAddress, string name, uint timeGuessed, uint weiWon) {
    Winner storage w = winners[player];

    if (w.winnerAddress != 0x0) {
      winnerAddress = lastWinner;
      name = w.name;
      timeGuessed = w.guessAt;
      weiWon = w.weiReceived;
    }

    return (winnerAddress, name, timeGuessed, weiWon);
  }

  function ownerWithdraw(uint amount) ownerOnly returns (bool) {
    if (amount < (MAX_BET * 2) && amount < this.balance) {
      ownerAddress.transfer(amount);
    }

    return false;
  }

  function getBalance() returns (uint) {
    return this.balance;
  }
  function getNumbers() returns (uint8, uint8, uint8) {
    return (numbers[0], numbers[1], numbers[2]);
  }
}
