import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Momentum",
    description:
      "Momentum is a goal-oriented productivity application designed to help users track their daily activities and keep them motivated by showcasing their progress over the year. The app allows users to set daily tasks, track it's completion, and monitor their consistency over time. By maintaining streaks, users can visually see their consistency, fostering a sense of accomplishment and encouraging them to keep working towards their goals.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://crash4xe.github.io/Momentum/",
  },
  {
    title: "DSA by crash",
    description:
      "Welcome to my blog! Join me on my journey as I dive into the world of Data Structures and Algorithms (DSA). Each day, I tackle a new question, documenting my progress and insights along the way.",
    getImageSrc: () => require("../images/photo1.png"),
    url: "https://dsabycrash.blogspot.com/",
  },
  {
    title: "Pix",
    description:
      "Pix, My very first project which I did back in 2021 when I started with React. Basic clone of instagram, where you can add image by providing an link and it will be displayed on the page.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://crash4xe.github.io/Pix/",
  },
];

const MotionBox = motion(Box);

const ProjectSection = () => {
  return (
    <FullScreenSection
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>
      <MotionBox
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
        }}
        gridGap={8}
        initial="hidden"
        whileInView="visible"

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
      </MotionBox>
    </FullScreenSection>
  );
};

export default ProjectSection;
