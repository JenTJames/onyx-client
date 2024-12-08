import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import WithChildren from "../types/props/WithChildren.props.interface";

const RootLayout: React.FC<WithChildren> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded((currentState) => !currentState);

  return (
    <div className="flex">
      <Sidebar isFull={isExpanded} />
      <div className="flex flex-col gap-10">
        <Topbar isSidebarExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col gap-3 px-4">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
