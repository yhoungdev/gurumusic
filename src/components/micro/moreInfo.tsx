import ContainerLayout from "@/layouts/containerLayout";
import { Box, Text, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
const MoreInfo = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <Flex
      py={"4em"}
      justify={"center"}
      h={"95vh"}
      bg={"#101318"}
      px={"2em"}
      c={"#fff"}
      direction={{
        base: "column",
        md: "column",
        lg: "row-reverse",
      }}
      align={"center"}
      pos={"relative"}
    >
      <Box
        w={{
          base: "100%",
          md: "100%",
          lg: "50%",
        }}
      >
        <Box
          w={"200px"}
          h={{
            base: "200px",
            lg: "300px",
          }}
          pos={"absolute"}
          left={0}
          top={0}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            zIndex: "",
            backgroundImage:
              "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1683016494/gurumusic/collaboration-squiggly.b83cba51.svg_vqi03l.svg)",
          }}
        ></Box>
        <Text
          weight={"bold"}
          fz={{
            base: "40px",
            md: "30px",
            lg: "90px",
          }}
          align={isMobile ? "center" : "left"}
        >
          {" "}
          Artists speaks the most
        </Text>
      </Box>

      <Box
        w={{
          base: "100%",
          md: "100%",
          lg: "567px",
        }}
        h={"700.55px"}
        style={{
          backgroundRepeat: "no-repeat",

          backgroundImage:
            "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1683017069/gurumusic/Group_237786_nhe4h6.svg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          alignItems: "center",
        }}
      ></Box>
    </Flex>
  );
};
export default MoreInfo;
