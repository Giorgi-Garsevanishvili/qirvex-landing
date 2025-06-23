import darkIMG from "../assets/photos/night-mode.png";
import lightIMG from "../assets/photos/brightness.png";
const root = document.getElementById("root");

export const ThemeSwitch = () => {
  const toggle = () => {
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  };

  return (
    <button onClick={() => toggle()} className="theme-btn">
      <img className="theme-img" src={darkIMG} alt="Dark Theme" />
    </button>
  );
};
