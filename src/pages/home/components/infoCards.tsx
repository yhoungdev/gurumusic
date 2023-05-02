import { ICardBox } from "@/types/mixedTypes";
import { Box, Text } from "@mantine/core";
import React, { FC } from "react";

const InfoCards: FC<ICardBox> = ({ src, title, body }) => {
  const styles = {};
  return (
    <Box
      w={{
        base: "80%",
        md: "100%",
        lg: "270px",
      }}
      px={"1em"}
      sx={{ ...styles }}
    >
      <Box my={"1em"}>
        <Box>{src}</Box>
        <Text weight={"bold"} c={"#1D1D1D"} my={"0.5em"}>
          {title}
        </Text>
        <Text c={"#1D1D1D"}>{body}</Text>
      </Box>
    </Box>
  );
};
export default InfoCards;
