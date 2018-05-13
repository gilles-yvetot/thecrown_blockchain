const CrownTokenCrowdsale = artifacts.require('./CrownTokenCrowdsale.sol');
const CrownToken = artifacts.require('./CrownToken.sol');

module.exports = function(deployer, network, accounts) {
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];

    return deployer
        .then(() => {
            return deployer.deploy(CrownToken);
        })
        .then(() => {
            return deployer.deploy(
                CrownTokenCrowdsale,
                rate,
                wallet,
                CrownToken.address
            );
        });
};