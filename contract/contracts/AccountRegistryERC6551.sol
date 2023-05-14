// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./AccountERC6551.sol";
import "./interface/IAccountRegistryERC6551.sol";
import "./lib/MinimalProxyStore.sol";

// import "hardhat/console.sol";

contract AccountRegistryERC6551 is IAccountRegistryERC6551 {
    address public immutable accountERC6551;

    constructor(address _accountERC6551) {
        accountERC6551 = _accountERC6551;
    }

    function createAccount(
        address _tokenAddress,
        uint256 _tokenId
    ) external returns (address) {
        return _createAccount(block.chainid, _tokenAddress, _tokenId);
    }

    function account(
        address _tokenAddress,
        uint256 _tokenId
    ) external view returns (address) {
        return _account(block.chainid, _tokenAddress, _tokenId);
    }

    function _createAccount(
        uint256 _chainId,
        address _tokenAddress,
        uint256 _tokenId
    ) internal returns (address) {
        //Calculate salt
        bytes memory encodedTokenData = abi.encode(
            _chainId,
            _tokenAddress,
            _tokenId
        );

        bytes32 salt = keccak256(encodedTokenData);

        address accountCreate = MinimalProxyStore.cloneDeterministic(
            accountERC6551,
            encodedTokenData,
            salt
        );

        emit AccountCreated(accountCreate, accountERC6551, _tokenId);

        return accountCreate;
    }

    function _account(
        uint256 _chainId,
        address _tokenAddress,
        uint256 _tokenId
    ) internal view returns (address) {
        bytes memory encodedTokenData = abi.encode(
            _chainId,
            _tokenAddress,
            _tokenId
        );

        bytes32 salt = keccak256(encodedTokenData);

        address accountPredict = MinimalProxyStore.predictDeterministicAddress(
            accountERC6551,
            encodedTokenData,
            salt
        );

        return accountPredict;
    }
}
