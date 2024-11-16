import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import "@radix-ui/themes/styles.css";
import ThemeContextProvider from "./components/providers/ThemeContextProvider";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
