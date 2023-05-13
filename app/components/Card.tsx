import { Box, Image, Badge, Text, Button, Flex } from "@chakra-ui/react"

type CardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ imgSrc, title, subtitle, description }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="12px" height={'300px'} width={'230px'}>
    <Box>
    
    </Box>
    <Box p="16px">
      <Flex alignItems="center" flexDirection={'column'} paddingTop={'8px'}>
        <Image src={imgSrc} alt={title} boxSize={'96px'} />
        <Text
          color="black"
          fontSize={'18px'}
          textAlign={'center'}
        >
          {title}
        </Text>
        <Text>
          {subtitle}
        </Text>

        <Box fontSize={'12px'} mt="1" color={'#6B7280'} as="h4" lineHeight="tight">
        {description}
      </Box>

      <Button padding={'10px 16px'}>
        Join
      </Button>

      </Flex>


    </Box>
  </Box>
);

export default Card;