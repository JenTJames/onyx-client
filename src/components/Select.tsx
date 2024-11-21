import { Controller } from "react-hook-form";
import SelectProps from "../types/props/SelectProps.interface";
import { Select as RadixUISelect, Text } from "@radix-ui/themes";

const Select: React.FC<SelectProps> = ({
  name,
  label,
  control,
  rules,
  options = [],
  size,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1 w-full">
          <RadixUISelect.Root
            size={size}
            onValueChange={(value) => {
              // pass only the id or unique identifier of the selected option
              return field.onChange(value);
            }}
            value={field.value} // Ensure field.value is a primitive value like 'id'
          >
            <RadixUISelect.Trigger
              placeholder={label}
              variant={fieldState.invalid ? "soft" : "surface"}
              color={fieldState.invalid ? "crimson" : "gray"}
            />
            <RadixUISelect.Content>
              {options.map((option) => (
                <RadixUISelect.Item key={option.id} value={option.id}>
                  {option.name}
                </RadixUISelect.Item>
              ))}
            </RadixUISelect.Content>
          </RadixUISelect.Root>
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

export default Select;
