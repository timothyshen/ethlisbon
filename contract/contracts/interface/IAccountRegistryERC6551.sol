// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IAccountRegistryERC6551 {
    event AccountCreated(
        address indexed account,
        address indexed accountERC6551,
        uint256 indexed tokenId
    );

    function createAccount(
        address _tokenAddress,
        uint256 _tokenId
    ) external returns (address);

    function account(
        address _tokenAddress,
        uint256 _tokenId
    ) external view returns (address);
}
