const CrownTokenCrowdsale = artifacts.require('./CrownTokenCrowdsale.sol');
const CrownToken = artifacts.require('./CrownToken.sol');

module.exports = function (deployer, network, accounts) {
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
    })
    .then(() => {
      return CrownTokenCrowdsale.deployed()
    })
    .then(crowdsale => {
      return crowdsale.token()
        .then(tokenAddress => {
          console.log('tokenAddress', tokenAddress);
          console.log('crowdsale.address', crowdsale.address);
          const crownTokenInstance = CrownToken.at(tokenAddress)    
          return crownTokenInstance.transferOwnership(crowdsale.address)
        })
    })
};