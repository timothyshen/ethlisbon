import { AccountERC6551abi } from "./contracts/AccountERC6551";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";

export async function MakeTransfer(to: string, value: number) {
  let AccountERC6551;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC6551;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_OP").AccountERC6551;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC6551;
  }
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
  let AccountERC6551;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC6551;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_OP").AccountERC6551;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC6551;
  }
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
  let AccountERC6551;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC6551;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_OP").AccountERC6551;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC6551;
  }
  const { data, error, isError } = useContractWrite({
    address: AccountERC6551,
    abi: AccountERC6551abi,
    functionName: "isValidSignature",
    args: [hash, signature],
  });

  return { data, error, isError };
}

export async function AccountERC6551Token() {
  let AccountERC6551;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC6551;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_OP").AccountERC6551;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC6551 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC6551;
  }
  const { data, error, isError } = useContractRead({
    address: AccountERC6551,
    abi: AccountERC6551abi,
    functionName: "token",
  });

  return { data, error, isError };
}
