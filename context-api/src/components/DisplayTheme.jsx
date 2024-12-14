import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ fontSize: "18px", textAlign: "center" }}>
      Current Theme: <strong>{theme.toUpperCase()}</strong>
    </p>
  );
};

export default DisplayTheme;
