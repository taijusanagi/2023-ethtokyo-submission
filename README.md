# Grate Gas Grants

Great Gas Grants is an innovative, credential-based gas grants service that harnesses the power of the Account Abstraction Paymaster to provide users with access to gas grants tailored to their credentials.

![how it works](./docs/img/key.png)

## Demo

https://youtu.be/TwZwlqzBeAc

## App

We have not deployed a live app for the demo, as it requires the installation of a custom browser extension and running a local bundler.

The implementation details for the wallet and bundler can be found [here](./docs/account-abstraction.md).

## Description

Great Gas Grants offers an innovative solution for funding gas fees, powered by our new Account Abstraction Paymaster with credential-based verification. Now, it's easier than ever for community members to join the Web3 ecosystem.

Key Features:

- Smooth Web3 Onboarding
- Access to Learning Resources
- Community Empowerment
- Developer Grant Opportunities

Our platform is Sybil attack-resistant and utilizes the Account Abstraction Paymaster for credential-based verification. Seamlessly integrating with services like Polygon ID and Worldcoin, it provides granting and verification processes that respect user privacy while ensuring the use of valid credentials.

## How it works

![how it works](./docs/img/how-it-works.jpg)

## Credential-Based Account Abstraction Paymaster
Our platform utilizes a custom Account Abstraction Paymaster to verify user credentials on-chain. Once the credentials are successfully confirmed, the smart contract sponsors the transaction, allowing only eligible users to benefit from the gas grants.

We have adopted the ERC4337 0.5.0 smart contract standard and bundler for efficient transaction handling. To accelerate the wallet app's development, Great Gas Grants employed Trampolin, a widely-used quick-start solution.

The implementation details can be found [here](./docs/account-abstraction.md).

## Polygon ID and Worldcoin for Credential Services
Great Gas Grants integrates both Polygon ID and Worldcoin as credential services to verify user eligibility, ensuring privacy and security for users' data.

### PolygonID

Great Gas Grants utilizes Polygon ID to generate ETHTokyo Participant credentials, allowing community members to create grants for all attending hackers. This enables participants to benefit from sponsored Account Abstraction (AA) transactions through Polygon ID. The platform integrates custom credential issuance and verification within the frontend and wallet for a seamless user experience.

While attempting to incorporate on-chain verification with the paymaster, the team faced challenges interacting with browser extension AA wallets due to Polygon ID app specifications.

The implementation details can be found [here](./docs/polygon-id.md).

### Worldcoin 

Great Gas Grants employs Worldcoin to confirm that users are human and not bots, adding a layer of Sybil resistance. This approach prevents individuals from creating multiple accounts to access the same grants repeatedly, upholding fairness and equal opportunity for all eligible users on the platform.

The platform has integrated the 'Sign in with Worldcoin' feature for user authentication, streamlining the login process. Additionally, it incorporates on-chain verification within the paymaster smart contract, offering a secure and efficient method to verify credentials and manage gas grants for eligible users.

The implementation details can be found [here](./docs/worldcoin.md).
