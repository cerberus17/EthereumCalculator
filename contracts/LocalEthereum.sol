pragma solidity ^0.4.18;
contract LocalEthereum {

  event Created(bytes32 _tradeHash);
  uint32 value = 0;

  function addValue()  external {

    value = value + 1;
    Created(0x01);
  }

  function getValue()  returns (uint)  {

    return value;
  }
}