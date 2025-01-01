import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const useTheme = () => {
    const themeCtx = useContext(ThemeContext);
    if (!themeCtx) throw new Error("useTheme must be used inside a ThemeProvider");
    return themeCtx;
};

export default useTheme;
