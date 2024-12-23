import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import { useContext } from "react";
import { ThemeContext } from "../App";

const projects = [
  {
    title: "Pix",
    description:
      "Pix, premier destination for photographers to easily share, showcase their stunning photos. Whether you're an amateur photographer, a professional artist, or somewhere in between, our platform provides an intuitive and powerful space",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://crash4xe.github.io/Pix/",
  },
  {
    title: "DSA by crash",
    description:
      "Welcome to my blog! Join me on my journey as I dive into the world of Data Structures and Algorithms (DSA). Each day, I tackle a new question, documenting my progress and insights along the way.",
    getImageSrc: () => require("../images/photo1.png"),
    url: "https://dsabycrash.blogspot.com/",
  },
];

const ProjectSection = () => {
  const { isDarkBackground } = useContext(ThemeContext);
  return (
    <FullScreenSection
      backgroundColor={isDarkBackground ? "#18181b" : "#f5f5f5"}
      color={isDarkBackground ? "#f5f5f5" : "#18181b"}
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
        }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          ></Card>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectSection;
