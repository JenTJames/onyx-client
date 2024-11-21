// import { toast } from "sonner";
import * as Switch from "@radix-ui/react-switch";
import ThemeContext from "../store/ThemeContext";
import { useContext, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) throw new Error("App must be used inside a ThemeContext");
  const { toggleTheme } = themeCtx;

  // const { requestData } = useHttp();

  // useEffect(() => {
  //   const fetchThemePreference = async () => {
  //     if (!localStorage.getItem("theme")) {
  //       const userId = localStorage.getItem("userId");
  //       const { data: theme, isError } = await requestData(
  //         `/users/${userId}/preferences/theme`
  //       );
  //       if (isError) return;
  //       toggleTheme(); // TODO: Set users' preferred theme as fetched from the BE
  //       setChecked(theme ? true : false);
  //       localStorage.setItem("theme", theme);
  //     } else {
  //       toggleTheme(); // TODO: Set users' preferred theme as fetched from the BE
  //       setChecked(localStorage.getItem("theme") === "dark" ? true : false);
  //     }
  //   };
  //   fetchThemePreference();
  // }, [toggleTheme, requestData]);

  const updateTheme = async () => {
    // const userId = localStorage.getItem("userId");
    // const { isError } = await requestData(
    //   `/users/${userId}/preferences/theme`,
    //   {
    //     method: "PATCH",
    //   }
    // );
    // if (isError) return toast.warning("Could not change theme");
  };

  const changeAppearanceHandler = async (value: boolean) => {
    setChecked(value);
    const theme = value ? "dark" : "light";
    localStorage.setItem("theme", theme);
    toggleTheme();
    await updateTheme();
  };

  return (
    <>
      <Switch.Root
        className="w-[42px] h-[25px] rounded-full border border-[var(--accent-6)] relative data-[state=checked]:bg-[var(--accent-2)] outline-none cursor-default"
        checked={checked}
        onCheckedChange={changeAppearanceHandler}
      >
        <Switch.Thumb className="w-[19px] h-[19px] bg-[var(--accent-3)] rounded-full border border-[var(--accent-7)] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] flex justify-center items-center">
          {checked ? (
            <MoonIcon className="text-[var(--accent-11)] w-3" />
          ) : (
            <SunIcon className="text-[var(--accent-11)] w-3" />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};
export default ThemeSwitch;
