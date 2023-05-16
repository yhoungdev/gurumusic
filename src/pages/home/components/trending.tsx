import { trending } from "@/data/trending";
import ContainerLayout from "@/layouts/containerLayout";
import MusicBox from "@/pages/essential/musicBox";
import { Text, Box, Flex, Avatar } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaDownload, FaPlay } from "react-icons/fa";

const MobileTreding = ({ name, title, cover }: any) => {
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      style={{
        borderBottom: "1px solid gray",
      }}
      pb={".8em"}
      my={"1em"}
    >
      <Flex gap={".7em"} align={"center"}>
        <Avatar src={cover} radius={"2em"} />
        <Text>{title} </Text>
      </Flex>

      <Flex gap={"1em"}>
        <FaPlay color="red" />
        <FaDownload color="red" />
      </Flex>
    </Flex>
  );
};

const TrendingOnHomepage = () => {
  const isMobile = useMediaQuery("(min-width:769px)");
  return (
    <ContainerLayout>
      <Text weight={"bold"} fz={"xl"} my={"2em"}>
        Trending Musics
      </Text>

      <Box
        display={{
          base: "block",
          lg: "none",
          md: "block",
        }}
      >
        {trending.map((items) => {
          return (
            <>
              <MobileTreding
                name={items.aritstName}
                title={items.title}
                cover={items.cover}
              />
            </>
          );
        })}
      </Box>

      <Box
        display={{
          base: "none",
          lg: "block",
          md: "none",
        }}
      >
        <Flex gap={"1.5em"} wrap={"wrap"}>
          {trending.map((items) => {
            return (
              <>
                <MusicBox
                  name={items.aritstName}
                  title={items.title}
                  cover={items.cover}
                />
              </>
            );
          })}
        </Flex>
      </Box>
    </ContainerLayout>
  );
};
export default TrendingOnHomepage;
