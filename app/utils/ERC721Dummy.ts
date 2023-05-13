import { DummyERC721 } from "./CONTRACT_CONSTANT";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { Dummy721abi } from "./contracts/DummyERC721";

export async function DummyERC721Mint(address: string, tokenId: number) {
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
