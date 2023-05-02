import ButtonInterface from "@/components/micro/buttonInterface";
import AuthLayout from "@/layouts/authLayout";
import { Flex, Text, Button, TextInput } from "@mantine/core";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "@mantine/form";
import GoogleButton from "@/components/micro/googleButton";

const SignUp = () => {
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
      phone_number: "",
      password: "",
      first_name: "",
      last_name: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone_number: (value) => {
        console.log("Phone number input:", value);
        const isValid = /^(070|071|080|081|090|091)\d{8}$/.test(value.trim());
        console.log("Phone number validation:", isValid);
        return isValid ? null : "Please enter a valid phone number";
      },
      password: (value) => {
        if (value === "") {
          return "Password is required";
        } else if (value.length < 5) {
          return "Password must be at least 5 characters";
        } else {
          return null;
        }
      },
      first_name: (value) => {
        if (!/^[a-zA-Z]+$/.test(value.trim())) {
          return "First name should only contain letters";
        } else if (value.trim().length < 3) {
          return "First name is too short";
        } else if (/\s/.test(value)) {
          return "First name should not contain spaces";
        } else {
          return null;
        }
      },
      last_name: (value) => {
        if (!/^[a-zA-Z]+$/.test(value.trim())) {
          return "Last name should only contain letters";
        } else if (value.trim().length < 3) {
          return "Last name is too short";
        } else if (/\s/.test(value)) {
          return "Last name should not contain spaces";
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
      headline="Welcome to Home Owners👋"
      info="Lets onboard you today"
    >
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"} gap={"1em"}>
          <Flex
            gap={"1em"}
            direction={{
              base: "column",
              md: "row",
              lg: "row",
            }}
          >
            <TextInput
              placeholder="Home"
              label="First Name"
              type="text"
              size="lg"
              radius={"md"}
              withAsterisk
              {...form.getInputProps("first_name")}
            />

            <TextInput
              placeholder="Owner"
              label="Last Name"
              type="text"
              size="lg"
              radius={"md"}
              withAsterisk
              {...form.getInputProps("last_name")}
            />
          </Flex>

          <TextInput
            placeholder="examle@gmail.com"
            label="Email"
            type="email"
            size="lg"
            radius={"md"}
            withAsterisk
            {...form.getInputProps("email")}
          />

          <TextInput
            placeholder="08000000000"
            label="Phone Number"
            type="number"
            size="lg"
            radius={"md"}
            withAsterisk
            {...form.getInputProps("phone_number")}
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

          <ButtonInterface type={"submit"} size="lg" rounded={"lg"} w="100%">
            Create Account
          </ButtonInterface>
          <Text align="center">
            Already had an account?{" "}
            <span
              onClick={() => {}}
              style={{ color: "red", cursor: "pointer" }}
            >
              Signin
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
      <GoogleButton info={"Sign up with Google"} />
    </AuthLayout>
  );
};

export default SignUp;
