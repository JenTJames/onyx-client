import { toast } from "sonner";
import Form from "../components/Form";
import useHttp from "../hooks/use-http";
import Input from "../components/Input";
import { Button } from "@radix-ui/themes";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
import { requiredInputMessage } from "../lib/globals";
import { FieldValues, useForm } from "react-hook-form";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const CreateProjectPage = () => {
  const { control, handleSubmit, setError } = useForm();
  const { isLoading, requestData } = useHttp();
  const navigate = useNavigate();

  const createProjectHandler = async (project: FieldValues) => {
    const response = await requestData<string>("/projects", "POST", project);
    if (response.isError) {
      if (response.error?.response?.status === 409)
        return setError("manual", {
          message: "Another project with the same title already exists.",
        });
      return toast.error(response.message);
    }
    toast.success("Project created successfully!");
    navigate("/projects");
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <Form
        description="Projects help you streamline collaboration by organizing teams,
              tasks, and goals in one place. They provide structure, clarity,
              and a centralized way to track progress, ensuring everyone stays
              aligned and focused on achieving success."
        title="Create a Project"
        onSubmit={handleSubmit(createProjectHandler)}
      >
        <Input
          control={control}
          label="Title"
          name="title"
          rules={{ required: requiredInputMessage }}
        />
        <TextArea
          control={control}
          label="Description"
          name="description"
          rows={20}
        />
        <Button loading={isLoading} size="3" type="submit">
          <CheckCircledIcon />
          Create Project
        </Button>
      </Form>
    </div>
  );
};

export default CreateProjectPage;
