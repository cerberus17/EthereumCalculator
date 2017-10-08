var MultiNumberBettingV6 = artifacts.require("./MultiNumberBettingV6.sol");

/**
 * Test Case
 * 1. Create a winner (John) & a loser (Bob)
 * 2. Get last winner info - it should have John
 * 3. Add another winner (Frank)
 * 4. Get last winner info - it should have Frank
 * 5. Check if Bill is winning - should return false
 */

contract('MultiNumberBettingV6', function(accounts) {

  var johns_address = accounts[0];
  var bills_address = accounts[1];
  var franks_address= accounts[2];

  it("should assert true", function() {
    var betting;
    return MultiNumberBettingV6.deployed().then(function(instance) {
      betting = instance;

      web3.eth.sendTransaction({from: bills_address, to: betting.address, value: web3.toWei(.00002, "ether")});
      console.log("John's balance: " + web3.eth.getBalance(johns_address));
      // console.log("Betting " + JSON.stringify(betting));
      return betting.getBalance.call();
    }).then((result) => {
      console.log("Contract initial balance " + result);
      assert.equal(result.valueOf(), web3.toWei(.00002, "ether"), "Initial contract balance should be .00002 ether");
      betting.guess(8, "John", {
        from: johns_address,
        value: web3.toWei(.000006, "ether")
      });
      return betting.getBalance.call();
    }).then((result) => {
      console.log("New balance " + result.valueOf());
      assert.equal(result.valueOf(), web3.toWei(.000026, "ether"), "Balance after losing bet should be .000026 ether");
      betting.guess(2, "John", {
        from: johns_address,
        value: web3.toWei(.000006, "ether")
      });
      return betting.getBalance.call();
    }).then((result) => {
      console.log("New balance " + result.valueOf());
      assert.equal(result.valueOf(), web3.toWei(.00002, "ether"), "Balance after winning bet should be .00002 ether");
    })
  });
});