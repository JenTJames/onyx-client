import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ColumnInfo from "../components/ColumnInfo";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import {
  BarChartIcon,
  CodeIcon,
  GearIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import useHttp from "../hooks/use-http";
import { toast } from "sonner";
import Project from "../types/Project.interface";
import dayjs from "dayjs";
import GaugeChart from "../components/charts/GaugeChart";
import LineChart from "../components/charts/LineChart";
import Datagrid from "../components/Datagrid";
import { ColumnDef } from "@tanstack/react-table";
import Team from "../types/Team.interface";

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

  const columns: ColumnDef<Team>[] = useMemo(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "Team ID",
      },
      {
        id: "teamLeader",
        accessorKey: "teamLeader.firstname",
        header: "Team Leader",
        cell: ({ row }) => {
          return (
            <div className="flex flex-col">
              <Text>
                {row.original.teamLeader.firstname}{" "}
                {row.original.teamLeader.lastname}
              </Text>
              <Text size="1">{row.original.teamLeader.email}</Text>
            </div>
          );
        },
      },
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
      },
      {
        id: "productivity",
        accessorKey: "productivity",
        header: "Productivity",
      },
      {
        id: "taskCompletionRate",
        accessorKey: "taskCompletionRate",
        header: "Task Completion Rate",
      },
    ],
    []
  );

  const data: Team[] = [
    {
      id: "TM-101",
      name: "Front End Team",
      productivity: 77,
      taskCompletionRate: 21,
      teamLeader: {
        id: 3,
        firstname: "Jane",
        lastname: "Doe",
        email: "jane.doe@onyx.com",
        phone: "7559023353",
      },
    },
    {
      id: "TM-105",
      name: "Backend Team",
      productivity: 89,
      taskCompletionRate: 43,
      teamLeader: {
        id: 3,
        firstname: "Dexter",
        lastname: "Morgan",
        email: "dexter.morgan@onyx.com",
        phone: "7559023353",
      },
    },
  ];

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
            <ColumnInfo loading={isLoading} title="Project Status">
              <Badge size="3" className="w-fit" color="jade">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--jade-9)] rounded-full"></span>
                  <Text>Active</Text>
                </div>
              </Badge>
            </ColumnInfo>
          </div>
          <div className="flex items-center gap-3">
            <Button loading={isLoading} size="3">
              <PlusIcon /> Create Team
            </Button>
            <IconButton variant="soft" size="3">
              <GearIcon />
            </IconButton>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card>
          <div className="flex flex-col w-full h-full gap-3">
            <Heading size="3">Project Progress</Heading>
            <GaugeChart value={81} label="Completed" />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col w-full h-full gap-3">
            <Heading size="3">Average Productivity</Heading>
            <GaugeChart value={94} label="Productive" />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col w-full h-full gap-3">
            <Heading size="3">Task Completion Rate (Past 7 days)</Heading>
            <LineChart
              dataPoints={[11, 14, 16, 13, 12, 10, 15]}
              title="Tasks Completed"
              labels={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col w-full h-full gap-3">
            <Heading size="3">Task Overview</Heading>
            <div className="flex items-center justify-center w-full h-full">
              <div className="grid grid-cols-2 place-content-center gap-5">
                <ColumnInfo title="Total Open Tasks" loading={false}>
                  <Heading size="8">71</Heading>
                </ColumnInfo>
                <ColumnInfo title="Total Closed Tasks" loading={false}>
                  <Heading size="8">24</Heading>
                </ColumnInfo>
                <ColumnInfo title="Total Breached Tasks" loading={false}>
                  <Heading size="8">7</Heading>
                </ColumnInfo>
                <ColumnInfo title="Total Unassigned Tasks" loading={false}>
                  <Heading size="8">14</Heading>
                </ColumnInfo>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex flex-col w-full h-full gap-3">
          <Heading size="3">Team Details</Heading>
          <Datagrid columns={columns} data={data} />
        </div>
      </Card>
    </>
  );
};

export default ProjectOverviewPage;
