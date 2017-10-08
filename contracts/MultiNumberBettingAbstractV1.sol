pragma solidity ^0.4.0;

contract MultiNumberBettingAbstractV1 {
  uint constant MAX_BET = 0.0005 ether;
  uint constant MIN_BET = 0.000001 ether;

  function guess(uint8 number, string name) payable returns (bool isCorrect);

  function totalGuesses() returns (uint);

  function getLastWinnerInfo() returns (address winnerAddress, string name, uint timeGuessed, uint ethers);

  function checkWinning(address player) returns (address winnerAddress, string name, uint timeGuessed, uint ethers);
}
