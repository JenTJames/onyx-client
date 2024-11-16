import Theme from "./Theme.type";

type ThemeContextType = {
  theme: string;
  toggleTheme: (newTheme: Theme) => void;
};

export default ThemeContextType;
