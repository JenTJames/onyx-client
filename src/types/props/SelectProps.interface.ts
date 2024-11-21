import Option from "../Option.interface";
import { Responsive } from "@radix-ui/themes/props";
import { Control, FieldValues } from "react-hook-form";

export default interface SelectProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  rules?: object;
  options: Array<Option>;
  size: Responsive<"2" | "1" | "3"> | undefined;
}
