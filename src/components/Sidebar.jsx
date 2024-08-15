import { HStack, VStack } from "@chakra-ui/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  return (
    <VStack
      position="fixed"
      spacing={6}
      zIndex={10}
      w="250px"
      color={"white"}
      bg="#18181b"
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
    </VStack>
  );
};

export default Sidebar;
