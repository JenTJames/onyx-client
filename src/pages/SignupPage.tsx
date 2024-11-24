import { toast } from "sonner";
import useHttp from "../hooks/use-http";
import Input from "../components/Input";
import AuthLayout from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { requiredInputMessage } from "../lib/globals";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Card, Heading, Link, Separator, Text } from "@radix-ui/themes";

const SignupPage = () => {
  const { control, handleSubmit, setError } = useForm();

  const { isLoading, requestData } = useHttp();

  const createUserHandler: SubmitHandler<FieldValues> = async (
    userData: FieldValues
  ) => {
    const response = await requestData("/users", "POST", userData);
    if (response.isError) {
      if (response.error.status === 409) {
        switch (response.error.response.data.message.toUpperCase()) {
          case "EMAIL_TAKEN":
            setError("email", {
              type: "manual",
              message: "Email already in use",
            });
            return;
          case "PHONE_TAKEN":
            setError("phone", {
              type: "manual",
              message: "Phone already in use",
            });
            return;
          default:
            return toast.error("An error occured while creating the account");
        }
      } else return toast.error(response.message);
    }
    toast.success("Account created successfully!");
  };

  return (
    <AuthLayout>
      <Card>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(createUserHandler)}
        >
          <div className="flex justify-center gap-2">
            <Heading size="5" weight="bold">
              Sign Up
            </Heading>
          </div>
          <Text size="2" color="gray">
            We are happy to have you on board! Enter your details to continue
          </Text>
          <div className="flex items-start gap-1">
            <Input
              control={control}
              label="Firstname"
              name="firstname"
              rules={{
                required: requiredInputMessage,
              }}
              type="text"
            />
            <Input
              control={control}
              label="Lastname"
              name="lastname"
              rules={{
                required: requiredInputMessage,
              }}
              type="text"
            />
          </div>
          <Input
            control={control}
            label="Phone Number"
            name="phone"
            rules={{
              required: requiredInputMessage,
            }}
            type="tel"
          />
          <Input control={control} label="Email" name="email" type="email" />
          <Input
            control={control}
            label="Password"
            name="password"
            rules={{
              required: requiredInputMessage,
            }}
            type="password"
          />
          <Button type="submit" loading={isLoading}>
            <CheckCircledIcon />
            Sign Up
          </Button>
          <Separator my="2" size="4" />
          <div className="flex items-center justify-center gap-1">
            <Text size="2">Already have an account?</Text>
            <Link asChild weight="medium" size="2">
              <RouterLink to="/sign-in">Sign In</RouterLink>
            </Link>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignupPage;
