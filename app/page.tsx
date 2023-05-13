'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "./components/Card";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={'5xl'} margin={'auto'} marginTop={'40px'} justifyContent={'space-between'} flexWrap={'wrap'} rowGap={'30px'}>
        {/* <Box border={'1px solid #E5E7EB'} height={'300px'} width={'230px'} borderRadius={'12px'}>
          <Flex alignContent={'center'} alignItems={'center'}>
            <Box backgroundColor={'red'} boxSize={'96px'}>Image</Box>
            <Text>Cool Creator</Text>
          </Flex>

        </Box> */}
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />
        <Card title={'DAO Name'} link={'/profile'} imgSrc='images/profileicon.png' subtitle={'108k Members'} description={'some description about the DAO, some sentences what its goal and idea'} />

      </Flex>
    </Box>
  );
}
