pragma solidity 0.4.23;

import "./CrownToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";


contract CrownTokenCrowdsale is MintedCrowdsale {
  constructor(
    uint256 _rate,
    address _wallet,
    CrownToken _token) public 
    Crowdsale(_rate, _wallet, _token) {
  }
}