import "./style/App.css";
import "./style/branding.css";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/welcome-banner";

function App() {
  return (
    <>
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
