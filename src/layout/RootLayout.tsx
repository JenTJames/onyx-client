import Topbar from "../components/Topbar";
import WithChildren from "../types/props/WithChildren.props.interface";

const RootLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      <Topbar />
      <div className="flex flex-col gap-3 px-4">{children}</div>
    </div>
  );
};

export default RootLayout;
