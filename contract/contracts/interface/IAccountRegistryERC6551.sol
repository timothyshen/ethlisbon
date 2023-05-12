// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IAccountRegistryERC6551 {
    event AccountCreated(
        address account,
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        bytes32 salt
    );

    function createAccount(
        address _tokenAddress,
        uint256 _tokenId
    ) external returns (address);

    // function account(
    //     address _tokenAddress,
    //     uint256 _tokenId
    // ) external view returns (address);
}
