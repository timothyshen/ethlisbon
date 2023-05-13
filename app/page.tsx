"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "./components/Card";
import MintButton from "./components/MintButton";

export default function Home() {
  return (
    <Box>
      <Flex maxWidth={'5xl'} margin={'auto'} marginTop={'40px'} justifyContent={'space-between'} flexWrap={'wrap'} rowGap={'30px'}>
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
