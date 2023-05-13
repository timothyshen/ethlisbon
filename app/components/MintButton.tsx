import React from "react";
import {Button} from "@chakra-ui/react";
import { AccountERC721Function } from "../utils/";

const MintButton: React.FC = () => {
  const { mintAccountNFT } = AccountERC721Function();

  return (
    
      <Button
        onClick={() => {
          mintAccountNFT();
        }}
      >
        Mint Tokens
      </Button>
  );
};

export default MintButton;
