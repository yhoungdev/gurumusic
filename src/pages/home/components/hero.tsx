import ButtonInterface from "@/components/micro/buttonInterface";
import ContainerLayout from "@/layouts/containerLayout";
import Search from "@/pages/essential/search";
import { Box, Button, Flex, Text, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi";
import { FiDownload, FiUploadCloud } from "react-icons/fi";

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
      <Box>
        <ContainerLayout>
          <Flex
            justify={"center"}
            sx={{
              textAlign: "center",
            }}
            h={"60vh"}
            align={"center"}
          >
            <Box
              c={"white"}
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
                Listen to sounds that you love
              </Text>
              <Text
                my={"1em"}
                style={{
                  fontFamily: "var(--primary-font)",
                }}
              >
                It&apos;s never been easier to find the best music{" "}
              </Text>

              <Box my={"2em"}>
                <Search />
              </Box>

              <Flex
                gap={"1em"}
                justify={"center"}
                direction={{
                  base: "column",
                  lg: "row",
                }}
              >
                <ButtonInterface px={"4em"} size="xl">
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                    }}
                  >
                    {" "}
                    Download <FiDownload size={"1.5em"} />
                  </Box>
                </ButtonInterface>

                <ButtonInterface px={"4em"} size="xl">
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                    }}
                  >
                    {" "}
                    Upload <FiUploadCloud size={"1.5em"} />
                  </Box>
                </ButtonInterface>
              </Flex>
            </Box>
          </Flex>
        </ContainerLayout>
      </Box>
    </>
  );
};

export default Hero;
