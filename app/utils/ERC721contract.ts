import { useContractRead, useContractWrite } from "wagmi";
import { AccountERC721abi } from "./contracts/AccountERC721";
import { useNetwork } from "wagmi";

export function ERC721Mint() {
  let AccountERC721;
  // let AccountTokenVault;
  const { chain } = useNetwork();
  console.log(chain?.name);

  if (chain?.name === "Polygon Mumbai") {
    AccountERC721 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC721;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC721 = require("./CONTRACT_CONSTANT_OP").AccountERC721;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC721 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC721;
  }
  const {
    write: mintNFT,
    isSuccess: mintSuccess,
    isLoading: mintLoading,
  } = useContractWrite({
    address: AccountERC721,
    abi: AccountERC721abi,
    functionName: "mint",
    args: [
      // The URI of the NFT
      "bafkreifd3ypvs22cv2fpvydctb4epl5aw336jqhmhpbo3npom57r72o5j4",
    ],
  });

  const { data: balance, isSuccess: tokenIDSuccess } = useContractRead({
    address: AccountERC721,
    abi: AccountERC721abi,
    functionName: "tokenID",
  });

  // Return the mint function and the loading state
  return { mintNFT, mintSuccess, tokenIDSuccess, balance, mintLoading };
}

export function OwnerOfToken(tokenId: number) {
  let AccountERC721;
  // let AccountTokenVault;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC721 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC721;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC721 = require("./CONTRACT_CONSTANT_OP").AccountERC721;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC721 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC721;
  }

  const { data: owner, isSuccess: ownerSuccess } = useContractRead({
    address: AccountERC721,
    abi: AccountERC721abi,
    functionName: "ownerOf",
    args: [tokenId],
  });

  return { owner, ownerSuccess };
}
