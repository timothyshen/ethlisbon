import { Box, Image, Badge, Text, Button, Flex, Link } from "@chakra-ui/react";

type CardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link:string;
};

const Card: React.FC<CardProps> = ({
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
  >
    <Box></Box>
    <Box p="16px">
      <Flex alignItems="center" flexDirection={"column"} paddingTop={"8px"}>
        <Image src={imgSrc} alt={title} boxSize={"96px"} />
        <Text color="black" fontSize={"18px"} textAlign={"center"} pt={"16px"} fontWeight={'semibold'}>
          {title}
        </Text>
        <Text pt={"2px"} fontSize={'12px'} color={'#4C1D95'}>{subtitle}</Text>

        <Box
          fontSize={"12px"}
          mt="12px"
          color={"#6B7280"}
          as="h4"
          lineHeight="tight"
          mb={''}
        >
          {description}
        </Box>

        <Link href={link}><Button
        mt={'24px'}
          padding={"10px 44px"}
          backgroundColor={"white"}
          border={"1px solid #E5E7EB"}
          borderRadius={"30px"}
        >
          Join
        </Button></Link>
      </Flex>
    </Box>
  </Box>
);

export default Card;
