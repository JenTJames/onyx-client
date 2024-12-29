import { Controller } from "react-hook-form";
import { Text, TextArea as RadixTextArea } from "@radix-ui/themes";
import TextAreaProps from "../types/props/TextAreaProps.interface";

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  control,
  rules,
  rows = 15,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1 w-full">
          <RadixTextArea
            {...field}
            size="3"
            placeholder={label}
            variant={fieldState.invalid ? "soft" : "surface"}
            color={fieldState.invalid ? "crimson" : "gray"}
            rows={rows}
          />
          {fieldState.invalid && (
            <Text color="crimson" size="1">
              {fieldState.error?.message}
            </Text>
          )}
        </div>
      )}
    />
  );
};

export default TextArea;
