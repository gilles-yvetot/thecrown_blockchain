pragma solidity 0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
// import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

// MintableToken is StandardToken, BurnableToken
// BurnableToken is BasicToken
// StandardToken is ERC20, BasicToken
// ERC20 is ERC20Basic,

contract CrownToken is MintableToken {
    string public name = "Crown Token";
    string public symbol = "CRWN";
    uint8 public decimals = 18;
}
