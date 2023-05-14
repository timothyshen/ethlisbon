import { AccountTokenVaultabi } from "./contracts/AccountTokenVault";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import { useState } from "react";

interface ContractAddresses {
  [chainName: string]: {
    AccountERC6551Registry: string;
    AccountERC721: string;
  };
}

const contractAddresses: ContractAddresses = {
  "Polygon Mumbai": {
    AccountTokenVault: require("./CONTRACT_CONSTANT_MUMBAI").AccountTokenVault
  },
  "Optimism Goerli": {
    AccountTokenVault: require("./CONTRACT_CONSTANT_OP").AccountTokenVault
  },
  "Scroll Testnet": {
    AccountTokenVault: require("./CONTRACT_CONSTANT_SCROLL").AccountTokenVault
  },
};

export function TokenVaultInitailisation() {
  const { chain } = useNetwork();
  let AccountTokenVault;

  if (chain?.name === "Polygon Mumbai") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_MUMBAI").AccountTokenVault;
  } else if (chain?.name === "Optimism Goerli") {
    AccountTokenVault: require("./CONTRACT_CONSTANT_OP").AccountTokenVault;
  } else if (chain?.name === "Scroll Testnet") {
    AccountTokenVault = require("./CONTRACT_CONSTANT_SCROLL").AccountTokenVault;
  }

  const { data, write, isError } = useContractWrite({
    address: AccountTokenVault as `0x${string}`,
    abi: AccountTokenVaultabi,
    functionName: "initializeAccount",
  });

  async function initialize(address: string, amount: number, dayNum: number) {
    await write({ args: [address, amount, dayNum] });
  }

  const {
    data: data2,
    isSuccess,
    isLoading,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { initialize, data, isError, isSuccess, isLoading };
}

export async function TokenWithDraw() {
  const { chain } = useNetwork();
  let AccountTokenVault;

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
