"use client";

import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

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
            <Image src="/images/profile.png" alt={"profile"} width={'500px'} />
        </Flex>
        <Box border={'1px solid black'} width={'400px'} padding={'20px'} height={'fit-content'}>
            <Text>Golden Membership</Text>
            <Text>108k members</Text>
            <Text>MoonDAO&apos;s mission is to create a self-sustaining, self-governing settlement on the Moon by 2030 to act as a launch point for humanity to explore the cosmos.</Text>
            <Box backgroundColor={'#F3F4F6'}>
              <Flex>
                <Box>
                  <Text>Memebership Price</Text>
                  <Text>10ETH</Text>
                </Box>
                <Box>
                <Text>Annually subscription price</Text>
                  <Text>10ETH</Text>
                </Box>
              </Flex>
              <Button backgroundColor={'black'} color={'white'} _hover={{backgroundColor:'black',opacity:'75%'}}>Join</Button>

            </Box>
        </Box>
      </Flex>
    </Box>
  );
}
