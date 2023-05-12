// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "@openzeppelin/contracts/interfaces/IERC1271.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "./interface/IAccountERC6551.sol";

contract AccountERC6551 is IERC165, IERC1271, IAccountERC6551 {

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

    function owner() public pure returns (address) {
        // (uint256 chainId, address tokenCollection, uint256 tokenId) = context();

        // if (chainId != block.chainid) {
        //     return address(0);
        // }

        return address(0);
    }

    //++++++++++++++++++++++++++++Support Function+++++++++++++++++++++++++++++++++++++++++++++

    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return (interfaceId == type(IERC165).interfaceId ||
            interfaceId == type(IAccountERC6551).interfaceId);
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
}
