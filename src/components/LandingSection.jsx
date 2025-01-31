import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "CRASH4XE";
const bio1 = "Frontend developer";

const LandingSection = () => {
  return (
    <FullScreenSection justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <VStack spacing={4} alignItems="center">
            <Heading
              as="h1"
              size={["xl", "3xl"]}
              noOfLines={1}
              fontFamily="Aquatico"
              letterSpacing={4}
              cursor={"default"}
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
            cursor={"default"}
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
