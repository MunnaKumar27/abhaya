import React from "react";
import {
  Heading,
  Text,
  HStack,
  Tag,
  Container,
  VStack,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const About = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading
          as="h1"
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={48}
          textTransform={"uppercase"}
          mb={7}
          color={"pink.500"}
        >
          About The Project
        </Heading>
        <Text fontFamily={"poppins"}as="p" fontSize="lg" marginTop="3">
        <b> Abhaya</b> - Women Safety Application This web based Application is
          helpful to ensure safety and protecting rights of Women.

        <Heading as="h6" pt={3} pb={1} color="grey">What problem I am trying to solve? </Heading>
           Women think twice before stepping out of their
          house, they live in constant fear. Some of them are even subjected to
          domestic violence and not well aware of constitutional laws and the
          organisations to whom they can ask to help them. So our aim is to
          provide safety as well creating awareness about constitutional rights
          and various NGOs to help them. <br/>
          

          <Heading as="h6" pt={3} pb={1} color="grey">How we are solving it? </Heading>
        <BlogTags tags={["reactjs", "google maps", "mapbox", "twilio"]} marginTop="3" marginBottom="2" />
        <br/>

         
          <br/>
          <br/>
          I am providing <b>live location</b> sharing through
          SMS , <b>calling family </b>members and <b> organisations</b> like <b>police station,</b>
          office which are nearer to their current location.
          <br/>
          <b> Creating awareness</b> of <b> constitutional law </b> and <b>bringing justice</b> to all victims through<b> NGOs </b> 
           and contact us section for assisting with their <b>issues. </b>
          
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
