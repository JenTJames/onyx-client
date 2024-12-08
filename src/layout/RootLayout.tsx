import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded((currentState) => !currentState);

  return (
    <div className="flex">
      <Sidebar isFull={isExpanded} />
      <div className="flex flex-col gap-10 flex-1">
        <Topbar isSidebarExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col gap-3 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
