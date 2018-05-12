var CrownToken = artifacts.require("CrownToken");

module.exports = function (deployer) {
  deployer.deploy(CrownToken);
};