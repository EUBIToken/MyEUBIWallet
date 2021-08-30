pragma solidity <=0.7.6;
//SPDX-License-Identifier: AGPL-3.0-or-later
interface IERC20 {
        function transferFrom(address from, address to, uint256 value) external returns (bool);
}
contract ReceiverPaidGasFees{
        mapping(bytes32 => uint256) used;
        function sendPreauthorizedTransaction(uint256 random, address token, address from, address to, uint256 value, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external {
                //Preauthorized transaction expiry check
                require(expiry >= block.timestamp, "RPGF: Preauthorized transaction sending failed");
                //Hash the message
                bytes32 hash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n224", abi.encode(random, token, from, msg.sender, to, value, expiry)));
                //Check to make sure that the pre-authorized transaction is unspent
                require(used[hash] == 0, "RPGF: Transaction already spent");
                //Verify the signature
                require(ecrecover(hash, v, r, s) == from, "RPGF: Invalid digital signature");
                //Invalidate the hash
                used[hash] = 1;
                //Send the tokens
                require(IERC20(token).transferFrom(from, to, value), "RPGF: Can't send tokens");
        }
}
