import React from "react";
import { Button } from "@chakra-ui/react";
import { ERC721Mint } from "../utils/ERC721contract";
import { AccountERC6551Register } from "../utils/ERC6551RegistryContract";

const MintButton: React.FC = () => {
  const { mintNFT, mintData, mintSuccess, balance } = ERC721Mint();
  const { RegisterAccount, registerData, createSuccess, createError } =
    AccountERC6551Register();

  const mintWallet = async () => {
    const nftMint = await mintNFT();
    console.log(nftMint);
    if (mintSuccess) {
      await RegisterAccount(balance?.toString());
      console.log(registerData);
    }
  };
  return (
    <Button
      onClick={() => {
        mintWallet();
      }}
      disabled={mintSuccess}
    >
      Mint Tokens
    </Button>
  );
};

export default MintButton;
