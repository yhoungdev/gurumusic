import ContainerLayout from "@/layouts/containerLayout";
import { footerNavs } from "@/utils/navigationItems";
import { Box, Flex, List, Text } from "@mantine/core";

import {
  companyNavs,
  aboutNavs,
  resourceNav,
  supportNav,
} from "@/utils/footerList";
import Link from "next/link";
const Footer = () => {
  return (
    <ContainerLayout>
      <Flex
        mt={{
          base: "5em",
          md: "4em",
          lg: "9em",
        }}
        pb={"1em"}
        justify={"space-between"}
        direction={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={"1em"}
      >
        <Box>
          <Text weight={500}>Company</Text>
          {companyNavs.map((items) => {
            return (
              <>
                <List
                  py={".5em"}
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={items.path}>
                    <List.Item c={"#1D1D1DCC"}>{items.title}</List.Item>
                  </Link>
                </List>
              </>
            );
          })}
        </Box>

        <Box>
          <Text weight={500}>Supports</Text>
          {supportNav.map((items) => {
            return (
              <>
                <List
                  py={".5em"}
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={items.path}>
                    <List.Item c={"#1D1D1DCC"}>{items.title}</List.Item>
                  </Link>
                </List>
              </>
            );
          })}
        </Box>

        <Box>
          <Text weight={500}>Benefits</Text>
          {aboutNavs.map((items) => {
            return (
              <>
                <List
                  py={".5em"}
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={items.path}>
                    <List.Item c={"#1D1D1DCC"}>{items.title}</List.Item>
                  </Link>
                </List>
              </>
            );
          })}
        </Box>

        <Box>
          <Text weight={500}>Contact</Text>
          {resourceNav.map((items) => {
            return (
              <>
                <List
                  py={".5em"}
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={items.path}>
                    <List.Item c={"#1D1D1DCC"}>{items.title}</List.Item>
                  </Link>
                </List>
              </>
            );
          })}
        </Box>
      </Flex>
    </ContainerLayout>
  );
};
export default Footer;
