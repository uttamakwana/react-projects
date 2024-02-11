import { useState } from "react";
import { LightModeIcon, DarkModeIcon } from "../../constants/icons.js";
// css
import "./theme-button.css";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(true);

  // toggle theme function
  function toggleTheme() {
    setIsDark(!isDark);

    // get the root element and change variables of it
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--clr-bg", "hsl(0, 0%, 100%)");
      root.style.setProperty("--clr-bg-50", "hsl(0, 0%, 95%)");
      root.style.setProperty("--clr-bg-100", "hsl(0, 0%, 90%)");
      root.style.setProperty("--clr-text", "hsl(214, 76%, 19%)");
      root.style.setProperty("--clr-text-50", "hsl(214, 76%, 25%)");
      root.style.setProperty("--clr-text-100", "hsl(214, 76%, 31%)");
    } else {
      root.style.setProperty("--clr-bg", "hsl(214, 76%, 19%)");
      root.style.setProperty("--clr-bg-50", "hsl(214, 76%, 25%)");
      root.style.setProperty("--clr-bg-100", "hsl(214, 76%, 31%)");
      root.style.setProperty("--clr-text", "hsl(0, 0%, 100%)");
      root.style.setProperty("--clr-text-50", "hsl(0, 0%, 90%)");
      root.style.setProperty("--clr-text-100", "hsl(0, 0%, 80%)");
    }
  }

  // return
  return (
    <div className="theme-button-container flex-center" onClick={toggleTheme}>
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
};

export default ThemeButton;
