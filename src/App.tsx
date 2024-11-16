import "./App.css";
import { useContext } from "react";
import { Button, Theme } from "@radix-ui/themes";
import ThemeContext from "./store/ThemeContext";

function App() {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) throw new Error("App must be used inside a ThemeContext");
  const { theme, toggleTheme } = themeCtx;

  return (
    <Theme accentColor="purple" appearance={theme || "light"}>
      <Button onClick={toggleTheme} variant="soft">
        Welcome to Onyx
      </Button>
    </Theme>
  );
}

export default App;
