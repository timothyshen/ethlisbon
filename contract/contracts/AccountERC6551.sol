// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "@openzeppelin/contracts/interfaces/IERC1271.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

import "./interface/IAccountERC6551.sol";
import "./lib/MinimalProxyStore.sol";
import "./MinimalReceiver.sol";

// import "hardhat/console.sol";

contract AccountERC6551 is IERC165, IERC1271, IAccountERC6551, MinimalReceiver {
    error NotAuthorized();

    // Transfer call must be called by Owner of the token
    function executeCall(
        address to,
        uint256 value,
        bytes calldata data
    ) external payable returns (bytes memory result) {
        address _owner = owner();
        if (msg.sender != _owner) revert NotAuthorized();

        return _call(to, value, data);
    }

    function owner() public view returns (address) {
        (address tokenCollection, uint256 tokenId) = token();

        if (tokenCollection == address(0)) {
            return address(0);
        }
        return IERC721(tokenCollection).ownerOf(tokenId);
    }

    function token()
        public
        view
        returns (address tokenCollection, uint256 tokenId)
    {
        (, tokenCollection, tokenId) = context();
    }

    // function lock(uint256 _unlockTimestamp) external onlyUnlocked {
    //     if (_unlockTimestamp > block.timestamp + 365 days)
    //         revert ExceedsMaxLockTime();

    //     address _owner = owner();
    //     if (_owner != msg.sender) revert NotAuthorized();

    //     unlockTimestamp = _unlockTimestamp;

    //     emit LockUpdated(_unlockTimestamp);
    // }

    //++++++++++++++++++++++++++++Support Function+++++++++++++++++++++++++++++++++++++++++++++

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(IERC165, ERC1155Receiver) returns (bool) {
        return (interfaceId == type(IERC165).interfaceId ||
            interfaceId == type(IAccountERC6551).interfaceId ||
            interfaceId == type(IERC1271).interfaceId);
    }

    function isValidSignature(
        bytes32 hash,
        bytes memory signature
    ) external view returns (bytes4 magicValue) {
        bool isValid = SignatureChecker.isValidSignatureNow(
            owner(),
            hash,
            signature
        );

        if (isValid) {
            return IERC1271.isValidSignature.selector;
        }

        return "";
    }

    // internal

    function _call(
        address to,
        uint256 value,
        bytes calldata data
    ) internal returns (bytes memory result) {
        bool success;
        (success, result) = to.call{value: value}(data);

        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }

    function context() internal view returns (uint256, address, uint256) {
        bytes memory rawContext = MinimalProxyStore.getContext(address(this));
        if (rawContext.length == 0) return (0, address(0), 0);

        return abi.decode(rawContext, (uint256, address, uint256));
    }
}
