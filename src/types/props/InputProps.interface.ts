import { ReactNode } from "react";
import { Control, FieldValues } from "react-hook-form";
import InputTypes from "../InputTypes.type";

export default interface InputProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  rules?: object;
  type?: InputTypes;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
