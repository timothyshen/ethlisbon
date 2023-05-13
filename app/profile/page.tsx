"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import MembershipCard from "./membershipCard";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={"5xl"} margin={"auto"} marginTop={"40px"} gap={"56px"}>
        {/* <ProfileCard
          imgSrc=""
          title={"Moon DAO"}
          subtitle="108k members"
          address="0x2c934...a180"
          description="MoonDAO's mission is to create a self-sustaining, self-governing
                settlement on the Moon by 2030 to act as a launch point for
                humanity to explore the cosmos."
        /> */}
        <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
}
