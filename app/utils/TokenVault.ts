import { AccountTokenVaultabi } from "./contracts/AccountTokenVault";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import { useState } from "react";

export function TokenVaultInitailisation() {
  let AccountTokenVault;
  // let AccountTokenVault;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_MUMBAI").AccountTokenVault;
  } else if (chain?.name === "Optimism Goerli") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_OP").AccountTokenVault;
  } else if (chain?.name === "Scroll Testnet") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_SCROLL").AccountTokenVault;
  }

  const { data, write, isError } = useContractWrite({
    address: AccountTokenVault,
    abi: AccountTokenVaultabi,
    functionName: "initializeAccount",
  });

  const initialize = async (
    address: string,
    amount: number,
    dayNum: number
  ) => {
    await write({ args: [address, amount, dayNum] });
  };

  const {
    data: data2,
    isSuccess,
    isLoading,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { data, isError, isSuccess, isLoading };
}

export async function TokenWithDraw() {
  let AccountTokenVault;
  // let AccountTokenVault;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_MUMBAI").AccountTokenVault;
  } else if (chain?.name === "Optimism Goerli") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_OP").AccountTokenVault;
  } else if (chain?.name === "Scroll Testnet") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_SCROLL").AccountTokenVault;
  }

  const { data, error, isError } = useContractRead({
    address: AccountTokenVault,
    abi: AccountTokenVaultabi,
    functionName: "withdraw",
  });

  return { data, error, isError };
}
