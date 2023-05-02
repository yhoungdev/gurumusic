import { trending } from "@/data/trending";
import ContainerLayout from "@/layouts/containerLayout";
import MusicBox from "@/pages/essential/musicBox";
import { Text, Box, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
const TrendingOnHomepage = () => {
  const isMobile = useMediaQuery("(min-width:769px)");
  return (
    <ContainerLayout>
      <Text weight={"bold"} fz={"xl"} my={"2em"}>
        Trending Musics
      </Text>

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
    </ContainerLayout>
  );
};
export default TrendingOnHomepage;
