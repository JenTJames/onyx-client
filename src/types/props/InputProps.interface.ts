import { ReactNode } from "react";
import { Control, FieldValues } from "react-hook-form";

export default interface InputProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  rules?: object;
  type?: "text" | "password" | "email";
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
