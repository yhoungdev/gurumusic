//@ts-nocheck
import ContainerLayout from "@/layouts/containerLayout";
import { Box, Text, Flex } from "@mantine/core";
import FeaturesBox from "./featuresBox";
import Boxes from "./Boxes";

const Features = () => {
  interface Props {
    title: string;
    info: string;
    read: string;
    bg: string;
  }
  const data: Props = [
    {
      title: "",
      info: "",
      read: "",
      bg: "#442AAC",
      bgImage:
        "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1681839793/homeowners/francesca-tosolini-tHkJAMcO3QE-unsplash_pcpvva.jpg)",
    },
    {
      title: "",
      info: "",
      read: "",
      bg: "#07A560",
      bgImage:
        "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1681839767/homeowners/francesca-tosolini-XcVm8mn7NUM-unsplash_wdy9i7.jpg)",
    },
  ];

  const width = {
    base: "100%",
    md: "100%",
    lg: "650px",
  };
  return (
    <ContainerLayout>
      <Box my={"5em"} data-aos={"fade-up"}>
        <Text
          weight={"bold"}
          fz={{
            lg: "32px",
            md: "25px",
            base: "20px",
          }}
        >
          Featured Insights
        </Text>
        <Text my={"0.5em"} w={width}>
          You won’t find short-term fixes here. Instead, we work closely with
          our clients to understand the underlying causes of business challenges
          and resolve them with modern
        </Text>
      </Box>
      <Box>
        <Flex gap={"1.5em"} my={"2em"} wrap={"wrap"} justify={"space-between"}>
          {data.map((items, index) => {
            return (
              <FeaturesBox
                bgImage={items.bgImage}
                data-aos={"fade-up"}
                bg={items.bg}
                key={index}
              />
            );
          })}
        </Flex>
      </Box>

      <Box>
        <Box
          data-aos={"fade-up"}
          sx={{
            borderRadius: "32px",
          }}
          bg={"gray"}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1681685563/homeowners/sean-pollock-PhYq704ffdA-unsplash_p2f1l1.jpg)",
          }}
          my={"2em"}
          c={"white"}
        >
          <Box
            bg={"#000000b0"}
            py={"5em"}
            px={{ base: "2em", md: "3em", lg: "5em" }}
            h={"100%"}
            style={{
              borderRadius: "2em",
            }}
          >
            <Box
              bg={"red"}
              c={"#fff"}
              w={"fit-content"}
              p={".7em 1em"}
              sx={{ borderRadius: "20px" }}
              my={"1em"}
            >
              Our Potentials
            </Box>

            <Box
              w={{
                base: "100%",
                md: "100%",
                lg: "538px",
              }}
            >
              <Text
                size={"20px"}
                weight={"bold"}
                fz={{
                  base: "25px",
                  md: "25px",
                  lg: "45px",
                }}
              >
                How Plaz Premium Group Rashed Airport
              </Text>

              <Text my={".9em"} fz={"16px"}>
                You won’t find short-term fixes here. Instead, we work closely
                with our clients to understand the underlying causes of business
                challenges and resolve them with modern
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </ContainerLayout>
  );
};

export default Features;
