import { Skeleton, Text } from "@radix-ui/themes";
import ColumnInfoProps from "../types/props/ColumnInfoProps.interface";

const ColumnInfo: React.FC<ColumnInfoProps> = ({
  children,
  title,
  loading,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton loading={loading}>
        <Text className="uppercase" weight="medium" size="2" color="gray">
          {title}
        </Text>
      </Skeleton>
      <Skeleton loading={loading}>{children}</Skeleton>
    </div>
  );
};

export default ColumnInfo;
