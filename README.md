# The Crown - Backend - Blockchain

## Getting Started

You will need truffle (`yarn global add truffle`) to work with this project. You want to write the source of the contracts in `contracts`. I choose to used the very popular open-zeppelin project to inherit my contracts. It saves hours of development and adds stability to your contracts.

## truffle.js

This file contains all the configurations to connect to different networks

## Infura

[Infura](https://infura.io/) is a network provider. You don't have to run a full node on your machine to deploy to the network when you use infura. `truffle.js` use infura to connect to test and main networks, you will need to have an API key from them, I stored it with my Mnemonic in an `.env` file (of course not attached to git) that looks like that:

```sh
INFURA_API_KEY=cjksncksncsndknsd
MNENOMIC=mldks jwcncds cdksnjkn dcjkcnskjcn cjknsdjkn
```

## Deployment

Once developed, you will need to update the `migrations` scripts, most likely `2_deploy_contracts.js`.

Then:

- `truffle develop --network {networkName}`
- `truffle compile` to compile your contracts artifcats into `builds/contracts`. Those are the files you will need in `thecrown_client`.
- `truffle migrate` to deploy them to the network. You can take note of the last address displayed in the console. This is the address where your contract is deployed.

- `CrownTokenCrowdsale.deployed().then(inst=>{ crowdsale = inst})` to get the Crowdsale contract instance
- `crowdsale.token().then(addr => { tokenAddress = addr } )` to get the crowd sale token address
- `crownTokenInstance = CrownToken.at(tokenAddress)` to get the crown token address
- `crownTokenInstance.transferOwnership(crowdsale.address)` to change token ownership to crowdsale so it is able to mint tokens during crowdsale
