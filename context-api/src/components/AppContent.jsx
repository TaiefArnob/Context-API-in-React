import  { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import DisplayTheme from "./DisplayTheme";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DisplayTheme />
      <ThemeToggler />
    </div>
  );
};

export default AppContent;
