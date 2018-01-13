const Calculator = artifacts.require('./Calculator.sol');

contract('Calculator', function(accounts) {
  it("should assert true", function() {
    console.log("HERE! " + web3.utils.hexToNumber(0xa));
    let calculator;
    return Calculator.deployed().then((instance) => {
      calculator = instance;
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 10, "Contract initialized with value NOT equal to 10!!!");
      calculator.addToNumber(10);
      calculator.subtractFromNumber(5);
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 15, "Contract initialized with value NOT equal to 15!!!");
      calculator.multiplyWithNumber(10);
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 150, "Contract initialized with value NOT equal to 150");
      calculator.divideByNumber(5);
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 30, "Contract initialized with value NOT equal to 30");
      calculator.double();
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 60, "Contract initialized with value NOT equal to 60");
      calculator.half();
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 30, "Contract initialized with value NOT equal to 30");
    });
  });
});

