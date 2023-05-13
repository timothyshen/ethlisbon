"use client";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import MintButton from "@/app/components/MintButton";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
};

const MembershipWidget: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
}) => (
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
    <Join />
    {/* <Rewnewal /> */}
  </Box>
);

const Join: React.FC = () => {
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
      <MintButton />
    </Box>
  );
};

const Rewnewal: React.FC = () => {
  return (
    <Box
      backgroundColor={"#F3F4F6"}
      mt={"20px"}
      borderRadius={"10px"}
      padding={"20px"}
    >
      <Box backgroundColor={"white"} borderRadius={"10px"} padding={"12px"}>
        <Flex>
          <Text>Image</Text>
          <Box>
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              You are part of Lens DAO
            </Text>
            <Text fontSize={"12px"} mt={"14px"} color={"#6B7280"}>
              You have 12 more months of fun with this DAO.
            </Text>
          </Box>
        </Flex>
        <Text fontSize={"12px"}>
          Next payment{" "}
          <Text as={"span"} fontSize={"14px"}>
            13 JUNE 2023
          </Text>
        </Text>
      </Box>
      <Flex fontSize={"11px"} justifyContent={"space-between"} mt={"28px"}>
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
