import { useEffect, useState } from "react";
import User from "../../types/User.interface";
import AuthContext from "../../store/AuthContext";
import useHttp from "../../hooks/use-http";
import { toast } from "sonner";

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const { requestData } = useHttp();

  const clearUser = () => setLoggedInUser(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId: number = parseInt(
        localStorage.getItem("userId") || "0",
        10
      );
      if (!userId) return;
      const response = await requestData<User>(`/users/${userId}`);
      if (response.isError) return toast.error(response.message);
      setLoggedInUser(response.data);
    };
    if (localStorage.getItem("userId")) fetchUser();
  }, [requestData]);

  return (
    <AuthContext.Provider
      value={{
        user: loggedInUser,
        setUser: setLoggedInUser,
        clearUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
