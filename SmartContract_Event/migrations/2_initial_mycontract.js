const Mycontract = artifacts.require("Mycontract");
const Web3 = require('web3');
module.exports = function(deployer) {
  deployer.deploy(Mycontract);
};
