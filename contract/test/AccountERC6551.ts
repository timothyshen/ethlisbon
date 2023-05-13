import { expect } from "chai";
import { ethers } from "hardhat";
import { AccountRegistryERC6551, AccountERC6551 } from "../typechain-types";
import { Contract, Signer } from "ethers";
import { assert } from "console";

describe("AccountRegistryERC6551 test", function () {
  let owner: any, addr1: any;
  let mockERC721: Contract,
    accountERC6551: AccountERC6551,
    accountERC6551Factory: AccountRegistryERC6551;
  let tokenId1, tokenId2;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    // Deploy mock ERC721
    const MockERC721 = await ethers.getContractFactory("UpstarNFT");
    mockERC721 = await MockERC721.deploy("https://ipfs.io/ipfs/");
    await mockERC721.deployed();
    // Deploy AccountERC6551
    const AccountERC6551 = await ethers.getContractFactory("AccountERC6551");
    accountERC6551 = await AccountERC6551.deploy();
    await accountERC6551.deployed();

    // Deploy AccountERC6551Factory
    const AccountERC6551Factory = await ethers.getContractFactory(
      "AccountRegistryERC6551"
    );
    accountERC6551Factory = await AccountERC6551Factory.deploy(
      accountERC6551.address
    );
    await accountERC6551Factory.deployed();

    // Mint tokens

    tokenId1 = await mockERC721.safeMint(
      owner.address,
      "bafkreifd3ypvs22cv2fpvydctb4epl5aw336jqhmhpbo3npom57r72o5j4"
    );
    const tokenOwner = await mockERC721.ownerOf(0);
    console.log("owner.address", owner.address);
    console.log("tokenId1", tokenOwner);
    tokenId2 = await mockERC721.safeMint(addr1.address, "1");
    const tokenOwner2 = await mockERC721.ownerOf(1);
    console.log("addr1.address", addr1.address);
    console.log("tokenId2", tokenOwner2);
  });

  //   it("mint token and create account", async function () {
  //     // Create account and extract address from event
  //     const createAccountTx = await accountERC6551Factory.createAccount(
  //       mockERC721.address,
  //       1
  //     );
  //     const receipt = await createAccountTx.wait();
  //     const createAccountEvent = receipt.events?.find(
  //       (event) => event.event === "AccountCreated"
  //     );
  //     const createdAccountAddress = createAccountEvent?.args[0];

  //     console.log(`Created Account Address: ${createdAccountAddress}`);

  //     // Check that account was correctly created
  //     const checkAccountEvent = await accountERC6551Factory.account(
  //       mockERC721.address,
  //       1
  //     );
  //     console.log(`Retrieved Account Address: ${checkAccountEvent}`);

  //     expect(checkAccountEvent).to.equal(createdAccountAddress);
  //   });

  it("execute call on AccountERC6551", async function () {
    // Create account and extract address from event
    const createAccountTx = await accountERC6551Factory.createAccount(
      mockERC721.address,
      0
    );
    const receipt = await createAccountTx.wait();
    const createAccountEvent = receipt.events?.find(
      (event) => event.event === "AccountCreated"
    );
    const createdAccountAddress = createAccountEvent?.args[0];
    const erc721TokenOwner = await mockERC721.ownerOf(0);
    console.log(`Created Account Address: ${createdAccountAddress}`);
    expect(owner.address).to.equal(erc721TokenOwner);

    // Attach the account to the owner
    const accountInterface = new ethers.Contract(createdAccountAddress, [
      "function executeCall(address to, uint256 value, bytes data) external returns (bytes memory)",
    ]);

    // Execute a call
    console.log(await owner.getAddress());
    await owner.sendTransaction({
      to: createdAccountAddress,
      value: ethers.utils.parseEther("1"),
    });

    await accountInterface
      .connect(owner)
      .executeCall(addr1.getAddress(), ethers.utils.parseEther("0.1"), "0x");
    // Execute a call

    // check balance of addr1
    const balance = await ethers.provider.getBalance(addr1.getAddress());
    console.log("balance", balance.toString());
  });
});
