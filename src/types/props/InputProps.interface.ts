import { ReactNode } from "react";
import InputTypes from "../InputTypes.type";
import FormControlProps from "./FormControlProps.interface";

export default interface InputProps extends FormControlProps {
  type?: InputTypes;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
}
