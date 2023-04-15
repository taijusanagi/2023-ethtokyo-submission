import { ethers } from "hardhat";

async function main() {
  const entryPoint = "0x0576a174D229E3cFA37253523E645A78A0C91B57"
  const CredentialPaymaster = await ethers.getContractFactory("CredentialPaymaster");
  const credentialPaymaster = await CredentialPaymaster.deploy(entryPoint);
  await credentialPaymaster.deployed();
  console.log('deployed', credentialPaymaster.address);
  await credentialPaymaster.deposit({value: ethers.utils.parseEther("0.1")})
  console.log('depositted');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
