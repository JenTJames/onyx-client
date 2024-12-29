export default interface FormProps {
    children: React.ReactNode;
    onSubmit: () => void;
    title?: string;
    description?: string
}