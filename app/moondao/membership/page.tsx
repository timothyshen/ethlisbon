"use client";

import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import ProfileCard from "../profileCard";
import MembershipWidget from "./membershipWidget";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={"6xl"} margin={"auto"} marginTop={"40px"} gap={'20px'} pb={'100px'}>
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
          <Box position={'relative'} height='500px' width={'500px'}>
            <Image src="/images/seven.png" alt={"profile"} width={"600px"} height={'fit-content'} />
            <Flex flexDirection={'column'} position={'absolute'} float={'left'} zIndex={'1000'} bottom={'10px'} left={'20px'}>
              <Box backgroundColor={'white'} opacity={'25%'} width={'200px'} height={'20px'} borderRadius={'5px 5px 0px 0px'}>
                <Text color={'black'} fontWeight={'semibold'} textAlign={'center'} fontSize={'12px'}>0x2c934...a180</Text>
              </Box>
              <Flex backgroundColor={'white'} opacity={'50%'} width={'450px'} height={'100px'} borderRadius={'0px 5px 5px 10px'} alignItems={'center'} gap={'10px'} justifyContent={'center'}>
                <Box border={'1px dotted gray'} boxSize={'90px'} borderRadius={'5px'}></Box>
                <Box border={'1px dotted gray'} boxSize={'90px'} borderRadius={'5px'}></Box>
                <Box border={'1px dotted gray'} boxSize={'90px'} borderRadius={'5px'}></Box>
                <Box border={'1px dotted gray'} boxSize={'90px'} borderRadius={'5px'}></Box>
              </Flex>
            </Flex>
          </Box>
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
