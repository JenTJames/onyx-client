import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/sign-up" element={<SignupPage />} />

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default Router;
