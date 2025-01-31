import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import { createContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  return (
    <ChakraProvider>
      <AlertProvider>
        <ThemeContext.Provider
          value={{ isDarkBackground, setIsDarkBackground }}
        >
          <main style={{backgroundColor: isDarkBackground ? "#18181b" : "#f5f5f5",
              color: isDarkBackground ? "#f5f5f5" : "#18181b"}}>
            <Header />
            <LandingSection />
            <ProjectSection />
            <ContactMeSection />
            <Alert />
          </main>
        </ThemeContext.Provider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
export { ThemeContext };
