"use client";

import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import ProfileCard from "../profileCard";
import MembershipWidget from "./membershipWidget";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={"6xl"} margin={"auto"} marginTop={"40px"} gap={"56px"}>
        <ProfileCard
          imgSrc="/images/profileAva.png"
          title={"Moon DAO"}
          subtitle={"108k members"}
          address="0x2c934...a180"
          description="MoonDAO's mission is to create a self-sustaining, self-governing
                settlement on the Moon by 2030 to act as a launch point for
                humanity to explore the cosmos."
        />
        <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
          <Image src="/images/profile.png" alt={"profile"} width={"500px"} />
        </Flex>
        <MembershipWidget
          title={"Golden Membership"}
          subtitle="108k members"
          description="MoonDAO's mission is to create a self-sustaining, self-governing settlement on the Moon by 2030 to act as a launch point for humanity to explore the cosmos."
        />
      </Flex>
    </Box>
  );
}
