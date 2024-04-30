import { Heading, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" borderRadius="15px">
      <Image src={imageSrc} borderRadius="10px"></Image>
      <VStack spacing={4} padding="20px" alignItems="flex-start">
        <Heading fontSize="xl">{title}</Heading>
        <Text>{description}</Text>
        <Text as="b">
          See More{" "}
          <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
