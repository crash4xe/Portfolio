import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import headshot from "../assets/headshot.jpg";
import { useContext } from "react";
import { ThemeContext } from "../App";

const greeting = "CRASH4XE";
const bio1 = "Frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  const { isDarkBackground } = useContext(ThemeContext);
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor={isDarkBackground ? "#18181b" : "#f5f5f5"}
      color={isDarkBackground ? "#f5f5f5" : "#18181b"}
    >
      <VStack spacing={8}>
        <VStack spacing={4} alignItems="center">
          {/* <Avatar name="Jayanta Hansda" src={headshot} size="2xl"></Avatar> */}
          <Heading
            as="h1"
            size={["xl", "3xl"]}
            noOfLines={1}
            fontFamily="Aquatico"
            letterSpacing={4}
          >
            {greeting}
          </Heading>
        </VStack>
        <VStack spacing={4}>
          <Heading
            as="h1"
            size={["sm", "md"]}
            noOfLines={1}
            fontFamily="Aquatico"
            letterSpacing={4}
          >
            {bio1}
          </Heading>
          {/* <Heading as="h1" size="md" noOfLines={1} fontFamily="Aquatico">
            {bio2}
          </Heading> */}
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
