import darkIMG from "../assets/photos/night-mode.png";
import lightIMG from "../assets/photos/brightness.png";
import { useState } from "react";

const root = document.getElementById("root");

export const ThemeSwitch = () => {
  let [dark, setDark] = useState(true);
  const toggle = () => {
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setDark(false);
    } else {
      root.classList.add("dark");
      setDark(true);
    }
  };

  return (
    <button onClick={() => toggle()} className="theme-btn">
      <img
        className="theme-img"
        src={dark ? lightIMG : darkIMG}
        alt="Dark Theme"
      />
    </button>
  );
};
