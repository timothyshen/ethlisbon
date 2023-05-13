// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IAccountERC6551 {
    function executeCall(
        address to,
        uint256 value,
        bytes calldata data
    ) external payable returns (bytes memory result);

    function owner() external view returns (address);

    function token()
        external
        view
        returns (address tokenCollection, uint256 tokenId);
}
