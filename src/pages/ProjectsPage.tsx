import { toast } from "sonner";
import useAuth from "../hooks/use-auth";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paginator from "../components/Paginator";
import Project from "../types/Project.interface";
import { Button, Heading } from "@radix-ui/themes";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const { user } = useAuth();

  const { isLoading, requestData } = useHttp();

  useEffect(() => {
    const getUserProjects = async () => {
      const response = await requestData<Project[]>(
        `/projects?ownerId=${user?.id}`
      );
      if (response.isError) return toast.error(response.message);
      setProjects(response.data || []);
    };
    getUserProjects();
  }, [requestData, user]);

  return (
    <>
      <div className="flex justify-between">
        <Heading>Projects</Heading>
        <Button onClick={() => navigate("create")}>
          <PlusCircledIcon />
          Create Project
        </Button>
      </div>
      <Paginator loading={isLoading} items={projects} about="projects" />
    </>
  );
};

export default ProjectsPage;
