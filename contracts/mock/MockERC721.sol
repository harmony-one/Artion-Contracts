// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockERC721 is ERC721 {
    uint256 public currentTokenIndex;

    constructor(uint256 supply) public ERC721("ME7", "Mock ERC721") {
        for (uint256 i; i < supply; i++) {
            ++currentTokenIndex;
            _mint(msg.sender, currentTokenIndex);
        }
    }

    function mint(address _to, uint256 _amount) public {
        for (uint256 i; i < _amount; i++) {
            ++currentTokenIndex;
            _mint(_to, currentTokenIndex);
        }
    }
}
