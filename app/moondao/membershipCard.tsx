'use client'
import { Box, Image, Badge, Text, Button, Flex, Link } from "@chakra-ui/react";

type CardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link:string
};

const MembershipCard: React.FC<CardProps> = ({
  imgSrc,
  title,
  subtitle,
  description,
  link
}) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="12px"
    width={"230px"}
    padding={'16px'}
    backgroundColor={'white'}
    borderColor={'#E5E7EB'}
  >
    <Image src={imgSrc} alt={title} width={'224px'} />
        <Text color="black" fontSize={"18px"} fontWeight={'semibold'}>
          {title}
        </Text>
        <Text fontSize={'12px'} fontWeight={'semibold'} color={'#4C1D95'}>{subtitle}</Text>

        <Box
          fontSize={"12px"}
          mt="16px"
          color={"#6B7280"}
          as="h4"
          lineHeight="tight"
          mb={''}
        >
          {description}
        </Box>

        <Box backgroundColor={'#F3F4F6'} mt={'16px'} borderRadius={'10px'}>
          <Flex justifyContent={'space-between'} alignItems={'center'} padding={'12px 16px'}>
            <Box>
              <Text fontSize={'9px'} fontWeight={'semibold'} color={'#9CA3AF'}>PRICE</Text>
              <Text fontSize={"16px"} fontWeight={'semibold'}>10 ETH</Text>
            </Box>
            <Link href={link}><Button backgroundColor={'black'} color={'white'} _hover={{backgroundColor:'black',opacity:'75%'}}>Join</Button></Link>
          </Flex>

        </Box>

  </Box>
);

export default MembershipCard
