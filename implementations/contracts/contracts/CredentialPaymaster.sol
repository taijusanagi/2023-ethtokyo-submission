// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@account-abstraction/contracts/core/BasePaymaster.sol";
import "./worldcoin/WorldcoinVerifier.sol";

contract CredentialPaymaster is BasePaymaster, WorldcoinVerifier {

    enum CredentialType {
        Worldcoin,
        PolygonId
    }

    constructor(
        IEntryPoint _entryPoint,
        IWorldID _worldId,
        string memory _appId,
        string memory _actionId
    ) BasePaymaster(_entryPoint) WorldcoinVerifier(_worldId, _appId, _actionId) {}

    function _validatePaymasterUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 maxCost) internal override returns (bytes memory context, uint256 validationData) {
        // validate credential here

        bytes calldata paymasterAndData = userOp.paymasterAndData;
        (CredentialType credentialType, bytes memory data) = decodeData(paymasterAndData[20:]);

        if(credentialType == CredentialType.Worldcoin) {
            // TODO: implement Worldcoin verification
            (address signal, uint256 root, uint256 nullifierHash, uint256[8] memory proof) = abi.decode(data, (address, uint256, uint256, uint256[8]));
            _verify(signal, root, nullifierHash, proof);
        } else if (credentialType == CredentialType.PolygonId) {
            // TODO: implement Polygon ID verification
        } else {
            revert("not supported");
        }
    } 

    function _postOp(PostOpMode mode, bytes calldata context, uint256 actualGasCost) internal override {
        // manage remaining balance here
    }

    function decodeData(bytes memory data) public view returns (CredentialType credentialType, bytes memory) {
        (uint8 _credentialType, bytes memory _data) = abi.decode(data, (uint8, bytes));
        credentialType = CredentialType(_credentialType);
        return (credentialType, _data);
    }

}