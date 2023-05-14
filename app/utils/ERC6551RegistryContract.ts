import { useContractWrite, useNetwork } from "wagmi";
import { AccountERC6551Registryabi } from "./contracts/AccountERC6551Registry";

interface ContractAddresses {
  [chainName: string]: {
    AccountERC6551Registry: string;
    AccountERC721: string;
  };
}

const contractAddresses: ContractAddresses = {
  "Polygon Mumbai": {
    AccountERC6551Registry: require("./CONTRACT_CONSTANT_MUMBAI")
      .AccountERC6551Registry,
    AccountERC721: require("./CONTRACT_CONSTANT_MUMBAI").AccountERC721,
  },
  "Optimism Goerli": {
    AccountERC6551Registry: require("./CONTRACT_CONSTANT_OP")
      .AccountERC6551Registry,
    AccountERC721: require("./CONTRACT_CONSTANT_OP").AccountERC721,
  },
  "Scroll Testnet": {
    AccountERC6551Registry: require("./CONTRACT_CONSTANT_SCROLL")
      .AccountERC6551Registry,
    AccountERC721: require("./CONTRACT_CONSTANT_SCROLL").AccountERC721,
  },
};

function getContractAddresses(chainName: string) {
  const addresses = contractAddresses[chainName];
  if (!addresses) {
    throw new Error(
      `Contract addresses not available for the selected chain: ${chainName}`
    );
  }
  return addresses;
}

export function AccountERC6551Register() {
  const { chain } = useNetwork();
  const chainName = chain?.name;
  if (!chainName) {
    throw new Error("Chain name is not available.");
  }

  const { AccountERC6551Registry, AccountERC721 } =
    getContractAddresses(chainName);

  const {
    write: registerAccount,
    isSuccess: createSuccess,
    isError: createError,
  } = useContractWrite({
    address: AccountERC6551Registry as `0x${string}`,
    abi: AccountERC6551Registryabi,
    functionName: "createAccount",
  });

  async function RegisterAccount(tokenId: number) {
    await registerAccount({
      args: [AccountERC721, tokenId],
    });
  }

  return { RegisterAccount, createSuccess, createError };
}

export function AccountERC6551Account() {
  const { chain } = useNetwork();
  const chainName = chain?.name;
  if (!chainName) {
    throw new Error("Chain name is not available.");
  }

  const { AccountERC6551Registry, AccountERC721 } =
    getContractAddresses(chainName);

  const {
    write: registerAccount,
    isSuccess: createSuccess,
    isError: createError,
  } = useContractWrite({
    address: AccountERC6551Registry as `0x${string}`,
    abi: AccountERC6551Registryabi,
    functionName: "account",
  });

  async function RegisterAccount(tokenId: number) {
    await registerAccount({
      args: [AccountERC721, tokenId],
    });
  }

  return { RegisterAccount, createSuccess, createError };
}
