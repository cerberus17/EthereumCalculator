pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with

contract HelloWorld {
  uint256 myId;

  function test(uint256 id) public payable {
    if (msg.value < 4000) revert();

    myId = id;
  }
}