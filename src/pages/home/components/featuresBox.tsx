import { Box, Text } from "@mantine/core";
import { FC } from "react";
interface IProps {
  bg?: string;
  title: string;
  description: string;
  bgImage: string;
}

const FeaturesBox: FC<IProps> = ({ bg, title, description, bgImage }) => {
  return (
    <>
      <Box
        w={{
          base: "100%",
          md: "100%",
          lg: "610px",
        }}
        data-aos={"fade-up"}
      >
        <Box
          h={{
            base: "25vh",
            md: "25vh",
            lg: "30vh",
          }}
          sx={{
            borderRadius: "24px 24px 0 0",
          }}
          style={{
            backgroundImage: bgImage,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          c={"#fff"}
          p={"3em 1.5em"}
          bg={bg}
          sx={{
            borderRadius: "0 0  24px 24px",
          }}
        >
          <Text
            weight={"bold"}
            fz={{
              base: "20px",
              md: "25px",
              lg: "20px",
            }}
          >
            Strategy, transactions & transformation
          </Text>

          <Text my={"1em"}>
            You won’t find short-term fixes here. Instead, we work closely with
            our clients to understand the underlying causes of business
            challenges and resolve them with modern
          </Text>

          <Text>Learn More</Text>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesBox;
