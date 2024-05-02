import { Heading, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" borderRadius="xl" cursor="pointer">
      <Image src={imageSrc} borderRadius="xl" alt={title}></Image>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <p>See More</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
