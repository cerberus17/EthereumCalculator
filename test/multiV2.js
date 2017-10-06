const MultiNumberBettingV2 = artifacts.require('./MultiNumberBettingV2.sol');

contract('MultiNumberBettingV2', function(accounts) {
  it("should assert true", function() {
    let bet;
    return MultiNumberBettingV2.deployed().then((instance) => {
      bet = instance;
      return bet.totalGuesses.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 0, "Betting initialized should be 0");
      bet.guess(6, "Adam");
      bet.guess(1, "Jill");
      return bet.totalGuesses.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 2, "Total guesses should be 2");
      return bet.getLastWinner.call();
    }).then((result) => {
      assert.equal(result.valueOf(), "Ada", "Adam should have won");
    });
  });
});

