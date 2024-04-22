import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hola, I am crash4xe";
const bio = "A Frontend Developer";
const description = "Noobie starting out explore";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl"></Avatar>
        <p>{greeting}</p>

        <Heading>{bio}</Heading>
        <Heading>{description}</Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
