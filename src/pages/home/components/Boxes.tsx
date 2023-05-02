import { Box, Button, Text } from "@mantine/core";

const Boxes = () => {
  return (
    <>
      <Box
        my={"2em"}
        w={{
          base: "100%",
          lg: "380px",
        }}
        bg={"gray"}
        sx={{
          borderTop: "1em solid red",
        }}
        h={"371px"}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1681731164/homeowners/Rectangle_24_vxllbh.svg)",
        }}
        pos={"relative"}
      >
        <Box bg={"#000000ba"} px={"1em"} h={"100%"}>
          <Box pos={"absolute"} bottom={"1em"}>
            <Text c={"#fff"} my={"1em"}>
              You won’t find short-term fixes here. Instead, we work closely
              with our clients to understand the underlying
            </Text>

            <Button
              sx={{
                border: "1px solid white",
                background: "none",
              }}
            >
              {" "}
              Get Started{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Boxes;
