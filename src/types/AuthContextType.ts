import User from "./User.interface";

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export default AuthContextType;
