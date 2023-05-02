import ButtonInterface from "@/components/micro/buttonInterface";
import ContainerLayout from "@/layouts/containerLayout";
import { Box, Text, Flex, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const ArtistInfo = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <>
      <Box bg={"#0DBA63"} pt={"8em"} c={"#fff"} pos={"relative"}>
        <ContainerLayout>
          <Text
            fz={{
              base: "30px",
              md: "30px",
              lg: "52px",
            }}
            w={{
              base: "90%",
              md: "100%",
              lg: "40%",
            }}
            weight={"bolder"}
            data-aos={"fade-up"}
            align={isMobile ? "center" : "left"}
          >
            Create an Artist Account{" "}
          </Text>

          <Box display={isMobile ? "none" : "block"}>
            <Button size="md" px={"3em"} bg={"black"} radius={"xl"}>
              Continue
            </Button>
          </Box>

          <Flex
            pos={"relative"}
            bottom={0}
            mt={"6em"}
            direction={{
              base: "column-reverse",
              md: "column",
              lg: "row",
            }}
            gap={"2em"}
            justify={"center"}
          >
            <Box
              w={{
                base: "100%",
                lg: "50%",
              }}
              data-aos={"fade-up"}
              h={"50vh"}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundImage:
                  "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1683022180/gurumusic/div_1_fs0wxi.svg)",
              }}
            ></Box>
            <Box
              w={{
                base: "100%",
                lg: "30%",
              }}
              style={{
                textAlign: isMobile ? "center" : "left",
              }}
              px={"2em"}
              data-aos={"fade-up"}
              fz={{
                base: "18px",
                lg: "22px",
              }}
            >
              <Text>Create account, listten and stream good sounds,</Text>

              <Text my={"1em"}>
                {" "}
                Artist can upload and earn from guru music Good Music is made
              </Text>
            </Box>
          </Flex>
        </ContainerLayout>
      </Box>
    </>
  );
};
export default ArtistInfo;
