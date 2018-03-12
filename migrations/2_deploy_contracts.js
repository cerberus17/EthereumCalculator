//var HelloWorld = artifacts.require("./HelloWorld.sol");
//var MinTest = artifacts.require("./MinTest.sol");
//var LoopExample = artifacts.require("./LoopExample.sol");
var SimpleContract = artifacts.require("./SimpleContract.sol");

module.exports = function(deployer) {
//  deployer.deploy(HelloWorld).then(() => {
//    return deployer.deploy(MinTest, HelloWorld.address);
//  });

//  deployer.deploy(MinTest);
//  deployer.deploy(LoopExample);
  deployer.deploy(SimpleContract);
//  deployer.deploy(Reservations);
};
