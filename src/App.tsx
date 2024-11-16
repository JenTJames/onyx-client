import "./App.css";
import { useContext } from "react";
import { Button, Theme } from "@radix-ui/themes";
import ThemeContext from "./store/ThemeContext";
import ThemeType from "./types/Theme.type";

function App() {
  const themeCtx = useContext(ThemeContext);
  return (
    <Theme
      accentColor="purple"
      appearance={(themeCtx?.theme as ThemeType) || "light"}
    >
      <Button variant="soft">Welcome to Onyx</Button>
    </Theme>
  );
}

export default App;
