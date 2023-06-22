import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react';

const CardData = [
  {
    id: 1,
    image: require('../assets/images/Women- homepage.jpeg'),
    name: 'vishal',
    call: '9789844612',
  },
  {
    id: 2,
    image: require('../assets/images/Women- homepage.jpeg'),
    name: 'anurag',
    call: '9789844612',
  },
];

const CardFamily = () => {
  const handleCallButtonClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {CardData.map((cardEach, index) => {
        return (
          <Center py={6} key={cardEach.id}>
            <Box
              maxW={'320px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'xl'}
                src={'https://source.unsplash.com/user'}
                alt={'Avatar Alt'}
                mb={4}
                pos={'relative'}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: 'green.300',
                  border: '2px solid white',
                  rounded: 'full',
                  pos: 'absolute',
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {cardEach.name}
              </Heading>
              <Text fontWeight={600} color={'gray.700'} mb={4}>
                {cardEach.name}
              </Text>
              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'green.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'green.400',
                  }}
                  _focus={{
                    bg: 'green.400',
                  }}
                  onClick={() => handleCallButtonClick(cardEach.call)}>
                  Call Now
                </Button>
                <Link href="/message">
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _focus={{
                      bg: 'blue.500',
                    }}>
                    Message
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Center>
        );
      })}
    </>
  );
};

export default CardFamily;
