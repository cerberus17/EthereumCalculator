pragma solidity ^0.4.19;

contract LoopExample {
  function() public payable {

  }

  function constantLoop(uint256 iterations) public pure returns (uint256) {
    uint256 someVal;

    for (uint256 i = 0; i < iterations; i++) {
      someVal += i;
    }

    return someVal;
  }
}
