//@ts-nocheck
import hre from "hardhat";

async function main() {
  // Deploy dummy ERC721
  const DummyERC721 = await hre.ethers.getContractFactory("MockERC721");
  const dummyERC721 = await DummyERC721.deploy();
  await dummyERC721.deployed();
  console.log("Summy deployed to:", dummyERC721.address);

  const AccountERC20 = await hre.ethers.getContractFactory("Upstar");
  const accountERC20 = await AccountERC20.deploy();
  await accountERC20.deployed();
  console.log("AccountERC20 deployed to:", accountERC20.address);

  const AccountTokenVault = await hre.ethers.getContractFactory("TokenVault");
  const accountTokenVault = await AccountTokenVault.deploy(
    accountERC20.address
  );
  await accountTokenVault.deployed();
  console.log("AccountTokenVault deployed to:", accountTokenVault.address);
  // Deploy mock ERC721
  const MockERC721 = await hre.ethers.getContractFactory("UpstarNFT");
  const mockERC721 = await MockERC721.deploy("https://ipfs.io/ipfs/");
  await mockERC721.deployed();
  console.log("UpstarNFT deployed to:", mockERC721.address);

  // Deploy AccountERC6551
  const AccountERC6551 = await hre.ethers.getContractFactory("AccountERC6551");
  const accountERC6551 = await AccountERC6551.deploy();
  await accountERC6551.deployed();
  console.log("AccountERC6551 deployed to:", accountERC6551.address);
  // Deploy AccountERC6551Factory
  const AccountERC6551Factory = await hre.ethers.getContractFactory(
    "AccountRegistryERC6551"
  );
  const accountERC6551Factory = await AccountERC6551Factory.deploy(
    accountERC6551.address
  );
  await accountERC6551Factory.deployed();
  console.log(
    "AccountERC6551Factory deployed to:",
    accountERC6551Factory.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
