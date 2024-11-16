import { useState } from "react";
import Theme from "../../types/Theme.type";
import ThemeContext from "../../store/ThemeContext";

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (newTheme?: Theme) => {
    if (!newTheme)
      setTheme((currentState) => (currentState === "light" ? "dark" : "light"));
    else setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
