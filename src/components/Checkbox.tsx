import { Controller } from "react-hook-form";
import CheckboxProps from "../types/props/CheckboxProps.interface";
import { Text, Checkbox as RadixUICheckbox, Flex } from "@radix-ui/themes";

const Checkbox: React.FC<CheckboxProps> = ({ label, control, name, rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <Text
            as="label"
            size="2"
            color={fieldState.invalid ? "crimson" : "gray"}
          >
            <Flex gap="2">
              <RadixUICheckbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              {label}
            </Flex>
          </Text>
        );
      }}
    />
  );
};

export default Checkbox;
