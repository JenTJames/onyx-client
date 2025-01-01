import TasksPage from "../pages/TasksPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import ProjectsPage from "../pages/ProjectsPage";
import CreateProjectPage from "../pages/CreateProjectPage";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ProjectOverviewPage from "../pages/ProjectOverviewPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/projects" element={<RootLayout />}>
        <Route index element={<ProjectsPage />} />
        <Route path="create" element={<CreateProjectPage />} />
        <Route path=":projectId/overview" element={<ProjectOverviewPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default Router;
