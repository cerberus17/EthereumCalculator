var HelloWorld = artifacts.require("./HelloWorld.sol");
var Reservations = artifacts.require("./HotelReservation");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Reservations);
};