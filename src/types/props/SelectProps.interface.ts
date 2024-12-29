import Option from "../Option.interface";
import { Responsive } from "@radix-ui/themes/props";
import FormControlProps from "./FormControlProps.interface";

export default interface SelectProps extends FormControlProps {
  options: Array<Option>;
  size: Responsive<"2" | "1" | "3"> | undefined;
}
