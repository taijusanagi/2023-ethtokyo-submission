## Lines of Code and Features
### Show Custom PolygonID Issuing QRCode
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/main/frontend/src/Components/VerificationForm.js#L17

### Show Custom PolygonID Verifying QRCode
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/main/implementations/wallet/src/pages/Popup/components/polygonid-integrate/get-credential-polygonid.tsx

### Paymaster
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/main/implementations/contracts/contracts/CredentialPaymaster.sol#L32

Note: We did not include the PolygonID on-chain verification in the contract. The details are described below.

### Deployed Contract and Transaction Details

#### Deployed Paymaster
https://mumbai.polygonscan.com/address/0x396DC1582617bc24A38500DCE88D844BC1ab13e8

#### Deployed Test Airdrop
https://mumbai.polygonscan.com/address/0x8689bfaf640410ff9bc0f79b8a864c337ca587bc

#### Transaction to Send Proof
https://mumbai.polygonscan.com/tx/0x933b87b1596e5f250840cd6a3f65793a2d67e702f98cde3e59eb4bf997ffecce

## Implemention Detail

We have successfully created a custom PolygonID credential specifically for the ETHTokyo event. Additionally, we have implemented both issuing and verification processes within our app.

Since we are providing credential proof within the userOperation's paymasterAndData, the credential should be passed to the browser wallet. However, the current PolygonID implementation only allows access to mobile wallet apps within the wallet itself.

### Alternative Solution we discussed

After off-chain verification passed in backend, we generate signature. Paymaster only verify signature in smart contract.
By this approach we can also establish credential based gas-sponsoring, but it has less decentalization.
