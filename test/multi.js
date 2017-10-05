const MultiNumberBettingV1 = artifacts.require('./MultiNumberBettingV1.sol');

contract('MultiNumberBettingV1', function(accounts) {
  it("should assert true", function() {
    let bet;
    return MultiNumberBettingV1.deployed().then((instance) => {
      bet = instance;
      return bet.totalGuesses.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 0, "Betting initialized should be 0");
        bet.guess(1);
      return bet.totalGuesses.call();
    }).then((result) => {
      assert.equal(result.valueOf(), 1, "Betting initialized should be 0");
    });
  });
});

