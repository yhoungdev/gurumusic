import Head from "next/head";
import { Inter } from "next/font/google";
import Homepage from "./home/homepage";
import Loader from "@/components/micro/loader";
import { useEffect, useState } from "react";
import { Box } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loader, setLoader] = useState("block");
  useEffect(() => {
    setTimeout(() => setLoader("none"), 2000);
  });
  return (
    <>
      <Head>
        <title>Guru Music</title>
        <meta name="description" content="Music is life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dhdqt4xwu/image/upload/v1683017716/gurumusic/photo_5947344122643855584_y-removebg-preview_gb5in1.png"
        />
      </Head>
      <Box display={loader}>
        <Loader />
      </Box>
      <Homepage />
    </>
  );
}
