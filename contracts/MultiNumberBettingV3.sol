pragma solidity ^0.4.0;

contract MultiNumberBettingV3 {
  uint loserCount = 0;
  uint winnerCount = 0;

  string lastWinnerName = "***";

  uint lastWinnerAt;

  address winner;

  uint8[3] numbers;

  function MultiNumberBettingV3(uint8 v1, uint8 v2, uint8 v3) {
    numbers[0] = v1;
    numbers[1] = v2;
    numbers[2] = v3;
  }

  function guess(uint8 number, string name) returns (bool isCorrect) {
    assert (number < 11);

    for (uint8 i = 0; i < numbers.length; i++) {
      if (numbers[i] == number) {
        isCorrect = true;
        lastWinnerName = name;
        lastWinnerAt = now;
        winner = msg.sender;
        break;
      }
    }

    isCorrect ? winnerCount++ : loserCount++;
  }

  function totalGuesses() returns (uint) {
    return loserCount + winnerCount;
  }

  function getLastWinner() returns (string winnerShort) {
    bytes memory lastWinnerNameBytes = bytes(lastWinnerName);

    if (lastWinnerNameBytes.length < 4)
      winnerShort = lastWinnerName;
    else {
      // Fuck string/byte array manipulation in Solidity. This is stupid. USE STRING UTILS!!
      bytes memory winnerShortBytes = new bytes(3);

      for (uint8 i = 0; i < 3; i++)
        winnerShortBytes[i] = lastWinnerNameBytes[i];

      winnerShort = string(winnerShortBytes);
    }
  }

  function getLastWinnerTime() returns (uint time) {
    time = lastWinnerAt;
  }

  function daysSinceLastWinning()  returns (uint){
    return (now - lastWinnerAt*1 days);
  }

  function hoursSinceLastWinning() returns (uint){
    return (now - lastWinnerAt*1 hours);
  }

  function  minutesSinceLastWinning() returns (uint){
    return (now - lastWinnerAt*1 minutes);
  }
}
