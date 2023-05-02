import ButtonInterface from "@/components/micro/buttonInterface";
import ContainerLayout from "@/layouts/containerLayout";
import { Box, Button, Flex, Text, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi";

const arrow = (
  <svg
    width="16"
    height="8"
    viewBox="0 0 16 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.375 0.875L15.5 4M15.5 4L12.375 7.125M15.5 4H0.5"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const btn = (
    <Button bg={"red"} size="lg" radius={"9999px"} mr={"3em"}>
      {isMobile ? <BiSearch /> : <BiSearch />}
    </Button>
  );
  return (
    <>
      <Box bg={"#F2FFF7"}>
        <ContainerLayout>
          <Flex
            justify={"center"}
            sx={{
              textAlign: "center",
            }}
            h={"80vh"}
            align={"center"}
          >
            <Box
              c={"#101318"}
              w={{ base: "100%", md: "80%", lg: "700px" }}
              my="2em"
            >
              <Text
                size={isMobile ? "30px" : "64px"}
                weight={"bold"}
                style={{
                  fontFamily: "var(--primary-font)",
                }}
              >
                Listen to sounds what you love
              </Text>
              <Text
                my={"1em"}
                style={{
                  fontFamily: "var(--primary-font)",
                }}
              >
                It&apos;s never been easier to find the best music{" "}
              </Text>

              <ButtonInterface px={"4em"} size="xl">
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1em",
                  }}
                >
                  {" "}
                  Get Started {arrow}
                </Box>
              </ButtonInterface>

              <Box></Box>
            </Box>
          </Flex>
        </ContainerLayout>
      </Box>
    </>
  );
};

export default Hero;
