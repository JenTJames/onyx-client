import { DropdownMenu, IconButton } from "@radix-ui/themes";
import Brand from "./Brand";
import ThemeSwitch from "./ThemeSwitch";
import { PersonIcon } from "@radix-ui/react-icons";

const Topbar = () => {
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
            <DropdownMenu.Item color="crimson">Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Topbar;
