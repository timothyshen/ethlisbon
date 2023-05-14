"use client";
import { Box, Text, Button, Flex, Image } from "@chakra-ui/react";
import MintButton from "../../components/MintButton";
import { erc721ABI, useAccount, useContractRead, useNetwork } from "wagmi";
import { useState, useEffect } from "react";
import React from "react";
import BasicPopOver from "../../components/PopOver";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
};

const MembershipWidget: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
}) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [mintedNFT, setMintedNFT] = useState(false);
  const [tokenId, setTokenId] = useState<number | null>(null);
  let isMember = false;
  let AccountERC721;

  if (chain?.name === "Polygon Mumbai") {
    AccountERC721 =
      require("../../utils/CONTRACT_CONSTANT_MUMBAI").AccountERC721;
  } else if (chain?.name === "Optimism Goerli") {
    AccountERC721 = require("../../utils/CONTRACT_CONSTANT_OP").AccountERC721;
  } else if (chain?.name === "Scroll Testnet") {
    AccountERC721 =
      require("../../utils/CONTRACT_CONSTANT_SCROLL").AccountERC721;
  }
  //Check wallet for NFT
  const { data, isLoading } = useContractRead({
    address: AccountERC721,
    abi: erc721ABI,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
  });

  // useEffect(() => {
  //   setTokenId(parseInt(data?.toString() || "0"));
  // }, [data]);

  if (!isLoading) {
    if (parseInt(data?.toString() || "0") > 0 || mintedNFT) {
      isMember = true;
    }
  }

  return (
    <Box
      border={"1px solid #F3F4F6"}
      width={"400px"}
      padding={"20px"}
      height={"fit-content"}
      borderRadius={"10px"}
      backgroundColor={"white"}
      borderColor={"#E5E7EB"}
    >
      <Text fontSize={"32px"} fontWeight={"semibold"}>
        {title}
      </Text>
      <Text fontSize={"12px"} color={"#4C1D95"}>
        {subtitle}
      </Text>
      <Text mt={"20px"} fontSize={"12px"}>
        {description}
      </Text>
      {/* Smart contract checking and deciding widget to display */}
      {isMember ? (
        <Rewnewal TokenID={tokenId} />
      ) : (
        <Join setMintedNFT={setMintedNFT} />
      )}
    </Box>
  );
};

type JoinProps = {
  setMintedNFT: any;
};

const Join: React.FC<JoinProps> = ({ setMintedNFT }) => {
  return (
    <Box
      backgroundColor={"#F3F4F6"}
      mt={"20px"}
      borderRadius={"10px"}
      padding={"20px"}
    >
      <Flex fontSize={"11px"} justifyContent={"space-between"}>
        <Box>
          <Text
            fontWeight={"semibold"}
            color={"#9CA3AF"}
            textTransform={"uppercase"}
          >
            Membership price
          </Text>
          <Text mt={"3px"} fontSize={"18px"} fontWeight={"semibold"}>
            10ETH
          </Text>
        </Box>
        <Box>
          <Text
            textTransform={"uppercase"}
            fontWeight={"semibold"}
            color={"#9CA3AF"}
          >
            Annually subscription price
          </Text>
          <Text mt={"3px"} fontSize={"18px"} fontWeight={"semibold"}>
            10ETH
          </Text>
        </Box>
      </Flex>
      <MintButton setMintedNFT={setMintedNFT} />
    </Box>
  );
};

type RenewalProps = {
  TokenID: number | null;
};

const Rewnewal: React.FC<RenewalProps> = ({ TokenID }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      backgroundColor={"#F3F4F6"}
      mt={"20px"}
      borderRadius={"10px"}
      padding={"20px"}
    >
      <Box backgroundColor={"white"} borderRadius={"10px"} padding={"12px"}>
        <Flex>
          <Image src={"/images/success.png"} alt={"success"} height={"60px"} />
          <Box ml={"20px"} mb={"15px"}>
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              You are part of Lens DAO
            </Text>
            <Text fontSize={"12px"} mt={"5px"} color={"#6B7280"}>
              You have 12 more months of fun with this DAO.
            </Text>
          </Box>
        </Flex>
        <Text fontSize={"12px"} color={"#8466B2"} fontWeight={"medium"}>
          Next payment{" "}
          <Text ml={"3px"} as={"span"} fontSize={"14px"} color={"#4C1D95"}>
            13 JUNE 2023
          </Text>
        </Text>
      </Box>
      <Flex fontSize={"11px"} justifyContent={"space-between"} mt={"20px"}>
        <Box>
          <Text
            fontWeight={"semibold"}
            color={"#9CA3AF"}
            textTransform={"uppercase"}
          >
            Membership price
          </Text>
          <Text mt={"3px"} fontSize={"18px"} fontWeight={"semibold"}>
            10ETH
          </Text>
        </Box>
        <Box>
          <Text
            textTransform={"uppercase"}
            fontWeight={"semibold"}
            color={"#9CA3AF"}
          >
            Annually subscription price
          </Text>
          <Text mt={"3px"} fontSize={"18px"} fontWeight={"semibold"}>
            10ETH
          </Text>
        </Box>
      </Flex>
      <BasicPopOver tokenID={1} />
    </Box>
  );
};

export default MembershipWidget;
