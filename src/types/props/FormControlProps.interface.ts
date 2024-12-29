import { Control, FieldValues } from "react-hook-form";

export default interface FormControlProps {
    name: string;
    label: string;
    control: Control<FieldValues>;
    rules?: object;
};