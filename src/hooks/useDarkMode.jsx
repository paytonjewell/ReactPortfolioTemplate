import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    const oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    const detectedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return [darkMode, toggleDarkMode];
}
