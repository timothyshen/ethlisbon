// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Upstar is ERC20, Ownable {
    constructor() ERC20("Upstar", "UP") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
