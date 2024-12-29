import FormProps from "../types/props/FormProps.interface";

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className="w-full flex flex-col gap-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
