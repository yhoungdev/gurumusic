import ButtonInterface from "@/components/micro/buttonInterface";
import AuthLayout from "@/layouts/authLayout";
import { Flex, Text, Button, TextInput } from "@mantine/core";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "@mantine/form";
import GoogleButton from "@/components/micro/googleButton";

const SignIn = () => {
  const [hide, show] = useState(true);
  const serverInput = hide ? "password" : "text";

  const toggleIcon = hide ? (
    <AiOutlineEye
      size={"1.3em"}
      onClick={() => show(false)}
      cursor={"pointer"}
    />
  ) : (
    <AiOutlineEyeInvisible
      size={"1.3em"}
      onClick={() => show(true)}
      cursor={"pointer"}
    />
  );

  //validate form inputs
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => {
        if (value === "") {
          return "Password is required";
        } else if (value.length < 5) {
          return "Password must be at least 5 characters";
        } else {
          return null;
        }
      },
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    console.log(values);
  });

  return (
    <AuthLayout
      headline="Welcome Back 👋"
      info="Sign into your Home Owners account to continue"
    >
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"} gap={"1em"}>
          <TextInput
            placeholder="examle@gmail.com"
            label="Email"
            size="lg"
            radius={"md"}
            {...form.getInputProps("email")}
          />
          <TextInput
            type={serverInput}
            placeholder="********"
            label="Password"
            size="lg"
            radius={"md"}
            rightSection={toggleIcon}
            {...form.getInputProps("password")}
          />
          <Flex justify={"space-between"}>
            <Text>Forgotten password ?</Text>
            <Text
              sx={{
                cursor: "pointer",
              }}
              c={"red"}
              weight={600}
            >
              Reset
            </Text>
          </Flex>
          <ButtonInterface type={"submit"} size="lg" rounded={"lg"} w="100%">
            Login
          </ButtonInterface>
          <Text align="center">
            Don&apos;t have an Accout?{" "}
            <span
              onClick={() => {}}
              style={{ color: "red", cursor: "pointer" }}
            >
              Signup
            </span>
          </Text>
        </Flex>
      </form>

      <Flex my="1.5em" align="center">
        <hr style={{ flex: 1, height: "1px", backgroundColor: "#c4c4c4" }} />
        <Text mx="0.5em" size="md" weight={600}>
          OR
        </Text>
        <hr style={{ flex: 1, height: "1px", backgroundColor: "#c4c4c4" }} />
      </Flex>
      <GoogleButton info={"Sign in with Google"} />
    </AuthLayout>
  );
};

export default SignIn;
