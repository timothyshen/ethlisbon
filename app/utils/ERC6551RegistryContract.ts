import { useContractWrite, useNetwork } from "wagmi";
import { AccountERC6551Registryabi } from "./contracts/AccountERC6551Registry";

export function AccountERC6551Register() {
  let AccountERC6551Registry;
  let AccountERC721;
  // let AccountTokenVault;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC6551Registry =
      require("./CONTRACT_CONSTANT_MUMBAI").AccountERC6551Registry;
    AccountERC721 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC721;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC6551Registry =
      require("./CONTRACT_CONSTANT_OP").AccountERC6551Registry;
    AccountERC721 = require("./CONTRACT_CONSTANT_OP").AccountERC721;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC6551Registry =
      require("./CONTRACT_CONSTANT_SCROLL").AccountERC6551Registry;
    AccountERC721 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC721;
  }
  const {
    write: registerAccount,
    isSuccess: createSuccess,
    isError: createError,
  } = useContractWrite({
    address: AccountERC6551Registry,
    abi: AccountERC6551Registryabi,
    functionName: "createAccount",
  });

  const RegisterAccount: any = async (tokenId: number) => {
    const { data } = await registerAccount({
      args: [AccountERC721, tokenId],
    });
    console.log(data);
    // Wait for the transaction to be mined
  };

  return { RegisterAccount, createSuccess, createError };
}

export function AccountERC6551Account() {
  let AccountERC6551Registry, AccountERC721;
  // let AccountTokenVault;
  const { chain } = useNetwork();

  if (chain?.name === "Polygon Mumbai") {
    AccountERC6551Registry =
      require("./CONTRACT_CONSTANT_MUMBAI").AccountERC6551Registry;
    AccountERC721 = require("./CONTRACT_CONSTANT_MUMBAI").AccountERC721;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC6551Registry =
      require("./CONTRACT_CONSTANT_OP").AccountERC6551Registry;
    AccountERC721 = require("./CONTRACT_CONSTANT_OP").AccountERC721;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC6551Registry =
      require("./CONTRACT_CONSTANT_SCROLL").AccountERC6551Registry;
    AccountERC721 = require("./CONTRACT_CONSTANT_SCROLL").AccountERC721;
  }
  const {
    write: registerAccount,
    isSuccess: createSuccess,
    isError: createError,
  } = useContractWrite({
    address: AccountERC6551Registry,
    abi: AccountERC6551Registryabi,
    functionName: "account",
  });

  const RegisterAccount: any = async (tokenId: number) => {
    await registerAccount({
      args: [AccountERC721, tokenId],
    });
    console.log(registerData);
  };
  return { RegisterAccount, registerData, createSuccess, createError };
}
