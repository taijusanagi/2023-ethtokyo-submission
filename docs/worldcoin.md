## Lines of Code and Features

### Custom Paymaster Contract with WorldCoin
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/main/implementations/contracts/contracts/CredentialPaymaster.sol#L30

### ID Widget from WorldCoin
https://github.com/taijusanagi/2023-ethtokyo-submission/blob/main/implementations/wallet/src/pages/Popup/components/worldcoin-integrate/auth-worldcoin.tsx#L29

## Implemention Detail

We have successfully implemented "Sign in with WorldID" and sent proof for the on-chain credential. Worldcoin is used to ensure that gas sponsoring occurs only once, serving as the sybil-resistance mechanism for our Paymaster.