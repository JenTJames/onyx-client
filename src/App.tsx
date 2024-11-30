import "./App.css";
import { useContext } from "react";
import { Theme } from "@radix-ui/themes";
import ThemeContext from "./store/ThemeContext";
import { Toaster } from "sonner";
import Router from "./components/Router";
import AuthContextProvider from "./components/providers/AuthContextProvider";

function App() {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) throw new Error("App must be used inside a ThemeContext");
  const { theme } = themeCtx;

  return (
    <Theme accentColor="purple" appearance={theme || "light"} radius="large">
      <Toaster theme={theme} richColors closeButton />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </Theme>
  );
}

export default App;
