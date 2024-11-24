import { useState } from "react";
import { Controller } from "react-hook-form";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import InputProps from "../types/props/InputProps.interface";
import { IconButton, Text, TextField } from "@radix-ui/themes";
import InputTypes from "../types/InputTypes.type";

const Input: React.FC<InputProps> = ({
  name,
  label,
  control,
  rules,
  type = "text",
  startAdornment,
  endAdornment,
}) => {
  const [inputType, setInputType] = useState<InputTypes>(type);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordVisibilityHandler = () => {
    setShowPassword((prevShowPassword) => {
      const newShowPassword = !prevShowPassword;
      setInputType(newShowPassword ? "text" : "password");
      return newShowPassword;
    });
  };

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
            type={inputType}
            size="3"
            placeholder={label}
            variant={fieldState.invalid ? "soft" : "surface"}
            color={fieldState.invalid ? "crimson" : "gray"}
          >
            {startAdornment && (
              <TextField.Slot side="left">{startAdornment}</TextField.Slot>
            )}
            {endAdornment && (
              <TextField.Slot side="right">{endAdornment}</TextField.Slot>
            )}
            {type === "password" && (
              <TextField.Slot side="right">
                <IconButton
                  type="button"
                  variant="ghost"
                  onClick={passwordVisibilityHandler}
                >
                  {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </IconButton>
              </TextField.Slot>
            )}
          </TextField.Root>
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

export default Input;
