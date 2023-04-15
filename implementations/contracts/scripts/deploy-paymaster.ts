import { ethers } from "hardhat";

async function main() {
  const entryPoint = "0x0576a174D229E3cFA37253523E645A78A0C91B57"
  const worldId = "0xABB70f7F39035586Da57B3c8136035f87AC0d2Aa"
  const worldAppId = "app_ef65ea5d4812926b8e06a76a2fcd1e98"
  const CredentialPaymaster = await ethers.getContractFactory("CredentialPaymaster");
  const credentialPaymaster = await CredentialPaymaster.deploy(entryPoint, worldId, worldAppId, "");
  await credentialPaymaster.deployed();
  console.log('deployed', credentialPaymaster.address);
  await credentialPaymaster.deposit({value: ethers.utils.parseEther("0.05")})
  console.log('depositted');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
