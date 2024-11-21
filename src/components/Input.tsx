import InputType from "../types/Input.interface";
import { Controller } from "react-hook-form";
import { Text, TextField } from "@radix-ui/themes";

const Input: React.FC<InputType> = ({
  name,
  label,
  control,
  rules,
  type,
  startAdornment,
  endAdornment,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1 w-full">
          <TextField.Root
            {...field}
            type={type ? type : "text"}
            size="3"
            placeholder={label}
            variant={fieldState.invalid ? "soft" : "surface"}
            color={fieldState.invalid ? "crimson" : "gray"}
          >
            {startAdornment && (
              <TextField.Slot side="left">{startAdornment}</TextField.Slot>
            )}
            {endAdornment && (
              <TextField.Slot side="left">{endAdornment}</TextField.Slot>
            )}
          </TextField.Root>
          {fieldState.invalid && (
            <Text color="crimson" weight="light" size="2">
              {fieldState.error?.message}
            </Text>
          )}
        </div>
      )}
    />
  );
};

export default Input;
