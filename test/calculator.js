const Calculator = artifacts.require('./Calculator.sol');

contract('Calculator', function(accounts) {
  it("should assert true", function(done) {
    let calculator;

    return Calculator.deployed().then((instance) => {
      calculator = instance;
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 10, "Contract initialized with value NOT equal to 10");
      calculator.addToNumber(10);
      calculator.subtractFromNumber(5);
      return calculator.getResult.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 15, "Contract initialized with value NOT equal to 15");
    });
  });
});
