import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faBlogger,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: jayantparker99@gmail.com",
    name: "Mail",
  },
  {
    icon: faGithub,
    url: "https://github.com/crash4xe",
    name: "Git Hub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/jayanta-hansda-183a071ab/",
    name: "Linkedin",
  },
  {
    icon: faBlogger,
    url: "https://dsabycrash.blogspot.com/",
    name: "Blogger",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    name: "Stack Overflow",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentSrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentSrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentSrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      {sidebar ? (
        <Sidebar list={socials} hideSidebar={showSidebar} />
      ) : (
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
          ref={headerRef}
        >
          <Box color="white" margin="0 auto">
            <HStack
              px={[4, 16]}
              py={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <nav className="mobile-header">
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  onClick={showSidebar}
                />
              </nav>
              <nav className="header">
                <HStack spacing={8}>
                  {socials.map(({ icon, url }) => (
                    <a href={url} key={url}>
                      <FontAwesomeIcon
                        icon={icon}
                        size="2x"
                        key={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></FontAwesomeIcon>
                    </a>
                  ))}
                </HStack>
              </nav>
              <nav className="header">
                <HStack spacing={8}>
                  <a href="#projects" onClick={handleClick("projects-section")}>
                    Projects
                  </a>
                  <a
                    href="#contactme"
                    onClick={handleClick("contactme-section")}
                  >
                    Contact Me
                  </a>
                </HStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
