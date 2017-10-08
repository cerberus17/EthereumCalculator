pragma solidity ^0.4.0;

import "./MultiNumberBettingAbstractV1.sol";

contract MultiNumberBettingV5 is MultiNumberBettingAbstractV1 {
  struct Winner {
    address winnerAddress;
    string name;
    uint8 guess;
    uint guessAt;
    uint ethersReceived;
  }

  mapping(address => Winner) winners;

  uint loserCount = 0;
  uint winnerCount = 0;

  address lastWinner;

  uint8[3] numbers;

  function MultiNumberBettingV5(uint8 v1, uint8 v2, uint8 v3) {
    numbers[0] = v1;
    numbers[1] = v2;
    numbers[2] = v3;
  }

  function guess(uint8 number, string name) payable returns (bool isCorrect) {
    assert(msg.value <= MAX_BET && msg.value >= MIN_BET);
    assert(number < 11);

    for (uint8 i = 0; i < numbers.length; i++) {
      if (numbers[i] == number) {
        isCorrect = true;

        Winner memory w;

        w.winnerAddress = msg.sender;
        w.guess = number;
        w.name = name;
        w.guessAt = now;
        w.ethersReceived = msg.value * 2;

        winners[w.winnerAddress] = w;

        lastWinner = w.winnerAddress;

        break;
      }
    }

    isCorrect ? winnerCount++ : loserCount++;
  }

  function totalGuesses() returns (uint) {
    return loserCount + winnerCount;
  }

  function getLastWinnerInfo() returns (address winnerAddress, string name, uint timeGuessed, uint ethers) {
    return checkWinning(lastWinner);
  }

  function checkWinning(address player) returns (address winnerAddress, string name, uint timeGuessed, uint ethers) {
    Winner storage w = winners[player];

    if (w.winnerAddress != 0x0) {
      winnerAddress = lastWinner;
      name = w.name;
      timeGuessed = w.guessAt;
      ethers = w.ethersReceived;
    }

    return (winnerAddress, name, timeGuessed, ethers);
  }
}
