import { toast } from "sonner";
import Input from "../components/Input";
import useHttp from "../hooks/use-http";
import AuthLayout from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Card, Heading, Text, Button, Link, Separator } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

const SigninPage = () => {
  const { control, handleSubmit } = useForm();
  const { isLoading, requestData } = useHttp();

  const authenticateUser: SubmitHandler<FieldValues> = async (
    credentials: FieldValues
  ) => {
    const response = await requestData("/users/auth", "POST", credentials);
    if (response.isError) {
      if (response.error.status === 401)
        return toast.error("Invalid email or password");
      toast.error(response.message);
    }
    toast.success("Logged in successfully!");
  };

  return (
    <AuthLayout>
      <Card>
        <form
          onSubmit={handleSubmit(authenticateUser)}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-2">
              <Heading size="5">Sign In</Heading>
            </div>
            <Text size="2" color="gray">
              Welcome back! Please enter your details to continue
            </Text>
          </div>
          <Input
            control={control}
            label="Email"
            name="email"
            type="email"
            startAdornment={<EnvelopeClosedIcon />}
          />
          <Input
            control={control}
            label="Password"
            name="password"
            type="password"
            startAdornment={<LockClosedIcon />}
          />
          <div className="flex justify-end">
            <Link asChild weight="medium" size="1">
              <RouterLink to="/signup">Forgot Password</RouterLink>
            </Link>
          </div>
          <Button type="submit" loading={isLoading}>
            <CheckCircledIcon />
            Sign In
          </Button>
          <Separator my="2" size="4" />
          <div className="flex items-center justify-center gap-1">
            <Text size="2">Don't have an account?</Text>
            <Link asChild weight="medium" size="2">
              <RouterLink to="/sign-up">Sign Up</RouterLink>
            </Link>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SigninPage;
