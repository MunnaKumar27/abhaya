import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxW={"3xl"} h="100vh">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {/* Listen<br/> & <br/> */}
          <Text color={"pink.500"}>
            अ  <br />
          </Text>
          <Text as={"span"} color={"black.500"}>
            BHAYA.
          </Text>
        </Heading>
        <Text fontFamily={"Inter"} fontSize={"larger"} color={"gray.600"}>
          here at your service!
        </Text>
        <Stack
          direction={"column"}
          spacing={5}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Link to="/login">
            <Button
              colorScheme={"pink"}
              bg={"pink.600"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "pink.400",
              }}
              // onClick={() => {
              //   window.open(process.env.REACT_APP_LOGIN, "_self");
              // }}
            >
              Register Now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
    // </Flex>
  );
}

export default Home;
