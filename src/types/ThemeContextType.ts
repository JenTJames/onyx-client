import Theme from "./Theme.type";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export default ThemeContextType;
