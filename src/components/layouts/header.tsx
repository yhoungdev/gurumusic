import { useState, useRef, useEffect } from "react";
import ContainerLayout from "@/layouts/containerLayout";
import { Box, Button, Drawer, Flex, List, Text } from "@mantine/core";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import ButtonInterface from "../micro/buttonInterface";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { largeView, smallView } from "@/utils/responsiveView";
import Logo from "../micro/logo";
import { useMediaQuery } from "@mantine/hooks";
import SignIn from "../popup_contents/auth_popup/signIn";
import SignUp from "../popup_contents/auth_popup/signUp";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // state to track whether sidebar is open
  const sidebarRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    //@ts-ignore
    function handleClickOutside(event) {
      //@ts-ignore
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);
  const navs = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Features",
      path: "/",
      submenu: [
        {
          title: "Pay as you go",
          path: "",
        },
        {
          title: "Power Me",
          path: "",
        },
        {
          title: "Use Internet",
          path: "",
        },
      ],
    },
    {
      title: "Home Service",
      path: "/",
      submenu: [
        {
          title: "Pay for me",
          path: "https://twitter.com/foreonnetwork",
        },
        {
          title: "Power Me",
          path: "",
        },
        {
          title: "Get agent",
          path: "",
        },
      ],
    },
    {
      title: "Partners",
      path: "/",
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // toggle sidebar state
  };

  const [hover, setHover] = useState<string>("none");

  const [opened, { open, close }] = useDisclosure(false);
  const [logged, { open: openLogin, close: closeLogin }] = useDisclosure(false);
  const [signed, { open: openSignin, close: closeSignin }] =
    useDisclosure(false);

  const sizeDrawer = isMobile ? "100%" : "md";
  const sizeSignUpDrawer = isMobile ? "100%" : "lg";
  return (
    <>
      <Box py={"1em"}>
        <ContainerLayout>
          <Box>
            <Flex align={"center"} py={"em"} justify={"space-between"}>
              <Box>
                <Logo />
              </Box>

              <Box display={{ ...largeView }}>
                <Flex align={"center"} gap={"1.2em"}>
                  <Text
                    sx={{
                      cursor: "pointer",
                      color: "black",
                    }}
                    onClick={openLogin}
                  >
                    Login
                  </Text>
                  <ButtonInterface onClick={openSignin}>
                    Create Account
                  </ButtonInterface>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </ContainerLayout>
      </Box>{" "}
      {/* open login drawer */}
      <Drawer
        opened={logged}
        onClose={closeLogin}
        position="right"
        size={sizeDrawer}
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <SignIn />
      </Drawer>
      <Drawer
        opened={signed}
        onClose={closeSignin}
        position="right"
        size={sizeSignUpDrawer}
        overlayProps={{ opacity: 0.5, blur: 5 }}
      >
        <SignUp />
      </Drawer>
      <Drawer opened={opened} onClose={close} size={sizeDrawer}>
        <List
          display="flex"
          sx={{
            flexDirection: "column",
            listStyleType: "none",
            justifyContent: "center",
            textAlign: "left",
            padding: "8em 1em",
            gap: "2em",
          }}
        >
          {navs.map(({ title, path }) => {
            return (
              <>
                <a href={path} className={"remove-link"}>
                  <Text
                    my={"1em"}
                    sx={{
                      cursor: "pointer",
                      color: "#22005D",
                    }}
                  >
                    {title}
                  </Text>
                </a>
              </>
            );
          })}
        </List>

        <Box>
          <Flex align={"center"} direction="column" gap={"1.2em"}>
            <Text
              sx={{
                cursor: "pointer",
              }}
              onClick={openLogin}
            >
              Login
            </Text>
            <ButtonInterface w={"100%"} onClick={openSignin}>
              Create Account
            </ButtonInterface>
          </Flex>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
