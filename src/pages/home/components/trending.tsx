import { trending } from "@/data/trending";
import ContainerLayout from "@/layouts/containerLayout";
import MusicBox from "@/pages/essential/musicBox";
import { Text, Box, Flex, Avatar } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaDownload, FaPlay } from "react-icons/fa";
import { useRouter } from "next/router";
const MobileTreding = ({ name, title, cover, url }: any) => {
  const router = useRouter();
  function downloadFile(url: any) {
    if (typeof document !== "undefined") {
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Handle server-side download
      // router.push(url);
    }
  }

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
        {/* @ts-ignore */}

        <a href={url} rel="noopener noreferrer" download>
          <FaDownload color="red" />
        </a>
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
                url={items.sound}
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
