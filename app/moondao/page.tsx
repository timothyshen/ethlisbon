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
          title={"Lens"}
          subtitle={"108k members"}
          address="0x2c934...a180"
          description="Len's mission is to create a self-sustaining, self-governing
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
            imgSrc="images/one.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/two.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/three.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/four.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
          <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/five.png"
            subtitle={"108k Members"}
            description={
              "MoonDAO`s mission is to create a self-sustaining, self-governing "
            }
            link={"/moondao/membership"}
          />
           <MembershipCard
            title={"Gold Membership"}
            imgSrc="images/six.png"
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
