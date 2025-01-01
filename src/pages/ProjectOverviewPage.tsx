import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColumnInfo from "../components/ColumnInfo";
import { Avatar, Button, Card, Heading } from "@radix-ui/themes";
import { BarChartIcon, CodeIcon, PlusIcon } from "@radix-ui/react-icons";
import useHttp from "../hooks/use-http";
import { toast } from "sonner";
import Project from "../types/Project.interface";
import dayjs from "dayjs";

const ProjectOverviewPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const { projectId } = useParams();
  const { isLoading, requestData } = useHttp();

  useEffect(() => {
    const getProjectDetails = async () => {
      const response = await requestData<Project>(`/projects/${projectId}`);
      if (response.isError) {
        const statusCode = response.error?.response?.status;
        if (statusCode === 400)
          return toast.error("Could not locate a project with the given ID");
      }
      setProject(response.data);
    };
    if (projectId) getProjectDetails();
  }, [projectId, requestData]);
  return (
    <>
      <Card>
        <div className="flex justify-between items-center p-5">
          <div className="flex gap-10 items-center flex-1 mr-3">
            <ColumnInfo loading={isLoading} title="Project Title">
              <Heading>{project?.title}</Heading>
            </ColumnInfo>
            <ColumnInfo loading={isLoading} title="Created On">
              <Heading>
                {dayjs(project?.createdAt).format("MMM DD, YYYY")}
              </Heading>
            </ColumnInfo>
            <ColumnInfo loading={isLoading} title="Teams">
              <div className="flex gap-1">
                <Avatar size="2" radius="full" fallback={<CodeIcon />} />
                <Avatar size="2" radius="full" fallback={<BarChartIcon />} />
              </div>
            </ColumnInfo>
          </div>
          <Button loading={isLoading} size="4">
            <PlusIcon /> Create Team
          </Button>
        </div>
      </Card>
      <div className="flex gap-3">
        <Card>
          <div className="flex flex-col gap-3">
            <Heading size="3">Project Progress</Heading>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProjectOverviewPage;
