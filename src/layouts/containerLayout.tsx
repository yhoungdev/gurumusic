import { Box, Container } from "@mantine/core";
import { ReactNode } from "react";
const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Container size={"xl"}>{children}</Container>
    </Box>
  );
};

export default ContainerLayout;
