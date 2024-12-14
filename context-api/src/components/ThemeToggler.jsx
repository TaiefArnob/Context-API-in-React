import  { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#ddd" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggler;
