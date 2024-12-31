import {
  Avatar,
  Badge,
  Button,
  Card,
  Heading,
  Progress,
  Separator,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import { BackpackIcon } from "@radix-ui/react-icons";
import SummaryCardProps from "../types/props/SummaryCardProps";

const SummaryCard: React.FC<SummaryCardProps> = ({
  id,
  description,
  title,
  loading,
  progress,
}) => {
  return (
    <Card className="w-full h-[17rem]">
      <div className="flex flex-col h-full gap-3">
        <div className="flex justify-between items-center flex-1">
          <div className="flex flex-col gap-1">
            <Skeleton minWidth="125px" minHeight="20px" loading={loading}>
              <Heading size="4">{title}</Heading>
            </Skeleton>
            <Skeleton minWidth="100px" minHeight="20px" loading={loading}>
              <Badge color="lime" className="w-fit">
                {id}
              </Badge>
            </Skeleton>
          </div>
          <Skeleton loading={loading}>
            <Avatar radius="full" fallback={<BackpackIcon />} />
          </Skeleton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Skeleton minWidth="100%" minHeight="130px" loading={loading}>
            <Text className="line-clamp-6" size="2" color="gray">
              {description ? description : "No Description found"}
            </Text>
          </Skeleton>
        </div>
        <Skeleton loading={loading}>
          <Separator size="4" />
        </Skeleton>
        <div className="flex justify-between items-center gap-5 flex-0">
          <div className="flex flex-col w-full gap-1">
            <Skeleton loading={loading}>
              <Text size="1" weight="medium">
                Progress
              </Text>
              <Progress value={progress} />
            </Skeleton>
          </div>
          <Skeleton loading={loading}>
            <Button variant="soft">View More</Button>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
};

export default SummaryCard;
