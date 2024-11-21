import ThemeSwitch from "../components/ThemeSwitch";
import Brand from "../components/Brand";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex relative">
      <div className="absolute top-0 w-full flex py-3 px-5 justify-between">
        <Brand showLabel={false} />
        <ThemeSwitch />
      </div>
      <div className="flex flex-1 flex-col gap-5 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
