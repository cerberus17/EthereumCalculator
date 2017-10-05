const Calculator = artifacts.require("./Calculator.sol");
const MultiNumberBettingV1 = artifacts.require("./MultiNumberBettingV1.sol");

module.exports = function(deployer) {
  deployer.deploy(Calculator, 10);
  deployer.deploy(MultiNumberBettingV1, 3, 6, 2);
};
