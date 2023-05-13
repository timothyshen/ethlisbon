import { AccountERC721 } from "./CONTRACT_CONSTANT";
import {
  usePrepareContractWrite,
  useContractRead,
  useContractWrite,
  useAccount,
  useWaitForTransaction,
  useTransaction,
} from "wagmi";
import { AccountERC721abi } from "./contracts/AccountERC721";

export function ERC721Mint() {
  const { address } = useAccount();
  let transactionHash;
  console.log(address);

  const {
    data: mintData,
    write: mintNFT,
    isSuccess: mintSuccess,
  } = useContractWrite({
    address: AccountERC721,
    abi: AccountERC721abi,
    functionName: "safeMint",
    args: [
      // The address to mint the NFT to
      address,
      // The URI of the NFT
      "bafkreifd3ypvs22cv2fpvydctb4epl5aw336jqhmhpbo3npom57r72o5j4",
    ],
  });

  const { data: balance } = useContractRead({
    address: AccountERC721,
    abi: AccountERC721abi,
    functionName: "tokenID",
  });
  console.log(balance?.toString());

  // Wait for the transaction to be mined
  const { data, isSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });
  if (isSuccess) {
    transactionHash = data;
    console.log(transactionHash);
  }

  // Return the mint function and the loading state
  return { mintNFT, mintData, mintSuccess, balance };
}
