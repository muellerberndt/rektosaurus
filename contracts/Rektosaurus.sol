// SPDX-License-Identifier: NO LICENSE

pragma solidity 0.8.11;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Rektosaurus is ERC721Enumerable, Ownable {

    using Strings for uint256;
 
    mapping(uint256 => string) private payloads;

    uint256 private constant MAX_BUILTIN_ID = 1024;
    string private constant BASE_URL = "https://rex.rektosaurus.io/";

    constructor()
        ERC721("Rektosaurus Rex", "REKT")
    {
        mint(1, msg.sender, string(abi.encodePacked(BASE_URL, "1.json")));
    }

    /**
     * mint a new token
     * @param tokenId token ID
     * @param to receiver address
     * @param payload payload string (ignored for high IDs)
     */
    function mint(uint256 tokenId, address to, string memory payload) public onlyOwner {
        _mint(to, tokenId);

        // Payload is only stored on-chain for IDs below MAX_BUILTIN_ID. The remaining IDs are fetched from server.
        if (tokenId <= MAX_BUILTIN_ID) {
            payloads[tokenId] = payload;
        }
    }

    /**
     * mint a batch of tokens (off-chain payloads only)
     * @param low lower boundary of token ID range
     * @param high upper boundary of token ID range
     * @param to receiver address
     */
    function mintBatch(uint256 low, uint256 high, address to) public onlyOwner {
        require(low > MAX_BUILTIN_ID);

        for (uint id = low; id <= high; id++) {
            _mint(to, id);
        }
    }

    /**
     * update payload of an existing token
     * @param tokenId token ID
     * @param payload payload string
     */
    function updatePayload(uint256 tokenId, string calldata payload) external onlyOwner {
        require(_exists(tokenId), "Rektosaurus: Attempting to update non-existent token ID");
        require(tokenId <= MAX_BUILTIN_ID, "Rektosaurus: Can't update off-chain metadata");
        payloads[tokenId] = payload;
    }

    /**
     * burn a token
     * @param tokenId token ID
    */
    function burn(uint256 tokenId) external onlyOwner {

        _burn(tokenId);

         if (tokenId <= MAX_BUILTIN_ID) {       
            delete payloads[tokenId];
         }
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId) || tokenId > MAX_BUILTIN_ID, "Rektosaurus: Query for non-existant token ID");

        if(tokenId <= MAX_BUILTIN_ID) {
            return payloads[tokenId];
        } else {
            return string(abi.encodePacked(BASE_URL, tokenId.toString(),".json"));
        }
    }
}