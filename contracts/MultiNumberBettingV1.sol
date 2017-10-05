pragma solidity ^0.4.0;

contract MultiNumberBettingV1 {
  uint loserCount = 0;
  uint winnerCount = 0;

  uint8[3] numbers;

  function MultiNumberBettingV1(uint8 v1, uint8 v2, uint8 v3) {
    numbers[0] = v1;
    numbers[1] = v2;
    numbers[2] = v3;
  }

  function guess(uint8 number) returns (bool) {
    bool retval;

    for (uint8 i = 0; i < numbers.length; i++) {
      if (numbers[i] == number) {
        retval = true;
        break;
      }
    }

    retval ? winnerCount++ : loserCount++;
  }

  function totalGuesses() returns (uint) {
    return loserCount + winnerCount;
  }
}
