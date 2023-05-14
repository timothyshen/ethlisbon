// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

pragma solidity ^0.8.0;

interface IAccountTokenVault {
    function initializeAccount(
        address _beneficiary,
        uint256 _amount,
        uint256 _releaseIntervalInDays
    ) public {}

    function withdraw() public nonReentrant {}

    event Withdraw(address indexed beneficiary, uint256 amount);
}
