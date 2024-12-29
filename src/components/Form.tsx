import { Card, Heading, Text } from "@radix-ui/themes";
import FormProps from "../types/props/FormProps.interface";

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  title,
  description,
}) => {
  return (
    <div className="flex gap-3 flex-1">
      {title && description && (
        <Card className=" bg-[url(/assets/images/card-bg.svg)] bg-no-repeat bg-cover">
          <div className="flex flex-col size-full justify-center items-center gap-3 max-h-full">
            <Heading size="7">{title}</Heading>
            <Text align="center" className="w-3/4" color="gray" size="3">
              {description}
            </Text>
          </div>
        </Card>
      )}
      <form className="size-full flex flex-col gap-3" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
