import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
interface IProps {
  title: string;
  name: string;
  cover: string;
}
const MusicBox: FC<IProps> = ({ title, name, cover }) => {
  return (
    <Box
      bg="#1e1e1e"
      p={"1em"}
      style={{
        borderRadius: "10px",
      }}
      w={{
        base: "100%",
        lg: "300px",
      }}
    >
      <Box
        bg={"gray"}
        h={"200px"}
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        pos={"relative"}
      >
        <Box
          bg={"red"}
          p={"1em"}
          h={"3em"}
          my={"1em"}
          w={"fit-content"}
          style={{
            borderRadius: "0.8em",
            cursor: "pointer",
          }}
          pos={"absolute"}
          bottom={"-1.5em"}
          right={"1em"}
        >
          <FaPlay />
        </Box>
      </Box>

      <Box py={"1em"}>
        <Text my={"0.5em"} weight={"bold"}>
          {title}
        </Text>

        <Text>By {name}</Text>
      </Box>
    </Box>
  );
};

export default MusicBox;
