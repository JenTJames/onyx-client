import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import "@radix-ui/themes/styles.css";
import ThemeContextProvider from "./components/providers/ThemeContextProvider";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>
);
