import { useContractWrite, useWaitForTransaction, useNetwork } from "wagmi";
import { Dummy721abi } from "./contracts/DummyERC721";

export async function DummyERC721Mint(address: string, tokenId: number) {
  let DummyERC721;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    DummyERC721 = require("./CONTRACT_CONSTANT_MUMBAI").DummyERC721;
  } else if (chain?.name === "Optimism Goerli") {
    DummyERC721 = require("./CONTRACT_CONSTANT_OP").DummyERC721;
  } else if (chain?.name === "Scroll Testnet") {
    DummyERC721 = require("./CONTRACT_CONSTANT_SCROLL").DummyERC721;
  }
  const { write, data, error, isError } = useContractWrite({
    address: DummyERC721,
    abi: Dummy721abi,
    functionName: "mint",
    args: [address, tokenId],
  });

  await write();

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { data, error, isError, isLoading, isSuccess };
}
