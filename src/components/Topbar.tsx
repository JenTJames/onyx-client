import ThemeSwitch from "./ThemeSwitch";
import { useNavigate } from "react-router-dom";
import {
  Cross2Icon,
  ExitIcon,
  GearIcon,
  HamburgerMenuIcon,
  MixerHorizontalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import useAuth from "../hooks/use-auth";
import TopbarProps from "../types/props/TopbarProps.interface";

const Topbar: React.FC<TopbarProps> = ({
  toggleSidebar,
  isSidebarExpanded,
}) => {
  const navigate = useNavigate();

  const { clearUser } = useAuth();

  const logoutHandler = () => {
    clearUser();
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex items-center sticky top-0 z-40 bg-[var(--gray-1)] justify-between py-2 px-4 border-b border-[var(--gray-6)]">
      <IconButton variant="ghost" onClick={toggleSidebar}>
        {isSidebarExpanded ? <Cross2Icon /> : <HamburgerMenuIcon />}
      </IconButton>
      <div className="flex items-center gap-3">
        <ThemeSwitch />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <IconButton variant="soft" radius="full">
              <PersonIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <MixerHorizontalIcon />
              Account
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <GearIcon />
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="crimson" onClick={logoutHandler}>
              <ExitIcon /> Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Topbar;
