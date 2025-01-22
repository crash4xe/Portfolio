import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const {isDarkBackground} = useContext(ThemeContext);
  return (
    <Box backgroundColor={isDarkBackground ? "#18181b" : "#f5f5f5"}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color={isDarkBackground ? "#f5f5f5" : "#18181b" }
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          Copyright . 2024
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
