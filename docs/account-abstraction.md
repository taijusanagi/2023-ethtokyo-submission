## Lines of Code and Features

### Custom Paymaster Contract
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/main/implementations/contracts/contracts/CredentialPaymaster.sol

### Add Custom Paymaster in Wallet
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/b60ad65441f18f92c916fb095985019a9955b386/implementations/wallet/src/pages/Popup/pages/sign-transaction-request/sign-transaction-request.tsx#L101

### Transaction From Local Bunder
https://mumbai.polygonscan.com/tx/0x25e13a51da2b72ceb4f1f5c6c7a951506e92e526a7032a754617517b6c0cc11a

## Motivation

Our motivation is to establish a protected Paymaster. Instead of securing the user wallet, our focus is on decentralizing the Paymaster by utilizing credentials. Initially, we implemented Worldcoin for sybil-resistance. Later, we developed the idea to integrate PolygonID, enabling a "gas grant" system to attract more new users to the web3 space.

## Implementation Process

To implement our solution, we used Trampoline as a quick start and created a custom Paymaster to interact with PolygonID and Worldcoin.

We added the verification logic to the Paymaster, but it became apparent that the Paymaster cannot access external contract storage if the data is not mapped for the account. As a result, the Paymaster should be whitelisted or the bundler must use unsafe mode to process the transaction.

Additionally, we explored the possibility of combining off-chain verification with zk-proof to enhance the implementation further.