import ContainerLayout from "@/layouts/containerLayout";
import { Box, Text, Flex, Button, Avatar } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "@mantine/hooks";
import { Itestimonies } from "@/types/mixedTypes";
import { FC } from "react";
import { testimoniesData } from "@/utils/datas";

const MoreInfo: FC<Itestimonies> = ({ title, body, src }) => {
  return (
    <Box
      bg={"#F6F6F6"}
      p={" 4em 1em"}
      sx={{
        borderRadius: "15px",
      }}
      w={{
        base: "100%",
        md: "100%",
        lg: "80%",
      }}
    >
      <Avatar size={"3em"} src={src} />

      <Text my={"1em"}>{body}</Text>

      <Text>{title}</Text>
    </Box>
  );
};

const ItemInformation = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <ContainerLayout>
        <Text
          my={"2em"}
          fz={{
            md: "20px",
            lg: "25px",
            base: "18px",
          }}
          weight={"500"}
        >
          What Homeowners are saying
        </Text>

        <Box my={"5em"} display={"flex"}>
          <Swiper
            slidesPerView={!isMobile ? 1 : 2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimoniesData.map(({ title, src, body }, index) => {
              return (
                <SwiperSlide key={index}>
                  <MoreInfo src={src} body={body} title={title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        <Flex
          data-aos={"fade-up"}
          my={"2em"}
          justify={"space-between"}
          align={"center"}
          gap={"2em"}
          direction={{
            base: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "468px",
            }}
          >
            <Text
              fz={{
                base: "25px",
                md: "20px",
                lg: "30px",
              }}
              weight={""}
            >
              Strategy, transactions & transformation
            </Text>

            <Text my={"0.5em"}>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknown
            </Text>

            <Button
              bg={"#FA3343"}
              sx={{
                borderRadius: "20px",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "600px",
            }}
            h={"600px"}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "cover",
              background:
                "url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1681731164/homeowners/Rectangle_24_vxllbh.svg)",
            }}
            sx={{
              borderRadius: "24px",
            }}
          ></Box>
        </Flex>
      </ContainerLayout>
    </>
  );
};

export default ItemInformation;
