import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Avatar, Text, Flex, Box } from "@radix-ui/themes";
import {
  InfoCircledIcon,
  CrumpledPaperIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";
import SidebarProps from "../types/props/SidebarProps.interface";

const NAVLINKS = [
  {
    id: 1,
    label: "Projects",
    icon: <ArchiveIcon />,
    path: "/projects",
  },
];

const getNavlinkClassName = (isActive: boolean) =>
  `flex items-center gap-3 px-2 py-2 rounded-md ${
    isActive ? "bg-[var(--accent-5)]" : "hover:bg-[var(--accent-3)]"
  }`;

const Sidebar: React.FC<SidebarProps> = ({ isFull }) => {
  return (
    <motion.div
      initial={{ width: 80 }}
      animate={{ width: isFull ? 340 : 80 }}
      exit={{ width: 80 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-between h-dvh p-5 bg-[var(--accent-2)] sticky top-0"
    >
      <Flex gap="1" align="center">
        <Avatar
          fallback={<CrumpledPaperIcon width="20px" height="20px" />}
          size="2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isFull ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isFull && (
            <Text className="text-[var(--accent-11)]" size="2">
              Onyx
            </Text>
          )}
        </motion.div>
      </Flex>
      <Flex direction="column" gap="2">
        {NAVLINKS.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.path}
            className={({ isActive }) => getNavlinkClassName(isActive)}
          >
            <Box className={`flex items-center`}>{navLink.icon}</Box>
            {isFull && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isFull ? 1 : 0 }}
                exit={{ opacity: 0 }}
              >
                <Text size="2" className="truncate">
                  {navLink.label}
                </Text>
              </motion.div>
            )}
          </NavLink>
        ))}
      </Flex>
      <NavLink
        to="/support"
        className={({ isActive }) => getNavlinkClassName(isActive)}
      >
        <Box className={`${isFull ? "text-lg" : "text-xl"} flex items-center`}>
          <InfoCircledIcon />
        </Box>
        {isFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFull ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <Text size="2" className="truncate">
              Help & Support
            </Text>
          </motion.div>
        )}
      </NavLink>
    </motion.div>
  );
};

export default Sidebar;
