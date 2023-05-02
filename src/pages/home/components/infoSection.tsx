import ContainerLayout from "@/layouts/containerLayout";
import { Box, Flex } from "@mantine/core";
import { ICardBox } from "@/types/mixedTypes";
import { ReactNode } from "react";
import InfoCards from "./infoCards";
import {
  CoSharing,
  MarketPlace,
  CaseVector,
  OtherVector,
} from "@/components/micro/vectors";
const datas: { src: ReactNode; title: string; body: string }[] = [
  {
    src: <CoSharing />,
    title: "Solutions",
    body: "Find fully furnished apartments suited to the duration of your stay, a few months or a couple of ye",
  },
  {
    src: <MarketPlace />,
    title: "Solutions",
    body: "Find fully furnished apartments suited to the duration of your stay, a few months or a couple of ye",
  },
  {
    src: <CaseVector />,
    title: "Solutions",
    body: "Find fully furnished apartments suited to the duration of your stay, a few months or a couple of ye",
  },

  {
    src: <OtherVector />,
    title: "Solutions",
    body: "Find fully furnished apartments suited to the duration of your stay, a few months or a couple of ye",
  },
];

const InfoSection = () => {
  return (
    <ContainerLayout>
      <Box my={"8em"}>
        <Flex wrap={"wrap"} data-aos={"fade-up"} gap={"1em"}>
          {datas.map(({ title, src, body }, index) => {
            return (
              <InfoCards
                data-aos={"fade-up"}
                src={src}
                title={title}
                body={body}
                key={index}
              />
            );
          })}
        </Flex>
      </Box>
    </ContainerLayout>
  );
};

export default InfoSection;
