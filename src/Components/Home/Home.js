import React from "react";
import NavBar from "../Navbar";
import NewsLetter from "../NewsLetter";
import AboutUs from "./AboutUs";
import BannerSec from "./BannerSec";
import HeroSec from "./HeroSec";
import PostBanner from "./PostBanner";
import PreHero from "./PreHero";

const Home = () => {
  return (
    <div>
      <NavBar />
      <PreHero />
      <HeroSec />
      <BannerSec />
      <PostBanner />
      <AboutUs />
      <NewsLetter />
    </div>
  );
};

export default Home;
