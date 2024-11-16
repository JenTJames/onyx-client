import { createContext } from "react";
import ThemeContextType from "../types/ThemeContextType";

const ThemeContext = createContext<ThemeContextType | undefined>({
  theme: "",
  toggleTheme: () => {},
});

export default ThemeContext;
