import { useState } from "react";
import User from "../../types/User.interface";
import AuthContext from "../../store/AuthContext";

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user: loggedInUser,
        setUser: setLoggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
