import SiteWrapper from "../layout/SiteWrapper";
import Navbar from "../layout/Navbar/Home/Navbar";
import Header from "../layout/Header";
import HomePreLoader from "../ui/HomePreLoader";
import { useEffect } from "react";
import { homeAnimation } from "../animations/homeAnimation";

const Home = () => {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <SiteWrapper>
      <HomePreLoader />
      <div className="flex flex-col items-center h-full w-full">
        <Navbar id="navbar" />
        <Header id="header" />
      </div>
    </SiteWrapper>
  );
};

export default Home;
