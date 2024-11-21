import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "../pages/SigninPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SigninPage />} />

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default Router;
