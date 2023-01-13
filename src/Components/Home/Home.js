import React from "react";
import NavBar from "../Navbar";
import NewsLetter from "../NewsLetter";
import AboutUs from "./AboutUs";
import BannerSec from "./BannerSec";
import HeroSec from "./HeroSec";
import PostBanner from "./PostBanner";
import PreHero from "./PreHero";
import Container from "../Container";
const Home = () => {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>
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
