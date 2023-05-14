import React from "react";
import { Button } from "@chakra-ui/react";
import { ERC721Mint } from "../utils/ERC721contract";
import { AccountERC6551Register } from "../utils/ERC6551RegistryContract";
type JoinProps = {
  setMintedNFT: any;
};

interface MintButtonProps {
  setBalance: React.Dispatch<React.SetStateAction<number | null>>;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean | null>>;
}

interface MintButtonProps {
  setBalance: React.Dispatch<React.SetStateAction<number | null>>;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const MintButton: React.FC<MintButtonProps> = ({
  setBalance,
  setCreateSuccess,
}) => {
  const { mintNFT, mintSuccess, tokenIDSuccess, balance, mintLoading } =
    ERC721Mint();
  const { RegisterAccount, registerData, createSuccess, createError } =
    AccountERC6551Register();

  const mintWallet = async () => {
    await mintNFT();
    if (!mintLoading) {
      await RegisterAccount(balance?.toString() || "0"); // default to "0" if balance is undefined
      setBalance(balance !== undefined ? Number(balance) : null);
      setCreateSuccess(createSuccess || false); // default to false if createSuccess is undefined
    }
  };

  if(createSuccess) {
    setMintedNFT(true)
  }
  console.log("registerData", registerData);
  return (
    <>
      <Button
        mt={"20px"}
        backgroundColor={"black"}
        color={"white"}
        _hover={{ backgroundColor: "black", opacity: "75%" }}
        width={"full"}
        borderRadius={"30px"}
        onClick={() => {
          mintWallet();
        }}
        disabled={!mintNFT || mintLoading}
      >
        Join Membership
      </Button>
      {createSuccess && <p>Account Created</p>}
      {createError && <p>Account Creation Failed</p>}
      {registerData && <p>Account Registered</p>}
    </>
  );
};

export default MintButton;
