pragma solidity ^0.4.19;

contract SimpleContract {
  uint public _value;

  function setValue(uint v) public
  {
    _value = v;
  }

  function getValue() public returns(uint)
  {
    return _value;
  }
}