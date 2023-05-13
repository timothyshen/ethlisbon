"use client";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {

  return (
    <Box width={'100%'} paddingY={'24px'} backgroundColor={'#EDE9FF'}>
        <Flex height={'32px'} alignItems={'center'} maxWidth={'5xl'} paddingY={'24px'} margin={'auto'} justifyContent={'space-between'} fontSize={'14px'}>
            <Text>Membership Thing</Text>
            <Flex alignItems={'center'} justifyContent={'space-between'} >
                <Link padding={'10px 16px'}>Documentation</Link>
                <Link padding={'10px 16px'}>About Us</Link>
                {/* <Button backgroundColor={'black'} borderRadius={'30px'} color={'white'} fontSize={'14px'} _hover={{backgroundColor:'#black', opacity:'75%'}}>Connect Wallet</Button> */}
                <ConnectButton accountStatus="address" showBalance={false} chainStatus="icon"/>
            </Flex>
        </Flex>
    </Box>
  );
}
