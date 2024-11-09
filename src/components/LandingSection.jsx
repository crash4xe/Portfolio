import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import headshot from "../assets/headshot.jpg";

const greeting = "CRASH4XE";
const bio1 = "Frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#18181b"
    >
      <VStack spacing={16}>
        <VStack spacing={4} alignItems="center">
          {/* <Avatar name="Jayanta Hansda" src={headshot} size="2xl"></Avatar> */}
          <Heading
            as="h1"
            size={["xl", "3xl"]}
            noOfLines={1}
            fontFamily="Kiona"
          >
            {greeting}
          </Heading>
        </VStack>
        <VStack spacing={6}>
          <Heading as="h1" size="md" noOfLines={1} fontFamily="Kiona">
            {bio1}
          </Heading>
          {/* <Heading as="h1" size="md" noOfLines={1} fontFamily="Kiona">
            {bio2}
          </Heading> */}
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
