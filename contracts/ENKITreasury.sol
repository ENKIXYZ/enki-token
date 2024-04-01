// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ENKITreasury is Ownable {
    using SafeERC20 for IERC20;

    // Token to custody
    IERC20 public enki;

    constructor(address _enki) public {
        enki = IERC20(_enki);
    }

    /**
     * Transfer ENKI to the destination. Can only be called by the contract owner.
     */
    function transfer(address dest, uint amount) external onlyOwner {
        enki.safeTransfer(dest, amount);
    }

    /**
     * Return the ENKI balance of this contract.
     */
    function balance() view external returns(uint) {
        return enki.balanceOf(address(this));
    }

}