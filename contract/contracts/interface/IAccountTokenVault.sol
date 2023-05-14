// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IAccountTokenVault {
    function initializeAccount(
        address _beneficiary,
        uint256 _amount,
        uint256 _releaseIntervalInDays
    ) external;

    function withdraw() external;

    event Withdraw(address indexed beneficiary, uint256 amount);
}
