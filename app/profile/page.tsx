'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import MembershipCard from "./membershipCard";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={'5xl'} margin={'auto'} marginTop={'40px'} justifyContent={'space-between'}>
        {/* <Box border={'1px solid #E5E7EB'} height={'300px'} width={'230px'} borderRadius={'12px'}>
          <Flex alignContent={'center'} alignItems={'center'}>
            <Box backgroundColor={'red'} boxSize={'96px'}>Image</Box>
            <Text>Cool Creator</Text>
          </Flex>

        </Box> */}
        <MembershipCard title={'Gold Membership'} imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s' subtitle={'108k Members'} description={'MoonDAO`s mission is to create a self-sustaining, self-governing '} />
      </Flex>
    </Box>
  );
}