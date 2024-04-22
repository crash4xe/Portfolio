import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faEnvelope, url: "mailto: jayantparker99@gmail.com" },
  { icon: faGithub, url: "@fortawesome/free-brands-svg-icons" },
  { icon: faLinkedin, url: "https://www.linkedin.com/" },
  { icon: faInstagram, url: "https://instagram.com/" },
];

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <a href={socials[0].url}>
                <FontAwesomeIcon
                  icon={socials[0].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              <a href={socials[1].url}>
                <FontAwesomeIcon
                  icon={socials[1].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              <a href={socials[2].url}>
                <FontAwesomeIcon
                  icon={socials[2].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              <a href={socials[3].url}>
                {" "}
                <FontAwesomeIcon
                  icon={socials[3].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#">Projects</a>
              <a href="#">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
