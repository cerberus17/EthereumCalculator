var LocalEthereum = artifacts.require("./LocalEthereum.sol");
/**
 * Test Case
 * 1. Create a winner (John) & a loser (Bob)
 * 2. Get last winner info - it should have John
 * 3. Add another winner (Frank)
 * 4. Get last winner info - it should have Frank
 * 5. Check if Bill is winning - should return false
 */

contract('HelloWorld', function (accounts) {

  it("max size",  function () {
    let escrowContract;

    return LocalEthereum.deployed().then((instance) => {
      escrowContract = instance;
      createValue(escrowContract, accounts[0]);
      createValue(escrowContract, accounts[0]);
      return escrowContract.getValue().call();
    }).then((result) => {
      assert.equal(result.valueOf(), 2, "Huh?");
    })
  });


});

function createValue(escrowContract, account){
  console.log('createEscrow');
  escrowContract.methods.addValue().send({from: account,gas:210000,gasPrice:5000000000})
      .on('transactionHash', function(hash){
        console.log('hash',hash);
      })
      .on('receipt', function(receipt){
        console.log('receipt',receipt);
      })
      .on('confirmation', function(confirmationNumber, receipt){
        console.log('confirmation',confirmationNumber);
      })
      .on('error', console.error);

}
