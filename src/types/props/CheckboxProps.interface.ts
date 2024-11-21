import { Control, FieldValues } from "react-hook-form";

export default interface CheckboxProps {
  label: string;
  control: Control<FieldValues>;
  name: string;
  rules: object;
}
