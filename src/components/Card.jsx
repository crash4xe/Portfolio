import { Heading, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { useContext } from "react";

const MotionVStack = motion(VStack);

const Card = ({ title, description, imageSrc, url }) => {
  const { isDarkBackground } = useContext(ThemeContext);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <MotionVStack
        bg="white"
        color="black"
        borderRadius="xl"
        cursor="pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 15px rgba(255, 255, 255, 0.1)",
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
        }}
        maxWidth="480px" // Set a maximum width for uniformity
        minWidth="280px" // Set a minimum width for uniformity
        boxShadow="lg"
        p={2} // Adjust padding to reduce the card size
      >
        <Image
          src={imageSrc}
          borderRadius="xl"
          alt={title}
          objectFit="cover"
          maxHeight="180px" // Set a consistent height for the image
          width="100%" // Ensure image fills the card width
        />
        <VStack spacing={4} p={4} alignItems="flex-start">
          <Heading as="h3" size="md" noOfLines={2}>
            {title}
          </Heading>
          <Text color="#64748b" fontSize="lg" noOfLines={3}>
            {description}
          </Text>
          <HStack spacing={2} alignItems="center">
            <p>Visit</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </MotionVStack>
    </a>
  );
};

export default Card;
