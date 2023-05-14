import { AccountERC6551Registry, AccountERC721 } from "./CONTRACT_CONSTANT";
import { useContractWrite } from "wagmi";
import { AccountERC6551Registryabi } from "./contracts/AccountERC6551Registry";

export function AccountERC6551Register() {
  const {
    data: registerData,
    write: registerAccount,
    isSuccess: createSuccess,
    isError: createError,
  } = useContractWrite({
    address: AccountERC6551Registry,
    abi: AccountERC6551Registryabi,
    functionName: "createAccount",
  });

  const RegisterAccount: any = async (tokenId: number) => {
    console.log(tokenId);
    await registerAccount({
      args: [AccountERC721, tokenId],
    });

    // Wait for the transaction to be mined
  };

  return { RegisterAccount, registerData, createSuccess, createError };
}

export function AccountERC6551Account() {
  const {
    data: registerData,
    write: registerAccount,
    isSuccess: createSuccess,
    isError: createError,
  } = useContractWrite({
    address: AccountERC6551Registry,
    abi: AccountERC6551Registryabi,
    functionName: "account",
  });

  const RegisterAccount: any = async (tokenId: number) => {
    console.log(tokenId);
    await registerAccount({
      args: [AccountERC721, tokenId],
    });
  };
  return { RegisterAccount, registerData, createSuccess, createError };
}
