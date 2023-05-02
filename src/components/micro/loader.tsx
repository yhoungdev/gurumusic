import { Box, Flex } from "@mantine/core";
import Image from "next/image";
const Loader = () => {
  return (
    <Box
      pos={"fixed"}
      top={0}
      bottom={0}
      left={0}
      right={0}
      style={{
        zIndex: "1",
      }}
    >
      <Flex
        bg={"#0F1010"}
        justify={"center"}
        align={"center"}
        h={"100vh"}
        w={"100vw"}
      >
        <Box>
          <Image
            alt={"Logo"}
            width={100}
            height={100}
            src={
              "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1683017716/gurumusic/photo_5947344122643855584_y-removebg-preview_gb5in1.png"
            }
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default Loader;
