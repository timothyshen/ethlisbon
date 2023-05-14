"use client";
import { Box, Image, Badge, Text, Button, Flex } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";
import { FollowButton } from "../components/FollowButton";
import { ProfileOwnedByMe, Profile, useFollow, useProfile, useWalletLogout } from '@lens-protocol/react-web';
import { useActiveProfile } from '@lens-protocol/react-web';


type CardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  address: string;
};

const ProfileCard: React.FC<CardProps> = ({
  imgSrc,
  title,
  subtitle,
  description,
  address,
}) => {

  const { data: moondaoclub, loading:moonIsLoading } = useProfile({
    handle: "moondaoclub.test",
  });

const { data:profile, error:profileError, loading:profileLoading } = useActiveProfile();

console.log(profile)
console.log(moondaoclub)


  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="12px"
      width={"280px"}
      padding={"16px"}
      height={"fit-content"}
      borderColor={"#E5E7EB"}
    >
      <Text color="black" fontSize={"18px"} fontWeight={"semibold"}>
        {title}
      </Text>
      <Text fontSize={"12px"} color={"#4C1D95"} mb={"36px"}>
        {subtitle}
      </Text>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Image src={imgSrc} alt={title} width={"120px"} />
      </Flex>
      <LoginButton />
       { !moonIsLoading && !profileLoading && profile != null && <FollowButton followee={moondaoclub as Profile} follower={profile as ProfileOwnedByMe}/>}

      <Box mt={"36px"}>
        <Text textTransform={"uppercase"} fontSize={"12px"} color={"#4B5563"}>
          Address
        </Text>
        <Text fontWeight={"semibold"} color={"#4C1D95"}>
          {address}
        </Text>
      </Box>

      <Box mt={"20px"}>
        <Text textTransform={"uppercase"} fontSize={"12px"} color={"#4B5563"}>
          TLDR:
        </Text>
        <Text fontSize={"12px"} color={"#374151"}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileCard;
