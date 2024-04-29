import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectSection />
        <ContactMeSection />
      </main>
    </ChakraProvider>
  );
}

export default App;
