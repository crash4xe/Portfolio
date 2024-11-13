import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const FullScreenSection = ({ children, ...boxProps }) => {
  const { isDarkBackground } = useContext(ThemeContext);
  return (
    <VStack
      backgroundColor={isDarkBackground ? "#18181b" : "#f5f5f5"}
      color={isDarkBackground ? "#f5f5f5" : "#18181b"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
