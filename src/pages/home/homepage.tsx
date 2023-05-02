import Header from "@/components/layouts/header";
import Hero from "./components/hero";
import Footer from "@/components/layouts/footer";
import InfoBox from "@/components/micro/infoBlock";
import MoreInfo from "@/components/micro/moreInfo";
import ArtistInfo from "./components/artistInfo";
const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <InfoBox />
      <MoreInfo />
      <ArtistInfo />

      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
