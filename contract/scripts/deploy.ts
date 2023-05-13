import { ethers } from "hardhat";

async function main() {
  // Deploy mock ERC721
  const MockERC721 = await ethers.getContractFactory("UpstarNFT");
  const mockERC721 = await MockERC721.deploy("https://ipfs.io/ipfs/");
  await mockERC721.deployed();
  console.log("UpstarNFT deployed to:", mockERC721.address);
  // Deploy AccountERC6551
  // const AccountERC6551 = await ethers.getContractFactory("AccountERC6551");
  // const accountERC6551 = await AccountERC6551.deploy();
  // await accountERC6551.deployed();
  // console.log("AccountERC6551 deployed to:", accountERC6551.address);
  // Deploy AccountERC6551Factory
  // const AccountERC6551Factory = await ethers.getContractFactory(
  //   "AccountRegistryERC6551"
  // );
  // const accountERC6551Factory = await AccountERC6551Factory.deploy(
  //   accountERC6551.address
  // );
  // await accountERC6551Factory.deployed();
  // console.log(
  //   "AccountERC6551Factory deployed to:",
  //   accountERC6551Factory.address
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
