// eslint-disable-next-line import/no-anonymous-default-export
export default {
  enablePasswordEncryption: false,
  showTransactionConfirmationScreen: true,
  factory_address: '0x09c58cf6be8E25560d479bd52B4417d15bCA2845',
  stateVersion: '0.1',
  network: {
    chainID: '80001',
    family: 'EVM',
    name: 'Mumbai',
    provider: 'https://polygon-mumbai.infura.io/v3/eedaad734dce46a4b08816a7f6df0b9b',
    entryPointAddress: '0x0576a174D229E3cFA37253523E645A78A0C91B57',
    bundler:
      'http://localhost:3000/rpc',
    baseAsset: {
      symbol: 'ETH',
      name: 'ETH',
      decimals: 18,
      image:
        'https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/6ed5f/eth-diamond-black.webp',
    },
  },
};
