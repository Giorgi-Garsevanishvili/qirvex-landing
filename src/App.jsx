import "./style/App.scss";
import "./style/branding.scss";
import "./style/projects.scss";
import "./style/themes.scss";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/welcome-banner";
import { ProjectCard } from "./components/projects-component";
import { ThemeSwitch } from "./components/theme";

function App() {
  return (
    <>
      <ThemeSwitch />
      <Welcome />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default App;
