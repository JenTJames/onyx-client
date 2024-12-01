import {
  Avatar,
  Badge,
  Button,
  Card,
  Heading,
  Progress,
  Separator,
  Text,
} from "@radix-ui/themes";
import ProjectSummaryProps from "../types/props/ProjectSummaryProps.interface";
import { BackpackIcon } from "@radix-ui/react-icons";

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project }) => {
  return (
    <Card className="w-full h-[17rem]">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <Heading size="4">{project.title}</Heading>
            <Badge color="lime" className="w-fit">
              {project.id}
            </Badge>
          </div>
          <Avatar radius="full" fallback={<BackpackIcon />} />
        </div>
        <Text className="line-clamp-6" size="2" color="gray">
          {project.description ? project.description : "No Description found"}
        </Text>
        <Separator size="4" />
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col w-full gap-1">
            <Text size="1" weight="medium">
              Progress
            </Text>
            <Progress value={project.progress} />
          </div>
          <Button variant="soft">View More</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectSummary;
