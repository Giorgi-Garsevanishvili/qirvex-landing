import "./style/App.css";
import "./style/branding.css";
import "./style/projects.css";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/welcome-banner";
import { ProjectCard } from "./components/projects-component";

function App() {
  return (
    <>
      <Welcome />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default App;
