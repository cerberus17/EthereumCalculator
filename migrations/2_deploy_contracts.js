const Calculator = artifacts.require("./Calculator.sol");
const MultiNumberBettingV1 = artifacts.require("./MultiNumberBettingV1.sol");
const MultiNumberBettingV2 = artifacts.require("./MultiNumberBettingV2.sol");
const MultiNumberBettingV3 = artifacts.require("./MultiNumberBettingV3.sol");
const MultiNumberBettingV4 = artifacts.require("./MultiNumberBettingV4.sol");

module.exports = function(deployer) {
  deployer.deploy(Calculator, 10);
  deployer.deploy(MultiNumberBettingV1, 3, 6, 2);
  deployer.deploy(MultiNumberBettingV2, 3, 6, 2);
  deployer.deploy(MultiNumberBettingV3, 3, 6, 2);
  deployer.deploy(MultiNumberBettingV4, 1, 3, 9);
};
