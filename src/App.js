import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
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
          <main>
            <Header />
            <LandingSection />
            <ProjectSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </ThemeContext.Provider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
export { ThemeContext };
