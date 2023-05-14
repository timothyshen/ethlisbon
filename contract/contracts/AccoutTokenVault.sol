// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TokenVault is ReentrancyGuard {
    IERC20 public token;
    uint256 public constant MONTHLY_RELEASE = 1000; // Monthly release amount

    struct Account {
        uint256 balance;
        uint256 lastReleaseTime;
        uint256 releaseInterval;
        bool isVested;
    }

    event Withdraw(address indexed beneficiary, uint256 amount);

    mapping(address => Account) public accounts;

    constructor(IERC20 _token) {
        token = _token;
    }

    function initializeAccount(
        address _beneficiary,
        uint256 _amount,
        uint256 _releaseIntervalInDays
    ) public {
        require(
            _beneficiary != address(0),
            "Beneficiary cannot be zero address"
        );
        require(_amount > 0, "Amount should be greater than 0");
        require(
            _releaseIntervalInDays > 0,
            "Release interval should be greater than 0"
        );

        // Ensure account does not already exist
        require(!accounts[_beneficiary].isVested, "Account already vested");

        accounts[_beneficiary] = Account({
            balance: _amount * 10 ** 18,
            lastReleaseTime: block.timestamp,
            releaseInterval: _releaseIntervalInDays * 1 days,
            isVested: true
        });
    }

    function withdraw() public nonReentrant {
        Account storage account = accounts[msg.sender];

        require(account.isVested, "Account not vested");
        require(
            block.timestamp >=
                account.lastReleaseTime + account.releaseInterval,
            "Tokens can be withdrawn only after the set interval"
        );
        require(
            account.balance >= MONTHLY_RELEASE,
            "Not enough tokens in the vault"
        );

        account.balance -= MONTHLY_RELEASE;
        account.lastReleaseTime = block.timestamp; // Update the last release time

        token.transfer(msg.sender, MONTHLY_RELEASE);
        emit Withdraw(msg.sender, MONTHLY_RELEASE);
    }
}
