import { AccountERC721 } from "./CONTRACT_CONSTANT";
import { useContractRead, useContractWrite } from "wagmi";
import { AccountERC721abi } from "./contracts/AccountERC721";

export function ERC721Mint() {
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
  const { data: owner, isSuccess: ownerSuccess } = useContractRead({
    address: AccountERC721,
    abi: AccountERC721abi,
    functionName: "ownerOf",
    args: [tokenId],
  });

  return { owner, ownerSuccess };
}
