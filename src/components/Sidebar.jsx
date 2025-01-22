import { HStack, VStack } from "@chakra-ui/react";
import { faToggleOff, faToggleOn, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Sidebar = (props) => {
  const {isDarkBackground, setIsDarkBackground} = useContext(ThemeContext)
  return (
    <VStack
      position="fixed"
      spacing={6}
      zIndex={10}
      w="250px"
      color={isDarkBackground ? "rgba(24, 24, 27, 1)" : "rgba(245, 245, 245, 1)" }
      bg= {isDarkBackground ? "rgba(245, 245, 245, 0.5)" : "rgba(24, 24, 27, 0.5)"}
      align="left"
      py={5}
      px={10}
      height="100vh"
      borderTopRightRadius={20}
      borderBottomRightRadius={20}
    >
      <span align="right">
        <FontAwesomeIcon icon={faXmark} size="xl" onClick={props.hideSidebar} />
      </span>
      {props.list.map(({ url, name, icon }) => (
        <HStack spacing={4}>
          <FontAwesomeIcon icon={icon} size="x" />
          <a href={url}>{name}</a>
        </HStack>
      ))}

      <HStack spacing={4} alignItems={"center"}><p>Dark Mode</p> <FontAwesomeIcon icon={isDarkBackground ? faToggleOn : faToggleOff} size="xl" onClick={()=> setIsDarkBackground(!isDarkBackground )}></FontAwesomeIcon></HStack>
    </VStack>
  );
};

export default Sidebar;
