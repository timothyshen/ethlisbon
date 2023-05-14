"use client";
import { Box, Text, Button, Flex, Skeleton, Image } from "@chakra-ui/react";
import MintButton from "@/app/components/MintButton";
import { useAccount, useContractRead } from "wagmi";
import { erc721ABI } from "wagmi";
import { useState } from "react";
import BasicPopOver from "@/app/components/PopOver";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
};

type MintButtonProps = {
  setBalance: React.Dispatch<React.SetStateAction<number | null>>;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean | null>>;
};

type RenewalProps = {
  balance: number | undefined | null;
  createSuccess: boolean | null;
};

const MembershipWidget: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
}) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [mintedNFT, setMintedNFT] = useState(false);
  let isMember = false;

  //Check wallet for NFT
  const { data, isError, isLoading } = useContractRead({
    address: "0x877CDC6441A7332237994Ef3d43C3EdDd35Dfc12",
    abi: erc721ABI,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
  });

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
      {isMember ? <Rewnewal /> : <Join setMintedNFT={setMintedNFT} />}
    </Box>
  );
};

type JoinProps = {
  setMintedNFT: any;
};

const Join: React.FC<JoinProps> = ({ setMintedNFT }) => {
  const [balance, setBalance] = useState<number | undefined>(null);
  const [createSuccess, setCreateSuccess] = useState<boolean | null>(null);

  return (
    <Box
      border={"1px solid #F3F4F6"}
      width={"400px"}
      padding={"20px"}
      height={"fit-content"}
      borderRadius={"10px"}
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
      <Join setBalance={setBalance} setCreateSuccess={setCreateSuccess} />
      {/* Uncomment this line when you want to use the Renewal component */}
      {createSuccess && (
        <Renewal balance={balance} createSuccess={createSuccess} />
      )}
    </Box>
  );
};

const Join: React.FC<MintButtonProps> = ({ setBalance, setCreateSuccess }) => {
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
      <MintButton setBalance={setBalance} setCreateSuccess={setCreateSuccess} />
    </Box>
  );
};

const Renewal: React.FC<RenewalProps> = ({ balance, createSuccess }) => {
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
      <Button
        mt={"20px"}
        backgroundColor={"black"}
        color={"white"}
        _hover={{ backgroundColor: "black", opacity: "75%" }}
        width={"full"}
        borderRadius={"30px"}
      >
        Renewal Subscription
      </Button>
    </Box>
  );
};

export default MembershipWidget;
