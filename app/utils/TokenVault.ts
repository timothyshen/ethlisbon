import { AccountTokenVault } from "./CONTRACT_CONSTANT";
import { AccountTokenVaultabi } from "./contracts/AccountTokenVault";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export async function TokenVaultInitailisation(
  address: string,
  amount: number,
  dayNum: number
) {
  const { data, write, error, isError } = useContractWrite({
    address: AccountTokenVault,
    abi: AccountTokenVaultabi,
    functionName: "initializeAccount",
    args: [address, amount, dayNum],
  });

  await write();

  const {
    data: data2,
    isSuccess,
    isLoading,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { data, error, isError, isSuccess, isLoading };
}

export async function TokenWithDraw() {
  const { data, error, isError } = useContractRead({
    address: AccountTokenVault,
    abi: AccountTokenVaultabi,
    functionName: "withdraw",
  });

  return { data, error, isError };
}
