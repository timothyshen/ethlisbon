import { AccountERC6551 } from "./CONTRACT_CONSTANT";
import { AccountERC6551abi } from "./contracts/AccountERC6551";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export async function MakeTransfer(to: string, value: number) {
  const {
    write,
    data: executeCallData,
    error,
    isError,
  } = useContractWrite({
    address: AccountERC6551,
    abi: AccountERC6551abi,
    functionName: "executeCall",
    args: [to, value, "0x"],
  });
  await write();
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: executeCallData?.hash,
  });
  return { executeCallData, error, isError, isLoading, isSuccess };
}

export async function OwnerRetrieve() {
  const { data, error, isError } = useContractWrite({
    address: AccountERC6551,
    abi: AccountERC6551abi,
    functionName: "owner",
  });

  return { data, error, isError };
}

export async function AccountERC6551isValidSignature(
  hash: string,
  signature: string
) {
  const { data, error, isError } = useContractWrite({
    address: AccountERC6551,
    abi: AccountERC6551abi,
    functionName: "isValidSignature",
    args: [hash, signature],
  });

  return { data, error, isError };
}

export async function AccountERC6551Token() {
  const { data, error, isError } = useContractRead({
    address: AccountERC6551,
    abi: AccountERC6551abi,
    functionName: "token",
  });

  return { data, error, isError };
}
