"use client";
import { Box, Flex } from "@chakra-ui/react";
import MembershipCard from "./membershipCard";
import ProfileCard from "./profileCard";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={"5xl"} margin={"auto"} marginTop={"40px"} gap={"56px"}>
        <ProfileCard
          imgSrc="/images/profileAva.png"
          title={"Moon DAO"}
          subtitle={"108k members"}
          address="0x2c934...a180"
          description="MoonDAO's mission is to create a self-sustaining, self-governing
                settlement on the Moon by 2030 to act as a launch point for
                humanity to explore the cosmos."
        />
        <Flex
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          rowGap={"30px"}
        >
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/card.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/card.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/card.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/card.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
