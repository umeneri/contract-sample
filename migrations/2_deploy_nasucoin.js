const nasu = artifacts.require("NasuERC20");

module.exports = function (deployer) {
  const initSupply = 1000000;

  deployer.deploy(nasu, initSupply, {
    gas: 2000000,
  });
};
