import { Flex, Box, Text } from "@mantine/core";
import { FC, ReactNode } from "react";

type TAuth = {
  children: ReactNode;
  headline: string;
  info: string;
};
const AuthLayout: FC<TAuth> = ({ headline, children, info }) => {
  return (
    //@ts-ignonre
    <Flex direction={"column"} h={"100vh"} justify={"center"}>
      <Box>
        <Text weight={"600"} fz={"25px"}>
          {headline}
        </Text>
        <Text>{info}</Text>
      </Box>
      <Box my={"2em"}>{children}</Box>
    </Flex>
  );
};

export default AuthLayout;
