import { Box, Image, Badge, Text, Button, Flex } from "@chakra-ui/react";

type CardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
};

const MembershipCard: React.FC<CardProps> = ({
  imgSrc,
  title,
  subtitle,
  description,
}) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="12px"
    width={"230px"}
    overflow={'hidden'}
  >
    <Image src={imgSrc} alt={title} width={'full'} />
    <Box p="16px">
        <Text color="black" fontSize={"18px"} fontWeight={'semibold'}>
          {title}
        </Text>
        <Text fontSize={'12px'} color={'#4C1D95'}>{subtitle}</Text>

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
          <Flex>
            <Box>
              <Text>PRICE</Text>
              <Text>10 ETH</Text>
            </Box>
            <Button>Buy now</Button>
          </Flex>

        </Box>
    </Box>
  </Box>
);

export default MembershipCard
