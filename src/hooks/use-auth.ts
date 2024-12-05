import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const useAuth = () => {
  const authCtx = useContext(AuthContext);
  if (!authCtx) throw new Error("Topbar must be used inside an AuthContext");
  return authCtx;
};

export default useAuth;
