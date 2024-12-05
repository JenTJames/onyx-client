import Brand from "./Brand";
import ThemeSwitch from "./ThemeSwitch";
import { useNavigate } from "react-router-dom";
import { PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const Topbar = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  if (!authCtx) throw new Error("Topbar must be used inside an AuthContext");
  const { clearUser } = authCtx;

  const logoutHandler = () => {
    clearUser();
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex items-center justify-between py-2 px-4 border-b border-[var(--gray-6)]">
      <Brand showLabel={false} />
      <div className="flex items-center gap-3">
        <ThemeSwitch />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <IconButton variant="soft" radius="full">
              <PersonIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Account</DropdownMenu.Item>
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="crimson" onClick={logoutHandler}>
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Topbar;
