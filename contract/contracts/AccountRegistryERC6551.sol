// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./AccountERC6551.sol";
import "./interface/IAccountRegistryERC6551.sol";
import "./lib/AccountLib.sol";

contract AccountRegistryERC6551 is IAccountRegistryERC6551 {
    address public immutable accountERC6551;

    error InitializationFailed();

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

        bytes memory code = AccountLib.getByteCode(
            _chainId,
            _tokenAddress,
            accountERC6551,
            _tokenId,
            salt
        );

        address NewAccount = Create2.computeAddress(
            bytes32(salt),
            keccak256(code)
        );

        if (NewAccount.code.length != 0) return NewAccount;

        emit AccountCreated(
            NewAccount,
            accountERC6551,
            _chainId,
            _tokenAddress,
            _tokenId,
            salt
        );

        NewAccount = Create2.deploy(0, bytes32(salt), code);

        return NewAccount;
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

        bytes memory code = AccountLib.getByteCode(
            _chainId,
            _tokenAddress,
            accountERC6551,
            _tokenId,
            salt
        );
        address NewAccount = Create2.computeAddress(
            bytes32(salt),
            keccak256(code)
        );
        return NewAccount;
    }
}
