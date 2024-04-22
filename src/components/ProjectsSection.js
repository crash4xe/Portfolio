import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const ProjectSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
      >
        <Card />
      </Box>
    </FullScreenSection>
  );
};

export default ProjectSection;
